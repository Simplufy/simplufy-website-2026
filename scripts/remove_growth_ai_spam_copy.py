from pathlib import Path
import json

P = Path('/home/mcgui/simplufy-website-2026/src/data/generatedSeoPages.json')
pages = json.loads(P.read_text())

REWRITES = {
    'digital-marketing-agency-for-service-businesses': {
        'outcomes': [
            {'value':'Clearer','label':'Offer and message','note':'Visitors understand what you do, who you help, and why the next step is worth taking.'},
            {'value':'Cleaner','label':'Lead handoff','note':'Calls and forms carry the service, source, urgency, and context your team needs to follow up well.'},
            {'value':'Stronger','label':'Proof placement','note':'Reviews, screenshots, case studies, and project details sit close to the moments where buyers decide.'},
            {'value':'Visible','label':'Revenue feedback','note':'Marketing decisions are tied to qualified calls, booked work, pipeline movement, and close quality.'},
        ],
        'education': [
            {'title':'Good marketing has to connect before and after the inquiry','paragraphs':[
                'A service business can attract attention and still lose buyers if the offer, page, form, call handling, and follow-up do not work together. A visitor may like the company, but if the next step feels unclear or the response is slow, that demand disappears into a competitor’s pipeline.',
                'The strongest improvements usually come from tightening the whole path: a clearer promise, better proof, better lead capture, faster follow-up, and reporting that shows which sources produce real sales conversations.'
            ]},
            {'title':'What a serious growth system should make easier','paragraphs':[
                'The website should help buyers understand fit quickly. The CRM should help the team know who reached out, what they need, where they came from, and what should happen next. Paid ads and SEO should send traffic into that same path instead of creating disconnected activity.',
                'When those pieces are connected, the business can stop guessing which marketing tasks matter and start improving the parts that influence booked calls, estimates, consults, and revenue.'
            ]},
            {'title':'Why reporting has to include lead quality','paragraphs':[
                'Traffic and form volume only tell part of the story. A service company also needs to know whether inquiries are in the right area, for the right service, at the right urgency level, and worth the team’s time.',
                'That is why the audit looks at the buyer journey and the sales handoff together. Better visibility makes it easier to cut wasted spend, strengthen winning pages, and follow up before strong opportunities go cold.'
            ]}
        ]
    },
    'marketing-agency-for-contractors': {
        'outcomes': [
            {'value':'More','label':'Qualified estimate requests','note':'The funnel is shaped around the projects you actually want, not every random homeowner inquiry.'},
            {'value':'Faster','label':'Quote follow-up','note':'Your team sees job type, location, urgency, and source before the first call back.'},
            {'value':'Better','label':'Project proof','note':'Photos, reviews, service areas, warranties, and past work are placed where homeowners need reassurance.'},
            {'value':'Cleaner','label':'Pipeline tracking','note':'Ads, pages, forms, calls, estimates, and unsold quotes are easier to review in one path.'},
        ],
        'education': [
            {'title':'Contractor marketing has to reduce buyer hesitation','paragraphs':[
                'Homeowners and property managers are not only looking for a contractor. They are trying to avoid a bad hire. They want proof the company handles their project type, works in their area, responds quickly, and can explain the estimate process without friction.',
                'A stronger contractor funnel puts the right proof in the right places: project photos, service-area clarity, reviews, financing or warranty details when relevant, and a simple estimate request that collects enough context for a useful follow-up.'
            ]},
            {'title':'The estimate path matters as much as the ad click','paragraphs':[
                'A contractor can pay for strong visibility and still lose jobs if every lead lands in the same generic inbox. Job type, location, timeline, budget indicators, source, and notes should move with the inquiry so the sales team can prioritize the best opportunities.',
                'That kind of structure helps the business see which campaigns create real estimate conversations, which jobs are worth pursuing, and which unsold quotes need another touch before they go cold.'
            ]},
            {'title':'Better pages help attract better projects','paragraphs':[
                'If the site shows every service with the same thin language, buyers have no reason to believe the company is the right fit for their specific job. Stronger pages make the ideal project easier to recognize, easier to trust, and easier to request.',
                'For contractors, the audit should compare the page against the actual sales conversation. If the questions buyers ask on the phone are missing from the page, the marketing is forcing the sales team to do work the website should have already started.'
            ]}
        ]
    },
    'marketing-agency-for-local-service-businesses': {
        'outcomes': [
            {'value':'Local','label':'Area and service clarity','note':'Buyers can quickly see whether your company serves their location and handles their exact need.'},
            {'value':'Trusted','label':'Proof near the decision','note':'Reviews, before-and-after examples, team cues, and service details reduce uncertainty before the call.'},
            {'value':'Responsive','label':'Speed-to-lead support','note':'Forms and calls capture enough context for your team to respond with a useful next step.'},
            {'value':'Trackable','label':'Source and sales feedback','note':'You can see which pages, ads, and searches create real opportunities instead of vague activity.'},
        ],
        'education': [
            {'title':'Local service buyers decide quickly','paragraphs':[
                'Most local service buyers are comparing nearby companies while they already have a problem to solve. They want to know whether you serve their area, handle their exact service, look trustworthy, and will respond quickly.',
                'That means the page has to do more than describe services. It has to remove uncertainty fast with clear coverage areas, proof, specific service details, and a simple way to ask for help.'
            ]},
            {'title':'The follow-up path has to match the urgency','paragraphs':[
                'A call for an urgent service need should not be treated the same as a low-priority question. The CRM and follow-up flow should preserve source, location, service, urgency, and notes so your team can respond in the right order.',
                'When that information is missing, local demand gets harder to prioritize and good inquiries can sit behind lower-value conversations.'
            ]},
            {'title':'Growth improves when the whole local path is visible','paragraphs':[
                'A local service company needs to know more than which channel drove a click. The useful question is which searches, ads, pages, calls, forms, and follow-ups produced qualified opportunities.',
                'Once the full path is visible, it becomes easier to improve weak pages, support winning services, and stop spending on traffic that does not turn into real work.'
            ]}
        ]
    },
    'service-business-marketing-agency': {
        'outcomes': [
            {'value':'Sharper','label':'Positioning','note':'Your best services, markets, proof, and next steps are easier for serious buyers to understand.'},
            {'value':'Organized','label':'CRM and lead flow','note':'Inquiries are captured with source, service, stage, and follow-up context instead of scattered notes.'},
            {'value':'Credible','label':'Proof and case context','note':'The page shows why the business can be trusted, not just what services are offered.'},
            {'value':'Accountable','label':'Marketing visibility','note':'Performance is reviewed by lead quality, booked conversations, and sales progress — not surface metrics alone.'},
        ],
        'education': [
            {'title':'Service-business marketing has to support the sales conversation','paragraphs':[
                'A good service-business website should make the first conversation easier before it happens. The buyer should already understand the offer, proof, process, fit, and next step by the time they call or submit a form.',
                'When that context is missing, the team has to re-explain everything manually and strong inquiries can turn into slow, inconsistent follow-up.'
            ]},
            {'title':'The CRM should not be an afterthought','paragraphs':[
                'A service business needs to know which source produced the inquiry, what the buyer asked about, what stage the opportunity is in, and what should happen next. Without that structure, marketing reports can look active while the sales process stays messy.',
                'A cleaner CRM path helps the team follow up faster, separate strong opportunities from weak ones, and understand what is actually driving revenue.'
            ]},
            {'title':'Better marketing creates clearer decisions','paragraphs':[
                'The goal is not simply more tasks, more channels, or more dashboards. The goal is a cleaner path from search or ad click to qualified conversation and booked work.',
                'When the page, proof, campaigns, CRM, and follow-up support the same outcome, the business can make better decisions about what to scale, fix, or stop.'
            ]}
        ]
    },
    'lead-generation-agency-for-service-businesses': {
        'outcomes': [
            {'value':'Qualified','label':'Lead intent','note':'Campaigns and pages are built to attract people who are closer to needing the service, not just browsing.'},
            {'value':'Useful','label':'Lead details','note':'Forms and calls capture service, location, urgency, source, and notes your team can act on.'},
            {'value':'Faster','label':'Follow-up timing','note':'Strong inquiries are easier to prioritize before competitors win the conversation.'},
            {'value':'Measured','label':'Booked opportunity feedback','note':'Lead generation is judged by quality, booked calls, estimates, and sales progress.'},
        ],
        'education': [
            {'title':'Lead generation is only valuable when the leads can be worked','paragraphs':[
                'A service business does not need a spreadsheet full of vague names. It needs people with a real service need, a clear location, a reasonable timeline, and enough context for the team to respond well.',
                'The page and funnel should qualify the request before it reaches the team, so follow-up starts with useful information instead of guesswork.'
            ]},
            {'title':'Speed and context change the outcome','paragraphs':[
                'The first business to respond with a relevant answer often has the advantage. But speed alone is not enough if the team does not know what the person needs, where they are, or which service they asked about.',
                'A stronger lead system pairs faster response with better context so the best opportunities are easier to recognize and pursue.'
            ]},
            {'title':'Lead quality has to be visible','paragraphs':[
                'Marketing reports should show more than form count or cost per lead. They should help the business understand which campaigns produced qualified conversations, which services converted, and which sources created wasted time.',
                'That visibility is what allows a service company to improve the funnel instead of simply buying more low-quality volume.'
            ]}
        ]
    },
    'website-crm-and-ads-for-service-businesses': {
        'outcomes': [
            {'value':'Aligned','label':'Website, CRM, and ads','note':'The page, campaign message, form, pipeline, and follow-up are built around the same buyer path.'},
            {'value':'Clear','label':'Service and offer fit','note':'Visitors see what you do, why it matters, and how to take the right next step.'},
            {'value':'Connected','label':'Lead capture and routing','note':'Inquiries arrive with context instead of dropping into disconnected tools.'},
            {'value':'Readable','label':'Performance feedback','note':'You can review which sources create qualified conversations and which parts need work.'},
        ],
        'education': [
            {'title':'A website, CRM, and ad account should not operate separately','paragraphs':[
                'Many service businesses have the pieces: a site, some ads, a CRM, and follow-up messages. The problem is that those pieces often do not share the same message, data, or sales process.',
                'When the system is aligned, the ad promises match the landing page, the form captures useful context, the CRM records the source and stage, and the team knows what to do next.'
            ]},
            {'title':'The handoff after the click is where money is often lost','paragraphs':[
                'A campaign can generate a strong inquiry, but the value can disappear if the form is vague, the notification lacks context, or the follow-up does not match the service requested.',
                'The buildout should make every handoff cleaner: click to page, page to form, form to CRM, CRM to follow-up, and follow-up to booked conversation.'
            ]},
            {'title':'Better visibility makes the whole system easier to improve','paragraphs':[
                'When the site, CRM, and ads are connected, reporting becomes more useful. The business can see which services produce real opportunities, where leads stall, and which campaigns deserve more budget.',
                'That gives the team a better way to improve growth than guessing from isolated ad metrics or disconnected form submissions.'
            ]}
        ]
    },
    'ai-marketing-agency-for-service-businesses': {
        'outcomes': [
            {'value':'Practical','label':'AI workflow planning','note':'AI is applied to real bottlenecks like intake, routing, follow-up, reporting, and task handoffs.'},
            {'value':'Safer','label':'Human review points','note':'Automations support the team without letting important customer moments run unchecked.'},
            {'value':'Faster','label':'Operational support','note':'Common admin steps can move quicker while your team keeps control of the customer experience.'},
            {'value':'Clearer','label':'Process visibility','note':'The business can see what the AI handles, where data goes, and when a person needs to step in.'},
        ],
        'education': [
            {'title':'AI should solve specific service-business bottlenecks','paragraphs':[
                'AI sounds impressive, but it only helps when it is tied to a real operational problem. For service businesses, the useful opportunities are usually intake, lead routing, follow-up support, reporting summaries, scheduling reminders, and internal task handoffs.',
                'The right implementation starts with the workflow, not the tool. The business needs to know what should happen, what information is required, and where a human should approve or take over.'
            ]},
            {'title':'Automation should not damage the customer experience','paragraphs':[
                'A service business cannot afford robotic replies that miss urgency, context, or tone. AI workflows need guardrails so the buyer still feels understood and the team does not lose control of important conversations.',
                'That usually means clear prompts, defined escalation points, CRM fields that stay organized, and reporting that shows what the automation actually did.'
            ]},
            {'title':'The best AI systems make the team more consistent','paragraphs':[
                'The goal is not to replace every human step. The goal is to reduce repetitive work, speed up response, organize information, and help the team make fewer mistakes during busy periods.',
                'When AI is implemented around a real sales and service process, it can support faster follow-up, cleaner admin, and better visibility without turning the brand into a generic chatbot.'
            ]}
        ]
    },
    'local-service-business-growth-system': {
        'outcomes': [
            {'value':'Focused','label':'Best-service growth','note':'The system prioritizes the services, areas, and job types that actually matter to the business.'},
            {'value':'Trusted','label':'Local proof','note':'Reviews, photos, service-area cues, and case context help nearby buyers feel safer choosing you.'},
            {'value':'Responsive','label':'Lead handling','note':'Calls and forms are routed with enough information for quick, relevant follow-up.'},
            {'value':'Visible','label':'Growth feedback','note':'You can see where demand comes from, which leads are worth pursuing, and where the path breaks.'},
        ],
        'education': [
            {'title':'Local growth depends on trust and response','paragraphs':[
                'Local buyers usually have choices. They compare the company’s reputation, proximity, service fit, photos, reviews, and response expectations before deciding who to contact.',
                'A growth system should make those trust signals easy to find and make the next step simple enough that a motivated buyer does not leave to keep searching.'
            ]},
            {'title':'The best opportunities need to be easy to identify','paragraphs':[
                'Not every inquiry has the same value. A service business needs to know which requests match the right area, service, timeline, and project type so the team can prioritize well.',
                'Better intake and CRM structure help separate strong opportunities from noise before the follow-up process becomes chaotic.'
            ]},
            {'title':'Growth improves when weak spots are visible','paragraphs':[
                'If the business cannot see where leads come from, what they asked for, who followed up, and what happened next, it is hard to know what to improve.',
                'A connected growth system makes the path easier to inspect, so the next decision is based on actual buyer behavior instead of scattered marketing activity.'
            ]}
        ]
    },
    'service-business-lead-management-system': {
        'outcomes': [
            {'value':'Organized','label':'Lead intake','note':'Every inquiry carries the service, source, urgency, and contact details needed for the next step.'},
            {'value':'Prioritized','label':'Sales follow-up','note':'High-value requests are easier to identify before they sit too long or get buried.'},
            {'value':'Consistent','label':'Pipeline stages','note':'The team can see what is new, contacted, quoted, booked, won, lost, or waiting on a reply.'},
            {'value':'Accountable','label':'Source feedback','note':'Marketing can be reviewed by lead quality and sales movement, not just raw form volume.'},
        ],
        'education': [
            {'title':'Lead management is where many service businesses lose money','paragraphs':[
                'A business can generate enough inquiries and still lose revenue if leads are disorganized, followed up with too slowly, or missing the details needed for a useful response.',
                'The lead management system should make the next action obvious: who reached out, what they need, where they came from, how urgent it is, and who owns the follow-up.'
            ]},
            {'title':'Pipeline stages should match how the team actually sells','paragraphs':[
                'Generic CRM stages rarely help unless they reflect the business’s real sales motion. A contractor, med spa, home-service company, and B2B service firm may all need different stages, reminders, and qualification fields.',
                'A better setup keeps the system simple enough for the team to use while still giving leadership visibility into what is happening after the inquiry arrives.'
            ]},
            {'title':'Better management creates better marketing decisions','paragraphs':[
                'If the CRM shows which sources produce qualified opportunities, the business can make smarter decisions about ads, SEO, landing pages, and follow-up.',
                'Without that feedback, marketing can look busy while the best leads are hidden inside missed calls, vague forms, and inconsistent notes.'
            ]}
        ]
    },
    'done-for-you-marketing-system-for-service-businesses': {
        'outcomes': [
            {'value':'Complete','label':'Growth system buildout','note':'Website, campaigns, CRM, automation, follow-up, and reporting are planned as one operating path.'},
            {'value':'Less','label':'Vendor juggling','note':'Your team does not have to translate strategy between disconnected designers, ad buyers, CRM tools, and copywriters.'},
            {'value':'More','label':'Buyer clarity','note':'The offer, proof, next step, and follow-up process are easier for serious prospects to understand.'},
            {'value':'Better','label':'Decision visibility','note':'You can see which parts of the system are creating qualified conversations and booked work.'},
        ],
        'education': [
            {'title':'Done-for-you should still feel strategic','paragraphs':[
                'A service business does not need a pile of disconnected tasks. It needs a finished path that helps the right buyers understand the offer, take the next step, and move into a follow-up process the team can manage.',
                'A done-for-you system should connect the page, campaigns, CRM, automation, and reporting so the business is not left stitching the pieces together afterward.'
            ]},
            {'title':'The system has to match how the business sells','paragraphs':[
                'A high-ticket estimate, a booked consultation, a recurring service request, and a fast-response local job all need different copy, intake, follow-up, and pipeline structure.',
                'The buildout should reflect the actual sales process instead of forcing every business into the same generic funnel.'
            ]},
            {'title':'Better execution reduces wasted motion','paragraphs':[
                'When each piece is handled separately, teams often end up with nice designs, active ads, and a CRM nobody trusts. The work looks busy, but the sales path still feels messy.',
                'A connected buildout reduces that friction by giving the business one clearer path to improve: attract the right buyer, capture the right context, follow up well, and measure what happened.'
            ]}
        ]
    },
}

comparison_sets = {
    'marketing-agency-for-contractors': [
        {'label':'Lead sellers','title':'Shared contacts without context','body':'Cheap lead sources can create names and numbers, but contractors still need project fit, location, urgency, and follow-up structure to turn interest into real estimates.'},
        {'label':'Single channel','title':'Ads without the estimate path','body':'One channel can help, but contractor growth works better when the page, proof, request form, CRM, and quote follow-up all support the same job pipeline.'},
        {'label':'Simplufy','title':'A connected contractor growth buildout','body':'Simplufy builds around the full estimate path so visibility, conversion, follow-up, and reporting support booked work instead of disconnected activity.'},
    ],
}

def default_comparisons(slug):
    return [
        {'label':'Fragmented help','title':'Disconnected marketing tasks','body':'A page refresh, ad campaign, or CRM tweak can help, but the business still loses momentum if each piece is planned separately.'},
        {'label':'Single channel','title':'One lever without the handoff','body':'Traffic is easier to waste when the offer, proof, lead capture, follow-up, and reporting are not built around the same buyer path.'},
        {'label':'Simplufy','title':'One connected growth path','body':'Simplufy connects the website, campaigns, CRM, automation, proof, and reporting so the business can see and improve the full revenue path.'},
    ]

for page in pages:
    slug = page['slug']
    if slug in REWRITES:
        page['outcomes'] = REWRITES[slug]['outcomes']
        page['education'] = REWRITES[slug]['education']
        page['comparisons'] = comparison_sets.get(slug, default_comparisons(slug))

# Clean remaining visible wording that is too SEO/system-ish.
def walk(x):
    if isinstance(x, dict):
        return {k: walk(v) for k, v in x.items()}
    if isinstance(x, list):
        return [walk(v) for v in x]
    if isinstance(x, str):
        x = x.replace('similar providers', 'similar companies')
        x = x.replace('service providers', 'service companies')
        x = x.replace('providers', 'companies')
        x = x.replace('provider', 'company')
        return x
    return x
pages = walk(pages)

P.write_text(json.dumps(pages, indent=2) + '\n')
print('removed AI-spam outcome/education/comparison copy across growth pages')
