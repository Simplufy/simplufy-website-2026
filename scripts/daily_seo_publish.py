#!/usr/bin/env python3
from __future__ import annotations
from pathlib import Path
import datetime, json, os, subprocess, sys, urllib.request

ROOT=Path(__file__).resolve().parents[1]
REPORT_DIR=ROOT/'research/daily-publish-reports'
PAGES=ROOT/'src/data/generatedSeoPages.json'

def run(cmd, check=True, env=None):
    print(f"\n$ {' '.join(cmd)}")
    p=subprocess.run(cmd, cwd=ROOT, text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, env=env)
    print(p.stdout)
    if check and p.returncode:
        raise SystemExit(p.returncode)
    return p

def live_check(url):
    req=urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.status

def main():
    today=datetime.date.today().isoformat()
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    report=REPORT_DIR/f'{today}.md'
    before=json.loads(PAGES.read_text() if PAGES.exists() else '[]')
    before_count=len(before)
    # Skip templated generator if today's batch already has agent-written pages.
    todays_existing=[p for p in before if p.get('batchId')==today]
    if len(todays_existing) >= 10:
        print(f'Skipping generator: batch {today} already has {len(todays_existing)} agent-written pages')
        new=todays_existing
        after=before
    else:
        run(['python3','scripts/generate_daily_seo_pages.py','--count','10'])
        after=json.loads(PAGES.read_text())
        new=[p for p in after if p.get('batchId')==today]
    run(['python3','scripts/qa_seo_pages.py','--batch-id',today])
    run(['python3','scripts/audit_growth_page_uniqueness.py'])
    run(['python3','scripts/qa_seo_pages.py'])
    run(['npm','run','build'])
    deploy_env=os.environ.copy()
    deploy_env.setdefault('CLOUDFLARE_ACCOUNT_ID','c96af548876af053e9fc57168778cdf6')
    deploy=run(['npx','wrangler','pages','deploy','dist','--project-name','simplufy-website-2026','--branch','main'], check=True, env=deploy_env)
    production=os.environ.get('SITE_URL','https://simplufy.com').rstrip('/')
    pages_dev='https://simplufy-website-2026.pages.dev'
    checks=[]
    for p in new:
        url=pages_dev+p['url']
        try:
            status=live_check(url)
            checks.append((url,status))
        except Exception as e:
            checks.append((url,f'ERR {e}'))
    idx=run(['python3','scripts/submit_indexnow.py','--batch-id',today], check=False)
    gsc=run(['python3','scripts/submit_gsc_sitemap.py'], check=False)
    lines=[f'# Daily SEO Publish Report — {today}','',f'- Pages before: {before_count}',f'- Pages after: {len(after)}',f'- New pages in batch: {len(new)}','', '## New URLs']
    for p in new:
        lines.append(f"- {production}{p['url']} — {p['keyword']}")
    lines += ['', '## Live checks']
    for url,status in checks:
        lines.append(f'- {url}: {status}')
    lines += ['', '## IndexNow', '```', idx.stdout[-1500:], '```', '', '## Google Search Console', '```', gsc.stdout[-1500:], '```']
    report.write_text('\n'.join(lines)+'\n')
    print(f'Wrote {report}')
if __name__=='__main__': main()
