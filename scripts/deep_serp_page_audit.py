#!/usr/bin/env python3
from pathlib import Path
from urllib.parse import urlparse, urljoin
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor, as_completed
import csv, json, re, time, html as ihtml
import requests

ROOT = Path('/home/mcgui/simplufy-website-2026')
INPUT = ROOT / 'research' / 'transactional-keyword-serp-results.csv'
OUT_CSV = ROOT / 'research' / 'top5-google-serp-page-deep-audit.csv'
OUT_JSON = ROOT / 'research' / 'top5-google-serp-page-deep-audit.json'
OUT_MD = ROOT / 'research' / 'top5-google-serp-page-deep-audit.md'

UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Safari/537.36'
SKIP_DOMAINS = {'youtube.com','www.youtube.com','facebook.com','www.facebook.com','linkedin.com','www.linkedin.com','business.facebook.com','business.meta.com'}

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_script=False; self.in_style=False; self.in_title=False
        self.current_heading=None
        self.current_link_href=None
        self.title=[]; self.meta=[]; self.links=[]; self.headings=[]; self.text=[]; self.jsonld=[]; self.scripts=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs)
        t=tag.lower()
        if t=='script':
            self.in_script=True
            self.script_type=(attrs.get('type') or '').lower()
            self._script=[]
        elif t=='style': self.in_style=True
        elif t=='title': self.in_title=True
        elif t in ['h1','h2','h3','h4']:
            self.current_heading=[t, []]
        elif t=='meta':
            name=(attrs.get('name') or attrs.get('property') or '').lower()
            content=attrs.get('content') or ''
            if name or content: self.meta.append((name, content))
        elif t=='a':
            self.current_link_href=attrs.get('href') or ''
            self._link_text=[]
    def handle_endtag(self, tag):
        t=tag.lower()
        if t=='script':
            if getattr(self,'script_type','')=='application/ld+json':
                self.jsonld.append(''.join(getattr(self,'_script',[])))
            self.in_script=False
        elif t=='style': self.in_style=False
        elif t=='title': self.in_title=False
        elif t in ['h1','h2','h3','h4'] and self.current_heading:
            level, parts=self.current_heading
            txt=clean(' '.join(parts))
            if txt: self.headings.append((level, txt))
            self.current_heading=None
        elif t=='a' and self.current_link_href is not None:
            txt=clean(' '.join(getattr(self,'_link_text',[])))
            self.links.append((self.current_link_href, txt))
            self.current_link_href=None
    def handle_data(self, data):
        if self.in_script:
            if getattr(self,'script_type','')=='application/ld+json': self._script.append(data)
            return
        if self.in_style: return
        if self.in_title: self.title.append(data)
        if self.current_heading: self.current_heading[1].append(data)
        if self.current_link_href is not None: self._link_text.append(data)
        if data and data.strip(): self.text.append(data)

def clean(s):
    return re.sub(r'\s+', ' ', ihtml.unescape(s or '')).strip()

def get_meta(parser, keys):
    for name, content in parser.meta:
        if name in keys and content: return clean(content)
    return ''

def classify(url, title, text, headings):
    u=url.lower(); t=(title+' '+text[:2000]+' '+' '.join(h for _,h in headings[:8])).lower()
    if any(x in u for x in ['/blog','/resources','/guide','/article']) or any(w in t for w in ['complete guide','ultimate guide','step-by-step','how to','tips','strategies']):
        if any(w in t for w in ['best ','top 10','reviewed','ranked','agencies','tools']): return 'listicle/comparison guide'
        return 'blog/educational guide'
    if any(w in t for w in ['pricing','plans','package','book a demo','get started','request a quote','schedule a call','services']):
        return 'commercial service landing page'
    if any(w in t for w in ['software','platform','app','crm','dashboard']): return 'SaaS/product page'
    return 'mixed/commercial page'

def signals(text, headings, jsonld):
    low=text.lower(); heads=' | '.join(h for _,h in headings).lower(); alltxt=low+' '+heads
    return {
        'has_pricing_cost': bool(re.search(r'\b(price|pricing|cost|budget|spend|package|plans?)\b', alltxt)),
        'has_faq': ('faq' in alltxt or 'frequently asked' in alltxt or 'FAQPage' in ''.join(jsonld)),
        'has_case_study_proof': bool(re.search(r'\b(case stud|results?|roi|roas|leads?|conversion|testimonial|reviews?|before|after|portfolio)\b', alltxt)),
        'has_clear_cta': bool(re.search(r'\b(book|schedule|request|contact|get a quote|get started|demo|consultation|audit|call now)\b', alltxt)),
        'has_step_process': bool(re.search(r'\b(step|process|how it works|strategy|framework|checklist)\b', alltxt)),
        'mentions_ai_aeo_geo': bool(re.search(r'\b(ai|aeo|geo|answer engine|generative engine|chatgpt)\b', alltxt)),
        'mentions_google_ads_lsa': bool(re.search(r'\b(google ads|ppc|local service ads|lsa)\b', alltxt)),
        'mentions_crm_automation': bool(re.search(r'\b(crm|automation|follow[- ]?up|pipeline|gohighlevel|highlevel)\b', alltxt)),
    }

def extract_copy_notes(text, headings):
    h2=[h for lvl,h in headings if lvl=='h2'][:10]
    h1=[h for lvl,h in headings if lvl=='h1'][:3]
    low=text.lower()
    tone=[]
    if re.search(r'\bcomplete guide|ultimate guide|step-by-step|how to\b', low): tone.append('guide-led/educational')
    if re.search(r'\bget more leads|grow|revenue|roi|booked|customers\b', low): tone.append('results-led')
    if re.search(r'\bwe help|our team|agency|services\b', low): tone.append('agency/commercial')
    if re.search(r'\bbest|top|reviewed|ranked\b', low): tone.append('comparison/listicle')
    if re.search(r'\bprice|cost|pricing|budget\b', low): tone.append('cost-aware')
    if not tone: tone.append('general informational')
    return {
        'h1_examples': ' | '.join(h1),
        'h2_examples': ' | '.join(h2),
        'copy_tone': '; '.join(tone),
        'intro_excerpt': clean(text[:700])
    }

def recommendations(row, analysis):
    kw=row['keyword']; pt=analysis['page_type']; sig=analysis
    rec=[]
    if 'guide' in pt or 'listicle' in pt:
        rec.append('Create a long-form guide page, not only a service page')
    else:
        rec.append('Create a conversion-focused service/industry landing page')
    if sig.get('word_count',0) >= 2000: rec.append('Target 2,000+ words with scannable H2/H3 sections')
    else: rec.append('Cover the query clearly but avoid fluff; many ranking pages are not huge')
    if sig.get('has_faq'): rec.append('Include FAQ section and FAQ schema')
    if sig.get('has_pricing_cost'): rec.append('Cover pricing/cost/budget factors')
    if sig.get('has_case_study_proof'): rec.append('Add proof: screenshots, metrics, case-study callouts, testimonials')
    if sig.get('has_step_process'): rec.append('Include process/checklist/how-it-works section')
    if sig.get('external_link_count',0) > 5: rec.append('Use authoritative external references where useful')
    rec.append('Internally link to relevant Simplufy service, industry, resource, and case-study pages')
    return '; '.join(dict.fromkeys(rec))

def analyze(row):
    url=row['url']; domain=urlparse(url).netloc.lower().replace('www.','')
    base={'keyword':row['keyword'],'position':int(row['position']),'url':url,'domain':domain,'serp_title':row.get('page_title',''), 'fetch_status':'', 'error':''}
    if domain in SKIP_DOMAINS:
        base.update({'fetch_status':'skipped_social/video','page_type':row.get('page_type','unfetched'), 'word_count':0, 'internal_link_count':0, 'external_link_count':0, 'total_link_count':0, 'unique_internal_links':0, 'unique_external_domains':0, 'schema_types':'', 'h1_examples':'', 'h2_examples':'', 'copy_tone':'platform/result page', 'intro_excerpt':'Skipped because social/video pages block or do not represent replicable owned-page SEO structure.'})
        for k,v in signals('',[],[]).items(): base[k]=v
        base['replication_notes']='Do not replicate platform pages directly; use them only as evidence that Google mixes platform/video/social results for this intent.'
        return base
    try:
        r=requests.get(url, headers={'User-Agent':UA, 'Accept':'text/html,application/xhtml+xml'}, timeout=18, allow_redirects=True)
        base['http_status']=r.status_code
        ctype=r.headers.get('content-type','')
        if r.status_code >= 400 or 'text/html' not in ctype:
            raise RuntimeError(f'status={r.status_code} content-type={ctype}')
        html=r.text[:3000000]
        p=PageParser(); p.feed(html)
        text=clean(' '.join(p.text))
        title=clean(' '.join(p.title)) or row.get('page_title','')
        meta_desc=get_meta(p, {'description','og:description','twitter:description'})
        base_domain=urlparse(r.url).netloc.lower().replace('www.','') or domain
        internal=set(); external=set(); extdomains=set(); total_links=0
        for href, atxt in p.links:
            if not href or href.startswith(('#','mailto:','tel:','javascript:')): continue
            absu=urljoin(r.url, href)
            parsed=urlparse(absu)
            if parsed.scheme not in ('http','https'): continue
            total_links += 1
            linkdom=parsed.netloc.lower().replace('www.','')
            if linkdom==base_domain:
                internal.add(parsed.path.rstrip('/') or '/')
            else:
                external.add(absu.split('#')[0]); extdomains.add(linkdom)
        schema_types=[]
        for js in p.jsonld:
            for m in re.finditer(r'"@type"\s*:\s*"([^"]+)"', js): schema_types.append(m.group(1))
        wc=len(re.findall(r'\b[\w’\'-]+\b', text))
        copy=extract_copy_notes(text, p.headings)
        sig=signals(text, p.headings, p.jsonld)
        base.update({
            'fetch_status':'fetched', 'final_url':r.url, 'page_title':title, 'meta_description':meta_desc,
            'page_type':classify(r.url,title,text,p.headings), 'word_count':wc,
            'total_link_count':total_links, 'internal_link_count':len(internal), 'external_link_count':len(external),
            'unique_internal_links':len(internal), 'unique_external_domains':len(extdomains), 'schema_types':' | '.join(sorted(set(schema_types))),
            **copy, **sig
        })
        base['replication_notes']=recommendations(row, base)
        return base
    except Exception as e:
        base.update({'fetch_status':'fetch_failed','error':str(e)[:250], 'page_type':row.get('page_type','unfetched SERP result'), 'word_count':0, 'internal_link_count':0, 'external_link_count':0, 'total_link_count':0, 'unique_internal_links':0, 'unique_external_domains':0, 'schema_types':'', 'h1_examples':'', 'h2_examples':'', 'copy_tone':'unfetched', 'intro_excerpt':''})
        for k,v in signals('',[],[]).items(): base[k]=v
        base['replication_notes']='Fetch blocked/timed out. Use SERP title/domain/page type as directional signal; revisit manually if this keyword becomes a priority.'
        return base

def main():
    rows=[]
    with INPUT.open(newline='', encoding='utf-8', errors='ignore') as fh:
        for row in csv.DictReader(fh):
            try: pos=int(row.get('position') or 0)
            except: continue
            if 1 <= pos <= 5: rows.append(row)
    rows.sort(key=lambda r:(r['keyword'], int(r['position'])))
    print(f'Analyzing {len(rows)} top-5 SERP rows across {len(set(r["keyword"] for r in rows))} keywords')
    results=[]
    with ThreadPoolExecutor(max_workers=8) as ex:
        futs=[ex.submit(analyze,r) for r in rows]
        for i,f in enumerate(as_completed(futs),1):
            res=f.result(); results.append(res)
            print(f'{i:03d}/{len(rows)} {res["fetch_status"]} p{res["position"]} {res["keyword"]} -> {res["domain"]}')
    results.sort(key=lambda r:(r['keyword'], r['position']))
    fields=list(results[0].keys()) if results else []
    # stable field order
    preferred=['keyword','position','url','domain','serp_title','fetch_status','http_status','page_title','meta_description','page_type','word_count','total_link_count','internal_link_count','external_link_count','unique_internal_links','unique_external_domains','schema_types','h1_examples','h2_examples','copy_tone','has_pricing_cost','has_faq','has_case_study_proof','has_clear_cta','has_step_process','mentions_ai_aeo_geo','mentions_google_ads_lsa','mentions_crm_automation','intro_excerpt','replication_notes','error','final_url']
    fields=[f for f in preferred if f in set().union(*(r.keys() for r in results))]
    with OUT_CSV.open('w', newline='', encoding='utf-8') as fh:
        w=csv.DictWriter(fh, fieldnames=fields); w.writeheader(); w.writerows([{k:r.get(k,'') for k in fields} for r in results])
    OUT_JSON.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding='utf-8')
    # markdown summary
    bykw={}
    for r in results: bykw.setdefault(r['keyword'], []).append(r)
    lines=[]
    lines.append('# Top 5 Google SERP Page Deep Audit\n')
    lines.append(f'Generated from `{INPUT.name}`. Analyzed {len(results)} top-5 ranking positions across {len(bykw)} keywords.\n')
    fetched=sum(1 for r in results if r['fetch_status']=='fetched')
    lines.append(f'- Fetched pages: {fetched}\n- Skipped/blocked/unfetched: {len(results)-fetched}\n')
    # aggregate
    from collections import Counter
    lines.append('## Aggregate patterns\n')
    lines.append('### Page types\n')
    for k,v in Counter(r['page_type'] for r in results).most_common(): lines.append(f'- {k}: {v}')
    lines.append('\n### Average structure for fetched pages\n')
    fetched_rows=[r for r in results if r['fetch_status']=='fetched']
    if fetched_rows:
        avg=lambda key: round(sum(float(r.get(key) or 0) for r in fetched_rows)/len(fetched_rows),1)
        lines.append(f'- Avg word count: {avg("word_count")}')
        lines.append(f'- Avg internal links: {avg("internal_link_count")}')
        lines.append(f'- Avg external links: {avg("external_link_count")}')
        for sig in ['has_pricing_cost','has_faq','has_case_study_proof','has_clear_cta','has_step_process']:
            pct=round(100*sum(1 for r in fetched_rows if r.get(sig))/len(fetched_rows))
            lines.append(f'- {sig}: {pct}%')
    lines.append('\n## Keyword-by-keyword findings\n')
    for kw, rs in bykw.items():
        lines.append(f'### {kw}\n')
        for r in rs:
            lines.append(f'**#{r["position"]} — {r["domain"]}**  ')
            lines.append(f'- URL: {r["url"]}')
            lines.append(f'- Type: {r["page_type"]}; words: {r.get("word_count",0)}; internal links: {r.get("internal_link_count",0)}; external links: {r.get("external_link_count",0)}')
            if r.get('h1_examples'): lines.append(f'- H1: {r["h1_examples"]}')
            if r.get('h2_examples'): lines.append(f'- H2 pattern: {r["h2_examples"][:450]}')
            lines.append(f'- Copy style: {r.get("copy_tone","")}')
            lines.append(f'- Key signals: FAQ={r.get("has_faq")}, pricing/cost={r.get("has_pricing_cost")}, proof={r.get("has_case_study_proof")}, CTA={r.get("has_clear_cta")}, process={r.get("has_step_process")}')
            lines.append(f'- Replication notes: {r.get("replication_notes","")}\n')
        # Synthesized target page recommendation
        fetched_kw=[r for r in rs if r['fetch_status']=='fetched']
        if fetched_kw:
            common_type=Counter(r['page_type'] for r in fetched_kw).most_common(1)[0][0]
            avg_words=round(sum(r['word_count'] for r in fetched_kw)/len(fetched_kw))
            avg_int=round(sum(r['internal_link_count'] for r in fetched_kw)/len(fetched_kw))
            avg_ext=round(sum(r['external_link_count'] for r in fetched_kw)/len(fetched_kw))
            lines.append(f'**Simplufy page target:** Build a {common_type} for `{kw}` with roughly {avg_words} words as a starting benchmark, strong H2 structure, ~{avg_int} internal links to related Simplufy pages, and selective external references (~{avg_ext} seen in competitors). Add proof, FAQ/schema, cost/process sections, and a service-specific CTA where competitor signals show them.\n')
    OUT_MD.write_text('\n'.join(lines), encoding='utf-8')
    print(f'Wrote {OUT_CSV}\nWrote {OUT_JSON}\nWrote {OUT_MD}')

if __name__=='__main__': main()
