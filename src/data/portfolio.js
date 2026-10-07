// src/data/portfolio.js
//
// Source centrale des données du portfolio.
//
// RÈGLE :
// Ne jamais ajouter une expérience, une technologie, un projet,
// une certification ou un résultat qui n'a pas été confirmé.
//
// Les valeurs inconnues restent volontairement vides.

const portfolio = {
  // =========================================================
  // IDENTITÉ
  // =========================================================
  identity: {
    name: "BILE Abran Claire Lydia",

    role: {
      fr: "Développeuse Web Full-Stack",
      en: "Full-Stack Web Developer",
      "pt-BR": "Desenvolvedora Web Full-Stack",
      ja: "フルスタックWeb開発者",
      ar: "مطوّرة ويب متكاملة",
    },

    email: "abranclaire2022@gmail.com",

    phone: "+225 0104997402",

    location: {
      fr: "Abidjan, Côte d'Ivoire",
      en: "Abidjan, Côte d'Ivoire",
      "pt-BR": "Abidjan, Costa do Marfim",
      ja: "アビジャン、コートジボワール",
      ar: "أبيدجان، ساحل العاج",
    },
  },

  // =========================================================
  // HERO / PRÉSENTATION
  // =========================================================
  hero: {
    valueProposition: {
      fr:
        "Je transforme des besoins en expériences web claires, fonctionnelles et soignées.",

      en:
        "I turn needs into clear, functional and polished web experiences.",

      "pt-BR":
        "Transformo necessidades em experiências web claras, funcionais e bem elaboradas.",

      ja:
        "ニーズを、分かりやすく機能的で洗練されたWeb体験へと形にします。",

      ar:
        "أحوّل الاحتياجات إلى تجارب ويب واضحة وعملية ومتقنة.",
    },

    introduction: {
      fr:
        "Du front-end au back-end, je conçois des applications utiles, fluides et cohérentes.",

      en:
        "From front-end to back-end, I build useful, fluid and consistent applications.",

      "pt-BR":
        "Do front-end ao back-end, desenvolvo aplicações úteis, fluidas e coerentes.",

      ja:
        "フロントエンドからバックエンドまで、使いやすく一貫性のあるアプリケーションを開発しています。",

      ar:
        "من الواجهة الأمامية إلى الخلفية، أصمم تطبيقات عملية وسلسة ومتناسقة.",
    },
  },

  // =========================================================
  // DISPONIBILITÉ
  // =========================================================
  availability: {
    fr: "Disponible pour des opportunités professionnelles",
    en: "Available for professional opportunities",
    "pt-BR": "Disponível para oportunidades profissionais",
    ja: "新しい仕事の機会を探しています",
    ar: "متاحة للفرص المهنية",
  },

  // =========================================================
  // LIENS
  // =========================================================
  links: {
    github: "https://github.com/abranclaire2022-cloud",

    linkedin:
      "https://www.linkedin.com/in/abran-claire-lydia-bilé-a55317237",

    // Un seul CV français existe actuellement.
    cv: {
      fr: "/cv/CV_Abran_Claire.pdf",
      en: "/cv/CV_Abran_Claire.pdf",
      "pt-BR": "/cv/CV_Abran_Claire.pdf",
      ja: "/cv/CV_Abran_Claire.pdf",
      ar: "/cv/CV_Abran_Claire.pdf",

      language: "fr",

      downloadName: "CV_Abran_Claire_Lydia_BILE.pdf",
    },

    socials: [],
  },

  // =========================================================
  // STACK TECHNIQUE CONFIRMÉE
  // =========================================================
  stack: [
    {
      id: "frontend",

      category: {
        fr: "Front-end",
        en: "Front-end",
        "pt-BR": "Front-end",
        ja: "フロントエンド",
        ar: "الواجهة الأمامية",
      },

      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },

    {
      id: "backend",

      category: {
        fr: "Back-end",
        en: "Back-end",
        "pt-BR": "Back-end",
        ja: "バックエンド",
        ar: "الخلفية البرمجية",
      },

      skills: [
        "PHP",
        "Laravel",
        "Node.js",
      ],
    },

    {
      id: "database",

      category: {
        fr: "Bases de données",
        en: "Databases",
        "pt-BR": "Bancos de dados",
        ja: "データベース",
        ar: "قواعد البيانات",
      },

      skills: [
        "MySQL",
      ],
    },

    {
      id: "tools",

      category: {
        fr: "Outils & CMS",
        en: "Tools & CMS",
        "pt-BR": "Ferramentas & CMS",
        ja: "ツール & CMS",
        ar: "الأدوات وCMS",
      },

      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "WordPress",
      ],
    },
  ],

  // =========================================================
  // PROJETS
  // =========================================================
  projects: [
    {
      id: "avibz",

      title: {
        fr: "A’VIBZ",
        en: "A’VIBZ",
        "pt-BR": "A’VIBZ",
        ja: "A’VIBZ",
        ar: "A’VIBZ",
      },

      type: {
        fr: "Plateforme e-commerce immersive",
        en: "Immersive e-commerce platform",
        "pt-BR": "Plataforma de e-commerce imersiva",
        ja: "没入型ECプラットフォーム",
        ar: "منصة تجارة إلكترونية غامرة",
      },

      status: {
        fr: "En cours",
        en: "In progress",
        "pt-BR": "Em desenvolvimento",
        ja: "開発中",
        ar: "قيد التطوير",
      },

      description: {
        fr:
          "Une plateforme e-commerce full-stack qui associe mode, expérience immersive et découverte culturelle autour des symboles Adinkra.",

        en:
          "A full-stack e-commerce platform combining fashion, immersive experiences and cultural discovery through Adinkra symbols.",

        "pt-BR":
          "Uma plataforma de e-commerce full-stack que combina moda, experiências imersivas e descoberta cultural por meio dos símbolos Adinkra.",

        ja:
          "ファッション、没入型体験、そしてアディンクラ・シンボルを通じた文化的発見を組み合わせたフルスタックECプラットフォームです。",

        ar:
          "منصة تجارة إلكترونية متكاملة تجمع بين الأزياء والتجربة الغامرة والاكتشاف الثقافي من خلال رموز أدينكرا.",
      },

      problem: {
        fr:
          "Les boutiques de mode en ligne proposent généralement des expériences classiques qui séparent l’achat, la personnalisation et la découverte culturelle.",

        en:
          "Online fashion stores generally provide conventional experiences that separate shopping, personalization and cultural discovery.",

        "pt-BR":
          "As lojas de moda on-line geralmente oferecem experiências convencionais que separam compra, personalização e descoberta cultural.",

        ja:
          "一般的なオンラインファッションストアでは、購入、カスタマイズ、文化的な発見が別々の体験として提供されることが多くあります。",

        ar:
          "تقدم متاجر الأزياء عبر الإنترنت عادةً تجارب تقليدية تفصل بين التسوق والتخصيص والاكتشاف الثقافي.",
      },

      solution: {
        fr:
          "A’VIBZ réunit un catalogue e-commerce, un espace membre, un panier, le suivi des commandes, une bibliothèque interactive de symboles Adinkra et une expérience produit intégrant la 3D.",

        en:
          "A’VIBZ combines an e-commerce catalogue, member area, shopping cart, order tracking, an interactive Adinkra symbol library and a product experience integrating 3D.",

        "pt-BR":
          "A’VIBZ reúne um catálogo de e-commerce, área de membros, carrinho de compras, acompanhamento de pedidos, uma biblioteca interativa de símbolos Adinkra e uma experiência de produto com integração 3D.",

        ja:
          "A’VIBZは、ECカタログ、会員エリア、ショッピングカート、注文追跡、インタラクティブなアディンクラ・シンボルライブラリ、そして3Dを取り入れた商品体験を統合しています。",

        ar:
          "تجمع A’VIBZ بين كتالوج للتجارة الإلكترونية ومنطقة للأعضاء وسلة تسوق وتتبع الطلبات ومكتبة تفاعلية لرموز أدينكرا وتجربة منتجات تتضمن العرض ثلاثي الأبعاد.",
      },

      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
      ],

      highlights: {
        fr: [
          "Catalogue et fiches produits",
          "Visualisation de produit avec avatar 3D",
          "Bibliothèque interactive de symboles Adinkra",
          "Fiches détaillées avec origine, signification et histoire",
          "Panier et parcours de commande",
          "Sélection du moyen de paiement dans le checkout",
          "Historique des commandes",
          "Authentification et espace membre",
        ],

        en: [
          "Product catalogue and product pages",
          "Product visualization with 3D avatar",
          "Interactive Adinkra symbol library",
          "Detailed symbol pages with origin, meaning and history",
          "Shopping cart and checkout flow",
          "Payment method selection within the checkout",
          "Order history",
          "Authentication and member area",
        ],

        "pt-BR": [
          "Catálogo e páginas de produtos",
          "Visualização de produto com avatar 3D",
          "Biblioteca interativa de símbolos Adinkra",
          "Páginas detalhadas com origem, significado e história",
          "Carrinho de compras e processo de checkout",
          "Seleção do método de pagamento no checkout",
          "Histórico de pedidos",
          "Autenticação e área de membros",
        ],

        ja: [
          "商品カタログと商品詳細ページ",
          "3Dアバターによる商品ビジュアライゼーション",
          "インタラクティブなアディンクラ・シンボルライブラリ",
          "起源・意味・歴史を含む詳細ページ",
          "ショッピングカートと注文フロー",
          "チェックアウトでの支払い方法選択",
          "注文履歴",
          "認証と会員エリア",
        ],

        ar: [
          "كتالوج المنتجات وصفحات تفاصيل المنتجات",
          "عرض المنتجات باستخدام شخصية ثلاثية الأبعاد",
          "مكتبة تفاعلية لرموز أدينكرا",
          "صفحات تفصيلية توضح الأصل والمعنى والتاريخ",
          "سلة التسوق ومسار إتمام الطلب",
          "اختيار وسيلة الدفع أثناء إتمام الطلب",
          "سجل الطلبات",
          "المصادقة ومنطقة الأعضاء",
        ],
      },

      result: {
        fr:
          "Projet actuellement en évolution avec amélioration de l’expérience utilisateur, des fonctionnalités immersives et du parcours e-commerce avant sa mise en ligne.",

        en:
          "The project is currently evolving, with improvements to the user experience, immersive features and e-commerce journey before deployment.",

        "pt-BR":
          "O projeto está atualmente em evolução, com melhorias na experiência do usuário, nos recursos imersivos e na jornada de e-commerce antes da publicação.",

        ja:
          "現在も開発を進めており、公開に向けてユーザー体験、没入型機能、EC購入フローを改善しています。",

        ar:
          "المشروع قيد التطوير حاليًا، مع تحسين تجربة المستخدم والوظائف الغامرة ومسار التجارة الإلكترونية قبل إطلاقه.",
      },

      image: "/projects/avibz-3d.png",

      gallery: [
        {
          src: "/projects/avibz-3d.png",

          label: {
            fr: "Expérience produit 3D",
            en: "3D product experience",
            "pt-BR": "Experiência de produto em 3D",
            ja: "3D商品体験",
            ar: "تجربة المنتج ثلاثية الأبعاد",
          },
        },

        {
          src: "/projects/avibz-products.png",

          label: {
            fr: "Catalogue e-commerce",
            en: "E-commerce catalogue",
            "pt-BR": "Catálogo de e-commerce",
            ja: "EC商品カタログ",
            ar: "كتالوج التجارة الإلكترونية",
          },
        },

        {
          src: "/projects/avibz-symbols.png",

          label: {
            fr: "Bibliothèque de symboles Adinkra",
            en: "Adinkra symbol library",
            "pt-BR": "Biblioteca de símbolos Adinkra",
            ja: "アディンクラ・シンボルライブラリ",
            ar: "مكتبة رموز أدينكرا",
          },
        },

        {
          src: "/projects/avibz-symbol-detail.png",

          label: {
            fr: "Exploration détaillée d’un symbole",
            en: "Detailed symbol exploration",
            "pt-BR": "Exploração detalhada de um símbolo",
            ja: "シンボル詳細",
            ar: "استكشاف تفصيلي للرمز",
          },
        },

        {
          src: "/projects/avibz-orders.png",

          label: {
            fr: "Suivi des commandes",
            en: "Order tracking",
            "pt-BR": "Acompanhamento de pedidos",
            ja: "注文管理",
            ar: "متابعة الطلبات",
          },
        },
      ],

      liveUrl: "",
      githubUrl: "",
    },
  ],

  // =========================================================
  // EXPÉRIENCES SÉLECTIONNÉES
  // =========================================================
  experience: [
    {
      id: "zehawi-technologie",

      type: {
        fr: "Stage",
        en: "Internship",
        "pt-BR": "Estágio",
        ja: "インターンシップ",
        ar: "تدريب",
      },

      position: {
        fr: "Stagiaire Développeuse Web",
        en: "Web Developer Intern",
        "pt-BR": "Estagiária em Desenvolvimento Web",
        ja: "Web開発インターン",
        ar: "متدربة تطوير ويب",
      },

      company: "ZEHAWI TECHNOLOGIE SARL",

      location: {
        fr: "Tunis, Tunisie",
        en: "Tunis, Tunisia",
        "pt-BR": "Túnis, Tunísia",
        ja: "チュニス、チュニジア",
        ar: "تونس، تونس",
      },

      startDate: {
        fr: "Sept. 2025",
        en: "Sep. 2025",
        "pt-BR": "Set. 2025",
        ja: "2025年9月",
        ar: "سبتمبر 2025",
      },

      endDate: {
        fr: "Déc. 2025",
        en: "Dec. 2025",
        "pt-BR": "Dez. 2025",
        ja: "2025年12月",
        ar: "ديسمبر 2025",
      },

      current: false,

      description: {
        fr: [
          "Conception et développement d’une solution e-commerce intégrant des fonctionnalités 3D.",
          "Utilisation de Laravel pour la gestion back-end.",
        ],

        en: [
          "Designed and developed an e-commerce solution integrating 3D features.",
          "Used Laravel for back-end management.",
        ],

        "pt-BR": [
          "Concepção e desenvolvimento de uma solução de e-commerce com funcionalidades 3D.",
          "Utilização do Laravel para a gestão do back-end.",
        ],

        ja: [
          "3D機能を組み込んだECソリューションの設計と開発。",
          "バックエンド管理にLaravelを使用。",
        ],

        ar: [
          "تصميم وتطوير حل للتجارة الإلكترونية يتضمن وظائف ثلاثية الأبعاد.",
          "استخدام Laravel لإدارة الواجهة الخلفية.",
        ],
      },

      technologies: [
        "Laravel",
      ],
    },

    {
      id: "deloitte-cybersecurity",

      type: {
        fr: "Projet professionnel · Simulation",
        en: "Professional project · Simulation",
        "pt-BR": "Projeto profissional · Simulação",
        ja: "職業体験プロジェクト · シミュレーション",
        ar: "مشروع مهني · محاكاة",
      },

      position: {
        fr: "Simulation en cybersécurité",
        en: "Cybersecurity Simulation",
        "pt-BR": "Simulação em Cibersegurança",
        ja: "サイバーセキュリティ・シミュレーション",
        ar: "محاكاة في الأمن السيبراني",
      },

      company: "Deloitte",

      location: {
        fr: "",
        en: "",
        "pt-BR": "",
        ja: "",
        ar: "",
      },

      startDate: {
        fr: "Sept. 2026",
        en: "Sep. 2026",
        "pt-BR": "Set. 2026",
        ja: "2026年9月",
        ar: "سبتمبر 2026",
      },

      endDate: {
        fr: "",
        en: "",
        "pt-BR": "",
        ja: "",
        ar: "",
      },

      current: false,

      description: {
        fr: [
          "Lecture et analyse de journaux de connexion.",
          "Repérage d’activités inhabituelles.",
          "Rédaction d’une courte conclusion sur les résultats.",
        ],

        en: [
          "Reviewed and analyzed connection logs.",
          "Identified unusual activities.",
          "Wrote a short conclusion based on the findings.",
        ],

        "pt-BR": [
          "Leitura e análise de logs de conexão.",
          "Identificação de atividades incomuns.",
          "Redação de uma breve conclusão com base nos resultados.",
        ],

        ja: [
          "接続ログの確認と分析。",
          "通常とは異なるアクティビティの特定。",
          "結果に基づく簡潔な考察の作成。",
        ],

        ar: [
          "قراءة سجلات الاتصال وتحليلها.",
          "تحديد الأنشطة غير المعتادة.",
          "كتابة خلاصة قصيرة بناءً على النتائج.",
        ],
      },

      technologies: [],
    },

    {
      id: "emarketing",

      type: {
        fr: "Stage",
        en: "Internship",
        "pt-BR": "Estágio",
        ja: "インターンシップ",
        ar: "تدريب",
      },

      position: {
        fr: "Stagiaire en Infographie et Design",
        en: "Graphic Design Intern",
        "pt-BR": "Estagiária em Design Gráfico",
        ja: "グラフィックデザイン・インターン",
        ar: "متدربة في التصميم الجرافيكي",
      },

      company: "E-MARKETING",

      location: {
        fr: "Tunis, Tunisie",
        en: "Tunis, Tunisia",
        "pt-BR": "Túnis, Tunísia",
        ja: "チュニス、チュニジア",
        ar: "تونس، تونس",
      },

      startDate: {
        fr: "Avr. 2024",
        en: "Apr. 2024",
        "pt-BR": "Abr. 2024",
        ja: "2024年4月",
        ar: "أبريل 2024",
      },

      endDate: {
        fr: "Juin 2024",
        en: "Jun. 2024",
        "pt-BR": "Jun. 2024",
        ja: "2024年6月",
        ar: "يونيو 2024",
      },

      current: false,

      description: {
        fr: [
          "Création de supports visuels pour les réseaux sociaux.",
          "Contribution à la refonte graphique d’un site web local.",
          "Élaboration de chartes graphiques pour différents clients.",
        ],

        en: [
          "Created visual content for social media.",
          "Contributed to the visual redesign of a local website.",
          "Created visual identity guidelines for different clients.",
        ],

        "pt-BR": [
          "Criação de materiais visuais para redes sociais.",
          "Contribuição para a reformulação visual de um site local.",
          "Criação de identidades e diretrizes visuais para diferentes clientes.",
        ],

        ja: [
          "SNS向けビジュアルコンテンツの制作。",
          "地域のWebサイトのビジュアルリデザインに参加。",
          "複数のクライアント向けにビジュアルガイドラインを作成。",
        ],

        ar: [
          "إنشاء محتوى بصري لمنصات التواصل الاجتماعي.",
          "المساهمة في إعادة التصميم البصري لموقع إلكتروني محلي.",
          "إعداد أدلة للهوية البصرية لعملاء مختلفين.",
        ],
      },

      technologies: [],
    },
  ],

  // =========================================================
  // FORMATION
  // =========================================================
  education: [
    {
      id: "bts-marketing-multimedia",

      // Nom officiel du diplôme conservé.
      // La spécialité est traduite selon la langue du site.
      degree: {
        fr:
          "Brevet de Technicien Supérieur (BTS) — Marketing et Multimédia",

        en:
          "Brevet de Technicien Supérieur (BTS) — Marketing and Multimedia",

        "pt-BR":
          "Brevet de Technicien Supérieur (BTS) — Marketing e Multimídia",

        ja:
          "Brevet de Technicien Supérieur（BTS）— マーケティング＆マルチメディア",

        ar:
          "Brevet de Technicien Supérieur (BTS) — التسويق والوسائط المتعددة",
      },

      // Explication du niveau du diplôme pour les visiteurs
      // qui ne connaissent pas le système francophone.
      degreeExplanation: {
        fr: "Diplôme de technicien supérieur",
        en: "Higher technician qualification",
        "pt-BR": "Qualificação de técnico superior",
        ja: "上級技術者資格",
        ar: "مؤهل تقني عالٍ",
      },

      // Nom officiel de l'établissement conservé.
      institution:
        "Centre Sectoriel de Formation de Télécommunication - Cité El Khadhra",

      location: {
        fr: "Tunis, Tunisie",
        en: "Tunis, Tunisia",
        "pt-BR": "Túnis, Tunísia",
        ja: "チュニス、チュニジア",
        ar: "تونس، تونس",
      },

      startDate: {
        fr: "Sept. 2023",
        en: "Sep. 2023",
        "pt-BR": "Set. 2023",
        ja: "2023年9月",
        ar: "سبتمبر 2023",
      },

      endDate: {
        fr: "Mars 2026",
        en: "Mar. 2026",
        "pt-BR": "Mar. 2026",
        ja: "2026年3月",
        ar: "مارس 2026",
      },

      status: {
        fr: "Diplôme obtenu",
        en: "Graduated",
        "pt-BR": "Diploma obtido",
        ja: "修了",
        ar: "تم الحصول على الشهادة",
      },

      distinction: {
        fr: "Mention Excellente",
        en: "Excellent distinction",
        "pt-BR": "Menção Excelente",
        ja: "優秀評価",
        ar: "تقدير ممتاز",
      },

      coursework: {
        fr: [
          "Développement web",
          "HTML / CSS",
          "Programmation",
          "Python",
          "Réseaux informatiques",
          "Marketing digital",
          "Infographie",
          "Audiovisuel",
          "Montage vidéo",
        ],

        en: [
          "Web Development",
          "HTML / CSS",
          "Programming",
          "Python",
          "Computer Networks",
          "Digital Marketing",
          "Graphic Design",
          "Audiovisual Production",
          "Video Editing",
        ],

        "pt-BR": [
          "Desenvolvimento web",
          "HTML / CSS",
          "Programação",
          "Python",
          "Redes de computadores",
          "Marketing digital",
          "Design gráfico",
          "Produção audiovisual",
          "Edição de vídeo",
        ],

        ja: [
          "Web開発",
          "HTML / CSS",
          "プログラミング",
          "Python",
          "コンピュータネットワーク",
          "デジタルマーケティング",
          "グラフィックデザイン",
          "映像制作",
          "動画編集",
        ],

        ar: [
          "تطوير الويب",
          "HTML / CSS",
          "البرمجة",
          "Python",
          "شبكات الحاسوب",
          "التسويق الرقمي",
          "التصميم الجرافيكي",
          "الإنتاج السمعي البصري",
          "تحرير الفيديو",
        ],
      },
    },

    {
      id: "baccalaureat-a1",

      degree: {
        fr: "Baccalauréat — Série A1",
        en: "Baccalaureate — Series A1",
        "pt-BR": "Baccalauréat — Série A1",
        ja: "バカロレア — A1系列",
        ar: "البكالوريا — شعبة A1",
      },

      institution:
        "Lycée Municipal d’Abobo",

      location: {
        fr: "Abidjan, Côte d'Ivoire",
        en: "Abidjan, Côte d'Ivoire",
        "pt-BR": "Abidjan, Costa do Marfim",
        ja: "アビジャン、コートジボワール",
        ar: "أبيدجان، ساحل العاج",
      },

      startDate: {
        fr: "",
        en: "",
        "pt-BR": "",
        ja: "",
        ar: "",
      },

      endDate: {
        fr: "2020",
        en: "2020",
        "pt-BR": "2020",
        ja: "2020年",
        ar: "2020",
      },

      status: {
        fr: "Diplôme obtenu",
        en: "Graduated",
        "pt-BR": "Diploma obtido",
        ja: "卒業",
        ar: "تم الحصول على الشهادة",
      },

      distinction: {
        fr: "",
        en: "",
        "pt-BR": "",
        ja: "",
        ar: "",
      },

      coursework: {
        fr: [],
        en: [],
        "pt-BR": [],
        ja: [],
        ar: [],
      },
    },
  ],

  // =========================================================
  // PROFIL COMPLÉMENTAIRE
  // =========================================================
  profileExtras: {
    // =======================================================
    // LANGUES
    // =======================================================
    languages: [
      {
        id: "french",

        name: {
          fr: "Français",
          en: "French",
          "pt-BR": "Francês",
          ja: "フランス語",
          ar: "الفرنسية",
        },

        level: {
          fr: "Bonne maîtrise",
          en: "Good command",
          "pt-BR": "Bom domínio",
          ja: "良好な運用能力",
          ar: "إتقان جيد",
        },
      },

      {
        id: "english",

        name: {
          fr: "Anglais",
          en: "English",
          "pt-BR": "Inglês",
          ja: "英語",
          ar: "الإنجليزية",
        },

        level: {
          fr: "Fondamentaux",
          en: "Fundamentals",
          "pt-BR": "Fundamentos",
          ja: "基礎",
          ar: "الأساسيات",
        },
      },
    ],

    // =======================================================
    // COMPÉTENCES HUMAINES / ATOUTS
    // =======================================================
    softSkills: [
      {
        fr: "Adaptabilité",
        en: "Adaptability",
        "pt-BR": "Adaptabilidade",
        ja: "適応力",
        ar: "القدرة على التكيف",
      },

      {
        fr: "Agilité",
        en: "Agility",
        "pt-BR": "Agilidade",
        ja: "柔軟性",
        ar: "المرونة",
      },

      {
        fr: "Résolution de problèmes",
        en: "Problem solving",
        "pt-BR": "Resolução de problemas",
        ja: "問題解決",
        ar: "حل المشكلات",
      },

      {
        fr: "Esprit d’équipe",
        en: "Teamwork",
        "pt-BR": "Trabalho em equipe",
        ja: "チームワーク",
        ar: "العمل الجماعي",
      },

      {
        fr: "Créativité",
        en: "Creativity",
        "pt-BR": "Criatividade",
        ja: "創造性",
        ar: "الإبداع",
      },

      {
        fr: "Polyvalence",
        en: "Versatility",
        "pt-BR": "Versatilidade",
        ja: "多様な対応力",
        ar: "تعدد المهارات",
      },

      {
        fr: "Travail sous pression",
        en: "Working under pressure",
        "pt-BR": "Trabalho sob pressão",
        ja: "プレッシャー下での対応",
        ar: "العمل تحت الضغط",
      },

      {
        fr: "Flexibilité",
        en: "Flexibility",
        "pt-BR": "Flexibilidade",
        ja: "柔軟な対応",
        ar: "المرونة في العمل",
      },
    ],

    // =======================================================
    // CERTIFICATIONS
    // =======================================================
    certifications: [
      {
        id: "cisco-data-analysis",

        issuer: "Cisco",

        title: {
          fr: "Analyse de données",
          en: "Data Analysis",
          "pt-BR": "Análise de dados",
          ja: "データ分析",
          ar: "تحليل البيانات",
        },

        // Date inconnue pour le moment.
        date: {
          fr: "",
          en: "",
          "pt-BR": "",
          ja: "",
          ar: "",
        },
      },
    ],

    // =======================================================
    // OUTILS BUREAUTIQUES
    // =======================================================
    officeTools: [
      "Excel",
      "Word",
      "PowerPoint",
    ],

    // =======================================================
    // ENGAGEMENT & RÉALISATION
    // =======================================================
    engagement: [
      {
        id: "ivorian-voluntary-repatriation-2023",

        title: {
          fr:
            "Réussite de l’opération de rapatriement volontaire des Ivoiriens de Tunisie",

          en:
            "Successful voluntary repatriation operation for Ivorians from Tunisia",

          "pt-BR":
            "Sucesso da operação de repatriamento voluntário de marfinenses da Tunísia",

          ja:
            "チュニジアからのコートジボワール人自主帰国支援活動",

          ar:
            "نجاح عملية العودة الطوعية للإيفواريين من تونس",
        },

        startDate: {
          fr: "23 février 2023",
          en: "23 February 2023",
          "pt-BR": "23 de fevereiro de 2023",
          ja: "2023年2月23日",
          ar: "23 فبراير 2023",
        },

        endDate: {
          fr: "19 mars 2023",
          en: "19 March 2023",
          "pt-BR": "19 de março de 2023",
          ja: "2023年3月19日",
          ar: "19 مارس 2023",
        },
      },
    ],
  },

  // =========================================================
  // CONTACT
  // =========================================================
  contact: {
    openTo: {
      fr: [
        "Opportunités professionnelles",
      ],

      en: [
        "Professional opportunities",
      ],

      "pt-BR": [
        "Oportunidades profissionais",
      ],

      ja: [
        "仕事の機会",
      ],

      ar: [
        "الفرص المهنية",
      ],
    },
  },
};

export default portfolio;