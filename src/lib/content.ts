export type Service = {
  slug: string;
  name: string;
  summary: string;
  href: string;
};

export type Industry = {
  slug: string;
  name: string;
  benefit: string;
  href: string;
  /** Optimized WebP under /public/industries — used on hub + homepage tiles */
  image?: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  metric: string;
  metricLabel: string;
  summary: string;
  href: string;
  chips: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "Simplufy",
  tagline: "Get found. Get chosen. Follow up before the lead goes cold.",
  description:
    "Simplufy builds websites, paid ads, CRM automation, SEO/AEO/GEO, and AI systems for contractors, auto shops, med spas, education brands, and B2B service companies.",
  location: "St. Petersburg, Florida",
  url: "https://simplufy.com",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Results", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary:
      "Fast, sharp, SEO-ready websites for service brands that need to look credible, explain what they do, and turn traffic into booked calls.",
    href: "/services/web-development",
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    summary:
      "GoHighLevel pipelines, automations, calendars, forms, missed-call flows, and reporting so leads do not die in an inbox.",
    href: "/services/crm-solutions",
  },
  {
    slug: "google-ppc-management",
    name: "Google PPC",
    summary:
      "Search and Performance Max campaigns aimed at calls, forms, estimates, consults, and enrollments — not vanity clicks.",
    href: "/services/google-ppc-management",
  },
  {
    slug: "meta-advertising",
    name: "Meta Ads",
    summary:
      "Facebook and Instagram campaigns for visual offers, retargeting, lead gen, seasonal pushes, and booked consultations.",
    href: "/services/meta-advertising",
  },
  {
    slug: "google-local-service-ads",
    name: "Google LSA",
    summary:
      "Local Services Ads for eligible trades and home services that need high-intent local demand with clear call tracking.",
    href: "/services/google-local-service-ads",
  },
  {
    slug: "tiktok-ad-management",
    name: "TikTok Ads",
    summary:
      "Short-form demand, offer education, and retargeting for brands that can win attention before the lead goes cold.",
    href: "/services/tiktok-ad-management",
  },
  {
    slug: "seo-aeo-geo",
    name: "SEO / AEO / GEO",
    summary:
      "Traditional SEO plus answer-engine and generative-engine optimization so buyers and AI tools understand what you do.",
    href: "/services/seo-aeo-geo",
  },
  {
    slug: "ai-implementation-agent-orchestration",
    name: "AI Implementation",
    summary:
      "Practical workflows and agent orchestration for follow-up, reporting, research, content, intake, and ops handoffs.",
    href: "/services/ai-implementation-agent-orchestration",
  },
];

export const industries: Industry[] = [
  {
    slug: "auto-detailing-shops",
    name: "Auto Detailing",
    benefit: "Book more packages with pages and follow-up that match high-intent shoppers.",
    href: "/industries/auto-detailing-shops",
    image: "/industries/auto-detailing-shops.webp",
  },
  {
    slug: "auto-styling-shops",
    name: "Auto Styling",
    benefit: "Position premium work and capture consults before the lead shops around.",
    href: "/industries/auto-styling-shops",
    image: "/industries/auto-styling-shops.webp",
  },
  {
    slug: "roofing-companies",
    name: "Roofing",
    benefit: "Turn storm and repair demand into tracked estimates and booked inspections.",
    href: "/industries/roofing-companies",
    image: "/industries/roofing-companies.webp",
  },
  {
    slug: "plumbing-companies",
    name: "Plumbing",
    benefit: "Speed-to-lead systems for emergency and install calls that cannot wait.",
    href: "/industries/plumbing-companies",
    image: "/industries/plumbing-companies.webp",
  },
  {
    slug: "pest-control-companies",
    name: "Pest Control",
    benefit: "Modernize local trust, reviews, and booking for recurring service routes.",
    href: "/industries/pest-control-companies",
    image: "/industries/pest-control-companies.webp",
  },
  {
    slug: "landscaping-companies",
    name: "Landscaping",
    benefit: "Seasonal demand capture with clear offers and estimate pipelines.",
    href: "/industries/landscaping-companies",
    image: "/industries/landscaping-companies.webp",
  },
  {
    slug: "window-companies",
    name: "Windows",
    benefit: "Specific pages for replacements, installs, and financed offers that convert.",
    href: "/industries/window-companies",
    image: "/industries/window-companies.webp",
  },
  {
    slug: "smart-home-installers",
    name: "Smart Home",
    benefit: "Explain complex installs and move prospects into consult calendars.",
    href: "/industries/smart-home-installers",
    image: "/industries/smart-home-installers.webp",
  },
  {
    slug: "contractors",
    name: "Contractors",
    benefit: "Trade-specific pages, ads, and CRM so every missed lead costs less.",
    href: "/industries/contractors",
    image: "/industries/contractors.webp",
  },
  {
    slug: "med-spas",
    name: "Med Spas",
    benefit: "Treatment pages and consult funnels built for aesthetic clinic buyers.",
    href: "/industries/med-spas",
    image: "/industries/med-spas.webp",
  },
  {
    slug: "b2b-services",
    name: "B2B Services",
    benefit: "Clarify offers and book qualified conversations for consultants and agencies.",
    href: "/industries/b2b-services",
    image: "/industries/b2b-services.webp",
  },
  {
    slug: "education-training",
    name: "Education & Training",
    benefit: "Enrollment and consult systems for coaches, schools, and workforce programs.",
    href: "/industries/education-training",
    image: "/industries/education-training.webp",
  },
];

/** Arctic Air HVAC — industries hub hero accent (not forced onto a wrong industry slug) */
export const industriesHubAccent = "/industries/home-services-hvac.webp";

export const proofMetrics = [
  {
    value: "$83,260",
    label: "Detail Depot pipeline",
    detail: "285 leads · $8.69 CPL · 10x+ ROAS",
  },
  {
    value: "27.6x",
    label: "Momentum Coaching ROAS",
    detail: "$9,000 from $325.35 spend",
  },
  {
    value: "31",
    label: "JP Mobile Detail bookings",
    detail: "1,087 clicks · $0.44 CPC · $15.51 CPA",
  },
  {
    value: "Since 1933",
    label: "State Termite modernization",
    detail: "Lead capture · call tracking · reviews",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "detail-depot",
    name: "Detail Depot",
    metric: "$83,260",
    metricLabel: "pipeline",
    summary:
      "Scaled from roughly $2K to $12K+/mo with paid demand, sharper offer pages, and a CRM path that kept leads moving.",
    href: "/case-studies/detail-depot",
    chips: ["285 leads", "$8.69 CPL", "10x+ ROAS"],
  },
  {
    slug: "jp-mobile-detail",
    name: "JP Mobile Detail",
    metric: "31",
    metricLabel: "bookings",
    summary:
      "Google Search system with efficient CPC and a booking path built for mobile detailing demand.",
    href: "/case-studies/jp-mobile-detail",
    chips: ["1,087 clicks", "$0.44 CPC", "$15.51 CPA"],
  },
  {
    slug: "momentum-coaching",
    name: "Momentum Coaching",
    metric: "27.6x",
    metricLabel: "ROAS",
    summary:
      "Meta campaigns that turned a small spend into measurable coaching revenue with clean attribution.",
    href: "/case-studies/momentum-coaching",
    chips: ["$9,000 revenue", "$325.35 spend"],
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Audit",
    summary:
      "Find the leak before spending more money. We map the path from traffic to booked opportunity across site, ads, CRM, and follow-up.",
  },
  {
    index: "02",
    title: "Build",
    summary:
      "Connect the pieces that matter: sharper pages, booking paths, paid campaigns, GoHighLevel pipelines, and practical AI where it speeds response.",
  },
  {
    index: "03",
    title: "Improve",
    summary:
      "Marketing should be clear enough to see what is working. We tighten offers, creative, tracking, and handoffs against booked outcomes.",
  },
];

export const systemPillars = [
  {
    index: "01",
    title: "Web presence",
    summary:
      "Specific pages for specific buyers — not vague local-business copy. Fast sites that explain the offer and earn trust.",
  },
  {
    index: "02",
    title: "Booking path",
    summary:
      "Forms, calendars, and CRM stages that move a lead from click to call without friction or lost follow-up.",
  },
  {
    index: "03",
    title: "Performance",
    summary:
      "Ads, SEO/AEO/GEO, and reporting aimed at booked calls, estimates, consults, and enrollments.",
  },
];

export const resources = [
  {
    title: "SEO, AEO, and GEO for service industries",
    summary:
      "How contractors, clinics, auto shops, education brands, and B2B companies can structure pages for Google, maps, and AI search.",
    href: "/resources",
  },
  {
    title: "The follow-up system that turns leads into booked calls",
    summary:
      "Why a nice website will not save slow follow-up — and how CRM timing fixes the leak.",
    href: "/resources",
  },
  {
    title: "Google Ads, LSA, and Meta for contractors",
    summary:
      "Paid channels that fit trades when landing pages, tracking, and speed-to-lead are aligned.",
    href: "/resources",
  },
];

export const valueChips = [
  "Speed to lead",
  "Search captures demand",
  "AI routes repetitive work",
];

export const faqs: FaqItem[] = [
  {
    question: "What industries does Simplufy work with?",
    answer: "Simplufy is built for companies that sell services and depend on booked opportunities, not ecommerce carts. That includes auto detailing shops, auto styling shops, roofing companies, plumbers, pest control companies, landscapers, window companies, smart home installers, contractors, med spas, B2B service companies, coaches, online education brands, schools, colleges, universities, and training organizations. The strategy changes by industry because each market has different buyer intent, search behavior, trust signals, seasonality, and follow-up needs.",
  },
  {
    question: "What does Simplufy actually build?",
    answer: "Simplufy builds the connected growth system around your offer: the website, landing pages, service pages, industry pages, Google PPC, Meta, Google LSA, TikTok campaigns, CRM pipeline, GoHighLevel forms and calendars, follow-up automations, SEO/AEO/GEO content structure, analytics, reporting, and practical AI workflows. The goal is not to sell one isolated tactic. The goal is to make the path from first click to booked call, consultation, estimate, appointment, enrollment, or sales conversation much easier to measure and improve.",
  },
  {
    question: "Do you work with ecommerce or SaaS companies?",
    answer: "That is not the core focus. Simplufy is positioned around service businesses, trades, clinics, education, coaching, and B2B companies where the website needs to create trust, explain the offer, capture demand, and push the prospect toward a call, form, appointment, estimate, or consultation. Ecommerce and SaaS websites usually need a different strategy around carts, subscriptions, product-led onboarding, lifecycle messaging, and conversion events. Simplufy can understand those models, but the site and service stack are intentionally built around businesses that sell services.",
  },
  {
    question: "Can the website use GoHighLevel forms and booking calendars?",
    answer: "Yes. The site is structured for GoHighLevel forms, calendars, tracking, and booking flows. That means a visitor can move from a service page or industry page into a calendar, form, audit request, or consultation workflow without the site feeling disconnected from the CRM. GoHighLevel can also support speed-to-lead texts, missed-call workflows, pipeline stages, reminders, nurture campaigns, and reporting so leads do not just arrive in an inbox and get forgotten.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer: "SEO focuses on helping your pages rank in traditional Google search for service, industry, problem, and location-based keywords. AEO, or answer engine optimization, focuses on structuring content so your pages clearly answer the questions buyers ask before they contact a company. GEO, or generative engine optimization, is about improving how your brand, services, and content may be understood and referenced by AI search tools and generative answer experiences. For Simplufy, these are not separate silos. They all influence how clearly your website explains what you do, who you help, why you are credible, and what a buyer should do next.",
  },
  {
    question: "Can you build pages for specific services and industries?",
    answer: "Yes. The site is built to scale into a full SEO architecture, not just a homepage and a few basic service pages. That means we can create pages such as Google Ads for roofers, SEO for med spas, CRM automation for plumbing companies, AI implementation for B2B service firms, web design for auto detailers, or marketing for coaching and training programs. These pages help match the exact way people search and compare companies, while also giving paid traffic more relevant destinations than one generic page.",
  },
  {
    question: "Why do service businesses need more than a nice-looking website?",
    answer: "A nice-looking website helps, but it is only one piece of the growth system. Many businesses lose opportunities because their message is unclear, their offer is buried, their pages are too generic, their ads send traffic to the wrong place, their forms do not route correctly, their team follows up too slowly, or nobody can tell which leads turned into real opportunities. Simplufy plans the website as the front end of a larger system that includes search, paid traffic, CRM, automation, reporting, and sales follow-up.",
  },
  {
    question: "How do you decide what to fix first?",
    answer: "The first step is usually an audit of the current path from traffic to booked opportunity. That includes the website, service pages, page speed, search visibility, ad accounts, offer clarity, forms, calendars, CRM stages, follow-up timing, tracking, and reporting. The priority is based on where the biggest leak is. Sometimes the right first move is a better landing page. Sometimes it is a CRM pipeline. Sometimes it is tracking. Sometimes the ads are fine but the follow-up is too slow. The goal is to diagnose before prescribing a package.",
  },
  {
    question: "Do you offer paid advertising management?",
    answer: "Yes. Simplufy supports paid advertising across Google PPC, Meta Ads, Google Local Services Ads, and TikTok Ads when those channels fit the business model. The focus is on booked calls, estimates, appointments, consultations, enrollments, and qualified conversations rather than vanity metrics like cheap clicks or impressions. Paid campaigns work best when the landing page, offer, tracking, CRM, and follow-up system are aligned, so the work often includes more than just adjusting keywords or launching ads.",
  },
  {
    question: "Can you help with local SEO and map visibility?",
    answer: "Yes. For location-based companies like contractors, roofers, plumbers, landscapers, pest control companies, window companies, auto shops, med spas, and smart home installers, local SEO can be a major part of the strategy. The work can include service pages, location pages, internal linking, technical SEO, Google Business Profile direction, review strategy, FAQs, schema, and content that answers the questions buyers ask in a specific market. The goal is to create useful pages that support both map visibility and organic search demand.",
  },
  {
    question: "What kind of AI implementation does Simplufy provide?",
    answer: "Simplufy focuses on practical AI implementation, not hype. That can include AI-assisted intake, lead routing, reporting summaries, content workflows, research workflows, internal knowledge assistants, CRM task automation, proposal support, follow-up drafting, and agent orchestration for repetitive operations. The best AI systems still need clear human review points, clean data, good prompts, and sensible boundaries. The goal is to remove repetitive work and improve response speed without creating a fragile black box.",
  },
  {
    question: "What tech stack does Simplufy use for client websites?",
    answer: "Client websites are built for speed, SEO, and clean deployments. The Simplufy marketing site itself is a Next.js App Router application with Tailwind CSS, designed for modern hosting such as Railway. Client builds still prioritize fast static or edge-friendly delivery, GoHighLevel form and calendar embeds, strong on-page SEO, and a scalable page architecture for services, industries, case studies, and resources.",
  },
  {
    question: "How is the website optimized for on-page SEO?",
    answer: "The site is structured around descriptive titles, meta descriptions, semantic headings, service-specific pages, industry-specific pages, internal links, FAQ content, schema markup, sitemap generation, and crawlable static HTML. On-page SEO is not just about adding keywords. It is about matching search intent, writing pages that are genuinely useful, making the offer clear, improving internal navigation, answering buyer questions, and helping search engines understand the relationship between services, industries, resources, and proof.",
  },
  {
    question: "Can you add case studies, testimonials, videos, and project photos later?",
    answer: "Yes. The site is designed to keep getting stronger as more proof becomes available. Client logos, screenshots, photos, videos, testimonials, campaign examples, CRM views, and before-after results can be added throughout the homepage, case studies, service pages, and industry pages. This matters because service buyers often need evidence before they book a call, especially for higher-ticket offers.",
  },
  {
    question: "What makes Simplufy different from a typical marketing agency?",
    answer: "Simplufy is positioned around connected systems instead of isolated deliverables. A typical agency may focus only on websites, SEO, ads, or CRM. Simplufy looks at how those pieces work together: the page a buyer lands on, the offer they see, the proof they need, the form they submit, the CRM stage they enter, the follow-up they receive, and the reporting that shows what happened. That approach is especially useful for young, modern, growing companies that need marketing to produce real opportunities instead of more disconnected tools.",
  },
  {
    question: "How do we get started?",
    answer: "The simplest next step is to book a strategy call or request an audit. From there, we can review the current website, lead sources, CRM setup, follow-up process, rankings, ads, and goals. The first conversation should clarify what is working, where opportunities are leaking, which services or industries matter most, and what should be built first. After that, the work can be prioritized into a practical roadmap instead of trying to rebuild everything at once.",
  }
];
