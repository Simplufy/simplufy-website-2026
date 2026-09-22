/** Industry craft enrichments — without/with, theater, process, scenarios.
 * Merged into IndustryDetail in detail-content.ts (no circular imports).
 */

export type IndustryTheaterStep = {
  label: string;
  detail: string;
  status: "live" | "won";
};

export type IndustryCraft = {
  without: string[];
  withSystem: string[];
  theater: {
    label: string;
    steps: IndustryTheaterStep[];
    logLines: string[];
  };
  process: { index: string; title: string; summary: string }[];
  scenarios: { title: string; summary: string }[];
};

export const industryCraft: Record<string, IndustryCraft> = {

  "auto-detailing-shops": {
    without: [
      "Gallery buried below vague package blurbs",
      "Coating leads treated like wash requests",
      "Quote forms that dump into an unread inbox",
      "No maintenance reminder after the detail",
      "Ads that land on a homepage with no booking path",
    ],
    withSystem: [
      "Coating and correction pages with finish proof",
      "Package tiers matched to vehicle and ticket size",
      "Booking / quote CRM with speed-to-lead SMS",
      "Maintenance follow-up that rebooks past clients",
      "Paid demand aimed at booked details, not vanity traffic",
    ],
    theater: {
      label: "detailing · live path",
      steps: [
        {
          label: "Coating / detail search",
          detail: "Google · Meta gallery creative",
          status: "live" as const,
        },
        {
          label: "Package page + finish proof",
          detail: "Offer clarity · gallery · CTA",
          status: "live" as const,
        },
        {
          label: "GHL: New → Quoted",
          detail: "Vehicle size · package · owner",
          status: "live" as const,
        },
        {
          label: "Booked detail",
          detail: "Calendar + SMS confirm",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ New coating lead assigned",
        "SMS sent in 00:00:52",
        "Package: Ceramic · sedan",
        "Status: Booked detail",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Map coating vs maintenance demand, gallery proof, booking friction, and where quote requests stall.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Package pages, booking paths, Meta/Google capture, and CRM stages that match how your shop sells.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Tighten creative, CPL, show rate, and maintenance rebook sequences from real pipeline data.",
      },
    ],
    scenarios: [
      {
        title: "Ceramic coating demand",
        summary:
          "Search and Meta traffic lands on coating pages with gallery proof and a clear booking CTA.",
      },
      {
        title: "High-ticket quote follow-up",
        summary:
          "Quote requests enter GHL with vehicle context so the shop answers before the lead cools.",
      },
      {
        title: "Maintenance rebooks",
        summary:
          "Past detail clients get timed reminders instead of hoping they remember next season.",
      },
    ],
  },
  "auto-styling-shops": {
    without: [
      "Generic auto-shop pages that do not sell film work",
      "Wrap and PPF leads mixed with oil-change inquiries",
      "Slow consult follow-up on premium tickets",
      "Weak before/after proof above the fold",
      "Retargeting that has nowhere clean to send people",
    ],
    withSystem: [
      "Tint, wrap, and PPF pages with install craft proof",
      "Consult calendars matched to service type",
      "Estimate pipeline with fast owner follow-up",
      "Meta retargeting into offer-specific landing pages",
      "CRM stages that protect high-ticket consults",
    ],
    theater: {
      label: "styling · live path",
      steps: [
        {
          label: "Wrap / tint / PPF search",
          detail: "Meta creative · Google Search",
          status: "live" as const,
        },
        {
          label: "Finish proof page",
          detail: "Coverage · craft · consult CTA",
          status: "live" as const,
        },
        {
          label: "GHL: Consult requested",
          detail: "Service type · vehicle notes",
          status: "live" as const,
        },
        {
          label: "Booked consult",
          detail: "Calendar + reminder SMS",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ New wrap consult assigned",
        "SMS sent in 00:01:08",
        "Service: Full PPF · SUV",
        "Status: Consult booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Review which install offers convert, where proof is weak, and how consult requests are handled today.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Visual service pages, consult calendars, paid capture, and estimate stages sales will actually use.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Iterate creative, quote speed, and close rates on wrap, tint, and PPF demand.",
      },
    ],
    scenarios: [
      {
        title: "Premium film demand",
        summary:
          "Homeowners and enthusiasts land on wrap or PPF pages that justify a consult, not a vague shop homepage.",
      },
      {
        title: "Consult protection",
        summary:
          "Estimate requests route by service type with reminders before the lead shops three other shops.",
      },
      {
        title: "Retargeting with purpose",
        summary:
          "Meta retargeting sends warm visitors back to the exact finish they viewed.",
      },
    ],
  },
  "roofing-companies": {
    without: [
      "Storm leads dying in voicemail",
      "One generic roofing page for every intent",
      "Ads that cannot name an inspected roof",
      "No insurance-guided path for damage searches",
      "Estimate tracking that lives in a spreadsheet",
    ],
    withSystem: [
      "Storm, repair, and replacement pages with inspection CTAs",
      "PPC + LSA aimed at booked inspections",
      "Missed-call text-back during storm season",
      "CRM stages: New → Inspected → Estimated → Sold",
      "Reporting tied to inspections and estimates, not clicks",
    ],
    theater: {
      label: "roofing · live path",
      steps: [
        {
          label: "Storm / repair search",
          detail: "Google Search · LSA",
          status: "live" as const,
        },
        {
          label: "Inspection landing page",
          detail: "Proof · insurance guidance · CTA",
          status: "live" as const,
        },
        {
          label: "GHL: Inspection requested",
          detail: "Address · damage notes · owner",
          status: "live" as const,
        },
        {
          label: "Booked inspection",
          detail: "Calendar + SMS confirm",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Storm lead assigned",
        "Missed-call SMS queued",
        "CTA: Book roof inspection",
        "Status: Inspection booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Map storm vs repair vs replacement intent, call handling, LSA readiness, and where inspections stall.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Inspection pages, paid + LSA capture, missed-call recovery, and estimate pipeline stages.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Tighten query control, show rates, and follow-up until more searches become inspected roofs.",
      },
    ],
    scenarios: [
      {
        title: "Storm-season surge",
        summary:
          "High-intent searches hit inspection pages with call and book paths — and missed calls get an immediate text-back.",
      },
      {
        title: "Repair vs replacement clarity",
        summary:
          "Separate pages match homeowner concern so ads do not dump into a vague homepage.",
      },
      {
        title: "Estimate visibility",
        summary:
          "Every inspection request has an owner, stage, and next step in CRM — not a lost spreadsheet row.",
      },
    ],
  },
  "plumbing-companies": {
    without: [
      "Emergency searches land on a slow homepage",
      "Drain, heater, and leak offers buried in one page",
      "Missed calls with no text-back",
      "No membership path after the emergency job",
      "Ads measured on clicks, not dispatched jobs",
    ],
    withSystem: [
      "Service pages matched to the urgent search",
      "Click-to-call and book CTAs above the fold",
      "Speed-to-lead SMS and missed-call recovery",
      "Membership nurture after the repair",
      "Tracking that ties queries to booked jobs",
    ],
    theater: {
      label: "plumbing · live path",
      steps: [
        {
          label: "Urgent plumbing search",
          detail: "Google Search · LSA",
          status: "live" as const,
        },
        {
          label: "Emergency service page",
          detail: "Clear offer · call · book",
          status: "live" as const,
        },
        {
          label: "GHL: New → Dispatched",
          detail: "Job type · ZIP · urgency",
          status: "live" as const,
        },
        {
          label: "Booked / on the way",
          detail: "Confirm SMS + tech handoff",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Emergency lead assigned",
        "SMS sent in 00:00:38",
        "Job: Water heater · same-day",
        "Status: Dispatched",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Find leaks in emergency pages, call handling, LSA eligibility, and post-job membership follow-up.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Offer-matched pages, paid + LSA, speed-to-lead CRM, and membership nurture paths.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Optimize for answered calls, booked jobs, and recurring plan conversion from first-time repairs.",
      },
    ],
    scenarios: [
      {
        title: "Emergency win rate",
        summary:
          "Urgent searches reach a page with an immediate call path — and missed calls get SMS recovery.",
      },
      {
        title: "Install demand",
        summary:
          "Water heater and fixture pages capture planned installs separately from emergency repair traffic.",
      },
      {
        title: "Membership growth",
        summary:
          "After the job, CRM nurture invites homeowners into recurring maintenance instead of one-and-done.",
      },
    ],
  },
  "pest-control-companies": {
    without: [
      "Crowded legacy navigation that hides the plan CTA",
      "Weak licensing and review proof above the fold",
      "Seasonal demand without campaign structure",
      "Inspection requests lost after the first call",
      "No recurring nurture after the initial treatment",
    ],
    withSystem: [
      "Clean lead-capture hierarchy and plan CTAs",
      "Local trust signals and review growth loops",
      "Seasonal paid + SEO for termite, mosquito, rodent",
      "Call tracking into CRM stages that stick",
      "Recurring plan nurture after inspection",
    ],
    theater: {
      label: "pest control · live path",
      steps: [
        {
          label: "Pest concern search",
          detail: "Local SEO · Google Ads · LSA",
          status: "live" as const,
        },
        {
          label: "Inspection / plan page",
          detail: "Trust · reviews · CTA",
          status: "live" as const,
        },
        {
          label: "GHL: New → Scheduled",
          detail: "Pest type · property · owner",
          status: "live" as const,
        },
        {
          label: "Booked inspection",
          detail: "Confirm SMS + tech notes",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Inspection request assigned",
        "SMS sent in 00:00:55",
        "Concern: Termite · residential",
        "Status: Inspection booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Review site hierarchy, review profile, seasonal campaigns, and how inspection leads are tracked.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Modern capture pages, local SEO/paid, call tracking, and recurring-plan CRM flows.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Grow reviews, seasonal ROAS, and conversion from one-time treatments into plans.",
      },
    ],
    scenarios: [
      {
        title: "Inspection conversion",
        summary:
          "Homeowners see licensing, reviews, and a clear inspection CTA without fighting legacy navigation.",
      },
      {
        title: "Seasonal campaigns",
        summary:
          "Mosquito and termite demand get timed pages and ads instead of year-round generic spend.",
      },
      {
        title: "Recurring revenue",
        summary:
          "CRM nurture turns first treatments into protection plans with reminders that actually go out.",
      },
    ],
  },
  "landscaping-companies": {
    without: [
      "Spring rush traffic into untracked voicemails",
      "Design and lawn care mixed on one vague page",
      "No estimate pipeline after the form submit",
      "Galleries that do not connect to a consult CTA",
      "Maintenance plans never offered after the project",
    ],
    withSystem: [
      "Offer-specific pages for lawn, design, hardscape",
      "Seasonal ads aimed at estimate requests",
      "CRM stages for estimates and follow-up",
      "Project galleries tied to booking paths",
      "Maintenance-plan nurture after install",
    ],
    theater: {
      label: "landscaping · live path",
      steps: [
        {
          label: "Seasonal / project search",
          detail: "Google · Meta project creative",
          status: "live" as const,
        },
        {
          label: "Offer + gallery page",
          detail: "Proof · scope · estimate CTA",
          status: "live" as const,
        },
        {
          label: "GHL: Estimate requested",
          detail: "Project type · property size",
          status: "live" as const,
        },
        {
          label: "Booked estimate",
          detail: "Calendar + reminder SMS",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Estimate request assigned",
        "SMS sent in 00:01:12",
        "Project: Hardscape · backyard",
        "Status: Estimate booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Separate seasonal vs project demand, gallery usefulness, and where estimates stall after first contact.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Offer pages, seasonal paid, estimate CRM, and maintenance nurture after projects close.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Tune spring/fall campaigns and follow-up until more estimates become booked work.",
      },
    ],
    scenarios: [
      {
        title: "Spring rush control",
        summary:
          "Seasonal search hits lawn-care and maintenance pages with tracked estimate and call paths.",
      },
      {
        title: "High-ticket design",
        summary:
          "Hardscape and design pages carry gallery proof and a consult calendar, not a generic contact form.",
      },
      {
        title: "Maintenance retention",
        summary:
          "After the project, CRM offers recurring maintenance so one job becomes ongoing revenue.",
      },
    ],
  },
  "window-companies": {
    without: [
      "Thin pages that skip financing and energy proof",
      "Quote forms with days of silence",
      "Ads dumping into a generic company homepage",
      "No before/after install credibility",
      "Sales follow-up that loses financed deals",
    ],
    withSystem: [
      "Replacement and install pages with financed CTAs",
      "Quote funnels matched to ticket size",
      "Paid media into offer-specific landers",
      "Install proof above the fold",
      "Estimate pipeline stages sales will use",
    ],
    theater: {
      label: "windows · live path",
      steps: [
        {
          label: "Replacement / install search",
          detail: "Google · Meta",
          status: "live" as const,
        },
        {
          label: "Financed offer page",
          detail: "Energy proof · install craft · CTA",
          status: "live" as const,
        },
        {
          label: "GHL: Quote requested",
          detail: "Home size · window count · ZIP",
          status: "live" as const,
        },
        {
          label: "Booked estimate",
          detail: "Calendar + financing notes",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Quote request assigned",
        "SMS sent in 00:00:49",
        "Offer: Full home replacement",
        "Status: Estimate booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Review quote funnel friction, financing messaging, install proof, and follow-up speed.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Offer pages, paid landers, quote CRM, and estimate stages tied to sales workflow.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Improve quote speed, show rates, and close rates on replacement and install demand.",
      },
    ],
    scenarios: [
      {
        title: "Quote-ready traffic",
        summary:
          "Homeowners researching energy savings land on pages with financing clarity and a next step.",
      },
      {
        title: "Paid that books estimates",
        summary:
          "Google and Meta send traffic to replacement landers — not a brochure homepage.",
      },
      {
        title: "Sales follow-through",
        summary:
          "Every quote request has an owner and stage so financed deals do not go cold.",
      },
    ],
  },
  "smart-home-installers": {
    without: [
      "Complex installs explained in jargon paragraphs",
      "Anonymous form dumps with no scope context",
      "No consult calendar for design conversations",
      "Weak package differentiation across security/AV",
      "Follow-up that treats every lead the same",
    ],
    withSystem: [
      "Package pages that make integrations clear",
      "Consult calendars for design conversations",
      "CRM capture of scope notes by install type",
      "SEO and paid aimed at consult demand",
      "Proposal follow-up after the first meeting",
    ],
    theater: {
      label: "smart home · live path",
      steps: [
        {
          label: "Security / AV / automation search",
          detail: "SEO · Google Ads",
          status: "live" as const,
        },
        {
          label: "Package education page",
          detail: "Integrations · proof · consult CTA",
          status: "live" as const,
        },
        {
          label: "GHL: Consult booked",
          detail: "Install type · scope notes",
          status: "live" as const,
        },
        {
          label: "Proposal follow-up",
          detail: "Reminder + owner assigned",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Design consult assigned",
        "SMS sent in 00:01:05",
        "Scope: Security + networking",
        "Status: Consult booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Clarify which packages sell, how consults are booked, and where scope context is lost.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Education pages, consult calendars, SEO/paid capture, and CRM handoff with install notes.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Tighten consult show rates and proposal follow-up from real pipeline data.",
      },
    ],
    scenarios: [
      {
        title: "Complex offer clarity",
        summary:
          "Security, AV, and automation packages are explained in plain language before the consult.",
      },
      {
        title: "Scoped CRM handoff",
        summary:
          "Form and calendar intake captures install type so sales does not start from zero.",
      },
      {
        title: "Consult-to-proposal",
        summary:
          "After the meeting, reminders and stages keep proposals moving instead of stalling.",
      },
    ],
  },
  "contractors": {
    without: [
      "One generic contractor site for every trade search",
      "HVAC emergency and remodel leads in the same inbox",
      "LSA and PPC without matching landing pages",
      "Missed calls during peak job hours",
      "No feedback loop from booked jobs to ad spend",
    ],
    withSystem: [
      "Trade × offer × market page architecture",
      "Separate paths for emergency vs estimate demand",
      "LSA + PPC into matched landers",
      "Speed-to-lead and missed-call recovery",
      "Reporting that ties channels to booked jobs",
    ],
    theater: {
      label: "trades · live path",
      steps: [
        {
          label: "Trade-specific search",
          detail: "Google · LSA · Meta",
          status: "live" as const,
        },
        {
          label: "Offer × location page",
          detail: "Proof · CTA matched to trade",
          status: "live" as const,
        },
        {
          label: "GHL: New → Qualified",
          detail: "Trade · job type · ZIP",
          status: "live" as const,
        },
        {
          label: "Booked estimate / dispatch",
          detail: "Calendar or call handoff",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Trade lead assigned",
        "Missed-call SMS queued",
        "Trade: HVAC · emergency",
        "Status: Booked / dispatched",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Map trade-specific demand, page gaps, call handling, and which channels currently become jobs.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Trade page architecture, paid/LSA capture, CRM routing, and job tracking.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Reallocate spend toward channels and offers that produce booked work.",
      },
    ],
    scenarios: [
      {
        title: "Trade-specific capture",
        summary:
          "HVAC, remodel, and specialty searches each get a page and CTA that match the buyer’s intent.",
      },
      {
        title: "Speed wins the job",
        summary:
          "Missed-call recovery and routing keep emergency and estimate leads from going to competitors.",
      },
      {
        title: "Spend tied to jobs",
        summary:
          "Reporting shows which campaigns become booked estimates — not just form fills.",
      },
    ],
  },
  "med-spas": {
    without: [
      "Generic clinic homepage for every treatment search",
      "Consult CTAs buried below brochure copy",
      "Meta creative with nowhere premium to land",
      "No-shows from weak reminder sequences",
      "Nurture that never reopens unfinished consults",
    ],
    withSystem: [
      "Treatment-specific education pages",
      "Consult booking above the fold",
      "Meta + Google into matched treatment landers",
      "Calendar reminders that protect show rate",
      "CRM nurture for unfinished conversations",
    ],
    theater: {
      label: "med spa · live path",
      steps: [
        {
          label: "Treatment research",
          detail: "Meta · Google · SEO",
          status: "live" as const,
        },
        {
          label: "Treatment page + proof",
          detail: "Education · trust · consult CTA",
          status: "live" as const,
        },
        {
          label: "GHL: Consult requested",
          detail: "Treatment · provider preference",
          status: "live" as const,
        },
        {
          label: "Booked consult",
          detail: "Calendar + T-24h / T-2h SMS",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Consult lead assigned",
        "SMS sent in 00:00:44",
        "Treatment: Injectables consult",
        "Status: Consult booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Review treatment page coverage, booking friction, ad landing quality, and show-rate gaps.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Treatment pages, paid capture, consult calendars, and nurture sequences.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Optimize creative, CPL, and show rates toward booked consultations.",
      },
    ],
    scenarios: [
      {
        title: "Treatment-intent traffic",
        summary:
          "Injectables, laser, and body offers each get education pages that drive a consult CTA.",
      },
      {
        title: "Premium paid path",
        summary:
          "Meta and Google land on treatment pages that match the creative — not a generic clinic home.",
      },
      {
        title: "Show-rate protection",
        summary:
          "Reminders and nurture keep consults on the books and reopen unfinished leads.",
      },
    ],
  },
  "b2b-services": {
    without: [
      "Brochure sites that bury the real next step",
      "Vague positioning that cannot win a qualified call",
      "Form fills that stall with no pipeline owner",
      "Content that never connects to a conversation",
      "Paid traffic measured on clicks, not meetings",
    ],
    withSystem: [
      "Positioning pages that state who you help and why",
      "Authority content aimed at qualified conversations",
      "Pipeline CRM with source and stage visibility",
      "SEO/AEO/GEO + paid tied to booked calls",
      "Follow-up that keeps opportunities moving",
    ],
    theater: {
      label: "b2b · live path",
      steps: [
        {
          label: "Problem / category search",
          detail: "SEO · Google Ads · LinkedIn-style intent",
          status: "live" as const,
        },
        {
          label: "Authority + offer page",
          detail: "Proof · clarity · call CTA",
          status: "live" as const,
        },
        {
          label: "GHL: New → Qualified",
          detail: "Fit notes · source · owner",
          status: "live" as const,
        },
        {
          label: "Booked conversation",
          detail: "Calendar + prep brief",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ New opportunity assigned",
        "SMS / email sent in minutes",
        "CTA: Book strategy call",
        "Status: Meeting booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Pressure-test positioning, conversion paths, content-to-call gaps, and CRM follow-up.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Conversion pages, authority content, paid/organic capture, and pipeline CRM.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Improve qualified conversation rate and pipeline velocity from real stage data.",
      },
    ],
    scenarios: [
      {
        title: "Positioning that converts",
        summary:
          "Pages state who you help, what changes, and the next conversation — with proof that matches ticket size.",
      },
      {
        title: "Content to calendar",
        summary:
          "Search content and campaigns aim at booked calls, not vanity traffic.",
      },
      {
        title: "Pipeline visibility",
        summary:
          "Every form fill has a source, owner, and stage so opportunities do not disappear.",
      },
    ],
  },
  "education-training": {
    without: [
      "Weak outcome pages that leave fit unclear",
      "Application forms with slow or no nurture",
      "Ad creative disconnected from enrollment offers",
      "Consult calendars that are hard to find",
      "No attribution from spend to enrollments",
    ],
    withSystem: [
      "Program and coaching pages with clear outcomes",
      "Application / consult CRM with nurture",
      "Meta + Google measured on enrollments and calls",
      "Calendars and reminders that protect show rate",
      "Attribution that names what actually enrolled",
    ],
    theater: {
      label: "education · live path",
      steps: [
        {
          label: "Outcome / program research",
          detail: "Meta · Google · organic",
          status: "live" as const,
        },
        {
          label: "Offer / enrollment page",
          detail: "Outcomes · fit · CTA",
          status: "live" as const,
        },
        {
          label: "GHL: Applied → Nurture",
          detail: "Program · fit notes · owner",
          status: "live" as const,
        },
        {
          label: "Booked consult / enrolled",
          detail: "Calendar or enrollment confirm",
          status: "won" as const,
        },
      ],
      logLines: [
        "→ Application received",
        "Nurture sequence started",
        "CTA: Book enrollment call",
        "Status: Consult booked",
      ],
    },
    process: [
      {
        index: "01",
        title: "Audit",
        summary:
          "Map offer clarity, application friction, nurture gaps, and attribution from ad to enrollment.",
      },
      {
        index: "02",
        title: "Build",
        summary:
          "Enrollment pages, paid capture, application CRM, and consult calendars.",
      },
      {
        index: "03",
        title: "Improve",
        summary:
          "Optimize toward enrollments and qualified conversations — the Momentum Coaching pattern.",
      },
    ],
    scenarios: [
      {
        title: "Enrollment clarity",
        summary:
          "Program and coaching pages explain outcomes and fit before asking for an application.",
      },
      {
        title: "Nurture that enrolls",
        summary:
          "CRM sequences keep applicants moving toward a consult or enrollment decision.",
      },
      {
        title: "Attributed paid",
        summary:
          "Meta and Google measured on enrollments and qualified calls — as with Momentum Coaching’s published 27.6x ROAS.",
      },
    ],
  },
};
