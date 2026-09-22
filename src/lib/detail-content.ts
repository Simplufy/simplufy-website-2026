import {
  caseStudies,
  industries,
  services,
  type CaseStudy,
  type Industry,
  type Service,
} from "@/lib/content";
import { industryCraft } from "@/lib/industry-craft";

export type IndustryDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  headline: string;
  intro: string;
  problem: string;
  focusLabel: string;
  focusChips: string[];
  helpItems: { title: string; summary: string; serviceSlug?: string }[];
  journey: string[];
  relatedServiceSlugs: string[];
  relatedCaseSlugs: string[];
  /** Trade reality — Without a system */
  without: string[];
  /** Trade reality — With Simplufy */
  withSystem: string[];
  /** Industry-flavored UI theater */
  theater: {
    label: string;
    steps: { label: string; detail: string; status: "live" | "won" }[];
    logLines: string[];
  };
  /** Audit → Build → Improve tailored copy */
  process: { index: string; title: string; summary: string }[];
  /** Qualitative scenario cards when no related case studies */
  scenarios: { title: string; summary: string }[];
};

export type ServiceDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  headline: string;
  intro: string;
  problem: string;
  pillars: { index: string; title: string; summary: string }[];
  journey: string[];
  journeyLine: string;
  leaks: string[];
  useCases: { title: string; summary: string }[];
  faqs: { question: string; answer: string }[];
  relatedIndustrySlugs: string[];
  ctaPrompt: string;
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  industry: string;
  location?: string;
  narrative: string[];
  highlights: string[];
  stack: string[];
};

const tradeServices = [
  "web-development",
  "crm-solutions",
  "google-ppc-management",
  "google-local-service-ads",
  "seo-aeo-geo",
] as const;

const visualServices = [
  "web-development",
  "meta-advertising",
  "google-ppc-management",
  "crm-solutions",
  "seo-aeo-geo",
] as const;

type IndustryDetailBase = Omit<
  IndustryDetail,
  "without" | "withSystem" | "theater" | "process" | "scenarios"
>;

export const industryDetails: IndustryDetailBase[] = [
  {
    slug: "auto-detailing-shops",
    title: "Marketing for Auto Detailing Shops",
    metaDescription:
      "More booked details, ceramic coating leads, recurring maintenance clients, and cleaner follow-up from the first click to the final invoice.",
    headline: "Marketing for Auto Detailing Shops",
    intro:
      "More booked details, ceramic coating leads, recurring maintenance clients, and cleaner follow-up from the first click to the final invoice.",
    problem:
      "Auto detailing growth needs premium proof, fast booking, and follow-up for high-ticket vehicle owners. Ceramic coating, paint correction, maintenance details, and mobile appointments each need different trust signals — gallery-style credibility, package clarity, and a booking path that does not rely on inbox ping-pong.",
    focusLabel: "Coating, detail, and maintenance requests",
    focusChips: [
      "Ceramic coating pages",
      "Gallery proof",
      "Booking engine",
      "Maintenance follow-up",
    ],
    helpItems: [
      {
        title: "Web pages for premium packages",
        summary:
          "Coating, correction, maintenance, and gallery pages that justify higher-ticket work before the visitor calls.",
        serviceSlug: "web-development",
      },
      {
        title: "Search and Meta for coating demand",
        summary:
          "Capture searches for ceramic coating, mobile detailing, and paint correction with pages matched to the exact service — and Meta creative that shows the finish.",
        serviceSlug: "meta-advertising",
      },
      {
        title: "CRM and booking follow-up",
        summary:
          "Quote requests, package tiers, vehicle-size selection, and reminders so leads do not cool off after the form submit.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Vehicle gallery",
      "Coating packages",
      "Review proof",
      "Booking engine",
      "Maintenance follow-up",
    ],
    relatedServiceSlugs: [...visualServices],
    relatedCaseSlugs: ["detail-depot", "jp-mobile-detail"],
  },
  {
    slug: "auto-styling-shops",
    title: "Marketing for Auto Styling Shops",
    metaDescription:
      "Websites, ads, SEO, and CRM systems for tint, wrap, PPF, ceramic coating, and performance shops that want higher-value jobs.",
    headline: "Marketing for Auto Styling Shops",
    intro:
      "Websites, ads, SEO, and CRM systems for tint, wrap, PPF, ceramic coating, and performance shops that want higher-value jobs.",
    problem:
      "Styling buyers compare finish quality, install craft, and shop credibility before they book a consult. Generic “auto shop” pages do not sell wraps, PPF, tint, or performance work — and slow quote follow-up loses the premium job to whoever answers first.",
    focusLabel: "Tint, wrap, PPF, and performance demand",
    focusChips: [
      "Visual proof",
      "Consult calendars",
      "Package clarity",
      "Retargeting",
    ],
    helpItems: [
      {
        title: "Position premium install work",
        summary:
          "Service pages and galleries that make film choice, coverage, and craft obvious before the consult.",
        serviceSlug: "web-development",
      },
      {
        title: "Paid demand for higher-ticket jobs",
        summary:
          "Meta and Google campaigns aimed at wraps, PPF, and tint — not vanity shoppers who will never book.",
        serviceSlug: "meta-advertising",
      },
      {
        title: "Consult pipeline",
        summary:
          "Capture estimate requests, route by service type, and follow up before the lead shops three other shops.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Finish proof",
      "Service packages",
      "Consult CTA",
      "Estimate pipeline",
      "Install follow-up",
    ],
    relatedServiceSlugs: [...visualServices],
    relatedCaseSlugs: [],
  },
  {
    slug: "roofing-companies",
    title: "Marketing for Roofing Companies",
    metaDescription:
      "Storm-season campaigns, local SEO, PPC, landing pages, and follow-up systems built to turn search demand into inspected roofs.",
    headline: "Marketing for Roofing Companies",
    intro:
      "Storm-season campaigns, local SEO, PPC, landing pages, and follow-up systems built to turn search demand into inspected roofs.",
    problem:
      "Roofing marketing has to convert urgent concern into scheduled inspections and trusted estimates. Storm damage, repair, replacement, and insurance-guided searches all carry different intent — and missed calls during storm season cost jobs.",
    focusLabel: "Storm demand into inspected roofs",
    focusChips: [
      "Emergency demand",
      "Inspection funnel",
      "Local SEO",
      "LSA + call routing",
    ],
    helpItems: [
      {
        title: "Inspection-focused landing pages",
        summary:
          "Roof repair, replacement, storm damage, and service-area pages with proof, insurance guidance, and clear inspection CTAs.",
        serviceSlug: "web-development",
      },
      {
        title: "PPC and LSA for high-intent searches",
        summary:
          "Tight query control, LSA eligibility review, call quality, and landing pages that match the homeowner’s concern.",
        serviceSlug: "google-ppc-management",
      },
      {
        title: "Missed-call recovery and estimate tracking",
        summary:
          "CRM routing for inspection requests so storm leads do not die in a voicemail box.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Storm intent",
      "Local proof",
      "Inspection CTA",
      "Estimate tracking",
      "Follow-up",
    ],
    relatedServiceSlugs: [...tradeServices],
    relatedCaseSlugs: [],
  },
  {
    slug: "plumbing-companies",
    title: "Marketing for Plumbing Companies",
    metaDescription:
      "Emergency calls, repair leads, drain cleaning jobs, water heater installs, and memberships backed by fast pages and tight lead tracking.",
    headline: "Marketing for Plumbing Companies",
    intro:
      "Emergency calls, repair leads, drain cleaning jobs, water heater installs, and memberships backed by fast pages and tight lead tracking.",
    problem:
      "Plumbing demand is often urgent — and the shop that answers fastest usually wins. Thin service pages, slow follow-up, and ads that dump into a generic homepage leak emergency and install opportunities every week.",
    focusLabel: "Emergency and install demand",
    focusChips: [
      "Speed to lead",
      "Service pages",
      "Call tracking",
      "Membership nurture",
    ],
    helpItems: [
      {
        title: "Service pages that match the emergency",
        summary:
          "Drain cleaning, water heater, leak, and install pages with clear call and book CTAs — not vague “we do plumbing” copy.",
        serviceSlug: "web-development",
      },
      {
        title: "Google Ads and LSA for local intent",
        summary:
          "Search and Local Services Ads aimed at calls and booked jobs, with tracking that shows which queries become revenue.",
        serviceSlug: "google-local-service-ads",
      },
      {
        title: "Speed-to-lead CRM",
        summary:
          "Missed-call text-back, routing, and membership follow-up so repair leads become recurring customers.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Urgent search",
      "Clear offer page",
      "Immediate call path",
      "Dispatch handoff",
      "Membership follow-up",
    ],
    relatedServiceSlugs: [...tradeServices],
    relatedCaseSlugs: [],
  },
  {
    slug: "pest-control-companies",
    title: "Marketing for Pest Control Companies",
    metaDescription:
      "Local campaigns for recurring pest control plans, termite inspections, mosquito control, rodent removal, and seasonal demand.",
    headline: "Marketing for Pest Control Companies",
    intro:
      "Local campaigns for recurring pest control plans, termite inspections, mosquito control, rodent removal, and seasonal demand.",
    problem:
      "Pest control buyers need trust fast — licensing signals, review proof, and a clear path to inspection or recurring service. Legacy sites with crowded navigation and weak lead capture leave recurring revenue on the table.",
    focusLabel: "Recurring plans and inspections",
    focusChips: [
      "Local trust",
      "Review growth",
      "Plan booking",
      "Seasonal campaigns",
    ],
    helpItems: [
      {
        title: "Modern lead-capture sites",
        summary:
          "Cleaner hierarchy, protection-plan CTAs, and above-the-fold forms — the same modernization pattern used for legacy local brands.",
        serviceSlug: "web-development",
      },
      {
        title: "Local SEO and seasonal paid",
        summary:
          "Termite, mosquito, rodent, and recurring plan pages plus ads timed to seasonal demand.",
        serviceSlug: "seo-aeo-geo",
      },
      {
        title: "Call tracking and review systems",
        summary:
          "Route inquiries, recover missed calls, and grow reviews that support map and LSA performance.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Pest concern",
      "Local proof",
      "Inspection or plan CTA",
      "Call tracking",
      "Recurring nurture",
    ],
    relatedServiceSlugs: [...tradeServices],
    relatedCaseSlugs: [],
  },
  {
    slug: "landscaping-companies",
    title: "Marketing for Landscaping Companies",
    metaDescription:
      "Lead systems for lawn care, landscape design, irrigation, hardscapes, maintenance plans, and high-ticket outdoor projects.",
    headline: "Marketing for Landscaping Companies",
    intro:
      "Lead systems for lawn care, landscape design, irrigation, hardscapes, maintenance plans, and high-ticket outdoor projects.",
    problem:
      "Landscaping demand is seasonal and visual. Without clear offers, project pages, and estimate pipelines, spring rush traffic turns into untracked voicemails — and high-ticket design work never gets a consult calendar.",
    focusLabel: "Seasonal and project demand",
    focusChips: [
      "Estimate pipelines",
      "Project galleries",
      "Maintenance plans",
      "Seasonal ads",
    ],
    helpItems: [
      {
        title: "Offer-specific pages",
        summary:
          "Lawn care, design, hardscape, irrigation, and maintenance pages that match how homeowners actually search.",
        serviceSlug: "web-development",
      },
      {
        title: "Seasonal paid + local SEO",
        summary:
          "Capture spring and fall demand with landing pages and campaigns tied to estimate requests — not generic brand traffic.",
        serviceSlug: "google-ppc-management",
      },
      {
        title: "Estimate CRM",
        summary:
          "Stage estimates, reminders, and maintenance-plan nurture so project leads do not stall after the first quote.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Seasonal search",
      "Project proof",
      "Estimate request",
      "Pipeline follow-up",
      "Maintenance plan",
    ],
    relatedServiceSlugs: [...tradeServices, "meta-advertising"],
    relatedCaseSlugs: [],
  },
  {
    slug: "window-companies",
    title: "Marketing for Window Companies",
    metaDescription:
      "SEO, paid media, and quote funnels for window replacement, window cleaning, tint, treatments, and installation companies.",
    headline: "Marketing for Window Companies",
    intro:
      "SEO, paid media, and quote funnels for window replacement, window cleaning, tint, treatments, and installation companies.",
    problem:
      "Window buyers research energy savings, financing, install quality, and before/after proof before requesting a quote. Thin pages and slow quote follow-up hand the job to competitors who answer with a clear process.",
    focusLabel: "Replacement, install, and quote funnels",
    focusChips: [
      "Financed offers",
      "Quote funnels",
      "Install proof",
      "Local SEO",
    ],
    helpItems: [
      {
        title: "Specific replacement and install pages",
        summary:
          "Pages for replacements, installs, cleaning, tint, and treatments with CTAs that match ticket size.",
        serviceSlug: "web-development",
      },
      {
        title: "Paid media for quote requests",
        summary:
          "Google and Meta campaigns that send homeowners to offer-matched landing pages — not a generic homepage.",
        serviceSlug: "google-ppc-management",
      },
      {
        title: "Quote pipeline",
        summary:
          "Capture, qualify, and follow up on estimate requests with stages your sales team will actually use.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Homeowner research",
      "Offer clarity",
      "Quote CTA",
      "Estimate follow-up",
      "Install scheduling",
    ],
    relatedServiceSlugs: [...tradeServices, "meta-advertising"],
    relatedCaseSlugs: [],
  },
  {
    slug: "smart-home-installers",
    title: "Marketing for Smart Home Installers",
    metaDescription:
      "Positioning, web, ads, SEO, and CRM automation for smart home, security, AV, networking, and home automation installers.",
    headline: "Marketing for Smart Home Installers",
    intro:
      "Positioning, web, ads, SEO, and CRM automation for smart home, security, AV, networking, and home automation installers.",
    problem:
      "Smart home and AV installs are complex to explain. Prospects need to understand packages, integrations, and trust signals before they book a consult — and sales teams need context, not anonymous form dumps.",
    focusLabel: "Consults for complex installs",
    focusChips: [
      "Package clarity",
      "Consult calendars",
      "Authority pages",
      "CRM handoff",
    ],
    helpItems: [
      {
        title: "Explain complex installs clearly",
        summary:
          "Security, AV, networking, and automation pages that make packages and next steps obvious.",
        serviceSlug: "web-development",
      },
      {
        title: "SEO and paid for consult demand",
        summary:
          "Search content and campaigns that attract homeowners and builders ready for a design consult.",
        serviceSlug: "seo-aeo-geo",
      },
      {
        title: "Consult CRM",
        summary:
          "Route by install type, capture scope notes, and keep follow-up tight after the first conversation.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Problem research",
      "Package education",
      "Consult booking",
      "Scope capture",
      "Proposal follow-up",
    ],
    relatedServiceSlugs: [
      "web-development",
      "crm-solutions",
      "google-ppc-management",
      "seo-aeo-geo",
      "ai-implementation-agent-orchestration",
    ],
    relatedCaseSlugs: [],
  },
  {
    slug: "contractors",
    title: "Marketing for Contractors and Specialty Trades",
    metaDescription:
      "Growth systems for remodelers, HVAC companies, electricians, painters, concrete companies, pool builders, fence companies, flooring installers, restoration companies, builders, and specialty trades.",
    headline: "Marketing for Contractors and Specialty Trades",
    intro:
      "Growth systems for remodelers, HVAC, electricians, painters, concrete, pools, fence, flooring, restoration, builders, and specialty trades.",
    problem:
      "Trade-specific buyers search differently for each offer. One generic contractor site cannot win HVAC emergency calls, remodel estimates, and specialty installs at once — and every missed lead after an ad click costs real job revenue.",
    focusLabel: "Trade-specific demand capture",
    focusChips: [
      "Service × location pages",
      "LSA + PPC",
      "Speed to lead",
      "Job tracking",
    ],
    helpItems: [
      {
        title: "Trade-specific page architecture",
        summary:
          "Pages built around the exact trade, offer, and market — not vague “local contractor” copy.",
        serviceSlug: "web-development",
      },
      {
        title: "Google Ads, LSA, and Meta for jobs",
        summary:
          "Paid channels aimed at booked estimates and calls when landing pages, tracking, and follow-up are aligned.",
        serviceSlug: "google-ppc-management",
      },
      {
        title: "CRM that matches how crews sell",
        summary:
          "Pipelines, missed-call recovery, and reporting that show which channels become booked jobs.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Trade search",
      "Specific offer page",
      "Call or estimate",
      "Dispatch / sales handoff",
      "Job + review loop",
    ],
    relatedServiceSlugs: [
      ...tradeServices,
      "meta-advertising",
      "tiktok-ad-management",
    ],
    relatedCaseSlugs: [],
  },
  {
    slug: "med-spas",
    title: "Marketing for Med Spas and Aesthetic Clinics",
    metaDescription:
      "Premium web design, paid ads, local SEO, booking funnels, and CRM follow-up for injectables, laser, body contouring, skincare, and wellness offers.",
    headline: "Marketing for Med Spas and Aesthetic Clinics",
    intro:
      "Premium web design, paid ads, local SEO, booking funnels, and CRM follow-up for injectables, laser, body contouring, skincare, and wellness offers.",
    problem:
      "Aesthetic clinic buyers need treatment-specific education, trust, and an easy consult path. Generic clinic sites and slow follow-up lose high-intent leads who were ready to book a consultation.",
    focusLabel: "Treatment pages and consult funnels",
    focusChips: [
      "Treatment SEO",
      "Consult booking",
      "Meta + Google",
      "Nurture sequences",
    ],
    helpItems: [
      {
        title: "Treatment-specific pages",
        summary:
          "Injectables, laser, body contouring, skincare, and wellness pages that answer buyer questions and drive consult CTAs.",
        serviceSlug: "web-development",
      },
      {
        title: "Paid demand for consultations",
        summary:
          "Meta and Google campaigns for visual offers, seasonal promotions, and booked consultations — not cheap form spam.",
        serviceSlug: "meta-advertising",
      },
      {
        title: "Booking and nurture CRM",
        summary:
          "Calendars, reminders, and follow-up that keep consults on the books and reopen unfinished conversations.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Treatment research",
      "Trust + proof",
      "Consult CTA",
      "Calendar booking",
      "Show-rate follow-up",
    ],
    relatedServiceSlugs: [
      "web-development",
      "crm-solutions",
      "meta-advertising",
      "google-ppc-management",
      "seo-aeo-geo",
      "tiktok-ad-management",
    ],
    relatedCaseSlugs: [],
  },
  {
    slug: "b2b-services",
    title: "Marketing for B2B Service Companies",
    metaDescription:
      "Clear positioning, conversion-focused pages, search content, CRM follow-up, and paid campaigns for consultants, agencies, professional services, IT firms, finance, HR, recruiting, and operations firms.",
    headline: "Marketing for B2B Service Companies",
    intro:
      "Clear positioning, conversion-focused pages, search content, CRM follow-up, and paid campaigns for consultants, agencies, IT, finance, HR, recruiting, and operations firms.",
    problem:
      "B2B buyers need authority, offer clarity, and a path to a qualified conversation — not brochure sites that bury the actual next step. Weak positioning and slow follow-up stall pipeline even when ads or SEO create interest.",
    focusLabel: "Qualified conversations",
    focusChips: [
      "Positioning clarity",
      "Authority content",
      "Pipeline CRM",
      "Paid + organic",
    ],
    helpItems: [
      {
        title: "Conversion-focused positioning",
        summary:
          "Pages that state who you help, what changes, and why a buyer should book a call — with proof that matches ticket size.",
        serviceSlug: "web-development",
      },
      {
        title: "Search and paid for conversations",
        summary:
          "SEO/AEO/GEO content plus campaigns aimed at qualified calls — not vanity traffic.",
        serviceSlug: "seo-aeo-geo",
      },
      {
        title: "Pipeline visibility",
        summary:
          "CRM stages, source tracking, and follow-up so opportunities do not disappear after the first form fill.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Problem awareness",
      "Authority proof",
      "Call / application CTA",
      "Qualification",
      "Pipeline follow-up",
    ],
    relatedServiceSlugs: [
      "web-development",
      "crm-solutions",
      "meta-advertising",
      "google-ppc-management",
      "seo-aeo-geo",
      "ai-implementation-agent-orchestration",
    ],
    relatedCaseSlugs: ["momentum-coaching"],
  },
  {
    slug: "education-training",
    title: "Marketing for Education and Training Organizations",
    metaDescription:
      "Enrollment and lead generation systems for coaches, course creators, online education brands, schools, colleges, universities, workforce programs, and training organizations.",
    headline: "Marketing for Education & Training",
    intro:
      "Enrollment and lead generation systems for coaches, course creators, online education brands, schools, colleges, universities, workforce programs, and training organizations.",
    problem:
      "Education and coaching buyers need clarity on outcomes, fit, and next steps before they enroll or book an application call. Funnel leaks usually sit in weak offer pages, messy application routing, and slow nurture — not just ad creative.",
    focusLabel: "Enrollment and consult systems",
    focusChips: [
      "Enrollment funnels",
      "Application CRM",
      "Meta + Google",
      "Nurture sequences",
    ],
    helpItems: [
      {
        title: "Offer and enrollment pages",
        summary:
          "Program, coaching, and course pages that explain outcomes and push toward enrollments or consults.",
        serviceSlug: "web-development",
      },
      {
        title: "Paid campaigns with attribution",
        summary:
          "Meta and Google systems measured on enrollments and qualified conversations — not cheap clicks. Momentum Coaching produced 27.6x ROAS ($9,000 from $325.35 spend) on a high-ticket coaching offer.",
        serviceSlug: "meta-advertising",
      },
      {
        title: "Application and nurture CRM",
        summary:
          "Forms, calendars, reminders, and nurture that keep applicants moving toward enrollment.",
        serviceSlug: "crm-solutions",
      },
    ],
    journey: [
      "Outcome research",
      "Offer clarity",
      "Application / consult",
      "Nurture",
      "Enrollment",
    ],
    relatedServiceSlugs: [
      "web-development",
      "crm-solutions",
      "meta-advertising",
      "google-ppc-management",
      "seo-aeo-geo",
      "tiktok-ad-management",
    ],
    relatedCaseSlugs: ["momentum-coaching"],
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    metaDescription:
      "Fast, sharp, SEO-ready websites for service brands that need to look credible, explain what they do, and turn traffic into booked calls.",
    headline: "Websites that make buyers trust you before they call",
    intro:
      "Fast, sharp, SEO-ready websites for service brands that need to look credible, explain what they do, and turn traffic into booked calls.",
    problem:
      "A website cannot win trust if it looks polished but answers the wrong questions. Web development for a service business is not just layout and a contact button — the site has to make a stranger understand the offer, believe the company is credible, compare options, and know exactly what to do next.",
    pillars: [
      {
        index: "01",
        title: "Homepages that say what you do in seconds",
        summary:
          "Clarify the hero, navigation, CTAs, and proof stack so a first-time visitor understands the offer without digging.",
      },
      {
        index: "02",
        title: "Service pages built around search intent",
        summary:
          "Service and industry pages around search intent, internal links, schema, and comparison questions buyers actually ask.",
      },
      {
        index: "03",
        title: "Industry pages for trades, clinics, education, and B2B",
        summary:
          "Write each page around its real buyer, proof, objections, and conversion path instead of reusing generic copy.",
      },
      {
        index: "04",
        title: "Performance and clean technical SEO",
        summary:
          "Fast Next.js builds with clean metadata, optimized images, sitemap output, and CRM-ready forms or calendars.",
      },
    ],
    journey: [
      "Offer clarity",
      "Trust proof",
      "Intent pages",
      "Form / calendar",
      "CRM handoff",
    ],
    journeyLine:
      "The website is built as the front door to the whole growth system.",
    leaks: [
      "Hero copy that sounds impressive but does not say what the company does",
      "Service pages too thin to rank or persuade",
      "No visible proof above the first CTA",
      "Slow mobile pages and unclear forms",
      "Leads entering email instead of a real CRM path",
    ],
    useCases: [
      {
        title: "Conversion rebuild",
        summary:
          "For companies whose current site looks dated, explains too little, or loses mobile visitors before they contact the business.",
      },
      {
        title: "SEO architecture build",
        summary:
          "For brands that need service, industry, location, resource, and case-study pages that can scale without thin or duplicate copy.",
      },
    ],
    faqs: [
      {
        question:
          "When should a service business rebuild its website instead of editing the old one?",
        answer:
          "A rebuild makes sense when the homepage cannot explain the offer quickly, service pages are too thin to rank, mobile visitors have to work too hard, or forms and calendars do not connect to the follow-up process. Simplufy looks at trust, conversion paths, technical SEO, page speed, and whether the site gives each buyer type a clear next step.",
      },
      {
        question: "Will the website be built for SEO from the start?",
        answer:
          "Yes. Web development includes crawlable pages, semantic headings, internal links, service and industry page architecture, metadata, schema, image alt text, and strong performance. The goal is a site that looks premium and gives search engines enough context to understand what you offer.",
      },
      {
        question: "Can you connect forms, calendars, and CRM tracking?",
        answer:
          "Yes. A website should not end at a form submit. Simplufy can connect GoHighLevel forms, booking calendars, tracking scripts, thank-you paths, CRM stages, and follow-up workflows so the site becomes part of the sales system.",
      },
    ],
    relatedIndustrySlugs: industries.map((i) => i.slug),
    ctaPrompt:
      "Bring the current site, the services you want to sell more of, and the markets you want to win. We will review the page path from first impression to booked opportunity.",
  },
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    metaDescription:
      "GoHighLevel pipelines, automations, calendars, forms, missed-call flows, and reporting so leads do not die in an inbox.",
    headline: "CRM systems that stop good leads from slipping away",
    intro:
      "GoHighLevel setup, pipelines, automations, calendars, forms, missed-call flows, and reporting that match how your team actually sells.",
    problem:
      "CRM problems show up after the lead arrives — when speed, ownership, and follow-up matter most. Many companies have forms, calendars, inboxes, spreadsheets, and ad platforms all collecting pieces of the truth.",
    pillars: [
      {
        index: "01",
        title: "Pipeline stages your team can actually use",
        summary:
          "Define stages that match the real sales process instead of generic labels nobody updates.",
      },
      {
        index: "02",
        title: "Speed-to-lead SMS, email, and call automations",
        summary:
          "Trigger SMS, email, call tasks, reminders, and missed-call recovery while keeping human handoff clear.",
      },
      {
        index: "03",
        title: "Calendar and form routing by offer or location",
        summary:
          "Route forms and calendars by service, location, offer, or buyer type so leads reach the right workflow.",
      },
      {
        index: "04",
        title: "Reporting that shows booked outcomes",
        summary:
          "Tie sources and stages together so reports show which channels become booked calls, estimates, or jobs.",
      },
    ],
    journey: [
      "Form captured",
      "Auto-routed",
      "Follow-up sent",
      "Pipeline updated",
      "Revenue tracked",
    ],
    journeyLine: "A lead should never disappear after the form submit.",
    leaks: [
      "New leads sitting without ownership",
      "Missed calls with no instant text-back",
      "Calendar bookings not tied to source or pipeline stage",
      "Sales notes scattered across inboxes and phones",
      "Reports that show lead volume but not opportunity quality",
    ],
    useCases: [
      {
        title: "Pipeline rebuild",
        summary:
          "For teams losing leads because stages, ownership, notes, or source tracking are unclear.",
      },
      {
        title: "Automation cleanup",
        summary:
          "For businesses with existing GoHighLevel workflows that need better triggers, messages, reporting, and human review.",
      },
    ],
    faqs: [
      {
        question: "What CRM problems does Simplufy usually fix first?",
        answer:
          "The first fixes are usually lead routing, missed-call recovery, calendar reminders, pipeline stages, source tracking, and follow-up timing. If a good lead enters the business but nobody knows who owns it, what stage it is in, or when the next touch happens, the CRM is costing revenue.",
      },
      {
        question: "Do CRM automations replace the sales team?",
        answer:
          "No. CRM automation should protect the sales team from repetitive gaps, not pretend the human relationship does not matter. The strongest systems send reminders, route leads, capture notes, trigger confirmations, and keep the next step clear while the team handles the conversation.",
      },
      {
        question: "Can this work with GoHighLevel?",
        answer:
          "Yes. Simplufy builds GoHighLevel pipelines, forms, calendars, workflows, SMS/email follow-up, missed-call text-back, task creation, reporting views, and campaign attribution when GoHighLevel is the right operating system for the business.",
      },
    ],
    relatedIndustrySlugs: industries.map((i) => i.slug),
    ctaPrompt:
      "Show us where leads currently enter the business and where follow-up breaks. We will map the highest-impact CRM fixes first.",
  },
  {
    slug: "google-ppc-management",
    title: "Google PPC",
    metaDescription:
      "Search and Performance Max campaigns aimed at calls, forms, estimates, consults, and enrollments — not vanity clicks.",
    headline: "Google PPC campaigns built for high-intent searches",
    intro:
      "Google Search and Performance Max management for service companies that need calls, forms, estimates, consultations, appointments, and enrollment inquiries from buyers already searching.",
    problem:
      "Google PPC captures people already searching for a service, location, problem, or company. Campaigns often fail because traffic lands on a weak page, calls are not tracked, forms do not route into a CRM, or the offer does not match the search.",
    pillars: [
      {
        index: "01",
        title: "Intent-matched campaigns",
        summary:
          "Structure Search and Performance Max around the queries and offers that actually produce booked opportunities.",
      },
      {
        index: "02",
        title: "Landing pages that match the query",
        summary:
          "Send traffic to specific service and industry pages — not a generic homepage that makes buyers work.",
      },
      {
        index: "03",
        title: "Conversion and call tracking",
        summary:
          "Connect form, call, and CRM signals so budget decisions are based on lead quality.",
      },
      {
        index: "04",
        title: "Continuous negative and offer tightening",
        summary:
          "Cut wasted spend and improve creative and landing paths against booked outcomes.",
      },
    ],
    journey: [
      "Query",
      "Matched ad",
      "Intent page",
      "Call / form",
      "CRM stage",
    ],
    journeyLine:
      "Paid search should buy booked opportunities — not cheap clicks.",
    leaks: [
      "Ads pointing at a generic homepage",
      "No call tracking or CRM attribution",
      "Broad match waste without negatives",
      "Offers that do not match search intent",
      "Reporting stuck on clicks and CTR",
    ],
    useCases: [
      {
        title: "High-intent trade demand",
        summary:
          "Roofing, plumbing, HVAC, and specialty trades where buyers are already searching for a job.",
      },
      {
        title: "Consult and enrollment capture",
        summary:
          "Clinics, coaching, and B2B offers where the conversion is a booked conversation.",
      },
    ],
    faqs: [
      {
        question: "What makes Google PPC different from other paid media?",
        answer:
          "Google PPC captures people already searching for a service, location, problem, or company. The work is less about creating demand from scratch and more about matching search intent with the right ad, landing page, offer, tracking, and follow-up path.",
      },
      {
        question: "Why do Google Ads campaigns fail even with good keywords?",
        answer:
          "Campaigns often fail because traffic lands on a weak page, calls are not tracked, forms do not route into a CRM, negative keywords are ignored, or the offer does not match the search. Simplufy reviews the entire path from query to booked opportunity instead of only changing bids.",
      },
      {
        question: "Will reporting show booked opportunities, not just clicks?",
        answer:
          "That is the goal. Google PPC management should connect conversion tracking, call tracking, form submissions, CRM stages, and sales feedback so budget decisions are based on lead quality and booked opportunities.",
      },
    ],
    relatedIndustrySlugs: industries.map((i) => i.slug),
    ctaPrompt:
      "Share your current account, landing pages, and what a booked opportunity looks like. We will find where spend is leaking.",
  },
  {
    slug: "meta-advertising",
    title: "Meta Ads",
    metaDescription:
      "Facebook and Instagram campaigns for visual offers, retargeting, lead gen, seasonal pushes, and booked consultations.",
    headline: "Meta ads that build demand before buyers search",
    intro:
      "Facebook and Instagram ad campaigns for visual offers, retargeting, lead generation, seasonal promotions, consultations, and high-value service demand.",
    problem:
      "Meta works when the offer can be shown, proof matters, and follow-up is fast. Low-quality leads usually come from vague creative, weak friction on forms, and CRM that treats every form fill as pipeline.",
    pillars: [
      {
        index: "01",
        title: "Creative that pre-qualifies",
        summary:
          "Hooks, offers, and proof angles that attract the buyer you want — and filter the ones you do not.",
      },
      {
        index: "02",
        title: "Lead forms or landing pages by ticket size",
        summary:
          "Native forms when speed matters; landing pages when education and trust matter more.",
      },
      {
        index: "03",
        title: "Retargeting that warms the next step",
        summary:
          "Bring visitors back with proof, offers, and clear CTAs instead of one-and-done campaigns.",
      },
      {
        index: "04",
        title: "CRM-connected follow-up",
        summary:
          "Route Meta leads into pipelines with fast SMS/email so CPL turns into booked calls.",
      },
    ],
    journey: [
      "Creative hook",
      "Offer friction",
      "Lead / landing",
      "Speed-to-lead",
      "Booked outcome",
    ],
    journeyLine:
      "Meta should create and warm demand — then hand a clean lead to your team.",
    leaks: [
      "Creative that attracts tire-kickers",
      "Forms with zero qualification",
      "No retargeting after site visits",
      "Slow CRM follow-up on cheap CPL leads",
      "Confusing CPL with pipeline value",
    ],
    useCases: [
      {
        title: "Visual service brands",
        summary:
          "Detailing, styling, med spas, and landscaping where proof photos and transformations convert.",
      },
      {
        title: "High-ticket coaching and B2B",
        summary:
          "Campaigns measured on revenue and conversations — like Momentum Coaching’s 27.6x ROAS on $325.35 spend.",
      },
    ],
    faqs: [
      {
        question: "What types of businesses are a good fit for Meta Ads?",
        answer:
          "Meta Ads work well when the offer can be explained visually, when proof matters, when retargeting can warm up visitors, or when the business has a lead magnet, consultation, seasonal promotion, or high-value service that benefits from repeated exposure.",
      },
      {
        question: "How do you avoid low-quality Facebook leads?",
        answer:
          "Lead quality improves when the creative pre-qualifies the buyer, the form asks the right friction questions, the offer is clear, and the CRM follow-up happens fast. Simplufy separates testing, retargeting, and higher-intent paths so cheap form fills do not get mistaken for real pipeline.",
      },
      {
        question: "Do Meta campaigns need landing pages?",
        answer:
          "Sometimes native lead forms are best for speed; other times landing pages are better for education, proof, and higher-intent conversion. Simplufy chooses the path based on the offer, ticket size, sales cycle, and how much trust the buyer needs.",
      },
    ],
    relatedIndustrySlugs: [
      "auto-detailing-shops",
      "auto-styling-shops",
      "med-spas",
      "landscaping-companies",
      "education-training",
      "b2b-services",
      "contractors",
      "window-companies",
    ],
    ctaPrompt:
      "Bring offer creative, current CPL reality, and what a qualified lead looks like. We will design Meta around booked outcomes.",
  },
  {
    slug: "google-local-service-ads",
    title: "Google LSA",
    metaDescription:
      "Local Services Ads for eligible trades and home services that need high-intent local demand with clear call tracking.",
    headline: "Google Local Service Ads for eligible local service companies",
    intro:
      "Google Local Services Ads setup and management for eligible industries where calls, booked appointments, trust badges, reviews, and fast response times can drive local demand.",
    problem:
      "LSAs depend on reviews, response speed, call quality, dispute review, category fit, and lead feedback. If calls are missed, weak, or miscategorized, the account can spend without producing profitable jobs.",
    pillars: [
      {
        index: "01",
        title: "Eligibility and account readiness",
        summary:
          "Check category fit, licensing, verification, and profile readiness before treating LSA as a primary lead source.",
      },
      {
        index: "02",
        title: "Review and response systems",
        summary:
          "Protect ranking signals with review growth, fast answer rates, and missed-call recovery.",
      },
      {
        index: "03",
        title: "Call quality and disputes",
        summary:
          "Monitor lead quality, dispute weak leads, and keep budget aimed at real jobs.",
      },
      {
        index: "04",
        title: "CRM routing for every call",
        summary:
          "Track calls, missed calls, bookings, and job notes outside the ad platform alone.",
      },
    ],
    journey: [
      "Eligibility",
      "Profile + reviews",
      "Call / message",
      "CRM capture",
      "Job feedback",
    ],
    journeyLine:
      "LSA wins when response speed and call handling match the badge.",
    leaks: [
      "Missed calls with no text-back",
      "Weak or untracked lead quality",
      "Review profile neglected",
      "No CRM beyond the LSA inbox",
      "Budget left on poorly categorized leads",
    ],
    useCases: [
      {
        title: "Home service trades",
        summary:
          "Roofing, plumbing, pest control, HVAC, and other eligible categories with local call demand.",
      },
      {
        title: "Call-heavy shops ready for CRM",
        summary:
          "Teams that can answer fast and need attribution from LSA into booked jobs.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for Google Local Service Ads?",
        answer:
          "Eligibility depends on the industry, location, licensing, background checks, verification status, and Google’s current category rules. Simplufy starts by checking category fit and account readiness before treating LSA as a viable lead source.",
      },
      {
        question: "Why do LSAs need active management?",
        answer:
          "Local Service Ads depend on reviews, response speed, call quality, dispute review, category fit, budget pacing, and lead feedback. If calls are missed, weak, or miscategorized, the account can spend without producing profitable jobs.",
      },
      {
        question: "Can LSA calls be routed into CRM follow-up?",
        answer:
          "Yes. LSA performance improves when calls, missed calls, booked appointments, job notes, and follow-up tasks are tracked instead of living only inside the ad platform or a phone log.",
      },
    ],
    relatedIndustrySlugs: [
      "roofing-companies",
      "plumbing-companies",
      "pest-control-companies",
      "landscaping-companies",
      "window-companies",
      "contractors",
      "smart-home-installers",
    ],
    ctaPrompt:
      "Tell us your trade, markets, and current call handling. We will check LSA fit and the CRM gaps that kill ROI.",
  },
  {
    slug: "tiktok-ad-management",
    title: "TikTok Ads",
    metaDescription:
      "Short-form demand, offer education, and retargeting for brands that can win attention before the lead goes cold.",
    headline: "TikTok ads for visual offers, awareness, and retargeting",
    intro:
      "TikTok campaign strategy and management for brands that can use short-form creative to create demand, explain offers, retarget visitors, and support booked calls or inquiries.",
    problem:
      "TikTok makes sense when the business can show transformations, demonstrations, founder education, or visual outcomes. It is usually strongest as an awareness, retargeting, and creative-learning channel — not a standalone magic lead source.",
    pillars: [
      {
        index: "01",
        title: "Hooks and formats that stop the scroll",
        summary:
          "Test creative angles that teach what buyers actually care about.",
      },
      {
        index: "02",
        title: "Clear next steps after the view",
        summary:
          "Landing pages, lead forms, and remarketing paths so attention becomes a conversation.",
      },
      {
        index: "03",
        title: "Retargeting sequences",
        summary:
          "Bring warm viewers back with proof and offers instead of one cold open forever.",
      },
      {
        index: "04",
        title: "Creative insights for the whole stack",
        summary:
          "Feed winning hooks into Meta, website copy, and sales enablement.",
      },
    ],
    journey: [
      "Hook",
      "Offer education",
      "Click / engage",
      "Retarget",
      "Booked inquiry",
    ],
    journeyLine:
      "TikTok should teach the system — and warm the next conversion step.",
    leaks: [
      "No clear CTA after viral attention",
      "Creative that entertains but does not qualify",
      "Disconnected from CRM and remarketing",
      "Expecting TikTok alone to replace search demand",
      "No learning loop into other channels",
    ],
    useCases: [
      {
        title: "Transformation-led brands",
        summary:
          "Detailing, med spas, landscaping, and education offers with visual before/after stories.",
      },
      {
        title: "Creative R&D for Meta and web",
        summary:
          "Use TikTok learning to improve ads and page messaging across the funnel.",
      },
    ],
    faqs: [
      {
        question: "When does TikTok make sense for a service business?",
        answer:
          "TikTok makes sense when the business can show transformations, demonstrations, founder education, behind-the-scenes proof, strong hooks, or visual outcomes. It is usually strongest as an awareness, retargeting, and creative-learning channel rather than a standalone magic lead source.",
      },
      {
        question: "What does Simplufy test on TikTok?",
        answer:
          "Testing focuses on hooks, video formats, proof angles, offer framing, audience response, landing paths, and retargeting sequences. Short-form creative should teach the rest of the marketing system what buyers actually stop and care about.",
      },
      {
        question: "How is TikTok connected to the rest of the funnel?",
        answer:
          "TikTok traffic can support landing pages, lead forms, remarketing audiences, CRM nurture, and creative insights for Meta, website copy, and sales enablement. The channel works best when it has a clear next step after the view.",
      },
    ],
    relatedIndustrySlugs: [
      "auto-detailing-shops",
      "auto-styling-shops",
      "med-spas",
      "landscaping-companies",
      "education-training",
      "contractors",
    ],
    ctaPrompt:
      "If you can show the work, we can test whether TikTok should feed awareness, retargeting, or both.",
  },
  {
    slug: "seo-aeo-geo",
    title: "SEO / AEO / GEO",
    metaDescription:
      "Traditional SEO plus answer-engine and generative-engine optimization so buyers and AI tools understand what you do.",
    headline: "SEO, AEO, and GEO for service businesses",
    intro:
      "Traditional SEO plus answer-engine and generative-engine optimization so buyers and AI tools understand what you do, who you help, and why you are credible.",
    problem:
      "Thin “local business” pages do not rank, do not persuade, and do not give AI answer tools enough clarity. Service companies need specific pages for services, problems, locations, and industries — structured so Google and generative tools can understand the offer.",
    pillars: [
      {
        index: "01",
        title: "SEO architecture that matches intent",
        summary:
          "Service, industry, location, and resource pages built for how buyers actually search.",
      },
      {
        index: "02",
        title: "AEO — answer the questions before the call",
        summary:
          "Structure content so pages clearly answer comparison, process, pricing-signal, and trust questions.",
      },
      {
        index: "03",
        title: "GEO — clarity for generative engines",
        summary:
          "Improve how your brand, services, and proof may be understood and referenced by AI search experiences.",
      },
      {
        index: "04",
        title: "Technical + local foundations",
        summary:
          "Crawlability, internal links, schema, GBP direction, and review strategy for map and organic demand.",
      },
    ],
    journey: [
      "Intent map",
      "Page architecture",
      "Answer content",
      "Technical SEO",
      "Measure & tighten",
    ],
    journeyLine:
      "Search visibility should create booked conversations — not just rankings.",
    leaks: [
      "Thin service pages with duplicate fluff",
      "No industry or location depth",
      "FAQs missing where buyers decide",
      "Weak internal linking between services and proof",
      "Ignoring how AI answer tools parse the brand",
    ],
    useCases: [
      {
        title: "Local service SEO",
        summary:
          "Trades, clinics, and shops that need map visibility and service-area pages that convert.",
      },
      {
        title: "Authority SEO for B2B and education",
        summary:
          "Content systems that support qualified conversations and AI-visible expertise.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between SEO, AEO, and GEO?",
        answer:
          "SEO focuses on helping pages rank in traditional search. AEO structures content so pages clearly answer buyer questions. GEO improves how your brand and services may be understood by AI search tools. For Simplufy these are not separate silos — they all influence clarity, credibility, and next steps.",
      },
      {
        question: "Can you help with local SEO and map visibility?",
        answer:
          "Yes. For location-based companies, work can include service pages, location pages, internal linking, technical SEO, Google Business Profile direction, review strategy, FAQs, schema, and content that answers market-specific questions.",
      },
      {
        question: "How is on-page SEO handled?",
        answer:
          "Descriptive titles, meta descriptions, semantic headings, service and industry pages, internal links, FAQ content, schema, sitemaps, and crawlable HTML — plus useful writing that matches intent instead of stuffing keywords.",
      },
    ],
    relatedIndustrySlugs: industries.map((i) => i.slug),
    ctaPrompt:
      "Share your top services, markets, and current rankings. We will map the page architecture that should exist next.",
  },
  {
    slug: "ai-implementation-agent-orchestration",
    title: "AI Implementation",
    metaDescription:
      "Practical workflows and agent orchestration for follow-up, reporting, research, content, intake, and ops handoffs.",
    headline: "Practical AI implementation — not hype",
    intro:
      "Practical workflows and agent orchestration for follow-up, reporting, research, content production, intake, operations, and internal handoffs.",
    problem:
      "AI fails when it becomes a fragile black box with no review points, bad data, or unclear ownership. Simplufy focuses on removing repetitive work and improving response speed with human review, clean prompts, and sensible boundaries.",
    pillars: [
      {
        index: "01",
        title: "Intake and lead routing assistants",
        summary:
          "Summarize lead context, draft first responses, and route work without losing human control.",
      },
      {
        index: "02",
        title: "Reporting and research workflows",
        summary:
          "Turn ad, CRM, and ops data into readable summaries your team can act on.",
      },
      {
        index: "03",
        title: "Content and knowledge assistants",
        summary:
          "Support drafts, internal FAQs, and research with review gates before anything publishes or sends.",
      },
      {
        index: "04",
        title: "Agent orchestration with fallbacks",
        summary:
          "Multi-step workflows with logging, handoffs, and fallback paths — useful leverage, not theater.",
      },
    ],
    journey: [
      "Map repetitive work",
      "Define review gates",
      "Connect tools",
      "Orchestrate agents",
      "Measure time saved",
    ],
    journeyLine:
      "AI should protect speed and quality — not create work nobody trusts.",
    leaks: [
      "Chatbots with no CRM ownership",
      "Automations nobody monitors",
      "Prompts without brand or compliance boundaries",
      "No human review on customer-facing output",
      "Tools bolted on without process redesign",
    ],
    useCases: [
      {
        title: "Speed-to-lead assistance",
        summary:
          "Draft follow-up and route intake for trades, clinics, and shops that cannot afford slow response.",
      },
      {
        title: "Ops and reporting leverage",
        summary:
          "Summaries, research, and internal handoffs that free operators from repetitive admin.",
      },
    ],
    faqs: [
      {
        question: "What kind of AI implementation does Simplufy provide?",
        answer:
          "Practical workflows: AI-assisted intake, lead routing, reporting summaries, content workflows, research workflows, internal knowledge assistants, CRM task automation, proposal support, follow-up drafting, and agent orchestration for repetitive operations — with clear human review points.",
      },
      {
        question: "Will this replace the sales team?",
        answer:
          "No. The goal is leverage: remove repetitive work and improve response speed while humans handle relationships, judgment, and closing.",
      },
      {
        question: "Can AI connect to CRM, ads, content, and operations?",
        answer:
          "Yes, when the workflow is designed carefully. AI can summarize lead context, draft follow-up, prepare reports, support content production, research accounts, and help coordinate handoffs — orchestrated around real business rules.",
      },
    ],
    relatedIndustrySlugs: [
      "contractors",
      "b2b-services",
      "med-spas",
      "education-training",
      "smart-home-installers",
      "auto-detailing-shops",
      "plumbing-companies",
      "roofing-companies",
    ],
    ctaPrompt:
      "Show us the repetitive handoffs that slow your team. We will propose AI where it actually saves time.",
  },
];

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    slug: "detail-depot",
    title: "How Detail Depot scaled from $2,000 to $12,000+/month",
    metaDescription:
      "Naperville ceramic coating and premium detailing campaign with 285 leads, $83,260 in pipeline value, and a 10x+ ad return.",
    industry: "Auto Detailing",
    location: "Naperville",
    narrative: [
      "Detail Depot needed a connected system for premium ceramic coating and detailing demand — not isolated ads or a brochure site.",
      "Simplufy aligned paid demand, sharper offer pages, and a CRM path so leads kept moving. Published results include 285 leads, $8.69 CPL, $83,260 in tracked pipeline value, and 10x+ ROAS while monthly revenue scaled from roughly $2K to $12K+/mo.",
    ],
    highlights: ["285 leads", "$8.69 CPL", "$83,260 pipeline", "10x+ ROAS"],
    stack: ["Meta Ads", "Website / offer pages", "CRM follow-up"],
  },
  {
    slug: "jp-mobile-detail",
    title: "How JP Mobile Detail automated bookings and won Google Search",
    metaDescription:
      "Powell, Ohio mobile detailing campaign with 1,087 Google clicks, $0.44 average CPC, and 31 primary bookings at $15.51 CPA.",
    industry: "Auto Detailing",
    location: "Powell, Ohio",
    narrative: [
      "JP Mobile Detail needed efficient Google Search demand and a booking path built for mobile detailing — service tiers, vehicle-size selection, scheduling, and upsells.",
      "Published results: 1,087 Google clicks at $0.44 average CPC and 31 primary bookings at $15.51 CPA.",
    ],
    highlights: ["1,087 clicks", "$0.44 CPC", "31 bookings", "$15.51 CPA"],
    stack: ["Google Search", "Booking engine", "Offer packaging"],
  },
  {
    slug: "momentum-coaching",
    title: "Momentum Coaching — 27.6x ROAS on Meta",
    metaDescription:
      "High-ticket B2B coaching campaign that produced $9,000 from $325.35 in ad spend (27.6x ROAS).",
    industry: "Education & Coaching",
    narrative: [
      "Momentum Coaching needed Meta campaigns that turned a small spend into measurable coaching revenue with clean attribution.",
      "Published results: $9,000 revenue from $325.35 spend — 27.6x ROAS — on a high-ticket B2B coaching offer.",
    ],
    highlights: ["27.6x ROAS", "$9,000 revenue", "$325.35 spend"],
    stack: ["Meta Ads", "Offer clarity", "Attribution"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getIndustryDetail(slug: string): IndustryDetail | undefined {
  const base = industryDetails.find((i) => i.slug === slug);
  if (!base) return undefined;
  const craft = industryCraft[slug];
  if (!craft) {
    throw new Error(`Missing industry craft data for slug: ${slug}`);
  }
  return { ...base, ...craft };
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyDetail(slug: string): CaseStudyDetail | undefined {
  return caseStudyDetails.find((c) => c.slug === slug);
}

export function resolveServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}

export function resolveIndustries(slugs: string[]): Industry[] {
  return slugs
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter((i): i is Industry => Boolean(i));
}

export function resolveCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));
}
