import json
import re
import time
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path
from collections import Counter

KEYWORDS = [
    'web design for auto detailers',
    'auto detailing marketing agency',
    'Google Ads for auto detailing',
    'SEO for auto detailing',
    'CRM for auto detailing business',
    'ceramic coating lead generation',
    'contractor marketing agency',
    'Google Ads for contractors',
    'local SEO for contractors',
    'CRM automation for service businesses',
    'GoHighLevel setup services',
    'AI automation for service businesses',
    'AI appointment booking automation',
    'med spa marketing agency',
    'B2B lead generation agency',
    'SEO AEO GEO services',
    'answer engine optimization services',
    'Google Local Service Ads management',
    'Facebook Ads for service businesses',
    'website design for service businesses',
]

UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
OUT = Path('/home/mcgui/simplufy-website-2026/research')
OUT.mkdir(exist_ok=True)

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title=False; self.in_script=False; self.in_style=False
        self.title=[]; self.h=[]; self.text=[]
        self.current_h=None
    def handle_starttag(self, tag, attrs):
        if tag == 'title': self.in_title=True
        if tag in ('script','style','noscript'): self.in_script=True
        if tag in ('h1','h2','h3'): self.current_h=tag
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title=False
        if tag in ('script','style','noscript'): self.in_script=False
        if tag in ('h1','h2','h3'): self.current_h=None
    def handle_data(self, data):
        t=' '.join(data.split())
        if not t: return
        if self.in_title: self.title.append(t)
        elif self.current_h: self.h.append((self.current_h,t))
        elif not self.in_script: self.text.append(t)

def fetch(url, timeout=16):
    req=urllib.request.Request(url, headers={'User-Agent': UA, 'Accept-Language':'en-US,en;q=0.9'})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        ct=r.headers.get('content-type','')
        data=r.read(900000)
        enc='utf-8'
        m=re.search(r'charset=([^;]+)', ct)
        if m: enc=m.group(1)
        return data.decode(enc, errors='ignore')

def ddg_serp(q):
    url='https://html.duckduckgo.com/html/?q='+urllib.parse.quote(q)
    html=fetch(url)
    links=[]
    # DDG result anchors use class result__a with /l/?uddg= encoded target
    for m in re.finditer(r'<a[^>]+class="result__a"[^>]+href="([^"]+)"[^>]*>(.*?)</a>', html, flags=re.I|re.S):
        href=m.group(1).replace('&amp;','&')
        title=re.sub('<.*?>',' ',m.group(2)); title=' '.join(title.split())
        if 'uddg=' in href:
            qs=urllib.parse.parse_qs(urllib.parse.urlparse(href).query)
            href=qs.get('uddg',[href])[0]
        if href.startswith('//'): href='https:'+href
        if href.startswith('http') and 'duckduckgo.com' not in href:
            links.append({'title':title,'url':href})
    # de-dupe by normalized URL
    out=[]; seen=set()
    for l in links:
        norm=l['url'].split('#')[0].rstrip('/')
        if norm not in seen:
            seen.add(norm); out.append(l)
        if len(out)>=8: break
    return out

def classify(url,title,heads,text):
    u=url.lower(); blob=' '.join([title]+[h[1] for h in heads[:10]]+[text[:2000]]).lower()
    if any(x in u for x in ['/blog/','/articles/','/resources/','/learn/']) or any(x in blob[:600] for x in ['guide','how to','tips','what is','ultimate guide']):
        if any(x in blob[:1200] for x in ['top ','best ','companies','agencies','list']): return 'listicle/guide'
        return 'blog/guide'
    if any(x in blob[:1200] for x in ['pricing','plans','book a demo','schedule a demo','get started']) and any(x in blob for x in ['software','platform','crm','automation']): return 'SaaS/product page'
    if any(x in u for x in ['/services/','/service/','/solutions/']) or any(x in blob[:1000] for x in ['services','get a quote','book a call','schedule a call','request a consultation','management services']): return 'service landing page'
    if any(x in blob[:1000] for x in ['agency','we help','our team','contact us']): return 'agency landing page'
    if any(x in blob[:1000] for x in ['near me','in ']) and any(x in blob[:1000] for x in ['call','quote','local']): return 'local landing page'
    return 'mixed/commercial page'

def signals(title,heads,text,url):
    blob=' '.join([title]+[h[1] for h in heads]+[text]).lower()
    sig=[]
    if len(text) > 6500: sig.append('substantial long-form content')
    if len([h for h in heads if h[0]=='h2']) >= 5: sig.append('clear H2 structure')
    if any(w in blob for w in ['case stud','results','roi','leads','revenue','cpl','conversion']): sig.append('proof/results language')
    if any(w in blob for w in ['pricing','cost','package','plans']): sig.append('pricing/cost intent coverage')
    if any(w in blob for w in ['faq','frequently asked']): sig.append('FAQ coverage')
    if any(w in blob for w in ['book a call','schedule','consultation','quote','demo','audit']): sig.append('strong CTA')
    if any(w in blob for w in ['for auto detail','for contractor','for service business','for med spa','for b2b']): sig.append('industry-specific positioning')
    if any(w in blob for w in ['google ads','facebook ads','seo','crm','website','automation']) and len(set(re.findall(r'google ads|facebook ads|seo|crm|website|automation|lead generation|landing page', blob))) >= 3: sig.append('covers full acquisition system')
    if not sig: sig.append('domain authority or exact-match relevance likely')
    return sig[:5]

def analyze_page(item):
    url=item['url']; title=item['title']
    try:
        html=fetch(url)
        parser=TextExtractor(); parser.feed(html)
        ptitle=' '.join(parser.title)[:180] or title
        text=' '.join(parser.text)
        heads=parser.h[:30]
        return {
            **item,
            'page_title': ptitle,
            'page_type': classify(url, ptitle, heads, text),
            'h1_h2': [h[1] for h in heads if h[0] in ('h1','h2')][:8],
            'word_count_est': len(text.split()),
            'ranking_signals': signals(ptitle, heads, text, url),
            'fetch_ok': True,
        }
    except Exception as e:
        return {**item, 'page_title': title, 'page_type':'unfetched SERP result', 'h1_h2':[], 'word_count_est':0, 'ranking_signals':['SERP title/domain relevance; fetch blocked or timed out'], 'fetch_ok':False, 'error':str(e)[:180]}

def recommendation(keyword, analyses):
    types=Counter(a['page_type'] for a in analyses)
    dominant=types.most_common(1)[0][0] if types else 'service landing page'
    k=keyword.lower()
    if 'agency' in k or 'services' in k or 'management' in k or 'setup' in k:
        page='commercial service landing page'
    elif 'for ' in k:
        page='industry-specific service landing page'
    else:
        page='hybrid service page with educational sections'
    if 'answer engine' in k or 'aeo' in k or 'geo' in k:
        content=['define SEO vs AEO vs GEO in plain language','show AI-search visibility/citation examples','include optimization checklist for service businesses','add FAQ schema and comparison tables','CTA for an AI visibility audit']
    elif 'auto detail' in k or 'ceramic coating' in k:
        content=['lead with your detailing case studies and screenshots','separate sections for web design, booking, Google Ads, Meta Ads, SEO, and CRM','include package/value ranges for details, coatings, PPF','show before/after funnel diagrams','CTA for a detailing growth audit']
    elif 'contractor' in k:
        content=['cover emergency/local intent, LSA eligibility, PPC, local SEO, CRM follow-up','include trade-specific sections for roofing/plumbing/pest/landscaping','explain speed-to-lead and missed-call text-back','add comparison of Google Ads vs LSA vs SEO','CTA for lead-flow audit']
    elif 'med spa' in k:
        content=['cover booked consults by treatment category','include compliance/trust positioning','sections for Meta, Google, SEO, landing pages, CRM nurture','explain offer and consultation funnel','CTA for booking funnel audit']
    elif 'crm' in k or 'gohighlevel' in k or 'automation' in k:
        content=['show pipeline screenshots/automation maps','explain form-to-calendar-to-SMS follow-up workflows','include missed call text-back, reactivation, upsells','show integrations with website and ads','CTA for CRM workflow audit']
    elif 'ai' in k:
        content=['explain specific AI agents by role','include appointment booking, lead qualification, follow-up, support','show architecture/agent orchestration diagram','include guardrails and CRM integration','CTA for AI automation audit']
    elif 'b2b' in k:
        content=['focus on qualified pipeline not generic leads','show offer, ICP, landing page, ads, CRM nurture','include LinkedIn/Google/Meta channel comparison','use Momentum case study proof','CTA for pipeline audit']
    else:
        content=['build a conversion-focused service page','include process, deliverables, proof, FAQs, pricing factors','add internal links to relevant case studies','show screenshots and clear CTA','cover objections and decision criteria']
    return {'recommended_page_type': page, 'serp_type_mix': dict(types), 'content_plan': content, 'angle': f'Create a deeper, proof-heavy {page} that matches the transactional intent while adding Simplufy-specific screenshots, case studies, CRM/AI system diagrams, FAQs, and a booking CTA.'}

def main():
    results={}
    for i,k in enumerate(KEYWORDS,1):
        print(f'[{i}/{len(KEYWORDS)}] SERP {k}', flush=True)
        try:
            serp=ddg_serp(k)
        except Exception as e:
            serp=[]; print('SERP error',e)
        analyses=[]
        for j,item in enumerate(serp,1):
            print('  fetch',j,item['url'][:80], flush=True)
            analyses.append(analyze_page(item))
            time.sleep(0.25)
        results[k]={'serp': analyses, 'recommendation': recommendation(k, analyses)}
        time.sleep(0.8)
    (OUT/'serp_keyword_research.json').write_text(json.dumps(results, indent=2))
    print('wrote', OUT/'serp_keyword_research.json')

if __name__=='__main__': main()
