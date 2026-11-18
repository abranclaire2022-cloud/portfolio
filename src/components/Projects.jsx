
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

/* =========================================================
   TRADUCTIONS — 5 LANGUES
========================================================= */

const content = {
  fr: {
    eyebrow: "Réalisations",
    title: "PROJETS",
    subtitle: "Du concept à l’expérience",
    description:
      "Chaque projet me permet de relier interface, logique métier et expérience utilisateur autour d’un besoin concret.",
    problem: "Problème",
    solution: "Solution",
    features: "Fonctionnalités",
    technologies: "Technologies",
    result: "État du projet",
    live: "Voir le projet",
    github: "Voir le code",
    imageSelector: "Afficher l’image",
    previousImage: "Image précédente",
    nextImage: "Image suivante",
    projectView: "Aperçu du projet",
  },
  en: {
    eyebrow: "Selected work",
    title: "PROJECTS",
    subtitle: "From concept to experience",
    description:
      "Each project is an opportunity to connect interface design, business logic and user experience around a concrete need.",
    problem: "Problem",
    solution: "Solution",
    features: "Features",
    technologies: "Technologies",
    result: "Project status",
    live: "View project",
    github: "View code",
    imageSelector: "Show image",
    previousImage: "Previous image",
    nextImage: "Next image",
    projectView: "Project preview",
  },
  "pt-BR": {
    eyebrow: "Realizações",
    title: "PROJETOS",
    subtitle: "Do conceito à experiência",
    description:
      "Cada projeto é uma oportunidade de unir interface, lógica de negócio e experiência do usuário em torno de uma necessidade concreta.",
    problem: "Problema",
    solution: "Solução",
    features: "Funcionalidades",
    technologies: "Tecnologias",
    result: "Estado do projeto",
    live: "Ver projeto",
    github: "Ver código",
    imageSelector: "Exibir imagem",
    previousImage: "Imagem anterior",
    nextImage: "Próxima imagem",
    projectView: "Visão do projeto",
  },
  ja: {
    eyebrow: "制作実績",
    title: "プロジェクト",
    subtitle: "アイデアから体験へ",
    description:
      "各プロジェクトを通じて、具体的な課題に対し、インターフェース、ビジネスロジック、ユーザー体験を一つにつなげています。",
    problem: "課題",
    solution: "解決策",
    features: "主な機能",
    technologies: "使用技術",
    result: "プロジェクト状況",
    live: "プロジェクトを見る",
    github: "コードを見る",
    imageSelector: "画像を表示",
    previousImage: "前の画像",
    nextImage: "次の画像",
    projectView: "プロジェクトプレビュー",
  },
  ar: {
    eyebrow: "الأعمال",
    title: "المشاريع",
    subtitle: "من الفكرة إلى التجربة",
    description:
      "يمثل كل مشروع فرصة لربط الواجهة ومنطق العمل وتجربة المستخدم حول حاجة عملية وواضحة.",
    problem: "المشكلة",
    solution: "الحل",
    features: "الوظائف",
    technologies: "التقنيات",
    result: "حالة المشروع",
    live: "عرض المشروع",
    github: "عرض الكود",
    imageSelector: "عرض الصورة",
    previousImage: "الصورة السابقة",
    nextImage: "الصورة التالية",
    projectView: "معاينة المشروع",
  },
};

/* =========================================================
   UTILITAIRES
========================================================= */

function translate(value, language, fallback = "") {
  if (typeof value === "string") return value;

  return value?.[language] ?? value?.fr ?? fallback;
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

/* =========================================================
   GALERIE 3D
========================================================= */

function ProjectGallery({ project, language, isRTL, t }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tiltRef = useRef(null);
  const lightRef = useRef(null);

  const gallery =
    project.gallery?.length > 0
      ? project.gallery
      : project.image
        ? [{ src: project.image, label: project.title }]
        : [];

  if (gallery.length === 0) return null;

  const activeImage = gallery[activeIndex];

  const projectTitle = translate(project.title, language);
  const activeLabel = translate(
    activeImage.label,
    language,
    projectTitle
  );

  /* =======================================================
     PERSPECTIVE 3D AU MOUVEMENT DE LA SOURIS
  ======================================================== */

  function handlePointerMove(event) {
    if (event.pointerType !== "mouse") return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
    ) {
      return;
    }

    const element = tiltRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    const rotateY = x * 7;
    const rotateX = -y * 5;

    element.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(10px)
    `;

    element.style.boxShadow = `
      ${-x * 14}px ${18 + y * 14}px 60px
      rgba(0, 0, 0, 0.24),
      0 0 38px var(--glow-primary)
    `;

    if (lightRef.current) {
      lightRef.current.style.opacity = "1";

      lightRef.current.style.background = `
        radial-gradient(
          circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%,
          rgba(192,132,252,0.13),
          transparent 50%
        )
      `;
    }
  }

  function resetTilt() {
    if (tiltRef.current) {
      tiltRef.current.style.transform =
        "rotateX(0deg) rotateY(0deg) translateZ(0)";

      tiltRef.current.style.boxShadow = "";
    }

    if (lightRef.current) {
      lightRef.current.style.opacity = "0";
    }
  }

  function previousImage() {
    setActiveIndex(
      (current) =>
        (current - 1 + gallery.length) % gallery.length
    );
  }

  function nextImage() {
    setActiveIndex(
      (current) => (current + 1) % gallery.length
    );
  }

  return (
    <div className="relative p-3 sm:p-6 lg:p-7">
      {/* HALO D'AMBIANCE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-1/3
          h-[70%] w-[75%]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[90px]
        "
      />

      {/* SCÈNE AVEC PERSPECTIVE */}
      <div
        className="relative"
        style={{
          perspective: "1300px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          ref={tiltRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          onPointerCancel={resetTilt}
          className="
            relative
            overflow-hidden
            rounded-[1.6rem]
            border border-primary/25
            bg-surface/50
            shadow-2xl shadow-black/20
            transition-[transform,box-shadow]
            duration-300
            ease-out
          "
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {/* REFLET 3D */}
          <div
            ref={lightRef}
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0 z-20
              opacity-0
              transition-opacity duration-300
            "
          />

          {/* BARRE SUPÉRIEURE */}
          <div
            className="
              relative z-10
              flex items-center justify-between gap-3
              border-b border-border/60
              bg-background/70
              px-4 py-3
              backdrop-blur-xl
              sm:px-5
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                aria-hidden="true"
                className="flex shrink-0 gap-1.5"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary-hover/70" />
              </div>

              <div className="hidden h-4 w-px bg-border sm:block" />

              <span
                className="
                  hidden truncate text-xs font-semibold
                  uppercase tracking-[0.14em]
                  text-muted sm:block
                "
              >
                {t.projectView}
              </span>
            </div>

            <span
              dir="ltr"
              className="
                shrink-0 rounded-full
                border border-primary/20
                bg-primary/5
                px-3 py-1.5
                text-xs font-semibold text-primary
              "
            >
              {formatNumber(activeIndex + 1)}
              {" / "}
              {formatNumber(gallery.length)}
            </span>
          </div>

          {/* IMAGE PRINCIPALE */}
          <div
            className="
              group/image relative
              aspect-[16/10] w-full
              overflow-hidden
              bg-surface-elevated
              sm:aspect-video
              lg:aspect-[2.3/1]
            "
          >
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={`${projectTitle} — ${activeLabel}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="
                object-cover object-center
                transition-transform
                duration-700 ease-out
                group-hover/image:scale-[1.025]
              "
            />

            {/* OMBRE INFÉRIEURE */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-x-0 bottom-0
                h-28
                bg-gradient-to-t
                from-black/65 to-transparent
              "
            />

            {/* NAVIGATION */}
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label={t.previousImage}
                  className="
                    absolute start-3 top-1/2 z-30
                    flex h-10 w-10
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border border-white/20
                    bg-black/60 text-white
                    shadow-lg backdrop-blur-xl
                    transition-all duration-200
                    hover:scale-110
                    hover:bg-primary
                    sm:start-5
                    sm:h-12 sm:w-12
                  "
                >
                  {isRTL ? "→" : "←"}
                </button>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label={t.nextImage}
                  className="
                    absolute end-3 top-1/2 z-30
                    flex h-10 w-10
                    -translate-y-1/2
                    items-center justify-center
                    rounded-full
                    border border-white/20
                    bg-black/60 text-white
                    shadow-lg backdrop-blur-xl
                    transition-all duration-200
                    hover:scale-110
                    hover:bg-primary
                    sm:end-5
                    sm:h-12 sm:w-12
                  "
                >
                  {isRTL ? "←" : "→"}
                </button>
              </>
            )}

            {/* LÉGENDE */}
            <div
              className="
                pointer-events-none
                absolute inset-x-4 bottom-4 z-10
              "
            >
              <span
                className="
                  inline-block max-w-[85%]
                  rounded-xl
                  border border-white/15
                  bg-black/55
                  px-4 py-2.5
                  text-sm font-semibold
                  text-white
                  backdrop-blur-xl
                  sm:text-base
                "
              >
                {activeLabel}
              </span>
            </div>
          </div>

          {/* FILET LUMINEUX */}
          <div
            aria-hidden="true"
            className="
              h-px w-full
              bg-gradient-to-r
              from-transparent
              via-primary/60
              to-transparent
            "
          />
        </div>
      </div>

      {/* MINIATURES AVEC PROFONDEUR */}
      {gallery.length > 1 && (
        <div
          className="
            mt-5 grid grid-cols-2 gap-3
            sm:grid-cols-3
            lg:grid-cols-5
          "
          style={{ perspective: "1100px" }}
        >
          {gallery.map((item, index) => {
            const isActive = activeIndex === index;

            const label = translate(
              item.label,
              language,
              projectTitle
            );

            return (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  resetTilt();
                }}
                aria-label={`${t.imageSelector}: ${label}`}
                aria-pressed={isActive}
                className={`
                  group/thumb relative
                  overflow-hidden
                  rounded-2xl border
                  text-start
                  transition-all duration-300
                  motion-safe:hover:-translate-y-2
                  motion-safe:hover:scale-[1.025]

                  ${
                    isActive
                      ? "border-primary/80 bg-primary/10 shadow-lg shadow-primary/20"
                      : "border-border/60 bg-surface/40 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                  }
                `}
              >
                <div
                  className="
                    relative aspect-video
                    overflow-hidden bg-surface-elevated
                  "
                >
                  <Image
                    src={item.src}
                    alt={label}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className={`
                      object-cover object-center
                      transition-all duration-500

                      ${
                        isActive
                          ? "scale-[1.025]"
                          : "opacity-75 group-hover/thumb:scale-110 group-hover/thumb:opacity-100"
                      }
                    `}
                  />
                </div>

                <div className="flex items-start gap-2 p-3">
                  <span
                    dir="ltr"
                    className={`
                      shrink-0 text-[10px] font-bold
                      ${isActive ? "text-primary" : "text-muted"}
                    `}
                  >
                    {formatNumber(index + 1)}
                  </span>

                  <span
                    className={`
                      line-clamp-2
                      text-xs font-semibold
                      leading-5

                      ${
                        isActive
                          ? "text-foreground"
                          : "text-muted"
                      }
                    `}
                  >
                    {label}
                  </span>
                </div>

                {isActive && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-x-3 bottom-0
                      h-[2px] bg-primary
                      shadow-[0_0_12px_var(--primary)]
                    "
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   CARTE PROJET — CONTENU
========================================================= */

function ProjectCard({ project, language, t, isRTL }) {
  const title = translate(project.title, language);
  const type = translate(project.type, language);
  const status = translate(project.status, language);
  const description = translate(project.description, language);
  const problem = translate(project.problem, language);
  const solution = translate(project.solution, language);
  const result = translate(project.result, language);

  const highlights = translate(
    project.highlights,
    language,
    []
  );

  const features = Array.isArray(highlights)
    ? highlights
    : [];

  const technologies = project.technologies || [];

  return (
    <article
      className="
        relative overflow-hidden
        rounded-[2rem]
        border border-border/70
        bg-background/55
        shadow-2xl shadow-black/10
        backdrop-blur-xl
      "
    >
      {/* HALOS INTERNES */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 -top-32
          h-80 w-80 rounded-full
          bg-primary/[0.055]
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-32 -left-32
          h-80 w-80 rounded-full
          bg-secondary/[0.04]
          blur-[100px]
        "
      />

      <ProjectGallery
        project={project}
        language={language}
        isRTL={isRTL}
        t={t}
      />

      <div
        className="
          relative border-t border-border/60
          p-5 sm:p-9 lg:p-10
        "
      >
        {/* INTRODUCTION */}
        <div
          className="
            flex flex-col gap-6
            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          <div className="max-w-4xl">
            {type && (
              <p
                className="
                  text-xs font-bold uppercase
                  tracking-[0.18em] text-primary
                "
              >
                {type}
              </p>
            )}

            <h3
              className="
                mt-3
                text-3xl font-extrabold
                tracking-[-0.035em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              {title}
              <span className="text-primary">.</span>
            </h3>

            {description && (
              <p
                className="
                  mt-5 max-w-3xl
                  text-base leading-8
                  text-muted sm:text-lg
                "
              >
                {description}
              </p>
            )}
          </div>

          {status && (
            <span
              className="
                inline-flex w-fit shrink-0
                items-center gap-2
                rounded-full
                border border-warning/25
                bg-warning/[0.05]
                px-4 py-2.5
                text-sm font-semibold
                text-foreground
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-2 w-2 rounded-full bg-warning
                  shadow-[0_0_14px_var(--warning)]
                "
              />
              {status}
            </span>
          )}
        </div>

        {/* PROBLÈME ET SOLUTION */}
        {(problem || solution) && (
          <div
            className="
              mt-9 grid gap-4
              sm:mt-12 sm:gap-5
              md:grid-cols-2
            "
          >
            {problem && (
              <div
                className="
                  rounded-2xl
                  border border-border/65
                  bg-surface/30
                  p-6 backdrop-blur-md
                  transition-colors
                  hover:border-primary/35
                  sm:p-7
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full border border-border
                      text-xs font-bold text-primary
                    "
                  >
                    01
                  </span>

                  <h4
                    className="
                      text-xs font-bold uppercase
                      tracking-[0.16em] text-primary
                    "
                  >
                    {t.problem}
                  </h4>
                </div>

                <p className="mt-5 leading-7 text-muted">
                  {problem}
                </p>
              </div>
            )}

            {solution && (
              <div
                className="
                  rounded-2xl
                  border border-primary/25
                  bg-primary/[0.035]
                  p-6 backdrop-blur-md
                  transition-colors
                  hover:border-primary/50
                  sm:p-7
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      border border-primary/30
                      text-xs font-bold text-primary
                    "
                  >
                    02
                  </span>

                  <h4
                    className="
                      text-xs font-bold uppercase
                      tracking-[0.16em] text-primary
                    "
                  >
                    {t.solution}
                  </h4>
                </div>

                <p className="mt-5 leading-7 text-muted">
                  {solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* FONCTIONNALITÉS ET TECHNOLOGIES */}
        {(features.length > 0 ||
          technologies.length > 0) && (
          <div
            className="
              mt-10 grid gap-9
              lg:grid-cols-[1.45fr_0.55fr]
              lg:gap-10
            "
          >
            {features.length > 0 && (
              <div>
                <h4
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.18em]
                    text-foreground
                  "
                >
                  {t.features}
                </h4>

                <ul
                  className="
                    mt-6 grid gap-3
                    sm:grid-cols-2
                  "
                >
                  {features.map((feature, index) => (
                    <li
                      key={`${index}-${feature}`}
                      className="
                        flex items-start gap-3
                        rounded-xl
                        border border-border/55
                        bg-surface/25
                        px-4 py-3.5
                        text-sm leading-6 text-muted
                        transition-colors
                        hover:border-primary/30
                        hover:text-foreground
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          mt-[0.45rem]
                          h-1.5 w-1.5 shrink-0
                          rounded-full bg-primary
                          shadow-[0_0_10px_var(--primary)]
                        "
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {technologies.length > 0 && (
              <div>
                <h4
                  className="
                    text-xs font-bold uppercase
                    tracking-[0.18em]
                    text-foreground
                  "
                >
                  {t.technologies}
                </h4>

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
                >
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-xl
                        border border-primary/25
                        bg-primary/[0.055]
                        px-4 py-2.5
                        text-sm font-semibold
                        text-foreground
                        transition-colors
                        hover:border-primary/55
                        hover:text-primary
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ÉTAT DU PROJET */}
        {result && (
          <div
            className="
              mt-10 border-t border-border/60
              pt-8
            "
          >
            <h4
              className="
                text-xs font-bold uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              {t.result}
            </h4>

            <p
              className="
                mt-4 max-w-4xl
                leading-7 text-muted
              "
            >
              {result}
            </p>
          </div>
        )}

        {/* LIENS RÉELS UNIQUEMENT */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl bg-primary
                  px-5 py-3
                  text-sm font-semibold
                  text-white
                  shadow-lg shadow-primary/15
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-primary-hover
                "
              >
                {t.live} ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border border-border/70
                  bg-surface/30
                  px-5 py-3
                  text-sm font-semibold
                  text-foreground
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-primary/50
                "
              >
                {t.github} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   SECTION PROJETS
========================================================= */

export default function Projects() {
  const { language, isRTL } = useLanguage();

  const t = content[language] || content.fr;

  const projects = portfolio.projects || [];

  if (!projects.length) return null;

  return (
    <section
      id="projects"
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
        className="
          pointer-events-none
          absolute inset-0
        "
      >
        <div
          className="
            absolute -left-44 top-32
            h-[32rem] w-[32rem]
            rounded-full bg-primary/[0.055]
            blur-[120px]
          "
        />

        <div
          className="
            absolute -right-48 bottom-[-8rem]
            h-[34rem] w-[34rem]
            rounded-full bg-secondary/[0.045]
            blur-[130px]
          "
        />
      </div>

      <div
        className="
          relative z-10
          mx-auto max-w-6xl
        "
      >
        {/* TITRE */}
        <div>
          <div className="text-center">
            <p
              className="
                text-xs font-semibold
                uppercase tracking-[0.18em]
                text-primary
                sm:text-sm
              "
            >
              {t.eyebrow}
            </p>

            <h2
              className="
                mt-3
                text-3xl font-extrabold
                uppercase leading-[1.05]
                tracking-[-0.03em]
                text-foreground
                sm:text-5xl lg:text-6xl
              "
            >
              {t.title}
              <span className="text-primary">.</span>
            </h2>
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

            <p className="mt-3 leading-7 text-muted">
              {t.description}
            </p>
          </div>
        </div>

        {/* PROJETS */}
        <div
          className="
            mt-10 space-y-10
            sm:mt-12 sm:space-y-12
            lg:mt-14 lg:space-y-14
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
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