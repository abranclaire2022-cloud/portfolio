
"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";
import TiltCard from "@/components/effects/TiltCard";

/* =========================================================
   LYDIA PORTFOLIO — CYBER VIOLET
   SECTION COMPÉTENCES

   - 5 langues
   - Mode clair / sombre
   - Cartes TiltCard 3D
   - Technologies issues de portfolio.js
   - Responsive
========================================================= */

/* =========================================================
   TRADUCTIONS
========================================================= */

const content = {
  fr: {
    eyebrow: "Stack technique",
    title: "OUTILS & TECHNOLOGIES",
    subtitle: "Les technologies qui donnent forme à mes projets",
    description:
      "Du front-end au back-end, un ensemble d’outils que j’utilise pour construire des applications web complètes et structurées.",
  },

  en: {
    eyebrow: "Technical stack",
    title: "TOOLS & TECHNOLOGIES",
    subtitle: "The technologies that bring my projects to life",
    description:
      "From front-end to back-end, a set of tools I use to build complete and well-structured web applications.",
  },

  "pt-BR": {
    eyebrow: "Stack técnica",
    title: "FERRAMENTAS & TECNOLOGIAS",
    subtitle: "As tecnologias que dão forma aos meus projetos",
    description:
      "Do front-end ao back-end, um conjunto de ferramentas que utilizo para construir aplicações web completas e bem estruturadas.",
  },

  ja: {
    eyebrow: "技術スタック",
    title: "ツール & テクノロジー",
    subtitle: "プロジェクトを形にする技術",
    description:
      "フロントエンドからバックエンドまで、Webアプリケーションを一貫して構築するために使用している技術とツールです。",
  },

  ar: {
    eyebrow: "المجموعة التقنية",
    title: "الأدوات والتقنيات",
    subtitle: "التقنيات التي تحوّل مشاريعي إلى واقع",
    description:
      "من الواجهة الأمامية إلى الخلفية، أستخدم مجموعة من الأدوات لبناء تطبيقات ويب متكاملة ومنظمة.",
  },
};

/* =========================================================
   UTILITAIRES
========================================================= */

function translate(value, language) {
  if (typeof value === "string") {
    return value;
  }

  return value?.[language] ?? value?.fr ?? "";
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

/* =========================================================
   ICÔNES DES CATÉGORIES

   Icônes SVG décoratives :
   aucune bibliothèque supplémentaire requise.
========================================================= */

function CategoryIcon({ id }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const category = String(id || "").toLowerCase();

  if (
    category.includes("front") ||
    category.includes("client")
  ) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="15" rx="2" />
        <path d="M3 9h18M8 14l-2 2 2 2M16 14l2 2-2 2" />
      </svg>
    );
  }

  if (
    category.includes("back") ||
    category.includes("server")
  ) {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="7" rx="2" />
        <rect x="4" y="14" width="16" height="7" rx="2" />
        <path d="M8 6.5h.01M8 17.5h.01M12 10v4" />
      </svg>
    );
  }

  if (
    category.includes("data") ||
    category.includes("database") ||
    category.includes("base")
  ) {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </svg>
    );
  }

  if (
    category.includes("tool") ||
    category.includes("outil") ||
    category.includes("workflow")
  ) {
    return (
      <svg {...common}>
        <path d="M14 5a5 5 0 0 0-6.4 6.4L3 16l5 5 4.6-4.6A5 5 0 0 0 19 10" />
        <path d="m15 5 4 4M6 17l1 1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m8 5-5 7 5 7M16 5l5 7-5 7M14 3l-4 18" />
    </svg>
  );
}

/* =========================================================
   CARTE TECHNIQUE 3D
========================================================= */

function SkillCard({ group, index, language, isRTL }) {
  const category = translate(group.category, language);
  const skills = Array.isArray(group.skills)
    ? group.skills
    : [];

  return (
    <TiltCard
      intensity="medium"
      glare={true}
      className="
        group relative
        h-full min-h-[265px]
        rounded-[1.5rem]
        border border-primary/20
        bg-background/75
        shadow-xl shadow-black/[0.06]
        backdrop-blur-xl
        transition-[border-color,box-shadow,background-color]
        duration-300

        hover:border-primary/55
        hover:shadow-2xl
        hover:shadow-primary/15

        dark:shadow-black/25

        sm:min-h-[280px]
        lg:min-h-[310px]
      "
    >
      {/* ===============================================
          COUCHE ARRIÈRE — PROFONDEUR
      =============================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-3
          rounded-[1.15rem]
          border border-primary/10
          bg-primary/[0.025]
        "
        style={{
          transform: "translateZ(-24px)",
        }}
      />

      {/* ===============================================
          HALO SUPÉRIEUR VIOLET
      =============================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -end-6 -top-8
          h-40 w-40
          rounded-full
          bg-primary/10
          opacity-50
          blur-[55px]
          transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* ===============================================
          HALO INFÉRIEUR ROSE
      =============================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-10 -start-10
          h-36 w-36
          rounded-full
          bg-secondary/[0.08]
          blur-[50px]
        "
      />

      {/* ===============================================
          LIGNE LUMINEUSE SUPÉRIEURE
      =============================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-7 top-0
          h-px
          opacity-70
          transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent)",
          transform: "translateZ(12px)",
        }}
      />

      {/* ===============================================
          REPÈRE NUMÉRIQUE
      =============================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute end-6 top-6
          text-xs font-bold
          tracking-[0.18em]
          text-primary/50
        "
        style={{
          transform: "translateZ(30px)",
        }}
      >
        {formatNumber(index + 1)}
      </span>

      {/* ===============================================
          CONTENU DE LA CARTE
      =============================================== */}

      <div
        className="
          relative z-10
          flex h-full flex-col
          p-6 sm:p-7
        "
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* ICÔNE FLOTTANTE */}

        <div
          className="
            flex h-12 w-12
            items-center justify-center
            rounded-2xl
            border border-primary/30
            bg-primary/10
            text-primary
            shadow-lg shadow-primary/10

            transition-[border-color,background-color,box-shadow]
            duration-300

            group-hover:border-primary/55
            group-hover:bg-primary/15
            group-hover:shadow-primary/20
          "
          style={{
            transform: "translateZ(48px)",
          }}
        >
          <CategoryIcon id={group.id} />
        </div>

        {/* CATÉGORIE */}

        <div
          className="mt-6"
          style={{
            transform: "translateZ(46px)",
          }}
        >
          <h3
            className="
              text-lg font-extrabold
              tracking-[-0.025em]
              text-foreground
              sm:text-xl
            "
          >
            {category}
          </h3>

          <div
            aria-hidden="true"
            className="
              mt-3 h-[2px] w-10
              rounded-full
              bg-gradient-to-r
              from-primary to-secondary
              transition-[width] duration-300
              group-hover:w-20
            "
          />
        </div>

        {/* BADGES DES COMPÉTENCES */}

        {skills.length > 0 && (
          <div
            dir="ltr"
            className={`
              mt-6 flex flex-wrap gap-2.5

              ${
                isRTL
                  ? "justify-end"
                  : "justify-start"
              }
            `}
            style={{
              transform: "translateZ(62px)",
              transformStyle: "preserve-3d",
            }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  inline-flex
                  items-center
                  rounded-xl

                  border border-primary/20
                  bg-surface/75

                  px-3 py-2
                  text-xs font-semibold
                  text-foreground/85

                  shadow-sm
                  backdrop-blur-md

                  transition-[border-color,background-color,color,box-shadow]
                  duration-200

                  group-hover:border-primary/35
                  group-hover:bg-primary/[0.08]

                  hover:border-secondary/55
                  hover:text-primary
                  hover:shadow-md
                  hover:shadow-primary/10

                  sm:text-sm
                "
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ===============================================
          ORBITE DÉCORATIVE INFÉRIEURE
      =============================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-5 end-5
          h-14 w-14 rounded-full
          border border-primary/15
          transition-colors duration-300
          group-hover:border-primary/35
        "
        style={{
          transform: "translateZ(18px)",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-9 end-9
          h-2 w-2 rounded-full
          bg-secondary
          shadow-[0_0_14px_var(--secondary)]
        "
        style={{
          transform: "translateZ(48px)",
        }}
      />
    </TiltCard>
  );
}

/* =========================================================
   SECTION PRINCIPALE
========================================================= */

export default function TechStack() {
  const { language, isRTL } = useLanguage();

  const t = content[language] || content.fr;

  const stack = portfolio.stack || [];

  if (stack.length === 0) {
    return null;
  }

  return (
    <section
      id="stack"
      className="
        relative
        overflow-hidden
        border-t border-border/70
        bg-surface/35

        px-4 py-20
        sm:px-6
        lg:py-24
      "
    >
      {/* ===============================================
          ÉCLAIRAGE D'ARRIÈRE-PLAN
      =============================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        <div
          className="
            absolute -left-32 top-16
            h-[30rem] w-[30rem]
            rounded-full
            opacity-[0.09]
            blur-[100px]
            dark:opacity-[0.16]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        <div
          className="
            absolute -right-40
            bottom-[-6rem]
            h-[30rem] w-[30rem]
            rounded-full
            opacity-[0.07]
            blur-[110px]
            dark:opacity-[0.13]
          "
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =============================================
            TITRE DE SECTION
        ============================================== */}

        <div>
          <div className="text-center">
            <p
              className="
                text-xs font-bold
                uppercase tracking-[0.2em]
                text-primary
                sm:text-sm
              "
            >
              {t.eyebrow}
            </p>

            <h2
              className="
                mx-auto mt-4
                max-w-5xl

                text-3xl font-extrabold
                uppercase
                leading-[1.12]
                tracking-[-0.04em]
                text-foreground

                sm:text-4xl
                md:text-5xl
                lg:text-[3.4rem]
              "
            >
              {t.title}
              <span className="text-primary">.</span>
            </h2>

            {/* DÉGRADÉ SOUS LE TITRE */}

            <div
              aria-hidden="true"
              className="
                mx-auto mt-5
                h-[3px] w-24
                rounded-full
                bg-gradient-to-r
                from-primary via-secondary to-primary
                opacity-80
              "
            />
          </div>

          {/* TEXTE D'INTRODUCTION */}

          <div
            className="
              mt-8 max-w-2xl
              text-start
            "
          >
            <p
              className="
                text-lg font-semibold
                leading-snug
                text-foreground
                sm:text-xl
              "
            >
              {t.subtitle}
            </p>

            <p
              className="
                mt-3
                text-sm leading-7
                text-muted
                sm:text-base
              "
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* =============================================
            GRILLE DES CARTES 3D
        ============================================== */}

        <div
          className="
            mt-12
            grid items-stretch
            grid-cols-1 gap-5

            sm:grid-cols-2
            sm:gap-6

            lg:mt-14
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {stack.map((group, index) => (
            <SkillCard
              key={group.id ?? index}
              group={group}
              index={index}
              language={language}
              isRTL={isRTL}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
