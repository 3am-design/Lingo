import { heroLines, html, noticeBar } from './chrome.mjs'

// The editor picker and the juice card are the product demo, not page copy —
// they cycle through real languages on purpose, so they stay hard-coded here
// rather than moving into the locale files.
const EDITOR_LANGUAGES = [
  ['EN', 'English'], ['FR', 'Français'], ['JA', '日本語'], ['KO', '한국어'],
  ['繁', '繁體中文'], ['DE', 'Deutsch'], ['ES', 'Español']
]

const OLD_POSTS = [
  ['active', 'Post-1068', 'EN', 'The city is a language...'],
  ['faded-30', 'Post-1284', 'FR', 'La ville est une langue...'],
  ['faded-50', 'Post-1542', 'DE', 'Die Stadt ist eine Sprache...'],
  ['faded-70', 'Post-1876', 'ES', 'La ciudad es un idioma...'],
  ['faded-60', 'Post-2135', 'JA', '都市はひとつの言語です...'],
  ['faded-30', 'Post-2135', 'TC', '城市本身就是一種語言……']
]

const SEO_ROUTES = [['example.com/fr/', 'Français'], ['example.com/de/', 'Deutsch'], ['example.com/zh-hant/', '繁體中文']]

// `onDark` swaps in the pair drawn for a black ground: the default marks are
// cut-outs that show the page through them, so on black the tick disappears
// and the cross reads as a solid blob. These two carry their own fills.
const statusCell = (value, t, assets, onDark = false) => {
  const icons = { yes: [onDark ? 'status-yes-light' : 'status-yes', t.comparison.yes], no: [onDark ? 'status-no-light' : 'status-no', t.comparison.no], partial: ['status-partial', t.comparison.partial] }
  const icon = icons[value]
  return icon
    ? `<td><img class="status-${value}" src="${assets}assets/figma/${icon[0]}.svg" alt="${icon[1]}" /></td>`
    : `<td>${value}</td>`
}

export default ({ t, assets }) => {
  const h = t.home
  return html`    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="ambient-copy ambient-copy-a" aria-hidden="true"></div>
        <div class="ambient-copy ambient-copy-b" aria-hidden="true"></div>
        <div class="ambient-copy ambient-copy-c" aria-hidden="true"></div>

        <div class="hero-content">
          <p class="eyebrow">${h.hero.eyebrow}</p>
          <h1 id="hero-title">${heroLines(h.hero.lines)}</h1>
          <p class="hero-copy">${h.hero.copy}</p>

          <ul class="proof-list" aria-label="${h.hero.proofLabel}">
${h.hero.proof.map((item) => `            <li><img src="${assets}assets/figma/check.svg" alt="" />${item}</li>`).join('\n')}
          </ul>

          <div class="hero-actions">
            <a class="pill pill-dark" href="#pricing"><span>${h.hero.ctaPrimary}</span> <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>
            <a class="pill pill-light" href="#how-it-works"><span>${h.hero.ctaSecondary}</span> <img src="${assets}assets/figma/arrow-down.svg" alt="" /></a>
          </div>
          <p class="micro-proof"><i></i>${h.hero.micro}</p>
        </div>

        ${noticeBar({ t, assets, href: '#features', label: t.notice.migrate })}
      </section>

      <section class="how-it-works" id="how-it-works" aria-labelledby="how-title">
        <p class="section-kicker">${h.how.kicker}</p>
        <h2 id="how-title">${h.how.title}</h2>
        <p class="section-intro">${h.how.intro}</p>

        <div class="architecture-comparison">
          <article class="architecture-card old-way">
            <p class="architecture-label">${h.how.oldLabel}</p>
            <h3>${h.how.oldTitle}</h3>
            <div class="post-cloud" aria-hidden="true">
${OLD_POSTS.map(([cls, id, code, text]) => `              <div class="post ${cls}"><b>${id}</b><span>${code}</span><small>${text}</small></div>`).join('\n')}
            </div>
            <p class="architecture-foot"><img src="${assets}assets/figma/status-no-light.svg" alt="" />${h.how.oldFoot}</p>
          </article>

          <article class="architecture-card lingo-way">
            <p class="architecture-label">${h.how.newLabel}</p>
            <h3>${h.how.newTitle}</h3>
            <div class="canonical-post">
              <span class="frame-line frame-top"></span>
              <span class="frame-line frame-right"></span>
              <span class="frame-line frame-bottom"></span>
              <span class="frame-line frame-left"></span>
              <img src="${assets}assets/figma/logo-small.svg" alt="Lingo" />
              <strong>post-078</strong>
              <span class="language-count"><b data-language-count>8</b> ${h.how.languages}</span>
            </div>
            <p class="architecture-foot"><img src="${assets}assets/figma/check.svg" alt="" />${h.how.newFoot}</p>
          </article>
        </div>
      </section>

      <section class="features" id="features" aria-labelledby="features-title">
        <div class="feature-stage">
          <p class="section-kicker" id="features-title">${h.features.kicker}</p>

          <div class="feature-stack">
          <article class="feature-card migration-card">
            <h2>${h.features.migration.title}</h2>
            <div class="feature-lede">
              <strong>${h.features.migration.ledeTitle}</strong>
              <p>${h.features.migration.lede}</p>
            </div>
            <div class="migration-steps">
${h.features.migration.steps.map((s) => `              <div><b>${s.n}</b><h3>${s.title}</h3><p>${s.copy}</p></div>`).join('\n')}
              <a class="pill pill-white" href="#comparison">${h.features.migration.guide} <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>
            </div>
            <div class="terminal" aria-label="${h.features.migration.terminalLabel}">
              <div class="terminal-head"><span><i></i><i></i><i></i></span><b>${h.features.migration.terminalTitle}</b></div>
              <div class="terminal-body" aria-hidden="true">
                <p><strong data-terminal-line="${h.features.migration.terminal[0]}"></strong></p>
                <p><span data-terminal-line="${h.features.migration.terminal[1]}"></span></p>
                <p><span data-terminal-line="${h.features.migration.terminal[2]}"></span></p>
                <p class="terminal-accent"><span data-terminal-line="${h.features.migration.terminal[3]}"></span></p>
                <p class="terminal-accent terminal-prompt-final">~ <i class="cursor"></i></p>
              </div>
            </div>
          </article>

          <article class="feature-card editor-card">
            <h2>${h.features.editor.title}</h2>
            <div class="feature-lede">
              <strong>${h.features.editor.ledeTitle}</strong>
              <p>${h.features.editor.lede}</p>
            </div>
            <div class="editor-points">
              <strong>${h.features.editor.pointsTitle}</strong>
              <ul>
${h.features.editor.points.map((p) => `                <li>${p}</li>`).join('\n')}
              </ul>
            </div>
            <div class="editor-demo" aria-label="${h.features.editor.demoLabel}">
              <div class="editor-demo-bar">
                <span class="editor-dots"><i></i><i></i><i></i></span>
                <span>editor / post-1024</span>
                <b><i></i> LIVE</b>
              </div>
              <div class="editor-demo-workspace">
                <aside class="editor-rail" aria-hidden="true"><b>W</b><i></i><i></i><i></i><i></i></aside>
                <div class="editor-canvas">
                  <small>${h.features.editor.canvasKicker}</small>
                  <h3 data-editor-title><span class="editor-title-text" style="--swap-delay:0ms">The city is a language</span><br /><span class="editor-title-text" style="--swap-delay:55ms">we learn to read.</span></h3>
                  <span class="editor-line editor-line-long"></span>
                  <span class="editor-line editor-line-mid"></span>
                  <span class="editor-line editor-line-short"></span>
                  <div class="editor-art">
                    <img src="${assets}assets/figma/city-collage.jpg" alt="" />
                    <span data-editor-caption>Greening is an art</span>
                  </div>
                </div>
                <aside class="editor-languages">
                  <header><img src="${assets}assets/figma/logo-small.svg" alt="Lingo" /></header>
                  <div class="editor-language-list" role="group" aria-label="${h.features.editor.previewLabel}">
${EDITOR_LANGUAGES.map(([code, name], i) => `                    <button type="button" data-editor-language="${i}" aria-pressed="${i === 0}"><span>${code}</span><b>${name}</b></button>`).join('\n')}
                  </div>
                  <button class="editor-copy-button" type="button">${h.features.editor.build} <span>→</span></button>
                </aside>
              </div>
            </div>
          </article>

          <article class="feature-card seo-card">
            <img class="seo-bg" src="${assets}assets/figma/earth.png" alt="" />
            <h2>${h.features.seo.title}</h2>
            <div class="feature-lede">
              <strong>${h.features.seo.ledeTitle}</strong>
              <p>${h.features.seo.lede}</p>
            </div>
            <div class="seo-routes">
              <p><span>example.com</span><b>${h.features.seo.defaultLanguage}</b></p>
${SEO_ROUTES.map(([url, name]) => `              <p><span>${url}</span><b>${name}</b></p>`).join('\n')}
              <p><span>example.com/xx/</span><b>${h.features.seo.more}</b></p>
            </div>
            <img class="seo-word" src="${assets}assets/figma/seo-word.svg" alt="" />
          </article>

          <article class="feature-card commerce-card">
            <h2>${h.features.commerce.title}</h2>
            <div class="feature-lede">
              <strong>${h.features.commerce.ledeTitle}</strong>
              <p>${h.features.commerce.lede}</p>
            </div>
            <div class="commerce-copy">
              <img src="${assets}assets/figma/woocommerce.svg" alt="WooCommerce" />
              <p>${h.features.commerce.copy}</p>
            </div>
            <div class="product-card">
              <img src="${assets}assets/figma/juice.png" alt="${h.features.commerce.productAlt}" />
              <div class="product-card-copy" aria-live="polite">
                <span class="product-language" data-product-language>EN</span>
                <h3 data-product-title><span class="product-swap" style="--swap-delay:0ms">Orange Grape Pear</span></h3>
                <p data-product-description><span class="product-swap" style="--swap-delay:55ms">Freshly squeezed.</span><br /><span class="product-swap" style="--swap-delay:110ms">100% Natural.</span></p>
                <strong data-product-price><span class="product-swap" style="--swap-delay:165ms">$9.80</span></strong>
              </div>
            </div>
          </article>
          </div>
        </div>

        <div class="supporting-features">
${h.features.supporting.map((f) => `          <article><img src="${assets}assets/figma/${f.icon}.svg" alt="" /><h3>${f.title}</h3><p>${f.copy}</p></article>`).join('\n')}
          <div class="make-sense">
            <img src="${assets}assets/figma/make-sense.svg" alt="" />
            <span>${h.features.makeSense}</span>
          </div>
        </div>

        ${noticeBar({ t, assets, extraClass: 'feature-notice', href: '#pricing', label: t.notice.viewPricing })}
      </section>

      <section class="comparison-section" id="comparison" aria-labelledby="comparison-title">
        <p class="section-kicker">${h.comparison.kicker}</p>
        <h2 id="comparison-title">${h.comparison.title}</h2>
        <p class="section-intro">${h.comparison.intro}</p>

        <div class="comparison-table-wrap">
          <table>
            <thead>
              <tr><th></th><th><img src="${assets}assets/figma/logo-small.svg" alt="Lingo" /></th><th>WPML</th><th>Polylang</th></tr>
            </thead>
            <tbody>
${h.comparison.rows.map((row) => `              <tr><th>${row.label}</th>${row.cells.map((c) => statusCell(c, h, assets)).join('')}</tr>`).join('\n')}
            </tbody>
          </table>
        </div>
      </section>

      <section class="pricing" id="pricing" aria-labelledby="pricing-title">
        <p class="section-kicker">${h.pricing.kicker}</p>
        <h2 id="pricing-title">${h.pricing.title}</h2>
        <p class="section-intro">${h.pricing.intro}</p>

        <div class="price-grid">
${h.pricing.plans.map((plan) => priceCard(plan, h, assets)).join('\n')}
        </div>

        <div class="plan-compare">
          <button class="pill plan-compare-toggle" type="button" data-plan-compare aria-expanded="false" aria-controls="plan-table" data-label-show="${h.pricing.compare.show}" data-label-hide="${h.pricing.compare.hide}"><span>${h.pricing.compare.show}</span><i aria-hidden="true"></i></button>
          <div class="plan-table" id="plan-table">
            <div>
${planTable(h, assets)}
            </div>
          </div>
        </div>

        <article class="lifetime-card">
          <div>
            <p class="lifetime-badge">${h.pricing.lifetime.badge}</p>
            <h3>${h.pricing.lifetime.title}</h3>
            <p class="lifetime-copy">${h.pricing.lifetime.copy}</p>
          </div>
          <div class="lifetime-buy">
            <p class="lifetime-price">${h.pricing.lifetime.price} <small>${h.pricing.lifetime.once}</small></p>
            <a class="pill lifetime-cta" href="#top">${h.pricing.lifetime.cta} <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>
            <p class="lifetime-seats">${h.pricing.lifetime.seats}</p>
          </div>
        </article>

        <div class="pricing-trust">${h.pricing.trust.map((item) => `<span>${item}</span>`).join('<i></i>')}</div>

        <div class="cta-card is-light">
          <div>
            <p class="cta-kicker">${h.pricing.cta.kicker}</p>
            <h2>${h.pricing.cta.title}</h2>
            <p class="cta-copy">${h.pricing.cta.copy}</p>
          </div>
          <div class="cta-actions">
            <a class="pill pill-dark" href="./faq.html"><span>${h.pricing.cta.primary}</span> <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>
            <a class="pill pill-light" aria-disabled="true"><span>${h.pricing.cta.secondary}</span> <img src="${assets}assets/figma/arrow-down.svg" alt="" /></a>
          </div>
        </div>
      </section>
    </main>`
}

// The column heads are the plan names themselves, so a renamed tier can never
// drift between the cards and the table below them.
const planTable = (h, assets) => {
  const c = h.pricing.compare
  return html`              <div class="plan-table-wrap">
                <table aria-label="${c.label}">
                  <thead>
                    <tr><th></th>${h.pricing.plans.map((plan) => `<th>${plan.name}</th>`).join('')}</tr>
                  </thead>
                  <tbody>
${c.rows.map((row) => `                    <tr><th${row.strong ? ' class="is-strong"' : ''}>${row.label}</th>${row.cells.map((cell) => statusCell(cell, h, assets, true)).join('')}</tr>`).join('\n')}
                  </tbody>
                </table>
                <p class="plan-table-note">${c.note}</p>
              </div>`
}

const priceCard = (plan, h, assets) => {
  const price = plan.period ? `${plan.price} <small>${h.pricing.perYear}</small>` : plan.price
  const cta = plan.featured
    ? `<a class="pill business-cta" href="#top">${plan.cta} <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>`
    : `<a href="#top"><span>${plan.cta}</span> <img src="${assets}assets/figma/arrow-cta.svg" alt="" /></a>`
  return html`          <article class="price-card${plan.featured ? ' featured' : ''}">
${plan.featured ? `            <div class="popular">${h.pricing.popular}</div>\n` : ''}            <h3>${plan.name}</h3>
            <p class="price">${price}</p>
            <p>${plan.summary}</p>
            <ul>${plan.points.map((p) => `<li>${p}</li>`).join('')}</ul>
            ${cta}
          </article>`
}
