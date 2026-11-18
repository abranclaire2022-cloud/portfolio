
"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";
import TiltCard from "@/components/effects/TiltCard";

/* =========================================================
   LYDIA PORTFOLIO — CYBER VIOLET
   EXPÉRIENCES PROFESSIONNELLES

   - Données originales depuis portfolio.js
   - Chronologie interactive
   - Cartes 3D via TiltCard
   - Simulation Deloitte clairement identifiée
   - 5 langues et RTL
   - Lien vers le CV actuel
========================================================= */

const content = {
  fr: {
    eyebrow: "Parcours professionnel",
    title: "EXPÉRIENCES",
    subtitle: "Ce que j’ai construit en chemin",
    description:
      "Développement web, design numérique et découverte de la cybersécurité : des expériences qui ont progressivement façonné ma manière de travailler.",
    current: "Aujourd’hui",
    viewCv: "Voir mon parcours complet dans mon CV",
    simulation: "Simulation professionnelle",
  },

  en: {
    eyebrow: "Professional journey",
    title: "EXPERIENCE",
    subtitle: "What I’ve built along the way",
    description:
      "Web development, digital design and an introduction to cybersecurity: different experiences that have gradually shaped the way I work.",
    current: "Present",
    viewCv: "View my full experience in my CV (FR)",
    simulation: "Job simulation",
  },

  "pt-BR": {
    eyebrow: "Trajetória profissional",
    title: "EXPERIÊNCIAS",
    subtitle: "O que construí ao longo do caminho",
    description:
      "Desenvolvimento web, design digital e descoberta da cibersegurança: experiências diferentes que moldaram progressivamente a minha forma de trabalhar.",
    current: "Atualmente",
    viewCv: "Ver minha trajetória completa no CV (FR)",
    simulation: "Simulação profissional",
  },

  ja: {
    eyebrow: "プロフェッショナルキャリア",
    title: "経験",
    subtitle: "これまで積み重ねてきたもの",
    description:
      "Web開発、デジタルデザイン、サイバーセキュリティへの取り組みを通じて、仕事への向き合い方を少しずつ築いてきました。",
    current: "現在",
    viewCv: "フランス語の履歴書で経歴全体を見る",
    simulation: "職業体験シミュレーション",
  },

  ar: {
    eyebrow: "المسار المهني",
    title: "الخبرات",
    subtitle: "ما بنيته خلال مسيرتي",
    description:
      "تطوير الويب والتصميم الرقمي والتعرّف إلى الأمن السيبراني: تجارب مختلفة ساهمت تدريجيًا في تشكيل أسلوبي في العمل.",
    current: "حتى الآن",
    viewCv: "عرض مساري الكامل في السيرة الذاتية بالفرنسية",
    simulation: "محاكاة مهنية",
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

function ArrowIcon({ isRTL = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {isRTL ? (
        <path d="M19 12H5m7-7-7 7 7 7" />
      ) : (
        <path d="M5 12h14m-7-7 7 7-7 7" />
      )}
    </svg>
  );
}

/* =========================================================
   CARTE D'EXPÉRIENCE
========================================================= */

function ExperienceCard({
  item,
  index,
  language,
  isRTL,
  t,
}) {
  const isSimulation =
    item.id === "deloitte-cybersecurity";

  const type = translate(item.type, language);
  const position = translate(item.position, language);
  const company = translate(item.company, language);
  const location = translate(item.location, language);
  const startDate = translate(item.startDate, language);
  const endDate = translate(item.endDate, language);

  const descriptionValue = translate(
    item.description,
    language,
    []
  );

  const description = Array.isArray(descriptionValue)
    ? descriptionValue
    : descriptionValue
      ? [descriptionValue]
      : [];

  const technologies = Array.isArray(item.technologies)
    ? item.technologies
    : [];

  const period = [
    startDate,
    item.current ? t.current : endDate,
  ]
    .filter(Boolean)
    .join(" — ");

  return (
    <div
      className={`
        relative
        ${isRTL ? "lg:pr-12" : "lg:pl-12"}
      `}
    >
      {/* POINT DE LA CHRONOLOGIE */}
      <div
        aria-hidden="true"
        className={`
          absolute top-11 z-20
          hidden h-4 w-4
          rounded-full
          border-2 border-primary
          bg-background
          shadow-[0_0_20px_var(--glow-primary)]
          lg:block

          ${
            isRTL
              ? "right-[7px]"
              : "left-[7px]"
          }
        `}
      >
        <span
          className="
            absolute inset-[3px]
            rounded-full bg-primary
          "
        />
      </div>

      {/* CARTE 3D */}
      <TiltCard
        intensity="subtle"
        glare={true}
        className={`
          group relative
          rounded-[1.6rem]
          border
          bg-background/75
          p-5
          shadow-xl shadow-black/10
          backdrop-blur-xl
          transition-[border-color,box-shadow]
          duration-300

          hover:border-primary/50
          hover:shadow-2xl
          hover:shadow-primary/10

          sm:p-8

          ${
            isSimulation
              ? "border-secondary/35"
              : "border-primary/20"
          }
        `}
      >
        {/* COUCHE DE PROFONDEUR */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-3
            rounded-[1.2rem]
            border border-primary/10
            bg-primary/[0.015]
          "
          style={{
            transform: "translateZ(-25px)",
          }}
        />

        {/* HALO VIOLET */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -top-24 -end-20
            h-64 w-64 rounded-full
            bg-primary/[0.07]
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
            bg-secondary/[0.05]
            blur-[75px]
          "
        />

        {/* LIGNE LUMINEUSE */}
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
            transform: "translateZ(10px)",
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
          style={{
            transform: "translateZ(25px)",
          }}
        >
          {formatNumber(index + 1)}
        </span>

        {/* CONTENU */}
        <div
          className="
            relative z-10
            grid gap-6
            lg:grid-cols-[minmax(0,1fr)_auto]
            lg:gap-8
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="min-w-0">
            {/* TYPE D'EXPÉRIENCE */}
            <div
              className="flex flex-wrap items-center gap-2"
              style={{
                transform: "translateZ(35px)",
              }}
            >
              {type && (
                <span
                  className={`
                    inline-flex items-center
                    rounded-full
                    border px-3 py-1.5
                    text-[11px] font-semibold

                    ${
                      isSimulation
                        ? "border-secondary/40 bg-secondary/10 text-secondary"
                        : "border-primary/30 bg-primary/[0.07] text-primary"
                    }
                  `}
                >
                  {type}
                </span>
              )}

              {isSimulation && (
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-secondary/30
                    bg-secondary/[0.06]
                    px-3 py-1.5
                    text-[11px] font-semibold
                    text-foreground
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5 w-1.5
                      rounded-full bg-secondary
                    "
                  />

                  {t.simulation}
                </span>
              )}
            </div>

            {/* POSTE */}
            {position && (
              <h3
                className="
                  mt-5
                  max-w-3xl
                  text-xl font-extrabold
                  leading-tight
                  tracking-[-0.025em]
                  text-foreground

                  sm:text-2xl
                  lg:text-[1.7rem]
                "
                style={{
                  transform: "translateZ(45px)",
                }}
              >
                {position}
              </h3>
            )}

            {/* ENTREPRISE */}
            {company && (
              <p
                className="
                  mt-3 text-base font-bold
                  text-primary
                "
                style={{
                  transform: "translateZ(48px)",
                }}
              >
                <span dir="auto">{company}</span>
              </p>
            )}

            {/* LOCALISATION */}
            {location && (
              <p
                className="
                  mt-1
                  text-sm text-muted
                "
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                {location}
              </p>
            )}

            {/* DESCRIPTION */}
            {description.length > 0 && (
              <ul
                className="
                  mt-6 space-y-3
                "
                style={{
                  transform: "translateZ(30px)",
                }}
              >
                {description.map((point, pointIndex) => (
                  <li
                    key={`${pointIndex}-${point}`}
                    className="
                      flex items-start gap-3
                      text-sm leading-7
                      text-muted
                      sm:text-base
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        mt-[0.68rem]
                        h-1.5 w-1.5
                        shrink-0
                        rounded-full
                        bg-primary
                        shadow-[0_0_10px_var(--primary)]
                      "
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* TECHNOLOGIES */}
            {technologies.length > 0 && (
              <div
                dir="ltr"
                className={`
                  mt-6 flex flex-wrap gap-2

                  ${
                    isRTL
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-xl
                      border border-primary/20
                      bg-surface/65
                      px-3 py-1.5
                      text-xs font-medium
                      text-foreground/85
                      backdrop-blur-md
                      transition-colors duration-200

                      group-hover:border-primary/35
                      hover:bg-primary/10
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* PÉRIODE */}
          {period && (
            <div
              className="
                shrink-0
                lg:pt-10
              "
              style={{
                transform: "translateZ(55px)",
              }}
            >
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-primary/25
                  bg-primary/[0.06]
                  px-4 py-2
                  text-xs font-semibold
                  text-foreground
                  sm:text-sm
                "
              >
                {period}
              </span>
            </div>
          )}
        </div>

        {/* DÉCORATION INFÉRIEURE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-5 end-5
            h-12 w-12 rounded-full
            border border-primary/15
          "
          style={{
            transform: "translateZ(16px)",
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
            transform: "translateZ(45px)",
          }}
        />
      </TiltCard>
    </div>
  );
}

/* =========================================================
   SECTION EXPÉRIENCES
========================================================= */

export default function Experience() {
  const { language, isRTL } = useLanguage();

  const t = content[language] || content.fr;

  const experiences = portfolio.experience || [];

  if (experiences.length === 0) {
    return null;
  }

  const cvLinks = portfolio.links?.cv;
  const cvLink =
    typeof cvLinks === "string"
      ? cvLinks
      : cvLinks?.[language] || cvLinks?.fr;

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-t border-border/60
        bg-surface/25
        px-4 py-20
        sm:px-6
        lg:py-24
      "
    >
      {/* AMBIANCE CYBER VIOLET */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        <div
          className="
            absolute -left-40 top-24
            h-[30rem] w-[30rem]
            rounded-full
            opacity-[0.09]
            blur-[110px]
            dark:opacity-[0.14]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        <div
          className="
            absolute -right-44
            bottom-[-8rem]
            h-[32rem] w-[32rem]
            rounded-full
            opacity-[0.07]
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

        {/* CHRONOLOGIE */}
        <div
          className="
            relative mt-12
            space-y-6
            lg:mt-14
            lg:space-y-8
          "
        >
          {/* LIGNE DE TIMELINE */}
          <div
            aria-hidden="true"
            className={`
              absolute top-10 bottom-10
              hidden w-px
              bg-gradient-to-b
              from-transparent
              via-primary/50
              to-transparent
              lg:block

              ${
                isRTL
                  ? "right-[14px]"
                  : "left-[14px]"
              }
            `}
          />

          {experiences.map((item, index) => (
            <ExperienceCard
              key={item.id ?? index}
              item={item}
              index={index}
              language={language}
              isRTL={isRTL}
              t={t}
            />
          ))}
        </div>

        {/* LIEN VERS LE CV */}
        {cvLink && (
          <div className="mt-10 sm:mt-12">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/cv inline-flex
                items-center gap-3
                rounded-xl
                border border-primary/30
                bg-primary/[0.07]
                px-5 py-3.5
                text-sm font-semibold
                text-primary
                transition-all duration-200

                hover:border-primary/60
                hover:bg-primary/15
                hover:shadow-lg
                hover:shadow-primary/10
              "
            >
              <span>{t.viewCv}</span>

              <span
                className="
                  transition-transform duration-200
                  group-hover/cv:translate-x-1
                "
              >
                <ArrowIcon isRTL={isRTL} />
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
