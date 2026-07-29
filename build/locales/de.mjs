// German copy. Prices in euros. German runs long, so the header CTA is
// "Gratis starten" rather than "Kostenlos starten" — the latter overflows the
// fixed-width button.

export default {
  meta: {
    home: {
      title: 'Lingo — Ein Beitrag. Alle Sprachen.',
      description: 'Lingo hält mehrsprachiges WordPress sauber: ein kanonischer Beitrag, alle Sprachen.'
    },
    faq: {
      title: 'Lingo — Häufige Fragen',
      description: 'Alles zur Ein-Beitrag-Architektur, zum Umstieg von WPML, zu SEO, WooCommerce und den Tarifen.'
    }
  },

  nav: {
    features: 'Funktionen',
    compare: 'Vergleich',
    pricing: 'Preise',
    faq: 'FAQ',
    startFree: 'Gratis starten',
    home: 'Lingo Startseite',
    primary: 'Hauptnavigation',
    sticky: 'Fixierte Navigation',
    footerNav: 'Fußzeilen-Navigation',
    language: 'Sprache wechseln'
  },

  notice: {
    free: 'Dauerhaft gratis für eine zusätzliche Sprache',
    promo: 'Nur kurze Zeit: 10 % Rabatt auf Pro',
    migrate: 'Von WPML migrieren',
    viewPricing: 'Alle Preise ansehen'
  },

  footer: {
    docs: 'Dokumentation',
    faq: 'FAQ',
    pricing: 'Preise',
    contact: 'Kontakt',
    copyright: '© 2026 Lingo. Zum Reisen gebaut.'
  },

  home: {
    hero: {
      eyebrow: 'Die mehrsprachige Ebene für WordPress',
      lines: ['Ein Beitrag.', 'Alle Sprachen.'],
      copy: 'Übersetzen Sie WordPress, ohne Ihre Inhalte zu duplizieren. Ein kanonischer Beitrag. Saubere URLs. Automatisches hreflang. Gebaut, um schnell zu bleiben.',
      proofLabel: 'Zentrale Vorteile',
      proof: ['Ein kanonischer Beitrag', 'Keine duplizierten Beiträge', 'Saubere URLs &amp; hreflang', 'Umstieg von WPML'],
      ctaPrimary: 'Mit Lingo starten',
      ctaSecondary: 'So funktioniert es',
      micro: 'Gratis für eine zusätzliche Sprache <span>/</span> Kein WPML nötig'
    },

    how: {
      kicker: 'So funktioniert es',
      title: 'Ihre Website muss sich nicht vervielfachen, um zu sprechen.',
      intro: 'Die meisten Mehrsprachigkeits-Plugins legen für jede Sprache einen neuen Beitrag an. Das ist ein Workaround, kein System. Lingo lässt das Original ganz und stellt jede Sprache daneben.',
      oldLabel: 'Der alte Weg',
      oldTitle: 'Mehr Sprachen.<br />Mehr Chaos.',
      oldFoot: 'Getrennte IDs. Getrennte Beiträge. Mehr zu pflegen.',
      newLabel: 'Der Lingo-Weg',
      newTitle: 'Einer für alle.',
      languages: 'Sprachen',
      newFoot: 'Stabile IDs. Ein sauberes Backend. Jedes Feld, übersetzt.'
    },

    features: {
      kicker: 'Funktionen',

      migration: {
        title: 'Lassen Sie den Ballast.<br />Nehmen Sie <em>alles</em> mit.',
        ledeTitle: 'Umziehen mit Sicherheit',
        lede: 'Sehen Sie, was sich ändert, bevor es sich ändert. Migrieren Sie vorhandene Inhalte mit einem Befehl — das Rückgängigmachen liegt bereit, wenn Sie es brauchen.',
        steps: [
          { n: '01', title: 'Vorschau', copy: 'Starten Sie einen kostenlosen Testlauf. Sehen Sie jeden Beitrag und jede Sprache, die Lingo übernimmt.' },
          { n: '02', title: 'Anwenden', copy: 'Wechseln Sie von WPML, Polylang, qTranslate-XT oder TranslatePress.' },
          { n: '03', title: 'Rückgängig', copy: 'Anders überlegt? Sicher zurückrollen. Die Originalinhalte bleiben unversehrt.' }
        ],
        guide: 'Migrationsleitfaden',
        terminalLabel: 'Terminal mit einem erfolgreichen Lingo-Migrationstestlauf',
        terminalTitle: 'Terminal',
        terminal: [
          '~ wp lingo wpml-dryrun',
          '✓ 248 Beiträge bereit zur Migration',
          '✓ 8 Sprachen gefunden',
          'Es werden keine Inhalte zerstört.'
        ]
      },

      editor: {
        title: 'Übersetzen Sie dort,<br />wo Sie ohnehin schreiben.',
        ledeTitle: 'In WordPress eingebaut',
        lede: 'Lingo lebt im Block-Editor. Sprache wechseln, das Original als Ausgangspunkt kopieren, und daraus etwas Lokales machen.',
        pointsTitle: 'Übersetzen Sie nur,<br />was übersetzt werden muss.',
        points: [
          'Titel, Inhalte und Auszüge',
          'Benutzerdefinierte Felder und Taxonomien',
          'Alt-Texte und Bildunterschriften',
          'Der Quellinhalt bleibt unberührt'
        ],
        demoLabel: 'Interaktive Demo des mehrsprachigen WordPress-Editors',
        canvasKicker: 'BEITRAG / LINGO-DEMO',
        previewLabel: 'Vorschausprache',
        build: 'Erstellen'
      },

      seo: {
        title: 'Eine Website.<br />Überall.',
        ledeTitle: 'SEO, ohne Verrenkungen',
        lede: 'Saubere URLs, korrekte Alternates und sprachbewusste Metadaten — fertig, bevor Ihre erste Übersetzung online geht.',
        defaultLanguage: 'Standardsprache',
        more: 'Und mehr'
      },

      commerce: {
        title: 'Ein Shop.<br />Alle Kunden.',
        ledeTitle: 'WooCommerce, eingebaut',
        lede: 'Übersetzen Sie Produkte, Kategorien, Attribute und die gesamte Einkaufsstrecke — von /shop bis zur Kasse — ohne weiteres Plugin.',
        copy: 'Eingebaute WooCommerce-Übersetzung für Produkte, Kategorien, Warenkorb, Kasse und Kundenkonten.',
        productAlt: 'Orangen-Trauben-Birnen-Saft'
      },

      supporting: [
        { icon: 'icon-theme', title: 'Passt zu jedem Theme.', copy: 'Block, Shortcode, Widget, Menü oder Template-Tag.' },
        { icon: 'icon-code', title: 'Für Entwickler gebaut.', copy: 'REST-API, Hooks, Filter und WP-CLI-Befehle.' },
        { icon: 'icon-lock', title: 'Ihre Daten bleiben Ihre.', copy: 'Eigenständige Speicherung. Keine Abhängigkeit von Dritten.' },
        { icon: 'icon-update', title: 'Native WordPress-Updates.', copy: 'Selbst gehostete Updates über die native WordPress-Aktualisierung.' },
        { icon: 'icon-acf', title: 'Funktioniert mit ACF.', copy: 'Benutzerdefinierte Felder ohne Zusatz-Plugins übersetzen.' },
        { icon: 'icon-search', title: 'Von Anfang an suchfertig.', copy: 'Automatisches hreflang und lokalisierte Metadaten.' }
      ],
      makeSense: 'Machen Sie WordPress<br />endlich <em>schlüssig.</em>'
    },

    comparison: {
      kicker: 'Vergleich',
      title: 'Sehen Sie den Unterschied.',
      intro: 'Lingo konzentriert sich auf das Wesentliche: saubere Architektur, native Arbeitsabläufe und volle Kontrolle über Ihre Inhalte. Vergleichen Sie die Eckpunkte auf einen Blick.',
      yes: 'Ja',
      no: 'Nein',
      partial: 'Unterstützt',
      rows: [
        { label: 'Ein kanonischer Beitrag', cells: ['yes', 'no', 'no'] },
        { label: 'Keine duplizierten Beiträge', cells: ['yes', 'no', 'no'] },
        { label: 'Natives Bearbeiten in Gutenberg', cells: ['yes', 'Eigener Ablauf', 'no'] },
        { label: 'Eingebaute Migration', cells: ['yes', 'no', 'Import-Werkzeuge'] },
        { label: 'WooCommerce', cells: ['yes', 'Add-on', 'Add-on'] },
        { label: 'Automatisches hreflang', cells: ['yes', 'partial', 'partial'] },
        { label: 'REST-API &amp; WP-CLI', cells: ['yes', 'partial', 'Teilweise'] },
        { label: 'Eigenständige Architektur', cells: ['yes', 'no', 'partial'] }
      ]
    },

    pricing: {
      kicker: 'Preise',
      title: 'Klein anfangen. Überall ankommen',
      intro: 'Jeder Tarif hat denselben sauberen Kern. Wählen Sie die Größe, die zu Ihrer Arbeit passt.',
      popular: 'Am beliebtesten',
      perYear: '/ Jahr',
      plans: [
        {
          name: 'Free',
          price: '0 €',
          summary: 'Eine zusätzliche Sprache',
          points: ['Alle zentralen Übersetzungswerkzeuge', 'Saubere URLs + hreflang', 'Migrationsvorschau + Rückgängig'],
          cta: 'Gratisversion holen'
        },
        {
          name: 'Business',
          price: '119 €',
          period: true,
          featured: true,
          summary: 'Fünf Websites. Sprachen unbegrenzt',
          points: ['<strong>Alles aus Free</strong>', 'Migration mit einem Befehl', 'WooCommerce-Übersetzung', 'Priorisierter Support + Updates'],
          cta: 'Business kaufen'
        },
        {
          name: 'Agency',
          price: '189 €',
          period: true,
          summary: 'Unbegrenzte Websites für Kundenprojekte',
          points: ['<strong>Alles aus Business</strong>', 'Unbegrenzte Website-Aktivierungen', 'Für die Übergabe an Kunden gebaut'],
          cta: 'Agency kaufen'
        }
      ],
      trust: ['7 Tage Geld-zurück-Garantie', 'Ihre Daten bleiben Ihre', 'Kein WPML nötig'],
      cta: {
        kicker: 'Noch unsicher?',
        title: 'Testen Sie es mit einer Sprache.<br />Entscheiden Sie an Ihrer eigenen Website.',
        copy: 'Die Gratisversion deckt eine zusätzliche Sprache ab — übersetzen Sie eine Seite und sehen Sie <em>/fr/</em> live gehen, bevor Sie etwas ausgeben. Erst noch Fragen? Schreiben Sie an <a href="mailto:hello@lingo.com">hello@lingo.com</a>.',
        primary: 'FAQ lesen',
        secondary: 'Dokumentation'
      }
    }
  },

  faq: {
    hero: {
      eyebrow: 'Hilfebereich',
      lines: ['Fragen,', 'beantwortet.'],
      copy: 'Alles zur Ein-Beitrag-Architektur, zum Umstieg von WPML, zu SEO, WooCommerce und den Tarifen — in klarer Sprache.'
    },
    cta: {
      kicker: 'Immer noch festgefahren?',
      title: 'Fragen Sie uns alles.<br />Wir antworten wie Entwickler.',
      copy: 'Wenn Ihre Frage nicht dabei ist, ist sie wahrscheinlich eine gute. Schicken Sie sie an <a href="mailto:hello@lingo.com">hello@lingo.com</a> und Sie bekommen eine klare Antwort.',
      primary: 'Preise ansehen',
      secondary: 'Dokumentation'
    },

    groups: [
      {
        id: 'general',
        chip: 'Grundlagen',
        index: '01 / Grundlagen',
        title: 'Die Basis',
        lede: 'Was Lingo ist, was es mit Ihrer Datenbank macht und was es bewusst nicht tut.',
        items: [
          { q: 'Was genau ist Lingo?', a: ['Eine mehrsprachige Ebene für WordPress. Lingo behält einen kanonischen Beitrag und legt jede Sprache in einer kompakten Nebentabelle ab, indiziert nach Feld und Sprachcode. Sie bekommen Übersetzung pro Feld, saubere <code>/{code}/</code>-URLs und automatisches hreflang — ohne eine Übersetzungsverwaltung, die auf Ihrer Website sitzt.'] },
          { q: 'Brauche ich WPML oder Polylang?', a: ['Nein. Lingo ist eigenständig, mit eigener Speicherung und eigenen APIs. Es kann aus WPML, Polylang, qTranslate-XT und TranslatePress <em>importieren</em>, hängt zur Laufzeit aber nie von ihnen ab.'] },
          { q: 'Dupliziert Lingo meine Beiträge?', a: ['Nein. Genau darum geht es. Ein kanonischer Beitrag behält seine ID; die Übersetzungen liegen daneben. Ihre Beitragslisten, Permalinks und das Backend bleiben genauso lang wie heute — ob Sie zwei Sprachen führen oder acht.'] },
          { q: 'Übersetzt Lingo meine Inhalte automatisch?', a: ['Nein — Lingo ist eine Übersetzungs<em>ebene</em>, keine Übersetzungsmaschine. Sie oder Ihr Übersetzer schreiben jede Sprache; Lingo speichert, routet und liefert sie aus. <em>Aus Standardsprache kopieren</em> setzt Ihren Ausgangstext als Startpunkt in die Zielsprache, damit Sie nie vor einem leeren Feld sitzen.'] },
          { q: 'Läuft irgendetwas davon über einen Drittanbieter?', a: ['Nein. Lingo ist selbst gehostet. Ihre Übersetzungen liegen in Ihrer eigenen Datenbank, und kein externer Dienst sitzt im Anfrageweg. Wenn Sie eines Tages gehen, bleiben die Daten Ihre.'] },
          { q: 'Wie viele Sprachen kann ich betreiben?', a: ['Die Gratisversion deckt eine zusätzliche Sprache ab — mit der vollständigen Übersetzungsmaschine dahinter, nichts ist beschnitten. Die kostenpflichtigen Tarife heben die Grenze auf.'] }
        ]
      },
      {
        id: 'migration',
        chip: 'Migration',
        index: '02 / Migration',
        title: 'Der Umzug',
        lede: 'Vorschau, Anwenden, Rückgängig. Ein Wechsel sollte sich nie wie ein Sprung anfühlen.',
        items: [
          { q: 'Von welchen Plugins kann ich migrieren?', a: ['WPML, Polylang, qTranslate-XT und TranslatePress. Jedes hat einen eigenen Importer, die Zuordnung folgt also der Art, wie dieses Plugin Ihre Übersetzungen tatsächlich gespeichert hat.'] },
          { q: 'Wie riskant ist der Wechsel?', a: ['Gering, von Grund auf. Starten Sie zuerst den Testlauf — er ist kostenlos und schreibt nichts. Wenden Sie an, wenn die Zahlen stimmen. Machen Sie rückgängig, wann Sie wollen. Ihre Originalinhalte werden in keinem Schritt zerstört.'] },
          { q: 'Was zeigt mir der Testlauf konkret?', a: ['Jeden Beitrag und jede Sprache, die Lingo übernehmen würde, bevor eine einzige Zeile geschrieben wird:', '<code>wp lingo wpml-dryrun</code> → dann <code>wp lingo wpml-migrate</code>, wenn Sie so weit sind.'] },
          { q: 'Was wird importiert?', a: ['Ihre übersetzten Titel, Inhalte und Auszüge, benutzerdefinierte Felder, Taxonomie-Begriffe und Beschreibungen sowie Medientexte — zugeordnet zu dem kanonischen Beitrag, zu dem sie gehören, mit intakter Sprachzuweisung.'] },
          { q: 'Kann ich das wirklich rückgängig machen?', a: ['Ja. Das Rückgängigmachen dreht zurück, was die Migration in Lingo geschrieben hat. Was Ihr altes Plugin gespeichert hat, bleibt, wo es war — Sie können also zurückgehen, nachjustieren und erneut starten.'] },
          { q: 'Muss ich das alte Plugin installiert lassen?', a: ['Nur, solange Sie das Ergebnis prüfen. Sobald das Frontend in jeder Sprache stimmt, kann das alte Plugin deaktiviert werden — Lingo liest nach dem Import nicht mehr daraus.'] }
        ]
      },
      {
        id: 'seo',
        chip: 'SEO &amp; URLs',
        index: '03 / SEO &amp; URLs',
        title: 'Suche, abgesichert',
        lede: 'Saubere Routen und korrekte Alternates, fertig vor Ihrer ersten Übersetzung.',
        items: [
          { q: 'Wie sehen meine URLs aus?', a: ['Ihre Standardsprache bleibt an der Wurzel — <code>example.com/about/</code> — und jede andere Sprache liegt unter ihrem Code: <code>example.com/fr/about/</code>. Keine Query-Strings, keine Subdomains einzurichten.'] },
          { q: 'Ist hreflang automatisch?', a: ['Ja — die hreflang-Alternates samt <code>x-default</code> werden für Sie ausgegeben. Es gibt keinen Annotationsschritt und nichts von Hand zu pflegen, wenn Sie eine Sprache hinzufügen.'] },
          { q: 'Entsteht dadurch nicht Duplicate Content?', a: ['Nein. Jede Sprache hat ihre eigene URL und die Alternates sind deklariert — genau das Signal, nach dem Suchmaschinen suchen. Eine kanonische Struktur, mehrere Sprachfassungen.'] },
          { q: 'Funktioniert es mit Yoast, RankMath oder SEOPress?', a: ['Ja. Titel und Meta werden pro Sprache aufgelöst, das SEO-Plugin, das Sie schon nutzen, arbeitet also weiter, statt ersetzt zu werden.'] },
          { q: 'Kann ich Slugs übersetzen?', a: ['Ja — Slugs sind pro Sprache übersetzbar, ein französischer Leser bekommt also eine französische URL statt einer englischen mit <code>/fr/</code> davor.'] }
        ]
      },
      {
        id: 'editing',
        chip: 'Bearbeiten',
        index: '04 / Bearbeiten',
        title: 'Schreiben &amp; übersetzen',
        lede: 'Lingo lebt im Block-Editor. Es gibt keinen zweiten Arbeitsbereich zu lernen.',
        items: [
          { q: 'Wo übersetze ich eigentlich?', a: ['In dem Beitrag, den Sie ohnehin bearbeiten. Ein Panel <em>Sprache (Lingo)</em> wechselt die Bearbeitungssprache, und der Editor verhält sich weiter wie der Editor — gleiche Blöcke, gleiche Shortcuts, gleiche Vorschau.'] },
          { q: 'Welche Felder lassen sich übersetzen?', a: ['Titel, Inhalte und Auszüge; benutzerdefinierte Felder inklusive ACF und einfacher Meta; Taxonomie-Begriffe und ihre Beschreibungen; sowie Alt-Texte und Bildunterschriften. Übersetzen Sie, was übersetzt werden muss, und lassen Sie den Rest in Ruhe.'] },
          { q: 'Kann ich meine Ausgangssprache versehentlich überschreiben?', a: ['Ihre Inhalte in der Ausgangssprache werden nie von einer Übersetzung überschrieben. <em>Aus Standardsprache kopieren</em> kopiert immer nur <em>in</em> die Sprache, an der Sie gerade arbeiten.'] },
          { q: 'Was ist mit Gutenberg-Blöcken?', a: ['Core-Blöcke werden als gewöhnlicher <code>post_content</code> übersetzt und über die eigene Block-Pipeline von WordPress gerendert — kein paralleler Renderer, keine Zuordnungstabelle Block für Block.'] },
          { q: 'Wie übersetze ich Oberflächentexte von Theme und Plugins?', a: ['Über eine einfache String-Registry. Ein Kompatibilitäts-Shim für <code>pll__</code> / <code>icl_</code> hält Themes, die für Polylang oder WPML gebaut wurden, nach dem Umstieg lauffähig — Sie schreiben also nicht am ersten Tag Template-Code um.'] },
          { q: 'Wo kann ich den Sprachumschalter platzieren?', a: ['Überall, wo Ihr Theme Platz hat: der Shortcode <code>[lingo_switcher]</code>, ein Widget, ein Sprachumschalter-Block, Sprachelemente unter <em>Design → Menüs</em> oder das Template-Tag <code>lingo_language_switcher()</code>. Als Liste, inline oder Dropdown.'] }
        ]
      },
      {
        id: 'woocommerce',
        chip: 'WooCommerce',
        index: '05 / WooCommerce',
        title: 'In jeder Sprache verkaufen',
        lede: 'Eingebaut, nicht angeschraubt — kein separates Commerce-Add-on zu lizenzieren.',
        items: [
          { q: 'Brauche ich ein zusätzliches Add-on für WooCommerce?', a: ['Nein. Die WooCommerce-Übersetzung gehört zu den kostenpflichtigen Tarifen und ist kein separater Kauf.'] },
          { q: 'Was kann ich in einem Shop übersetzen?', a: ['Produkttitel und -beschreibungen, Produktkategorien und Werte von Variantenattributen — den Text, den ein Kunde vor der Entscheidung tatsächlich liest.'] },
          { q: 'Folgen Warenkorb, Kasse und Konto der Sprache?', a: ['Ja — die gesamte Strecke bleibt unter demselben Sprachpräfix, von <code>/fr/shop</code> über Warenkorb und Kasse bis zum Kundenkonto.'] },
          { q: 'Beherrscht Lingo mehrere Währungen?', a: ['Nein, und es tut auch nicht so. Lingo übersetzt Inhalte und routet URLs; Preis und Währung bleiben bei WooCommerce und der Währungserweiterung, die Sie ohnehin einsetzen.'] }
        ]
      },
      {
        id: 'plans',
        chip: 'Tarife &amp; Support',
        index: '06 / Tarife &amp; Support',
        title: 'Kaufen &amp; Hilfe bekommen',
        lede: 'Was jeder Tarif abdeckt, wie Updates ankommen und wo die Entwicklerschnittstelle liegt.',
        items: [
          { q: 'Was ist in der Gratisversion enthalten?', a: ['Eine zusätzliche Sprache und der vollständige Kern: Übersetzung pro Feld, saubere URLs, automatisches hreflang, der Umschalter und die Migrationsvorschau mit Rückgängig. Ein ehrlicher Einstieg, keine Demo.'] },
          { q: 'Was bringen die kostenpflichtigen Tarife?', a: ['Unbegrenzte Sprachen, Migration mit einem Befehl (anwenden, nicht nur ansehen), Übersetzung von WooCommerce-Produkten und priorisierten Support mit automatischen Updates.'] },
          { q: 'Welchen Tarif brauche ich für Kundenwebsites?', a: ['Business deckt fünf Websites für 119 € im Jahr ab. Agency kostet 189 € im Jahr mit unbegrenzten Website-Aktivierungen — der richtige, wenn Mehrsprachigkeit normaler Teil dessen ist, was Sie an Kunden übergeben.'] },
          { q: 'Bekomme ich mein Geld zurück?', a: ['Ja — auf die kostenpflichtigen Tarife gibt es 7 Tage Geld-zurück-Garantie. Und Sie können die Gratisversion so lange nutzen, wie Sie möchten, bevor Sie entscheiden.'] },
          { q: 'Kann ich den Tarif später wechseln?', a: ['Ja. Ihre Übersetzungen liegen in Ihrer eigenen Datenbank, ein Tarifwechsel ist also eine Lizenzänderung — nie eine Inhaltsmigration.'] },
          { q: 'Wie funktionieren Updates?', a: ['Über den normalen WordPress-Aktualisierungsbildschirm. Kostenpflichtige Updates sind selbst gehostet und integritätsgeprüft, es gibt also kein separates Dashboard zum Einloggen und nichts Neues, das man einem Kunden beibringen müsste.'] },
          { q: 'Gibt es eine Entwickler-API?', a: ['Ja: WP-CLI-Befehle, Sprachauflösung über die REST-API und ein dokumentierter Satz an Hooks und Filtern. Automatisieren Sie die langweiligen Teile und überlassen Sie den Rest den Redakteuren.'] }
        ]
      }
    ]
  }
}
