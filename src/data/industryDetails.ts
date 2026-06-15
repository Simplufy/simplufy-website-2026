export interface IndustryDetail {
  h1: string;
  outcome: string;
  intro: string;
  buyerNeeds: string[];
  builds: { title: string; description: string }[];
  services: string[];
  leaks: string[];
  examples: string[];
  faqs: { q: string; a: string }[];
}

export const industryDetails: Record<string, IndustryDetail> = {
  'auto-detailing-shops': {
    h1: 'Marketing systems for auto detailing shops that need more booked details, coating leads, and recurring clients.',
    outcome: 'More booked details, ceramic coating leads, recurring maintenance clients.',
    intro: 'A connected system for detailing shops: offer pages that sell coating work, ads that find local car owners, and follow-up that fills the calendar from first click to final invoice.',
    buyerNeeds: [
      'Before/after photos on vehicles like theirs, not stock imagery',
      'Clear package pricing by vehicle size before they call',
      'Online booking that works from a phone in under a minute',
      'Recent reviews from local car owners they can verify'
    ],
    builds: [
      { title: 'Ceramic coating offer pages', description: 'High-ticket coating work gets its own page with package pricing, durability proof, and deposit booking, so the $800 to $2,000 jobs stop hiding behind a generic services menu.' },
      { title: 'Multi-step booking flows', description: 'Service selection, vehicle-size pricing, add-on prompts, and scheduling in one flow, so quoting happens without phone tag and add-ons sell themselves.' },
      { title: 'Offer-driven Meta campaigns', description: 'Local campaigns built around specific packages, the structure that produced 285 leads at an $8.69 average CPL for Detail Depot, not boosted posts.' },
      { title: 'Rebooking automations', description: 'Post-detail SMS sequences that book the next maintenance wash and pitch coating to full-detail clients, turning one-time jobs into recurring revenue.' }
    ],
    services: ['meta-advertising', 'web-development', 'crm-solutions', 'google-ppc-management'],
    leaks: [
      'Coating leads quoted once and never followed up',
      'Booking buried behind a contact form nobody answers same-day',
      'No rebooking sequence after a completed detail',
      'Ad traffic sent to the homepage instead of an offer page'
    ],
    examples: [
      'Ceramic coating offer page with deposit booking',
      'Vehicle-size pricing flow that quotes without phone calls',
      'Post-detail SMS sequence that books the next maintenance visit'
    ],
    faqs: [
      { q: 'Do Meta ads actually work for detailing shops?', a: 'Yes, when they run as offer-driven campaigns instead of boosted posts. Detailing is visual, local, and impulse-friendly, which is why our detailing campaigns have produced leads in the $8 to $24 range for packages from full details to $799 coatings. The leads only pay off if follow-up happens within minutes, so the CRM side matters as much as the ads.' },
      { q: 'How do detailing shops get recurring clients instead of one-time jobs?', a: 'With a system, not luck. Every completed detail should trigger a follow-up sequence: a review request, then a maintenance-wash offer on a schedule that matches how fast the vehicle gets dirty. Shops that automate this turn a $250 detail into a client worth several thousand dollars a year.' },
      { q: 'What should a detailing website include to convert visitors?', a: 'Package pricing by vehicle size, real before/after photos, recent reviews, and booking that works on a phone. Buyers compare two or three shops in one sitting; the shop that shows prices and lets them book without calling usually wins the job.' }
    ]
  },

  'auto-styling-shops': {
    h1: 'Websites, ads, SEO, and CRM for tint, wrap, PPF, ceramic coating, and performance shops.',
    outcome: 'Higher-value tint, wrap, PPF, and performance jobs.',
    intro: 'Styling jobs are high-ticket and heavily researched. We build the quote funnels, proof pages, and follow-up that win buyers who compare three shops before spending $2,000 on PPF.',
    buyerNeeds: [
      'Photo and video proof on vehicle makes like theirs',
      'Film and product brands named, with warranty terms',
      'A quote path that asks about their specific vehicle',
      'Turnaround time and what the install process looks like'
    ],
    builds: [
      { title: 'Quote funnels by vehicle and service', description: 'Make, model, and coverage-level qualifiers that produce accurate PPF, tint, and wrap quotes, and give your follow-up the details to close.' },
      { title: 'Dedicated pages per service line', description: 'Tint, wrap, PPF, coating, and performance work each get their own page with pricing tiers and proof, because each one is a different search with a different buyer.' },
      { title: 'Retargeting for long research cycles', description: 'PPF and wrap buyers research for weeks. Retargeting keeps your install photos and warranty proof in front of them until they book.' },
      { title: 'Quote pipeline with follow-up', description: 'Every quote enters a CRM stage with timed follow-ups that attach install photos and reviews, so quotes stop dying in sent folders.' }
    ],
    services: ['web-development', 'google-ppc-management', 'meta-advertising', 'crm-solutions', 'seo-aeo-geo'],
    leaks: [
      'PPF quotes sitting unanswered while the buyer books with a competitor',
      'Tint, wrap, and PPF crammed into one generic services page',
      'No retargeting during multi-week research cycles',
      'Instagram followers with no path to a quote'
    ],
    examples: [
      'Full-front PPF quote funnel by make and model',
      'Ceramic tint offer page with heat-rejection proof',
      'Quote follow-up sequence that sends install photos at day 2 and day 5'
    ],
    faqs: [
      { q: 'Why do styling shops need separate pages for tint, wrap, and PPF?', a: 'Because buyers search for one service at a time. Someone typing "PPF installer near me" who lands on a generic services page bounces; someone landing on a PPF page with coverage options, film brands, and pricing tiers requests a quote. Separate pages also let Google rank you for each service instead of none of them.' },
      { q: 'How should a shop handle PPF and wrap quotes that go quiet?', a: 'Assume the buyer is still deciding, not gone. A $2,000-plus decision takes weeks, so the shop that follows up at day 2, day 5, and day 10 with install photos and warranty details usually beats the shop that quoted once. We automate that cadence in the CRM so nobody has to remember it.' },
      { q: 'Does a big Instagram following replace a website for styling shops?', a: 'No. Instagram builds desire but handles quoting badly: DMs get buried, pricing questions repeat endlessly, and nothing is tracked. The system that works links Instagram to a quote funnel, so followers become tracked leads with automatic follow-up instead of unread messages.' }
    ]
  },

  'roofing-companies': {
    h1: 'Storm-season campaigns, local SEO, PPC, landing pages, and follow-up systems for roofing companies.',
    outcome: 'Inspections booked from storm demand and local search.',
    intro: 'When a storm hits or a roof fails, homeowners hire whoever answers first with proof. We build the pages, ad campaigns, and speed-to-lead follow-up that win those windows.',
    buyerNeeds: [
      'License and insurance proof they can check in seconds',
      'Recent jobs and reviews from their own neighborhood',
      'A fast path to a free inspection, ideally same-day',
      'Clarity on whether you help with insurance claims'
    ],
    builds: [
      { title: 'Storm-response landing pages', description: 'Pages ready to launch within hours of a storm, with damage checklists, claim guidance, and same-day inspection booking for the affected zip codes.' },
      { title: 'LSA and PPC split by job type', description: 'Repair, replacement, and storm work get separate campaigns and budgets, because a $600 repair search and a $20,000 replacement search deserve different treatment.' },
      { title: 'Inspection booking with instant follow-up', description: 'Every inspection request gets a confirmation text within minutes and reminders before the appointment, because storm leads call three companies and go with whoever responds.' },
      { title: 'Estimate-to-signed pipeline', description: 'CRM stages from inspection to estimate to signed contract, with automated follow-up on unsigned proposals, where most roofing revenue actually leaks.' }
    ],
    services: ['google-local-service-ads', 'google-ppc-management', 'crm-solutions', 'seo-aeo-geo', 'web-development'],
    leaks: [
      'Storm leads called once and never followed up',
      'Estimate requests waiting hours during peak season',
      'One roofing page trying to rank for repair, replacement, and storm work at once',
      'No pipeline visibility between inspection done and contract signed'
    ],
    examples: [
      'Storm-damage landing page with same-day inspection booking',
      'LSA call routing with missed-call text-back for crews on roofs',
      'Unsigned-proposal follow-up sequence at day 2, 5, and 10'
    ],
    faqs: [
      { q: 'How fast do roofing leads need a response?', a: 'Minutes, not hours. After a storm, homeowners call three to five companies in one sitting and book the first credible one that answers. A speed-to-lead text within five minutes plus missed-call text-back recovers the calls your office misses during the rush, which is often the difference between a full season and an average one.' },
      { q: 'Is Google LSA worth it for roofers?', a: 'Usually yes, if you are eligible and your reviews are competitive. LSA puts you above every other result with a Google Guaranteed badge and you pay per lead, not per click. The catch is that rankings reward review velocity and responsiveness, so it works as part of a system: review generation, fast answer rates, and disputes filed on junk calls.' },
      { q: 'Why does a roofer need separate pages for repair, replacement, and storm damage?', a: 'Because those are three different searches by three different homeowners with budgets from $500 to $30,000. One generic roofing page ranks for none of them. Separate pages match each search, pre-answer each buyer’s questions, and give your ads message-matched destinations that convert at a higher rate.' }
    ]
  },

  'plumbing-companies': {
    h1: 'Emergency-call, repair, drain cleaning, water heater, and membership lead systems for plumbers.',
    outcome: 'Emergency calls, repairs, water heaters, memberships.',
    intro: 'A burst pipe does not wait for business hours. We build fast emergency pages, job-specific campaigns, and missed-call recovery so the searcher at 9pm becomes your job, not the next listing’s.',
    buyerNeeds: [
      'A clear answer to "can you come today" before they call',
      'Upfront pricing signals, even a range, for common jobs',
      'Reviews that mention their exact problem, like a water heater swap',
      'Confirmation you actually serve their neighborhood'
    ],
    builds: [
      { title: 'Emergency call paths', description: 'Mobile pages with a tap-to-call button above the fold and response-time promises, built to load fast for someone standing in an inch of water.' },
      { title: 'Job-specific landing pages', description: 'Water heaters, drain cleaning, repiping, and leak repair each get a page with pricing signals and financing, matched to how each job is searched.' },
      { title: 'LSA and PPC split by intent', description: 'Emergency searches, planned replacements, and maintenance get separate campaigns, so the budget follows urgency instead of averaging across it.' },
      { title: 'Missed-call recovery and membership automation', description: 'Missed calls trigger an instant text-back, and completed jobs trigger membership offers, recurring revenue built from work you already did.' }
    ],
    services: ['google-local-service-ads', 'google-ppc-management', 'crm-solutions', 'web-development', 'seo-aeo-geo'],
    leaks: [
      'Missed after-hours calls with no text-back',
      'Emergency searches landing on a slow, generic homepage',
      'Water heater quotes never followed up after the first call',
      'No membership offer after a completed repair'
    ],
    examples: [
      'Water heater replacement page with financing and same-day booking',
      'Missed-call text-back flow for after-hours emergencies',
      'Post-job membership enrollment sequence'
    ],
    faqs: [
      { q: 'What happens to plumbing calls that ring out?', a: 'They become someone else’s job within minutes, because an emergency searcher calls down the list until someone answers. A missed-call text-back that fires instantly, "Sorry we missed you, are you dealing with an emergency? Reply here", recovers a meaningful share of those calls before the competitor picks up.' },
      { q: 'Should plumbers run LSA, Google Ads, or both?', a: 'Usually both, with different jobs assigned to each. LSA captures urgent "plumber near me" demand on a pay-per-lead basis, while Google Ads targets specific high-value searches like water heater replacement or repiping that deserve their own landing pages. Splitting them also shows you which channel produces booked jobs, not just calls.' },
      { q: 'How do memberships fit into plumbing marketing?', a: 'Memberships turn one-time emergency customers into recurring revenue, and the cheapest moment to sell one is right after a completed job, while trust is highest. We automate that: job marked complete in the CRM triggers a membership offer by text and email, so the offer happens every time without relying on the tech to remember.' }
    ]
  },

  'pest-control-companies': {
    h1: 'Recurring pest control, termite inspection, mosquito, rodent, and seasonal demand systems.',
    outcome: 'Recurring plans, termite inspections, seasonal demand.',
    intro: 'Pest control is a recurring-revenue business hiding inside a one-time-job market. We build the plan offers, seasonal campaigns, and renewal automations that compound instead of resetting every month.',
    buyerNeeds: [
      'What the recurring plan covers, and what it costs, before they call',
      'Safety answers for kids and pets up front',
      'How fast the first treatment can happen',
      'Local reviews that mention their pest, not generic praise'
    ],
    builds: [
      { title: 'Recurring-plan offer pages', description: 'Quarterly and monthly plans presented with clear coverage, pricing, and a first-service offer, selling the subscription instead of the one-off spray.' },
      { title: 'Termite inspection funnels', description: 'Termite work has its own urgency and ticket size, so it gets its own page, campaign, and pipeline instead of being mixed in with ant calls.' },
      { title: 'Seasonal campaign calendar', description: 'Mosquito offers in spring, rodent exclusion in fall, termite swarmer pushes timed to your region, campaigns scheduled before demand spikes, not after.' },
      { title: 'Renewal and win-back automation', description: 'Plan renewals, payment recovery, and lapsed-customer reactivation sequences that protect the recurring base you already paid to acquire.' }
    ],
    services: ['google-ppc-management', 'google-local-service-ads', 'seo-aeo-geo', 'crm-solutions'],
    leaks: [
      'One-time jobs never converted into quarterly plans',
      'Seasonal demand spikes with no campaign calendar ahead of them',
      'Termite inspection leads handled like general pest calls',
      'Cancelled customers never offered reactivation'
    ],
    examples: [
      'Quarterly plan offer page with first-service discount',
      'Spring mosquito campaign with zip-code targeting',
      'Win-back sequence for lapsed quarterly customers'
    ],
    faqs: [
      { q: 'How do pest control companies convert one-time jobs into recurring plans?', a: 'By making the plan the default offer, not the upsell. The landing page leads with the quarterly plan, the technician mentions it at the visit, and the CRM follows up after the one-time job with a plan offer while the problem is fresh. Companies that systemize all three steps convert a far higher share of one-time customers into recurring revenue.' },
      { q: 'When should seasonal pest campaigns launch?', a: 'Two to four weeks before demand spikes, not when the phones start ringing. Mosquito campaigns should be live before the first warm spell, rodent exclusion before the first cold snap, termite messaging before swarmer season in your region. We build the calendar once and run it every year, adjusted by what booked.' },
      { q: 'Why should termite work be marketed separately from general pest control?', a: 'Because the buyer is different: often mid-real-estate-transaction or post-swarm, with higher urgency and a much higher ticket. A dedicated termite inspection page with its own campaign and pipeline converts that demand far better than a general pest page, and it lets you track termite revenue against termite spend directly.' }
    ]
  },

  'landscaping-companies': {
    h1: 'Lead systems for lawn care, design, irrigation, hardscapes, maintenance, and outdoor projects.',
    outcome: 'Lawn care, design, irrigation, hardscape projects.',
    intro: 'A $40 mow and a $40,000 patio are different businesses. We build systems that qualify, route, and follow up on each, so the spring rush turns into booked projects instead of chaos.',
    buyerNeeds: [
      'A portfolio of projects like the one they are imagining',
      'Clarity on whether you do design-build, maintenance, or both',
      'A budget range before they invest in an on-site consultation',
      'How scheduling works, especially during the spring backlog'
    ],
    builds: [
      { title: 'Project pages by service line', description: 'Design-build, irrigation, hardscapes, and maintenance each get their own page with galleries and budget signals, so high-ticket searches stop landing on mowing copy.' },
      { title: 'Qualified estimate funnels', description: 'Estimate forms that capture project type, budget range, and property photos, so a $40k patio inquiry and a weekly-mow request route to different pipelines.' },
      { title: 'Spring-rush campaign and intake system', description: 'Campaigns timed ahead of the season paired with automated intake, confirmations, and scheduling, so the busiest weeks produce booked work instead of dropped calls.' },
      { title: 'Maintenance-to-project upsell automation', description: 'Your maintenance roster is your warmest project audience. Seasonal sequences offer lighting, irrigation upgrades, and hardscape consultations to clients who already trust you.' }
    ],
    services: ['web-development', 'google-ppc-management', 'seo-aeo-geo', 'crm-solutions', 'meta-advertising'],
    leaks: [
      'High-ticket design inquiries mixed into the same inbox as mowing requests',
      'Spring inquiry surge with no automated intake or follow-up',
      'Project portfolio buried in one generic gallery page',
      'Maintenance clients never offered projects or upgrades'
    ],
    examples: [
      'Hardscape project page with budget-range qualifier',
      'Spring cleanup campaign with maintenance-plan upsell',
      'Estimate request flow with property photo upload'
    ],
    faqs: [
      { q: 'How do landscapers stop wasting time on unqualified estimate requests?', a: 'Qualify on the form, not on-site. Asking project type, budget range, and timeline, and requesting property photos, filters out mismatched inquiries before you drive anywhere. Serious buyers happily answer those questions; the ones who will not were unlikely to book anyway. The CRM then routes big projects and maintenance requests to different pipelines.' },
      { q: 'When should landscaping campaigns start for spring?', a: 'Late winter, before the first warm weekend triggers the rush. Homeowners plan projects weeks before they call, and the company already visible when planning starts gets the consultation. Just as important: have automated intake and confirmations ready, because winning the click and then missing the call during the surge is the most common spring leak.' },
      { q: 'What is the best source of high-ticket landscape projects?', a: 'Usually your existing maintenance clients. They already trust your crews and see your work weekly, which makes them the warmest audience for lighting, irrigation upgrades, and hardscapes. A seasonal upsell sequence to the maintenance roster routinely produces project revenue at zero acquisition cost.' }
    ]
  },

  'window-companies': {
    h1: 'SEO, paid media, and quote funnels for window replacement, cleaning, tint, treatments, and installation.',
    outcome: 'Replacement quotes, cleaning, tint, installation jobs.',
    intro: 'Window replacement buyers compare quotes for weeks; cleaning buyers book in minutes. We build separate funnels for each, with follow-up tuned to how each decision actually gets made.',
    buyerNeeds: [
      'A quote process that does not feel like a high-pressure sales ambush',
      'Financing options visible before they commit to an appointment',
      'Brand, material, and warranty clarity for replacement work',
      'Reviews from homeowners with similar projects'
    ],
    builds: [
      { title: 'Replacement quote funnels', description: 'Window-count and project-type qualifiers feed accurate quotes and give sales context before the appointment, while filtering tire-kickers from real buyers.' },
      { title: 'Separate paths for replacement and cleaning', description: 'A $12,000 replacement search and a $200 cleaning search get different pages, campaigns, and follow-up cadence, instead of sharing one diluted funnel.' },
      { title: 'Financing-forward landing pages', description: 'Monthly-payment framing on the page itself, because "from $89/month" starts more replacement conversations than a five-figure project number.' },
      { title: 'Long-cycle quote follow-up', description: 'Automated sequences that keep your quote alive through a multi-week decision with warranty proof, reviews, and financing reminders, plus appointment reminders that cut no-shows.' }
    ],
    services: ['google-ppc-management', 'web-development', 'google-local-service-ads', 'seo-aeo-geo', 'crm-solutions'],
    leaks: [
      'Replacement quotes with no follow-up during weeks-long decisions',
      'Cleaning and replacement traffic sharing one generic page',
      'Financing buried in the footer instead of leading the offer',
      'Quote appointments missed with no reminder or rebook flow'
    ],
    examples: [
      'Window replacement quote funnel with window-count qualifier',
      'Financing-forward landing page for replacement searches',
      'Quote appointment reminder and no-show rebook sequence'
    ],
    faqs: [
      { q: 'Why do window replacement leads take so long to close?', a: 'Because it is a five-figure home decision and most homeowners collect two or three quotes. The winner is rarely the cheapest; it is usually the company that stays present during the decision with useful follow-up, warranty details, reviews, financing math, instead of quoting once and going silent. We automate that cadence so it happens for every quote.' },
      { q: 'Should window cleaning and window replacement be marketed together?', a: 'No. They are different buyers, ticket sizes, and decision speeds: cleaning books in minutes, replacement takes weeks. Each needs its own page, campaign, and follow-up rhythm. Done right, cleaning can feed replacement, a cleaning customer automation that flags aging windows produces warm replacement leads at no acquisition cost.' },
      { q: 'How should financing show up in window marketing?', a: 'On the landing page, in the headline math, not in the footer. "Replacement windows from $89/month" gets a homeowner to request a quote; a five-figure project estimate gets a postponed decision. Leading with monthly-payment framing consistently lifts quote requests for replacement campaigns.' }
    ]
  },

  'smart-home-installers': {
    h1: 'Positioning, web, ads, SEO, and CRM automation for smart home, security, AV, networking, and automation installers.',
    outcome: 'Security, AV, networking, automation consultations.',
    intro: 'Custom integration buyers cannot evaluate your wiring, so they judge your website. We build the positioning, system-specific pages, and consultation funnels that win premium projects and builder partnerships.',
    buyerNeeds: [
      'Which systems and brands you actually install, like Control4 or Lutron',
      'Proof of installs in homes like theirs',
      'What a consultation involves and what a project might cost',
      'Whether you handle service after the install, not just the sale'
    ],
    builds: [
      { title: 'Premium positioning and proof', description: 'A site that reads like the homes you work in: project galleries, named brand partnerships, and a clear story about who you serve, because affluent buyers filter on presentation first.' },
      { title: 'System-specific service pages', description: 'Home theater, whole-home audio, networking, security, and lighting control each get a page matched to its own searches, instead of one "smart home" page ranking for nothing.' },
      { title: 'Qualified consultation funnels', description: 'Consultation requests that capture project scope, home stage (new build or retrofit), and budget band, so your senior people walk into the right conversations.' },
      { title: 'Builder and designer partner pipelines', description: 'A CRM pipeline for referral partners with project-stage reminders and automated touchpoints, turning handshake relationships into a tracked, recurring project source.' }
    ],
    services: ['web-development', 'seo-aeo-geo', 'google-ppc-management', 'crm-solutions'],
    leaks: [
      'Custom projects quoted from a bare contact form with no qualification',
      'AV, security, and networking crammed into one page that ranks for none of them',
      'Builder referrals tracked in text threads instead of a pipeline',
      'No nurture on long-cycle projects, so quiet prospects are lost prospects'
    ],
    examples: [
      'Home theater consultation page with budget qualifier',
      'Whole-home networking page targeting dead-zone and WiFi searches',
      'Builder partner pipeline with project-stage reminders'
    ],
    faqs: [
      { q: 'How do smart home installers reach high-end clients?', a: 'Mostly through proof and referral channels, supported by search. Affluent buyers judge installers by the website the way they judge a contractor by a portfolio, so premium presentation, project galleries, and named brand partnerships do heavy lifting. Behind that, system-specific pages capture search demand, and a managed builder and designer pipeline turns relationships into recurring project flow.' },
      { q: 'What search terms actually drive integration work?', a: 'Specific problems and systems, not "smart home". People search "home theater installer", "whole home WiFi", "Control4 dealer near me", or "outdoor speaker installation". Each deserves its own page; a single generic smart-home page is invisible for all of them. Problem-based pages, like fixing WiFi dead zones, also catch buyers earlier in larger projects.' },
      { q: 'Why qualify consultation requests before booking them?', a: 'Because integration consultations involve senior people and real prep. Asking project scope, home stage, and budget band on the form means qualified prospects get fast, well-prepared consults, and mismatched inquiries get routed appropriately instead of burning your calendar. Serious buyers for $20k-plus projects expect those questions.' }
    ]
  },

  'contractors': {
    h1: 'Growth systems for remodelers, HVAC, electricians, painters, concrete, pools, fences, flooring, restoration, builders, and specialty trades.',
    outcome: 'Qualified estimates for remodels, HVAC, trades.',
    intro: 'Most contractors do not lose jobs on price. They lose them in the gap between estimate requested and estimate followed up. We build the pages, campaigns, and pipeline that close that gap.',
    buyerNeeds: [
      'License and insurance proof they can verify in seconds',
      'Photos of completed jobs comparable to theirs',
      'A clear picture of how the estimate process works',
      'Recent local reviews, not five-year-old ones'
    ],
    builds: [
      { title: 'Trade and city-specific pages', description: 'A page per trade per market, "kitchen remodeling in [city]", not one services list, so each search lands on copy and proof for that exact job.' },
      { title: 'Estimate request funnels', description: 'Forms that capture project type, timeline, and photos, with instant confirmation texts, so the estimate process starts in minutes instead of whenever someone checks email.' },
      { title: 'PPC and LSA by trade and job value', description: 'Campaigns split by trade and ticket size, with budgets weighted toward the jobs you actually want more of, tracked through to signed work.' },
      { title: 'Estimate-to-signed follow-up automation', description: 'Stage-based sequences that follow up on sent estimates at day 2, 5, and 10 with reviews and proof, where most contractor revenue quietly leaks.' }
    ],
    services: ['web-development', 'google-ppc-management', 'google-local-service-ads', 'crm-solutions', 'seo-aeo-geo'],
    leaks: [
      'Estimates emailed once and never followed up',
      'One services page covering ten trades and ranking for none',
      'Leads from referrals, ads, and search all landing in one untracked inbox',
      'No visibility into which channel produced which signed job'
    ],
    examples: [
      'Trade-specific landing pages by city and service',
      'Estimate pipeline with stage-based follow-up at day 2, 5, and 10',
      'Missed-call text-back for jobsite hours'
    ],
    faqs: [
      { q: 'Why do contractors lose estimates they should have won?', a: 'Usually silence, not price. The homeowner collects three estimates, life gets busy, and the contractor who follows up with a useful nudge, a review link, a similar completed project, a financing option, gets the call back. An automated day 2, 5, and 10 sequence on every sent estimate recovers jobs that would otherwise quietly die.' },
      { q: 'What marketing works best for contractors: SEO, PPC, or LSA?', a: 'They cover different timelines. LSA and PPC produce estimate requests within weeks and scale with budget; SEO compounds over months into demand you do not pay per click for. The honest answer depends on your trade, market, and capacity, which is why we audit first. What never works is running any channel into a thin website with no follow-up system behind it.' },
      { q: 'How does a contractor know which marketing actually produces signed jobs?', a: 'By tracking every lead from source to outcome in one pipeline. Forms, ad calls, and LSA leads enter the CRM tagged by source, and each one moves through estimate, signed, or lost. After a quarter you can see cost per signed job by channel, which turns budget decisions from guesswork into arithmetic.' }
    ]
  },

  'med-spas': {
    h1: 'Premium web design, paid ads, local SEO, booking funnels, and CRM follow-up for aesthetic clinics.',
    outcome: 'Consultations for injectables, laser, body contouring.',
    intro: 'Aesthetic clients judge the clinic by the website before they trust it with their face. We build premium presentation, treatment-specific funnels, and the follow-up that keeps consults from no-showing.',
    buyerNeeds: [
      'Provider credentials and real before/after results for the specific treatment',
      'Pricing or consult clarity, not a mystery behind a phone call',
      'Online booking that does not require talking to anyone',
      'Reviews that signal discretion and a comfortable experience'
    ],
    builds: [
      { title: 'Treatment-specific pages', description: 'Injectables, laser, body contouring, and skin treatments each get a page with provider credentials, results, and pricing signals, built to rank and convert for that treatment’s searches.' },
      { title: 'Consult booking funnels with deposits', description: 'Online booking with a small deposit option and automated reminders, the two changes that most reliably cut consult no-show rates.' },
      { title: 'Offer-driven Meta campaigns', description: 'Campaigns around specific treatments, packages, and event promotions with creative testing, reaching aesthetic clients in the feed where treatment decisions start.' },
      { title: 'Rebooking and membership automation', description: 'Tox wears off on a schedule. Automated rebooking sequences timed to each treatment cycle, plus membership offers, turn first visits into predictable recurring revenue.' }
    ],
    services: ['meta-advertising', 'web-development', 'seo-aeo-geo', 'crm-solutions', 'google-ppc-management'],
    leaks: [
      'Consult no-shows with no reminder sequence',
      'Instagram interest with no booking path attached',
      'New-patient specials with no follow-up after the first visit',
      'Treatment pages too thin to rank against chains and aggregators'
    ],
    examples: [
      'Injectables consult funnel with deposit booking',
      'Laser hair removal package campaign timed ahead of summer',
      'Post-treatment rebooking sequence timed to the tox cycle'
    ],
    faqs: [
      { q: 'How do med spas reduce consultation no-shows?', a: 'Two changes do most of the work: a small booking deposit, which filters for intent without scaring off real clients, and an automated reminder sequence by text at booking, 24 hours out, and 2 hours out. Clinics that add both typically cut no-show rates dramatically, and the CRM rebooks the ones who still miss.' },
      { q: 'What makes a med spa website convert visitors into consults?', a: 'Treatment-specific pages with provider credentials, real before/after results, pricing signals, and instant online booking. Aesthetic clients are comparing two or three clinics in one evening; the one that answers "who does this, what does it cost, what will I look like, and can I book right now" wins the consult.' },
      { q: 'How do med spas turn first visits into recurring clients?', a: 'By following the treatment cycle. Injectables, facials, and laser packages all have natural rebooking windows, so the CRM should message each client as their window opens, with memberships offered to regulars. Clinics that automate cycle-timed rebooking stop depending on the client remembering to call.' }
    ]
  },

  'b2b-services': {
    h1: 'Clear positioning, conversion-focused pages, search content, CRM follow-up, and paid campaigns for B2B service companies.',
    outcome: 'Qualified sales conversations and pipeline.',
    intro: 'Most B2B service firms grow on referrals until referrals plateau. We build the positioning, proof, and pipeline that produce qualified sales conversations a firm does not have to wait for.',
    buyerNeeds: [
      'A homepage that says exactly what you do and for whom, in one pass',
      'Proof with names and numbers, not anonymized logos and vague claims',
      'Who they would actually work with, not just the founder’s bio',
      'Engagement-model signals: retainers, projects, rough price band'
    ],
    builds: [
      { title: 'Positioning and message clarity', description: 'The hardest B2B fix: a homepage and service pages that state what you do, for whom, and why you win, in language a prospect repeats internally to their boss.' },
      { title: 'Service pages by offer and niche', description: 'Each offer and target industry gets a page matched to how buyers search and compare, so "fractional CFO for construction companies" finds a real destination, not a generic capabilities list.' },
      { title: 'Problem-led search content', description: 'Content built around the questions buyers ask before they know your category, structured for Google, answer boxes, and AI engines that increasingly mediate B2B discovery.' },
      { title: 'Sales pipeline with long-cycle nurture', description: 'CRM stages from inquiry to proposal to closed, with automated proposal follow-up and nurture between touches, because B2B deals die of silence more than rejection.' }
    ],
    services: ['web-development', 'seo-aeo-geo', 'google-ppc-management', 'crm-solutions', 'ai-implementation-agent-orchestration'],
    leaks: [
      'Homepage copy that could describe any firm in the category',
      'Proposals sent with no follow-up cadence',
      'Referral dependence with no inbound channel building behind it',
      'Long sales cycles with no nurture between touches'
    ],
    examples: [
      'Niche service page targeting problem-based searches',
      'Case study hub with named clients and real numbers',
      'Proposal follow-up sequence with meeting rebooking'
    ],
    faqs: [
      { q: 'How does a B2B service firm grow beyond referrals?', a: 'By building an inbound system before the referral plateau hits. That means positioning sharp enough that strangers immediately understand the offer, service pages that match how buyers search, proof with names and numbers, and a CRM that nurtures long cycles. Referrals stay valuable; they just stop being the only pipeline.' },
      { q: 'Does SEO work for B2B services with long sales cycles?', a: 'Yes, and increasingly through AI surfaces, not just rankings. B2B buyers research problems for months before contacting anyone, and they now ask AI engines as often as Google. Problem-led, proof-backed content positions your firm in those answers early in the cycle, and the CRM nurtures from first touch to a sales conversation months later.' },
      { q: 'What should a B2B homepage say?', a: 'What you do, for whom, and the outcome, specifically enough that the wrong prospects rule themselves out. "We handle IT for 20-200 person law firms" outperforms "innovative technology solutions" every time, because the right buyer recognizes themselves instantly and can repeat the pitch to colleagues. Vague positioning reads as interchangeable, and interchangeable firms compete on price.' }
    ]
  },

  'education-training': {
    h1: 'Enrollment and lead generation systems for coaches, course creators, schools, colleges, universities, workforce programs, and training providers.',
    outcome: 'Inquiries, applications, enrollments.',
    intro: 'Prospective students compare programs in days and enroll wherever responds first with clarity. We build program pages, inquiry funnels, and nurture sequences that carry interest all the way to enrollment.',
    buyerNeeds: [
      'Outcomes they can verify: placement rates, certifications, real student results',
      'Total cost, format, and time commitment stated plainly',
      'What the application or enrollment process involves, step by step',
      'Reviews and stories from students like them'
    ],
    builds: [
      { title: 'Program pages built around outcome searches', description: 'Pages matched to how people actually search, "HVAC certification near me", "become a project manager", with cost, format, and outcomes answered on the page.' },
      { title: 'Enrollment inquiry funnels', description: 'Inquiry forms with same-day text follow-up and advisor scheduling, because an inquiry answered in five minutes enrolls at a different rate than one answered Thursday.' },
      { title: 'Meta and TikTok awareness campaigns', description: 'Short-form creative around student outcomes and career change, the channel where coaching and program decisions start, validated down to $1.07 CPLs in our coaching campaigns.' },
      { title: 'Inquiry-to-enrollment nurture', description: 'Pipeline stages from inquiry to application to enrolled, with automated reminders for stalled applications, open-house no-shows, and undecided prospects.' }
    ],
    services: ['meta-advertising', 'web-development', 'seo-aeo-geo', 'crm-solutions', 'tiktok-ad-management'],
    leaks: [
      'Inquiries answered days later, after the applicant chose elsewhere',
      'Program pages organized by department instead of by what people search',
      'Open-house and info-session signups with no reminder sequence',
      'No pipeline from inquiry to application to enrollment'
    ],
    examples: [
      'Program page targeting career-outcome searches',
      'Enrollment inquiry funnel with same-day text follow-up',
      'Application abandonment recovery sequence'
    ],
    faqs: [
      { q: 'Why is response speed so important for enrollment inquiries?', a: 'Because prospective students inquire at several programs in one sitting, and the first useful response frames the whole comparison. An inquiry that gets a text within five minutes books advisor conversations at a far higher rate than one answered days later. Speed-to-lead automation makes the fast response happen every time, including nights and weekends.' },
      { q: 'Do paid social ads work for education and coaching offers?', a: 'Yes, when the creative leads with outcomes and the follow-up is immediate. Career change and skill-building decisions start in the feed, which is why Meta and TikTok work for programs from trade certifications to coaching memberships. Our coaching campaigns have validated offers at CPLs from $1.07 to $2.43, and every lead fed a same-day follow-up sequence.' },
      { q: 'How should program pages be organized for search?', a: 'Around what people type, not the org chart. Nobody searches "Division of Continuing Studies"; they search "medical billing certification online" or "weekend MBA cost". One page per program, named in the searcher’s language, with cost, format, length, and outcomes answered directly, structured so Google and AI engines can quote it.' }
    ]
  }
};
