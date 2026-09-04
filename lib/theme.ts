// Central place that defines each page's accent color. The base navy shell
// (navbar, footer, dark sections) never changes — only this accent shifts,
// which is what animates smoothly when navigating between pages.
export type PageTheme = {
  accent: string
  accentSoft: string
  label: string
}

export const THEMES: Record<string, PageTheme> = {
  '/': { accent: '#c9a227', accentSoft: 'rgba(201,162,39,0.14)', label: 'Home' },
  '/skills': { accent: '#2a9d8f', accentSoft: 'rgba(42,157,143,0.14)', label: 'Skills' },
  '/experience': { accent: '#3b6fd6', accentSoft: 'rgba(59,111,214,0.14)', label: 'Experience' },
  '/clients': { accent: '#c0392b', accentSoft: 'rgba(192,57,43,0.14)', label: 'Clients' },
  '/research': { accent: '#7c5cd6', accentSoft: 'rgba(124,92,214,0.14)', label: 'Research' },
  '/books': { accent: '#b8763e', accentSoft: 'rgba(184,118,62,0.14)', label: 'Books' },
  '/contact': { accent: '#1f9d6b', accentSoft: 'rgba(31,157,107,0.14)', label: 'Contact' },
}

export const DEFAULT_THEME = THEMES['/']

export function themeForPath(pathname: string): PageTheme {
  if (THEMES[pathname]) return THEMES[pathname]
  // match nested routes, e.g. /skills/whatever -> /skills
  const seg = '/' + (pathname.split('/')[1] || '')
  return THEMES[seg] ?? DEFAULT_THEME
}
