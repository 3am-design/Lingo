import { heroLines, html, noticeBar } from './chrome.mjs'
import { pageHref } from '../config.mjs'

// Question ids are derived from position rather than written out, which is what
// made hand-maintaining 34 aria-controls pairs a liability.
const item = (q, groupIndex, itemIndex) => {
  const qid = `q-${groupIndex + 1}-${itemIndex + 1}`
  const aid = `a-${groupIndex + 1}-${itemIndex + 1}`
  return html`            <div class="faq-item">
              <button class="faq-q" type="button" id="${qid}" aria-expanded="false" aria-controls="${aid}">${q.q}<i class="faq-mark" aria-hidden="true"></i></button>
              <div class="faq-a" id="${aid}" role="region" aria-labelledby="${qid}"><div>
${q.a.map((p) => `                <p>${p}</p>`).join('\n')}
              </div></div>
            </div>`
}

const group = (g, index) => html`        <section class="faq-group" id="${g.id}" aria-labelledby="${g.id}-title">
          <div class="faq-group-head">
            <p class="faq-index">${g.index}</p>
            <h2 id="${g.id}-title">${g.title}</h2>
          </div>
          <div class="faq-list">
            <p class="faq-lede">${g.lede}</p>
${g.items.map((q, i) => item(q, index, i)).join('\n')}
          </div>
        </section>`

export default ({ t, assets }) => {
  const f = t.faq
  const home = pageHref('index.html')
  return html`    <main id="top">
      <section class="hero page-hero" aria-labelledby="faq-title">
        <div class="hero-content">
          <p class="eyebrow">${f.hero.eyebrow}</p>
          <h1 id="faq-title">${heroLines(f.hero.lines)}</h1>
          <p class="hero-copy">${f.hero.copy}</p>

          <div class="hero-actions faq-chips">
${f.groups.map((g) => `            <a class="pill faq-chip" href="#${g.id}">${g.chip}</a>`).join('\n')}
          </div>
          <p class="micro-proof"><i></i>${t.home.hero.micro}</p>
        </div>

        ${noticeBar({ t, assets, href: `${home}#pricing`, label: t.notice.viewPricing })}
      </section>

      <div class="faq-sections">
${f.groups.map((g, i) => group(g, i)).join('\n\n')}

        <section class="cta-section" aria-labelledby="faq-cta-title">
          <div class="cta-card">
            <div>
              <p class="cta-kicker">${f.cta.kicker}</p>
              <h2 id="faq-cta-title">${f.cta.title}</h2>
              <p class="cta-copy">${f.cta.copy}</p>
            </div>
            <div class="cta-actions">
              <a class="pill pill-white" href="${home}#pricing"><span>${f.cta.primary}</span> <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>
              <a class="pill pill-ghost" aria-disabled="true"><span>${f.cta.secondary}</span> <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>
            </div>
          </div>
        </section>

        ${noticeBar({ t, assets, extraClass: 'faq-notice', href: `${home}#pricing`, label: t.notice.viewPricing })}
      </div>
    </main>`
}
