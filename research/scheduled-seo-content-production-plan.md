# Simplufy Scheduled SEO Content Production Plan

Purpose: publish high-quality keyword-targeted pages incrementally instead of dumping hundreds of near-programmatic pages at once.

Target cadence: 10 new pages per day, every day, with sitemap regeneration, IndexNow URL submission, Google Search Console sitemap ping/API submission, build verification, deployment, and live checks.

Source research:

- Keyword roadmap: `research/simplufy_keyword_roadmap_keywords.csv`
- Browserbase SERP/page audit: `research/keyword-roadmap-serp-page-deep-audit.csv`
- Human roadmap: `research/simplufy-keyword-build-roadmap.md`
- Missing SERP keywords: `research/keyword-roadmap-browserbase-missing-keywords.csv`
- Coverage summary: `research/keyword-roadmap-browserbase-coverage-summary.md`

Current research status at time of this plan:

- Unique keywords in roadmap: 649
- Browserbase-collected keywords: 403
- Remaining SERP collection: 246 keywords
- Top-5 SERP result rows collected: 2,015
- Pages deeply audited: 2,015
- Pages successfully fetched/analyzed: 1,922

## Core strategy

The goal is not to create thin programmatic doorway pages. The daily job should create 10 genuinely useful pages that target roadmap keywords while using the SERP findings as competitive requirements.

Every page must be unique and must satisfy a real search intent:

1. Service intent: explain the service, who it is for, how Simplufy delivers it, what outcomes it drives, what proof exists, and how to get started.
2. Industry intent: explain industry-specific buyer behavior, lead capture, booking, follow-up, trust/proof, local SEO, paid media, and CRM workflows.
3. Location intent: explain the market, service mix, local buyer path, service-area strategy, and why Simplufy can serve that market without pretending to have a physical office there unless true.
4. Comparison intent: compare approaches, decision criteria, tradeoffs, costs, examples, and when Simplufy is a fit.
5. Problem/solution intent: diagnose a specific leak, show the process to fix it, and link to relevant services/case studies.

## Why 10 pages per day

10 pages/day creates about 300 pages/month, which is aggressive but still staged. To reduce quality risk:

- Highest and High priority pages go first.
- Pages are batched into coherent clusters instead of random keywords.
- Each page gets unique copy, unique FAQs, unique internal links, and credible non-competitor external links.
- Each daily batch is reviewed with automated duplicate-copy and placeholder scans before publishing.
- IndexNow gets only the new URLs, not the whole site every time.
- Google Search Console receives the regenerated sitemap after deployment.

## Publishing queue order

Use the source keyword roadmap, but sort into daily batches with this priority:

1. Highest priority core/commercial pages.
2. High priority service x industry pages.
3. High priority paid/organic/service-subservice pages.
4. High priority industry subservice pages.
5. Location pages.
6. Medium priority long-tail pages.
7. Remaining missing-SERP pages after Browserbase finishes.

Recommended first 7 days:

Day 1: Highest core commercial pages 1-10
- digital marketing agency for service businesses
- marketing agency for contractors
- marketing agency for local service businesses
- service business marketing agency
- lead generation agency for service businesses
- website crm and ads for service businesses
- ai marketing agency for service businesses
- local service business growth system
- service business lead management system
- done for you marketing system for service businesses

Day 2: Highest core commercial pages 11-20
- go high level agency for service businesses
- marketing automation for service businesses
- crm and follow up system for contractors
- booked calls marketing agency
- estimate request lead generation
- appointment booking marketing system
- consultation funnel agency
- local seo and crm agency
- ai automation for local businesses
- service business ai implementation

Day 3: Web development x industry pages
- web design for auto detailing shops
- web design for auto styling shops
- web design for roofing companies
- web design for plumbing companies
- web design for pest control companies
- web design for landscaping companies
- web design for window companies
- web design for smart home installers
- web design for contractors
- web design for med spas

Day 4: Google PPC x industry pages
- google ads for auto detailing shops
- google ads for auto styling shops
- google ads for roofing companies
- google ads for plumbing companies
- google ads for pest control companies
- google ads for landscaping companies
- google ads for window companies
- google ads for smart home installers
- google ads for contractors
- google ads for med spas

Day 5: SEO/AEO/GEO x industry pages
- seo for auto detailing shops
- seo for auto styling shops
- seo for roofing companies
- seo for plumbing companies
- seo for pest control companies
- seo for landscaping companies
- seo for window companies
- seo for smart home installers
- seo for contractors
- seo for med spas

Day 6: CRM/automation x industry pages
- crm for auto detailing shops
- crm for roofing companies
- crm for plumbing companies
- crm for pest control companies
- crm for landscaping companies
- crm for window companies
- crm for smart home installers
- crm for contractors
- crm for med spas
- crm for education and training businesses

Day 7: AI/agent orchestration x industry pages
- ai automation for contractors
- ai automation for med spas
- ai automation for education businesses
- ai lead intake assistant
- ai appointment booking assistant
- ai reporting assistant
- ai content workflow for service businesses
- ai crm automation
- agent orchestration for businesses
- ai knowledge base for service business

After day 7, continue through the CSV in cluster order, preserving 10 URLs/day.

## Page type architecture

Create a data-driven content system so pages are consistent in structure but not templated in copy.

Recommended new files:

- `src/data/seoPages.ts` — generated/curated page records.
- `src/pages/growth/[slug].astro` — commercial core/service/industry pages.
- `src/pages/compare/[slug].astro` — comparison resources.
- `src/pages/locations/[slug].astro` — location pages.
- `scripts/seo_content_queue.py` — queue management and batch selection.
- `scripts/generate_daily_seo_pages.py` — creates exactly 10 page records per run.
- `scripts/qa_seo_pages.py` — duplicate, placeholder, metadata, link, schema, and content-depth checks.
- `scripts/submit_indexnow.py` — IndexNow submission for only newly published URLs.
- `scripts/submit_gsc_sitemap.py` — Google Search Console sitemap submission.
- `scripts/daily_seo_publish.py` — orchestrates generation, QA, build, deploy, submit, and reporting.

Do not create 649 physical `.astro` files by hand. Use dynamic routes and a curated data file.

## Required fields for each generated page record

Each page in `src/data/seoPages.ts` should have:

- `slug`
- `url`
- `keyword`
- `priority`
- `intent`
- `category`
- `service`
- `industry`
- `location`
- `pageType`
- `title`
- `metaTitle`
- `metaDescription`
- `heroEyebrow`
- `heroHeadline`
- `heroSubhead`
- `primaryCta`
- `secondaryCta`
- `sections[]`
- `faqs[]`
- `internalLinks[]`
- `externalLinks[]`
- `schemaTypes[]`
- `sourceResearch` references to SERP audit rows
- `publishedAt`
- `batchId`

## Minimum quality rules per page

Every page should pass these rules before publishing:

1. Word count
   - Core/commercial: 1,500-2,800 words.
   - Service x industry: 1,200-2,200 words.
   - Comparison/resource: 1,800-3,200 words.
   - Location: 1,100-1,800 words.
   - Problem/solution: 1,200-2,000 words.

2. Headings
   - Exactly one H1.
   - At least 7 H2s for core/resource pages.
   - At least 5 H2s for service x industry/location pages.
   - H2s must mention the actual service, industry, problem, or location.

3. Unique copy
   - No repeated paragraph across generated pages.
   - No repeated intro/CTA section across pages.
   - No generic visible text like “local service businesses” when a page targets roofing/plumbing/med spas/etc.
   - Duplicate sentence scan should fail if any sentence over 85 characters appears on more than one new page, excluding navigation/footer.

4. Internal links
   - Minimum 8 contextual internal links per page.
   - Include at least:
     - 2 service links
     - 2 industry links where relevant
     - 1 case study/proof link if relevant
     - 1 resource/comparison link
     - 1 contact/audit link
   - Link anchors must be descriptive and varied.

5. External links
   - Minimum 2 credible external links per page.
   - No competitor marketing agencies.
   - Prefer neutral/authoritative sources:
     - Google Ads Help
     - Google Business Profile Help
     - Google Search Central
     - Google Local Services Ads documentation
     - Meta Business Help Center
     - TikTok Business Help Center
     - Cloudflare docs
     - schema.org
     - FTC advertising guidance
     - SBA.gov
     - Census.gov
     - BLS.gov
     - industry associations where appropriate
   - External links should support facts, platform mechanics, compliance, schema, or local/business context.

6. SERP-matching sections
   The Browserbase audit showed the strongest ranking patterns include:
   - pricing/cost factors
   - FAQ content
   - proof/results language
   - process/checklist/how-it-works sections
   - clear CTA

   Therefore each page should include:
   - “What this solves” section
   - “How Simplufy builds it” or “Our process” section
   - “Cost, budget, or timeline factors” section
   - “What to measure” section
   - “Common mistakes/leaks” section
   - FAQ section with page-specific questions
   - CTA section

7. Metadata/schema
   - Unique title tag under 60 chars when possible.
   - Unique meta description around 140-160 chars.
   - Canonical URL.
   - OpenGraph/Twitter inherited from Base layout.
   - Schema by page type:
     - Service pages: `Service` + `FAQPage`
     - Resource/comparison: `Article` + `FAQPage`
     - Location pages: `WebPage` + `Service` + local/service-area copy; avoid fake office schema.
     - Breadcrumb schema for all new pages.

8. No unsupported claims
   - Do not invent client results, dollar metrics, certifications, office locations, or platform partner status.
   - Use existing case studies and screenshots only where supported.
   - For outcome language, use “designed to,” “built to,” “helps,” and proof-backed examples.

## Internal linking rules

Each daily job should update links bidirectionally where practical:

1. New page to existing site:
   - link to parent service
   - link to parent industry
   - link to closest case study
   - link to 2 related resource pages
   - link to contact/free audit

2. Existing hub pages to new pages:
   - Add links to relevant service/industry hub sections when safe.
   - Do not add 10 new links to the homepage every day.
   - Prefer hub pages and sitemap/resource indexes.

3. New pages to each other:
   - Link pages within the same daily batch if naturally related.
   - Link to previous batch pages in the same cluster.
   - Avoid circular blocks of identical “related pages” links.

Recommended anchor examples:

- “Google Ads strategy for roofing companies”
- “CRM follow-up system for contractors”
- “website design for med spas”
- “SEO/AEO/GEO strategy for service businesses”
- “free Simplufy growth audit”

## External linking rules

Build a whitelist file:

`src/data/externalSources.ts`

Suggested source categories:

- Google Search Central: SEO, indexing, structured data
- Google Ads Help: PPC, conversion tracking, Quality Score, landing pages
- Google Business Profile Help: local visibility
- Google Local Services Ads Help: LSA eligibility, verification, bidding
- Meta Business Help Center: ad setup, pixel/conversions, creative policies
- TikTok Business Help Center: ad formats, pixel/events
- schema.org: schema definitions
- Cloudflare docs: hosting/performance/security
- FTC.gov: advertising claims/disclosures
- SBA.gov: small-business planning and growth
- Census.gov / Data USA / BLS.gov: market and industry statistics
- Trade associations for industries, if non-competitive and credible

Blocked external domains list should include competitor domains from the SERP audit and known marketing-agency domains. A page should fail QA if it links externally to a competitor unless the page is an explicit comparison that has been manually approved.

## IndexNow plan

IndexNow is useful for Bing/Yandex/IndexNow partners, not Google. Submit only the new URLs after a successful deploy.

Requirements:

1. Generate IndexNow key.
2. Place key file at:
   - `public/<indexnow-key>.txt`
3. Verify the key file is live after deployment:
   - `https://simplufy-website-2026.pages.dev/<indexnow-key>.txt`
4. Submit JSON payload to:
   - `https://api.indexnow.org/indexnow`

Payload:

```json
{
  "host": "simplufy.com",
  "key": "INDEXNOW_KEY",
  "keyLocation": "https://simplufy.com/INDEXNOW_KEY.txt",
  "urlList": ["https://simplufy.com/new-url-1/", "https://simplufy.com/new-url-2/"]
}
```

If the production custom domain is not live yet, use the pages.dev domain only for testing and switch to `simplufy.com` before real SEO submissions.

## Google Search Console sitemap submission

Google does not use IndexNow. For Google:

1. Regenerate sitemap on every build.
2. Submit sitemap through Google Search Console API after deployment.
3. Also keep sitemap linked in `robots.txt`.

Requirements:

- Google Search Console property must be verified.
- Service account or OAuth credentials must be available securely outside the repo.
- The cron job should not store credentials in source files.

Recommended command shape:

```bash
python3 scripts/submit_gsc_sitemap.py --site-url https://simplufy.com --sitemap https://simplufy.com/sitemap-index.xml
```

If GSC API credentials are not available, the job should:

- regenerate sitemap
- verify it is live
- log “GSC submission skipped: missing credentials”
- avoid failing the whole daily publish if pages deployed correctly

## Daily cron job architecture

Create one daily production job, plus two support jobs.

### Job A — Daily Content Publisher

Schedule: every day at 7:30 AM America/New_York.

Responsibilities:

1. Load the next 10 unpublished keywords from `research/simplufy_keyword_roadmap_keywords.csv`.
2. Prefer keywords with completed SERP audit data.
3. Generate/curate 10 page records into `src/data/seoPages.ts` or a generated JSON imported by Astro.
4. Add each page to the correct route family.
5. Add internal links using existing service/industry/resource/case-study inventory.
6. Add 2-4 external links from the approved source whitelist.
7. Run QA:
   - duplicate sentence scan
   - placeholder scan
   - word count check
   - heading count check
   - internal link count check
   - external link whitelist check
   - schema presence check
   - sitemap URL presence check
8. Run `npm run build`.
9. Deploy to Cloudflare Pages.
10. Verify the 10 new live URLs return 200.
11. Submit the 10 new URLs to IndexNow.
12. Submit the sitemap to Google Search Console if credentials exist.
13. Write daily report to `research/daily-publish-reports/YYYY-MM-DD.md`.

### Job B — Browserbase SERP Completion Retry

Schedule: hourly until complete, or daily at 3 PM until the remaining 246 keywords are collected.

Responsibilities:

1. Retry Browserbase auth.
2. Resume SERP collection from the first missing keyword, not a hardcoded offset if possible.
3. Re-run page audit.
4. Update coverage summary.
5. Stop/resume disabled once all 649 keywords have top-5 results.

### Job C — Weekly SEO QA/Audit

Schedule: every Monday at 9 AM America/New_York.

Responsibilities:

1. Crawl the generated site locally or live.
2. Check 404s, duplicate titles, duplicate metas, thin pages, broken internal links, broken external links.
3. Check pages indexed/submitted status if GSC credentials allow.
4. Produce weekly report with pages created, URLs submitted, problems found, fixes needed.

## Recommended cron prompts

### Daily Content Publisher prompt

```
You are running the Simplufy daily SEO content publisher.

Workdir: /home/mcgui/simplufy-website-2026

Goal: create exactly 10 new high-quality keyword-targeted pages from the next unpublished keywords, deploy them, submit them to IndexNow, and submit the sitemap to Google Search Console if credentials are available.

Inputs:
- research/simplufy_keyword_roadmap_keywords.csv
- research/keyword-roadmap-serp-page-deep-audit.csv
- research/simplufy-keyword-build-roadmap.md
- src/data/site.ts

Rules:
- Do not create thin or templated doorway pages.
- Every page must have unique copy, headings, FAQs, internal links, and credible non-competitor external links.
- Publish only 10 new URLs.
- Prefer Highest/High priority keywords with completed SERP audit data.
- Use existing case studies only where relevant; do not invent results.
- Do not link externally to competitor marketing agencies.
- Run QA before deploy.
- If QA fails, fix the pages before deploying.
- If credentials for IndexNow/GSC are missing, build/deploy and report the skipped submission clearly.
- Do not ask the user questions during the cron run.

Steps:
1. Run the daily content generation script.
2. Run QA scripts.
3. Build.
4. Deploy to Cloudflare Pages.
5. Verify new URLs live.
6. Submit IndexNow.
7. Submit sitemap to GSC if credentials exist.
8. Report new URLs, submissions, QA results, and any skipped steps.
```

### Browserbase Retry prompt

```
Resume Simplufy Browserbase SERP research for missing keywords.

Workdir: /home/mcgui/simplufy-website-2026

Goal: collect top-5 Browserbase Search results for remaining missing keywords, then rerun the deep page audit and coverage summary.

Rules:
- Do not print API keys.
- If Browserbase returns Unauthorized, stop and report that auth is still failing.
- Do not overwrite existing results; append/dedupe.
- Update missing-keyword CSV and coverage summary.
```

### Weekly SEO Audit prompt

```
Run Simplufy weekly SEO QA.

Workdir: /home/mcgui/simplufy-website-2026

Check generated pages for broken links, duplicate titles/metas, duplicate paragraphs, thin pages, sitemap inclusion, robots.txt sitemap reference, live 200 status, and schema presence.

Write report to research/weekly-seo-audits/YYYY-MM-DD.md.
```

## Deployment and submission safety gates

The daily publish job should not deploy if any of these fail:

- New pages fewer/more than 10 unless the queue has fewer than 10 remaining.
- Build fails.
- Any new page has placeholder/internal notes.
- Any new page has duplicate long sentences from another generated page.
- Any new page has fewer than required internal links.
- Any new page has competitor external links.
- Any new page has no FAQ.
- Any new page has no CTA.
- Any new page has no canonical/metadata.

The daily publish job may deploy but report skipped submission if:

- IndexNow credentials/key file are missing.
- GSC credentials are missing.
- Browserbase research is incomplete for some future pages, as long as the selected daily pages have enough research.

## Suggested initial implementation sequence

Before turning on the daily publishing cron:

1. Build the SEO page data model and dynamic route.
2. Generate a test batch of 3 pages locally.
3. QA the pages manually and with scripts.
4. Expand to a first controlled batch of 10 pages.
5. Deploy once manually.
6. Verify live pages, sitemap, schema, and internal links.
7. Submit IndexNow manually once.
8. Submit GSC sitemap manually/API once.
9. Only then enable the daily 10-page cron.

## Suggested future pacing

Month 1:
- 10 pages/day, 5-6 days/week instead of 7 if quality review becomes a bottleneck.
- Focus: Highest + High priority commercial/service/industry pages.

Month 2:
- Continue 10/day.
- Add location pages and comparison resources.
- Refresh internal linking across hubs weekly.

Month 3:
- Continue 10/day only if pages are indexed and quality metrics are healthy.
- Add content refresh job for pages not gaining impressions.

If GSC data shows pages are crawled but not indexed, slow publishing to 5/day and improve proof, copy depth, internal links, and topical consolidation.
