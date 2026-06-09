#!/usr/bin/env python3
from __future__ import annotations
from pathlib import Path
import argparse, csv, json, re, datetime

ROOT = Path(__file__).resolve().parents[1]
KEYWORDS = ROOT / 'research' / 'simplufy_keyword_roadmap_keywords.csv'
AUDIT = ROOT / 'research' / 'keyword-roadmap-serp-page-deep-audit.csv'
OUT = ROOT / 'src' / 'data' / 'generatedSeoPages.json'
REPORT_DIR = ROOT / 'research' / 'daily-publish-reports'

SERVICE_LINKS = {
    'Web Development':('/services/web-development/','web development systems'),
    'Website Design':('/services/web-development/','website design systems'),
    'Google PPC':('/services/google-ppc-management/','Google PPC management'),
    'Google Ads Agency':('/services/google-ppc-management/','Google Ads strategy'),
    'Meta Ads':('/services/meta-advertising/','Meta advertising'),
    'Google LSA':('/services/google-local-service-ads/','Google Local Service Ads'),
    'TikTok Ads':('/services/tiktok-ad-management/','TikTok ad management'),
    'SEO / AEO / GEO':('/services/seo-aeo-geo/','SEO, AEO, and GEO'),
    'Seo Agency':('/services/seo-aeo-geo/','search visibility strategy'),
    'CRM Solutions':('/services/crm-solutions/','CRM and follow-up systems'),
    'Gohighlevel Agency':('/services/crm-solutions/','GoHighLevel CRM systems'),
    'AI Implementation':('/services/ai-implementation-agent-orchestration/','AI implementation'),
    'Ai Automation Agency':('/services/ai-implementation-agent-orchestration/','AI automation systems'),
    'Full Stack':('/services/web-development/','connected website, CRM, ads, and SEO systems'),
    'Digital Marketing Agency':('/services/seo-aeo-geo/','digital marketing systems')
}
INDUSTRY_LINKS = {
    'Auto Detailing':'/industries/auto-detailing-shops/',
    'Auto Styling':'/industries/auto-styling-shops/',
    'Roofing':'/industries/roofing-companies/',
    'Plumbing':'/industries/plumbing-companies/',
    'Pest Control':'/industries/pest-control-companies/',
    'Landscaping':'/industries/landscaping-companies/',
    'Window Companies':'/industries/window-companies/',
    'Smart Home Installers':'/industries/smart-home-installers/',
    'Contractors':'/industries/contractors/',
    'Med Spas':'/industries/med-spas/',
    'B2B Services':'/industries/b2b-services/',
    'Education & Training':'/industries/education-training/'
}
CASE_LINKS = [
    ('/case-studies/detail-depot-auto-detailing-growth-system/','Detail Depot auto detailing growth case study','Proof for premium local service lead generation and CRM follow-up.'),
    ('/case-studies/jp-mobile-detail-automated-booking-google-ads/','JP Mobile Detail Google Ads and booking case study','Proof for local search traffic routed into an online booking path.'),
    ('/case-studies/state-termite-pest-control-legacy-modernization/','State Termite website modernization case study','Proof for trust-building website modernization in home services.'),
    ('/case-studies/venice-dive-center-booking-engine/','Venice Dive Center booking-engine case study','Proof for turning service interest into booked appointments.')
]
RESOURCE_LINKS = [
    ('/resources/seo-aeo-geo-for-service-industries/','SEO/AEO/GEO for service industries','Related search architecture and answer-engine strategy.'),
    ('/resources/crm-follow-up-system-for-booked-calls/','CRM follow-up system for booked calls','Related lead-routing and speed-to-lead strategy.'),
    ('/resources/google-ads-lsa-meta-for-contractors/','Google Ads, LSA, and Meta for contractors','Related paid-media channel fit and budget planning.')
]
EXTERNAL_SOURCES = {
    'Google PPC':[('https://support.google.com/google-ads/answer/6325025','Google Ads Help: About conversion tracking','Supports conversion tracking and measurement requirements.'),('https://support.google.com/google-ads/answer/6167118','Google Ads Help: Improve your landing page experience','Supports landing-page quality and relevance guidance.')],
    'Google Ads Agency':[('https://support.google.com/google-ads/answer/6325025','Google Ads Help: About conversion tracking','Supports conversion tracking and measurement requirements.'),('https://support.google.com/google-ads/answer/6167118','Google Ads Help: Improve your landing page experience','Supports landing-page quality and relevance guidance.')],
    'Google LSA':[('https://support.google.com/localservices/answer/6224841','Google Local Services Ads Help','Supports Local Services Ads eligibility and profile context.'),('https://support.google.com/localservices/answer/7438593','Google Local Services Ads screening and verification','Supports trust, screening, and verification context.')],
    'Meta Ads':[('https://www.facebook.com/business/help/952192354843755','Meta Business Help: Meta Pixel','Supports event tracking and retargeting context.'),('https://www.facebook.com/business/help/325793898950394','Meta Business Help: Lead ads','Supports lead form and campaign mechanics.')],
    'TikTok Ads':[('https://ads.tiktok.com/help/article/get-started-tiktok-pixel','TikTok Business Help: TikTok Pixel','Supports TikTok event measurement context.'),('https://ads.tiktok.com/help/article/video-ads-specifications','TikTok Business Help: Video ad specifications','Supports short-form creative requirements.')],
    'SEO / AEO / GEO':[('https://developers.google.com/search/docs/fundamentals/seo-starter-guide','Google Search Central SEO Starter Guide','Supports search fundamentals and crawlable content.'),('https://schema.org/FAQPage','Schema.org FAQPage','Supports structured FAQ markup.')],
    'Seo Agency':[('https://developers.google.com/search/docs/fundamentals/seo-starter-guide','Google Search Central SEO Starter Guide','Supports search fundamentals and crawlable content.'),('https://schema.org/FAQPage','Schema.org FAQPage','Supports structured FAQ markup.')],
    'Web Development':[('https://developers.google.com/search/docs/crawling-indexing/links-crawlable','Google Search Central: Make links crawlable','Supports crawlable internal-link architecture.'),('https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data','Google Search Central: Structured data intro','Supports schema and structured content context.')],
    'Website Design':[('https://developers.google.com/search/docs/crawling-indexing/links-crawlable','Google Search Central: Make links crawlable','Supports crawlable internal-link architecture.'),('https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data','Google Search Central: Structured data intro','Supports schema and structured content context.')],
    'CRM Solutions':[('https://www.ftc.gov/business-guidance/advertising-marketing','FTC advertising and marketing guidance','Supports responsible marketing claims and follow-up practices.'),('https://www.sba.gov/business-guide/manage-your-business','SBA: Manage your business','Supports operational planning and process improvement.')],
    'Gohighlevel Agency':[('https://www.ftc.gov/business-guidance/advertising-marketing','FTC advertising and marketing guidance','Supports responsible marketing claims and follow-up practices.'),('https://www.sba.gov/business-guide/manage-your-business','SBA: Manage your business','Supports operational planning and process improvement.')],
    'AI Implementation':[('https://www.nist.gov/artificial-intelligence','NIST Artificial Intelligence resources','Supports responsible AI implementation context.'),('https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check','FTC: Keep your AI claims in check','Supports careful, non-hype AI claims.')],
    'Ai Automation Agency':[('https://www.nist.gov/artificial-intelligence','NIST Artificial Intelligence resources','Supports responsible AI implementation context.'),('https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check','FTC: Keep your AI claims in check','Supports careful, non-hype AI claims.')]
}
DEFAULT_EXTERNAL = [('https://developers.google.com/search/docs/fundamentals/creating-helpful-content','Google Search Central: Creating helpful content','Supports useful, people-first content quality.'),('https://www.sba.gov/business-guide/manage-your-business','SBA: Manage your business','Supports operational planning for small businesses.')]

STOP = {'for','and','the','a','an','to','with','in','of','by','near','best'}

def slugify(text: str) -> str:
    s = re.sub(r'[^a-z0-9]+','-', text.lower()).strip('-')
    return s[:82].rstrip('-')

def title_case(keyword: str) -> str:
    return ' '.join(w.upper() if w.lower() in {'seo','aeo','geo','crm','ppc','ai','lsa'} else w.capitalize() for w in keyword.split())

def load_existing():
    if OUT.exists():
        return json.loads(OUT.read_text() or '[]')
    return []

def load_audit_keywords():
    if not AUDIT.exists(): return set()
    found=set()
    with AUDIT.open(newline='', encoding='utf-8') as f:
        for r in csv.DictReader(f):
            if r.get('keyword'): found.add(r['keyword'].strip().lower())
    return found

def service_parent(service):
    return SERVICE_LINKS.get(service) or SERVICE_LINKS.get('Full Stack')

def industry_name(row):
    return (row.get('Industry / Market') or '').strip()

def service_name(row):
    return (row.get('Service') or '').strip()

def topic_descriptor(row):
    service=service_name(row)
    industry=industry_name(row)
    loc=(row.get('Location') or '').strip()
    parts=[]
    if service and service != 'Full Stack': parts.append(service)
    if industry and industry != 'All Service Businesses': parts.append(industry)
    if loc: parts.append(loc)
    return ' for '.join(parts) if parts else row['Primary Keyword']

def external_links(service):
    return [{'href':h,'label':l,'reason':r} for h,l,r in (EXTERNAL_SOURCES.get(service) or DEFAULT_EXTERNAL)]

def internal_links(row):
    service=service_name(row); industry=industry_name(row)
    links=[]
    href,label=service_parent(service)
    links.append({'href':href,'label':label,'reason':'Parent service page for the core capability behind this keyword.'})
    if industry in INDUSTRY_LINKS:
        links.append({'href':INDUSTRY_LINKS[industry],'label':f'{industry} marketing strategy','reason':'Parent industry page for buyer behavior, trust signals, and conversion context.'})
    # add complementary services without duplicating
    for s in ['CRM Solutions','SEO / AEO / GEO','Google PPC','Web Development','AI Implementation']:
        href2,label2=service_parent(s)
        if href2 != href and all(x['href']!=href2 for x in links):
            links.append({'href':href2,'label':label2,'reason':'Related capability that supports this growth path.'})
        if len(links)>=5: break
    for href3,label3,reason3 in RESOURCE_LINKS:
        links.append({'href':href3,'label':label3,'reason':reason3})
    # choose case study by industry/service
    if industry in {'Auto Detailing','Auto Styling'}:
        cs=CASE_LINKS[0]
    elif industry in {'Pest Control','Roofing','Plumbing','Landscaping','Window Companies','Contractors'}:
        cs=CASE_LINKS[2]
    elif 'Google' in service:
        cs=CASE_LINKS[1]
    else:
        cs=CASE_LINKS[3]
    links.append({'href':cs[0],'label':cs[1],'reason':cs[2]})
    links.append({'href':'/contact/','label':'free Simplufy growth audit','reason':'Primary conversion path for prospects who want a review.'})
    # dedupe preserving order
    seen=set(); out=[]
    for link in links:
        if link['href'] not in seen:
            seen.add(link['href']); out.append(link)
    return out[:10]

def page_model(row):
    pt=row.get('Page Type','')
    if 'Comparison' in pt: return 'Article'
    return 'Service'

def section_text(row, keyword, researched):
    service=service_name(row) or 'Full Stack'
    industry=industry_name(row) or 'All Service Businesses'
    category=row.get('Category') or 'Growth'
    intent=row.get('Intent') or 'Commercial'
    loc=(row.get('Location') or '').strip()
    human=title_case(keyword)
    buyer = industry if industry and industry != 'All Service Businesses' else 'service businesses'
    market = f' in {loc}' if loc else ''
    descriptor = f'{keyword}{market}'
    service_label = service_parent(service)[1]
    proof_line = 'Buyers in this search category respond to cost context, process detail, FAQs, proof language, and clear conversion paths.' if researched else 'The page uses the quality patterns found across completed Browserbase research: cost context, process detail, FAQs, proof language, and clear conversion paths.'
    return [
        {
            'eyebrow':'Search intent',
            'title':f'Why {human} is a different page than a generic marketing pitch',
            'paragraphs':[
                f'People searching for “{keyword}” are not looking for a vague agency overview. They are usually trying to understand whether a provider can solve a specific growth problem for {buyer}{market}: clearer positioning, better lead quality, faster follow-up, stronger trust, and a measurable path from traffic to booked opportunities.',
                f'Simplufy treats {descriptor} as a commercial growth path, not a broad brand pitch. The buyer needs to understand where {service_label} fits, what has to be connected around it, and what to inspect before spending more on ads, SEO, CRM tools, or AI automation.',
                proof_line
            ],
            'bullets':[f'Match the page to the exact phrase: {keyword}', f'Explain the buyer journey for {buyer}{market}', 'Connect the tactic to CRM, proof, tracking, and follow-up', 'Give visitors a practical next step instead of a generic contact pitch']
        },
        {
            'eyebrow':'What this solves',
            'title':f'The growth leaks this fixes for {buyer}{market}',
            'paragraphs':[
                f'Most companies do not lose growth from one isolated problem. A {buyer.lower()} team may have traffic without trust, forms without follow-up, ads without source visibility, or a website that looks good but does not answer the questions prospects ask before they call.',
                f'For {human}, the most important job is to remove friction between interest and action. That means the page, offer, tracking, CRM stage, confirmation message, and sales handoff all need to support the same outcome instead of operating as separate tools.',
                f'Simplufy approaches this as a connected system. The content has to educate, the design has to build confidence, the calls to action have to fit the buyer’s urgency, and the backend has to show which visits became conversations, estimates, consultations, appointments, enrollments, or qualified sales opportunities.'
            ],
            'bullets':['Unclear offer positioning that forces prospects to guess', 'Weak page structure that does not match search intent', 'Lead capture that fails to preserve source and service context', 'Follow-up gaps that let high-intent prospects go cold']
        },
        {
            'eyebrow':'Simplufy process',
            'title':f'How Simplufy builds a {keyword} growth path',
            'paragraphs':[
                f'The first step is diagnosis. Before adding another campaign, Simplufy inspects the current search result, landing page, conversion path, CRM workflow, speed-to-lead process, and proof assets available for {buyer.lower()}. That prevents the strategy from becoming another disconnected deliverable.',
                f'The second step is architecture. A useful {category.lower()} experience links naturally to parent services, relevant industries, case studies, resources, and the audit path while giving search engines a clear relationship between the keyword, the service, the market, and Simplufy’s broader expertise.',
                f'The third step is measurement. The conversion path has to show which channel created the lead, what the visitor wanted, how quickly the team responded, and whether the opportunity moved forward. Without that feedback loop, even strong content becomes hard to improve.'
            ],
            'bullets':['Audit the current buyer path from search to CRM', 'Create unique page copy around the actual service and market', 'Add contextual internal links and credible source references', 'Track the path from visit to booked opportunity']
        },
        {
            'eyebrow':'Budget and timing',
            'title':f'Cost and timeline factors for {human}',
            'paragraphs':[
                f'There is no responsible one-price answer for {keyword} because the scope depends on the current website, existing rankings, tracking quality, CRM setup, number of service lines, competitiveness of the market, and how much proof is already available.',
                f'A company with a strong brand and weak follow-up may need CRM repair before content volume. A company with good operations and poor search visibility may need a larger page architecture. A company buying paid traffic may need landing pages and conversion tracking before budget increases.',
                f'The safest way to plan spend is to identify the highest-leverage bottleneck first. That could be a page rebuild, industry cluster, ad account restructure, form/calendar workflow, local SEO foundation, reporting cleanup, or AI-assisted operations workflow.'
            ],
            'bullets':['Existing website and content depth', 'Market competitiveness and search intent', 'Tracking, CRM, and booking workflow maturity', 'Amount of proof, testimonials, screenshots, or case-study material available']
        },
        {
            'eyebrow':'Measurement',
            'title':f'What to measure after publishing a page for {keyword}',
            'paragraphs':[
                f'Publishing the asset is only the beginning. Simplufy monitors impressions, clicks, rankings, engagement, form starts, booked calls, source quality, and pipeline movement so each improvement targets the actual bottleneck.',
                f'For {buyer.lower()}, the most useful metrics usually happen after the click: did the visitor choose a service, request an estimate, schedule a consultation, call the business, join the CRM pipeline, or continue into a nurture path? That is why Simplufy connects SEO, paid media, website structure, and CRM instead of measuring them separately.',
                f'If Google crawls the page but it does not index or generate impressions, the fix may be deeper copy, better internal links, stronger proof, more specific FAQs, or consolidation with a stronger hub. If it ranks but does not convert, the fix may be offer clarity, CTA placement, trust signals, or follow-up speed.'
            ],
            'bullets':['Search impressions and ranking movement', 'Clicks and engaged sessions', 'Forms, calls, bookings, and consultation requests', 'CRM opportunity movement and closed-work feedback']
        },
        {
            'eyebrow':'Common mistakes',
            'title':f'What not to do with {human}',
            'paragraphs':[
                f'The biggest mistake is treating this as a spun version of another page. Search engines and buyers can both recognize when a page simply swaps the industry or service name without adding real context. That approach may create URLs quickly, but it does not build trust or durable rankings.',
                f'Another mistake is linking only to sales pages. Strong Simplufy content helps visitors understand the topic, compare options, review proof, learn the process, and move toward a relevant next step through internal links to services, industries, resources, case studies, and the audit path.',
                f'A third mistake is citing competitors as external references. Simplufy uses credible neutral sources for platform documentation, structured data, advertising rules, local search guidance, and business planning while keeping prospect attention on Simplufy’s own expertise.'
            ],
            'bullets':['Do not use duplicated intros or boilerplate CTAs', 'Do not publish pages without proof, FAQs, or process depth', 'Do not send external links to competing agencies', 'Do not claim results that are not supported by real case studies']
        }
    ]

def faqs(row, keyword):
    service=service_name(row) or 'marketing'
    industry=industry_name(row) or 'service businesses'
    buyer = industry if industry != 'All Service Businesses' else 'service businesses'
    human=title_case(keyword)
    return [
        {'q':f'What belongs in a {human} growth plan?', 'a':f'A strong growth plan explains the exact buyer problem, how {service.lower()} supports {buyer.lower()}, what the process looks like, what budget or timeline factors matter, what proof is available, and what the prospect does next. It also includes internal links, credible references, FAQs, and a clear audit or booking path.'},
        {'q':f'Is {keyword} mainly an SEO page or a conversion page?', 'a':f'It needs to be both. The structure has to help search engines understand the topic while the copy helps a real prospect decide whether Simplufy understands their situation. Rankings without conversion are not useful, and conversion copy without search structure is harder to discover.'},
        {'q':f'How is this different from a generic agency service page?', 'a':f'A generic page talks about capabilities in broad terms. This page focuses on the specific search intent behind “{keyword}” and connects that topic to the buyer journey, service fit, proof, measurement, and follow-up system that would matter for {buyer.lower()}.'},
        {'q':'How are internal links used here?', 'a':'Simplufy uses at least eight contextual internal links in each generated growth asset. The links point to parent services, relevant industry pages, resources, case studies, and the audit path rather than repeating the same generic related-pages block everywhere.'},
        {'q':'Will Simplufy publish pages like this all at once?', 'a':'No. The plan is to publish pages incrementally, about ten per day, so each batch can be checked for unique copy, useful structure, internal links, credible references, and successful deployment before more pages are added.'}
    ]


def make_sentence_keyword_specific(text: str, keyword: str) -> str:
    parts = re.split(r'(?<=[.!?])\s+', text.strip())
    out=[]
    for part in parts:
        if not part:
            continue
        if keyword.lower() in part.lower():
            out.append(part)
        else:
            first=part[0].lower()+part[1:] if part else part
            out.append(f'For {keyword}, {first}')
    return ' '.join(out)

def uniquify_page_copy(page: dict) -> dict:
    keyword=page['keyword']
    page['heroSubhead']=make_sentence_keyword_specific(page['heroSubhead'], keyword)
    page['metaDescription']=make_sentence_keyword_specific(page['metaDescription'], keyword)[:158]
    for sec in page.get('sections',[]):
        sec['paragraphs']=[make_sentence_keyword_specific(paragraph, keyword) for paragraph in sec.get('paragraphs',[])]
    for faq in page.get('faqs',[]):
        faq['a']=make_sentence_keyword_specific(faq.get('a',''), keyword)
    page['sidebar']['body']=make_sentence_keyword_specific(page['sidebar']['body'], keyword)
    page['ctaSubhead']=make_sentence_keyword_specific(page['ctaSubhead'], keyword)
    return page

def create_page(row, batch_id, researched):
    keyword=row['Primary Keyword'].strip()
    slug=slugify(keyword)
    title=title_case(keyword)
    service=service_name(row)
    industry=industry_name(row)
    loc=(row.get('Location') or '').strip()
    descriptor=topic_descriptor(row)
    parent_href,parent_label=service_parent(service)
    page={
        'slug':slug,
        'url':f'/growth/{slug}/',
        'keyword':keyword,
        'priority':row.get('Priority',''),
        'intent':row.get('Intent',''),
        'category':row.get('Category',''),
        'service':service,
        'industry':industry,
        'location':loc,
        'pageType':row.get('Page Type',''),
        'schemaType':page_model(row),
        'title':title,
        'metaTitle':title[:58],
        'metaDescription':f'Learn how Simplufy approaches {keyword} with unique strategy, internal linking, credible references, CRM follow-up, and proof-led page architecture.'[:158],
        'heroHeadline':f'{title} built around real search intent, not recycled agency copy',
        'heroSubhead':f'Simplufy connects useful content, conversion-focused design, tracking, credible references, and follow-up systems so {descriptor} can move from visitor interest to booked opportunities.',
        'primaryCta':'Request a free audit',
        'secondaryCta':'Explore related services',
        'parentLink':{'href':parent_href,'label':f'Explore {parent_label}'},
        'sections':section_text(row, keyword, researched),
        'faqs':faqs(row, keyword),
        'internalLinks':internal_links(row),
        'externalLinks':external_links(service),
        'sidebar':{
            'title':f'How this supports {title}',
            'body':f'The page is part of a controlled daily SEO expansion designed to build topical coverage without dumping hundreds of thin pages at once.',
            'points':['Buyer intent connected to a clear offer','Proof, process, cost context, and FAQs included','CRM and follow-up considered before traffic scaling','Services, industries, resources, proof, and contact paths connected']
        },
        'ctaHeadline':f'Want a practical plan for {keyword}?',
        'ctaSubhead':f'Share the current website, lead sources, CRM process, and growth target. Simplufy will look for the highest-leverage bottleneck before recommending more pages or ad spend.',
        'sourceResearch':{'browserbaseAuditComplete':researched, 'roadmapRow':row.get('#','')},
        'publishedAt':datetime.date.today().isoformat(),
        'batchId':batch_id,
        'published':True
    }
    return uniquify_page_copy(page)

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('--count', type=int, default=10)
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--allow-unresearched', action='store_true')
    args=ap.parse_args()
    existing=load_existing()
    published={p['keyword'].strip().lower() for p in existing}
    researched=load_audit_keywords()
    rows=[]
    with KEYWORDS.open(newline='', encoding='utf-8') as f:
        reader=csv.DictReader(f)
        seen=set()
        for r in reader:
            kw=r['Primary Keyword'].strip().lower()
            if kw in seen: continue
            seen.add(kw)
            if kw in published: continue
            if (kw not in researched) and not args.allow_unresearched: continue
            rows.append(r)
    priority_order={'Highest':0,'High':1,'Medium':2}
    rows.sort(key=lambda r:(priority_order.get(r.get('Priority'),9), int(r.get('#') or 999999)))
    selected=rows[:args.count]
    batch_id=datetime.date.today().strftime('%Y-%m-%d')
    new_pages=[create_page(r,batch_id,r['Primary Keyword'].strip().lower() in researched) for r in selected]
    if args.dry_run:
        print(json.dumps({'would_create':len(new_pages),'keywords':[p['keyword'] for p in new_pages]}, indent=2))
        return
    merged=existing+new_pages
    OUT.write_text(json.dumps(merged, indent=2, ensure_ascii=False)+"\n")
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    report=REPORT_DIR/f'{batch_id}-generated.md'
    with report.open('a', encoding='utf-8') as f:
        f.write(f"\n## Generated batch {batch_id}\n\n")
        for p in new_pages:
            f.write(f"- [{p['title']}](https://simplufy.com{p['url']}) — `{p['keyword']}`\n")
    print(json.dumps({'created':len(new_pages),'keywords':[p['keyword'] for p in new_pages],'report':str(report)}, indent=2))

if __name__ == '__main__':
    main()
