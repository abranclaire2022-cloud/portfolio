
"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";
import TiltCard from "@/components/effects/TiltCard";

/* =========================================================
   LYDIA PORTFOLIO — CYBER VIOLET
   PROFIL COMPLÉMENTAIRE

   - Langues et niveaux
   - Compétences humaines
   - Certifications
   - Outils bureautiques
   - Engagements et réalisations
   - Effets 3D TiltCard
   - 5 langues + RTL
========================================================= */

const content = {
  fr: {
    eyebrow: "Profil complémentaire",
    title: "LANGUES & COMPÉTENCES",
    subtitle: "Au-delà de la technique",
    description:
      "Langues, qualités professionnelles, outils et engagements complètent mon profil et ma manière de travailler.",
    languages: "Langues",
    softSkills: "Compétences humaines",
    certification: "Certifications",
    officeTools: "Outils bureautiques",
    engagement: "Engagement & réalisation",
  },

  en: {
    eyebrow: "Additional profile",
    title: "LANGUAGES & SKILLS",
    subtitle: "Beyond technical skills",
    description:
      "Languages, professional qualities, tools and personal involvement complement my profile and the way I work.",
    languages: "Languages",
    softSkills: "Professional skills",
    certification: "Certifications",
    officeTools: "Office tools",
    engagement: "Engagement & achievement",
  },

  "pt-BR": {
    eyebrow: "Perfil complementar",
    title: "IDIOMAS & COMPETÊNCIAS",
    subtitle: "Além da técnica",
    description:
      "Idiomas, qualidades profissionais, ferramentas e experiências complementam meu perfil e minha forma de trabalhar.",
    languages: "Idiomas",
    softSkills: "Competências profissionais",
    certification: "Certificações",
    officeTools: "Ferramentas de escritório",
    engagement: "Engajamento & realização",
  },

  ja: {
    eyebrow: "補足プロフィール",
    title: "言語 & スキル",
    subtitle: "技術力だけではない強み",
    description:
      "語学力、仕事への姿勢、使用ツール、さまざまな活動経験が、私のプロフィールと働き方を形づくっています。",
    languages: "言語",
    softSkills: "ヒューマンスキル",
    certification: "認定資格",
    officeTools: "オフィスツール",
    engagement: "活動・実績",
  },

  ar: {
    eyebrow: "الملف التكميلي",
    title: "اللغات والمهارات",
    subtitle: "ما وراء المهارات التقنية",
    description:
      "تكمل اللغات والمهارات المهنية والأدوات والمشاركات المختلفة ملفي وطريقتي في العمل.",
    languages: "اللغات",
    softSkills: "المهارات المهنية",
    certification: "الشهادات",
    officeTools: "الأدوات المكتبية",
    engagement: "المشاركة والإنجاز",
  },
};

/* =========================================================
   UTILITAIRES
========================================================= */

function translate(value, language, fallback = "") {
  if (typeof value === "string") {
    return value;
  }

  return value?.[language] ?? value?.fr ?? fallback;
}

function period(start, end) {
  return [start, end].filter(Boolean).join(" — ");
}

/* =========================================================
   ICÔNES SVG
========================================================= */

function ExtraIcon({ name }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "languages":
      return (
        <svg {...props}>
          <path d="m5 8 6 6m-7 0 7-7 2-3H3" />
          <path d="M2 5h12M7 2v3" />
          <path d="m13 21 5-11 5 11m-8.5-3h7" />
        </svg>
      );

    case "people":
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2H3Z" />
          <path d="M17 5a3 3 0 0 1 0 6" />
          <path d="M18 15a5 5 0 0 1 3 5" />
        </svg>
      );

    case "award":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="5" />
          <path d="m8.5 12-1 10L12 19l4.5 3-1-10" />
          <path d="m10 8 1.4 1.4L14 6.8" />
        </svg>
      );

    case "tools":
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 13h3m-3 4h7" />
        </svg>
      );

    case "engagement":
      return (
        <svg {...props}>
          <path d="M12 3 14.8 8.7 21 9.6l-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        </svg>
      );

    default:
      return null;
  }
}

/* =========================================================
   EN-TÊTE DE CARTE
========================================================= */

function CardHeading({ icon, title }) {
  return (
    <div
      className="relative flex items-center gap-4"
      style={{ transform: "translateZ(42px)" }}
    >
      <span
        className="
          flex h-12 w-12 shrink-0
          items-center justify-center
          rounded-2xl
          border border-primary/30
          bg-primary/10
          text-primary
          shadow-lg shadow-primary/10
        "
      >
        <ExtraIcon name={icon} />
      </span>

      <div className="min-w-0">
        <h3
          className="
            text-sm font-bold
            uppercase tracking-[0.12em]
            text-foreground
            sm:text-base
          "
        >
          {title}
        </h3>

        <div
          aria-hidden="true"
          className="
            mt-2 h-[2px] w-10
            rounded-full
            bg-gradient-to-r
            from-primary to-secondary
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   STRUCTURE COMMUNE DES CARTES 3D
========================================================= */

function ExtraCard({
  icon,
  title,
  children,
  featured = false,
  className = "",
}) {
  return (
    <TiltCard
      intensity="subtle"
      glare={featured}
      className={`
        group relative h-full
        rounded-[1.7rem]
        border
        backdrop-blur-xl

        transition-[border-color,box-shadow]
        duration-300

        hover:border-primary/55
        hover:shadow-2xl
        hover:shadow-primary/10

        ${
          featured
            ? "border-primary/30 bg-background/75 shadow-xl shadow-primary/[0.055]"
            : "border-border/70 bg-background/65 shadow-xl shadow-black/10"
        }

        ${className}
      `}
    >
      {/* COUCHE ARRIÈRE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-3
          rounded-[1.25rem]
          border border-primary/10
          bg-primary/[0.015]
        "
        style={{ transform: "translateZ(-22px)" }}
      />

      {/* HALO VIOLET */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -top-20 -end-20
          h-56 w-56 rounded-full
          bg-primary/[0.065]
          blur-[70px]
        "
      />

      {/* HALO ROSE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-20 -start-20
          h-48 w-48 rounded-full
          bg-secondary/[0.045]
          blur-[70px]
        "
      />

      {/* LIGNE LUMINEUSE SUPÉRIEURE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-7 top-0 h-px
        "
        style={{
          background:
            "linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent)",
          opacity: featured ? 0.9 : 0.5,
          transform: "translateZ(12px)",
        }}
      />

      {/* CONTENU */}
      <div
        className="relative z-10 p-5 sm:p-7"
        style={{ transformStyle: "preserve-3d" }}
      >
        <CardHeading icon={icon} title={title} />

        <div
          className="relative mt-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>

      {/* ORBITE DÉCORATIVE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-5 end-5
          h-12 w-12 rounded-full
          border border-primary/15
        "
        style={{ transform: "translateZ(14px)" }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-8 end-8
          h-2 w-2 rounded-full
          bg-secondary
          shadow-[0_0_14px_var(--secondary)]
        "
        style={{ transform: "translateZ(46px)" }}
      />
    </TiltCard>
  );
}

/* =========================================================
   SECTION PROFIL COMPLÉMENTAIRE
========================================================= */

export default function ProfileExtras() {
  const { language, isRTL } = useLanguage();

  const t = content[language] || content.fr;
  const extras = portfolio.profileExtras;

  if (!extras) return null;

  const languages = extras.languages || [];
  const softSkills = extras.softSkills || [];
  const certifications = extras.certifications || [];
  const officeTools = extras.officeTools || [];
  const engagement = extras.engagement || [];

  const hasContent =
    languages.length > 0 ||
    softSkills.length > 0 ||
    certifications.length > 0 ||
    officeTools.length > 0 ||
    engagement.length > 0;

  if (!hasContent) return null;

  return (
    <section
      id="profile-extras"
      className="
        relative overflow-hidden
        border-t border-border/60
        bg-surface/20
        px-4 py-20
        sm:px-6
        lg:py-24
      "
    >
      {/* ===============================================
          AMBIANCE CYBER VIOLET
      ================================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute -left-40 top-24
            h-[28rem] w-[28rem]
            rounded-full opacity-[0.08]
            blur-[110px]
            dark:opacity-[0.15]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        <div
          className="
            absolute -right-40 bottom-[-8rem]
            h-[30rem] w-[30rem]
            rounded-full opacity-[0.06]
            blur-[120px]
            dark:opacity-[0.12]
          "
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =============================================
            EN-TÊTE
        ============================================== */}
        <div>
          <div className="text-center">
            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.2em] text-primary
                sm:text-sm
              "
            >
              {t.eyebrow}
            </p>

            <h2
              className="
                mx-auto mt-4
                text-3xl font-extrabold
                uppercase leading-[1.1]
                tracking-[-0.04em]
                text-foreground
                sm:text-5xl
                lg:text-[3.4rem]
              "
            >
              {t.title}
              <span className="text-primary">.</span>
            </h2>

            <div
              aria-hidden="true"
              className="
                mx-auto mt-5 h-[3px] w-24
                rounded-full
                bg-gradient-to-r
                from-primary via-secondary to-primary
                opacity-80
              "
            />
          </div>

          <div className="mt-8 max-w-2xl text-start">
            <p
              className="
                text-lg font-semibold
                leading-snug text-foreground
                sm:text-xl
              "
            >
              {t.subtitle}
            </p>

            <p
              className="
                mt-3 text-sm
                leading-7 text-muted
                sm:text-base
              "
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* =============================================
            PREMIÈRE RANGÉE
            LANGUES ET COMPÉTENCES HUMAINES
        ============================================== */}
        <div
          className="
            mt-12 grid items-stretch gap-6
            lg:mt-14
            lg:grid-cols-2
            lg:gap-7
          "
        >
          {/* LANGUES */}
          {languages.length > 0 && (
            <ExtraCard
              icon="languages"
              title={t.languages}
              featured
            >
              <div className="space-y-3">
                {languages.map((item, index) => {
                  const name = translate(
                    item.name,
                    language
                  );

                  const level = translate(
                    item.level,
                    language
                  );

                  return (
                    <div
                      key={item.id ?? index}
                      className="
                        relative flex flex-col gap-3
                        rounded-2xl
                        border border-border/65
                        bg-surface/40
                        px-4 py-4

                        transition-[border-color,background-color]
                        duration-200

                        hover:border-primary/40
                        hover:bg-primary/[0.06]

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        sm:gap-5
                      "
                      style={{
                        transform: "translateZ(42px)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="
                            h-2 w-2 shrink-0
                            rounded-full bg-primary
                            shadow-[0_0_12px_var(--primary)]
                          "
                        />

                        <span
                          className="
                            font-semibold text-foreground
                          "
                        >
                          {name}
                        </span>
                      </div>

                      {level && (
                        <span
                          className="
                            w-fit shrink-0
                            rounded-full
                            border border-primary/30
                            bg-primary/[0.07]
                            px-3.5 py-1.5
                            text-xs font-semibold
                            text-primary
                            sm:text-sm
                          "
                        >
                          {level}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </ExtraCard>
          )}

          {/* COMPÉTENCES HUMAINES */}
          {softSkills.length > 0 && (
            <ExtraCard
              icon="people"
              title={t.softSkills}
            >
              <div
                className={`
                  flex flex-wrap gap-2.5
                  ${
                    isRTL
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
                style={{
                  transform: "translateZ(46px)",
                }}
              >
                {softSkills.map((skill, index) => {
                  const label = translate(
                    skill,
                    language
                  );

                  return (
                    <span
                      key={`${index}-${label}`}
                      className="
                        inline-flex items-center
                        rounded-xl
                        border border-primary/20
                        bg-surface/65
                        px-4 py-2.5
                        text-xs font-semibold
                        text-foreground/85
                        backdrop-blur-md

                        transition-[border-color,background-color,color]
                        duration-200

                        hover:border-primary/50
                        hover:bg-primary/10
                        hover:text-primary

                        sm:text-sm
                      "
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </ExtraCard>
          )}
        </div>

        {/* =============================================
            DEUXIÈME RANGÉE
            CERTIFICATIONS ET OUTILS
        ============================================== */}
        {(certifications.length > 0 ||
          officeTools.length > 0) && (
          <div
            className="
              mt-6 grid items-stretch gap-6
              lg:mt-7 lg:grid-cols-2 lg:gap-7
            "
          >
            {/* CERTIFICATIONS */}
            {certifications.length > 0 && (
              <ExtraCard
                icon="award"
                title={t.certification}
              >
                <div className="space-y-3">
                  {certifications.map((item, index) => {
                    const title = translate(
                      item.title,
                      language
                    );

                    const date = translate(
                      item.date,
                      language
                    );

                    const issuer = translate(
                      item.issuer,
                      language
                    );

                    return (
                      <div
                        key={item.id ?? index}
                        className="
                          rounded-2xl
                          border border-primary/20
                          bg-surface/45
                          p-4
                          transition-colors duration-200
                          hover:border-primary/45
                          sm:p-5
                        "
                        style={{
                          transform: "translateZ(42px)",
                        }}
                      >
                        {issuer && (
                          <p
                            className="
                              text-xs font-bold
                              uppercase tracking-wide
                              text-primary
                              sm:text-sm
                            "
                          >
                            {issuer}
                          </p>
                        )}

                        <h4
                          className="
                            mt-2 text-base
                            font-bold leading-snug
                            text-foreground
                            sm:text-lg
                          "
                        >
                          {title}
                        </h4>

                        {date && (
                          <p
                            className="
                              mt-3 text-xs text-muted
                              sm:text-sm
                            "
                          >
                            {date}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ExtraCard>
            )}

            {/* OUTILS BUREAUTIQUES */}
            {officeTools.length > 0 && (
              <ExtraCard
                icon="tools"
                title={t.officeTools}
              >
                <div
                  dir="ltr"
                  className={`
                    flex flex-wrap gap-2.5
                    ${
                      isRTL
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                  style={{
                    transform: "translateZ(46px)",
                  }}
                >
                  {officeTools.map((tool, index) => (
                    <span
                      key={`${index}-${tool}`}
                      className="
                        rounded-xl
                        border border-primary/20
                        bg-surface/65
                        px-4 py-2.5
                        text-xs font-semibold
                        text-foreground
                        backdrop-blur-md

                        transition-[border-color,background-color,color]
                        duration-200

                        hover:border-primary/50
                        hover:bg-primary/10
                        hover:text-primary

                        sm:text-sm
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </ExtraCard>
            )}
          </div>
        )}

        {/* =============================================
            TROISIÈME RANGÉE
            ENGAGEMENTS ET RÉALISATIONS
        ============================================== */}
        {engagement.length > 0 && (
          <div className="mt-6 lg:mt-7">
            <ExtraCard
              icon="engagement"
              title={t.engagement}
              featured
            >
              <div className="space-y-4">
                {engagement.map((item, index) => {
                  const title = translate(
                    item.title,
                    language
                  );

                  const startDate = translate(
                    item.startDate,
                    language
                  );

                  const endDate = translate(
                    item.endDate,
                    language
                  );

                  const dates = period(
                    startDate,
                    endDate
                  );

                  return (
                    <div
                      key={item.id ?? index}
                      className="
                        relative flex flex-col gap-4
                        rounded-2xl
                        border border-border/60
                        bg-surface/35
                        p-4

                        transition-colors duration-200
                        hover:border-primary/40
                        hover:bg-primary/[0.045]

                        sm:p-5
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                        lg:gap-8
                      "
                      style={{
                        transform: "translateZ(42px)",
                      }}
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="
                            mt-2.5 h-2 w-2
                            shrink-0 rounded-full
                            bg-secondary
                            shadow-[0_0_12px_var(--secondary)]
                          "
                        />

                        <h4
                          className="
                            max-w-3xl text-base
                            font-bold leading-relaxed
                            text-foreground
                            sm:text-lg
                          "
                        >
                          {title}
                        </h4>
                      </div>

                      {dates && (
                        <span
                          className="
                            inline-flex w-fit
                            shrink-0 rounded-full
                            border border-primary/25
                            bg-primary/[0.07]
                            px-4 py-2
                            text-xs font-semibold
                            text-foreground
                            sm:text-sm
                          "
                        >
                          {dates}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </ExtraCard>
          </div>
        )}
      </div>
    </section>
  );
}
