// All English copy. Values are raw HTML — inline <em>, <code> and <br /> are
// part of the sentence and belong with the translator, not the template.

export default {
  meta: {
    home: {
      title: 'Lingo — One post. Every language.',
      description: 'Lingo keeps multilingual WordPress clean: one canonical post, every language.'
    },
    faq: {
      title: 'Lingo — Frequently asked questions',
      description: 'Answers about Lingo — how the one-post architecture works, migrating off WPML, SEO, WooCommerce, plans and support.'
    }
  },

  nav: {
    features: 'Features',
    compare: 'Compare',
    pricing: 'Pricing',
    faq: 'FAQ',
    startFree: 'Start Free',
    home: 'Lingo home',
    primary: 'Primary navigation',
    sticky: 'Sticky navigation',
    footerNav: 'Footer navigation',
    language: 'Change language'
  },

  notice: {
    free: 'Unlimited languages on every plan, free included',
    promo: 'Limited time Save 10% on Pro',
    migrate: 'Migrate from WPML',
    viewPricing: 'View all pricing'
  },

  footer: {
    docs: 'Documentation',
    faq: 'FAQ',
    pricing: 'Pricing',
    contact: 'Contact',
    copyright: '© 2026 Lingo. Built to travel.'
  },

  home: {
    hero: {
      eyebrow: 'The multilingual layer for WordPress',
      lines: ['One post.', 'Every language.'],
      copy: 'Translate WordPress without duplicates. One canonical post. Clean URLs. Automatic hreflang. Built to stay fast.',
      proofLabel: 'Core benefits',
      proof: ['One canonical post', 'No duplicated posts', 'Clean URLs &amp; hreflang', 'Migrate from WPML'],
      ctaPrimary: 'Start with Lingo',
      ctaSecondary: 'How it works',
      micro: 'Unlimited languages on the free version <span>/</span> No WPML required'
    },

    how: {
      kicker: 'How it works',
      title: 'Your site should not multiply to speak.',
      intro: 'Most multilingual plugins create a new post for every language. That is a workaround, not a system. Lingo keeps the original whole and lets every language live alongside it.',
      oldLabel: 'The old way',
      oldTitle: 'More languages.<br />More mess.',
      oldFoot: 'Separate IDs. Separate posts. More to maintain.',
      newLabel: 'The lingo way',
      newTitle: 'One for all.',
      languages: 'languages',
      newFoot: 'Stable IDs. A clean admin. Every field, translated.'
    },

    features: {
      kicker: 'Features',

      migration: {
        title: 'Leave the bloat.<br />Keep <em>everything.</em>',
        ledeTitle: 'Move With Confidence',
        lede: 'See what will change before it does. Migrate your existing content in one command, with an undo ready when you need it.',
        steps: [
          { n: '01', title: 'Preview', copy: 'Run a free dry-run. Know every post and language Lingo will bring across.' },
          { n: '02', title: 'Apply', copy: 'Move from WPML, Polylang, qTranslate-XT or TranslatePress.' },
          { n: '03', title: 'Undo', copy: 'Change your mind? Reverse safely. Original content stays intact.' }
        ],
        guide: 'Migration guide',
        terminalLabel: 'Terminal showing a successful Lingo migration dry run',
        terminalTitle: 'Terminal',
        terminal: [
          '~ wp lingo wpml-dryrun',
          '✓ 248 posts ready to migrate',
          '✓ 8 languages found',
          'No content will be destroyed.'
        ]
      },

      editor: {
        title: 'Translate where<br />you already write.',
        ledeTitle: 'Built into WordPress',
        lede: 'Lingo lives inside the block editor. Switch a language, copy your original as a starting point, then make it local.',
        pointsTitle: 'Only translate<br />what needs translating.',
        points: [
          'Titles, content and excerpts',
          'Custom fields and taxonomies',
          'Media alt text and captions',
          'Source content stays untouched'
        ],
        demoLabel: 'Interactive multilingual WordPress editor demo',
        canvasKicker: 'POST / LINGO DEMO',
        previewLabel: 'Preview language',
        build: 'Build'
      },

      seo: {
        title: 'One site.<br />Everywhere.',
        ledeTitle: 'SEO, without the gymnastics',
        lede: 'Clean URLs, correct alternates and language-aware metadata — ready before your first translation ships.',
        defaultLanguage: 'Default language',
        more: 'More'
      },

      commerce: {
        title: 'One store.<br />Every customer.',
        ledeTitle: 'WooCommerce, built in',
        lede: 'Translate products, categories, attributes, and the entire shopping journey — from /shop to checkout — without another plugin.',
        copy: 'Built-in WooCommerce translation for products, categories, cart, checkout and customer accounts.',
        productAlt: 'Orange, grape and pear juice product'
      },

      supporting: [
        { icon: 'icon-theme', title: 'Fits any theme.', copy: 'Block, shortcode, widget, menu or template tag.' },
        { icon: 'icon-code', title: 'Built for developers.', copy: 'REST API, hooks, filters, and WP-CLI commands.' },
        { icon: 'icon-lock', title: 'Your data stays yours.', copy: 'Standalone storage. No third-party lock-in.' },
        { icon: 'icon-update', title: 'Native WordPress updates.', copy: 'Self-hosted updates through the native WordPress updater.' },
        { icon: 'icon-acf', title: 'Works with ACF.', copy: 'Translate custom fields without extra plugins.' },
        { icon: 'icon-search', title: 'Search-ready by default.', copy: 'Automatic hreflang and localized metadata.' }
      ],
      makeSense: 'Just make<br />WordPress <em>make sense.</em>'
    },

    comparison: {
      kicker: 'Comparison',
      title: 'See the difference.',
      intro: 'Lingo focuses on what matters most: clean architecture, native workflows, and complete ownership of your content. Compare the essentials at a glance.',
      yes: 'Yes',
      no: 'No',
      partial: 'Supported',
      rows: [
        { label: 'One canonical post', cells: ['yes', 'no', 'no'] },
        { label: 'No duplicated posts', cells: ['yes', 'no', 'no'] },
        { label: 'Native Gutenberg editing', cells: ['yes', 'Separate workflow', 'no'] },
        { label: 'Built-in migration', cells: ['yes', 'no', 'Import tools'] },
        { label: 'WooCommerce', cells: ['yes', 'Add-on', 'Add-on'] },
        { label: 'Automatic hreflang', cells: ['yes', 'partial', 'partial'] },
        { label: 'REST API &amp; WP-CLI', cells: ['yes', 'partial', 'Partial support'] },
        { label: 'Standalone architecture', cells: ['yes', 'no', 'partial'] }
      ]
    },

    pricing: {
      kicker: 'Pricing',
      title: 'Start small. Go everywhere',
      intro: 'Unlimited languages on every plan, including Free. You only pay for the number of sites you run — never for the number of languages you publish.',
      popular: 'Most Popular',
      perYear: '/ year',
      plans: [
        {
          name: 'Free',
          price: '$0',
          summary: 'Unlimited languages, one site',
          points: ['Unlimited languages', 'Per-field translation', 'Clean URLs + hreflang', 'Migration preview + undo'],
          cta: 'Get the free version'
        },
        {
          name: 'Single',
          price: '$69',
          period: true,
          summary: 'One site. Unlimited languages',
          points: ['<strong>Everything in Free</strong>', 'Apply migrations', 'WooCommerce translation', 'Machine translation'],
          cta: 'Get Single'
        },
        {
          name: 'Business',
          price: '$149',
          period: true,
          featured: true,
          summary: 'Five sites. Unlimited languages',
          points: ['<strong>Everything in Single</strong>', 'Editorial workflow', 'Priority support + updates', 'More MT included'],
          cta: 'Get Business'
        },
        {
          name: 'Agency',
          price: '$279',
          period: true,
          summary: 'Unlimited sites for client work',
          points: ['<strong>Everything in Business</strong>', 'Unlimited site activations', 'WP Multisite support', 'Built for client handoffs'],
          cta: 'Get Agency'
        }
      ],

      // Cells named yes/no become icons; anything else prints as written.
      compare: {
        show: 'Compare all plans',
        hide: 'Hide comparison',
        label: 'Feature comparison across plans',
        note: 'Every plan includes unlimited languages. Plans differ by the number of sites and the Pro features above.',
        rows: [
          { label: 'Price', strong: true, cells: ['<strong>$0</strong>', '<strong>$69</strong><small>/yr</small>', '<strong>$149</strong><small>/yr</small>', '<strong>$279</strong><small>/yr</small>'] },
          { label: 'Sites', strong: true, cells: ['1', '1', '5', 'Unlimited'] },
          { label: 'Languages', cells: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { label: 'Per-field translation', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'No duplicated posts', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Clean URLs + hreflang', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Language switcher', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'ACF + page builders', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'REST API + WP-CLI', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Migration preview + undo', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Apply migrations', cells: ['no', 'yes', 'yes', 'yes'] },
          { label: 'WooCommerce translation', cells: ['no', 'yes', 'yes', 'yes'] },
          { label: 'Machine translation', cells: ['no', '50k words/yr', '250k words/yr', '1M + top-ups'] },
          { label: 'Editorial workflow', cells: ['no', 'no', 'yes', 'yes'] },
          { label: 'WP Multisite', cells: ['no', 'no', 'no', 'yes'] },
          { label: 'Support', cells: ['Forum', 'Email', 'Priority', 'Priority + handoff'] }
        ]
      },

      lifetime: {
        badge: 'Founder’s offer — limited',
        title: 'Lifetime — five sites, pay once',
        copy: 'A capped launch offer: every Pro feature on five sites, updates for life, plus 12 months of priority support. When the seats are gone, they’re gone.',
        price: '$449',
        once: 'once',
        cta: 'Get Lifetime',
        seats: '100 of 100 seats left'
      },

      trust: ['14-day money-back guarantee', 'Unlimited languages on every plan', 'No WPML required'],
      cta: {
        kicker: 'Not sure yet?',
        title: 'Try it on one language.<br />Decide with your own site.',
        copy: 'The free version runs unlimited languages on one site — translate a page and watch <em>/fr/</em> go live before you spend anything. Questions first? Write to <a href="mailto:hello@lingo.com">hello@lingo.com</a>.',
        primary: 'Read the FAQ',
        secondary: 'Documentation'
      }
    }
  },

  faq: {
    hero: {
      eyebrow: 'Help centre',
      lines: ['Questions,', 'answered.'],
      copy: 'Everything about the one-post architecture, moving off WPML, SEO, WooCommerce and the plans — in plain language.'
    },
    cta: {
      kicker: 'Still stuck?',
      title: 'Ask us anything.<br />We answer like developers.',
      copy: 'If your question is not here, it is probably a good one. Send it to <a href="mailto:hello@lingo.com">hello@lingo.com</a> and you will get a straight answer.',
      primary: 'See pricing',
      secondary: 'Documentation'
    },

    groups: [
      {
        id: 'general',
        chip: 'General',
        index: '01 / General',
        title: 'The basics',
        lede: 'What Lingo is, what it does to your database, and what it deliberately does not do.',
        items: [
          { q: 'What exactly is Lingo?', a: ['A multilingual layer for WordPress. Lingo keeps one canonical post and stores every language in a compact side table, keyed by field and language code. You get per-field translation, clean <code>/{code}/</code> URLs and automatic hreflang — without a translation-management suite sitting on top of your site.'] },
          { q: 'Do I need WPML or Polylang installed?', a: ['No. Lingo is standalone, with its own storage and its own APIs. It can <em>import</em> from WPML, Polylang, qTranslate-XT and TranslatePress, but it never depends on any of them at runtime.'] },
          { q: 'Will Lingo duplicate my posts?', a: ['No. That is the whole point. One canonical post keeps its ID; the translations live beside it. Your post lists, permalinks and admin stay exactly as long as they are today, whether you run two languages or eight.'] },
          { q: 'Does Lingo translate my content automatically?', a: ['No — Lingo is a translation <em>layer</em>, not a translation engine. You or your translator write each language; Lingo stores it, routes it and serves it. <em>Copy from default</em> drops your source text into the target language as a starting point so you are never staring at an empty field.'] },
          { q: 'Is any of this running through a third-party service?', a: ['No. Lingo is self-hosted. Your translations sit in your own database and no external service sits in the request path. If you ever leave, the data is still yours to take.'] },
          { q: 'How many languages can I run?', a: ['As many as you like, on every plan — the free version included. Languages are never the thing you pay for: the plans differ by how many sites you run and by the Pro features on top.'] }
        ]
      },
      {
        id: 'migration',
        chip: 'Migration',
        index: '02 / Migration',
        title: 'Moving in',
        lede: 'Preview it, apply it, undo it. Nothing about switching should feel like a leap.',
        items: [
          { q: 'Which plugins can I migrate from?', a: ['WPML, Polylang, qTranslate-XT and TranslatePress. Each has its own importer, so the mapping follows how that plugin actually stored your translations.'] },
          { q: 'How risky is switching?', a: ['Low, by design. Run the dry-run first — it is free and writes nothing. Apply when the numbers look right. Undo whenever you want. Your original content is never destroyed at any step.'] },
          { q: 'What does the dry-run actually show me?', a: ['Every post and every language Lingo would bring across, before a single row is written:', '<code>wp lingo wpml-dryrun</code> → then <code>wp lingo wpml-migrate</code> when you are ready.'] },
          { q: 'What gets imported?', a: ['Your translated titles, content and excerpts, custom fields, taxonomy terms and descriptions, and media text — mapped onto the canonical post they belong to, with their language assignments intact.'] },
          { q: 'Can I really undo it?', a: ['Yes. The undo reverses what the migration wrote into Lingo. Whatever your old plugin stored is left where it was, so you can go back, adjust and run it again.'] },
          { q: 'Do I have to keep the old plugin installed?', a: ['Only while you are checking the result. Once the front end looks right in every language, the old plugin can be deactivated — Lingo does not read from it after the import.'] }
        ]
      },
      {
        id: 'seo',
        chip: 'SEO &amp; URLs',
        index: '03 / SEO &amp; URLs',
        title: 'Search, kept safe',
        lede: 'Clean routes and correct alternates, ready before your first translation ships.',
        items: [
          { q: 'What do my URLs look like?', a: ['Your default language stays at the root — <code>example.com/about/</code> — and every other language sits under its code: <code>example.com/fr/about/</code>. No query strings, no subdomains to set up.'] },
          { q: 'Is hreflang automatic?', a: ['Yes — hreflang alternates plus <code>x-default</code> are emitted for you. There is no annotation step and nothing to maintain by hand when you add a language.'] },
          { q: 'Won\'t this create duplicate content?', a: ['No. Each language has its own URL and the alternates are declared, which is exactly the signal search engines look for. One canonical structure, several language versions.'] },
          { q: 'Does it work with Yoast, RankMath or SEOPress?', a: ['Yes. Titles and meta resolve per language, so the SEO plugin you already use keeps working instead of being replaced.'] },
          { q: 'Can I translate slugs?', a: ['Yes — slugs are translatable per language, so a French reader gets a French URL rather than an English one wearing a <code>/fr/</code> prefix.'] }
        ]
      },
      {
        id: 'editing',
        chip: 'Editing',
        index: '04 / Editing',
        title: 'Writing &amp; translating',
        lede: 'Lingo lives inside the block editor. There is no second workspace to learn.',
        items: [
          { q: 'Where do I actually translate?', a: ['In the post you are already editing. A <em>Language (Lingo)</em> panel switches the editing language, and the editor keeps behaving like the editor — same blocks, same shortcuts, same preview.'] },
          { q: 'Which fields can be translated?', a: ['Titles, content and excerpts; custom fields, including ACF and plain meta; taxonomy terms and their descriptions; and media alt text and captions. Translate what needs translating and leave the rest alone.'] },
          { q: 'Can I overwrite my source language by mistake?', a: ['Your source-language content is never overwritten by a translation. <em>Copy from default</em> only ever copies <em>into</em> the language you are working on.'] },
          { q: 'What about Gutenberg blocks?', a: ['Core blocks translate as ordinary <code>post_content</code> and render through WordPress\'s own block pipeline — no parallel renderer, no block-by-block mapping table.'] },
          { q: 'How do I translate theme and plugin interface text?', a: ['Through a simple string registry. A <code>pll__</code> / <code>icl_</code> compatibility shim keeps themes that were built for Polylang or WPML working after you migrate, so you are not rewriting template code on day one.'] },
          { q: 'Where can I put the language switcher?', a: ['Wherever your theme has room: the <code>[lingo_switcher]</code> shortcode, a widget, a Language Switcher block, language items in <em>Appearance → Menus</em>, or the <code>lingo_language_switcher()</code> template tag. List, inline or dropdown styles.'] }
        ]
      },
      {
        id: 'woocommerce',
        chip: 'WooCommerce',
        index: '05 / WooCommerce',
        title: 'Selling in every language',
        lede: 'Built in, not bolted on — no separate commerce add-on to license.',
        items: [
          { q: 'Do I need an extra add-on for WooCommerce?', a: ['No. WooCommerce translation is part of the paid plans rather than a separate purchase.'] },
          { q: 'What can I translate in a store?', a: ['Product titles and descriptions, product categories, and variation attribute values — the copy a customer actually reads before deciding.'] },
          { q: 'Do cart, checkout and account pages follow the language?', a: ['Yes — the whole journey stays under the same language prefix, from <code>/fr/shop</code> through cart and checkout to the customer account.'] },
          { q: 'Does Lingo handle multiple currencies?', a: ['No, and it does not pretend to. Lingo translates content and routes URLs; pricing and currency stay with WooCommerce and whichever currency extension you already run.'] }
        ]
      },
      {
        id: 'plans',
        chip: 'Plans &amp; support',
        index: '06 / Plans &amp; support',
        title: 'Buying &amp; getting help',
        lede: 'What each plan covers, how updates arrive, and where the developer surface is.',
        items: [
          { q: 'What is included in the free version?', a: ['Unlimited languages on one site, and the complete core: per-field translation, clean URLs, automatic hreflang, the switcher, and the migration preview with undo. It is the honest on-ramp, not a demo.'] },
          { q: 'What do the paid plans add?', a: ['More sites, and the Pro features: applying a migration rather than only previewing it, WooCommerce product translation, machine translation, the editorial workflow, WP Multisite, and priority support with automatic updates.'] },
          { q: 'Which plan do I need for client sites?', a: ['Business covers five sites at $149 a year. Agency is $279 a year with unlimited site activations and WP Multisite — the one to take if multilingual is a normal part of what you hand over to clients.'] },
          { q: 'Can I get a refund?', a: ['Yes — there is a 14-day money-back guarantee on the paid plans. And you can run the free version for as long as you like before you decide.'] },
          { q: 'Can I change plan later?', a: ['Yes. Your translations live in your own database, so moving between plans is a licence change — never a content migration.'] },
          { q: 'How do updates work?', a: ['Through the normal WordPress updates screen. Paid updates are self-hosted and integrity-checked, so there is no separate dashboard to log into and nothing new to teach a client.'] },
          { q: 'Is there a developer API?', a: ['Yes: WP-CLI commands, language resolution over the REST API, and a documented set of hooks and filters. Automate the boring parts and leave the rest to the editors.'] }
        ]
      }
    ]
  }
}
