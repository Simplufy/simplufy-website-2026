from pathlib import Path
import json

P=Path('/home/mcgui/simplufy-website-2026/src/data/generatedSeoPages.json')
pages=json.loads(P.read_text())

updates={
'digital-marketing-agency-for-service-businesses':{
 'ctaHeadline':'Get a free digital marketing audit for your service business',
 'comparisonTitle':'How to choose a digital marketing partner for a service business',
 'educationTitle':'What to understand before you invest in more marketing',
 'dataTitle':'The numbers that show whether marketing is creating real opportunities',
 'faq':[
  ('What should a digital marketing agency do for a service business?','A good agency should improve the full path from visibility to booked opportunity: website clarity, paid search, Local Services Ads, Meta campaigns, SEO/AEO/GEO content, CRM handoff, follow-up workflows, reporting, and practical automation where it helps.'),
  ('Why not hire separate vendors for ads, SEO, and CRM?','Separate vendors can work, but the handoffs often create blind spots. The page, campaign, form, CRM field, follow-up message, and report all need to support the same buyer journey, or qualified leads become harder to track and improve.'),
  ('What should we look at before spending more on marketing?','Start with the current buyer path: what the visitor sees, what proof supports the decision, how the inquiry is captured, how fast the team follows up, and whether reporting shows lead quality instead of only traffic or form counts.'),
  ('How long does it take to see improvement?','Some fixes, such as clearer CTAs, better tracking, and improved follow-up fields, can improve visibility quickly. Organic authority, SEO/AEO/GEO content, and stronger conversion data usually compound over several months.'),
  ('What makes the audit useful?','The audit looks for practical leaks: unclear service pages, weak proof placement, missing tracking, disconnected CRM fields, slow follow-up, and reporting gaps that make marketing performance harder to understand.')],
 'processBodies':['Clarify the services, buyers, locations, and offers that deserve the most visibility before changing campaigns or pages.','Rework the website path so visitors see the right proof, understand the next step, and can contact the business without friction.','Connect forms, calls, ads, SEO pages, and CRM records so the team can see where each opportunity came from and what happened next.','Use lead quality, booked opportunities, sales notes, and pipeline movement to decide which pages, campaigns, and workflows should improve next.']},
'marketing-agency-for-contractors':{
 'ctaHeadline':'Get a free contractor marketing audit',
 'comparisonTitle':'How to choose a marketing partner for your contracting business',
 'educationTitle':'What contractors should understand before investing in more leads',
 'dataTitle':'The numbers that show whether marketing is producing better estimate requests',
 'faq':[
  ('What does contractor marketing include?','Contractor marketing should include service-specific pages, project proof, search visibility, paid lead sources when appropriate, estimate-focused CTAs, call tracking, CRM routing, and follow-up workflows that help the team respond quickly.'),
  ('Which contractor trades fit this approach?','This works best for contractors and specialty trades that need more qualified estimate requests, clearer service-area visibility, stronger project proof, and a better way to track which channels produce real jobs.'),
  ('How do you improve estimate quality?','Estimate quality improves when pages explain the right service, show relevant proof, filter the project type, collect useful details, and pass those details into a follow-up system the team actually uses.'),
  ('What proof should contractors show?','Before-and-after photos, project galleries, reviews, service-area examples, financing or warranty details, and clear process explanations all help buyers feel safer before requesting an estimate.'),
  ('Should contractors run ads or focus on SEO first?','It depends on demand, budget, timeline, and service area. Paid campaigns can create faster testing data, while SEO and local pages build durable visibility. The best plan often uses both with shared tracking.')],
 'processBodies':['Identify the most profitable services, service areas, project types, and buyer concerns before building pages or campaigns.','Place photos, reviews, job examples, and process details close to the estimate request so prospects can judge fit quickly.','Route calls and estimate requests into a CRM with trade, location, urgency, source, and job notes attached.','Use booked estimates, job quality, close feedback, and lead source data to decide what to scale or refine.']},
'marketing-agency-for-local-service-businesses':{
 'ctaHeadline':'Get a free local service marketing audit',
 'comparisonTitle':'How to choose a marketing partner for a local service business',
 'educationTitle':'What local service businesses should know before spending more',
 'dataTitle':'The numbers that show whether local visibility is turning into real demand',
 'faq':[
  ('What does local service marketing include?','Local service marketing should connect service-area pages, Google visibility, reviews, paid search or LSA where appropriate, booking or call paths, CRM fields, and follow-up so nearby buyers can contact the business with confidence.'),
  ('How is this different from local SEO alone?','Local SEO helps buyers find the business. A full local marketing system also has to convert visitors, capture source and service context, route inquiries, support follow-up, and show which local opportunities were worth pursuing.'),
  ('Can this support multiple service areas?','Yes, but each area needs useful context. Thin city-name swaps are not enough. Strong local pages explain services, proof, response expectations, and buyer concerns for the areas the business actually serves.'),
  ('How are local leads tracked?','Calls, forms, bookings, campaigns, pages, services, cities, and CRM stages should be connected so the business can see which sources produce qualified inquiries.'),
  ('What should be fixed first?','Usually the best first step is finding where demand already exists but leaks: unclear local pages, weak trust signals, missed calls, slow follow-up, or reporting that stops at clicks.')],
 'processBodies':['Map the services, locations, and buyer situations that should be easiest to find and trust.','Build or improve local pages with service-area clarity, reviews, photos, FAQs, and visible next steps.','Connect calls, forms, bookings, and CRM stages so every local inquiry keeps its source and service context.','Use local lead behavior, call quality, booked jobs, and review data to decide the next improvements.']},
'service-business-marketing-agency':{
 'ctaHeadline':'Get a free marketing audit for your service business',
 'comparisonTitle':'How to choose a marketing agency for a service business',
 'educationTitle':'What service businesses should know before hiring marketing help',
 'dataTitle':'The numbers that show whether marketing is supporting the sales conversation',
 'faq':[
  ('What should a service business marketing agency handle?','A service-business agency should help clarify the offer, improve service pages, create better conversion paths, manage the right channels, connect CRM follow-up, and report on qualified opportunities instead of vanity metrics.'),
  ('How do you choose the right channels?','Channel choice should come from the buyer, service, margin, urgency, market, and current proof. Some businesses need paid search first; others need stronger pages, local visibility, CRM cleanup, or retargeting before adding spend.'),
  ('What makes service-business marketing different?','The sale usually continues after the first click. The website and campaigns need to create a qualified conversation, not just a visit or form fill.'),
  ('How should results be measured?','Useful reporting should show source, lead quality, response speed, booked conversations, pipeline movement, and sales feedback, not only sessions, clicks, and impressions.'),
  ('What does the audit cover?','The audit reviews positioning, page clarity, proof placement, conversion paths, tracking, CRM handoff, follow-up, and reporting gaps.')],
 'processBodies':['Clarify the offer, buyer, service mix, proof, and highest-value conversion points before recommending channels.','Improve the service pages and conversion path so prospects understand why to contact the business and what happens next.','Connect lead capture, CRM fields, follow-up tasks, and source tracking so the team can act on each inquiry.','Use sales feedback and pipeline movement to refine positioning, campaigns, pages, and follow-up priorities.']},
'lead-generation-agency-for-service-businesses':{
 'ctaHeadline':'Get a free lead generation audit for your service business',
 'comparisonTitle':'How to choose a lead generation partner for a service business',
 'educationTitle':'What to understand before buying more leads',
 'dataTitle':'The numbers that separate qualified opportunities from cheap form fills',
 'faq':[
  ('What counts as a qualified lead?','A qualified lead has enough fit, location, service need, urgency, budget context, or intent to justify real follow-up. The exact criteria depend on the service and sales process.'),
  ('How is lead generation different from ads management?','Ads management focuses on running campaigns. Lead generation has to connect the offer, landing page, qualification logic, tracking, CRM, response process, and feedback loop.'),
  ('Can bad-fit inquiries be reduced?','Yes. Better page copy, form questions, service-area clarity, negative targeting, CRM tagging, and feedback from the sales team can reduce wasted follow-up.'),
  ('What data is needed to optimize lead quality?','Useful data includes source, campaign, page, service request, location, urgency, qualification notes, follow-up outcome, booked status, and lost reason.'),
  ('Should lead volume or lead quality come first?','Quality should come first. Volume without qualification can make the team busier while creating fewer real opportunities.')],
 'processBodies':['Define what a qualified opportunity actually looks like before spending more on traffic.','Improve the landing page, offer, proof, and form path so the right buyers are encouraged to inquire.','Pass source, urgency, service need, and ownership into the CRM so follow-up is faster and more useful.','Use cost per qualified opportunity, booked calls, sales notes, and lost reasons to improve the next campaign or page.']},
'website-crm-and-ads-for-service-businesses':{
 'ctaHeadline':'Get a free website, CRM, and ads audit',
 'comparisonTitle':'How to choose help for a disconnected website, CRM, and ad stack',
 'educationTitle':'What to understand before adding more tools or ad spend',
 'dataTitle':'The numbers that show whether the stack is connected',
 'faq':[
  ('Why connect website, CRM, and ads?','Because the business needs to know which campaign, page, form, call, and follow-up path created each opportunity. Without that connection, it is hard to improve spend or sales process.'),
  ('What CRM fields matter most?','Source, campaign, service need, location, urgency, lead status, owner, next step, booked status, and lost reason are usually the fields that make reporting and follow-up more useful.'),
  ('Can this work with GoHighLevel?','Yes. The important part is planning the fields, forms, pipelines, automations, and reporting around the actual buyer journey instead of treating the CRM as a contact list.'),
  ('How does this improve reporting?','It connects marketing activity to lead quality and pipeline movement, so the business can see which sources create real opportunities.'),
  ('What should be audited first?','Start with the current landing pages, tracking setup, form and call routing, CRM fields, pipeline stages, and ad conversion events.')],
 'processBodies':['Audit the current website, forms, calls, CRM fields, tracking, and campaign structure to find where context is lost.','Improve the landing pages so they create enough clarity and confidence before asking for contact.','Align campaigns with CRM fields so source, service, urgency, and stage data follow the lead into the pipeline.','Report from source to opportunity so spend decisions are based on lead quality and sales movement.']},
'ai-marketing-agency-for-service-businesses':{
 'ctaHeadline':'Get a free AI workflow audit for your service business',
 'comparisonTitle':'How to choose practical AI support for a service business',
 'educationTitle':'What to understand before adding AI to your marketing or operations',
 'dataTitle':'The numbers that show whether AI is actually helping',
 'faq':[
  ('What does an AI marketing agency do for service businesses?','Practical AI support can improve lead summaries, intake routing, reporting, research, draft follow-up, task creation, and internal workflows, but it should be attached to a clear process with human review where needed.'),
  ('Where is AI actually useful?','AI is useful where repetitive work slows the team down: summarizing inquiries, preparing follow-up drafts, organizing CRM notes, surfacing reporting insights, and supporting content or research workflows.'),
  ('What should stay human-reviewed?','Anything that affects pricing, promises, sensitive customer communication, compliance, or final sales judgment should keep human approval.'),
  ('Can AI improve speed-to-lead?','Yes, when it helps summarize context, assign ownership, create tasks, and draft the next step quickly. It cannot fix an unclear intake process by itself.'),
  ('What should be audited before implementation?','Review intake, CRM data, follow-up steps, reporting needs, repetitive admin work, approval points, and the risk of incorrect or off-brand output.')],
 'processBodies':['Identify repetitive tasks, intake gaps, reporting needs, and approval points before choosing tools.','Clean up the CRM fields, prompts, source data, and handoff rules that AI needs to produce useful output.','Connect AI-assisted actions to CRM tasks, reporting views, summaries, and human review steps.','Use workflow feedback, time saved, response speed, and quality checks to decide where automation should expand or be limited.']},
'local-service-business-growth-system':{
 'ctaHeadline':'Get a free local growth audit for your service business',
 'comparisonTitle':'How to choose a local growth system instead of another isolated tactic',
 'educationTitle':'What local service companies should understand before scaling',
 'dataTitle':'The numbers that show whether local growth is compounding',
 'faq':[
  ('What is a local service business growth system?','It is the connected loop between search visibility, service-area pages, trust signals, calls or bookings, CRM follow-up, reviews, referrals, reactivation, and reporting.'),
  ('How is it different from a marketing campaign?','A campaign is one push. A growth system keeps improving how the business gets found, gets trusted, captures demand, follows up, earns proof, and brings customers back.'),
  ('What should be connected first?','Start with the highest-leak areas: local pages, reviews, call tracking, booking flow, CRM stages, and follow-up ownership.'),
  ('How do reviews fit into the system?','Reviews should support both visibility and conversion. They need to be requested consistently and placed where buyers are deciding whether to call or book.'),
  ('How should local growth be measured?','Measure local visibility, call quality, booked jobs, review growth, repeat customers, referrals, and which pages or channels create profitable opportunities.')],
 'processBodies':['Map the services, areas, buyer questions, and trust signals that matter most for local demand.','Improve search visibility, service pages, reviews, call paths, and booking flows so buyers can act with less friction.','Install review, referral, retention, and reactivation loops so each good job can support future demand.','Measure growth beyond the first contact by tracking booked jobs, reviews, repeat work, referrals, and source quality.']},
'service-business-lead-management-system':{
 'ctaHeadline':'Get a free lead management audit for your service business',
 'comparisonTitle':'How to choose a lead management system for a service business',
 'educationTitle':'What to understand before rebuilding your follow-up process',
 'dataTitle':'The numbers that show whether leads are being handled well',
 'faq':[
  ('What is a lead management system?','It is the process and CRM structure that captures each inquiry, preserves source and service context, assigns ownership, tracks stage movement, creates follow-up reminders, and shows what happened next.'),
  ('Why do service businesses lose leads?','Leads are often lost because of missed calls, slow response, unclear ownership, vague CRM stages, weak notes, no reminders, and no lost-reason tracking.'),
  ('What should happen after a missed call?','The team should have a clear recovery workflow: notification, ownership, quick callback, text or email support, CRM note, and a next-step reminder if the person does not answer.'),
  ('Can automation help without making follow-up robotic?','Yes. Automation should support reminders, routing, summaries, and recovery messages while keeping important conversations human.'),
  ('What should reporting show?','Reporting should show source, response time, owner, stage, booked status, stale leads, lost reasons, and the follow-up gaps that need attention.')],
 'processBodies':['Map current forms, calls, missed-call handling, CRM stages, owners, and follow-up expectations.','Organize intake fields and pipeline stages so each new inquiry has context and a clear next step.','Automate reminders, missed-call recovery, task creation, and owner visibility without removing human judgment.','Review lost leads, stale stages, response gaps, and source quality so the same leakage does not repeat.']},
'done-for-you-marketing-system-for-service-businesses':{
 'ctaHeadline':'Get a free done-for-you marketing audit for your service business',
 'comparisonTitle':'How to choose a done-for-you marketing partner without losing visibility',
 'educationTitle':'What to understand before outsourcing your marketing execution',
 'dataTitle':'The numbers that show whether managed marketing is actually moving the business',
 'faq':[
  ('What is included in a done-for-you marketing system?','A strong managed system can include website improvements, service pages, paid campaigns, SEO/AEO/GEO content, CRM setup, automation, reporting, and ongoing optimization tied to qualified opportunities.'),
  ('How is this different from hiring one specialist?','One specialist usually owns one channel. A done-for-you system has to coordinate the buyer journey, website, campaigns, CRM, follow-up, and reporting so the pieces do not work against each other.'),
  ('What does the business still need to provide?','The business still needs to provide service knowledge, proof, sales feedback, approvals, access to tools, and honest input about which leads and jobs are actually valuable.'),
  ('How are deliverables prioritized?','Priorities should come from impact: the biggest leaks in offer clarity, proof, conversion, tracking, lead handling, or channel performance come first.'),
  ('What should reporting include?','Reporting should explain what changed, why it changed, what happened in the pipeline, what was learned, and what should improve next.')],
 'processBodies':['Audit the current website, campaigns, CRM, proof assets, reporting, and follow-up to find the biggest execution gaps.','Turn the audit into a practical roadmap with clear ownership, priority, and expected business purpose for each deliverable.','Launch channels, pages, workflows, and reporting with shared measurement instead of isolated task completion.','Iterate with transparent reporting, lead quality feedback, sales notes, and visible next steps.']}
}

for p in pages:
    u=updates[p['slug']]
    for key in ['ctaHeadline','comparisonTitle','educationTitle','dataTitle']:
        p[key]=u[key]
    p['faqs']=[{'q':q,'a':a} for q,a in u['faq']]
    if len(p.get('process',[]))==len(u['processBodies']):
        for step,body in zip(p['process'],u['processBodies']):
            step['body']=body
    # Replace awkward education section titles/body if they still use keyword-swapped phrasing.
    for section in p.get('education',[]):
        title=section.get('title','').lower()
        if 'where simplufy adds leverage' in title:
            section['title']='What stronger execution changes'
            section['paragraphs']=['The strongest improvement is usually not one isolated tactic. It is the connection between the page, proof, channel, CRM, follow-up, and reporting. When those pieces work together, the business can see which opportunities are worth more attention and which gaps need to be fixed next.']
        elif 'before the first call' in title or 'buyer needs' in title:
            section['title']='What the buyer needs before they contact you'
            section['paragraphs']=['Most buyers need clarity before they are ready to reach out. They want to understand the service, see enough proof, know what happens next, and feel that the business can handle their specific situation.']
        elif 'after the lead arrives' in title or 'after the first click' in ''.join(section.get('paragraphs',[])).lower():
            section['title']='What your team needs after the inquiry'
            section['paragraphs']=['The team needs source context, service need, urgency, ownership, and a clear next step. Without that handoff, even good marketing can turn into slow follow-up and unclear reporting.']

P.write_text(json.dumps(pages,indent=2)+'\n')
print('rewrote CTAs, FAQs, process bodies, and awkward education sections')
