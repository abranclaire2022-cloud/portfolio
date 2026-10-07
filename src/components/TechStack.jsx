"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

import TiltCard from "@/components/effects/TiltCard";

const content = {
  fr: {
    eyebrow: "Stack technique",

    title: "OUTILS & TECHNOLOGIES",

    subtitle:
      "Les technologies qui donnent forme à mes projets",

    description:
      "Du front-end au back-end, un ensemble d’outils que j’utilise pour construire des applications web complètes et structurées.",
  },

  en: {
    eyebrow: "Technical stack",

    title: "TOOLS & TECHNOLOGIES",

    subtitle:
      "The technologies that bring my projects to life",

    description:
      "From front-end to back-end, a set of tools I use to build complete and well-structured web applications.",
  },

  "pt-BR": {
    eyebrow: "Stack técnica",

    title: "FERRAMENTAS & TECNOLOGIAS",

    subtitle:
      "As tecnologias que dão forma aos meus projetos",

    description:
      "Do front-end ao back-end, um conjunto de ferramentas que utilizo para construir aplicações web completas e bem estruturadas.",
  },

  ja: {
    eyebrow: "技術スタック",

    title: "ツール & テクノロジー",

    subtitle:
      "プロジェクトを形にする技術",

    description:
      "フロントエンドからバックエンドまで、Webアプリケーションを一貫して構築するために使用している技術とツールです。",
  },

  ar: {
    eyebrow: "المجموعة التقنية",

    title: "الأدوات والتقنيات",

    subtitle:
      "التقنيات التي تحوّل مشاريعي إلى واقع",

    description:
      "من الواجهة الأمامية إلى الخلفية، أستخدم مجموعة من الأدوات لبناء تطبيقات ويب متكاملة ومنظمة.",
  },
};

export default function TechStack() {
  const {
    language,
    isRTL,
  } = useLanguage();

  const t =
    content[language] ||
    content.fr;

  const stack =
    portfolio.stack || [];

  if (stack.length === 0) {
    return null;
  }

  return (
    <section
      id="stack"
      className="
        relative
        overflow-hidden
        border-t
        border-border/70
        bg-surface/35
        px-4
        py-20
        backdrop-blur-[2px]

        sm:px-6
        sm:py-22

        lg:py-24
      "
    >
      {/* =====================================================
          LUMIÈRES DE LA SECTION
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* HALO GAUCHE */}
        <div
          className="
            absolute
            -left-32
            top-20
            h-[28rem]
            w-[28rem]
            rounded-full
            opacity-[0.08]
            blur-[100px]

            dark:opacity-[0.15]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        {/* HALO DROIT */}
        <div
          className="
            absolute
            -right-40
            bottom-[-6rem]
            h-[30rem]
            w-[30rem]
            rounded-full
            opacity-[0.06]
            blur-[110px]

            dark:opacity-[0.12]
          "
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =====================================================
            EN-TÊTE
        ====================================================== */}
        <div>
          {/* =================================================
              UNIQUEMENT LES DEUX TITRES SONT CENTRÉS
          ================================================== */}
          <div className="text-center">
            {/* STACK TECHNIQUE */}
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary

                sm:text-sm
              "
            >
              {t.eyebrow}
            </p>

            {/* OUTILS & TECHNOLOGIES */}
            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                uppercase
                leading-[1.05]
                tracking-[-0.03em]
                text-foreground

                sm:text-5xl

                lg:text-6xl
              "
            >
              {t.title}
            </h2>
          </div>

          {/* =================================================
              TEXTE À GAUCHE
          ================================================== */}
          <div
            className="
              mt-7
              max-w-2xl
              text-start

              sm:mt-8
            "
          >
            {/* SOUS-TITRE */}
            <p
              className="
                text-base
                font-semibold
                leading-snug
                text-foreground/90

                sm:text-xl
              "
            >
              {t.subtitle}
            </p>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                text-sm
                leading-6
                text-muted

                sm:text-base
                sm:leading-7
              "
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            CARTES 3D
        ====================================================== */}
        <div
          className="
            mt-10
            grid
            gap-5

            sm:mt-12
            sm:grid-cols-2
            sm:gap-6

            lg:mt-14
            lg:grid-cols-4
            lg:gap-7
          "
        >
          {stack.map((group, index) => {
            const category =
              group.category?.[
                language
              ] ||
              group.category?.fr ||
              "";

            const skills =
              group.skills || [];

            return (
              <TiltCard
                key={group.id}
                intensity="medium"
                glare={true}
                className="
                  group
                  h-full
                  min-h-[220px]
                  rounded-2xl
                  border
                  border-border/80
                  bg-background/65
                  shadow-xl
                  shadow-black/[0.04]
                  backdrop-blur-xl

                  sm:min-h-[235px]

                  lg:min-h-[255px]

                  dark:shadow-black/20
                "
              >
                {/* =============================================
                    PLAN ARRIÈRE DE LA CARTE
                ============================================== */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-3
                    rounded-2xl
                    border
                    border-primary/10
                    bg-primary/[0.015]
                  "
                  style={{
                    transform:
                      "translateZ(-28px)",

                    transformStyle:
                      "preserve-3d",
                  }}
                />

                {/* =============================================
                    LIGNE LUMINEUSE SUPÉRIEURE
                ============================================== */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-6
                    right-6
                    top-0
                    h-px
                    opacity-60
                  "
                  style={{
                    background:
                      "linear-gradient(to right, transparent, var(--primary), transparent)",

                    transform:
                      "translateZ(12px)",
                  }}
                />

                {/* =============================================
                    NUMÉRO / REPÈRE
                ============================================== */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    end-5
                    top-5
                    text-xs
                    font-semibold
                    text-primary/40
                  "
                  style={{
                    transform:
                      "translateZ(20px)",
                  }}
                >
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </div>

                {/* =============================================
                    CONTENU
                ============================================== */}
                <div
                  className="
                    relative
                    p-5

                    sm:p-6
                  "
                  style={{
                    transformStyle:
                      "preserve-3d",
                  }}
                >
                  {/* PETIT ACCENT */}
                  <div
                    aria-hidden="true"
                    className="
                      mb-4
                      h-2
                      w-2
                      rounded-full
                      bg-primary
                      shadow-[0_0_18px_var(--primary)]

                      sm:mb-5
                    "
                    style={{
                      transform:
                        "translateZ(34px)",
                    }}
                  />

                  {/* CATÉGORIE */}
                  {category && (
                    <h3
                      className="
                        text-base
                        font-semibold
                        text-foreground

                        sm:text-lg
                      "
                      style={{
                        transform:
                          "translateZ(40px)",
                      }}
                    >
                      {category}
                    </h3>
                  )}

                  {/* COMPÉTENCES */}
                  {skills.length > 0 && (
                    <div
                      dir="ltr"
                      className={`
                        mt-5
                        flex
                        flex-wrap
                        gap-2

                        sm:mt-6

                        ${
                          isRTL
                            ? "justify-end"
                            : "justify-start"
                        }
                      `}
                      style={{
                        transform:
                          "translateZ(58px)",

                        transformStyle:
                          "preserve-3d",
                      }}
                    >
                      {skills.map(
                        (skill) => (
                          <span
                            key={skill}
                            className="
                              rounded-lg
                              border
                              border-border/80
                              bg-surface/80
                              px-3
                              py-1.5
                              text-sm
                              font-medium
                              text-muted
                              shadow-sm
                              backdrop-blur-md
                              transition-all
                              duration-200

                              group-hover:border-primary/25
                              group-hover:text-foreground
                            "
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* =============================================
                    DÉCORATION BASSE
                ============================================== */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-5
                    end-5
                    h-10
                    w-10
                    rounded-full
                    border
                    border-primary/10

                    sm:h-12
                    sm:w-12
                  "
                  style={{
                    transform:
                      "translateZ(18px)",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-8
                    end-8
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-primary/50
                  "
                  style={{
                    transform:
                      "translateZ(48px)",

                    boxShadow:
                      "0 0 18px var(--primary)",
                  }}
                />
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}