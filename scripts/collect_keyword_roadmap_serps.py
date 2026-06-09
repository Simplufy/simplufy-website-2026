#!/usr/bin/env python3
"""
Collect top Google SERP results for Simplufy's keyword roadmap.

Preferred: SERPAPI_API_KEY for true Google organic results.
Fallback: BROWSERBASE_API_KEY + `browse cloud search` if explicitly allowed; this is web search, not guaranteed Google SERP.

Inputs:
  research/simplufy_keyword_roadmap_keywords.csv

Outputs:
  research/keyword-roadmap-serp-results.csv

Usage:
  SERPAPI_API_KEY=... python3 scripts/collect_keyword_roadmap_serps.py --limit 50
  BROWSERBASE_API_KEY=... python3 scripts/collect_keyword_roadmap_serps.py --source browserbase --limit 50
"""
from pathlib import Path
import argparse, csv, json, os, subprocess, sys, time, urllib.parse, urllib.request

ROOT=Path('/home/mcgui/simplufy-website-2026')
IN=ROOT/'research/simplufy_keyword_roadmap_keywords.csv'
OUT=ROOT/'research/keyword-roadmap-serp-results.csv'

FIELDS=['keyword','roadmap_number','recommended_page_title','intent','category','service','industry_market','page_type_roadmap','priority','position','url','domain','serp_title','snippet','source']

def domain(url):
    try: return urllib.parse.urlparse(url).netloc.lower().replace('www.','')
    except Exception: return ''

def read_keywords(priority=None, limit=None, offset=0):
    rows=[]
    with IN.open(newline='', encoding='utf-8') as f:
        for r in csv.DictReader(f):
            if priority and r.get('Priority') not in priority: continue
            rows.append(r)
    # unique by Primary Keyword, preserve first metadata
    seen=set(); unique=[]
    for r in rows:
        kw=(r.get('Primary Keyword') or '').strip()
        if not kw or kw in seen: continue
        seen.add(kw); unique.append(r)
    return unique[offset: offset+limit if limit else None]

def serpapi_search(keyword, num=5):
    key=os.getenv('SERPAPI_API_KEY')
    if not key: raise RuntimeError('SERPAPI_API_KEY is not set')
    params={'engine':'google','q':keyword,'google_domain':'google.com','gl':'us','hl':'en','num':num,'api_key':key}
    url='https://serpapi.com/search.json?'+urllib.parse.urlencode(params)
    with urllib.request.urlopen(url, timeout=45) as r:
        data=json.loads(r.read().decode('utf-8'))
    if data.get('error'): raise RuntimeError(data['error'])
    results=[]
    for item in data.get('organic_results', [])[:num]:
        results.append({'position':item.get('position') or len(results)+1,'url':item.get('link',''),'serp_title':item.get('title',''),'snippet':item.get('snippet','')})
    return results

def browserbase_search(keyword, num=5):
    if not os.getenv('BROWSERBASE_API_KEY'): raise RuntimeError('BROWSERBASE_API_KEY is not set')
    cmd=['browse','cloud','search',keyword,'--num-results',str(num),'--json']
    p=subprocess.run(cmd, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=60)
    if p.returncode!=0: raise RuntimeError(p.stderr.strip() or p.stdout.strip())
    data=json.loads(p.stdout)
    # Shape may vary; handle common arrays/objects.
    if isinstance(data, dict):
        arr=data.get('results') or data.get('organic_results') or data.get('data') or []
    else:
        arr=data
    results=[]
    for i,item in enumerate(arr[:num],1):
        results.append({'position':item.get('position') or i,'url':item.get('url') or item.get('link') or '', 'serp_title':item.get('title',''), 'snippet':item.get('snippet') or item.get('description','')})
    return results

def existing_keys():
    if not OUT.exists(): return set()
    keys=set()
    with OUT.open(newline='', encoding='utf-8', errors='ignore') as f:
        for r in csv.DictReader(f): keys.add((r['keyword'], str(r['position']), r['url']))
    return keys

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('--source', choices=['serpapi','browserbase'], default='serpapi')
    ap.add_argument('--num', type=int, default=5)
    ap.add_argument('--limit', type=int)
    ap.add_argument('--offset', type=int, default=0)
    ap.add_argument('--priority', action='append', help='Filter priority; can repeat, e.g. --priority Highest --priority High')
    ap.add_argument('--sleep', type=float, default=0.5)
    args=ap.parse_args()
    rows=read_keywords(priority=set(args.priority) if args.priority else None, limit=args.limit, offset=args.offset)
    print(f'Collecting {args.num} results for {len(rows)} unique keywords via {args.source}')
    OUT.parent.mkdir(parents=True, exist_ok=True)
    exists=OUT.exists()
    done=existing_keys()
    with OUT.open('a', newline='', encoding='utf-8') as f:
        w=csv.DictWriter(f, fieldnames=FIELDS)
        if not exists: w.writeheader()
        for idx,r in enumerate(rows,1):
            kw=r['Primary Keyword']
            try:
                results=serpapi_search(kw,args.num) if args.source=='serpapi' else browserbase_search(kw,args.num)
                print(f'{idx}/{len(rows)} {kw}: {len(results)} results')
                for item in results:
                    out={
                        'keyword':kw,
                        'roadmap_number':r.get('#',''),
                        'recommended_page_title':r.get('Recommended Page Title',''),
                        'intent':r.get('Intent',''),
                        'category':r.get('Category',''),
                        'service':r.get('Service',''),
                        'industry_market':r.get('Industry / Market',''),
                        'page_type_roadmap':r.get('Page Type',''),
                        'priority':r.get('Priority',''),
                        'position':item.get('position',''),
                        'url':item.get('url',''),
                        'domain':domain(item.get('url','')),
                        'serp_title':item.get('serp_title',''),
                        'snippet':item.get('snippet',''),
                        'source':args.source,
                    }
                    key=(out['keyword'], str(out['position']), out['url'])
                    if key not in done:
                        w.writerow(out); done.add(key)
                f.flush()
            except Exception as e:
                print(f'ERROR {kw}: {e}', file=sys.stderr)
            time.sleep(args.sleep)

if __name__=='__main__': main()
