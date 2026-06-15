export interface ServiceDetail {
  bestWhen: string;
  problem: string;
  included: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  different: string[];
  leaks: string[];
  industriesFit: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'web-development': {
    bestWhen: 'Best when the site looks dated, pages are thin, or mobile visitors do not know what to do next.',
    problem: 'Most underperforming websites are not a design problem. They are a system problem: the homepage does not say what the company does, service pages do not match how buyers search, and forms drop leads into an inbox instead of a CRM pipeline. The result is traffic that arrives, hesitates, and leaves without booking anything.',
    included: [
      { title: 'Homepages that say what you do in seconds', description: 'A visitor should know the service, the area, and the next step before they scroll. We write and structure the hero around that test, with proof placed before the first CTA.' },
      { title: 'Service pages built around search intent', description: 'One page per service, written for the exact way buyers search and compare. Deep enough to rank, specific enough to persuade, with a clear path to a call or booking.' },
      { title: 'Industry pages for trades, clinics, education, and B2B niches', description: 'Pages that speak to one buyer at a time, so a roofer and a med spa owner each land on copy that sounds like their world, not a generic pitch.' },
      { title: 'Cloudflare-ready performance and clean technical SEO', description: 'Static, fast pages with semantic structure, schema, internal links, and a sitemap. Built to load quickly on a phone in a parking lot, because that is where buyers are.' }
    ],
    approach: [
      { title: 'Message and proof audit', description: 'We map what the company actually sells, who buys it, and what evidence exists, then decide what each page must say and show before any layout work starts.' },
      { title: 'Page architecture built for search and paid traffic', description: 'Service, industry, and location pages are planned as one structure, so organic rankings and ad campaigns share strong, message-matched destinations.' },
      { title: 'Launch wired into the CRM', description: 'Every form, call button, and calendar routes into pipeline stages with tracking attached, so the site produces measurable opportunities from day one.' }
    ],
    different: [
      'Forms and calls route into a real CRM pipeline with speed-to-lead follow-up, not an email inbox.',
      'Pages are built as landing destinations for ads and search from the start, not retrofitted later.',
      'Reporting tracks booked calls and estimate requests the site produced, not just sessions and bounce rate.'
    ],
    leaks: [
      'Hero copy that sounds impressive but does not say what the company does',
      'Service pages too thin to rank or persuade',
      'No visible proof above the first CTA',
      'Slow mobile pages and unclear forms',
      'Leads entering email instead of a real CRM path'
    ],
    industriesFit: ['contractors', 'med-spas', 'smart-home-installers', 'auto-styling-shops', 'b2b-services', 'education-training']
  },

  'crm-solutions': {
    bestWhen: 'Best when leads are coming in but follow-up is slow, inconsistent, or invisible to the owner.',
    problem: 'Most service businesses do not have a lead problem. They have a follow-up problem: inquiries sit in inboxes for hours, missed calls never get a text back, and nobody can say which leads turned into booked jobs. The fix is not more leads. It is a pipeline and automation system that responds in minutes and shows where every opportunity stands.',
    included: [
      { title: 'Pipeline stages your team can actually use', description: 'Stages mapped to how your team really sells, from new lead to booked to won, so the pipeline gets used daily instead of abandoned after week one.' },
      { title: 'Speed-to-lead SMS, email, and call automations', description: 'New leads get a text and email within minutes, and missed calls trigger an automatic text back, so the conversation starts before a competitor answers.' },
      { title: 'Calendar and form routing by offer or location', description: 'Estimate requests, consultations, and bookings route to the right calendar, person, or location automatically, with reminders that cut no-shows.' },
      { title: 'Reporting that shows where leads and booked jobs came from', description: 'Source attribution from first click to closed job, so budget decisions are based on booked opportunities instead of gut feel.' }
    ],
    approach: [
      { title: 'Sales process mapping', description: 'We sit with how your team actually handles a lead today, find where opportunities stall or vanish, and design stages and ownership around the real workflow.' },
      { title: 'Automation build with guardrails', description: 'Speed-to-lead texts, missed-call recovery, appointment reminders, and nurture sequences are built and tested so they help the team instead of confusing it.' },
      { title: 'Attribution and reporting setup', description: 'Forms, calls, and calendars are tagged by source, so the dashboard answers one question clearly: which channels produce booked jobs.' }
    ],
    different: [
      'The CRM is wired to the website, ads, and calendars as one system, not configured in isolation.',
      'Automations are built around your actual sales conversation, then trained into the team, so they get used.',
      'Reporting stops at booked opportunities and revenue, not lead counts.'
    ],
    leaks: [
      'New leads sitting in inboxes',
      'Missed calls without recovery',
      'Generic pipeline stages',
      'No source attribution',
      'Automations that confuse the team'
    ],
    industriesFit: ['roofing-companies', 'plumbing-companies', 'contractors', 'med-spas', 'landscaping-companies', 'education-training']
  },

  'google-ppc-management': {
    bestWhen: 'Best when buyers are already searching for what you sell and you need those searches to become calls and estimate requests.',
    problem: 'Most Google Ads accounts leak money the same way: broad match queries nobody screened, every ad pointing at the homepage, and conversion tracking that counts a page view as a win. The campaign is judged on clicks because nothing connects the click to a booked opportunity. That is a system problem, not a bidding problem.',
    included: [
      { title: 'High-intent keyword and search term strategy', description: 'Campaigns built around the searches that mean money now, with negative keywords screening out job seekers, DIY research, and bargain hunters every week.' },
      { title: 'Landing pages matched to offers and industries', description: 'Someone searching "water heater replacement" lands on a water heater page, not a homepage. Message match is the cheapest conversion lift in paid search.' },
      { title: 'Conversion tracking from click to CRM opportunity', description: 'Calls, forms, and bookings are tracked into the CRM with the keyword attached, so optimization targets booked jobs instead of form fills.' },
      { title: 'Ongoing budget, bid, and query optimization', description: 'Weekly query reviews, bid adjustments, and budget shifts toward the campaigns producing booked opportunities, with a written log of what changed and why.' }
    ],
    approach: [
      { title: 'Query mapping', description: 'We map every service to the real searches behind it, separate emergency intent from research intent, and structure campaigns so budget follows buying signals.' },
      { title: 'Message-matched landing pages', description: 'Each ad group gets a destination that repeats the search back to the buyer with proof, pricing signals, and one clear next step.' },
      { title: 'Click-to-CRM tracking', description: 'Conversions are defined as CRM opportunities, not page events, so the account optimizes toward estimates and booked calls from the first month.' }
    ],
    different: [
      'Optimization targets booked opportunities in the CRM, not cost per lead in the ads dashboard.',
      'Landing pages, tracking, and follow-up are part of the engagement, because ads cannot outperform a broken destination.',
      'Monthly reporting reads in plain language: spend, booked opportunities, and what changes next.'
    ],
    leaks: [
      'Broad queries wasting budget',
      'Ads sending everyone to the homepage',
      'Weak conversion tracking',
      'No negative keyword discipline',
      'Optimizing for cheap leads instead of booked opportunities'
    ],
    industriesFit: ['plumbing-companies', 'roofing-companies', 'window-companies', 'pest-control-companies', 'contractors', 'b2b-services']
  },

  'meta-advertising': {
    bestWhen: 'Best when your offer is visual, your market is local, and you need demand before buyers ever type a search.',
    problem: 'Most Meta accounts run one boosted post with no offer, no retargeting, and leads that land in a notification nobody checks. The platform gets blamed when the system is the issue: no creative testing, no clear next step, and no follow-up fast enough to catch interest while it is warm.',
    included: [
      { title: 'Creative testing for offers, proof, and angles', description: 'Multiple variants tested on small budgets so winning hooks emerge from data, the way we found $2.43 B2B leads and $8.69 detailing leads.' },
      { title: 'Retargeting for website visitors and warm audiences', description: 'Site visitors, engagers, and past customers see proof and offers on a schedule, which matters most for higher-ticket services with longer decision cycles.' },
      { title: 'Lead forms and landing pages tied into CRM follow-up', description: 'Every lead triggers an immediate text and enters a pipeline stage, because a Meta lead that waits a day is usually gone.' },
      { title: 'Campaign reporting focused on booked opportunities', description: 'Reports connect spend to consultations and booked jobs, not reach and likes, so you know whether the channel pays.' }
    ],
    approach: [
      { title: 'Offer and angle definition', description: 'We define what is actually being sold to a cold scroller: the package, the price anchor, the proof, and the reason to act now instead of saving the post.' },
      { title: 'Structured creative testing', description: 'Variants run head-to-head on controlled budgets, losers are cut fast, and winners scale, so creative decisions come from results instead of taste.' },
      { title: 'Lead routing and retargeting build', description: 'Leads flow into the CRM with instant follow-up while warm audiences enter retargeting, so no interest is wasted on either end of the funnel.' }
    ],
    different: [
      'Every lead gets speed-to-lead follow-up inside the CRM, because Meta leads cool off in hours, not days.',
      'Creative testing is systematic and budgeted, not one ad set on autopilot.',
      'We have published campaign numbers, CPLs, spend, and outcomes, in our case studies.'
    ],
    leaks: [
      'Generic creative',
      'No clear offer',
      'No retargeting path',
      'Lead forms not routed into CRM',
      'Reporting stops at CPL'
    ],
    industriesFit: ['auto-detailing-shops', 'auto-styling-shops', 'med-spas', 'education-training', 'landscaping-companies']
  },

  'google-local-service-ads': {
    bestWhen: 'Best when you are in an eligible trade, your reviews are solid, and you want calls from buyers ready to hire someone today.',
    problem: 'LSA puts you at the very top of local search with a Google Guaranteed badge, but most profiles underperform for system reasons: launched in the wrong categories, outranked by competitors with stronger review velocity, and fed by a phone process that misses calls during the busiest hours. The leads are real. The handling is the leak.',
    included: [
      { title: 'Eligibility and category review before launch', description: 'We confirm your trade, licensing, insurance, and background-check requirements qualify before any money moves, and pick the categories that match your highest-value jobs.' },
      { title: 'Profile, service area, review, and budget setup', description: 'Service areas drawn around the jobs you want, a review velocity plan to climb rankings, and a weekly budget sized to your call capacity.' },
      { title: 'Call quality, dispute, and lead review workflows', description: 'Every lead is rated and junk calls are disputed for credit, which trains the algorithm and protects the budget at the same time.' },
      { title: 'CRM routing so LSA calls do not get lost', description: 'LSA calls enter the same pipeline as every other lead, with missed-call text-back, so a ring during a job on a roof still becomes a booked inspection.' }
    ],
    approach: [
      { title: 'Eligibility and category audit', description: 'We verify what your business can actually run before launch, because a profile in the wrong category burns budget on calls you cannot serve.' },
      { title: 'Profile and review-velocity launch', description: 'The profile goes live with service areas, hours, and a review cadence designed to outrank the competitors currently taking your calls.' },
      { title: 'Call handling and feedback loop', description: 'Calls route into the CRM, leads get rated weekly, disputes get filed, and the profile learns which jobs you want more of.' }
    ],
    different: [
      'LSA calls connect to a booked-job outcome in the CRM, so you know what the channel actually returned.',
      'Missed-call recovery catches the rings your crew cannot answer from a jobsite.',
      'Weekly lead rating and dispute discipline keeps junk calls from draining the budget.'
    ],
    leaks: [
      'Profiles launched before eligibility is understood',
      'Reviews weaker than competitors',
      'Missed calls with no recovery workflow',
      'Poor lead feedback',
      'No connection between LSA call and booked job outcome'
    ],
    industriesFit: ['roofing-companies', 'plumbing-companies', 'pest-control-companies', 'window-companies', 'contractors']
  },

  'tiktok-ad-management': {
    bestWhen: 'Best when your work is satisfying to watch and you want cheap attention that feeds retargeting and bookings, not just views.',
    problem: 'TikTok delivers some of the cheapest attention in paid media, and most service businesses waste it the same way: videos that entertain but never name a problem, no retargeting to catch interested viewers, and no landing path from the ad to a booking. Views pile up while the calendar stays empty. That is a missing system, not a missing audience.',
    included: [
      { title: 'Short-form creative angles and offer testing', description: 'Hooks built around real buyer problems, the scratched paint, the faded tint, the career change, tested in variants until the angles that convert are obvious.' },
      { title: 'Awareness and retargeting campaign structure', description: 'Cheap reach warms the market while retargeting converts the viewers who watched, engaged, or visited the site but did not book.' },
      { title: 'Landing pages and CRM capture for ad traffic', description: 'Every campaign has a destination: an offer page or lead form that drops contacts into the CRM with instant follow-up, so views become conversations.' },
      { title: 'Creative learnings that can inform Meta and website content', description: 'Winning hooks and angles get reused across Meta ads and site copy, so one channel’s testing budget sharpens the whole system.' }
    ],
    approach: [
      { title: 'Hook and offer mapping', description: 'We match your most watchable work to the buyer problems behind it, then script hooks that stop the scroll for the right viewer, not just any viewer.' },
      { title: 'Structured variant testing', description: 'Multiple cuts and angles run on small budgets, and the platform tells us which hook earns watch time and clicks before real spend goes in.' },
      { title: 'Retargeting and landing path build', description: 'Engaged viewers enter retargeting, clickers land on a message-matched page, and leads enter the CRM, so attention has somewhere to go.' }
    ],
    different: [
      'Every campaign ends at a CRM pipeline, not a view count.',
      'Retargeting is built in from launch, because short-form interest decays in days.',
      'Creative learnings are exported to Meta and the website instead of staying trapped in one channel.'
    ],
    leaks: [
      'Views with no business destination',
      'Hooks that do not match buyer problems',
      'No retargeting',
      'No landing path',
      'No creative learning loop'
    ],
    industriesFit: ['auto-detailing-shops', 'auto-styling-shops', 'med-spas', 'education-training']
  },

  'seo-aeo-geo': {
    bestWhen: 'Best when buyers are searching for your services in your market and the answers they find belong to competitors or AI summaries that never mention you.',
    problem: 'Search has split into three surfaces: classic Google rankings, answer boxes, and AI engines that synthesize a response without a click. Most service sites are invisible on all three for the same reason: thin pages, no structured data, and content organized around the company instead of the questions buyers actually ask. Ranking now means being the clearest, best-evidenced answer.',
    included: [
      { title: 'Technical SEO and site architecture', description: 'Fast static pages, clean crawl paths, schema, internal links, and a structure that tells search engines exactly how services, industries, and locations relate.' },
      { title: 'Service, location, and industry page strategy', description: 'A page for every meaningful service-plus-market combination, so "Google Ads for roofers" and "med spa SEO" each have a real, useful destination.' },
      { title: 'FAQ and structured data for answer engines', description: 'Buyer questions answered directly on-page with matching schema, so answer boxes and voice results can quote you instead of a competitor.' },
      { title: 'Content designed for Google and AI search surfaces', description: 'Entity-clear, proof-backed content written so AI engines can understand who you are, what you do, and why you are citable, the structure behind Auto Monitor’s 93.8K AI citations.' }
    ],
    approach: [
      { title: 'Technical and entity foundation', description: 'We fix crawlability, speed, schema, and internal linking first, and make the brand’s entity, who you are, what you do, where, unambiguous to machines.' },
      { title: 'Intent-mapped page build', description: 'Service, location, and industry pages are built against real query data, each one deep enough to rank and direct enough to convert.' },
      { title: 'Answer and citation layer', description: 'FAQs, structured data, and proof-backed content target answer boxes and generative engines, the surfaces where buying decisions increasingly start.' }
    ],
    different: [
      'One program covers Google rankings, answer boxes, and AI citations instead of treating them as separate projects.',
      'Every ranking page is also a conversion page wired to the CRM, so visibility turns into estimate requests.',
      'We can show the receipts: a client taken from 47 monthly impressions to 93,800 AI engine citations.'
    ],
    leaks: [
      'Thin service pages',
      'Missing schema',
      'Weak internal links',
      'Generic blogs',
      'No clear entity structure',
      'No proof-backed answers'
    ],
    industriesFit: ['contractors', 'plumbing-companies', 'med-spas', 'b2b-services', 'smart-home-installers', 'education-training']
  },

  'ai-implementation-agent-orchestration': {
    bestWhen: 'Best when your team spends hours each week on intake, follow-up drafting, reporting, or research that follows the same pattern every time.',
    problem: 'Most AI projects in service businesses fail for predictable reasons: a tool gets bolted on for novelty, it reads from messy data, nobody owns it, and the first bad output kills the team’s trust. The wins come from the opposite approach: pick the repetitive work that drains the most hours, automate it with human checkpoints, and connect it to the systems the team already uses.',
    included: [
      { title: 'AI workflow discovery and prioritization', description: 'We audit where your team’s hours actually go, then rank automation candidates by hours saved and risk, so the first build pays for itself.' },
      { title: 'Agent-assisted reporting, research, and operations', description: 'Agents that draft weekly performance summaries, compile competitor and prospect research, and prep job documentation, work that is necessary but should not consume a person’s day.' },
      { title: 'CRM, ads, content, and intake automation', description: 'AI drafting follow-up messages, qualifying and routing inbound leads, and producing first-draft content, all inside the CRM and ad systems you already run.' },
      { title: 'Human review points so the system stays reliable', description: 'Every automated output passes a defined approval gate before it reaches a customer, so the system earns trust instead of demanding it.' }
    ],
    approach: [
      { title: 'Discovery and prioritization', description: 'We map repetitive workflows, score them by hours saved, error cost, and data readiness, and pick a first build with a clear owner and a measurable payoff.' },
      { title: 'Build with approval gates', description: 'The workflow ships with human checkpoints at every customer-facing step, clean source data, and an owner who can pause it in one click.' },
      { title: 'Measure, harden, expand', description: 'We track hours saved and error rates, tighten what wobbles, and only then extend automation to the next workflow on the list.' }
    ],
    different: [
      'Automations plug into your existing CRM, ad accounts, and intake, not a new tool the team has to learn.',
      'Every customer-facing output has a human approval gate, so nothing fragile ships unreviewed.',
      'Success is measured in hours saved and faster speed-to-lead, not in features demoed.'
    ],
    leaks: [
      'AI added for novelty',
      'No approval gates',
      'Bad source data',
      'Unclear ownership',
      'Fragile automations nobody trusts'
    ],
    industriesFit: ['b2b-services', 'education-training', 'contractors', 'med-spas', 'smart-home-installers']
  }
};
