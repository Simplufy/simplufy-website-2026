#!/usr/bin/env python3
from __future__ import annotations
from pathlib import Path
import json, re, sys, hashlib, collections

ROOT=Path(__file__).resolve().parents[1]
PAGES=ROOT/'src/data/generatedSeoPages.json'

# Fields that are intentionally reusable navigation/source metadata, not page body.
SKIP_KEYS={'href','src','alt','slug','batchId','generatedAt','rewrittenAt','copyStatus','internalLinks','externalLinks','caseLinks'}

MIN_WORDS=1800
MIN_UNIQUE_SENTENCES=55
MAX_SHARED_LONG_SENTENCES=0
MAX_REPEATED_SECTION_TITLE_RATE=.18
MIN_DISTINCT_PAGE_HASH_PREFIX=10

TEMPLATE_SIGNALS=[
    'template','templated','boilerplate','thin content','placeholder','lorem','dummy text','sample text','todo','fixme',
    'this page should','this page is designed','this page explains','this page is written','would approach','how we would',
    'serp audit showed','ranking pages usually','programmatic seo','doorway page','hypothetical','in theory','if we were to',
]


def walk_strings(obj):
    if isinstance(obj,str):
        yield obj
    elif isinstance(obj,dict):
        for k,v in obj.items():
            if k not in SKIP_KEYS:
                yield from walk_strings(v)
    elif isinstance(obj,list):
        for v in obj:
            yield from walk_strings(v)


def body_text(page):
    return '\n'.join(s.strip() for s in walk_strings(page) if s and s.strip())


def split_sentences(text):
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+', text) if s.strip()]


def norm_sentence(s):
    s=re.sub(r'\s+',' ',s.lower()).strip()
    s=re.sub(r'[^a-z0-9$%+./ -]','',s)
    return s


def word_count(text):
    return len(re.findall(r'\b\w+\b', text))


def main():
    pages=json.loads(PAGES.read_text() or '[]')
    errors=[]
    all_long=collections.defaultdict(list)
    title_counts=collections.Counter()
    page_reports=[]

    for p in pages:
        txt=body_text(p)
        lower=txt.lower()
        words=word_count(txt)
        sentences=split_sentences(txt)
        unique_sentences={norm_sentence(s) for s in sentences if len(norm_sentence(s))>25}
        long_sentences=[norm_sentence(s) for s in sentences if len(norm_sentence(s))>=95]
        section_titles=[]
        for key in ('modules','process','education','comparisons','faqs'):
            for item in p.get(key,[]) or []:
                if isinstance(item,dict):
                    for title_key in ('title','q'):
                        if item.get(title_key):
                            section_titles.append(norm_sentence(item[title_key]))
                            title_counts[norm_sentence(item[title_key])] += 1
        for s in long_sentences:
            all_long[s].append(p['slug'])
        digest=hashlib.sha256('\n'.join(sorted(unique_sentences)).encode()).hexdigest()
        report={'slug':p['slug'],'words':words,'unique_sentences':len(unique_sentences),'long_sentences':len(long_sentences),'sentence_hash':digest[:12]}
        page_reports.append(report)
        if words < MIN_WORDS:
            errors.append(f"{p['slug']} is too thin: {words} words, minimum {MIN_WORDS}")
        if len(unique_sentences) < MIN_UNIQUE_SENTENCES:
            errors.append(f"{p['slug']} has too few unique sentences: {len(unique_sentences)}, minimum {MIN_UNIQUE_SENTENCES}")
        for signal in TEMPLATE_SIGNALS:
            if signal in lower:
                errors.append(f"{p['slug']} contains template/meta/thin-content signal: {signal}")

    shared={s:sorted(set(slugs)) for s,slugs in all_long.items() if len(set(slugs))>1}
    if len(shared) > MAX_SHARED_LONG_SENTENCES:
        for s,slugs in list(shared.items())[:30]:
            errors.append(f"shared long sentence across {slugs}: {s[:170]}")

    if len({r['sentence_hash'][:MIN_DISTINCT_PAGE_HASH_PREFIX] for r in page_reports}) != len(page_reports):
        errors.append('one or more pages have suspiciously similar sentence-hash prefixes')

    repeated_titles={t:c for t,c in title_counts.items() if c>1}
    title_rate=(sum(repeated_titles.values()) / max(1,sum(title_counts.values()))) if title_counts else 0
    if title_rate > MAX_REPEATED_SECTION_TITLE_RATE:
        errors.append(f'repeated section-title rate too high: {title_rate:.2%}; repeated titles={dict(list(repeated_titles.items())[:12])}') 

    out={'pages':page_reports,'shared_long_sentence_count':len(shared),'repeated_section_title_rate':round(title_rate,4),'errors':errors,'error_count':len(errors)}
    print(json.dumps(out,indent=2))
    sys.exit(1 if errors else 0)

if __name__=='__main__':
    main()
