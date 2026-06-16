// Centralized art-direction notes for placeholder image slots.
// Each value describes the shot to add. When a real image is dropped in
// (PhotoFrame `src`), the placeholder is replaced automatically.
// Direction for ALL photos: warm, natural, real — never glossy stock.

export const industryPhotos: Record<string, string> = {
  'auto-detailing-shops': 'Ceramic-coated hood with a deep, clean reflection',
  'auto-styling-shops': 'Fresh wrap, tint, or PPF install on a performance car',
  'roofing-companies': 'Crew on a finished roof — drone or ground angle',
  'plumbing-companies': 'Technician on a real service call, tools in hand',
  'pest-control-companies': 'Tech treating a home exterior',
  'landscaping-companies': 'Finished landscape or hardscape project',
  'window-companies': 'Clean window replacement or install in progress',
  'smart-home-installers': 'Installed smart-home panel or AV setup',
  'contractors': 'Trade crew on an active job site',
  'med-spas': 'Calm, premium treatment room',
  'b2b-services': 'Real team working session — not a stock handshake',
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
  founder: 'Founder / team — candid, working (St. Petersburg)',
  ctaBand: 'Workspace or a standout client result — full-bleed, atmospheric',
  contact: 'Office or team in St. Petersburg, FL',
  caseOnsite: 'On-site / real client work photo',
};
