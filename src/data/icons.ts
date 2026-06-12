// Inline line-icon set (24x24, stroke=currentColor, no fill). Feather/Lucide-style geometry.
// Values are the inner SVG markup; Icon.astro provides the <svg> wrapper.
export const icons: Record<string, string> = {
  web: '<rect x="3" y="4" width="18" height="13" rx="1.5"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  crm: '<rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="14" width="6" height="6" rx="1"/><path d="M9 7h4a3 3 0 0 1 3 3v4"/>',
  ppc: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
  meta: '<path d="M21 11.5a8 8 0 0 1-11.5 7.2L4 21l1.3-4.5A8 8 0 1 1 21 11.5Z"/>',
  lsa: '<path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  tiktok: '<circle cx="12" cy="12" r="9"/><path d="M10 9l5 3-5 3z"/>',
  seo: '<circle cx="11" cy="11" r="7"/><line x1="16" y1="16" x2="21" y2="21"/>',
  ai: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  auto: '<path d="M4 17h16v-4l-2-5H6L4 13z"/><circle cx="8" cy="18" r="1.5"/><circle cx="16" cy="18" r="1.5"/>',
  roofing: '<path d="M4 11l8-6 8 6"/><path d="M6 10v8h12v-8"/>',
  contractor: '<path d="M3 18h18"/><path d="M5 18v-3a7 7 0 0 1 14 0v3"/><path d="M10 8V5h4v3"/>',
  plumbing: '<path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10Z"/>',
  pest: '<rect x="8" y="8" width="8" height="11" rx="4"/><line x1="12" y1="8" x2="12" y2="5"/><path d="M8 11H4M8 15H4M16 11h4M16 15h4M9 7 7 5M15 7l2-2"/>',
  landscape: '<path d="M5 19c10 0 14-6 14-14C9 5 5 9 5 19Z"/><line x1="5" y1="19" x2="12" y2="12"/>',
  windows: '<rect x="4" y="4" width="16" height="16" rx="1"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/>',
  'smart-home': '<path d="M5 12a10 10 0 0 1 14 0"/><path d="M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/>',
  medspa: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
  b2b: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="13" x2="21" y2="13"/>',
  education: '<path d="M3 9l9-4 9 4-9 4-9-4Z"/><path d="M7 11v4c0 1 2.5 2.5 5 2.5s5-1.5 5-2.5v-4"/>',
  default: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
};
