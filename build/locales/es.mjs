// Spanish copy. Prices in euros, symbol after the number as in es-ES.

export default {
  meta: {
    home: {
      title: 'Lingo — Una entrada. Todos los idiomas.',
      description: 'Lingo mantiene limpio el WordPress multilingüe: una entrada canónica, todos los idiomas.'
    },
    faq: {
      title: 'Lingo — Preguntas frecuentes',
      description: 'Todo sobre la arquitectura de una sola entrada, la migración desde WPML, el SEO, WooCommerce y los planes.'
    }
  },

  nav: {
    features: 'Funciones',
    compare: 'Comparar',
    pricing: 'Precios',
    faq: 'FAQ',
    startFree: 'Empezar gratis',
    home: 'Inicio de Lingo',
    primary: 'Navegación principal',
    sticky: 'Navegación fija',
    footerNav: 'Navegación del pie',
    language: 'Cambiar de idioma'
  },

  notice: {
    free: 'Idiomas ilimitados en todos los planes, gratis incluido',
    promo: 'Tiempo limitado: 10 % de descuento en Pro',
    migrate: 'Migrar desde WPML',
    viewPricing: 'Ver todos los precios'
  },

  footer: {
    docs: 'Documentación',
    faq: 'FAQ',
    pricing: 'Precios',
    contact: 'Contacto',
    copyright: '© 2026 Lingo. Hecho para viajar.'
  },

  home: {
    hero: {
      eyebrow: 'La capa multilingüe para WordPress',
      lines: ['Una entrada.', 'Todos los idiomas.'],
      copy: 'Traduce WordPress sin duplicar tu contenido. Una entrada canónica. URL limpias. Hreflang automático. Hecho para seguir siendo rápido.',
      proofLabel: 'Ventajas principales',
      proof: ['Una entrada canónica', 'Sin entradas duplicadas', 'URL limpias y hreflang', 'Migración desde WPML'],
      ctaPrimary: 'Empezar con Lingo',
      ctaSecondary: 'Cómo funciona',
      micro: 'Idiomas ilimitados en la versión gratuita <span>/</span> No necesitas WPML'
    },

    how: {
      kicker: 'Cómo funciona',
      title: 'Tu sitio no debería multiplicarse para hablar.',
      intro: 'La mayoría de los plugins multilingües crean una entrada nueva por cada idioma. Eso es un apaño, no un sistema. Lingo mantiene el original entero y deja que cada idioma viva a su lado.',
      oldLabel: 'La forma antigua',
      oldTitle: 'Más idiomas.<br />Más desorden.',
      oldFoot: 'IDs separados. Entradas separadas. Más que mantener.',
      newLabel: 'La forma lingo',
      newTitle: 'Una para todos.',
      languages: 'idiomas',
      newFoot: 'IDs estables. Un escritorio limpio. Cada campo, traducido.'
    },

    features: {
      kicker: 'Funciones',

      migration: {
        title: 'Deja el lastre.<br />Llévate <em>todo lo demás.</em>',
        ledeTitle: 'Múdate con confianza',
        lede: 'Mira qué va a cambiar antes de que cambie. Migra tu contenido actual con un solo comando y con el deshacer listo para cuando lo necesites.',
        steps: [
          { n: '01', title: 'Vista previa', copy: 'Lanza una simulación gratuita. Conoce cada entrada y cada idioma que Lingo traerá.' },
          { n: '02', title: 'Aplicar', copy: 'Migra desde WPML, Polylang, qTranslate-XT o TranslatePress.' },
          { n: '03', title: 'Deshacer', copy: '¿Cambias de idea? Revierte con seguridad. El contenido original queda intacto.' }
        ],
        guide: 'Guía de migración',
        terminalLabel: 'Terminal mostrando una simulación de migración de Lingo correcta',
        terminalTitle: 'Terminal',
        terminal: [
          '~ wp lingo wpml-dryrun',
          '✓ 248 entradas listas para migrar',
          '✓ 8 idiomas encontrados',
          'No se destruirá ningún contenido.'
        ]
      },

      editor: {
        title: 'Traduce donde<br />ya escribes.',
        ledeTitle: 'Integrado en WordPress',
        lede: 'Lingo vive dentro del editor de bloques. Cambia de idioma, copia tu original como punto de partida y hazlo local.',
        pointsTitle: 'Traduce solo<br />lo que hay que traducir.',
        points: [
          'Títulos, contenido y extractos',
          'Campos personalizados y taxonomías',
          'Texto alternativo y leyendas',
          'El contenido de origen no se toca'
        ],
        demoLabel: 'Demo interactiva del editor multilingüe de WordPress',
        canvasKicker: 'ENTRADA / DEMO LINGO',
        previewLabel: 'Idioma de vista previa',
        build: 'Crear'
      },

      seo: {
        title: 'Un sitio.<br />En todas partes.',
        ledeTitle: 'SEO, sin acrobacias',
        lede: 'URL limpias, alternates correctos y metadatos conscientes del idioma — listos antes de publicar tu primera traducción.',
        defaultLanguage: 'Idioma predeterminado',
        more: 'Y más'
      },

      commerce: {
        title: 'Una tienda.<br />Todos los clientes.',
        ledeTitle: 'WooCommerce, integrado',
        lede: 'Traduce productos, categorías, atributos y todo el recorrido de compra — de /shop a la caja — sin otro plugin.',
        copy: 'Traducción de WooCommerce integrada para productos, categorías, carrito, caja y cuentas de cliente.',
        productAlt: 'Zumo de naranja, uva y pera'
      },

      supporting: [
        { icon: 'icon-theme', title: 'Encaja con cualquier tema.', copy: 'Bloque, shortcode, widget, menú o etiqueta de plantilla.' },
        { icon: 'icon-code', title: 'Pensado para desarrolladores.', copy: 'API REST, hooks, filtros y comandos WP-CLI.' },
        { icon: 'icon-lock', title: 'Tus datos siguen siendo tuyos.', copy: 'Almacenamiento propio. Sin dependencia de terceros.' },
        { icon: 'icon-update', title: 'Actualizaciones nativas de WordPress.', copy: 'Actualizaciones autoalojadas desde el actualizador nativo de WordPress.' },
        { icon: 'icon-acf', title: 'Funciona con ACF.', copy: 'Traduce campos personalizados sin plugins extra.' },
        { icon: 'icon-search', title: 'Listo para buscadores.', copy: 'Hreflang automático y metadatos localizados.' }
      ],
      makeSense: 'Haz que WordPress<br />por fin <em>tenga sentido.</em>'
    },

    comparison: {
      kicker: 'Comparativa',
      title: 'Mira la diferencia.',
      intro: 'Lingo se centra en lo que más importa: una arquitectura limpia, flujos de trabajo nativos y la propiedad completa de tu contenido. Compara lo esencial de un vistazo.',
      yes: 'Sí',
      no: 'No',
      partial: 'Compatible',
      rows: [
        { label: 'Una entrada canónica', cells: ['yes', 'no', 'no'] },
        { label: 'Sin entradas duplicadas', cells: ['yes', 'no', 'no'] },
        { label: 'Edición nativa en Gutenberg', cells: ['yes', 'Flujo aparte', 'no'] },
        { label: 'Migración integrada', cells: ['yes', 'no', 'Herramientas de importación'] },
        { label: 'WooCommerce', cells: ['yes', 'Complemento', 'Complemento'] },
        { label: 'Hreflang automático', cells: ['yes', 'partial', 'partial'] },
        { label: 'API REST y WP-CLI', cells: ['yes', 'partial', 'Parcial'] },
        { label: 'Arquitectura independiente', cells: ['yes', 'no', 'partial'] }
      ]
    },

    pricing: {
      kicker: 'Precios',
      title: 'Empieza pequeño. Llega a todas partes',
      intro: 'Idiomas ilimitados en todos los planes, Free incluido. Solo pagas por el número de sitios que gestionas — nunca por el número de idiomas que publicas.',
      popular: 'El más elegido',
      perYear: '/ año',
      plans: [
        {
          name: 'Free',
          price: '0 €',
          summary: 'Idiomas ilimitados, un sitio',
          points: ['Idiomas ilimitados', 'Traducción campo a campo', 'URL limpias + hreflang', 'Vista previa de migración + deshacer'],
          cta: 'Conseguir la versión gratuita'
        },
        {
          name: 'Single',
          price: '65 €',
          period: true,
          summary: 'Un sitio. Idiomas ilimitados',
          points: ['<strong>Todo lo de Free</strong>', 'Aplicar migraciones', 'Traducción de WooCommerce', 'Traducción automática'],
          cta: 'Comprar Single'
        },
        {
          name: 'Business',
          price: '139 €',
          period: true,
          featured: true,
          summary: 'Cinco sitios. Idiomas ilimitados',
          points: ['<strong>Todo lo de Single</strong>', 'Flujo editorial', 'Soporte prioritario + actualizaciones', 'Más traducción automática'],
          cta: 'Comprar Business'
        },
        {
          name: 'Agency',
          price: '259 €',
          period: true,
          summary: 'Sitios ilimitados para trabajo de cliente',
          points: ['<strong>Todo lo de Business</strong>', 'Activaciones de sitio ilimitadas', 'Compatible con WP Multisitio', 'Pensado para entregar a clientes'],
          cta: 'Comprar Agency'
        }
      ],

      compare: {
        show: 'Comparar todos los planes',
        hide: 'Ocultar la comparativa',
        label: 'Comparativa de funciones por plan',
        note: 'Todos los planes incluyen idiomas ilimitados. Los planes se diferencian por el número de sitios y las funciones Pro de arriba.',
        rows: [
          { label: 'Precio', strong: true, cells: ['<strong>0 €</strong>', '<strong>65 €</strong><small>/año</small>', '<strong>139 €</strong><small>/año</small>', '<strong>259 €</strong><small>/año</small>'] },
          { label: 'Sitios', strong: true, cells: ['1', '1', '5', 'Ilimitados'] },
          { label: 'Idiomas', cells: ['Ilimitados', 'Ilimitados', 'Ilimitados', 'Ilimitados'] },
          { label: 'Traducción campo a campo', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Sin entradas duplicadas', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'URL limpias + hreflang', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Selector de idioma', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'ACF + maquetadores', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'API REST + WP-CLI', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Vista previa de migración + deshacer', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'Aplicar migraciones', cells: ['no', 'yes', 'yes', 'yes'] },
          { label: 'Traducción de WooCommerce', cells: ['no', 'yes', 'yes', 'yes'] },
          { label: 'Traducción automática', cells: ['no', '50k palabras/año', '250k palabras/año', '1M + recargas'] },
          { label: 'Flujo editorial', cells: ['no', 'no', 'yes', 'yes'] },
          { label: 'WP Multisitio', cells: ['no', 'no', 'no', 'yes'] },
          { label: 'Soporte', cells: ['Foro', 'Correo', 'Prioritario', 'Prioritario + entrega'] }
        ]
      },

      lifetime: {
        badge: 'Oferta fundadora — limitada',
        title: 'De por vida — cinco sitios, un solo pago',
        copy: 'Una oferta de lanzamiento limitada: todas las funciones Pro en cinco sitios, actualizaciones de por vida y 12 meses de soporte prioritario. Cuando se acaben las plazas, se acabaron.',
        price: '419 €',
        once: 'un solo pago',
        cta: 'Comprar De por vida',
        seats: 'Quedan 100 de 100 plazas'
      },

      trust: ['Garantía de devolución de 14 días', 'Idiomas ilimitados en todos los planes', 'No necesitas WPML'],
      cta: {
        kicker: '¿Todavía lo dudas?',
        title: 'Pruébalo con un idioma.<br />Decide con tu propio sitio.',
        copy: 'La versión gratuita lleva idiomas ilimitados en un sitio — traduce una página y mira cómo <em>/fr/</em> se publica antes de gastar nada. ¿Prefieres preguntar primero? Escribe a <a href="mailto:hello@lingo.com">hello@lingo.com</a>.',
        primary: 'Leer las FAQ',
        secondary: 'Documentación'
      }
    }
  },

  faq: {
    hero: {
      eyebrow: 'Centro de ayuda',
      lines: ['Preguntas,', 'respondidas.'],
      copy: 'Todo sobre la arquitectura de una sola entrada, la migración desde WPML, el SEO, WooCommerce y los planes — en lenguaje claro.'
    },
    cta: {
      kicker: '¿Sigues atascado?',
      title: 'Pregúntanos lo que sea.<br />Respondemos como desarrolladores.',
      copy: 'Si tu pregunta no está aquí, probablemente sea una buena pregunta. Envíala a <a href="mailto:hello@lingo.com">hello@lingo.com</a> y tendrás una respuesta directa.',
      primary: 'Ver precios',
      secondary: 'Documentación'
    },

    groups: [
      {
        id: 'general',
        chip: 'General',
        index: '01 / General',
        title: 'Lo básico',
        lede: 'Qué es Lingo, qué le hace a tu base de datos y qué decide deliberadamente no hacer.',
        items: [
          { q: '¿Qué es Lingo exactamente?', a: ['Una capa multilingüe para WordPress. Lingo mantiene una entrada canónica y guarda cada idioma en una tabla lateral compacta, indexada por campo y código de idioma. Obtienes traducción campo a campo, URL <code>/{code}/</code> limpias y hreflang automático — sin una suite de gestión de traducciones montada sobre tu sitio.'] },
          { q: '¿Necesito tener instalado WPML o Polylang?', a: ['No. Lingo es independiente, con su propio almacenamiento y sus propias API. Puede <em>importar</em> desde WPML, Polylang, qTranslate-XT y TranslatePress, pero nunca depende de ellos en ejecución.'] },
          { q: '¿Lingo va a duplicar mis entradas?', a: ['No. Ese es justamente el punto. Una entrada canónica conserva su ID; las traducciones viven a su lado. Tus listados de entradas, enlaces permanentes y escritorio siguen siendo igual de largos que hoy, tanto con dos idiomas como con ocho.'] },
          { q: '¿Lingo traduce mi contenido automáticamente?', a: ['No — Lingo es una <em>capa</em> de traducción, no un motor de traducción. Tú o tu traductor escribís cada idioma; Lingo lo guarda, lo enruta y lo sirve. <em>Copiar del idioma predeterminado</em> lleva tu texto de origen al idioma destino como punto de partida, para que nunca te enfrentes a un campo vacío.'] },
          { q: '¿Algo de esto pasa por un servicio de terceros?', a: ['No. Lingo es autoalojado. Tus traducciones están en tu propia base de datos y ningún servicio externo se sitúa en la ruta de la petición. Si algún día te vas, los datos siguen siendo tuyos.'] },
          { q: '¿Cuántos idiomas puedo tener?', a: ['Los que quieras, en todos los planes — el gratuito incluido. Los idiomas nunca son lo que pagas: los planes se diferencian por el número de sitios y por las funciones Pro.'] }
        ]
      },
      {
        id: 'migration',
        chip: 'Migración',
        index: '02 / Migración',
        title: 'La mudanza',
        lede: 'Previsualiza, aplica, deshaz. Cambiar de herramienta no debería sentirse como un salto.',
        items: [
          { q: '¿Desde qué plugins puedo migrar?', a: ['WPML, Polylang, qTranslate-XT y TranslatePress. Cada uno tiene su propio importador, así que el mapeo sigue cómo ese plugin guardaba realmente tus traducciones.'] },
          { q: '¿Qué riesgo tiene cambiar?', a: ['Bajo, por diseño. Lanza primero la simulación — es gratis y no escribe nada. Aplica cuando los números cuadren. Deshaz cuando quieras. Tu contenido original no se destruye en ningún paso.'] },
          { q: '¿Qué me enseña la simulación exactamente?', a: ['Cada entrada y cada idioma que Lingo traería, antes de escribir una sola fila:', '<code>wp lingo wpml-dryrun</code> → y luego <code>wp lingo wpml-migrate</code> cuando estés listo.'] },
          { q: '¿Qué se importa?', a: ['Tus títulos, contenidos y extractos traducidos, los campos personalizados, los términos de taxonomía y sus descripciones, y los textos de medios — asignados a la entrada canónica a la que pertenecen, con sus idiomas intactos.'] },
          { q: '¿De verdad puedo deshacerlo?', a: ['Sí. El deshacer revierte lo que la migración escribió en Lingo. Lo que guardó tu plugin anterior se queda donde estaba, así que puedes volver, ajustar y ejecutarlo otra vez.'] },
          { q: '¿Tengo que dejar instalado el plugin antiguo?', a: ['Solo mientras compruebas el resultado. Cuando el frontend se vea bien en todos los idiomas, el plugin antiguo puede desactivarse — Lingo no lee de él después de la importación.'] }
        ]
      },
      {
        id: 'seo',
        chip: 'SEO y URL',
        index: '03 / SEO y URL',
        title: 'La búsqueda, a salvo',
        lede: 'Rutas limpias y alternates correctos, listos antes de publicar tu primera traducción.',
        items: [
          { q: '¿Cómo son mis URL?', a: ['Tu idioma predeterminado se queda en la raíz — <code>example.com/about/</code> — y cada otro idioma va bajo su código: <code>example.com/fr/about/</code>. Sin cadenas de consulta ni subdominios que configurar.'] },
          { q: '¿El hreflang es automático?', a: ['Sí — los alternates de hreflang más <code>x-default</code> se generan por ti. No hay paso de anotación ni nada que mantener a mano cuando añades un idioma.'] },
          { q: '¿No creará esto contenido duplicado?', a: ['No. Cada idioma tiene su propia URL y los alternates están declarados, que es exactamente la señal que buscan los buscadores. Una estructura canónica, varias versiones de idioma.'] },
          { q: '¿Funciona con Yoast, RankMath o SEOPress?', a: ['Sí. Los títulos y metadatos se resuelven por idioma, así que el plugin de SEO que ya usas sigue funcionando en lugar de ser reemplazado.'] },
          { q: '¿Puedo traducir los slugs?', a: ['Sí — los slugs son traducibles por idioma, así que un lector francés recibe una URL en francés y no una en inglés con un prefijo <code>/fr/</code> encima.'] }
        ]
      },
      {
        id: 'editing',
        chip: 'Edición',
        index: '04 / Edición',
        title: 'Escribir y traducir',
        lede: 'Lingo vive dentro del editor de bloques. No hay un segundo espacio de trabajo que aprender.',
        items: [
          { q: '¿Dónde traduzco realmente?', a: ['En la entrada que ya estás editando. Un panel <em>Idioma (Lingo)</em> cambia el idioma de edición, y el editor sigue comportándose como el editor — mismos bloques, mismos atajos, misma vista previa.'] },
          { q: '¿Qué campos se pueden traducir?', a: ['Títulos, contenido y extractos; campos personalizados, incluidos ACF y meta simple; términos de taxonomía y sus descripciones; y texto alternativo y leyendas de medios. Traduce lo que hay que traducir y deja el resto tranquilo.'] },
          { q: '¿Puedo sobrescribir mi idioma de origen por error?', a: ['El contenido de tu idioma de origen nunca se sobrescribe con una traducción. <em>Copiar del idioma predeterminado</em> solo copia <em>hacia</em> el idioma en el que estás trabajando.'] },
          { q: '¿Y los bloques de Gutenberg?', a: ['Los bloques del núcleo se traducen como <code>post_content</code> normal y se renderizan con la propia canalización de bloques de WordPress — sin renderizador paralelo ni tabla de mapeo bloque a bloque.'] },
          { q: '¿Cómo traduzco los textos de interfaz del tema y los plugins?', a: ['Mediante un registro de cadenas sencillo. Una capa de compatibilidad <code>pll__</code> / <code>icl_</code> mantiene funcionando los temas creados para Polylang o WPML después de migrar, así que no reescribes el código de plantilla el primer día.'] },
          { q: '¿Dónde puedo poner el selector de idioma?', a: ['Donde tu tema tenga sitio: el shortcode <code>[lingo_switcher]</code>, un widget, un bloque Selector de idioma, elementos de idioma en <em>Apariencia → Menús</em>, o la etiqueta de plantilla <code>lingo_language_switcher()</code>. En estilo lista, en línea o desplegable.'] }
        ]
      },
      {
        id: 'woocommerce',
        chip: 'WooCommerce',
        index: '05 / WooCommerce',
        title: 'Vender en todos los idiomas',
        lede: 'Integrado, no atornillado — sin un complemento de comercio aparte que licenciar.',
        items: [
          { q: '¿Necesito un complemento extra para WooCommerce?', a: ['No. La traducción de WooCommerce forma parte de los planes de pago en lugar de ser una compra aparte.'] },
          { q: '¿Qué puedo traducir en una tienda?', a: ['Títulos y descripciones de productos, categorías de producto y valores de atributos de variación — el texto que un cliente lee de verdad antes de decidir.'] },
          { q: '¿El carrito, la caja y la cuenta siguen el idioma?', a: ['Sí — todo el recorrido se queda bajo el mismo prefijo de idioma, desde <code>/fr/shop</code> pasando por el carrito y la caja hasta la cuenta del cliente.'] },
          { q: '¿Lingo gestiona varias monedas?', a: ['No, y no pretende hacerlo. Lingo traduce contenido y enruta URL; el precio y la moneda se quedan con WooCommerce y con la extensión de moneda que ya uses.'] }
        ]
      },
      {
        id: 'plans',
        chip: 'Planes y soporte',
        index: '06 / Planes y soporte',
        title: 'Comprar y pedir ayuda',
        lede: 'Qué cubre cada plan, cómo llegan las actualizaciones y dónde está la superficie para desarrolladores.',
        items: [
          { q: '¿Qué incluye la versión gratuita?', a: ['Idiomas ilimitados en un sitio y el núcleo completo: traducción campo a campo, URL limpias, hreflang automático, el selector y la vista previa de migración con deshacer. Es una entrada honesta, no una demo.'] },
          { q: '¿Qué añaden los planes de pago?', a: ['Más sitios y las funciones Pro: aplicar una migración y no solo previsualizarla, traducción de productos de WooCommerce, traducción automática, el flujo editorial, WP Multisitio y soporte prioritario con actualizaciones automáticas.'] },
          { q: '¿Qué plan necesito para sitios de clientes?', a: ['Business cubre cinco sitios por 139 € al año. Agency cuesta 259 € al año con activaciones de sitio ilimitadas y WP Multisitio — el que hay que coger si lo multilingüe es parte habitual de lo que entregas a tus clientes.'] },
          { q: '¿Puedo pedir un reembolso?', a: ['Sí — hay garantía de devolución de 14 días en los planes de pago. Y puedes usar la versión gratuita todo el tiempo que quieras antes de decidir.'] },
          { q: '¿Puedo cambiar de plan más adelante?', a: ['Sí. Tus traducciones viven en tu propia base de datos, así que moverte entre planes es un cambio de licencia — nunca una migración de contenido.'] },
          { q: '¿Cómo funcionan las actualizaciones?', a: ['Por la pantalla de actualizaciones normal de WordPress. Las actualizaciones de pago son autoalojadas y verificadas, así que no hay otro panel donde entrar ni nada nuevo que enseñarle a un cliente.'] },
          { q: '¿Hay una API para desarrolladores?', a: ['Sí: comandos WP-CLI, resolución de idioma sobre la API REST y un conjunto documentado de hooks y filtros. Automatiza las partes aburridas y deja el resto a los editores.'] }
        ]
      }
    ]
  }
}
