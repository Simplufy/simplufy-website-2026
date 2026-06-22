// Centralized art-direction notes for placeholder image slots.
// Each value describes the shot to add. When a real image is dropped in
// (PhotoFrame `src`), the placeholder is replaced automatically.
// Direction for ALL photos: warm, natural, real, never glossy stock.

export const industryPhotos: Record<string, string> = {
  'auto-detailing-shops': 'Ceramic-coated hood with a deep, clean reflection',
  'auto-styling-shops': 'Fresh wrap, tint, or PPF install on a performance car',
  'roofing-companies': 'Crew on a finished roof, drone or ground angle',
  'plumbing-companies': 'Technician on a real service call, tools in hand',
  'pest-control-companies': 'Tech treating a home exterior',
  'landscaping-companies': 'Finished landscape or hardscape project',
  'window-companies': 'Clean window replacement or install in progress',
  'smart-home-installers': 'Installed smart-home panel or AV setup',
  'contractors': 'Trade crew on an active job site',
  'med-spas': 'Calm, premium treatment room',
  'b2b-services': 'Real team working session, not a stock handshake',
  'education-training': 'Engaged cohort or classroom moment',
};

export const servicePhotos: Record<string, string> = {
  'web-development': 'Designer reviewing the live site build on screen',
  'crm-solutions': 'CRM pipeline on a monitor during a setup session',
  'google-ppc-management': 'Campaign dashboard review with a client',
  'meta-advertising': 'Creative review or content shoot moment',
  'google-local-service-ads': 'Local service call being booked',
  'tiktok-ad-management': 'Short-form content being filmed',
  'seo-aeo-geo': 'Search and analytics review on screen',
  'ai-implementation-agent-orchestration': 'Team reviewing an AI workflow together',
};

export const photoSlots = {
  founder: 'Founder / team, candid, working (St. Petersburg)',
  ctaBand: 'Workspace or a standout client result, full-bleed, atmospheric',
  contact: 'Office or team in St. Petersburg, FL',
  caseOnsite: 'On-site / real client work photo',
};

// Real industry photography (drop-in replaces the placeholder slots).
export const industryImages: Record<string, string> = {
  'auto-detailing-shops': '/assets/industries/auto-detailing-shops.webp',
  'auto-styling-shops': '/assets/industries/auto-styling-shops.webp',
  'roofing-companies': '/assets/industries/roofing-companies.webp',
  'plumbing-companies': '/assets/industries/plumbing-companies.webp',
  'pest-control-companies': '/assets/industries/pest-control-companies.webp',
  'landscaping-companies': '/assets/industries/landscaping-companies.webp',
  'window-companies': '/assets/industries/window-companies.webp',
  'smart-home-installers': '/assets/industries/smart-home-installers.webp',
  'contractors': '/assets/industries/contractors.webp',
  'med-spas': '/assets/industries/med-spas.webp',
  'b2b-services': '/assets/industries/b2b-services.webp',
  'education-training': '/assets/industries/education-training.webp',
};

// Real "behind the build" photography per service page.
export const serviceImages: Record<string, string> = {
  'web-development': '/assets/services/web-development.webp',
  'crm-solutions': '/assets/services/crm-solutions.webp',
  'google-ppc-management': '/assets/services/google-ppc-management.webp',
  'meta-advertising': '/assets/services/meta-advertising.webp',
  'google-local-service-ads': '/assets/services/google-local-service-ads.webp',
  'tiktok-ad-management': '/assets/services/tiktok-ad-management.webp',
  'seo-aeo-geo': '/assets/services/seo-aeo-geo.webp',
  'ai-implementation-agent-orchestration': '/assets/services/ai-implementation-agent-orchestration.webp',
};

// Office photography.
export const ctaImage = '/assets/office/cta-office.webp';       // homepage full-bleed CTA band
export const contactImage = '/assets/office/contact-team.webp'; // contact page
