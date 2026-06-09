#!/usr/bin/env python3
from __future__ import annotations
from pathlib import Path
from urllib.parse import urlparse
import argparse, json, re, sys, collections, subprocess

ROOT=Path(__file__).resolve().parents[1]
PAGES=ROOT/'src/data/generatedSeoPages.json'
ALLOWED_EXTERNAL={
    'support.google.com','developers.google.com','schema.org','www.facebook.com','facebook.com','ads.tiktok.com','www.ftc.gov','ftc.gov','www.sba.gov','sba.gov','www.nist.gov','nist.gov','www.cloudflare.com','developers.cloudflare.com','www.census.gov','census.gov','www.bls.gov','bls.gov'
}
BLOCKED_TERMS=['placeholder','lorem','dummy text','sample text','todo','fixme','coming soon','ready to swap','add screenshots','replace this','this page explains','this page is written','this page is designed','this page should','would approach','how we would','ranking pages usually','create a long-form','benchmark 2,000','programmatic seo','doorway page','hypothetical','in theory','if we were to','only works when the offer','simplufy treats','how simplufy runs',' engagement','front-end message, lead source','after the inquiry arrives','asset, simplufy reviews','service pages do not explain why simplufy','get a practical audit','practical audit for','simplufy connects the pieces behind','explain our own stack','the numbers simplufy watches','where simplufy adds leverage','that system-level approach matters','in the route calls','in the tune campaigns','in the connect calls','in the improve around','in the install follow-up','in the use sales feedback','in the connect source','in the scale from','in the align campaigns','in the report from','in the connect ai','in the improve reliability','in the install retention','in the measure growth','in the automate reminders','in the review lost leads','in the launch channels','in the iterate with','decision support','proof routes','service-specific metrics','generic agency claims','traffic alone','cannot be judged by','serious marketing agency','serious service business','serious lead generation','serious website crm','serious ai marketing','serious local service','serious done for you','buyers can evaluate simplufy','the page uses','page uses process','not a broad agency pitch']
COMPETITOR_HINTS=['agency','marketing','seo','ppc','leads','growth','advertising','digital']


def load_pages():
    return json.loads(PAGES.read_text() or '[]')


def collect_strings(obj):
    out=[]
    if isinstance(obj,str):
        out.append(obj)
    elif isinstance(obj,dict):
        for v in obj.values(): out.extend(collect_strings(v))
    elif isinstance(obj,list):
        for v in obj: out.extend(collect_strings(v))
    return out


def sentences(text):
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if len(s.strip())>95]


def page_text(page):
    # Include customer-facing main body strings so QA follows the current page schema.
    skip={'href','src','alt','slug','batchId','generatedAt','rewrittenAt','copyStatus'}
    def filtered(obj):
        if isinstance(obj,dict):
            return {k:filtered(v) for k,v in obj.items() if k not in skip}
        if isinstance(obj,list):
            return [filtered(v) for v in obj]
        return obj
    return '\n'.join(collect_strings(filtered(page)))

def duplicate_text(page):
    # Shared nav/link/source/case-study elements are intentionally reused. Body copy must stay unique.
    skip={'href','src','alt','slug','batchId','generatedAt','rewrittenAt','copyStatus','internalLinks','externalLinks','caseLinks','dashboard','outcomes','sidebar'}
    def filtered(obj):
        if isinstance(obj,dict):
            return {k:filtered(v) for k,v in obj.items() if k not in skip}
        if isinstance(obj,list):
            return [filtered(v) for v in obj]
        return obj
    return '\n'.join(collect_strings(filtered(page)))


def fail(msg, errors):
    errors.append(msg)


def qa_pages(batch_id=None):
    pages=load_pages()
    target=[p for p in pages if p.get('batchId')==batch_id] if batch_id else pages
    errors=[]
    if batch_id and len(target)!=10:
        fail(f'batch {batch_id} has {len(target)} pages, expected 10', errors)
    if not batch_id:
        uniqueness=subprocess.run([sys.executable, str(ROOT/'scripts/audit_growth_page_uniqueness.py')], cwd=ROOT, text=True, capture_output=True)
        if uniqueness.returncode != 0:
            try:
                payload=json.loads(uniqueness.stdout or '{}')
                for err in payload.get('errors',[])[:80]:
                    fail(f'uniqueness audit: {err}', errors)
            except Exception:
                fail('uniqueness audit failed: '+(uniqueness.stdout or uniqueness.stderr)[:1000], errors)
    for p in target:
        text=page_text(p); lower=text.lower()
        wc=len(re.findall(r'\b\w+\b', text))
        if wc < 1400: fail(f"{p['slug']} has low word count {wc}", errors)
        # Accept either old sections schema or new v3 service schema, but require depth.
        has_old=len(p.get('sections',[])) >= 6
        has_v3=(len(p.get('modules',[]))>=4 and len(p.get('process',[]))>=4 and len(p.get('education',[]))>=3 and len(p.get('comparisons',[]))>=3 and len(p.get('kpis',[]))>=4)
        if not (has_old or has_v3): fail(f"{p['slug']} lacks required content depth/schema", errors)
        if len(p.get('faqs',[])) < 5: fail(f"{p['slug']} has fewer than 5 FAQs", errors)
        if len(p.get('internalLinks',[])) < 8: fail(f"{p['slug']} has fewer than 8 internal links", errors)
        if len(p.get('externalLinks',[])) < 2: fail(f"{p['slug']} has fewer than 2 external links", errors)
        if not p.get('dashboard',{}).get('stages'): fail(f"{p['slug']} missing dashboard stages", errors)
        if not p.get('outcomes'): fail(f"{p['slug']} missing proof/outcome strip", errors)
        if not p.get('caseLinks'): fail(f"{p['slug']} missing proof library links", errors)
        for term in BLOCKED_TERMS:
            if term in lower: fail(f"{p['slug']} contains blocked term {term}", errors)
        problem_text=' '.join(collect_strings(p.get('problemSection',{}))).lower()
        leak_text=' '.join(p.get('leakPoints',[]) + p.get('sidebar',{}).get('points',[])).lower()
        if 'simplufy' in problem_text:
            fail(f"{p['slug']} problem section talks about Simplufy instead of the reader's business", errors)
        if 'simplufy' in leak_text:
            fail(f"{p['slug']} leak section talks about Simplufy instead of the reader's business", errors)
        if re.search(r'for [a-z0-9\- ]+, simplufy connects', lower):
            fail(f"{p['slug']} contains keyword-stuffed Simplufy connects formula", errors)
        # Avoid meta-copy about page writing rather than business value.
        meta_patterns=[
            r'\bwhat (the|this) page (should|will)\b',
            r'\bthis page (is|was) (built|written|designed)\b',
            r'\bthe page (is|was) written around\b',
            r'\bthe [a-z0-9 ,&/-]+ page uses\b',
            r'\bwhy [a-z0-9 ,&/-]+ cannot be judged\b',
            r'\bwhat buyers expect from a serious [a-z0-9 ,&/-]+ company\b',
            r'\bwhat buyers expect from a serious [a-z0-9 ,&/-]+ provider\b',
            r'\b[a-z0-9 ,&/-]+ decision support\b',
            r'\bserp audit showed\b'
        ]
        for pat in meta_patterns:
            if re.search(pat, lower): fail(f"{p['slug']} contains meta-copy pattern {pat}", errors)
        for link in p.get('externalLinks',[]):
            host=urlparse(link['href']).netloc.lower()
            if host.startswith('www.'): host=host[4:]
            allowed=host in {h[4:] if h.startswith('www.') else h for h in ALLOWED_EXTERNAL}
            if not allowed: fail(f"{p['slug']} external link not whitelisted: {link['href']}", errors)
            if any(h in host for h in COMPETITOR_HINTS) and 'google' not in host and 'facebook' not in host and 'tiktok' not in host:
                fail(f"{p['slug']} external link looks competitor-like: {host}", errors)
    seen=collections.defaultdict(list)
    for p in target:
        for s in sentences(duplicate_text(p)):
            norm=re.sub(r'\s+',' ',s.lower())
            seen[norm].append(p['slug'])
    for s, slugs in seen.items():
        if len(set(slugs))>1:
            fail(f'duplicate long sentence across pages {sorted(set(slugs))}: {s[:140]}', errors)
    return errors, target


def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--batch-id'); args=ap.parse_args()
    errors,target=qa_pages(args.batch_id)
    print(json.dumps({'checked':len(target),'errors':errors[:80],'error_count':len(errors)}, indent=2))
    sys.exit(1 if errors else 0)
if __name__=='__main__': main()
