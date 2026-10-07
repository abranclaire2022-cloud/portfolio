"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

import TiltCard from "@/components/effects/TiltCard";

const content = {
  fr: {
    eyebrow: "Parcours professionnel",
    title: "EXPÉRIENCES",
    subtitle: "Ce que j’ai construit en chemin",
    description:
      "Développement web, design numérique et découverte de la cybersécurité : des expériences qui ont progressivement façonné ma manière de travailler.",
    current: "Aujourd’hui",
    viewCv: "Voir mon parcours complet dans mon CV",
  },

  en: {
    eyebrow: "Professional journey",
    title: "EXPERIENCE",
    subtitle: "What I’ve built along the way",
    description:
      "Web development, digital design and an introduction to cybersecurity: different experiences that have gradually shaped the way I work.",
    current: "Present",
    viewCv: "View my full experience in my CV (FR)",
  },

  "pt-BR": {
    eyebrow: "Trajetória profissional",
    title: "EXPERIÊNCIAS",
    subtitle: "O que construí ao longo do caminho",
    description:
      "Desenvolvimento web, design digital e descoberta da cibersegurança: experiências diferentes que moldaram progressivamente a minha forma de trabalhar.",
    current: "Atualmente",
    viewCv: "Ver minha trajetória completa no CV (FR)",
  },

  ja: {
    eyebrow: "プロフェッショナルキャリア",
    title: "経験",
    subtitle: "これまで積み重ねてきたもの",
    description:
      "Web開発、デジタルデザイン、サイバーセキュリティへの取り組みを通じて、仕事への向き合い方を少しずつ築いてきました。",
    current: "現在",
    viewCv: "フランス語の履歴書で経歴全体を見る",
  },

  ar: {
    eyebrow: "المسار المهني",
    title: "الخبرات",
    subtitle: "ما بنيته خلال مسيرتي",
    description:
      "تطوير الويب والتصميم الرقمي والتعرّف إلى الأمن السيبراني: تجارب مختلفة ساهمت تدريجيًا في تشكيل أسلوبي في العمل.",
    current: "حتى الآن",
    viewCv: "عرض مساري الكامل في السيرة الذاتية بالفرنسية",
  },
};

export default function Experience() {
  const { language, isRTL } = useLanguage();

  const t =
    content[language] ||
    content.fr;

  const experiences =
    portfolio.experience || [];

  if (experiences.length === 0) {
    return null;
  }

  const cvLink =
    portfolio.links.cv[language] ||
    portfolio.links.cv.fr;

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-t
        border-border/60
        bg-surface/25
        px-4
        py-20
        backdrop-blur-[1px]

        sm:px-6

        lg:py-24
      "
    >
      {/* =====================================================
          LUMIÈRES D’AMBIANCE
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* HALO GAUCHE */}
        <div
          className="
            absolute
            -left-40
            top-24
            h-[30rem]
            w-[30rem]
            rounded-full
            opacity-[0.06]
            blur-[110px]

            dark:opacity-[0.11]
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
            -right-44
            bottom-[-8rem]
            h-[32rem]
            w-[32rem]
            rounded-full
            opacity-[0.05]
            blur-[120px]

            dark:opacity-[0.09]
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
              UNIQUEMENT CES DEUX TITRES SONT CENTRÉS
          ================================================== */}
          <div className="text-center">
            {/* PARCOURS PROFESSIONNEL */}
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

            {/* EXPÉRIENCES */}
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
              SOUS-TITRE + DESCRIPTION À GAUCHE
          ================================================== */}
          <div
            className="
              mt-7
              max-w-2xl
              text-start

              sm:mt-8
            "
          >
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
            EXPÉRIENCES
        ====================================================== */}
        <div
          className="
            relative
            mt-10
            space-y-5

            sm:mt-12
            sm:space-y-6

            lg:mt-14
            lg:space-y-7
          "
        >
          {/* LIGNE VERTICALE DÉCORATIVE */}
          <div
            aria-hidden="true"
            className={`
              absolute
              top-8
              bottom-8
              hidden
              w-px
              bg-gradient-to-b
              from-transparent
              via-primary/20
              to-transparent

              lg:block

              ${
                isRTL
                  ? "right-3"
                  : "left-3"
              }
            `}
          />

          {experiences.map(
            (item, index) => {
              const isSimulation =
                item.id ===
                "deloitte-cybersecurity";

              const type =
                item.type?.[language] ||
                item.type?.fr ||
                "";

              const position =
                item.position?.[language] ||
                item.position?.fr ||
                "";

              const location =
                item.location?.[language] ||
                item.location?.fr ||
                "";

              const startDate =
                item.startDate?.[language] ||
                item.startDate?.fr ||
                "";

              const endDate =
                item.endDate?.[language] ||
                item.endDate?.fr ||
                "";

              const description =
                item.description?.[language] ||
                item.description?.fr ||
                [];

              const technologies =
                item.technologies || [];

              return (
                <div
                  key={item.id}
                  className={`
                    relative

                    ${
                      isRTL
                        ? "lg:pr-10"
                        : "lg:pl-10"
                    }
                  `}
                >
                  {/* POINT DE TIMELINE */}
                  <div
                    aria-hidden="true"
                    className={`
                      absolute
                      top-10
                      hidden
                      h-3
                      w-3
                      rounded-full
                      border
                      border-primary/40
                      bg-background
                      shadow-[0_0_18px_var(--primary)]

                      lg:block

                      ${
                        isRTL
                          ? "right-[7px]"
                          : "left-[7px]"
                      }
                    `}
                  />

                  {/* =================================================
                      CARTE
                  ================================================== */}
                  <TiltCard
                    intensity="subtle"
                    glare={true}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      p-5
                      shadow-xl
                      backdrop-blur-xl
                      transition-colors
                      duration-300

                      sm:p-8

                      ${
                        isSimulation
                          ? "border-primary/35 bg-background/70"
                          : "border-border/70 bg-background/60"
                      }
                    `}
                  >
                    {/* =================================================
                        PLAN ARRIÈRE
                    ================================================== */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-3
                        rounded-2xl
                        border
                        border-primary/[0.08]
                        bg-primary/[0.012]
                      "
                      style={{
                        transform:
                          "translateZ(-25px)",
                      }}
                    />

                    {/* =================================================
                        LIGNE LUMINEUSE
                    ================================================== */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        left-6
                        right-6
                        top-0
                        h-px

                        sm:left-8
                        sm:right-8
                      "
                      style={{
                        opacity: 0.5,

                        background:
                          "linear-gradient(to right, transparent, var(--primary), transparent)",

                        transform:
                          "translateZ(10px)",
                      }}
                    />

                    {/* =================================================
                        NUMÉRO
                    ================================================== */}
                    <div
                      aria-hidden="true"
                      className={`
                        absolute
                        top-5
                        text-[10px]
                        font-bold
                        tracking-[0.2em]
                        text-primary/35

                        sm:top-6
                        sm:text-xs

                        ${
                          isRTL
                            ? "left-5 sm:left-6"
                            : "right-5 sm:right-6"
                        }
                      `}
                      style={{
                        transform:
                          "translateZ(22px)",
                      }}
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    {/* =================================================
                        CONTENU PRINCIPAL
                    ================================================== */}
                    <div
                      className="
                        relative
                        flex
                        flex-col
                        gap-5

                        sm:gap-7

                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                      style={{
                        transformStyle:
                          "preserve-3d",
                      }}
                    >
                      {/* ===============================================
                          CONTENU
                      ================================================ */}
                      <div className="max-w-3xl">
                        {/* TYPE */}
                        {type && (
                          <div
                            className="
                              flex
                              flex-wrap
                              items-center
                              gap-3
                            "
                            style={{
                              transform:
                                "translateZ(34px)",
                            }}
                          >
                            <span
                              className={`
                                rounded-full
                                border
                                px-3
                                py-1
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-wide
                                backdrop-blur-md

                                sm:text-xs

                                ${
                                  isSimulation
                                    ? "border-primary/40 bg-primary/[0.04] text-primary"
                                    : "border-border/70 bg-surface/50 text-muted"
                                }
                              `}
                            >
                              {type}
                            </span>
                          </div>
                        )}

                        {/* POSTE */}
                        {position && (
                          <h3
                            className="
                              mt-4
                              max-w-[90%]
                              text-xl
                              font-bold
                              leading-tight
                              text-foreground

                              sm:max-w-none
                              sm:text-2xl
                            "
                            style={{
                              transform:
                                "translateZ(42px)",
                            }}
                          >
                            {position}
                          </h3>
                        )}

                        {/* ENTREPRISE */}
                        {item.company && (
                          <p
                            className="
                              mt-2
                              text-sm
                              font-semibold
                              text-primary

                              sm:text-base
                            "
                            style={{
                              transform:
                                "translateZ(46px)",
                            }}
                          >
                            <span
                              dir="ltr"
                              className="inline-block"
                            >
                              {
                                item.company
                              }
                            </span>
                          </p>
                        )}

                        {/* LOCALISATION */}
                        {location && (
                          <p
                            className="
                              mt-1
                              text-sm
                              text-muted
                            "
                            style={{
                              transform:
                                "translateZ(38px)",
                            }}
                          >
                            {location}
                          </p>
                        )}

                        {/* DESCRIPTION */}
                        {description.length >
                          0 && (
                          <ul
                            className="
                              mt-5
                              space-y-3

                              sm:mt-6
                            "
                            style={{
                              transform:
                                "translateZ(28px)",
                            }}
                          >
                            {description.map(
                              (point) => (
                                <li
                                  key={
                                    point
                                  }
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    text-sm
                                    leading-6
                                    text-muted

                                    sm:text-base
                                    sm:leading-7
                                  "
                                >
                                  <span
                                    aria-hidden="true"
                                    className="
                                      mt-[0.6rem]
                                      h-1.5
                                      w-1.5
                                      shrink-0
                                      rounded-full
                                      bg-primary

                                      sm:mt-3
                                    "
                                  />

                                  <span>
                                    {
                                      point
                                    }
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}

                        {/* TECHNOLOGIES */}
                        {technologies.length >
                          0 && (
                          <div
                            dir="ltr"
                            className={`
                              mt-6
                              flex
                              flex-wrap
                              gap-2

                              sm:mt-7

                              ${
                                isRTL
                                  ? "justify-end"
                                  : "justify-start"
                              }
                            `}
                            style={{
                              transform:
                                "translateZ(52px)",
                            }}
                          >
                            {technologies.map(
                              (
                                technology
                              ) => (
                                <span
                                  key={
                                    technology
                                  }
                                  className="
                                    rounded-lg
                                    border
                                    border-border/70
                                    bg-surface/65
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-medium
                                    text-muted
                                    backdrop-blur-md
                                    transition-colors
                                    duration-200

                                    group-hover:border-primary/25
                                    group-hover:text-foreground

                                    sm:text-sm
                                  "
                                >
                                  {
                                    technology
                                  }
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </div>

                      {/* ===============================================
                          DATE
                      ================================================ */}
                      {(startDate ||
                        endDate ||
                        item.current) && (
                        <div
                          className="shrink-0"
                          style={{
                            transform:
                              "translateZ(58px)",
                          }}
                        >
                          <span
                            className="
                              inline-flex
                              rounded-full
                              border
                              border-border/70
                              bg-surface/65
                              px-3.5
                              py-2
                              text-xs
                              font-medium
                              text-muted
                              shadow-sm
                              backdrop-blur-md

                              sm:px-4
                              sm:text-sm
                            "
                          >
                            {startDate}

                            {item.current
                              ? `${
                                  startDate
                                    ? " — "
                                    : ""
                                }${t.current}`
                              : endDate
                                ? `${
                                    startDate
                                      ? " — "
                                      : ""
                                  }${endDate}`
                                : ""}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        ACCENT DÉCORATIF
                    ================================================== */}
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

                        sm:bottom-6
                        sm:end-6
                        sm:h-12
                        sm:w-12
                      "
                      style={{
                        transform:
                          "translateZ(15px)",
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

                        sm:bottom-10
                        sm:end-10
                      "
                      style={{
                        transform:
                          "translateZ(48px)",

                        boxShadow:
                          "0 0 18px var(--primary)",
                      }}
                    />
                  </TiltCard>
                </div>
              );
            }
          )}
        </div>

        {/* =====================================================
            LIEN CV
        ====================================================== */}
        {cvLink && (
          <div
            className="
              mt-8

              sm:mt-10
            "
          >
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-primary
                transition-all
                duration-200

                hover:gap-3
                hover:text-primary-hover
              "
            >
              <span>
                {t.viewCv}
              </span>

              <span aria-hidden="true">
                {isRTL
                  ? "←"
                  : "→"}
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}