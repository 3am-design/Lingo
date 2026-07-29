// The parts every page shares: <head>, both headers, the notice bar and the
// footer. Kept in one place so a structural change lands in every language at
// once — the whole reason the pages are generated rather than hand-copied.

import { LOCALES, absoluteHref, localeRoot, otherLocaleHref, pageHref } from '../config.mjs'

// Identity tag: no escaping, no logic — it exists so editors syntax-highlight
// the template literals as HTML.
export const html = (strings, ...values) => String.raw({ raw: strings }, ...values)

// Both heroes break their headline into fixed lines. A full-width CJK stop
// carries its glyph in the left half of a 1em box, so a centred line ending in
// 。or 、 reads about a quarter-em left of true centre against the eyebrow and
// the paragraph under it. Flagging those lines lets CSS give the half-em back
// without touching locales whose punctuation is proportional.
const HANGING_PUNCTUATION = /[。、，．！？：；]$/

export const heroLines = (lines) => lines
  .map((line) => `<span class="hero-line${HANGING_PUNCTUATION.test(line) ? ' punct-end' : ''}"><span>${line}</span></span>`)
  .join('')

export const head = ({ locale, page, t, assets }) => html`
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${t.meta[page.id].description}" />
    <title>${t.meta[page.id].title}</title>
${alternates(page)}
    <script>
      document.documentElement.classList.add('motion-booting')
      window.setTimeout(() => document.documentElement.classList.remove('motion-booting'), 2500)
    </script>
    <link rel="stylesheet" href="${assets}src/style.css" />
    <script type="module" src="${assets}src/${page.id === 'faq' ? 'faq' : 'main'}.js"></script>`

// Only shipped locales get an alternate — pointing search engines at a page
// that does not exist yet is worse than saying nothing.
const alternates = (page) => {
  const live = LOCALES.filter((l) => l.enabled)
  const rows = live.map((l) => `    <link rel="alternate" hreflang="${l.code}" href="${absoluteHref(l, page.file)}" />`)
  const fallback = live.find((l) => !l.dir) ?? live[0]
  rows.push(`    <link rel="alternate" hreflang="x-default" href="${absoluteHref(fallback, page.file)}" />`)
  return rows.join('\n')
}

// One switcher, two instances per page. Live locales are real links so they
// work without JS and can be crawled; the rest stay buttons and are dimmed
// rather than pretending to lead somewhere.
const langMenu = ({ locale, page, t, slot }) => {
  const id = `lang-menu-${page.id}-${slot}`
  const toggle = `lang-toggle-${page.id}-${slot}`
  const rows = LOCALES.map((l) => {
    const label = `aria-label="${l.name}"`
    if (!l.enabled) {
      return `<li role="none"><button role="menuitem" type="button" lang="${l.code}" ${label} aria-disabled="true">${l.label}</button></li>`
    }
    const current = l.code === locale.code ? ' aria-current="true"' : ''
    const href = otherLocaleHref(locale, l, page.file)
    return `<li role="none"><a role="menuitem" href="${href}" hreflang="${l.code}" lang="${l.code}" ${label}${current}>${l.label}</a></li>`
  })
  return html`<div class="lang">
          <button class="lang-switch" type="button" id="${toggle}" aria-label="${t.nav.language}" aria-haspopup="true" aria-expanded="false" aria-controls="${id}"><img src="${localeRoot(locale)}assets/figma/icon-globe.svg" alt="" /></button>
          <ul class="lang-menu" id="${id}" role="menu" aria-labelledby="${toggle}">
${rows.map((r) => `          ${r}`).join('\n')}
          </ul>
        </div>`
}

// The FAQ page marks its own nav item and links home; the home page uses
// in-page anchors. `home` carries that difference so both headers stay
// identical otherwise.
const navLinks = ({ page, t, home }) => {
  const faqCurrent = page.id === 'faq' ? ' aria-current="page"' : ''
  return html`<a href="${home}#features">${t.nav.features}</a>
        <a href="${home}#comparison">${t.nav.compare}</a>
        <a href="${home}#pricing">${t.nav.pricing}</a>
        <a href="${pageHref('faq.html')}"${faqCurrent}>${t.nav.faq}</a>`
}

export const headers = ({ locale, page, t, assets }) => {
  // On the home page the header links stay on the page; on the FAQ page they
  // have to travel back to it.
  const home = page.id === 'faq' ? pageHref('index.html') : ''
  const brandHref = page.id === 'faq' ? pageHref('index.html') : '#top'
  // On the FAQ page the top header floats over the dark hero, so it needs the
  // light wordmark; the sticky bar there sits over white content and does not.
  const topLogo = page.id === 'faq' ? 'logo-light.svg' : 'logo.svg'
  return html`    <header class="site-header">
      <a class="brand" href="${brandHref}" aria-label="${t.nav.home}">
        <img src="${assets}assets/figma/${topLogo}" alt="Lingo" />
      </a>
      <nav aria-label="${t.nav.primary}">
        ${navLinks({ page, t, home })}
        ${langMenu({ locale, page, t, slot: 'top' })}
      </nav>
      <a class="start-free" href="${home}#pricing">${t.nav.startFree}</a>
    </header>
    <header class="sticky-header" aria-label="${t.nav.sticky}">
      <a class="sticky-brand" href="${brandHref}" aria-label="${t.nav.home}"><img src="${assets}assets/figma/logo.svg" alt="Lingo" /></a>
      <nav aria-label="${t.nav.primary}">
        ${navLinks({ page, t, home })}
        ${langMenu({ locale, page, t, slot: 'sticky' })}
      </nav>
      <a class="sticky-start" href="${home}#pricing">${t.nav.startFree}</a>
    </header>`
}

export const noticeBar = ({ t, assets, extraClass = '', href, label }) => html`<div class="notice-bar${extraClass ? ` ${extraClass}` : ''}">
          <p>${t.notice.free} <span class="notice-sep">|</span> <span class="notice-more">${t.notice.promo}</span></p>
          <a href="${href}">${label} <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>
        </div>`

export const footer = ({ page, t, assets }) => {
  const home = page.id === 'faq' ? pageHref('index.html') : ''
  return html`    <footer id="footer">
      <img src="${assets}assets/figma/logo.svg" alt="Lingo" />
      <nav aria-label="${t.nav.footerNav}">
        <a href="${home}#features">${t.footer.docs}</a>
        <a href="${pageHref('faq.html')}">${t.footer.faq}</a>
        <a href="${home}#pricing">${t.footer.pricing}</a>
        <a href="mailto:hello@lingo.com">${t.footer.contact}</a>
      </nav>
      <p>${t.footer.copyright}</p>
    </footer>`
}
