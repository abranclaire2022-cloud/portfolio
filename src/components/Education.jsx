"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

import TiltCard from "@/components/effects/TiltCard";

const content = {
  fr: {
    eyebrow: "Parcours académique",
    title: "FORMATION",
    subtitle: "À la croisée du code et de la création",
    description:
      "Mon parcours combine programmation, multimédia, réseaux, marketing digital et création visuelle — des disciplines qui nourrissent aujourd’hui ma manière de concevoir le web.",
    coursework: "Principaux domaines étudiés",
  },

  en: {
    eyebrow: "Academic journey",
    title: "EDUCATION",
    subtitle: "Where code meets creativity",
    description:
      "My background combines programming, multimedia, computer networks, digital marketing and visual creation — disciplines that shape the way I approach web development today.",
    coursework: "Main areas of study",
  },

  "pt-BR": {
    eyebrow: "Trajetória acadêmica",
    title: "FORMAÇÃO",
    subtitle: "Entre código e criação",
    description:
      "Minha formação reúne programação, multimídia, redes de computadores, marketing digital e criação visual — áreas que hoje influenciam a forma como desenvolvo experiências web.",
    coursework: "Principais áreas estudadas",
  },

  ja: {
    eyebrow: "学習・教育の歩み",
    title: "学歴",
    subtitle: "コードとクリエイティブが交わる場所",
    description:
      "プログラミング、マルチメディア、ネットワーク、デジタルマーケティング、ビジュアル制作を学び、それらの分野が現在のWeb制作へのアプローチにつながっています。",
    coursework: "主な学習分野",
  },

  ar: {
    eyebrow: "المسار الأكاديمي",
    title: "التعليم",
    subtitle: "حيث تلتقي البرمجة بالإبداع",
    description:
      "يجمع مساري بين البرمجة والوسائط المتعددة وشبكات الحاسوب والتسويق الرقمي والإبداع البصري، وهي مجالات تؤثر اليوم في طريقتي في تصميم وتطوير الويب.",
    coursework: "أهم المجالات التي تمت دراستها",
  },
};

export default function Education() {
  const { language, isRTL } = useLanguage();

  const t =
    content[language] ||
    content.fr;

  const education =
    portfolio.education || [];

  if (education.length === 0) {
    return null;
  }

  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        border-t
        border-border/60
        bg-background/30
        px-6
        py-24
        backdrop-blur-[1px]
      "
    >
      {/* =====================================================
          AMBIANCE DE LA SECTION
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* HALO PRINCIPAL */}
        <div
          className="
            absolute
            -right-40
            top-20
            h-[30rem]
            w-[30rem]
            rounded-full
            opacity-[0.055]
            blur-[110px]
            dark:opacity-[0.11]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        {/* HALO SECONDAIRE */}
        <div
          className="
            absolute
            -left-36
            bottom-[-7rem]
            h-[26rem]
            w-[26rem]
            rounded-full
            opacity-[0.04]
            blur-[100px]
            dark:opacity-[0.08]
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
            {/* PARCOURS ACADÉMIQUE */}
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              {t.eyebrow}
            </p>

            {/* FORMATION */}
            <h2
              className="
                mt-3
                text-4xl
                font-extrabold
                uppercase
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
              mt-8
              max-w-2xl
              text-start
            "
          >
            <p
              className="
                text-lg
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
                leading-7
                text-muted
              "
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            FORMATIONS
        ====================================================== */}
        <div className="mt-14 space-y-7">
          {education.map((item, index) => {
            const isMainEducation =
              index === 0;

            const degree =
              item.degree?.[language] ||
              item.degree?.fr ||
              "";

            const degreeExplanation =
              item.degreeExplanation?.[language] ||
              item.degreeExplanation?.fr ||
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

            const status =
              item.status?.[language] ||
              item.status?.fr ||
              "";

            const distinction =
              item.distinction?.[language] ||
              item.distinction?.fr ||
              "";

            const coursework =
              item.coursework?.[language] ||
              item.coursework?.fr ||
              [];

            return (
              <TiltCard
                key={item.id}
                intensity="subtle"
                glare={isMainEducation}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  shadow-xl
                  backdrop-blur-xl
                  transition-colors
                  duration-300

                  ${
                    isMainEducation
                      ? "border-primary/30 bg-surface/60"
                      : "border-border/70 bg-surface/40"
                  }
                `}
              >
                {/* =================================================
                    PLAN ARRIÈRE
                ================================================== */}
                <div
                  aria-hidden="true"
                  className={`
                    absolute
                    inset-3
                    rounded-2xl
                    border

                    ${
                      isMainEducation
                        ? "border-primary/[0.09] bg-primary/[0.012]"
                        : "border-border/30 bg-background/[0.015]"
                    }
                  `}
                  style={{
                    transform:
                      "translateZ(-22px)",
                  }}
                />

                {/* =================================================
                    LIGNE SUPÉRIEURE
                ================================================== */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-8
                    right-8
                    top-0
                    h-px
                  "
                  style={{
                    opacity:
                      isMainEducation
                        ? 0.65
                        : 0.28,

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
                    top-7
                    text-xs
                    font-bold
                    tracking-[0.2em]

                    ${
                      isMainEducation
                        ? "text-primary/45"
                        : "text-muted/30"
                    }

                    ${
                      isRTL
                        ? "left-7"
                        : "right-7"
                    }
                  `}
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

                {/* =================================================
                    CONTENU
                ================================================== */}
                <div
                  className={`
                    relative

                    ${
                      isMainEducation
                        ? "p-7 sm:p-8"
                        : "p-6 sm:p-7"
                    }
                  `}
                  style={{
                    transformStyle:
                      "preserve-3d",
                  }}
                >
                  <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                    {/* =============================================
                        COLONNE PRINCIPALE
                    ============================================== */}
                    <div className="max-w-4xl">
                      {/* BADGES */}
                      <div
                        className="flex flex-wrap items-center gap-3"
                        style={{
                          transform:
                            "translateZ(34px)",
                        }}
                      >
                        {status && (
                          <span
                            className="
                              rounded-full
                              border
                              border-border/70
                              bg-background/50
                              px-3
                              py-1
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wide
                              text-muted
                              backdrop-blur-md
                            "
                          >
                            {status}
                          </span>
                        )}

                        {distinction && (
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-full
                              border
                              border-primary/40
                              bg-primary/[0.055]
                              px-3
                              py-1
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wide
                              text-primary
                              shadow-[0_0_22px_rgba(96,165,250,0.06)]
                              backdrop-blur-md
                            "
                          >
                            <span
                              aria-hidden="true"
                              className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-primary
                                shadow-[0_0_10px_var(--primary)]
                              "
                            />

                            {distinction}
                          </span>
                        )}
                      </div>

                      {/* DIPLÔME */}
                      <h3
                        className={`
                          mt-4
                          font-bold
                          leading-tight
                          text-foreground

                          ${
                            isMainEducation
                              ? "text-2xl sm:text-3xl"
                              : "text-xl sm:text-2xl"
                          }
                        `}
                        style={{
                          transform:
                            "translateZ(44px)",
                        }}
                      >
                        {degree}
                      </h3>

                      {/* EXPLICATION */}
                      {degreeExplanation && (
                        <p
                          className="
                            mt-2
                            max-w-3xl
                            text-sm
                            font-medium
                            leading-6
                            text-muted
                          "
                          style={{
                            transform:
                              "translateZ(36px)",
                          }}
                        >
                          {degreeExplanation}
                        </p>
                      )}

                      {/* ÉTABLISSEMENT */}
                      {item.institution && (
                        <p
                          className="
                            mt-4
                            font-semibold
                            text-primary
                          "
                          style={{
                            transform:
                              "translateZ(40px)",
                          }}
                        >
                          <span
                            dir="ltr"
                            className="inline-block"
                          >
                            {item.institution}
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
                              "translateZ(30px)",
                          }}
                        >
                          {location}
                        </p>
                      )}

                      {/* =========================================
                          DOMAINES ÉTUDIÉS
                      ========================================== */}
                      {coursework.length >
                        0 && (
                        <div
                          className="mt-8"
                          style={{
                            transform:
                              "translateZ(46px)",
                          }}
                        >
                          <h4
                            className="
                              text-sm
                              font-semibold
                              uppercase
                              tracking-wide
                              text-foreground
                            "
                          >
                            {t.coursework}
                          </h4>

                          <div
                            dir="ltr"
                            className={`
                              mt-4
                              flex
                              flex-wrap
                              gap-2

                              ${
                                isRTL
                                  ? "justify-end"
                                  : "justify-start"
                              }
                            `}
                          >
                            {coursework.map(
                              (course) => (
                                <span
                                  key={
                                    course
                                  }
                                  className="
                                    rounded-lg
                                    border
                                    border-border/70
                                    bg-background/55
                                    px-3
                                    py-1.5
                                    text-sm
                                    font-medium
                                    text-muted
                                    backdrop-blur-md
                                    transition-all
                                    duration-200
                                    group-hover:border-primary/25
                                    group-hover:text-foreground
                                  "
                                >
                                  {course}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* =============================================
                        PÉRIODE
                    ============================================== */}
                    {(startDate ||
                      endDate) && (
                      <div
                        className="shrink-0"
                        style={{
                          transform:
                            "translateZ(54px)",
                        }}
                      >
                        <span
                          className="
                            inline-flex
                            rounded-full
                            border
                            border-border/70
                            bg-background/50
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-muted
                            shadow-sm
                            backdrop-blur-md
                          "
                        >
                          {startDate}

                          {startDate &&
                          endDate
                            ? " — "
                            : ""}

                          {endDate}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* =================================================
                      DÉCORATION PRINCIPALE BTS
                  ================================================== */}
                  {isMainEducation && (
                    <>
                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          bottom-7
                          end-7
                          h-20
                          w-20
                          rounded-full
                          border
                          border-primary/10
                        "
                        style={{
                          transform:
                            "translateZ(12px)",
                        }}
                      />

                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          bottom-12
                          end-12
                          h-2
                          w-2
                          rounded-full
                          bg-primary/60
                        "
                        style={{
                          transform:
                            "translateZ(48px)",

                          boxShadow:
                            "0 0 22px var(--primary)",
                        }}
                      />
                    </>
                  )}

                  {/* =================================================
                      DÉCORATION BAC
                  ================================================== */}
                  {!isMainEducation && (
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-7
                        end-7
                        h-10
                        w-10
                        rounded-xl
                        border
                        border-border/30
                      "
                      style={{
                        transform:
                          "translateZ(14px) rotate(45deg)",
                      }}
                    />
                  )}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}