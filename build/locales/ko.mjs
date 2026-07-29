// Korean copy. Prices are in won rather than converted dollars, on the same
// reasoning as the yen cards — a locale is more than its strings.
//
// The nav uses "FAQ" rather than 자주 묻는 질문: the loanword is what Korean
// sites actually put in a nav bar, and the full phrase buckles the header at
// mobile widths. The page itself still introduces it in full.

export default {
  meta: {
    home: {
      title: 'Lingo — 하나의 글, 모든 언어로.',
      description: 'Lingo는 워드프레스 다국어를 깔끔하게 유지합니다. 정본 글은 하나, 언어는 전부.'
    },
    faq: {
      title: 'Lingo — 자주 묻는 질문',
      description: '하나의 글 구조, WPML에서의 이전, SEO, WooCommerce, 요금제에 대한 모든 것.'
    }
  },

  nav: {
    features: '기능',
    compare: '비교',
    pricing: '요금제',
    faq: 'FAQ',
    startFree: '무료로 시작',
    home: 'Lingo 홈',
    primary: '주요 내비게이션',
    sticky: '고정 내비게이션',
    footerNav: '푸터 내비게이션',
    language: '언어 변경'
  },

  notice: {
    free: '모든 요금제에서 언어 수 무제한, 무료 버전도 마찬가지',
    promo: '기간 한정 Pro 10% 할인',
    migrate: 'WPML에서 이전하기',
    viewPricing: '전체 요금제 보기'
  },

  footer: {
    docs: '문서',
    faq: 'FAQ',
    pricing: '요금제',
    contact: '문의하기',
    copyright: '© 2026 Lingo. 언어와 함께 여행합니다.'
  },

  home: {
    hero: {
      eyebrow: '워드프레스를 위한 다국어 레이어',
      lines: ['하나의 글,', '모든 언어로.'],
      copy: '콘텐츠를 복제하지 않고 워드프레스를 번역하세요. 정본 글은 하나. 깔끔한 URL. hreflang은 자동. 속도는 그대로.',
      proofLabel: '핵심 이점',
      proof: ['정본 글은 하나', '글을 복제하지 않음', '깔끔한 URL과 hreflang', 'WPML에서 이전 가능'],
      ctaPrimary: 'Lingo 시작하기',
      ctaSecondary: '작동 방식 보기',
      micro: '무료 버전도 언어 수 무제한 <span>/</span> WPML 불필요'
    },

    how: {
      kicker: '작동 방식',
      title: '말하는 언어가 늘어난다고 사이트까지 늘어날 필요는 없습니다.',
      intro: '대부분의 다국어 플러그인은 언어마다 새 글을 만듭니다. 그건 구조가 아니라 임시방편입니다. Lingo는 원본을 하나로 지키고, 모든 언어를 그 옆에 둡니다.',
      oldLabel: '기존 방식',
      oldTitle: '언어가 늘수록.<br />더 어질러집니다.',
      oldFoot: 'ID도 제각각. 글도 제각각. 관리할 것만 늘어납니다.',
      newLabel: 'Lingo 방식',
      newTitle: '하나로, 전부.',
      languages: '개 언어',
      newFoot: 'ID는 그대로. 관리자 화면은 깔끔하게. 모든 필드를 번역.'
    },

    features: {
      kicker: '기능',

      migration: {
        title: '군더더기는 두고.<br /><em>알맹이는</em> 전부 가져오세요.',
        ledeTitle: '안심하고 옮기기',
        lede: '바뀌기 전에 무엇이 바뀌는지 먼저 확인하세요. 기존 콘텐츠는 명령 한 줄로 이전하고, 필요할 때 되돌릴 수 있습니다.',
        steps: [
          { n: '01', title: '미리보기', copy: '무료 드라이런을 실행하세요. Lingo가 가져올 글과 언어를 모두 미리 확인할 수 있습니다.' },
          { n: '02', title: '적용', copy: 'WPML, Polylang, qTranslate-XT, TranslatePress에서 옮겨올 수 있습니다.' },
          { n: '03', title: '되돌리기', copy: '생각이 바뀌었다면? 안전하게 되돌립니다. 원본 콘텐츠는 그대로 남습니다.' }
        ],
        guide: '이전 가이드',
        terminalLabel: 'Lingo 이전 드라이런이 성공한 터미널 화면',
        terminalTitle: '터미널',
        terminal: [
          '~ wp lingo wpml-dryrun',
          '✓ 248개 글을 이전할 수 있습니다',
          '✓ 8개 언어를 찾았습니다',
          '콘텐츠는 하나도 삭제되지 않습니다.'
        ]
      },

      editor: {
        title: '늘 쓰던 자리에서<br />그대로 번역하세요.',
        ledeTitle: '워드프레스에 내장',
        lede: 'Lingo는 블록 편집기 안에서 동작합니다. 언어를 바꾸고, 원문을 출발점으로 복사한 다음, 그 나라의 말로 다듬으세요.',
        pointsTitle: '번역이 필요한 것만<br />번역하세요.',
        points: [
          '제목·본문·요약',
          '사용자 정의 필드와 분류',
          '미디어 대체 텍스트와 캡션',
          '원문은 건드리지 않음'
        ],
        demoLabel: '다국어 워드프레스 편집기 인터랙티브 데모',
        canvasKicker: '글 / LINGO 데모',
        previewLabel: '미리보기 언어',
        build: '생성'
      },

      seo: {
        title: '사이트는 하나.<br />닿는 곳은 전 세계.',
        ledeTitle: '곡예가 필요 없는 SEO',
        lede: '깔끔한 URL, 올바른 alternate, 언어를 이해하는 메타데이터 — 첫 번역을 공개하기 전에 이미 준비되어 있습니다.',
        defaultLanguage: '기본 언어',
        more: '그 외 언어'
      },

      commerce: {
        title: '스토어는 하나.<br />고객은 어디에나.',
        ledeTitle: 'WooCommerce 기본 지원',
        lede: '상품, 카테고리, 속성, 그리고 /shop부터 결제까지 이어지는 구매 흐름 전체를 다른 플러그인 없이 번역하세요.',
        copy: '상품·카테고리·장바구니·결제·고객 계정까지 WooCommerce 번역을 기본으로 제공합니다.',
        productAlt: '오렌지·포도·배 주스 상품'
      },

      supporting: [
        { icon: 'icon-theme', title: '어떤 테마에서도.', copy: '블록, 숏코드, 위젯, 메뉴, 템플릿 태그.' },
        { icon: 'icon-code', title: '개발자를 위해.', copy: 'REST API, 훅, 필터, WP-CLI 명령어.' },
        { icon: 'icon-lock', title: '데이터는 당신의 것.', copy: '독립된 저장 구조. 외부 서비스 종속 없음.' },
        { icon: 'icon-update', title: '워드프레스 기본 업데이트.', copy: '자체 호스팅 업데이트를 워드프레스 본래 업데이트 화면에서.' },
        { icon: 'icon-acf', title: 'ACF도 지원.', copy: '추가 플러그인 없이 사용자 정의 필드를 번역.' },
        { icon: 'icon-search', title: '처음부터 검색에 강하게.', copy: 'hreflang과 지역화된 메타데이터를 자동으로 출력.' }
      ],
      makeSense: '워드프레스를,<br /><em>말이 되게</em> 만드세요.'
    },

    comparison: {
      kicker: '비교',
      title: '나란히 두면 보입니다.',
      intro: 'Lingo가 중요하게 여기는 것은 깔끔한 구조, 워드프레스 본래의 작업 흐름, 그리고 콘텐츠에 대한 완전한 소유권입니다. 핵심만 한눈에 비교해 보세요.',
      yes: '지원',
      no: '미지원',
      partial: '부분 지원',
      rows: [
        { label: '정본 글은 하나', cells: ['yes', 'no', 'no'] },
        { label: '글을 복제하지 않음', cells: ['yes', 'no', 'no'] },
        { label: '구텐베르크에서 그대로 편집', cells: ['yes', '별도 작업 흐름', 'no'] },
        { label: '이전 기능 기본 탑재', cells: ['yes', 'no', '가져오기 도구'] },
        { label: 'WooCommerce', cells: ['yes', '애드온', '애드온'] },
        { label: 'hreflang 자동 출력', cells: ['yes', 'partial', 'partial'] },
        { label: 'REST API와 WP-CLI', cells: ['yes', 'partial', '부분 지원'] },
        { label: '독립된 아키텍처', cells: ['yes', 'no', 'partial'] }
      ]
    },

    pricing: {
      kicker: '요금제',
      title: '작게 시작해서, 어디까지나',
      intro: 'Free를 포함해 모든 요금제에서 언어 수는 무제한입니다. 운영하는 사이트 수에만 비용을 내고, 공개하는 언어 수에는 내지 않습니다.',
      popular: '가장 인기',
      perYear: '/ 년',
      plans: [
        {
          name: 'Free',
          price: '₩0',
          summary: '언어 수 무제한, 사이트 1개',
          points: ['언어 수 무제한', '필드 단위 번역', '깔끔한 URL + hreflang', '이전 미리보기와 되돌리기'],
          cta: '무료 버전 받기'
        },
        {
          name: 'Single',
          price: '₩95,000',
          period: true,
          summary: '사이트 1개. 언어 수 무제한',
          points: ['<strong>Free의 모든 기능</strong>', '이전 실행', 'WooCommerce 번역', '기계 번역'],
          cta: 'Single 구매'
        },
        {
          name: 'Business',
          price: '₩199,000',
          period: true,
          featured: true,
          summary: '5개 사이트. 언어 수 무제한',
          points: ['<strong>Single의 모든 기능</strong>', '편집 워크플로', '우선 지원과 업데이트', '기계 번역 한도 확대'],
          cta: 'Business 구매'
        },
        {
          name: 'Agency',
          price: '₩389,000',
          period: true,
          summary: '클라이언트 작업을 위한 무제한 사이트',
          points: ['<strong>Business의 모든 기능</strong>', '사이트 활성화 무제한', 'WP 멀티사이트 지원', '클라이언트 인수인계를 고려한 설계'],
          cta: 'Agency 구매'
        }
      ],

      compare: {
        show: '모든 요금제 비교',
        hide: '비교 닫기',
        label: '요금제별 기능 비교',
        note: '모든 요금제에 언어 수 무제한이 포함됩니다. 차이는 사이트 수와 위의 Pro 기능뿐입니다.',
        rows: [
          { label: '가격', strong: true, cells: ['<strong>₩0</strong>', '<strong>₩95,000</strong><small>/년</small>', '<strong>₩199,000</strong><small>/년</small>', '<strong>₩389,000</strong><small>/년</small>'] },
          { label: '사이트 수', strong: true, cells: ['1', '1', '5', '무제한'] },
          { label: '언어 수', cells: ['무제한', '무제한', '무제한', '무제한'] },
          { label: '필드 단위 번역', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: '중복 글 없음', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: '깔끔한 URL + hreflang', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: '언어 전환기', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'ACF + 페이지 빌더', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: 'REST API + WP-CLI', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: '이전 미리보기와 되돌리기', cells: ['yes', 'yes', 'yes', 'yes'] },
          { label: '이전 실행', cells: ['no', 'yes', 'yes', 'yes'] },
          { label: 'WooCommerce 번역', cells: ['no', 'yes', 'yes', 'yes'] },
          { label: '기계 번역', cells: ['no', '5만 단어/년', '25만 단어/년', '100만 + 추가 구매'] },
          { label: '편집 워크플로', cells: ['no', 'no', 'yes', 'yes'] },
          { label: 'WP 멀티사이트', cells: ['no', 'no', 'no', 'yes'] },
          { label: '지원', cells: ['포럼', '이메일', '우선', '우선 + 인수인계'] }
        ]
      },

      lifetime: {
        badge: '창립 기념 · 한정',
        title: '평생 이용 — 사이트 5개, 한 번만 결제',
        copy: '수량을 정해 둔 출시 기념 제안입니다. 사이트 5개에 모든 Pro 기능, 평생 업데이트, 우선 지원 12개월까지. 자리가 소진되면 그것으로 끝입니다.',
        price: '₩599,000',
        once: '한 번',
        cta: '평생 이용 구매',
        seats: '100자리 중 100자리 남음'
      },

      trust: ['14일 환불 보장', '모든 요금제 언어 수 무제한', 'WPML 불필요'],
      cta: {
        kicker: '아직 고민 중이신가요?',
        title: '한 가지 언어로 먼저.<br />당신의 사이트에서 결정하세요.',
        copy: '무료 버전은 사이트 1개에서 언어 수가 무제한입니다. 페이지 하나만 번역해서 <em>/fr/</em>가 공개되는 걸 확인한 뒤에 결정하세요. 먼저 물어볼 것이 있다면 <a href="mailto:hello@lingo.com">hello@lingo.com</a>으로 보내주세요.',
        primary: 'FAQ 읽어보기',
        secondary: '문서'
      }
    }
  },

  faq: {
    hero: {
      eyebrow: '헬프 센터',
      lines: ['질문에,', '답합니다.'],
      copy: '하나의 글 구조, WPML에서의 이전, SEO, WooCommerce, 그리고 요금제까지 — 쉬운 말로.'
    },
    cta: {
      kicker: '아직 해결되지 않았나요?',
      title: '무엇이든 물어보세요.<br />개발자의 언어로 답합니다.',
      copy: '여기에 없는 질문이라면, 아마 좋은 질문일 겁니다. <a href="mailto:hello@lingo.com">hello@lingo.com</a>으로 보내주시면 곧바로 답을 드립니다.',
      primary: '요금제 보기',
      secondary: '문서'
    },

    groups: [
      {
        id: 'general',
        chip: '기본',
        index: '01 / 기본',
        title: '먼저 알아둘 것',
        lede: 'Lingo가 무엇인지, 데이터베이스에 무엇을 하는지, 그리고 무엇을 의도적으로 하지 않는지.',
        items: [
          { q: 'Lingo는 결국 어떤 것인가요?', a: ['워드프레스를 위한 다국어 레이어입니다. 정본 글은 하나만 유지하고, 모든 언어는 필드와 언어 코드를 키로 하는 작은 사이드 테이블에 담습니다. 필드 단위 번역, 깔끔한 <code>/{code}/</code> URL, 자동 hreflang — 사이트 위에 번역 관리 도구 한 벌을 얹지 않고도 얻을 수 있습니다.'] },
          { q: 'WPML이나 Polylang을 설치해 두어야 하나요?', a: ['아니요. Lingo는 자체 저장 구조와 자체 API를 가진 독립 플러그인입니다. WPML, Polylang, qTranslate-XT, TranslatePress에서 <em>가져오기</em>는 가능하지만, 실행 중에 그것들에 의존하지는 않습니다.'] },
          { q: '글이 복제되지는 않나요?', a: ['아니요. 그게 핵심입니다. 정본 글은 ID를 유지한 채 하나로 남고, 번역은 그 옆에 놓입니다. 2개 언어든 8개 언어든 글 목록도, 고유주소도, 관리자 화면도 지금과 똑같은 길이로 유지됩니다.'] },
          { q: '콘텐츠가 자동으로 번역되나요?', a: ['아니요. Lingo는 번역 <em>레이어</em>이지 번역 엔진이 아닙니다. 각 언어를 쓰는 것은 당신이나 번역자이고, Lingo는 그것을 저장하고 라우팅하고 제공합니다. <em>기본 언어에서 복사</em>를 쓰면 원문이 출발점으로 채워지므로 빈 칸을 마주할 일은 없습니다.'] },
          { q: '외부 서비스를 거치나요?', a: ['아니요. Lingo는 자체 호스팅입니다. 번역은 당신의 데이터베이스에 있고, 요청 경로에 외부 서비스가 끼어들지 않습니다. 나중에 떠나더라도 데이터는 당신의 것으로 가져갈 수 있습니다.'] },
          { q: '몇 개 언어까지 운영할 수 있나요?', a: ['원하는 만큼입니다. 무료 버전을 포함해 모든 요금제에서 언어 수는 무제한입니다. 달라지는 건 사이트 수와 그 위에 얹히는 Pro 기능뿐입니다.'] }
        ]
      },
      {
        id: 'migration',
        chip: '이전',
        index: '02 / 이전',
        title: '옮겨오기',
        lede: '보고, 적용하고, 되돌릴 수 있습니다. 갈아타는 일이 도약처럼 느껴져서는 안 됩니다.',
        items: [
          { q: '어떤 플러그인에서 이전할 수 있나요?', a: ['WPML, Polylang, qTranslate-XT, TranslatePress입니다. 각각 전용 가져오기 도구가 있어서, 그 플러그인이 실제로 번역을 저장한 방식에 맞춰 매핑됩니다.'] },
          { q: '갈아타는 위험은 어느 정도인가요?', a: ['설계상 낮게 잡았습니다. 먼저 드라이런을 실행하세요. 무료이고 아무것도 쓰지 않습니다. 숫자가 맞으면 적용하고, 언제든 되돌릴 수 있습니다. 어느 단계에서도 원본 콘텐츠가 파괴되지 않습니다.'] },
          { q: '드라이런에서는 실제로 무엇이 보이나요?', a: ['한 행도 쓰기 전에, Lingo가 가져오게 될 글과 언어 전부를 확인할 수 있습니다.', '<code>wp lingo wpml-dryrun</code> → 준비되면 <code>wp lingo wpml-migrate</code>.'] },
          { q: '무엇이 가져와지나요?', a: ['번역된 제목·본문·요약, 사용자 정의 필드, 분류 용어와 설명, 그리고 미디어 텍스트입니다. 각각이 속한 정본 글에, 언어 배정을 유지한 채 매핑됩니다.'] },
          { q: '정말로 되돌릴 수 있나요?', a: ['네. 되돌리기는 이전 작업이 Lingo에 쓴 내용을 되감습니다. 기존 플러그인이 저장해 둔 것은 그 자리에 그대로 남으므로, 돌아가서 조정한 뒤 다시 실행할 수 있습니다.'] },
          { q: '기존 플러그인을 계속 설치해 두어야 하나요?', a: ['결과를 확인하는 동안만 필요합니다. 모든 언어에서 프런트가 올바르게 보이면 기존 플러그인은 비활성화해도 됩니다. 가져오기 이후 Lingo는 그곳에서 읽지 않습니다.'] }
        ]
      },
      {
        id: 'seo',
        chip: 'SEO와 URL',
        index: '03 / SEO와 URL',
        title: '검색은 지킨 채로',
        lede: '깔끔한 경로와 올바른 alternate가 첫 번역을 공개하기 전에 이미 준비되어 있습니다.',
        items: [
          { q: 'URL은 어떤 모양이 되나요?', a: ['기본 언어는 루트에 그대로 — <code>example.com/about/</code> — 나머지 언어는 각자의 코드 아래로 들어갑니다: <code>example.com/fr/about/</code>. 쿼리 문자열도, 따로 준비할 서브도메인도 없습니다.'] },
          { q: 'hreflang은 자동인가요?', a: ['네. hreflang alternate와 <code>x-default</code>가 자동으로 출력됩니다. 주석을 다는 단계도, 언어를 추가할 때 손으로 관리할 것도 없습니다.'] },
          { q: '중복 콘텐츠가 되지는 않나요?', a: ['되지 않습니다. 언어마다 고유한 URL이 있고 alternate가 선언되어 있는데, 그것이 바로 검색 엔진이 보는 신호입니다. 구조는 하나, 언어 버전이 여럿일 뿐입니다.'] },
          { q: 'Yoast, RankMath, SEOPress와 함께 쓸 수 있나요?', a: ['네. 제목과 메타가 언어별로 해석되므로, 지금 쓰는 SEO 플러그인은 대체되지 않고 그대로 동작합니다.'] },
          { q: '슬러그도 번역할 수 있나요?', a: ['네. 슬러그는 언어별로 번역할 수 있습니다. 프랑스어 독자가 받는 것은 <code>/fr/</code>만 뒤집어쓴 영어 URL이 아니라 프랑스어 URL입니다.'] }
        ]
      },
      {
        id: 'editing',
        chip: '편집',
        index: '04 / 편집',
        title: '쓰기와 번역하기',
        lede: 'Lingo는 블록 편집기 안에 있습니다. 새로 익혀야 할 두 번째 작업 공간은 없습니다.',
        items: [
          { q: '실제로 어디에서 번역하나요?', a: ['지금 편집 중인 그 글 안에서입니다. <em>언어 (Lingo)</em> 패널로 편집 언어를 바꾸기만 하면, 편집기는 편집기 그대로입니다 — 같은 블록, 같은 단축키, 같은 미리보기.'] },
          { q: '어떤 필드를 번역할 수 있나요?', a: ['제목·본문·요약, ACF를 포함한 사용자 정의 필드와 일반 메타, 분류 용어와 그 설명, 그리고 미디어 대체 텍스트와 캡션입니다. 번역할 것만 번역하고 나머지는 그대로 두세요.'] },
          { q: '실수로 원문을 덮어쓸 수 있나요?', a: ['원문 언어의 콘텐츠가 번역으로 덮어써지는 일은 없습니다. <em>기본 언어에서 복사</em>는 지금 작업 중인 언어 <em>안으로</em>만 복사합니다.'] },
          { q: '구텐베르크 블록은 어떻게 되나요?', a: ['코어 블록은 일반적인 <code>post_content</code>로 번역되어 워드프레스 자체의 블록 렌더링을 거칩니다. 별도의 렌더러도, 블록별 매핑 표도 없습니다.'] },
          { q: '테마와 플러그인의 UI 문구는 어떻게 번역하나요?', a: ['간단한 문자열 레지스트리를 통해서입니다. <code>pll__</code> / <code>icl_</code> 호환 심이 있어서 Polylang이나 WPML을 위해 만들어진 테마도 이전 후 그대로 동작합니다. 첫날부터 템플릿 코드를 다시 쓸 필요가 없습니다.'] },
          { q: '언어 전환기는 어디에 둘 수 있나요?', a: ['테마에 자리가 있는 곳이라면 어디든지: <code>[lingo_switcher]</code> 숏코드, 위젯, 언어 전환기 블록, <em>외모 → 메뉴</em>의 언어 항목, 또는 <code>lingo_language_switcher()</code> 템플릿 태그. 목록·인라인·드롭다운 스타일을 고를 수 있습니다.'] }
        ]
      },
      {
        id: 'woocommerce',
        chip: 'WooCommerce',
        index: '05 / WooCommerce',
        title: '모든 언어로 판매하기',
        lede: '나중에 붙인 것이 아니라 처음부터 내장. 따로 라이선스할 커머스 애드온이 없습니다.',
        items: [
          { q: 'WooCommerce를 위해 별도 애드온이 필요한가요?', a: ['아니요. WooCommerce 번역은 유료 요금제에 포함되어 있으며 별도 구매가 아닙니다.'] },
          { q: '스토어에서는 무엇을 번역할 수 있나요?', a: ['상품명과 상품 설명, 상품 카테고리, 변형 속성 값 — 고객이 결정하기 전에 실제로 읽는 문구입니다.'] },
          { q: '장바구니·결제·계정 페이지도 언어를 따라가나요?', a: ['네. <code>/fr/shop</code>부터 장바구니, 결제, 고객 계정까지 구매 흐름 전체가 같은 언어 접두사 아래에 머뭅니다.'] },
          { q: '다중 통화도 지원하나요?', a: ['아니요, 그런 척도 하지 않습니다. Lingo가 맡는 것은 콘텐츠 번역과 URL 라우팅이고, 가격과 통화는 WooCommerce와 이미 쓰고 계신 통화 확장의 몫입니다.'] }
        ]
      },
      {
        id: 'plans',
        chip: '요금제와 지원',
        index: '06 / 요금제와 지원',
        title: '구매와 도움받기',
        lede: '각 요금제에 무엇이 포함되는지, 업데이트는 어떻게 오는지, 개발자용 접점은 어디에 있는지.',
        items: [
          { q: '무료 버전에는 무엇이 포함되나요?', a: ['사이트 1개에서 언어 수 무제한, 그리고 완전한 코어 일습입니다. 필드 단위 번역, 깔끔한 URL, 자동 hreflang, 전환기, 그리고 되돌리기가 포함된 이전 미리보기. 데모가 아니라 정직한 입구입니다.'] },
          { q: '유료 요금제에서는 무엇이 더해지나요?', a: ['사이트 수와 Pro 기능입니다. 이전 실행(미리보기만이 아니라), WooCommerce 상품 번역, 기계 번역, 편집 워크플로, WP 멀티사이트, 그리고 자동 업데이트가 딸린 우선 지원.'] },
          { q: '클라이언트 사이트에는 어떤 요금제가 필요한가요?', a: ['Business는 연 ₩199,000에 5개 사이트까지입니다. Agency는 연 ₩389,000에 사이트 활성화가 무제한이고 WP 멀티사이트까지 지원 — 다국어가 클라이언트에게 넘기는 결과물의 일상적인 일부라면 고를 것은 Agency입니다.'] },
          { q: '환불받을 수 있나요?', a: ['네. 유료 요금제에는 14일 환불 보장이 있습니다. 그리고 결정하기 전에 무료 버전을 원하는 만큼 오래 쓰셔도 됩니다.'] },
          { q: '나중에 요금제를 바꿀 수 있나요?', a: ['네. 번역은 당신의 데이터베이스에 있으므로, 요금제를 옮기는 것은 라이선스 변경이지 콘텐츠 이전이 아닙니다.'] },
          { q: '업데이트는 어떻게 오나요?', a: ['워드프레스의 평소 업데이트 화면을 통해서입니다. 유료 업데이트는 자체 호스팅되고 무결성이 검증되므로, 따로 로그인할 대시보드도 없고 클라이언트에게 새로 가르칠 것도 없습니다.'] },
          { q: '개발자용 API가 있나요?', a: ['있습니다. WP-CLI 명령어, REST API를 통한 언어 해석, 그리고 문서화된 훅과 필터 일습. 지루한 부분은 자동화하고 나머지는 편집자에게 맡기세요.'] }
        ]
      }
    ]
  }
}
