#!/usr/bin/env python3
from pathlib import Path
from urllib.parse import urlparse, urljoin
from html.parser import HTMLParser
from concurrent.futures import ThreadPoolExecutor, as_completed
import argparse, csv, json, re, html as ihtml, requests, statistics, collections

ROOT=Path('/home/mcgui/simplufy-website-2026')
INPUT=ROOT/'research/keyword-roadmap-serp-results.csv'
OUT_CSV=ROOT/'research/keyword-roadmap-serp-page-deep-audit.csv'
OUT_JSON=ROOT/'research/keyword-roadmap-serp-page-deep-audit.json'
OUT_MD=ROOT/'research/keyword-roadmap-serp-page-deep-audit.md'
ROADMAP_MD=ROOT/'research/simplufy-keyword-build-roadmap.md'
UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0 Safari/537.36'
SKIP={'youtube.com','www.youtube.com','facebook.com','www.facebook.com','linkedin.com','www.linkedin.com','instagram.com','www.instagram.com','tiktok.com','www.tiktok.com','x.com','twitter.com'}

def clean(s): return re.sub(r'\s+',' ',ihtml.unescape(s or '')).strip()
class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True); self.inscript=False; self.instyle=False; self.intitle=False; self.heading=None; self.ahref=None; self.title=[]; self.meta=[]; self.links=[]; self.headings=[]; self.text=[]; self.jsonld=[]
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs); t=tag.lower()
        if t=='script': self.inscript=True; self.stype=(attrs.get('type') or '').lower(); self.sbuf=[]
        elif t=='style': self.instyle=True
        elif t=='title': self.intitle=True
        elif t in ('h1','h2','h3'): self.heading=[t,[]]
        elif t=='meta':
            n=(attrs.get('name') or attrs.get('property') or '').lower(); c=attrs.get('content') or ''
            if n or c: self.meta.append((n,c))
        elif t=='a': self.ahref=attrs.get('href') or ''; self.abuf=[]
    def handle_endtag(self, tag):
        t=tag.lower()
        if t=='script':
            if getattr(self,'stype','')=='application/ld+json': self.jsonld.append(''.join(getattr(self,'sbuf',[])))
            self.inscript=False
        elif t=='style': self.instyle=False
        elif t=='title': self.intitle=False
        elif t in ('h1','h2','h3') and self.heading:
            lvl,buf=self.heading; txt=clean(' '.join(buf));
            if txt: self.headings.append((lvl,txt))
            self.heading=None
        elif t=='a' and self.ahref is not None:
            self.links.append((self.ahref, clean(' '.join(getattr(self,'abuf',[])))))
            self.ahref=None
    def handle_data(self, data):
        if self.inscript:
            if getattr(self,'stype','')=='application/ld+json': self.sbuf.append(data)
            return
        if self.instyle: return
        if self.intitle: self.title.append(data)
        if self.heading: self.heading[1].append(data)
        if self.ahref is not None: self.abuf.append(data)
        if data and data.strip(): self.text.append(data)

def meta(p, names):
    for n,c in p.meta:
        if n in names and c: return clean(c)
    return ''
def domain(url): return urlparse(url).netloc.lower().replace('www.','')
def classify(url,title,text,heads,roadmap=''):
    u=url.lower(); t=(title+' '+text[:2500]+' '+' '.join(h for _,h in heads[:12])+' '+roadmap).lower()
    if any(x in t for x in ['best ','top ','reviewed','ranked','comparison',' vs ']): return 'listicle/comparison guide'
    if any(x in u for x in ['/blog','/resources','/guide','/article']) or any(x in t for x in ['complete guide','ultimate guide','how to','step-by-step','checklist']): return 'blog/educational guide'
    if any(x in t for x in ['pricing','book a demo','schedule a call','request a quote','get started','services','agency']): return 'commercial service landing page'
    if any(x in t for x in ['software','platform','app','tool','dashboard']): return 'SaaS/product page'
    return 'mixed/commercial page'
def sigs(text, heads, jsonld):
    a=(text+' '+' '.join(h for _,h in heads)+' '+''.join(jsonld)).lower()
    return {
      'has_pricing_cost':bool(re.search(r'\b(price|pricing|cost|budget|spend|package|plans?|rates?)\b',a)),
      'has_faq':('faq' in a or 'frequently asked' in a or 'faqpage' in a),
      'has_case_study_proof':bool(re.search(r'\b(case stud|results?|roi|roas|leads?|conversion|testimonial|reviews?|before|after|portfolio|client)\b',a)),
      'has_clear_cta':bool(re.search(r'\b(book|schedule|request|contact|get a quote|get started|demo|consultation|audit|call now|talk to)\b',a)),
      'has_step_process':bool(re.search(r'\b(step|process|how it works|strategy|framework|checklist|setup|implementation)\b',a)),
      'mentions_ai_aeo_geo':bool(re.search(r'\b(ai|aeo|geo|answer engine|generative engine|chatgpt|llm)\b',a)),
      'mentions_google_ads_lsa':bool(re.search(r'\b(google ads|ppc|local service ads|lsa|paid search)\b',a)),
      'mentions_crm_automation':bool(re.search(r'\b(crm|automation|follow[- ]?up|pipeline|gohighlevel|highlevel|lead routing)\b',a)),
    }
def analyze(r):
    url=r['url']; d=domain(url); base={**r, 'domain':d, 'fetch_status':'', 'error':''}
    if not url or d in SKIP:
        base.update({'fetch_status':'skipped_social/video','http_status':'','final_url':'','page_title':r.get('serp_title',''),'meta_description':'','analyzed_page_type':'platform/social/video result','word_count':0,'total_link_count':0,'internal_link_count':0,'external_link_count':0,'unique_external_domains':0,'schema_types':'','h1_examples':'','h2_examples':'','copy_tone':'platform result','intro_excerpt':'Skipped because this is not a replicable owned-page SEO result.'})
        base.update(sigs('',[],[])); base['replication_notes']='Do not model page structure on social/video results; note that Google may mix platform results for this query.'; return base
    try:
        resp=requests.get(url, headers={'User-Agent':UA,'Accept':'text/html,application/xhtml+xml'}, timeout=12, allow_redirects=True)
        base['http_status']=resp.status_code
        ctype=resp.headers.get('content-type','')
        if resp.status_code>=400 or 'text/html' not in ctype: raise RuntimeError(f'status={resp.status_code} content-type={ctype}')
        parser=P(); parser.feed(resp.text[:2500000])
        text=clean(' '.join(parser.text)); title=clean(' '.join(parser.title)) or r.get('serp_title','')
        base_dom=domain(resp.url) or d
        internal=set(); external=set(); extdom=set(); total=0
        for href,txt in parser.links:
            if not href or href.startswith(('#','mailto:','tel:','javascript:')): continue
            absu=urljoin(resp.url,href); pr=urlparse(absu)
            if pr.scheme not in ('http','https'): continue
            total+=1; ld=domain(absu)
            if ld==base_dom: internal.add(pr.path.rstrip('/') or '/')
            else: external.add(absu.split('#')[0]); extdom.add(ld)
        schemas=sorted(set(re.findall(r'"@type"\s*:\s*"([^"]+)"',' '.join(parser.jsonld))))
        heads=parser.headings; h1=' | '.join(h for lvl,h in heads if lvl=='h1')[:500]; h2=' | '.join(h for lvl,h in heads if lvl=='h2')[:900]
        wc=len(re.findall(r"\b[\w’'-]+\b", text))
        low=text.lower(); tone=[]
        if re.search(r'complete guide|ultimate guide|step-by-step|how to',low): tone.append('guide-led')
        if re.search(r'get more leads|grow|roi|booked|customers|revenue',low): tone.append('results-led')
        if re.search(r'agency|services|we help|our team',low): tone.append('agency/commercial')
        if re.search(r'best|top|reviewed|ranked| vs ',low): tone.append('comparison/listicle')
        if re.search(r'price|cost|pricing|budget',low): tone.append('cost-aware')
        sg=sigs(text,heads,parser.jsonld)
        page_type=classify(resp.url,title,text,heads,r.get('page_type_roadmap',''))
        notes=[]
        notes.append('Create a long-form guide/comparison page' if 'guide' in page_type or 'listicle' in page_type else 'Create a conversion-focused landing page')
        if wc>=2000: notes.append('benchmark 2,000+ words')
        if sg['has_faq']: notes.append('include FAQ/schema')
        if sg['has_pricing_cost']: notes.append('cover pricing/cost factors')
        if sg['has_case_study_proof']: notes.append('add screenshots, metrics, testimonials, or case-study callouts')
        if sg['has_step_process']: notes.append('include process/checklist/how-it-works section')
        notes.append('link internally to service, industry, resource, and case-study pages')
        base.update({'fetch_status':'fetched','final_url':resp.url,'page_title':title,'meta_description':meta(parser,{'description','og:description','twitter:description'}),'analyzed_page_type':page_type,'word_count':wc,'total_link_count':total,'internal_link_count':len(internal),'external_link_count':len(external),'unique_external_domains':len(extdom),'schema_types':' | '.join(schemas),'h1_examples':h1,'h2_examples':h2,'copy_tone':'; '.join(tone) or 'general informational','intro_excerpt':text[:700],'replication_notes':'; '.join(notes)})
        base.update(sg); return base
    except Exception as e:
        base.update({'fetch_status':'fetch_failed','http_status':base.get('http_status',''),'final_url':'','page_title':r.get('serp_title',''),'meta_description':'','analyzed_page_type':'unfetched SERP result','word_count':0,'total_link_count':0,'internal_link_count':0,'external_link_count':0,'unique_external_domains':0,'schema_types':'','h1_examples':'','h2_examples':'','copy_tone':'unfetched','intro_excerpt':'','error':str(e)[:250],'replication_notes':'Fetch blocked/timed out. Use SERP title/domain and revisit manually for high-priority terms.'})
        base.update(sigs('',[],[])); return base

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--limit',type=int); ap.add_argument('--workers',type=int,default=18); args=ap.parse_args()
    rows=list(csv.DictReader(INPUT.open(encoding='utf-8', errors='ignore')))
    if args.limit: rows=rows[:args.limit]
    print(f'Analyzing {len(rows)} SERP pages')
    results=[]
    with ThreadPoolExecutor(max_workers=args.workers) as ex:
        futs=[ex.submit(analyze,r) for r in rows]
        for i,f in enumerate(as_completed(futs),1):
            res=f.result(); results.append(res)
            if i%50==0 or i==len(rows): print(f'{i}/{len(rows)} analyzed')
    results.sort(key=lambda x:(int(x.get('roadmap_number') or 0), x.get('keyword',''), int(x.get('position') or 0)))
    allkeys=[]
    for r in results:
        for k in r.keys():
            if k not in allkeys: allkeys.append(k)
    with OUT_CSV.open('w',newline='',encoding='utf-8') as f:
        w=csv.DictWriter(f, fieldnames=allkeys); w.writeheader(); w.writerows(results)
    OUT_JSON.write_text(json.dumps(results,indent=2,ensure_ascii=False),encoding='utf-8')
    bykw=collections.defaultdict(list)
    for r in results: bykw[r['keyword']].append(r)
    fetched=[r for r in results if r['fetch_status']=='fetched']
    lines=['# Keyword Roadmap SERP Page Deep Audit\n',f'Analyzed {len(results)} top-5 Browserbase Search results across {len(bykw)} keywords.\n',f'- Fetched pages: {len(fetched)}\n- Skipped/failed: {len(results)-len(fetched)}\n']
    c=collections.Counter(r['analyzed_page_type'] for r in results)
    lines.append('## Aggregate page types\n'); lines += [f'- {k}: {v}' for k,v in c.most_common()]
    if fetched:
        avg=lambda k: round(sum(float(r.get(k) or 0) for r in fetched)/len(fetched),1)
        lines.append('\n## Aggregate structure for fetched pages\n')
        for label,k in [('Avg word count','word_count'),('Avg internal links','internal_link_count'),('Avg external links','external_link_count')]: lines.append(f'- {label}: {avg(k)}')
        for s in ['has_pricing_cost','has_faq','has_case_study_proof','has_clear_cta','has_step_process']:
            lines.append(f'- {s}: {round(100*sum(1 for r in fetched if r.get(s))/len(fetched))}%')
    lines.append('\n## Keyword findings\n')
    for kw,rs in bykw.items():
        lines.append(f'### {kw}\n')
        for r in sorted(rs,key=lambda x:int(x.get('position') or 0)):
            lines.append(f'**#{r["position"]} — {r.get("domain","")}**')
            lines.append(f'- URL: {r["url"]}')
            lines.append(f'- Type: {r.get("analyzed_page_type","")}; words: {r.get("word_count",0)}; internal links: {r.get("internal_link_count",0)}; external links: {r.get("external_link_count",0)}')
            if r.get('h1_examples'): lines.append(f'- H1: {r["h1_examples"]}')
            if r.get('h2_examples'): lines.append(f'- H2 pattern: {r["h2_examples"][:500]}')
            lines.append(f'- Signals: FAQ={r.get("has_faq")}, cost={r.get("has_pricing_cost")}, proof={r.get("has_case_study_proof")}, CTA={r.get("has_clear_cta")}, process={r.get("has_step_process")}')
            lines.append(f'- Replication notes: {r.get("replication_notes","")}\n')
    OUT_MD.write_text('\n'.join(lines),encoding='utf-8')
    # build roadmap summary
    rlines=['# Simplufy Keyword Build Roadmap from Browserbase SERP Research\n','Use this as a content production guide. Source: Browserbase Search API top-5 results, not direct scraped Google HTML.\n']
    for kw,rs in bykw.items():
        fr=[r for r in rs if r['fetch_status']=='fetched']
        if fr:
            common=collections.Counter(r['analyzed_page_type'] for r in fr).most_common(1)[0][0]
            avgw=round(statistics.mean(int(r.get('word_count') or 0) for r in fr)); medw=round(statistics.median(int(r.get('word_count') or 0) for r in fr))
            avgi=round(statistics.mean(int(r.get('internal_link_count') or 0) for r in fr)); avge=round(statistics.mean(int(r.get('external_link_count') or 0) for r in fr))
            pct=lambda s: round(100*sum(1 for r in fr if r.get(s))/len(fr))
        else:
            common='manual review needed'; avgw=medw=avgi=avge=0; pct=lambda s:0
        first=rs[0]
        rlines.append(f'## {kw}\n')
        rlines.append(f'- Roadmap page title: {first.get("recommended_page_title","")}')
        rlines.append(f'- Existing roadmap type: {first.get("page_type_roadmap","")} / {first.get("service","")} / {first.get("industry_market","")}')
        rlines.append(f'- Recommended page model from SERP: {common}')
        rlines.append(f'- Word benchmark: avg {avgw}, median {medw}')
        rlines.append(f'- Link benchmark: about {avgi} internal links and {avge} external links among fetched competitors')
        rlines.append(f'- SERP expectations: FAQ {pct("has_faq")}% | cost/pricing {pct("has_pricing_cost")}% | proof {pct("has_case_study_proof")}% | CTA {pct("has_clear_cta")}% | process {pct("has_step_process")}%')
        rlines.append(f'- Top domains: {" | ".join(r.get("domain","") for r in sorted(rs,key=lambda x:int(x.get("position") or 0)))}')
        rlines.append('- Build guidance: write unique copy for this exact service/industry/location intent; add proof, process, FAQ/schema, cost considerations, and contextual internal links.\n')
    ROADMAP_MD.write_text('\n'.join(rlines),encoding='utf-8')
    print('Wrote', OUT_CSV); print('Wrote', OUT_MD); print('Wrote', ROADMAP_MD)
if __name__=='__main__': main()
