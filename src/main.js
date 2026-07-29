// Keep this path browser-resolvable so animations and the G-grid also work
// when the page is opened through a plain local server instead of Vite.
import Lenis from '../node_modules/lenis/dist/lenis.mjs'

// The layout grid is driven by --vw rather than 100vw: 100vw includes the
// classic scrollbar, which pushes every grid margin ~7px off the overlay (and
// off the 1920 canvas) on platforms that reserve gutter space for it.
const syncViewportWidth = () => {
  document.documentElement.style.setProperty('--vw', `${document.documentElement.clientWidth}px`)
}
syncViewportWidth()
window.addEventListener('resize', syncViewportWidth)

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!reducedMotion) {
  new Lenis({
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.085,
    wheelMultiplier: 0.9,
    anchors: { offset: -88 },
    allowNestedScroll: true
  })
}

// Give every content group the same quiet, staggered entrance. Keeping this
// data-driven means new cards can join the rhythm without bespoke keyframes.
export const staggeredReveal = (container, selector, options = {}) => {
  if (!container || reducedMotion) return

  const items = [...container.querySelectorAll(selector)]
  if (!items.length) return

  const delay = options.delay ?? 130
  items.forEach((item, index) => {
    item.classList.add('motion-reveal')
    item.style.setProperty('--reveal-delay', `${index * delay}ms`)
  })

  new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) return
    container.classList.add('motion-reveal-ready')
    observer.disconnect()
  }, {
    threshold: options.threshold ?? 0.16,
    rootMargin: options.rootMargin ?? '0px 0px -7% 0px'
  }).observe(container)
}

// The landing entrance is a written timeline rather than one flat stagger.
// A uniform 140ms step against a ~1s transition made every element overlap
// almost completely, so the hero read as a single simultaneous fade; these
// cues are spaced far enough apart to be heard as separate beats.
const HERO_CUES = [
  ['header', ':scope > .brand', 0],
  ['header', ':scope > nav', 140],
  ['header', ':scope > .start-free', 260],
  ['hero', ':scope > .eyebrow', 440, 0, { '--reveal-y': '60px' }],
  ['hero', ':scope > h1', 620, 0, { '--reveal-y': '110px', '--reveal-duration': '1.35s', '--reveal-fade': '.65s' }],
  ['hero', ':scope > .hero-copy', 1080, 0, { '--reveal-duration': '1.3s' }],
  ['hero', '.proof-list li', 1260, 105, { '--reveal-y': '64px', '--reveal-duration': '1.05s' }],
  ['hero', '.hero-actions .pill', 1680, 130, { '--reveal-y': '76px', '--reveal-duration': '1.15s' }],
  ['hero', ':scope > .micro-proof', 1960, 0, { '--reveal-y': '56px', '--reveal-duration': '1.05s' }]
]
const HERO_NOTICE_CUE = 2180
const FOLLOWING_SECTIONS_CUE = 3000
let releaseFollowingSections
const followingSectionsReady = new Promise((resolve) => {
  releaseFollowingSections = resolve
})

const siteHeader = document.querySelector('.site-header')
const heroContent = document.querySelector('.hero-content')
if (siteHeader && heroContent && !reducedMotion) {
  siteHeader.classList.add('landing-motion-priming')
  heroContent.classList.add('landing-motion-priming')
  const roots = { header: siteHeader, hero: heroContent }
  HERO_CUES.forEach(([root, selector, start, step = 0, vars]) => {
    ;[...roots[root].querySelectorAll(selector)].forEach((item, index) => {
      item.classList.add('motion-reveal')
      item.style.setProperty('--reveal-delay', `${start + index * step}ms`)
      if (vars) for (const [name, value] of Object.entries(vars)) item.style.setProperty(name, value)
    })
  })

  // Commit every hidden child before the ready class is allowed onto the page.
  // Without this layout read, the module can add both states before the first
  // paint and nested cues (proofs/buttons) simply appear.
  siteHeader.getBoundingClientRect()
  heroContent.getBoundingClientRect()

  // Hold until the webfonts settle, otherwise the headline reflows halfway
  // through its own reveal on a cold load.
  const begin = () => window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
    siteHeader.classList.remove('landing-motion-priming')
    heroContent.classList.remove('landing-motion-priming')
    siteHeader.classList.add('motion-reveal-ready')
    heroContent.classList.add('motion-reveal-ready')
    window.setTimeout(releaseFollowingSections, FOLLOWING_SECTIONS_CUE)
  }))
  if (document.fonts?.ready) document.fonts.ready.then(begin)
  else begin()
} else releaseFollowingSections()

staggeredReveal(document.querySelector('.supporting-features'), ':scope > article, :scope > .make-sense', { delay: 140 })
staggeredReveal(document.querySelector('.comparison-section'), ':scope > .section-kicker, :scope > h2, :scope > .section-intro, :scope > .comparison-table-wrap', { delay: 140 })
staggeredReveal(document.querySelector('.pricing'), ':scope > .section-kicker, :scope > h2, :scope > .section-intro, :scope > .price-grid > .price-card, :scope > .pricing-trust, :scope > .cta-card', { delay: 90 })
staggeredReveal(document.querySelector('footer'), ':scope > img, :scope > nav, :scope > p', { delay: 140 })

document.querySelectorAll('.feature-card').forEach((card) => {
  staggeredReveal(card, ':scope > h2, :scope > .feature-lede, :scope > .migration-steps, :scope > .terminal, :scope > .editor-points, :scope > .editor-demo, :scope > .seo-routes, :scope > .seo-word, :scope > .commerce-copy, :scope > .product-card', {
    delay: 150,
    threshold: 0.12,
    // A sticky card can expose a thin strip at the bottom of the viewport long
    // before it becomes the active card. Wait until it reaches the viewport's
    // middle band so cards 2–4 do not finish animating off-screen.
    rootMargin: '0px 0px -45% 0px'
  })
})

const heroNotice = document.querySelector('.hero > .notice-bar')
if (heroNotice && !reducedMotion) {
  heroNotice.classList.add('notice-motion-ready', 'notice-motion-priming')
  heroNotice.getBoundingClientRect()
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
    heroNotice.classList.remove('notice-motion-priming')
    // Last beat of the landing sequence: the bar wipes in once the hero copy
    // has finished arriving, instead of racing it.
    window.setTimeout(() => heroNotice.classList.add('is-visible'), HERO_NOTICE_CUE)
  }))
}

const howSection = document.querySelector('.how-it-works')
const architectureComparison = document.querySelector('.architecture-comparison')
if (howSection && architectureComparison) {
  const languageCount = architectureComparison.querySelector('[data-language-count]')
  const ARCHITECTURE_DETAIL_CUE = 1450
  const ARCHITECTURE_COUNT_CUE = 2800

  if (reducedMotion) {
    howSection.classList.add('how-is-visible')
    architectureComparison.classList.add('is-visible', 'is-counting')
    if (languageCount) languageCount.textContent = '8'
  } else {
    howSection.classList.add('how-motion-ready', 'how-motion-priming')
    architectureComparison.classList.add('architecture-motion-ready', 'architecture-priming')
    let howPlayed = false
    let architecturePlayed = false

    const playHow = () => {
      if (howPlayed) return
      howPlayed = true
      howSection.classList.add('how-is-visible')
    }

    const playArchitecture = () => {
      if (architecturePlayed) return
      architecturePlayed = true
      howSection.classList.add('architecture-cards-visible')
      // The card surfaces and their copy are one entrance beat. Only the
      // inner post/frame choreography waits for that shared rise to settle.
      howSection.classList.add('architecture-text-visible')

      window.setTimeout(() => {
        architectureComparison.classList.add('is-visible')
      }, ARCHITECTURE_DETAIL_CUE)

      window.setTimeout(() => {
        architectureComparison.classList.add('is-counting')
        if (!languageCount) return

        let value = 1
        languageCount.textContent = String(value)
        const counter = window.setInterval(() => {
          value += 1
          languageCount.textContent = String(value)
          if (value === 8) window.clearInterval(counter)
        }, 125)
      }, ARCHITECTURE_COUNT_CUE)
    }

    const howObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      followingSectionsReady.then(playHow)
      observer.disconnect()
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    const architectureObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      followingSectionsReady.then(() => window.setTimeout(playArchitecture, 320))
      observer.disconnect()
    }, { threshold: 0.12, rootMargin: '0px 0px -22% 0px' })

    // Commit the hidden start state without transition first; otherwise a fast
    // module load can briefly animate the rows and frame backwards.
    architectureComparison.getBoundingClientRect()
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      howSection.classList.remove('how-motion-priming')
      architectureComparison.classList.remove('architecture-priming')
      howObserver.observe(howSection)
      architectureObserver.observe(architectureComparison)
    }))
  }
}

// The first paint is pre-hidden in CSS so the page never flashes in its final
// position before these motion classes are attached.
document.documentElement.classList.remove('motion-booting')

const layoutGrid = document.createElement('div')
layoutGrid.className = 'layout-grid'
layoutGrid.setAttribute('aria-hidden', 'true')
for (let index = 0; index < 6; index += 1) layoutGrid.append(document.createElement('span'))
document.body.append(layoutGrid)

window.addEventListener('keydown', (event) => {
  const isGridShortcut = event.code === 'KeyG' || event.key.toLowerCase() === 'g'
  if (!isGridShortcut || event.metaKey || event.ctrlKey || event.altKey) return
  const target = event.target
  if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable) return
  layoutGrid.classList.toggle('is-visible')
})

const stickyHeader = document.querySelector('.sticky-header')
if (stickyHeader) {
  let stickyHeaderPending = false
  const updateStickyHeader = () => {
    stickyHeader.classList.toggle('is-visible', window.scrollY > 120)
    stickyHeaderPending = false
  }
  window.addEventListener('scroll', () => {
    if (stickyHeaderPending) return
    stickyHeaderPending = true
    window.requestAnimationFrame(updateStickyHeader)
  }, { passive: true })
  updateStickyHeader()
}

// The top bar and the sticky bar carry the same language control, so the two
// menus are driven as one: opening either closes the other. The options that
// have a locale are plain links and navigate on their own — this only handles
// opening, closing and focus.
const langGroups = [...document.querySelectorAll('.lang')].map((root) => ({
  root,
  toggle: root.querySelector('.lang-switch'),
  menu: root.querySelector('.lang-menu'),
  options: [...root.querySelectorAll('.lang-menu a')]
}))

if (langGroups.length) {
  const setOpen = (group, open) => {
    group.menu.classList.toggle('is-open', open)
    group.toggle.setAttribute('aria-expanded', String(open))
  }
  const closeAll = (except) => langGroups.forEach((group) => { if (group !== except) setOpen(group, false) })

  langGroups.forEach((group) => {
    group.toggle.addEventListener('click', () => {
      const willOpen = group.toggle.getAttribute('aria-expanded') !== 'true'
      closeAll(group)
      setOpen(group, willOpen)
    })

    // Closing on the way out matters for the current language, where the link
    // resolves to this same page and nothing would otherwise dismiss the menu.
    group.options.forEach((option) => option.addEventListener('click', () => setOpen(group, false)))
  })

  // pointerdown rather than click: closing on the press keeps the menu from
  // sitting open over whatever the next tap lands on.
  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest('.lang')) closeAll()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return
    const open = langGroups.find((group) => group.menu.classList.contains('is-open'))
    if (!open) return
    setOpen(open, false)
    open.toggle.focus()
  })
}

// Light the menu dot for the section you are actually reading. Links that
// point at another page (./faq.html) simply never match, so the FAQ page keeps
// its static aria-current dot and this loop stays a no-op there.
const NAV_SPY_LINE = 0.32
const navLinks = [...document.querySelectorAll('.site-header nav>a,.sticky-header nav>a')]
const spySections = [...new Set(navLinks.map((link) => link.getAttribute('href')).filter((href) => href?.startsWith('#')))]
  .map((hash) => ({ hash, element: document.querySelector(hash) }))
  .filter((entry) => entry.element)

if (spySections.length) {
  let navSpyPending = false
  const updateNavSpy = () => {
    navSpyPending = false
    const line = window.scrollY + window.innerHeight * NAV_SPY_LINE
    const measured = spySections
      .map((entry) => ({ hash: entry.hash, top: entry.element.getBoundingClientRect().top + window.scrollY }))
      .sort((a, b) => a.top - b.top)

    let activeHash = ''
    for (const entry of measured) if (entry.top <= line) activeHash = entry.hash
    // The last section is usually shorter than the fold, so it would never
    // reach the line on its own.
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) activeHash = measured[measured.length - 1].hash

    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === activeHash))
  }
  const queueNavSpy = () => {
    if (navSpyPending) return
    navSpyPending = true
    window.requestAnimationFrame(updateNavSpy)
  }
  window.addEventListener('scroll', queueNavSpy, { passive: true })
  window.addEventListener('resize', queueNavSpy)
  updateNavSpy()
}

const translations = [
  { lang: 'en', text: 'Built for people who care about clean architecture as much as great content.' },
  { lang: 'fr', text: 'Conçu pour celles et ceux qui accordent autant d’importance à une architecture propre qu’à un contenu de qualité.' },
  { lang: 'de', text: 'Entwickelt für Menschen, denen eine saubere Architektur genauso wichtig ist wie großartige Inhalte.' },
  { lang: 'es', text: 'Creado para quienes valoran una arquitectura limpia tanto como un gran contenido.' },
  { lang: 'ja', text: '優れたコンテンツと同じくらい、クリーンなアーキテクチャを大切にする人のために。' },
  { lang: 'ko', text: '훌륭한 콘텐츠만큼이나 깔끔한 아키텍처를 중요하게 생각하는 사람들을 위해.' },
  { lang: 'zh-Hans', text: '为同样重视优质内容与清晰架构的人而打造。' },
  { lang: 'zh-Hant', text: '為同樣重視優質內容與清晰架構的人而打造。' }
]

const positions = {
  a: [
    { left: 'var(--grid-edge)', top: '140px' },
    { left: 'calc(var(--grid-edge) + clamp(0px, 2vw, 38px))', top: '365px' },
    { left: 'var(--grid-edge)', top: '555px' }
  ],
  b: [
    { right: 'var(--grid-edge)', top: '205px' },
    { right: 'calc(var(--grid-edge) + clamp(0px, 2vw, 38px))', top: '425px' },
    { right: 'var(--grid-edge)', top: '600px' }
  ],
  c: [
    { left: 'calc(var(--grid-edge) + clamp(0px, 8vw, 154px))', top: '275px' },
    { right: 'calc(var(--grid-edge) + clamp(0px, 8vw, 154px))', top: '345px' },
    { left: 'calc(var(--grid-edge) + clamp(0px, 10vw, 192px))', top: '500px' }
  ]
}

const ambientColors = ['#bdbdbd', '#c9c9c9', '#a9a9a9']
const ambientPositions = new Map()

const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration))
const graphemes = (text) => window.Intl?.Segmenter
  ? [...new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text)].map(({ segment }) => segment)
  : [...text]

const moveAmbientCopy = (element, group) => {
  const options = positions[group]
  const occupiedTops = [...ambientPositions.entries()]
    .filter(([other]) => other !== element)
    .map(([, position]) => Number.parseInt(position.top, 10))
  const available = options.filter((option) => occupiedTops.every((top) => Math.abs(Number.parseInt(option.top, 10) - top) >= 85))
  const next = (available.length ? available : options)[Math.floor(Math.random() * (available.length ? available : options).length)]
  ambientPositions.set(element, next)
  element.style.left = next.left || 'auto'
  element.style.right = next.right || 'auto'
  element.style.top = next.top
  element.style.color = ambientColors[Math.floor(Math.random() * ambientColors.length)]
}

const runAmbientCopy = async (element, group, initialIndex) => {
  let previous = initialIndex
  moveAmbientCopy(element, group)
  // Start typing only after the hero has landed — three cursors moving during
  // the entrance is what made the first second feel like everything at once.
  await wait({ a: 2600, b: 3200, c: 3800 }[group])

  while (document.body.contains(element)) {
    let index = Math.floor(Math.random() * translations.length)
    if (index === previous) index = (index + 1) % translations.length
    previous = index
    const item = translations[index]
    const characters = graphemes(item.text)

    moveAmbientCopy(element, group)
    element.lang = item.lang
    element.textContent = ''
    element.classList.add('typing')

    for (const character of characters) {
      element.textContent += character
      await wait(22 + Math.random() * 32)
    }

    element.classList.remove('typing')
    await wait(1800 + Math.random() * 900)
    element.style.opacity = '0'
    await wait(280)
    element.textContent = ''
    element.style.opacity = '1'
    await wait(280)
  }
}

const ambientA = document.querySelector('.ambient-copy-a')
const ambientB = document.querySelector('.ambient-copy-b')
const ambientC = document.querySelector('.ambient-copy-c')
if (ambientA && ambientB && ambientC) {
  if (reducedMotion) {
    ambientA.textContent = translations[0].text
    ambientA.lang = translations[0].lang
    ambientB.textContent = translations[4].text
    ambientB.lang = translations[4].lang
    ambientC.textContent = translations[6].text
    ambientC.lang = translations[6].lang
  } else {
    runAmbientCopy(ambientA, 'a', 0)
    runAmbientCopy(ambientB, 'b', 4)
    runAmbientCopy(ambientC, 'c', 6)
  }
}

const terminal = document.querySelector('.terminal')
if (terminal) {
  const terminalLines = [...terminal.querySelectorAll('[data-terminal-line]')]
  const showTerminalImmediately = () => {
    terminalLines.forEach((line) => {
      line.textContent = line.dataset.terminalLine
      line.closest('p')?.classList.add('is-visible')
    })
    terminal.classList.add('is-complete')
  }

  if (reducedMotion) {
    showTerminalImmediately()
  } else {
    let terminalPlayed = false
    const typeTerminal = async () => {
      if (terminalPlayed) return
      terminalPlayed = true

      for (const [lineIndex, line] of terminalLines.entries()) {
        line.closest('p')?.classList.add('is-visible')
        const characters = graphemes(line.dataset.terminalLine)
        for (const character of characters) {
          line.textContent += character
          await wait(lineIndex === 0 ? 42 + Math.random() * 26 : 24 + Math.random() * 18)
        }
        await wait(lineIndex === 0 ? 420 : 300)
      }

      terminal.classList.add('is-complete')
    }

    new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      typeTerminal()
      observer.disconnect()
    }, { threshold: 0.42 }).observe(terminal)
  }
}

// One highlighted span per line, each starting its wipe a beat after the one
// above it, so the marker reads as travelling down the block.
const MARKER_STAGGER = 55
const markerLines = (html, className, startIndex = 0) =>
  html
    .split(/<br\s*\/?>/i)
    .map((line, index) => `<span class="${className}" style="--swap-delay:${(startIndex + index) * MARKER_STAGGER}ms">${line}</span>`)
    .join('<br />')

const editorDemo = document.querySelector('.editor-demo')
if (editorDemo) {
  const editorLanguages = [
    { code: 'EN', name: 'English', title: 'The city is a language<br />we learn to read.', caption: 'Greening is an art' },
    { code: 'FR', name: 'Français', title: 'La ville est une langue<br />que nous apprenons à lire.', caption: 'Végétaliser est un art' },
    { code: 'JA', name: '日本語', title: '都市は私たちが<br />読むことを学ぶ言語です。', caption: '緑化はひとつの芸術' },
    { code: 'KO', name: '한국어', title: '도시는 우리가<br />읽는 법을 배우는 언어입니다.', caption: '녹화는 하나의 예술' },
    { code: '繁', name: '繁體中文', title: '城市是一種我們<br />學會閱讀的語言。', caption: '綠化是一種藝術' },
    { code: 'DE', name: 'Deutsch', title: 'Die Stadt ist eine Sprache,<br />die wir lesen lernen.', caption: 'Begrünung ist eine Kunst' },
    { code: 'ES', name: 'Español', title: 'La ciudad es un idioma<br />que aprendemos a leer.', caption: 'Reverdecer es un arte' }
  ]
  const editorButtons = [...editorDemo.querySelectorAll('[data-editor-language]')]
  const editorTitle = editorDemo.querySelector('[data-editor-title]')
  const editorCaption = editorDemo.querySelector('[data-editor-caption]')
  let editorIndex = 0
  let editorTimer
  let editorSwitchTimer

  // The picker answers the click immediately, the article catches up half a
  // second later — so the cause (right) visibly precedes the effect (left)
  // instead of both landing on the same frame.
  const EDITOR_SWAP_DELAY = 500

  const applyEditorLanguage = (index, immediate = false) => {
    editorIndex = index
    const language = editorLanguages[index]
    window.clearTimeout(editorSwitchTimer)
    editorButtons.forEach((button, buttonIndex) => button.setAttribute('aria-pressed', String(buttonIndex === index)))

    const swap = () => {
      editorTitle.innerHTML = markerLines(language.title, 'editor-title-text')
      editorCaption.textContent = language.caption
      editorDemo.classList.remove('is-switching')
    }

    if (immediate) {
      swap()
      return
    }

    // The orange marker holds across the gap, then clears as the copy lands.
    editorDemo.classList.add('is-switching')
    editorSwitchTimer = window.setTimeout(swap, EDITOR_SWAP_DELAY)
  }

  const startEditorCycle = () => {
    if (reducedMotion || editorTimer) return
    editorTimer = window.setInterval(() => applyEditorLanguage((editorIndex + 1) % editorLanguages.length), 3600)
  }
  const stopEditorCycle = () => {
    window.clearInterval(editorTimer)
    editorTimer = undefined
  }

  editorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyEditorLanguage(Number(button.dataset.editorLanguage))
      stopEditorCycle()
      startEditorCycle()
    })
  })
  applyEditorLanguage(0, true)
  new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) startEditorCycle()
    else stopEditorCycle()
  }, { threshold: 0.4 }).observe(editorDemo)
}

const productCard = document.querySelector('.product-card')
if (productCard) {
  const products = [
    { language: 'EN', title: 'Orange Grape Pear', description: 'Freshly squeezed.<br />100% Natural.', price: '$9.80' },
    { language: 'FR', title: 'Orange Raisin Poire', description: 'Fraîchement pressé.<br />100 % naturel.', price: '9,20 €' },
    { language: '繁', title: '香橙・提子・梨', description: '新鮮榨取。<br />百分百天然。', price: 'HK$78' },
    { language: 'DE', title: 'Orange Traube Birne', description: 'Frisch gepresst.<br />100 % natürlich.', price: '9,50 €' }
  ]
  const productLanguage = productCard.querySelector('[data-product-language]')
  const productTitle = productCard.querySelector('[data-product-title]')
  const productDescription = productCard.querySelector('[data-product-description]')
  const productPrice = productCard.querySelector('[data-product-price]')
  let productIndex = 0
  let productTimer

  // Matches the editor mock: the orange marker holds across the gap, then
  // clears as the translated copy lands.
  const PRODUCT_SWAP_DELAY = 500
  let productSwitchTimer

  const applyProduct = (index) => {
    productIndex = index
    const product = products[index]
    window.clearTimeout(productSwitchTimer)
    productCard.classList.add('is-switching')
    productSwitchTimer = window.setTimeout(() => {
      productLanguage.textContent = product.language
      productTitle.innerHTML = markerLines(product.title, 'product-swap')
      productDescription.innerHTML = markerLines(product.description, 'product-swap', 1)
      productPrice.innerHTML = markerLines(product.price, 'product-swap', 3)
      productCard.classList.remove('is-switching')
    }, PRODUCT_SWAP_DELAY)
  }
  const startProductCycle = () => {
    if (reducedMotion || productTimer) return
    productTimer = window.setInterval(() => applyProduct((productIndex + 1) % products.length), 3200)
  }
  const stopProductCycle = () => {
    window.clearInterval(productTimer)
    productTimer = undefined
  }

  new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) startProductCycle()
    else stopProductCycle()
  }, { threshold: 0.45 }).observe(productCard)
}

const featureCards = [...document.querySelectorAll('.feature-card')]
if (featureCards.length && !reducedMotion && window.matchMedia('(min-width: 901px)').matches) {
  const featureStack = document.querySelector('.feature-stack')
  const featureLabel = document.querySelector('.feature-stage > .section-kicker')
  let framePending = false
  let cardOffsets = []
  const measureCardOffsets = () => {
    let offset = 0
    cardOffsets = featureCards.map((card) => {
      const currentOffset = offset
      offset += card.offsetHeight + Number.parseFloat(getComputedStyle(card).marginBottom)
      return currentOffset
    })
  }
  const updateStack = () => {
    const stackTop = featureStack?.getBoundingClientRect().top || 0
    featureCards.forEach((card, index) => {
      if (index === featureCards.length - 1) return
      const nextTop = stackTop + cardOffsets[index + 1]
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.88 - nextTop) / (window.innerHeight * 0.58)))
      card.style.setProperty('--stack-scale', String(1 - progress * 0.045))
      card.style.setProperty('--stack-y', `${-progress * 14}px`)
    })

    if (featureLabel) {
      const lastCardTop = featureCards[featureCards.length - 1].getBoundingClientRect().top
      const stickyTop = Number.parseFloat(getComputedStyle(featureLabel).top) || 118
      const exitStart = stickyTop + featureLabel.offsetHeight + 36
      const exitOffset = Math.min(0, lastCardTop - exitStart)
      const labelViewportTop = stickyTop + exitOffset
      const exitProgress = Math.min(1, Math.max(0, -labelViewportTop / featureLabel.offsetHeight))
      featureLabel.style.setProperty('--feature-label-y', `${exitOffset}px`)
      featureLabel.style.setProperty('--feature-label-opacity', String(1 - exitProgress))
    }

    framePending = false
  }
  const queueStackUpdate = () => {
    if (framePending) return
    framePending = true
    window.requestAnimationFrame(updateStack)
  }
  window.addEventListener('scroll', queueStackUpdate, { passive: true })
  window.addEventListener('resize', () => {
    measureCardOffsets()
    queueStackUpdate()
  })
  measureCardOffsets()
  queueStackUpdate()
}
