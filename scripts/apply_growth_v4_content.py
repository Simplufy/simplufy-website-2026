from pathlib import Path
import json
P=Path('/home/mcgui/simplufy-website-2026/src/data/generatedSeoPages.json')
pages=json.loads(P.read_text())

configs={
'digital-marketing-agency-for-service-businesses':{
 'eyebrow':'Full-funnel marketing for service businesses','visual':'From search to booked opportunity','buyer':['High-intent search or referral visit','Proof-rich page answers the buying questions','Call, form, or booking captures service context','CRM follow-up shows which source created pipeline'],
 'problem_title':'More traffic does not help if the buyer path is leaking',
 'leaks':['Service pages do not explain why Simplufy is different from a generic agency','Forms and calls arrive without source, service, or urgency context','Paid ads, SEO, CRM, and AI workflows are reviewed in separate dashboards','Proof is buried instead of supporting the moment a buyer decides to inquire'],
 'included_title':'A complete marketing system, not a disconnected set of tactics',
 'included_intro':'This service is built for companies that need the website, acquisition channels, CRM, automation, and reporting to support the same revenue path.',
 'proof_title':'The work is judged by pipeline clarity, not marketing noise',
 'proof_body':'Simplufy uses proof assets, CRM visibility, conversion tracking, and channel performance together so service businesses can see which messages create inquiries and which inquiries become real opportunities.',
 'cost_title':'What changes the scope for a full-funnel build',
 'cost_body':'A service business with a strong site and clean CRM needs a different plan than a company rebuilding pages, forms, tracking, campaigns, and automation at the same time.',
 'factors':[('Existing website depth','Whether service, industry, and location pages already answer buyer questions.'),('CRM readiness','Whether forms, calls, calendars, pipelines, and follow-up stages already preserve context.'),('Channel mix','Whether the right first move is SEO/AEO/GEO, Google PPC, LSA, Meta, or AI workflow implementation.'),('Proof library','How many screenshots, reviews, case studies, project photos, and metrics can be used immediately.')],
 'fit_title':'Best for service businesses that want one accountable growth architecture',
 'fit':['You sell through calls, estimates, consultations, appointments, or booked jobs','You need the website and CRM to explain what happened after the lead arrived','You want paid and organic strategy connected instead of managed as separate silos','You care about proof, tracking, and long-term visibility rather than vanity metrics']},
'marketing-agency-for-contractors':{
 'eyebrow':'Contractor lead generation and estimate systems','visual':'From local search to quoted job','buyer':['Homeowner or property manager searches by trade or project','Project-proof page shows service fit, photos, reviews, and coverage area','Estimate request captures job type, location, urgency, and budget context','Quote follow-up keeps unsold opportunities from going cold'],
 'problem_title':'Contractors lose jobs when marketing stops at the lead form',
 'leaks':['Project photos and proof are not close enough to the estimate CTA','The page talks broadly about contracting instead of the exact trade and job type','Quote requests enter the CRM without trade, service area, or urgency fields','Follow-up depends on memory instead of reminders, notes, and pipeline stages'],
 'included_title':'What Simplufy builds for contractors that need more booked estimates',
 'included_intro':'The contractor page has to prove capability quickly, create confidence around the work, and make it easy for the office or owner to follow up on quote-ready opportunities.',
 'proof_title':'Contractor marketing needs proof buyers can see before they call',
 'proof_body':'Simplufy structures contractor campaigns around before-and-after visuals, job categories, service areas, review signals, quote CTAs, and CRM stages that separate serious estimates from low-fit inquiries.',
 'cost_title':'What affects contractor marketing scope',
 'cost_body':'Contractor marketing scope depends on the number of trades, service areas, proof assets, ad channels, and whether the CRM already supports estimate follow-up.',
 'factors':[('Trade complexity','A roofer, remodeler, landscaper, or pest company needs different page sections and proof.'),('Service-area spread','Multiple cities or neighborhoods may require stronger local SEO architecture.'),('Photo and review assets','Better job photos and reviews reduce friction near estimate CTAs.'),('Quote pipeline maturity','CRM stages, missed-call flows, and reminders determine how much backend work is needed.')],
 'fit_title':'Best for contractors that want more than rented leads',
 'fit':['You want owned pages and campaigns instead of depending only on shared lead vendors','You have project proof that should be doing more conversion work','Your team needs cleaner quote follow-up and source tracking','You want to know which services and areas create profitable jobs']},
'marketing-agency-for-local-service-businesses':{
 'eyebrow':'Local service marketing for calls and bookings','visual':'From nearby search to booked service','buyer':['Nearby customer searches with a specific problem','Local page confirms service area, trust, reviews, and availability','Call or booking action captures the request','CRM workflow triggers fast response and next-step reminders'],
 'problem_title':'Local buyers choose the company that feels easiest to trust and contact',
 'leaks':['Pages do not clearly confirm the exact services and places the business covers','Reviews, photos, and differentiators are separated from the conversion path','Calls and bookings are not tagged by source, city, or service need','Marketing reports show traffic but not which local opportunities were worth pursuing'],
 'included_title':'A local acquisition system built around how nearby buyers decide',
 'included_intro':'Local service pages have to answer four questions fast: do you handle this service, do you serve my area, can I trust you, and what happens when I contact you?',
 'proof_title':'Local growth depends on trust signals placed where decisions happen',
 'proof_body':'Simplufy brings local service pages, reviews, proof blocks, Google PPC or LSA, SEO/AEO/GEO structure, and CRM follow-up into one path so local demand is easier to capture and evaluate.',
 'cost_title':'What changes the plan for local service marketing',
 'cost_body':'The plan changes based on service-area complexity, review strength, site structure, current map/search visibility, ad readiness, and lead-handling discipline.',
 'factors':[('Coverage map','A single city strategy is different from a multi-market service-area build.'),('Trust gap','Review depth, photos, guarantees, and proof affect how much conversion work is needed.'),('Search demand','Some services need immediate paid search while SEO compounds.'),('Response process','Fast local follow-up often determines whether the inquiry turns into revenue.')],
 'fit_title':'Best for local companies that need the phone and calendar to move',
 'fit':['You serve defined local markets and want better visibility there','You need pages that make service area and trust obvious','You want source tracking on calls, forms, and bookings','You care about local opportunities, not generic website traffic']},
'service-business-marketing-agency':{
 'eyebrow':'Marketing systems for service companies','visual':'From offer clarity to qualified conversation','buyer':['Prospect researches a service-specific problem','Page explains the offer, process, proof, and next step','Inquiry enters a CRM with source and need attached','Sales feedback improves the message and channel mix'],
 'problem_title':'Service companies need marketing that supports the sales conversation',
 'leaks':['The offer sounds like every other provider in the category','The website does not prepare prospects for the conversation they need to have','The CRM does not capture enough context to improve campaigns','Reporting stops at conversions instead of showing sales-stage movement'],
 'included_title':'A marketing operating system for service businesses',
 'included_intro':'This page is for service companies that need message clarity, channel execution, CRM follow-up, and measurement to work together around the way they actually sell.',
 'proof_title':'The strongest marketing work makes sales easier',
 'proof_body':'Simplufy focuses on the assets that help a service business sell: clear positioning, useful service pages, proof blocks, lead handling, follow-up structure, and reports tied to real conversations.',
 'cost_title':'What changes the scope for a service-business marketing engagement',
 'cost_body':'Scope depends on whether the issue is positioning, traffic, conversion, follow-up, reporting, or all of those at once.',
 'factors':[('Offer clarity','Unclear positioning requires deeper copy and strategy work before traffic scales.'),('Sales motion','Consultations, estimates, appointments, and enrollments need different page flows.'),('Existing channels','Paid search, Meta, SEO, and email/CRM may each need different levels of repair.'),('Measurement gap','Missing conversion and CRM tracking expands the backend buildout.')],
 'fit_title':'Best for service businesses that want marketing tied to conversations',
 'fit':['Your sales happen after a call, estimate, consult, appointment, or proposal','You need the website to answer stronger buyer questions','You want marketing reports connected to CRM reality','You prefer an integrated system over a vendor managing one isolated tactic']},
'lead-generation-agency-for-service-businesses':{
 'eyebrow':'Qualified lead generation for service businesses','visual':'From demand to qualified opportunity','buyer':['Buyer searches or clicks with a specific need','Landing page filters fit, urgency, and service context','Form, call, or booking creates a qualified lead record','Follow-up workflow moves serious prospects toward a conversation'],
 'problem_title':'More leads are not valuable if the team cannot tell which ones matter',
 'leaks':['Campaigns optimize for cheap form fills instead of qualified opportunities','Landing pages do not filter by service, location, urgency, or fit','The CRM treats every inquiry the same even when intent is different','Sales notes never make it back into campaign and page decisions'],
 'included_title':'Lead generation built around qualification, not raw volume',
 'included_intro':'Simplufy builds lead-generation paths that make the buyer’s need clearer before submission and make the follow-up path clearer after submission.',
 'proof_title':'Good lead generation creates better sales conversations',
 'proof_body':'The system is designed to reduce low-fit noise, capture useful context, route the inquiry correctly, and measure the sources that create qualified conversations instead of inflated lead counts.',
 'cost_title':'What affects lead-generation investment',
 'cost_body':'Scope depends on the target service, competition, current landing-page quality, available proof, required CRM logic, and how much testing is needed to separate good leads from bad ones.',
 'factors':[('Lead criteria','The clearer the fit definition, the better campaigns can be judged.'),('Offer friction','Some services need more education before a buyer will request help.'),('Channel cost','Search, LSA, Meta, and SEO have different economics and timelines.'),('Sales feedback','Lead quality improves faster when closed/lost reasons are tracked.')],
 'fit_title':'Best for companies that want better-fit inquiries',
 'fit':['You are tired of judging agencies by lead volume alone','You need lead source and qualification data inside the CRM','You want landing pages that filter and persuade','You can give feedback on which leads become real opportunities']},
'website-crm-and-ads-for-service-businesses':{
 'eyebrow':'Website, CRM, and ads connected','visual':'From click to CRM to close','buyer':['Ad or search click lands on a relevant service page','CTA captures the service need and contact context','CRM record preserves source, page, and campaign data','Pipeline report shows which spend created real opportunities'],
 'problem_title':'Disconnected tools make good marketing look worse than it is',
 'leaks':['Ad platforms report conversions the sales team cannot validate','Forms do not pass source, campaign, or page data into the CRM','The website asks for contact but does not prepare the prospect for the next step','Follow-up stages are too vague to reveal where revenue is leaking'],
 'included_title':'One connected website, CRM, and advertising stack',
 'included_intro':'This solution is for service businesses that have enough moving parts to need clean handoffs: landing pages, tracking, ad campaigns, forms, calendars, call paths, CRM fields, and reporting.',
 'proof_title':'Attribution only matters when it reaches the pipeline',
 'proof_body':'Simplufy connects the customer-facing page with backend lead records so spend, source, service need, stage movement, and follow-up can be reviewed together.',
 'cost_title':'What affects the website + CRM + ads build',
 'cost_body':'The investment depends on how much of the stack already exists, how clean the tracking is, how many campaigns are active, and how detailed the CRM pipeline needs to be.',
 'factors':[('Tracking condition','Broken pixels, forms, UTMs, and call tracking add setup work.'),('CRM complexity','Multiple services, teams, or locations require better routing logic.'),('Landing-page depth','Ads perform better when each major offer has a relevant destination.'),('Reporting needs','Owners often need a simpler view than the raw ad-platform dashboard.')],
 'fit_title':'Best for teams tired of disconnected dashboards',
 'fit':['You run ads but cannot confidently tie spend to opportunities','Your forms and calls do not create clean CRM records','You need landing pages and follow-up workflows built together','You want source-to-pipeline reporting instead of platform-only metrics']},
'ai-marketing-agency-for-service-businesses':{
 'eyebrow':'Practical AI implementation for marketing operations','visual':'From lead intake to assisted follow-up','buyer':['Inquiry or customer action creates a structured record','AI summarizes context and drafts the next internal action','Human review keeps customer-facing steps accurate','Reports and workflows improve as real data accumulates'],
 'problem_title':'AI only helps when it is attached to a real workflow',
 'leaks':['Tools are added before the intake, CRM, and approval process is clear','AI drafts messages without enough service or customer context','Automation creates activity but not better response speed or reporting','Owners cannot tell where AI is saving time or improving outcomes'],
 'included_title':'AI workflows that support marketing, sales, and operations',
 'included_intro':'Simplufy uses AI where it can make the service-business backend faster: lead summaries, task creation, reporting, research, follow-up drafts, and workflow assistance with human checkpoints.',
 'proof_title':'The goal is operational lift, not AI theater',
 'proof_body':'A useful AI marketing system reduces manual handoffs, improves response consistency, clarifies reporting, and helps the team act faster without removing human judgment from important buyer moments.',
 'cost_title':'What affects AI implementation scope',
 'cost_body':'AI scope depends on the current CRM structure, the repeatability of the workflow, the quality of source data, and the level of human review required.',
 'factors':[('Workflow clarity','AI works best when intake, follow-up, and reporting steps are already defined.'),('Data quality','Messy forms, fields, and notes create weak AI outputs.'),('Risk level','Customer-facing automation needs stronger review than internal summaries.'),('Integration depth','CRM, forms, calendars, reports, and documents may each require different connections.')],
 'fit_title':'Best for teams that want useful automation, not gimmicks',
 'fit':['You have repeatable intake, follow-up, reporting, or research tasks','You want human-reviewed AI support inside real workflows','Your CRM needs better summaries, tasks, or reporting assistance','You care about speed and consistency more than novelty']},
'local-service-business-growth-system':{
 'eyebrow':'Local growth system for service companies','visual':'From local visibility to repeat demand','buyer':['Local buyer discovers the business through search, maps, ads, or referral','Page and proof assets make the company feel trustworthy','Booking, call, or form creates a tracked opportunity','Review, reactivation, and referral loops support future demand'],
 'problem_title':'Local growth fails when every tactic is managed separately',
 'leaks':['Search visibility improves but the page still does not convert','Reviews help reputation but are not used near decision points','Booked jobs are not connected to the source that created them','Past customers are not used for reviews, referrals, or reactivation'],
 'included_title':'A local growth loop built around visibility, trust, booking, and retention',
 'included_intro':'This solution treats local growth as a loop: get found, earn trust, capture the inquiry, follow up quickly, complete the job, collect proof, and use that proof to win the next buyer.',
 'proof_title':'A local system compounds when proof and follow-up feed the next search',
 'proof_body':'Simplufy combines service-area pages, ad campaigns, reviews, CRM workflows, proof assets, and reporting so local businesses are not restarting from scratch every month.',
 'cost_title':'What affects local growth-system scope',
 'cost_body':'Scope changes based on market size, service-area spread, current visibility, proof strength, booking process, and whether customer reactivation or review workflows are included.',
 'factors':[('Market footprint','One neighborhood and ten cities require different page and campaign architecture.'),('Proof maturity','The system performs better when reviews, photos, and case examples are usable.'),('Booking process','Calls, calendars, quote forms, and dispatch handoffs each need different CRM logic.'),('Retention loop','Review requests, referral prompts, and reactivation campaigns add compounding value.')],
 'fit_title':'Best for local service companies that want a repeatable growth loop',
 'fit':['You want local visibility connected to proof and booking','You rely on calls, appointments, estimates, or service requests','You want reviews and past customers to support future growth','You need reporting that shows more than website traffic']},
'service-business-lead-management-system':{
 'eyebrow':'Lead management for service-business teams','visual':'From missed inquiry to managed pipeline','buyer':['Lead arrives from form, call, chat, calendar, or ad','System captures source, service, urgency, and owner','Follow-up reminders keep the opportunity moving','Lost reasons and stage data reveal where revenue leaks'],
 'problem_title':'The lead you already paid for is often lost after it arrives',
 'leaks':['Calls are missed without a fast recovery workflow','Forms create notifications but not owned pipeline stages','The team cannot see who followed up or what happened next','Lost leads are never categorized, so the same leakage repeats'],
 'included_title':'A lead-management system built for response speed and accountability',
 'included_intro':'Simplufy builds the intake, pipeline, reminder, and reporting logic that helps service teams handle inquiries consistently after the marketing click.',
 'proof_title':'Lead management turns marketing into a usable sales process',
 'proof_body':'The system gives owners visibility into new inquiries, contacted leads, booked appointments, quotes, won jobs, lost reasons, and follow-up tasks so opportunities stop disappearing.',
 'cost_title':'What affects lead-management system scope',
 'cost_body':'Scope depends on lead sources, team size, pipeline complexity, follow-up requirements, missed-call handling, calendar use, and reporting needs.',
 'factors':[('Lead sources','Forms, calls, chat, calendars, ads, and referrals need different capture rules.'),('Team handoff','Multi-person teams need ownership, reminders, and escalation paths.'),('Pipeline stages','More complex sales motions require clearer stage definitions.'),('Automation depth','Missed-call texts, reminders, summaries, and nurture flows expand the build.')],
 'fit_title':'Best for companies losing leads after the first contact',
 'fit':['You receive inquiries but cannot clearly see what happened to each one','You need faster response and better task ownership','You want missed calls and stale leads handled automatically','You want marketing performance tied to pipeline stages']},
'done-for-you-marketing-system-for-service-businesses':{
 'eyebrow':'Done-for-you growth system for service businesses','visual':'From strategy to managed optimization','buyer':['Audit identifies the biggest revenue-path leaks','Simplufy builds the pages, CRM, campaigns, and workflows','Launch connects traffic, conversion, and follow-up','Ongoing optimization improves the system from real data'],
 'problem_title':'Done-for-you marketing should reduce complexity, not hide it',
 'leaks':['Vendors complete tasks without explaining how the pieces connect','The business receives activity reports but not a clear growth roadmap','Website, ads, CRM, and automation are launched without shared measurement','Optimization is vague because lead quality and sales feedback are not tracked'],
 'included_title':'A managed growth buildout with clear deliverables and reporting',
 'included_intro':'This solution is for service businesses that want Simplufy to plan, build, launch, and improve the growth system across website, CRM, paid media, SEO/AEO/GEO, AI workflows, and reporting.',
 'proof_title':'Managed execution should make the owner’s decisions easier',
 'proof_body':'Simplufy’s done-for-you work is organized around visible deliverables, buyer-facing assets, source-to-pipeline tracking, and prioritized next steps so the business knows what changed and why.',
 'cost_title':'What affects a done-for-you marketing system',
 'cost_body':'Scope depends on how many assets must be built, how many channels are active, whether CRM and automation need setup, and how much ongoing optimization is included.',
 'factors':[('Starting point','A clean existing site needs less rebuilding than a broken funnel.'),('Channel count','SEO, PPC, LSA, Meta, CRM, and AI each add planning and management requirements.'),('Backend complexity','Forms, calendars, pipelines, automations, and reports determine operational scope.'),('Optimization cadence','More frequent testing and reporting requires more ongoing management.')],
 'fit_title':'Best for teams that want Simplufy to own the buildout',
 'fit':['You want strategy, buildout, launch, and optimization handled together','You need clear deliverables instead of vague monthly activity','You want the website, ads, CRM, and reporting connected from the start','You can provide feedback on lead quality and sales outcomes']}
}

for p in pages:
    c=configs[p['slug']]
    p.pop('sections',None)
    p['heroEyebrow']=c['eyebrow']
    p['visualTitle']=c['visual']
    p['buyerPath']=c['buyer']
    p['leakPoints']=c['leaks']
    p['includedTitle']=c['included_title']
    p['includedIntro']=c['included_intro']
    p['problemSection']={'title':c['problem_title'],'paragraphs':p['intro']['paragraphs'][:2]}
    p['proofSection']={'title':c['proof_title'],'body':c['proof_body']}
    p['costSection']={'title':c['cost_title'],'body':c['cost_body'],'factors':[{'title':a,'body':b} for a,b in c['factors']]}
    p['fitSection']={'title':c['fit_title'],'bullets':c['fit']}
    # clean weird sidebar grammar for contact form hidden points
    p['sidebar']['body']=f"Simplufy reviews the current page, traffic sources, CRM handoff, follow-up speed, proof assets, and reporting behind {p['title'].lower()}."
    p['sidebar']['points']=c['leaks'][:4]
    # remove roadmap/internal fields that should never drive UI
    p.pop('priority',None); p.pop('intent',None); p.pop('roadmap_number',None); p.pop('page_type_roadmap',None)

P.write_text(json.dumps(pages,indent=2)+'\n')
print('added v4 fields, removed stale sections/internal roadmap fields')
