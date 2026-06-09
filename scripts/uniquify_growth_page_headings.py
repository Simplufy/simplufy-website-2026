from pathlib import Path
import json
P=Path('/home/mcgui/simplufy-website-2026/src/data/generatedSeoPages.json')
pages=json.loads(P.read_text())

updates={
'digital-marketing-agency-for-service-businesses':{
 'process':['Map the buyer journey','Build the conversion foundation','Connect source, CRM, and follow-up','Optimize from pipeline evidence'],
 'comparisons':['Tactic-only agency','Design-only rebuild','Simplufy connected system'],
 'faqs':['What does a digital marketing agency for service businesses actually do?','Why not just hire separate vendors?','Which proof assets help service businesses convert?','How quickly can marketing system fixes improve clarity?','What happens in a Simplufy audit?']},
'marketing-agency-for-contractors':{
 'process':['Inspect the estimate path','Create project-proof landing pages','Route calls and quote requests','Tune campaigns from job quality'],
 'comparisons':['Cheap shared lead seller','Single trade-ad vendor','Simplufy contractor growth buildout'],
 'faqs':['What does contractor marketing include?','Which contractor trades fit this service?','How do you improve estimate quality?','What proof should contractors show?','What happens after a contractor campaign launches?']},
'marketing-agency-for-local-service-businesses':{
 'process':['Audit local discovery points','Build neighborhood and service trust paths','Connect calls, bookings, and CRM stages','Improve around local lead behavior'],
 'comparisons':['Directory-only visibility','One-off local SEO package','Simplufy local acquisition system'],
 'faqs':['What does local service marketing include?','How is this different from local SEO alone?','Can this support multiple service areas?','How are local leads tracked?','What should improve first for local businesses?']},
'service-business-marketing-agency':{
 'process':['Clarify the offer and sales motion','Build pages around buyer questions','Install follow-up and attribution logic','Use sales feedback to refine positioning'],
 'comparisons':['Traffic-focused vendor','Brand refresh without sales infrastructure','Simplufy service-business operating system'],
 'faqs':['What does a service business marketing agency handle?','How do you choose the right channels?','Why does CRM matter for service marketing?','What makes the copy conversion-focused?','How is performance reviewed after launch?']},
'lead-generation-agency-for-service-businesses':{
 'process':['Define qualified lead criteria','Build the capture and qualification path','Connect source, urgency, and sales ownership','Scale from cost per qualified opportunity'],
 'comparisons':['High-volume lead broker','Form-fill campaign manager','Simplufy qualified-opportunity engine'],
 'faqs':['What counts as a qualified lead?','How is lead generation different from ads management?','Can you reduce bad-fit inquiries?','What data is needed to optimize lead quality?','What happens to leads after they submit?']},
'website-crm-and-ads-for-service-businesses':{
 'process':['Trace the current tool handoff','Rebuild the landing-page-to-CRM path','Align campaigns with CRM fields','Report from source to opportunity'],
 'comparisons':['Disconnected software stack','Ads without backend attribution','Simplufy website-CRM-ads architecture'],
 'faqs':['Why connect website, CRM, and ads?','What CRM fields matter most?','Can this work with GoHighLevel?','How does this improve reporting?','What breaks when these tools stay disconnected?']},
'ai-marketing-agency-for-service-businesses':{
 'process':['Identify repeatable marketing workflows','Design human-reviewed AI assistance','Connect AI actions to CRM and reporting','Improve reliability with workflow feedback'],
 'comparisons':['AI novelty tools','Automation without oversight','Simplufy practical AI operations layer'],
 'faqs':['What does an AI marketing agency do for service businesses?','Where is AI actually useful?','What should stay human-reviewed?','Can AI improve speed-to-lead?','How do you prevent unreliable automation?']},
'local-service-business-growth-system':{
 'process':['Map local visibility and trust gaps','Build the booking and proof ecosystem','Install retention and review loops','Measure growth beyond first contact'],
 'comparisons':['One-off marketing tactic','Local listing cleanup only','Simplufy local growth loop'],
 'faqs':['What is a local service business growth system?','How does it differ from a marketing campaign?','Which channels are usually included?','How do reviews and referrals fit?','How is local growth measured?']},
'service-business-lead-management-system':{
 'process':['Audit lead intake failure points','Define pipeline stages and ownership','Automate reminders without losing context','Review lost leads and response gaps'],
 'comparisons':['Inbox-based lead handling','Basic contact database','Simplufy lead-management operating system'],
 'faqs':['What is a lead management system?','Why do service businesses lose leads?','What automations are useful?','How should missed calls be handled?','How do you measure lead-management performance?']},
'done-for-you-marketing-system-for-service-businesses':{
 'process':['Prioritize the growth roadmap','Build the assets and backend system','Launch channels with clear ownership','Iterate with transparent reporting'],
 'comparisons':['Task-by-task freelancer model','Opaque full-service agency','Simplufy managed growth system'],
 'faqs':['What is included in a done-for-you marketing system?','How is this different from hiring one specialist?','What does Simplufy need from the business?','How are deliverables prioritized?','What does ongoing optimization include?']}
}

for p in pages:
    u=updates.get(p['slug'])
    if not u: continue
    for i,title in enumerate(u['process']):
        if i < len(p.get('process',[])):
            p['process'][i]['title']=title
            p['process'][i]['body']=p['process'][i]['body'].replace('For '+p['keyword']+', ', f'In the {title.lower()} phase for {p["keyword"]}, ')
    for i,title in enumerate(u['comparisons']):
        if i < len(p.get('comparisons',[])):
            p['comparisons'][i]['title']=title
    for i,q in enumerate(u['faqs']):
        if i < len(p.get('faqs',[])):
            p['faqs'][i]['q']=q
    # remove banned word 'template' in digital page label
    for comp in p.get('comparisons',[]):
        if comp.get('label')=='Template website shop': comp['label']='Design-only website shop'

P.write_text(json.dumps(pages,indent=2)+'\n')
print('made process/comparison/faq titles unique across all 10 pages')
