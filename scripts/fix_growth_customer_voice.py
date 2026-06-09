from pathlib import Path
import json

P=Path('/home/mcgui/simplufy-website-2026/src/data/generatedSeoPages.json')
pages=json.loads(P.read_text())

copy={
'digital-marketing-agency-for-service-businesses':{
 'heroSubhead':'Most service businesses do not need more disconnected marketing activity. They need a website, search presence, ad strategy, CRM handoff, and follow-up process that all support the same buyer journey from first visit to booked opportunity.',
 'problem_title':'When traffic, proof, and follow-up are disconnected, good opportunities slip away',
 'problem_paragraphs':['A service business can have decent traffic, active ads, and a working contact form while still losing serious buyers. The issue is usually the path between those pieces: the visitor does not see enough proof, the page does not make the next step obvious, or the inquiry reaches the team without the context needed to follow up well.','A strong digital marketing system helps the buyer understand the offer before they contact you and helps your team understand the opportunity after they do. That means service pages, paid campaigns, organic visibility, CRM fields, call tracking, and reporting have to be planned together instead of patched together later.'],
 'leaks':['Your service pages describe what you do, but not why a buyer should trust you over similar providers','Forms and calls arrive without source, service, urgency, budget, or location context','Paid ads, SEO, CRM, and follow-up are reviewed in separate dashboards instead of one revenue path','Reviews, screenshots, project proof, and case studies are not placed close enough to the decision point'],
 'processTitle':'What the buildout usually includes',
 'proof_body':'Simplufy’s role is to connect the visible buyer experience with the backend systems that show whether marketing is creating real opportunities. The work is measured through page engagement, lead source, form and call quality, CRM movement, booked calls, and sales feedback — not just traffic graphs.',
 'ctaSubhead':'Request an audit and we will review your current website, lead sources, CRM handoff, proof assets, and follow-up process so you can see where qualified opportunities are leaking.'},
'marketing-agency-for-contractors':{
 'heroSubhead':'Contractor marketing has to do more than generate form fills. Homeowners and property managers need to see relevant project proof, understand your service area, feel confident in the work, and have a simple way to request an estimate.',
 'problem_title':'Contractors lose jobs when the page does not support the estimate decision',
 'problem_paragraphs':['A contractor can pay for clicks and still lose the job if the landing page feels generic, the photos are weak, the service area is unclear, or the estimate request does not capture the project details your team needs. The buyer is comparing risk, quality, timing, and trust before they ever submit a form.','The strongest contractor marketing pages behave like a sales assistant: they show relevant work, answer common objections, explain the process, qualify the project, and send the request into a follow-up system that helps the team respond quickly.'],
 'leaks':['Your project photos are not organized by service, job type, or buyer concern','Estimate requests arrive without trade, location, scope, urgency, or project notes','The page sounds like a general contractor directory instead of your actual specialty and process','Quote follow-up depends on memory, inboxes, or spreadsheets instead of a visible pipeline'],
 'processTitle':'How the contractor growth buildout works',
 'proof_body':'Simplufy builds contractor marketing around proof a buyer can judge quickly: before-and-after visuals, service-specific landing pages, review placement, estimate CTAs, call tracking, and CRM stages that separate serious quote requests from low-fit inquiries.',
 'ctaSubhead':'Request an audit and we will review your service pages, estimate flow, project proof, ad traffic, and follow-up process to find where better jobs are being lost.'},
'marketing-agency-for-local-service-businesses':{
 'heroSubhead':'Local service buyers want to know whether you handle their problem, serve their area, can be trusted, and will respond quickly. Your marketing should answer those questions before the call or booking request.',
 'problem_title':'Local buyers choose the company that feels easiest to trust and contact',
 'problem_paragraphs':['Local service marketing breaks down when visibility and trust are separated. A business may show up in search, but if the page does not confirm the service area, show proof, answer common questions, and create an easy next step, the buyer keeps comparing options.','A stronger local growth path connects search visibility, local landing pages, reviews, photos, call tracking, booking forms, and CRM follow-up so the business can see which local opportunities are worth pursuing.'],
 'leaks':['Your local pages do not clearly confirm the services, cities, neighborhoods, or response expectations','Reviews and photos exist, but they are not placed near the call or booking decision','Calls and bookings are not tagged by service, city, urgency, or lead source','Reports show traffic and clicks without showing which local inquiries became real opportunities'],
 'processTitle':'How the local service marketing buildout works',
 'proof_body':'Simplufy places trust signals, local proof, service-area clarity, paid search or LSA strategy, SEO/AEO/GEO structure, and CRM follow-up into one buyer path so local demand is easier to capture and evaluate.',
 'ctaSubhead':'Request an audit and we will review your local pages, trust signals, call paths, booking flow, and lead handling to identify where nearby buyers are dropping off.'},
'service-business-marketing-agency':{
 'heroSubhead':'Service-business marketing should help the right prospect understand the offer, start a qualified conversation, and give your team enough context to follow up with confidence.',
 'problem_title':'Service companies need marketing that supports the sales conversation',
 'problem_paragraphs':['Many service businesses do not have a traffic problem first. They have an offer clarity problem, a proof problem, a conversion-path problem, or a follow-up problem. The page might attract visitors, but it does not prepare them for a call, estimate, consultation, or proposal.','A stronger marketing system connects positioning, service pages, buyer education, lead capture, CRM stages, and reporting so the business can improve the entire sales path instead of guessing which tactic is broken.'],
 'leaks':['Your offer sounds similar to competitors even when the actual service is better','The website does not answer the questions prospects ask before a call or consultation','Lead records do not capture enough context to improve messaging, ads, or follow-up','Reporting stops at conversions instead of showing how prospects move through the sales process'],
 'processTitle':'What a service-business marketing buildout should include',
 'proof_body':'Simplufy focuses the work around assets that make sales easier: clearer positioning, useful service pages, proof blocks, better lead capture, CRM follow-up, and reports tied to real prospect conversations.',
 'ctaSubhead':'Request an audit and we will review your offer clarity, buyer path, service pages, CRM handoff, and reporting so you can see what is holding back qualified conversations.'},
'lead-generation-agency-for-service-businesses':{
 'heroSubhead':'Lead generation should not be judged by form volume alone. A useful system attracts the right buyer, filters fit, captures context, and helps your team follow up before the opportunity goes cold.',
 'problem_title':'More leads are not valuable if your team cannot tell which ones matter',
 'problem_paragraphs':['Cheap leads can make reports look better while making the business harder to run. If the landing page does not filter intent, location, service need, urgency, or fit, the team spends time chasing inquiries that were never likely to become revenue.','Better lead generation connects the message, page, offer, channel, form, call path, CRM fields, and sales feedback loop so campaigns can be judged by qualified opportunities instead of raw submissions.'],
 'leaks':['Campaigns optimize for low-cost form fills instead of qualified opportunities','Landing pages do not filter by service, location, urgency, budget, or buyer fit','The CRM treats every inquiry the same even when intent and quality are different','Sales feedback never makes it back into campaign targeting, page copy, or offer decisions'],
 'processTitle':'How a qualified lead-generation system is built',
 'proof_body':'Simplufy structures lead generation around qualification signals, source tracking, page intent, CRM fields, response speed, and closed/lost feedback so the business can see which channels create usable opportunities.',
 'ctaSubhead':'Request an audit and we will review your current lead sources, landing pages, qualification fields, CRM stages, and follow-up speed to find where lead quality is breaking down.'},
'website-crm-and-ads-for-service-businesses':{
 'heroSubhead':'Your website, CRM, and ad accounts should not tell three different stories. The buyer experience and backend reporting need to stay connected from click to form, call, appointment, quote, or closed opportunity.',
 'problem_title':'Disconnected tools make good marketing harder to understand',
 'problem_paragraphs':['A service business can run ads, collect leads, and use a CRM while still lacking a clear view of what is working. The gap usually appears between the landing page, the form or call, the CRM record, and the report the owner sees later.','A connected website, CRM, and advertising system preserves context through the entire path: where the visitor came from, what they saw, what they requested, who followed up, and whether the opportunity moved forward.'],
 'leaks':['Ad platforms report conversions that your sales or operations team cannot validate','Forms, calls, and bookings do not pass source, campaign, page, or service data into the CRM','Landing pages ask for contact information before creating enough confidence to take action','Pipeline stages are too vague to show where revenue is actually leaking'],
 'processTitle':'How the website, CRM, and ads stack gets connected',
 'proof_body':'Simplufy connects landing pages, tracking, forms, calls, campaign data, CRM fields, pipeline stages, and owner-facing reports so marketing spend can be reviewed against real opportunities.',
 'ctaSubhead':'Request an audit and we will review your landing pages, tracking, ad accounts, CRM fields, and reporting handoff to show where the stack is disconnected.'},
'ai-marketing-agency-for-service-businesses':{
 'heroSubhead':'AI only helps when it improves a real workflow. For service businesses, that usually means faster intake, cleaner summaries, better reporting, smarter follow-up support, and less manual work behind the scenes.',
 'problem_title':'AI tools create noise when they are not attached to a real workflow',
 'problem_paragraphs':['Many businesses add AI tools before defining the process those tools are supposed to improve. That leads to disconnected automations, generic outputs, unclear ownership, and customer-facing risks that still require manual cleanup.','A practical AI marketing system starts with the workflow: lead intake, CRM fields, summaries, task creation, reporting, follow-up drafts, approval steps, and the human checkpoints that protect quality.'],
 'leaks':['AI tools are added before the intake, CRM, approval, and reporting process is clear','AI-generated messages lack enough service, customer, or job context to be useful','Automation creates activity without improving response speed, consistency, or decision-making','Owners cannot tell where AI is saving time, improving follow-up, or reducing manual work'],
 'processTitle':'How practical AI workflows are planned and implemented',
 'proof_body':'Simplufy uses AI where it can support real operations: lead summaries, task creation, reporting assistance, research, follow-up drafts, and workflow support with human review where it matters.',
 'ctaSubhead':'Request an audit and we will review your intake process, CRM structure, reporting needs, repetitive tasks, and AI opportunities to find where automation can safely help.'},
'local-service-business-growth-system':{
 'heroSubhead':'Local growth is not one tactic. It is the loop between search visibility, trust signals, booking or call paths, customer follow-up, reviews, referrals, and repeat demand.',
 'problem_title':'Local growth stalls when every tactic is managed separately',
 'problem_paragraphs':['A local business can improve search visibility and still miss growth if the page does not convert, the phone process is inconsistent, reviews are not used well, or past customers are not brought back into the system. Local growth depends on the full loop.','A better system connects local pages, Google visibility, paid campaigns, reviews, photos, call tracking, booking flows, CRM follow-up, review requests, reactivation, and reporting so the business compounds trust over time.'],
 'leaks':['Search visibility improves, but the page still does not turn enough visitors into calls or bookings','Reviews help reputation, but they are not placed where buyers are deciding whether to contact you','Booked jobs are not connected to the channel, page, or service that created them','Past customers are not consistently used for reviews, referrals, reactivation, or repeat work'],
 'processTitle':'How a local growth system is built',
 'proof_body':'Simplufy builds local growth around visibility, trust, conversion, follow-up, proof collection, and customer reactivation so the business is not starting from zero every month.',
 'ctaSubhead':'Request an audit and we will review your local search presence, service-area pages, reviews, call paths, booking flow, and retention opportunities.'},
'service-business-lead-management-system':{
 'heroSubhead':'The lead you already paid for should not disappear after the first call, form, or missed message. A lead-management system gives your team visibility, ownership, reminders, and reporting after the inquiry arrives.',
 'problem_title':'The most expensive lead is the one your team loses after it arrives',
 'problem_paragraphs':['Many service businesses focus on generating more inquiries while the existing pipeline is leaking. Missed calls, slow responses, unclear ownership, vague stages, and forgotten follow-ups can erase the value of marketing that was already paid for.','A stronger lead-management system captures the source and context of each inquiry, assigns the next step, tracks stage movement, creates reminders, and shows where opportunities are being won or lost.'],
 'leaks':['Calls are missed without a fast recovery workflow or clear ownership','Forms create notifications, but not structured records with stages and next steps','The team cannot quickly see who followed up, what was said, or what needs to happen next','Lost leads are not categorized, so the same follow-up problems repeat every month'],
 'processTitle':'How the lead-management system gets organized',
 'proof_body':'Simplufy structures lead management around intake, source tracking, assignment, response speed, pipeline stages, reminders, missed-call recovery, and reporting that shows what happened after each inquiry.',
 'ctaSubhead':'Request an audit and we will review your forms, calls, CRM stages, follow-up tasks, missed-call process, and reporting to find where leads are being lost.'},
'done-for-you-marketing-system-for-service-businesses':{
 'heroSubhead':'Done-for-you marketing should give your business a clearer growth system, not another set of disconnected monthly tasks. The website, campaigns, CRM, automation, and reporting need to support one plan.',
 'problem_title':'Done-for-you marketing should reduce complexity, not hide it',
 'problem_paragraphs':['Many businesses hire help because they want fewer moving parts, but they end up with more disconnected activity: ads in one place, pages in another, CRM work somewhere else, and reports that do not explain what should happen next.','A stronger done-for-you system gives the business visible deliverables, clear priorities, connected tracking, better buyer-facing assets, CRM follow-up, and ongoing optimization based on what leads and sales are actually doing.'],
 'leaks':['Vendors complete tasks without explaining how the pieces connect to the buyer journey','The business receives activity reports without a clear roadmap for what should improve next','Website, ads, CRM, and automation launch without shared measurement or ownership','Optimization stays vague because lead quality and sales feedback are not tracked consistently'],
 'processTitle':'How a done-for-you growth system is planned and managed',
 'proof_body':'Simplufy organizes done-for-you work around visible deliverables, buyer-facing assets, source-to-pipeline tracking, CRM handoffs, and prioritized next steps so the business knows what changed and why.',
 'ctaSubhead':'Request an audit and we will review your website, campaigns, CRM, automation, reporting, and current priorities to map the highest-impact buildout path.'}
}

for p in pages:
    c=copy[p['slug']]
    p['heroSubhead']=c['heroSubhead']
    p['processTitle']=c['processTitle']
    p['problemSection']={'title':c['problem_title'],'paragraphs':c['problem_paragraphs']}
    p['leakPoints']=c['leaks']
    if 'sidebar' in p:
        p['sidebar']['points']=c['leaks']
    if 'proofSection' in p:
        p['proofSection']['body']=c['proof_body']
    p['ctaSubhead']=c['ctaSubhead']
    # remove keyword-stuffed formula from FAQs and labels
    for faq in p.get('faqs',[]):
        faq['a']=faq['a'].replace('After launching a digital marketing agency for service businesses asset, Simplufy reviews search impressions, engagement, calls, form starts, booked opportunities, CRM movement, and sales feedback to decide the next improvement.', 'After launch, the important numbers are qualified calls, form quality, booked opportunities, CRM stage movement, response speed, and sales feedback — not traffic alone.')
        faq['a']=faq['a'].replace('asset, Simplufy reviews search impressions, engagement, calls, form starts, booked opportunities, CRM movement, and sales feedback to decide the next improvement.', 'system, the important numbers are qualified inquiries, booked opportunities, CRM stage movement, response speed, and sales feedback.')
    # clean module copy that had awkward articles
    for module in p.get('modules',[]):
        module['body']=module['body'].replace('the a ','the ').replace('The a ','The ')
        module['title']=module['title'].replace('Simplufy service-business operating system','Connected service-business system').replace('Simplufy lead-management operating system','Connected lead-management system')
    for comp in p.get('comparisons',[]):
        comp['body']=comp['body'].replace('the a ','the ').replace('The a ','The ')
        comp['title']=comp['title'].replace('Simplufy service-business operating system','Connected service-business system').replace('Simplufy lead-management operating system','Connected lead-management system')

P.write_text(json.dumps(pages,indent=2)+'\n')
print('rewrote customer-facing voice across all growth pages')
