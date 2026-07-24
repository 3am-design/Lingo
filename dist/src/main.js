// Keep this path browser-resolvable so animations and the G-grid also work
// when the page is opened through a plain local server instead of Vite.
import Lenis from '../node_modules/lenis/dist/lenis.mjs'

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
const staggeredReveal = (container, selector, options = {}) => {
  if (!container || reducedMotion) return

  const items = [...container.querySelectorAll(selector)]
  if (!items.length) return

  const delay = options.delay ?? 130
  items.forEach((item, index) => {
    item.classList.add('motion-reveal')
    item.style.setProperty('--reveal-delay', `${index * delay}ms`)
  })

  const reveal = () => container.classList.add('motion-reveal-ready')
  if (options.immediate) {
    // Start only after the webfonts have settled. This prevents the hero copy
    // from shifting halfway through its entrance on a cold page load.
    const begin = () => window.requestAnimationFrame(() => window.requestAnimationFrame(reveal))
    if (document.fonts?.ready) document.fonts.ready.then(begin)
    else begin()
    return
  }

  new IntersectionObserver((entries, observer) => {
    if (!entries.some((entry) => entry.isIntersecting)) return
    reveal()
    observer.disconnect()
  }, { threshold: options.threshold ?? 0.16, rootMargin: '0px 0px -7% 0px' }).observe(container)
}

staggeredReveal(document.querySelector('.site-header'), '.brand, nav, .start-free', { immediate: true, delay: 120 })
staggeredReveal(document.querySelector('.hero-content'), ':scope > *', { immediate: true, delay: 140 })
staggeredReveal(document.querySelector('.supporting-features'), ':scope > article, :scope > .make-sense', { delay: 140 })
staggeredReveal(document.querySelector('.comparison-section'), ':scope > .section-kicker, :scope > h2, :scope > .section-intro, :scope > .comparison-table-wrap', { delay: 140 })
staggeredReveal(document.querySelector('.pricing'), ':scope > .section-kicker, :scope > h2, :scope > .section-intro, :scope > .price-grid, :scope > .pricing-trust', { delay: 140 })
staggeredReveal(document.querySelector('footer'), ':scope > img, :scope > nav, :scope > p', { delay: 140 })

document.querySelectorAll('.feature-card').forEach((card) => {
  staggeredReveal(card, ':scope > h2, :scope > .feature-lede, :scope > .migration-steps, :scope > .terminal, :scope > .editor-points, :scope > .editor-demo, :scope > .seo-routes, :scope > .seo-word, :scope > .commerce-copy, :scope > .product-card', { delay: 150, threshold: 0.1 })
})

const heroNotice = document.querySelector('.hero > .notice-bar')
if (heroNotice && !reducedMotion) {
  heroNotice.classList.add('notice-motion-ready', 'notice-motion-priming')
  heroNotice.getBoundingClientRect()
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
    heroNotice.classList.remove('notice-motion-priming')
    heroNotice.classList.add('is-visible')
  }))
}

const howSection = document.querySelector('.how-it-works')
const architectureComparison = document.querySelector('.architecture-comparison')
if (howSection && architectureComparison) {
  const languageCount = architectureComparison.querySelector('[data-language-count]')

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
      architectureComparison.classList.add('is-visible')

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
      }, 1900)
    }

    const howObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      playHow()
      observer.disconnect()
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    const architectureObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      window.setTimeout(playArchitecture, 720)
      observer.disconnect()
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' })

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
  await wait({ a: 450, b: 1150, c: 1850 }[group])

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

const editorDemo = document.querySelector('.editor-demo')
if (editorDemo) {
  const editorLanguages = [
    { code: 'EN', name: 'English', title: 'The city is a language<br />we learn to read.', location: 'LONDON, 2026' },
    { code: 'FR', name: 'Français', title: 'La ville est une langue<br />que nous apprenons à lire.', location: 'PARIS, 2026' },
    { code: '繁', name: '繁體中文', title: '城市是一種我們<br />學會閱讀的語言。', location: '香港，2026' },
    { code: 'DE', name: 'Deutsch', title: 'Die Stadt ist eine Sprache,<br />die wir lesen lernen.', location: 'BERLIN, 2026' }
  ]
  const editorButtons = [...editorDemo.querySelectorAll('[data-editor-language]')]
  const editorTitle = editorDemo.querySelector('[data-editor-title]')
  const editorLocation = editorDemo.querySelector('[data-editor-location]')
  const editorCode = editorDemo.querySelector('[data-editor-code]')
  const editorName = editorDemo.querySelector('[data-editor-name]')
  let editorIndex = 0
  let editorTimer
  let editorSwitchTimer

  const applyEditorLanguage = (index, immediate = false) => {
    editorIndex = index
    const language = editorLanguages[index]
    window.clearTimeout(editorSwitchTimer)
    if (!immediate) editorDemo.classList.add('is-switching')

    editorSwitchTimer = window.setTimeout(() => {
      editorTitle.innerHTML = language.title
      editorLocation.textContent = language.location
      editorCode.textContent = language.code
      editorName.textContent = language.name
      editorButtons.forEach((button, buttonIndex) => button.setAttribute('aria-pressed', String(buttonIndex === index)))
      editorDemo.classList.remove('is-switching')
    }, immediate ? 0 : 210)
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

  const applyProduct = (index) => {
    productIndex = index
    const product = products[index]
    productCard.classList.add('is-switching')
    window.setTimeout(() => {
      productLanguage.textContent = product.language
      productTitle.textContent = product.title
      productDescription.innerHTML = product.description
      productPrice.textContent = product.price
      productCard.classList.remove('is-switching')
    }, 240)
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
