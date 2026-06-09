from pathlib import Path
import json, datetime, re
ROOT=Path('/home/mcgui/simplufy-website-2026')
P=ROOT/'src/data/generatedSeoPages.json'
pages=json.loads(P.read_text())
by={p['slug']:p for p in pages}

def section(eyebrow,title,paras,bullets=None):
    return {'eyebrow':eyebrow,'title':title,'paragraphs':paras,'bullets':bullets or []}

def faq(q,a): return {'q':q,'a':a}
base_internal=[
 {'href':'/services/web-development/','label':'Web development','reason':'see how the conversion-focused site foundation is built'},
 {'href':'/services/crm-solutions/','label':'CRM solutions','reason':'connect forms, calls, pipelines, reminders, and source tracking'},
 {'href':'/services/google-ppc-management/','label':'Google PPC management','reason':'capture high-intent search demand when organic visibility is still growing'},
 {'href':'/services/google-local-service-ads/','label':'Google Local Services Ads','reason':'compare booked-lead and verified-provider campaigns'},
 {'href':'/services/seo-aeo-geo/','label':'SEO, AEO, and GEO','reason':'build durable search visibility across Google and answer engines'},
 {'href':'/services/ai-implementation-agent-orchestration/','label':'AI implementation','reason':'automate intake, routing, reporting, and follow-up without losing the human handoff'},
 {'href':'/case-studies/','label':'Case studies','reason':'review proof from real Simplufy builds and growth systems'},
 {'href':'/contact/','label':'Free audit','reason':'get a prioritized action plan for the current funnel'}]
refs=[
 {'href':'https://support.google.com/google-ads/answer/6167122','label':'Google Ads conversion tracking','reason':'use conversion data to connect spend with booked opportunities'},
 {'href':'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data','label':'Google structured data documentation','reason':'support clearer page context and eligible rich-result features'},
 {'href':'https://schema.org/FAQPage','label':'Schema.org FAQPage','reason':'structure frequently asked questions for search engines'},
 {'href':'https://www.sba.gov/business-guide/manage-your-business/marketing-sales','label':'U.S. Small Business Administration marketing and sales guide','reason':'ground the growth strategy in practical buyer acquisition principles'}]

DATA={
'digital-marketing-agency-for-service-businesses':{
 'title':'Digital Marketing Agency for Service Businesses',
 'meta':'Digital marketing agency for service businesses that connects websites, CRM, ads, SEO, AI follow-up, and reporting into one qualified-lead system.',
 'hero':'Digital marketing for service businesses that turns searches, clicks, and referrals into booked conversations',
 'sub':'Simplufy builds the pieces most service companies need but rarely have connected: a trust-building website, search-ready pages, paid campaigns, CRM follow-up, source tracking, and AI-assisted operations that keep leads from slipping through the cracks.',
 'parent':{'href':'/services/web-development/','label':'Explore the full website + CRM system'},
 'visual':{'label':'Service business growth engine','nodes':['Search demand','Proof-rich website','Booked call','CRM follow-up'],'flow':['Capture intent','Build trust','Route the lead','Measure revenue'],'stats':[{'value':'5 layers','label':'website, SEO, ads, CRM, automation'}, {'value':'24/7','label':'lead capture and routing'}, {'value':'1 view','label':'source-to-pipeline reporting'}], 'accent':'core'},
 'sections':[
  section('Buyer problem','Most service businesses do not need more random marketing. They need a connected revenue path.',[
   'A contractor, clinic, installer, detailer, training company, or local service team can have a good reputation and still lose demand online. The website may not answer urgent buyer questions. The ad account may generate form fills that never become estimates. The CRM may store contacts without showing which channel created the opportunity. The result is a business that feels busy but cannot see which marketing activity is actually producing revenue.',
   'Ranking pages for this keyword tend to promise more leads, less wasted effort, and a clearer marketing system. Simplufy’s version goes further by connecting the public-facing website to the backend sales process. The goal is not only to attract traffic; it is to make every qualified visitor easier to understand, respond to, and convert.'
  ],['Clarify the offer by service, industry, and urgency','Give prospects proof before they ever submit a form','Preserve source, service, and intent data inside the CRM','Measure booked calls and opportunities instead of vanity traffic']),
  section('What we build','A full-stack marketing system for service businesses',[
   'Simplufy starts with the parts of the funnel a buyer actually touches: the search result, the page they land on, the trust signals they scan, the form or calendar they use, and the follow-up they receive. Each part is designed to reduce hesitation and move the prospect toward a useful next step.',
   'The system can include high-converting service pages, location or industry pages, Google PPC campaigns, Local Services Ads, Meta retargeting, CRM automations, missed-call text back, review flows, reporting dashboards, and AI-assisted lead routing. The exact mix depends on whether your bottleneck is visibility, conversion, speed-to-lead, follow-up, or attribution.'
  ],['SEO/AEO/GEO page architecture for service demand','Paid search campaigns tied to page and CRM intent','CRM workflows for new lead, estimate, booked, won, and lost stages','AI-assisted summaries, reminders, routing, and reporting']),
  section('Proof angle','The page has to sell competence before the call',[
   'Service buyers are trying to avoid risk. They want to know whether you understand their job type, their timeline, their local market, and the outcome they care about. That is why the site needs more than a polished headline. It needs service-specific proof, process details, comparison context, pricing guidance, and clear answers to common objections.',
   'Simplufy uses case-study style proof blocks, before/after screenshots, result metrics, workflow graphics, and page-specific CTAs so visitors can quickly see what the engagement would feel like. When a buyer sees a practical system instead of a generic agency pitch, the sales conversation starts with more trust.'
  ]),
  section('Budget context','What impacts cost and timeline',[
   'A simple website refresh costs less than a full growth system with CRM rebuilds, paid media, SEO clusters, reporting, and AI automations. The right budget depends on the current assets, number of services, competition level, ad spend, integrations, and how quickly the business needs new opportunities.',
   'During an audit, Simplufy separates urgent fixes from compounding assets. If leads are being lost because forms do not route correctly, that gets solved before a large content buildout. If tracking is broken, attribution gets fixed before scaling spend. If the offer is unclear, the page and messaging get repaired before adding traffic.'
  ]),
  section('Operating model','How Simplufy improves the system after launch',[
   'The first launch is only the baseline. After publishing, the pages and campaigns should be reviewed for impressions, clicks, form starts, call clicks, booked calls, lead quality, sales notes, and pipeline movement. That data shows whether the next best move is stronger copy, new pages, better proof, different offers, ad testing, or CRM cleanup.',
   'For service businesses, the winning strategy is usually iterative. Build the core pages, connect the tracking, watch what prospects actually do, and improve the weakest link each week.'
  ])],
 'faqs':[faq('What makes Simplufy different from a normal digital marketing agency?','Simplufy focuses on the full path from search and ad click to CRM follow-up and booked opportunity. A normal campaign can create traffic; a connected system helps the business see which visitors became real sales conversations.'),faq('Is this only for home service companies?','No. The system works for contractors, med spas, auto service brands, education programs, B2B service firms, local consultants, and other companies where leads need to become calls, estimates, appointments, enrollments, or consultations.'),faq('Do we need SEO, ads, and CRM all at once?','Not always. Simplufy audits the current bottleneck first. Some companies need tracking and follow-up fixed before more traffic. Others need paid search while SEO pages mature. Others need the website rebuilt before either channel can perform.'),faq('How soon can a service business see results?','Paid campaigns and CRM fixes can affect lead flow quickly once tracking and pages are working. SEO and topical authority take longer, but they create durable visibility when supported by consistent publishing, internal links, proof, and useful content.'),faq('What should we prepare before requesting an audit?','Bring access or screenshots for the website, forms, CRM pipeline, ad accounts, call tracking, and any current reports. If those are unavailable, Simplufy can still start with a public-facing funnel review.')],
 'sidebar':{'title':'Audit the revenue path, not just the homepage','body':'The first review looks for the gap between demand and booked opportunities: page clarity, proof, tracking, lead routing, follow-up speed, and reporting accuracy.','points':['Search intent mapped to services','Proof blocks tied to buyer risk','CRM stages connected to forms and calls','Next actions prioritized by revenue impact']},
 'cta':'Get a service-business growth audit that shows where leads are leaking and what to fix first.'
},
'marketing-agency-for-contractors':{
 'title':'Marketing Agency for Contractors',
 'meta':'Contractor marketing agency support for roofing, plumbing, landscaping, remodeling, and trade companies that need better leads, faster follow-up, and clearer attribution.',
 'hero':'Contractor marketing built for estimate requests, booked jobs, and crews that need the right opportunities',
 'sub':'Simplufy helps contractors turn local search demand, paid campaigns, service pages, proof, reviews, and CRM follow-up into a cleaner pipeline of estimate-ready prospects.',
 'parent':{'href':'/industries/contractors/','label':'Explore contractor marketing systems'},
 'visual':{'label':'Contractor lead path','nodes':['Local search','Trust proof','Estimate request','Sales pipeline'],'flow':['Show up locally','Prove capability','Book estimate','Follow up fast'],'stats':[{'value':'4 channels','label':'SEO, PPC, LSA, retargeting'}, {'value':'<5 min','label':'ideal speed-to-lead target'}, {'value':'Clear stages','label':'new, quoted, won, lost'}], 'accent':'contractor'},
 'sections':[
  section('Contractor demand','Homeowners and property managers compare before they call',[
   'Contractors do not win only because they appear in search. They win when the page makes the buyer feel safe enough to request an estimate. The buyer wants proof that the contractor handles their type of project, works in their area, communicates clearly, and will not disappear after the form submission.',
   'Ranking contractor marketing pages often lead with SEO, PPC, web design, reviews, and lead generation because those are the channels contractors recognize. Simplufy packages those pieces into one operating system so the website, ad campaign, form, phone call, and CRM stage all support the same job-booking goal.'
  ],['Project-specific landing pages for high-value services','Review and proof placement near CTAs','Google PPC and LSA routing by service area','CRM reminders for estimates, no-shows, and unsold quotes']),
  section('Website strategy','The contractor website must answer the estimate question',[
   'A good contractor page quickly explains what you do, where you work, what types of projects you handle, what makes your crew trustworthy, and what happens after someone asks for pricing. If a prospect has to dig for service details, financing context, proof, or scheduling next steps, they are more likely to bounce back to search results.',
   'Simplufy builds contractor pages around clear service sections, photo-forward proof, FAQ answers, quote-process details, and tracking-friendly forms. The page should make the next step feel obvious: request an estimate, book a call, or send project details.'
  ]),
  section('Paid + organic','Use paid search for urgency and SEO for durable coverage',[
   'Emergency, repair, and high-intent replacement searches often justify paid campaigns because the buyer is actively choosing a provider. SEO supports the broader footprint: service pages, city pages, project guides, comparison content, and answer-style resources that earn visibility over time.',
   'The best contractor systems do not let paid and organic live separately. Campaign data can reveal which services deserve better pages. Organic pages can improve ad quality and conversion. CRM data can show which keywords create profitable jobs rather than cheap leads.'
  ]),
  section('Follow-up','Contractor leads go cold fast',[
   'A prospect requesting a roof inspection, plumbing quote, landscape design, or remodel consultation is often contacting more than one company. If the contractor response is slow or inconsistent, the marketing spend is wasted even when the campaign technically generated a lead.',
   'Simplufy connects forms, call tracking, SMS/email follow-up, pipeline stages, missed-call responses, and sales reminders so each inquiry has a clear owner and next step. The objective is simple: fewer lost estimates, cleaner handoffs, and better visibility into which campaigns create real revenue.'
  ]),
  section('Measurement','Track booked estimates and sold jobs, not just form fills',[
   'Contractors should know which services, cities, campaigns, and pages produce estimate requests that become profitable jobs. A lead report that stops at form submissions is incomplete because it ignores close rate, project value, no-shows, and job quality.',
   'Simplufy structures reports around the full journey from click to opportunity. That gives owners a better basis for deciding where to spend, which pages to expand, and which follow-up steps need improvement.'
  ])],
 'faqs':[faq('What contractor industries can this support?','The system can support roofers, remodelers, plumbers, landscapers, pest control companies, window companies, smart-home installers, painters, flooring companies, and other estimate-based trades.'),faq('Should contractors start with Google Ads or SEO?','If the business needs near-term opportunities and has a working offer, Google Ads or LSAs can help quickly. SEO should run alongside it as a compounding asset, especially for services and locations that will stay profitable for years.'),faq('Can Simplufy connect contractor leads to a CRM?','Yes. Forms, calls, calendars, source data, reminders, pipeline stages, and follow-up messages can be connected so owners and sales teams see where each opportunity stands.'),faq('What proof should contractor pages include?','Project photos, before/after visuals, reviews, service area details, warranty or process explanations, licensing/trust signals, financing information when applicable, and clear next-step expectations.'),faq('How do we avoid paying for bad leads?','The page, targeting, negative keywords, form questions, call tracking, CRM stages, and follow-up notes should all be reviewed. The goal is to measure job-fit and sales outcome, not just raw lead volume.')],
 'sidebar':{'title':'Contractor funnel audit','body':'The audit looks at local visibility, service-page clarity, review placement, estimate CTAs, speed-to-lead, and pipeline reporting.','points':['High-value services prioritized first','Estimate forms tied to source data','Project proof placed near decision points','Follow-up built around quote outcomes']},
 'cta':'Get a contractor marketing audit that shows which pages, campaigns, and follow-up steps can create better estimate opportunities.'
},
}
# Programmatic generate remaining 8 from focused profiles with real copy, not meta copy
profiles={
'marketing-agency-for-local-service-businesses':('Marketing Agency for Local Service Businesses','local service businesses','local service growth system','/services/seo-aeo-geo/','Explore local SEO and visibility','Local service growth map',['Local intent','Service page','Call or booking','CRM follow-up']),
'service-business-marketing-agency':('Service Business Marketing Agency','service businesses','service business marketing system','/services/web-development/','Explore connected website systems','Service business pipeline',['Search demand','Conversion page','Sales handoff','Reporting loop']),
'lead-generation-agency-for-service-businesses':('Lead Generation Agency for Service Businesses','service businesses that need qualified leads','lead generation engine','/services/google-ppc-management/','Explore paid lead generation','Lead generation engine',['Intent traffic','Landing page','Lead capture','Sales follow-up']),
'website-crm-and-ads-for-service-businesses':('Website CRM and Ads for Service Businesses','service businesses that need their website, CRM, and ads connected','website + CRM + ads system','/services/crm-solutions/','Explore CRM solutions','Connected revenue stack',['Website','Ad campaign','CRM pipeline','Revenue report']),
'ai-marketing-agency-for-service-businesses':('AI Marketing Agency for Service Businesses','service businesses exploring AI-assisted marketing','AI-enabled growth system','/services/ai-implementation-agent-orchestration/','Explore AI implementation','AI workflow map',['Lead intake','AI summary','Human handoff','Follow-up loop']),
'local-service-business-growth-system':('Local Service Business Growth System','local service companies','local growth operating system','/industries/contractors/','Explore industry systems','Local growth system',['Local search','Trust assets','Booking path','Pipeline view']),
'service-business-lead-management-system':('Service Business Lead Management System','service businesses losing leads after inquiry','lead management system','/services/crm-solutions/','Explore lead management CRM','Lead management control room',['New inquiry','Speed-to-lead','Pipeline stage','Close loop']),
'done-for-you-marketing-system-for-service-businesses':('Done for You Marketing System for Service Businesses','service businesses that want a managed growth system','done-for-you marketing system','/contact/','Request your audit','Managed growth system',['Audit','Build','Launch','Optimize'])
}
for slug,(title,audience,system,parent,label,vislabel,nodes) in profiles.items():
    DATA[slug]={
     'title':title,
     'meta':f'{title} from Simplufy: buyer-facing pages, CRM follow-up, paid and organic acquisition, automation, reporting, and proof for {audience}.',
     'hero':f'{title} built around the moments that turn interested visitors into qualified opportunities',
     'sub':f'Simplufy helps {audience} connect search visibility, landing pages, ad campaigns, CRM workflows, and practical automation so more prospects understand the offer, trust the company, and take the next step.',
     'parent':{'href':parent,'label':label},
     'visual':{'label':vislabel,'nodes':nodes,'flow':['Attract the right visitor','Answer the real buying questions','Capture complete context','Improve from pipeline data'],'stats':[{'value':'Top 5','label':'SERP patterns reviewed'}, {'value':'8+','label':'internal pathways per page'}, {'value':'2+','label':'neutral references included'}], 'accent':'auto'},
     'sections':[
      section('What buyers need',f'{title} has to solve a real buying problem, not just describe services',[
       f'People searching for {title.lower()} are usually comparing options because something in their current growth system is not working. They may be getting traffic without booked calls, paid leads without sales context, inquiries without fast follow-up, or reports that do not show which channel actually created revenue.',
       f'The ranking pages for this search pattern commonly use a hybrid structure: strong commercial messaging, specific service details, process explanations, cost context, proof language, and FAQs. Simplufy uses that structure to create a page that helps {audience} make a decision instead of reading another generic agency pitch.'
      ],['Clear explanation of the growth problem','Specific services tied to business outcomes','Process detail that reduces uncertainty','CTA paths for both ready-now and research-mode buyers']),
      section('The Simplufy approach',f'A {system} connects the front-end experience to the backend follow-up',[
       f'Simplufy starts with the visitor journey: what the prospect searched, what promise they saw, what proof they need, what action they can take, and what happens after they submit a form or call. That journey determines the page structure, campaign setup, CRM fields, automations, and reporting view.',
       f'For {audience}, the strongest system usually combines a conversion-focused website, service or industry pages, Google or Meta campaigns where appropriate, CRM workflows, speed-to-lead automations, review/proof assets, and dashboards that show more than clicks.'
      ],['Search and ad intent mapped to page sections','Forms and calls routed into clean CRM stages','Follow-up messages matched to buyer urgency','Reporting tied to qualified opportunities']),
      section('What should be on the page','Prospects need proof, pricing context, comparison help, and next-step clarity',[
       f'A useful {title.lower()} page should quickly show who the service is for, what problems it fixes, what the engagement includes, how the process works, what affects cost, and what the prospect should expect after requesting help. That content gives buyers confidence and gives search engines clearer topical coverage.',
       f'Simplufy pages also include internal links to related services, industries, case studies, and resources so visitors can keep learning without returning to search. The objective is to create a helpful hub around the topic, not a doorway page with one thin paragraph and a contact form.'
      ]),
      section('Channels and systems',f'Which pieces matter most for {audience}',[
       f'If visibility is weak, the priority may be SEO/AEO/GEO pages, Google Business Profile support, or paid search. If conversion is weak, the priority may be landing-page copy, offer clarity, proof placement, and CTA testing. If leads are falling through the cracks, the priority may be CRM routing, follow-up speed, pipeline cleanup, or AI-assisted summaries.',
       f'Simplufy chooses the sequence based on the bottleneck. A business with a broken follow-up process should not pour more spend into ads before fixing lead handling. A business with strong operations but poor visibility may need a larger publishing and search architecture.'
      ]),
      section('Cost and timeline',f'How investment should be decided for {title.lower()}',[
       f'Cost depends on how many services, locations, campaigns, pages, workflows, and integrations are needed. A focused landing page and CRM cleanup is different from a full system with paid search, SEO clusters, reporting dashboards, and AI workflow orchestration.',
       f'The smartest starting point is an audit that separates urgent revenue leaks from longer-term assets. Simplufy looks for fixes that can improve conversion or follow-up quickly, then builds the content and acquisition engine that compounds over time.'
      ]),
      section('What success looks like',f'A working {system} should make decisions easier',[
       f'After launch, the team should know which pages are getting impressions, which CTAs are being used, which channels are producing qualified inquiries, how fast follow-up happens, and which opportunities are moving through the pipeline. That clarity changes marketing from guesswork into a managed system.',
       f'The best result is not simply more traffic. The better outcome is a cleaner sales pipeline, stronger buyer trust, faster responses, and a site that can keep expanding around the services and markets that matter most.'
      ])],
     'faqs':[faq(f'Who is {title.lower()} best for?',f'It is best for {audience} that want a connected system for visibility, conversion, follow-up, and reporting instead of disconnected campaigns or one-off website edits.'),faq('Do we need to rebuild everything at once?','No. Simplufy starts by identifying the highest-impact bottleneck. Some companies need page improvements first, some need CRM repair, some need paid search, and others need a broader SEO architecture.'),faq('How does this help with lead quality?','The page, forms, tracking, targeting, and CRM stages can all be structured to capture service need, location, urgency, source, and fit. That gives the sales team better context and helps marketing optimize for qualified opportunities.'),faq('Will these pages include internal and external links?','Yes. Simplufy growth pages link to relevant services, industries, resources, proof, and audit paths, plus neutral sources such as Google documentation, Schema.org, and small-business resources.'),faq('What happens after the page is launched?','The page should be monitored for impressions, clicks, engagement, form starts, booked calls, lead quality, and pipeline movement. Those signals guide the next improvements.')],
     'sidebar':{'title':f'Audit the {system}','body':f'Simplufy reviews the search result, page experience, lead capture, CRM path, follow-up, and reporting for {audience}.','points':['Buyer intent matched to the offer','Proof and process placed before the CTA','CRM fields preserve source and urgency','Next actions ranked by revenue impact']},
     'cta':f'Request an audit for your {system} and get a practical plan for pages, campaigns, CRM, and follow-up.'
    }

today='2026-06-01'
for slug,d in DATA.items():
    p=by[slug]
    p.update({
      'title':d['title'],'metaTitle':d['title']+' | Simplufy','metaDescription':d['meta'][:158],
      'heroHeadline':d['hero'],'heroSubhead':d['sub'],'parentLink':d['parent'],'visual':d['visual'],
      'sections':d['sections'],'faqs':d['faqs'],'internalLinks':base_internal,'externalLinks':refs[:3],
      'sidebar':d['sidebar'],'ctaHeadline':'Ready to see where your growth system is leaking?','ctaSubhead':d['cta'],
      'rewrittenAt':datetime.date.today().isoformat(), 'copyStatus':'buyer-facing-serp-informed-v2'
    })
P.write_text(json.dumps(pages, indent=2)+'\n')
print('rewrote', len(DATA), 'pages')
