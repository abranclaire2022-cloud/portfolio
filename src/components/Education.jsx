
"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";
import TiltCard from "@/components/effects/TiltCard";

/* =========================================================
   LYDIA PORTFOLIO — CYBER VIOLET
   SECTION FORMATION

   - Données originales de portfolio.js
   - Cartes TiltCard 3D
   - Formation principale mise en valeur
   - 5 langues et support RTL
   - Responsive et mode clair/sombre
========================================================= */

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

/* =========================================================
   UTILITAIRES
========================================================= */

function translate(value, language, fallback = "") {
  if (typeof value === "string") return value;

  return value?.[language] ?? value?.fr ?? fallback;
}

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

/* =========================================================
   ICÔNES
========================================================= */

function GraduationIcon({ main = false }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {main ? (
        <>
          <path d="m2 9 10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v5c0 2 3 4 6 4s6-2 6-4v-5" />
          <path d="M22 9v6" />
        </>
      ) : (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h3" />
          <path d="m14 17 2 2 4-4" />
        </>
      )}
    </svg>
  );
}

/* =========================================================
   CARTE FORMATION
========================================================= */

function EducationCard({
  item,
  index,
  language,
  isRTL,
  t,
}) {
  const isMainEducation = index === 0;

  const degree = translate(item.degree, language);
  const degreeExplanation = translate(
    item.degreeExplanation,
    language
  );
  const institution = translate(item.institution, language);
  const location = translate(item.location, language);
  const startDate = translate(item.startDate, language);
  const endDate = translate(item.endDate, language);
  const status = translate(item.status, language);
  const distinction = translate(item.distinction, language);

  const courseworkValue = translate(
    item.coursework,
    language,
    []
  );

  const coursework = Array.isArray(courseworkValue)
    ? courseworkValue
    : [];

  const period = [startDate, endDate]
    .filter(Boolean)
    .join(" — ");

  return (
    <TiltCard
      intensity="subtle"
      glare={true}
      className={`
        group relative
        rounded-[1.6rem]
        border
        backdrop-blur-xl
        transition-[border-color,box-shadow]
        duration-300

        hover:border-primary/55
        hover:shadow-2xl
        hover:shadow-primary/10

        ${
          isMainEducation
            ? "border-primary/35 bg-surface/60 shadow-2xl shadow-primary/[0.06]"
            : "border-border/70 bg-background/65 shadow-xl shadow-black/10"
        }
      `}
    >
      {/* COUCHE ARRIÈRE 3D */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-3
          rounded-[1.2rem]
          border border-primary/10
          bg-primary/[0.015]
        "
        style={{ transform: "translateZ(-24px)" }}
      />

      {/* HALO VIOLET */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -top-24 -end-20
          h-64 w-64 rounded-full
          bg-primary/[0.08]
          blur-[75px]
        "
      />

      {/* HALO ROSE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-24 -start-20
          h-56 w-56 rounded-full
          bg-secondary/[0.055]
          blur-[80px]
        "
      />

      {/* LIGNE LUMINEUSE SUPÉRIEURE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-8 top-0
          h-px
        "
        style={{
          background:
            "linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent)",
          opacity: isMainEducation ? 0.9 : 0.45,
          transform: "translateZ(12px)",
        }}
      />

      {/* NUMÉRO */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute end-6 top-6
          text-xs font-bold
          tracking-[0.18em]
          text-primary/50
        "
        style={{ transform: "translateZ(24px)" }}
      >
        {formatNumber(index + 1)}
      </span>

      {/* CONTENU */}
      <div
        className={`
          relative z-10
          ${isMainEducation ? "p-6 sm:p-9" : "p-6 sm:p-8"}
        `}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ICÔNE */}
        <div
          className={`
            flex h-13 w-13
            items-center justify-center
            rounded-2xl border
            text-primary
            shadow-lg shadow-primary/10

            ${
              isMainEducation
                ? "border-primary/40 bg-primary/15"
                : "border-primary/20 bg-primary/[0.07]"
            }
          `}
          style={{
            width: "3.25rem",
            height: "3.25rem",
            transform: "translateZ(42px)",
          }}
        >
          <GraduationIcon main={isMainEducation} />
        </div>

        <div
          className="
            mt-6 flex flex-col gap-6
            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-8
          "
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* INFORMATIONS PRINCIPALES */}
          <div className="min-w-0 max-w-4xl flex-1">
            {/* STATUT ET DISTINCTION */}
            {(status || distinction) && (
              <div
                className="flex flex-wrap items-center gap-2.5"
                style={{ transform: "translateZ(36px)" }}
              >
                {status && (
                  <span
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-border/70
                      bg-background/55
                      px-3 py-1.5
                      text-xs font-semibold
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
                      inline-flex items-center gap-2
                      rounded-full
                      border border-primary/35
                      bg-primary/[0.08]
                      px-3 py-1.5
                      text-xs font-bold
                      text-primary
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        h-1.5 w-1.5 rounded-full
                        bg-secondary
                        shadow-[0_0_12px_var(--secondary)]
                      "
                    />
                    {distinction}
                  </span>
                )}
              </div>
            )}

            {/* DIPLÔME */}
            {degree && (
              <h3
                className={`
                  mt-5 font-extrabold
                  leading-tight
                  tracking-[-0.03em]
                  text-foreground

                  ${
                    isMainEducation
                      ? "text-2xl sm:text-3xl"
                      : "text-xl sm:text-2xl"
                  }
                `}
                style={{ transform: "translateZ(46px)" }}
              >
                {degree}
              </h3>
            )}

            {/* PRÉCISION SUR LE DIPLÔME */}
            {degreeExplanation && (
              <p
                className="
                  mt-3 max-w-3xl
                  text-sm font-medium
                  leading-7 text-muted
                "
                style={{ transform: "translateZ(38px)" }}
              >
                {degreeExplanation}
              </p>
            )}

            {/* ÉTABLISSEMENT */}
            {institution && (
              <p
                className="
                  mt-5 text-base
                  font-bold text-primary
                  sm:text-lg
                "
                style={{ transform: "translateZ(43px)" }}
              >
                <span dir="auto">{institution}</span>
              </p>
            )}

            {/* LOCALISATION */}
            {location && (
              <p
                className="mt-1.5 text-sm text-muted"
                style={{ transform: "translateZ(30px)" }}
              >
                {location}
              </p>
            )}
          </div>

          {/* PÉRIODE */}
          {period && (
            <div
              className="shrink-0"
              style={{ transform: "translateZ(54px)" }}
            >
              <span
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-primary/25
                  bg-primary/[0.06]
                  px-4 py-2
                  text-xs font-semibold
                  text-foreground
                  sm:text-sm
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5 w-1.5 rounded-full bg-primary
                  "
                />
                <span>{period}</span>
              </span>
            </div>
          )}
        </div>

        {/* DOMAINES ÉTUDIÉS */}
        {coursework.length > 0 && (
          <div
            className="
              relative mt-8
              border-t border-border/55
              pt-7
            "
            style={{
              transform: "translateZ(36px)",
              transformStyle: "preserve-3d",
            }}
          >
            <h4
              className="
                text-xs font-bold
                uppercase tracking-[0.16em]
                text-foreground
              "
            >
              {t.coursework}
            </h4>

            <div
              dir="ltr"
              className={`
                mt-5 flex flex-wrap gap-2.5
                ${isRTL ? "justify-end" : "justify-start"}
              `}
              style={{
                transform: "translateZ(14px)",
              }}
            >
              {coursework.map((course, courseIndex) => (
                <span
                  key={`${courseIndex}-${course}`}
                  className="
                    rounded-xl
                    border border-primary/20
                    bg-background/65
                    px-3.5 py-2
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
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ORBITE DÉCORATIVE */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute bottom-6 end-6
            rounded-full
            border border-primary/15

            ${
              isMainEducation
                ? "h-16 w-16"
                : "h-11 w-11"
            }
          `}
          style={{ transform: "translateZ(14px)" }}
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-11 end-11
            h-2 w-2 rounded-full
            bg-secondary
            shadow-[0_0_14px_var(--secondary)]
          "
          style={{ transform: "translateZ(47px)" }}
        />
      </div>
    </TiltCard>
  );
}

/* =========================================================
   SECTION FORMATION
========================================================= */

export default function Education() {
  const { language, isRTL } = useLanguage();

  const t = content[language] || content.fr;

  const education = portfolio.education || [];

  if (!education.length) return null;

  return (
    <section
      id="education"
      className="
        relative overflow-hidden
        border-t border-border/60
        bg-background/30

        px-4 py-20
        sm:px-6
        lg:py-24
      "
    >
      {/* AMBIANCE CYBER VIOLET */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute -right-40 top-20
            h-[30rem] w-[30rem]
            rounded-full
            opacity-[0.09]
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
            absolute -left-36 bottom-[-7rem]
            h-[26rem] w-[26rem]
            rounded-full
            opacity-[0.06]
            blur-[100px]
            dark:opacity-[0.12]
          "
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* EN-TÊTE */}
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
                mx-auto mt-5
                h-[3px] w-24
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

        {/* CARTES FORMATION */}
        <div className="mt-12 space-y-6 lg:mt-14 lg:space-y-8">
          {education.map((item, index) => (
            <EducationCard
              key={item.id ?? index}
              item={item}
              index={index}
              language={language}
              isRTL={isRTL}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
