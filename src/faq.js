// The FAQ page runs the whole landing shell — Lenis, the hero entrance, the
// sticky header, the G-grid — and adds only the accordion on top. Everything
// in main.js is guarded by a null check, so the sections this page does not
// have simply sit the round out.
import { staggeredReveal } from './main.js'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setItemState = (item, open) => {
  item.classList.toggle('is-open', open)
  item.querySelector('.faq-q')?.setAttribute('aria-expanded', String(open))
}

const faqItems = [...document.querySelectorAll('.faq-item')]

document.querySelectorAll('.faq-list').forEach((list) => {
  const items = [...list.querySelectorAll('.faq-item')]

  items.forEach((item) => {
    const question = item.querySelector('.faq-q')
    if (!question) return

    question.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open')
      // One answer at a time per group: a column of open panels pushes the
      // question you just read off the screen.
      items.forEach((other) => setItemState(other, other === item && willOpen))
    })
  })
})

// Deep links land on the question itself, not just the group: /faq.html#q-2-3
// opens that answer and brings it into view under the sticky header.
const openFromHash = (hash, scroll) => {
  if (!hash || hash.length < 2) return
  const target = document.querySelector(hash)
  const item = target?.closest('.faq-item')
  if (!item) return

  const list = item.closest('.faq-list')
  ;[...(list?.querySelectorAll('.faq-item') || [])].forEach((other) => setItemState(other, other === item))
  if (scroll) item.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' })
}

openFromHash(window.location.hash, true)
window.addEventListener('hashchange', () => openFromHash(window.location.hash, true))

// Same quiet stagger the landing sections use, so an inner page does not feel
// like a different site.
document.querySelectorAll('.faq-group').forEach((group) => {
  staggeredReveal(group, ':scope > .faq-group-head, :scope > .faq-list > .faq-lede, :scope > .faq-list > .faq-item', {
    delay: 55,
    threshold: 0.06,
    rootMargin: '0px 0px -8% 0px'
  })
})
staggeredReveal(document.querySelector('.cta-section'), ':scope > .cta-card', { threshold: 0.2 })

// Open the first answer unless a deep link already chose one, so the page
// never arrives as a wall of closed rows with nothing to read.
if (faqItems.length && !faqItems.some((item) => item.classList.contains('is-open'))) {
  setItemState(faqItems[0], true)
}
