// French copy. Prices in euros, formatted the French way — the symbol follows
// the number, with a non-breaking space in front of it.

export default {
  meta: {
    home: {
      title: 'Lingo — Un seul article. Toutes les langues.',
      description: 'Lingo garde WordPress multilingue au propre : un seul article canonique, toutes les langues.'
    },
    faq: {
      title: 'Lingo — Questions fréquentes',
      description: 'Tout sur l’architecture à un seul article, la migration depuis WPML, le SEO, WooCommerce et les formules.'
    }
  },

  nav: {
    features: 'Fonctions',
    compare: 'Comparer',
    pricing: 'Tarifs',
    faq: 'FAQ',
    startFree: 'Essai gratuit',
    home: 'Accueil Lingo',
    primary: 'Navigation principale',
    sticky: 'Navigation fixe',
    footerNav: 'Navigation du pied de page',
    language: 'Changer de langue'
  },

  notice: {
    free: 'Gratuit pour toujours pour une langue supplémentaire',
    promo: 'Durée limitée : 10 % de remise sur Pro',
    migrate: 'Migrer depuis WPML',
    viewPricing: 'Voir tous les tarifs'
  },

  footer: {
    docs: 'Documentation',
    faq: 'FAQ',
    pricing: 'Tarifs',
    contact: 'Contact',
    copyright: '© 2026 Lingo. Fait pour voyager.'
  },

  home: {
    hero: {
      eyebrow: 'La couche multilingue de WordPress',
      lines: ['Un seul article.', 'Toutes les langues.'],
      copy: 'Traduisez WordPress sans dupliquer votre contenu. Un seul article canonique. Des URL propres. Hreflang automatique. Conçu pour rester rapide.',
      proofLabel: 'Bénéfices clés',
      proof: ['Un seul article canonique', 'Aucun article dupliqué', 'URL propres &amp; hreflang', 'Migration depuis WPML'],
      ctaPrimary: 'Commencer avec Lingo',
      ctaSecondary: 'Comment ça marche',
      micro: 'Gratuit pour une langue supplémentaire <span>/</span> WPML non requis'
    },

    how: {
      kicker: 'Comment ça marche',
      title: 'Votre site n’a pas à se multiplier pour parler.',
      intro: 'La plupart des extensions multilingues créent un nouvel article par langue. C’est un contournement, pas un système. Lingo garde l’original entier et laisse chaque langue vivre à côté de lui.',
      oldLabel: 'L’ancienne méthode',
      oldTitle: 'Plus de langues.<br />Plus de désordre.',
      oldFoot: 'Des ID séparés. Des articles séparés. Plus de maintenance.',
      newLabel: 'La méthode lingo',
      newTitle: 'Un seul pour tous.',
      languages: 'langues',
      newFoot: 'Des ID stables. Un admin propre. Chaque champ, traduit.'
    },

    features: {
      kicker: 'Fonctions',

      migration: {
        title: 'Laissez le superflu.<br />Gardez <em>tout le reste.</em>',
        ledeTitle: 'Migrez en confiance',
        lede: 'Voyez ce qui va changer avant que cela change. Migrez votre contenu existant en une commande, avec une annulation prête quand vous en avez besoin.',
        steps: [
          { n: '01', title: 'Aperçu', copy: 'Lancez un test à blanc gratuit. Sachez quels articles et quelles langues Lingo va reprendre.' },
          { n: '02', title: 'Appliquer', copy: 'Migrez depuis WPML, Polylang, qTranslate-XT ou TranslatePress.' },
          { n: '03', title: 'Annuler', copy: 'Vous changez d’avis ? Revenez en arrière sans risque. Le contenu d’origine reste intact.' }
        ],
        guide: 'Guide de migration',
        terminalLabel: 'Terminal montrant un test à blanc de migration Lingo réussi',
        terminalTitle: 'Terminal',
        terminal: [
          '~ wp lingo wpml-dryrun',
          '✓ 248 articles prêts à migrer',
          '✓ 8 langues détectées',
          'Aucun contenu ne sera détruit.'
        ]
      },

      editor: {
        title: 'Traduisez là où<br />vous écrivez déjà.',
        ledeTitle: 'Intégré à WordPress',
        lede: 'Lingo vit dans l’éditeur de blocs. Changez de langue, copiez votre original comme point de départ, puis rendez-le local.',
        pointsTitle: 'Ne traduisez que<br />ce qui doit l’être.',
        points: [
          'Titres, contenu et extraits',
          'Champs personnalisés et taxonomies',
          'Textes alternatifs et légendes',
          'Le contenu source reste intact'
        ],
        demoLabel: 'Démo interactive de l’éditeur WordPress multilingue',
        canvasKicker: 'ARTICLE / DÉMO LINGO',
        previewLabel: 'Langue d’aperçu',
        build: 'Créer'
      },

      seo: {
        title: 'Un seul site.<br />Partout.',
        ledeTitle: 'Le SEO, sans acrobaties',
        lede: 'URL propres, alternates corrects et métadonnées conscientes de la langue — prêts avant votre première traduction.',
        defaultLanguage: 'Langue par défaut',
        more: 'Et plus'
      },

      commerce: {
        title: 'Une boutique.<br />Tous vos clients.',
        ledeTitle: 'WooCommerce, intégré',
        lede: 'Traduisez produits, catégories, attributs et tout le parcours d’achat — de /shop au paiement — sans autre extension.',
        copy: 'Traduction WooCommerce intégrée pour les produits, catégories, panier, paiement et comptes clients.',
        productAlt: 'Jus d’orange, raisin et poire'
      },

      supporting: [
        { icon: 'icon-theme', title: 'Compatible avec tout thème.', copy: 'Bloc, shortcode, widget, menu ou balise de template.' },
        { icon: 'icon-code', title: 'Pensé pour les développeurs.', copy: 'API REST, hooks, filtres et commandes WP-CLI.' },
        { icon: 'icon-lock', title: 'Vos données restent les vôtres.', copy: 'Stockage autonome. Aucune dépendance à un tiers.' },
        { icon: 'icon-update', title: 'Mises à jour natives WordPress.', copy: 'Mises à jour auto-hébergées via le gestionnaire natif de WordPress.' },
        { icon: 'icon-acf', title: 'Fonctionne avec ACF.', copy: 'Traduisez les champs personnalisés sans extension supplémentaire.' },
        { icon: 'icon-search', title: 'Prêt pour la recherche.', copy: 'Hreflang automatique et métadonnées localisées.' }
      ],
      makeSense: 'Rendez enfin<br />WordPress <em>cohérent.</em>'
    },

    comparison: {
      kicker: 'Comparaison',
      title: 'Voyez la différence.',
      intro: 'Lingo se concentre sur l’essentiel : une architecture propre, des workflows natifs et la pleine propriété de votre contenu. Comparez les points clés d’un coup d’œil.',
      yes: 'Oui',
      no: 'Non',
      partial: 'Pris en charge',
      rows: [
        { label: 'Un seul article canonique', cells: ['yes', 'no', 'no'] },
        { label: 'Aucun article dupliqué', cells: ['yes', 'no', 'no'] },
        { label: 'Édition Gutenberg native', cells: ['yes', 'Workflow séparé', 'no'] },
        { label: 'Migration intégrée', cells: ['yes', 'no', 'Outils d’import'] },
        { label: 'WooCommerce', cells: ['yes', 'Extension', 'Extension'] },
        { label: 'Hreflang automatique', cells: ['yes', 'partial', 'partial'] },
        { label: 'API REST &amp; WP-CLI', cells: ['yes', 'partial', 'Partiel'] },
        { label: 'Architecture autonome', cells: ['yes', 'no', 'partial'] }
      ]
    },

    pricing: {
      kicker: 'Tarifs',
      title: 'Commencez petit. Allez partout',
      intro: 'Toutes les formules partagent le même cœur. Choisissez l’échelle qui correspond à votre travail.',
      popular: 'Le plus choisi',
      perYear: '/ an',
      plans: [
        {
          name: 'Free',
          price: '0 €',
          summary: 'Une langue secondaire',
          points: ['Tous les outils de traduction', 'URL propres + hreflang', 'Aperçu de migration + annulation'],
          cta: 'Obtenir la version gratuite'
        },
        {
          name: 'Business',
          price: '119 €',
          period: true,
          featured: true,
          summary: 'Cinq sites. Langues illimitées',
          points: ['<strong>Tout ce qu’il y a dans Free</strong>', 'Migration en une commande', 'Traduction WooCommerce', 'Support prioritaire + mises à jour'],
          cta: 'Choisir Business'
        },
        {
          name: 'Agency',
          price: '189 €',
          period: true,
          summary: 'Sites illimités pour vos clients',
          points: ['<strong>Tout ce qu’il y a dans Business</strong>', 'Activations de sites illimitées', 'Pensé pour la livraison client'],
          cta: 'Choisir Agency'
        }
      ],
      trust: ['Garantie 7 jours satisfait ou remboursé', 'Vos données restent les vôtres', 'WPML non requis'],
      cta: {
        kicker: 'Encore hésitant ?',
        title: 'Essayez sur une langue.<br />Décidez avec votre propre site.',
        copy: 'La version gratuite couvre une langue supplémentaire — traduisez une page et regardez <em>/fr/</em> passer en ligne avant de dépenser quoi que ce soit. Des questions d’abord ? Écrivez à <a href="mailto:hello@lingo.com">hello@lingo.com</a>.',
        primary: 'Lire la FAQ',
        secondary: 'Documentation'
      }
    }
  },

  faq: {
    hero: {
      eyebrow: 'Centre d’aide',
      lines: ['Vos questions,', 'nos réponses.'],
      copy: 'Tout sur l’architecture à un seul article, la migration depuis WPML, le SEO, WooCommerce et les formules — en clair.'
    },
    cta: {
      kicker: 'Toujours bloqué ?',
      title: 'Posez-nous n’importe quoi.<br />On répond comme des développeurs.',
      copy: 'Si votre question n’est pas ici, c’est sans doute une bonne question. Envoyez-la à <a href="mailto:hello@lingo.com">hello@lingo.com</a> et vous aurez une réponse directe.',
      primary: 'Voir les tarifs',
      secondary: 'Documentation'
    },

    groups: [
      {
        id: 'general',
        chip: 'Général',
        index: '01 / Général',
        title: 'Les bases',
        lede: 'Ce qu’est Lingo, ce qu’il fait à votre base de données, et ce qu’il ne fait délibérément pas.',
        items: [
          { q: 'Qu’est-ce que Lingo, exactement ?', a: ['Une couche multilingue pour WordPress. Lingo garde un seul article canonique et stocke chaque langue dans une table annexe compacte, indexée par champ et par code de langue. Vous obtenez une traduction champ par champ, des URL <code>/{code}/</code> propres et du hreflang automatique — sans une suite de gestion de traduction posée sur votre site.'] },
          { q: 'Dois-je installer WPML ou Polylang ?', a: ['Non. Lingo est autonome, avec son propre stockage et ses propres API. Il peut <em>importer</em> depuis WPML, Polylang, qTranslate-XT et TranslatePress, mais il n’en dépend jamais à l’exécution.'] },
          { q: 'Lingo va-t-il dupliquer mes articles ?', a: ['Non. C’est tout l’intérêt. Un seul article canonique garde son ID ; les traductions vivent à côté. Vos listes d’articles, vos permaliens et votre admin restent exactement aussi longs qu’aujourd’hui, que vous ayez deux langues ou huit.'] },
          { q: 'Lingo traduit-il mon contenu automatiquement ?', a: ['Non — Lingo est une <em>couche</em> de traduction, pas un moteur de traduction. Vous ou votre traducteur écrivez chaque langue ; Lingo la stocke, la route et la sert. <em>Copier depuis la langue par défaut</em> place votre texte source dans la langue cible comme point de départ, pour ne jamais faire face à un champ vide.'] },
          { q: 'Est-ce que tout cela passe par un service tiers ?', a: ['Non. Lingo est auto-hébergé. Vos traductions sont dans votre propre base de données et aucun service externe ne se place sur le chemin des requêtes. Si vous partez un jour, les données restent les vôtres.'] },
          { q: 'Combien de langues puis-je gérer ?', a: ['La version gratuite couvre une langue supplémentaire, avec le moteur de traduction complet derrière — rien n’est bridé. Les formules payantes lèvent la limite.'] }
        ]
      },
      {
        id: 'migration',
        chip: 'Migration',
        index: '02 / Migration',
        title: 'L’emménagement',
        lede: 'Prévisualisez, appliquez, annulez. Changer d’outil ne devrait jamais ressembler à un saut dans le vide.',
        items: [
          { q: 'Depuis quelles extensions puis-je migrer ?', a: ['WPML, Polylang, qTranslate-XT et TranslatePress. Chacune a son propre importeur, la correspondance suit donc la façon dont cette extension stockait réellement vos traductions.'] },
          { q: 'Quel est le risque de changer ?', a: ['Faible, par conception. Lancez d’abord le test à blanc — il est gratuit et n’écrit rien. Appliquez quand les chiffres vous conviennent. Annulez quand vous voulez. Votre contenu d’origine n’est jamais détruit, à aucune étape.'] },
          { q: 'Que montre exactement le test à blanc ?', a: ['Chaque article et chaque langue que Lingo reprendrait, avant qu’une seule ligne ne soit écrite :', '<code>wp lingo wpml-dryrun</code> → puis <code>wp lingo wpml-migrate</code> quand vous êtes prêt.'] },
          { q: 'Qu’est-ce qui est importé ?', a: ['Vos titres, contenus et extraits traduits, les champs personnalisés, les termes de taxonomie et leurs descriptions, ainsi que les textes de médias — rattachés à l’article canonique auquel ils appartiennent, avec leurs assignations de langue intactes.'] },
          { q: 'Puis-je vraiment annuler ?', a: ['Oui. L’annulation défait ce que la migration a écrit dans Lingo. Ce que votre ancienne extension stockait reste où il était, vous pouvez donc revenir en arrière, ajuster et relancer.'] },
          { q: 'Dois-je garder l’ancienne extension installée ?', a: ['Seulement le temps de vérifier le résultat. Une fois que le front-end est correct dans chaque langue, l’ancienne extension peut être désactivée — Lingo n’y lit plus rien après l’import.'] }
        ]
      },
      {
        id: 'seo',
        chip: 'SEO &amp; URL',
        index: '03 / SEO &amp; URL',
        title: 'La recherche, préservée',
        lede: 'Des routes propres et des alternates corrects, prêts avant votre première traduction.',
        items: [
          { q: 'À quoi ressemblent mes URL ?', a: ['Votre langue par défaut reste à la racine — <code>example.com/about/</code> — et chaque autre langue se place sous son code : <code>example.com/fr/about/</code>. Aucune chaîne de requête, aucun sous-domaine à configurer.'] },
          { q: 'Le hreflang est-il automatique ?', a: ['Oui — les alternates hreflang ainsi que <code>x-default</code> sont émis pour vous. Aucune étape d’annotation, rien à maintenir à la main quand vous ajoutez une langue.'] },
          { q: 'Cela ne crée-t-il pas du contenu dupliqué ?', a: ['Non. Chaque langue a sa propre URL et les alternates sont déclarés, ce qui est exactement le signal que les moteurs de recherche attendent. Une structure canonique, plusieurs versions linguistiques.'] },
          { q: 'Est-ce compatible avec Yoast, RankMath ou SEOPress ?', a: ['Oui. Les titres et métadonnées se résolvent par langue, l’extension SEO que vous utilisez déjà continue donc de fonctionner au lieu d’être remplacée.'] },
          { q: 'Puis-je traduire les slugs ?', a: ['Oui — les slugs sont traduisibles par langue, un lecteur francophone obtient donc une URL française plutôt qu’une URL anglaise affublée d’un préfixe <code>/fr/</code>.'] }
        ]
      },
      {
        id: 'editing',
        chip: 'Édition',
        index: '04 / Édition',
        title: 'Écrire &amp; traduire',
        lede: 'Lingo vit dans l’éditeur de blocs. Il n’y a pas de second espace de travail à apprendre.',
        items: [
          { q: 'Où est-ce que je traduis concrètement ?', a: ['Dans l’article que vous êtes déjà en train d’éditer. Un panneau <em>Langue (Lingo)</em> change la langue d’édition, et l’éditeur continue de se comporter comme l’éditeur — mêmes blocs, mêmes raccourcis, même aperçu.'] },
          { q: 'Quels champs peuvent être traduits ?', a: ['Titres, contenu et extraits ; champs personnalisés, y compris ACF et méta simples ; termes de taxonomie et leurs descriptions ; textes alternatifs et légendes de médias. Traduisez ce qui doit l’être et laissez le reste tranquille.'] },
          { q: 'Puis-je écraser ma langue source par erreur ?', a: ['Le contenu de votre langue source n’est jamais écrasé par une traduction. <em>Copier depuis la langue par défaut</em> ne copie jamais que <em>vers</em> la langue sur laquelle vous travaillez.'] },
          { q: 'Et les blocs Gutenberg ?', a: ['Les blocs natifs se traduisent comme du <code>post_content</code> ordinaire et sont rendus par le pipeline de blocs de WordPress lui-même — pas de moteur de rendu parallèle, pas de table de correspondance bloc par bloc.'] },
          { q: 'Comment traduire les textes d’interface des thèmes et extensions ?', a: ['Via un registre de chaînes simple. Une couche de compatibilité <code>pll__</code> / <code>icl_</code> permet aux thèmes conçus pour Polylang ou WPML de continuer à fonctionner après la migration, vous ne réécrivez donc pas votre code de template dès le premier jour.'] },
          { q: 'Où puis-je placer le sélecteur de langue ?', a: ['Partout où votre thème a de la place : le shortcode <code>[lingo_switcher]</code>, un widget, un bloc Sélecteur de langue, des éléments de langue dans <em>Apparence → Menus</em>, ou la balise de template <code>lingo_language_switcher()</code>. Styles liste, en ligne ou menu déroulant.'] }
        ]
      },
      {
        id: 'woocommerce',
        chip: 'WooCommerce',
        index: '05 / WooCommerce',
        title: 'Vendre dans toutes les langues',
        lede: 'Intégré, pas rajouté — aucune extension commerce séparée à acheter.',
        items: [
          { q: 'Faut-il une extension supplémentaire pour WooCommerce ?', a: ['Non. La traduction WooCommerce fait partie des formules payantes plutôt que d’être un achat séparé.'] },
          { q: 'Que puis-je traduire dans une boutique ?', a: ['Les titres et descriptions de produits, les catégories de produits et les valeurs d’attributs de variation — le texte qu’un client lit réellement avant de décider.'] },
          { q: 'Le panier, le paiement et les comptes suivent-ils la langue ?', a: ['Oui — tout le parcours reste sous le même préfixe de langue, de <code>/fr/shop</code> au panier et au paiement jusqu’au compte client.'] },
          { q: 'Lingo gère-t-il plusieurs devises ?', a: ['Non, et il ne prétend pas le faire. Lingo traduit le contenu et route les URL ; le prix et la devise restent l’affaire de WooCommerce et de l’extension de devise que vous utilisez déjà.'] }
        ]
      },
      {
        id: 'plans',
        chip: 'Formules &amp; support',
        index: '06 / Formules &amp; support',
        title: 'Acheter &amp; se faire aider',
        lede: 'Ce que couvre chaque formule, comment arrivent les mises à jour, et où se trouve la surface développeur.',
        items: [
          { q: 'Que contient la version gratuite ?', a: ['Une langue supplémentaire et le cœur complet : traduction champ par champ, URL propres, hreflang automatique, le sélecteur, et l’aperçu de migration avec annulation. C’est une vraie porte d’entrée, pas une démo.'] },
          { q: 'Qu’ajoutent les formules payantes ?', a: ['Des langues illimitées, la migration en une commande (l’appliquer, pas seulement la prévisualiser), la traduction des produits WooCommerce, et un support prioritaire avec mises à jour automatiques.'] },
          { q: 'De quelle formule ai-je besoin pour des sites clients ?', a: ['Business couvre cinq sites à 119 € par an. Agency est à 189 € par an avec des activations de sites illimitées — celle à prendre si le multilingue fait normalement partie de ce que vous livrez à vos clients.'] },
          { q: 'Puis-je être remboursé ?', a: ['Oui — il y a une garantie satisfait ou remboursé de 7 jours sur les formules payantes. Et vous pouvez utiliser la version gratuite aussi longtemps que vous voulez avant de décider.'] },
          { q: 'Puis-je changer de formule plus tard ?', a: ['Oui. Vos traductions vivent dans votre propre base de données, passer d’une formule à l’autre est donc un changement de licence — jamais une migration de contenu.'] },
          { q: 'Comment fonctionnent les mises à jour ?', a: ['Par l’écran de mises à jour habituel de WordPress. Les mises à jour payantes sont auto-hébergées et vérifiées, il n’y a donc pas de tableau de bord séparé où se connecter et rien de nouveau à apprendre à un client.'] },
          { q: 'Existe-t-il une API pour les développeurs ?', a: ['Oui : commandes WP-CLI, résolution de langue via l’API REST, et un ensemble documenté de hooks et de filtres. Automatisez les parties ennuyeuses et laissez le reste aux rédacteurs.'] }
        ]
      }
    ]
  }
}
