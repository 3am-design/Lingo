// Where the built site lives. hreflang wants fully-qualified URLs, and a
// relative href in a <link> gets rewritten into a hashed asset copy by Vite.
export const SITE = 'https://3am-design.github.io/Lingo'

// Adding a language is: write build/locales/<code>.mjs, then add it here.
// `dir` is the output folder — the default locale sits at the root so its URLs
// stay unprefixed, which is the structure the product itself argues for.
//
// `enabled: false` keeps a language visible in the switcher but inert, so the
// menu can show where the site is going without linking to pages that do not
// exist yet.
export const LOCALES = [
  { code: 'en', dir: '', label: 'EN', name: 'English', enabled: true },
  { code: 'fr', dir: 'fr', label: 'FR', name: 'Français', enabled: true },
  { code: 'de', dir: 'de', label: 'DE', name: 'Deutsch', enabled: true },
  { code: 'es', dir: 'es', label: 'ES', name: 'Español', enabled: true },
  { code: 'ja', dir: 'ja', label: 'JA', name: '日本語', enabled: true },
  { code: 'ko', dir: 'ko', label: 'KO', name: '한국어', enabled: true }
]

export const DEFAULT_LOCALE = 'en'

export const PAGES = [
  { id: 'home', file: 'index.html' },
  { id: 'faq', file: 'faq.html' }
]

// Path helpers. Everything a template emits is relative to the page's own
// folder, so a locale one level down reaches shared files with '../'.
export const localeRoot = (locale) => (locale.dir ? '../' : './')
// Sibling pages always live next to each other, whatever the locale.
export const pageHref = (file) => `./${file}`
export const otherLocaleHref = (from, to, file) =>
  to.dir === from.dir ? `./${file}` : `${localeRoot(from)}${to.dir ? `${to.dir}/` : ''}${file}`
export const absoluteHref = (locale, file) => `${SITE}/${locale.dir ? `${locale.dir}/` : ''}${file}`
