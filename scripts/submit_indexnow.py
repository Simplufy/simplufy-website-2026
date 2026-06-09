#!/usr/bin/env python3
from __future__ import annotations
from pathlib import Path
import argparse, json, os, urllib.request

ROOT=Path(__file__).resolve().parents[1]
PAGES=ROOT/'src/data/generatedSeoPages.json'

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('--batch-id', required=True)
    ap.add_argument('--host', default=os.environ.get('INDEXNOW_HOST','simplufy.com'))
    ap.add_argument('--site-url', default=os.environ.get('SITE_URL','https://simplufy.com'))
    args=ap.parse_args()
    key=os.environ.get('INDEXNOW_KEY')
    if not key:
        print(json.dumps({'submitted':False,'skipped':'missing INDEXNOW_KEY'}))
        return
    pages=json.loads(PAGES.read_text() or '[]')
    urls=[args.site_url.rstrip('/')+p['url'] for p in pages if p.get('batchId')==args.batch_id]
    if not urls:
        print(json.dumps({'submitted':False,'skipped':'no urls for batch'}))
        return
    payload=json.dumps({'host':args.host,'key':key,'keyLocation':f"{args.site_url.rstrip('/')}/{key}.txt",'urlList':urls}).encode()
    req=urllib.request.Request('https://api.indexnow.org/indexnow', data=payload, headers={'Content-Type':'application/json'}, method='POST')
    with urllib.request.urlopen(req, timeout=30) as resp:
        body=resp.read().decode('utf-8','ignore')
        print(json.dumps({'submitted':True,'status':resp.status,'count':len(urls),'body':body[:500]}))
if __name__=='__main__': main()
