"use client";

import { useState } from "react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

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

function ProjectCard({
  project,
  language,
  t,
  isRTL,
}) {
  const fallbackLanguage = "fr";

  const projectTitle =
    project.title?.[language] ||
    project.title?.[fallbackLanguage] ||
    "";

  const projectType =
    project.type?.[language] ||
    project.type?.[fallbackLanguage] ||
    "";

  const projectStatus =
    project.status?.[language] ||
    project.status?.[fallbackLanguage] ||
    "";

  const projectDescription =
    project.description?.[language] ||
    project.description?.[fallbackLanguage] ||
    "";

  const projectProblem =
    project.problem?.[language] ||
    project.problem?.[fallbackLanguage] ||
    "";

  const projectSolution =
    project.solution?.[language] ||
    project.solution?.[fallbackLanguage] ||
    "";

  const projectHighlights =
    project.highlights?.[language] ||
    project.highlights?.[fallbackLanguage] ||
    [];

  const projectResult =
    project.result?.[language] ||
    project.result?.[fallbackLanguage] ||
    "";

  const technologies =
    project.technologies || [];

  const gallery =
    project.gallery?.length > 0
      ? project.gallery
      : project.image
        ? [
            {
              src: project.image,
              label: project.title,
            },
          ]
        : [];

  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeImage =
    gallery[activeIndex] || null;

  const activeImageLabel =
    activeImage?.label?.[language] ||
    activeImage?.label?.[
      fallbackLanguage
    ] ||
    projectTitle;

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0
        ? gallery.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((current) =>
      current === gallery.length - 1
        ? 0
        : current + 1
    );
  };

  const formatNumber = (value) =>
    String(value).padStart(2, "0");

  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-border/70
        bg-background/55
        shadow-2xl
        shadow-black/10
        backdrop-blur-xl
      "
    >
      {/* =====================================================
          HALOS INTERNES
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-primary/[0.055]
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-secondary/[0.04]
          blur-[100px]
        "
      />

      {/* =====================================================
          GALERIE PREMIUM
      ====================================================== */}
      {activeImage && (
        <div className="relative p-3 sm:p-6 lg:p-7">
          <div
            className="
              overflow-hidden
              rounded-[1.6rem]
              border
              border-border/70
              bg-surface/40
              shadow-xl
            "
          >
            {/* ===============================================
                BARRE SUPÉRIEURE DE LA GALERIE
            ================================================ */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-2
                border-b
                border-border/60
                bg-background/65
                px-4
                py-3
                backdrop-blur-xl
                sm:px-5
              "
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  aria-hidden="true"
                  className="flex shrink-0 items-center gap-1.5"
                >
                  <span className="h-2 w-2 rounded-full bg-foreground/20" />
                  <span className="h-2 w-2 rounded-full bg-foreground/15" />
                  <span className="h-2 w-2 rounded-full bg-primary/60" />
                </div>

                <div className="hidden h-4 w-px bg-border/70 sm:block" />

                <p
                  className="
                    truncate
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-muted
                  "
                >
                  {t.projectView}
                </p>
              </div>

              <div
                dir="ltr"
                className="
                  shrink-0
                  rounded-full
                  border
                  border-border/70
                  bg-surface/45
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  tracking-[0.12em]
                  text-muted
                "
              >
                {formatNumber(
                  activeIndex + 1
                )}{" "}
                /{" "}
                {formatNumber(
                  gallery.length
                )}
              </div>
            </div>

            {/* ===============================================
                IMAGE PRINCIPALE
            ================================================ */}
            <div
              className="
                group/image
                relative
                aspect-[16/10]
                w-full
                overflow-hidden
                bg-surface-elevated

                sm:aspect-video

                lg:aspect-[2.3/1]
              "
            >
              <Image
                key={activeImage.src}
                src={activeImage.src}
                alt={`${projectTitle} - ${activeImageLabel}`}
                fill
                priority={
                  project.id === "avibz" &&
                  activeIndex === 0
                }
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  group-hover/image:scale-[1.015]
                "
                sizes="(max-width: 1200px) 100vw, 1152px"
              />

              {/* OMBRE DOUCE */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-24
                  bg-gradient-to-t
                  from-black/35
                  to-transparent
                "
              />

              {/* =============================================
                  NAVIGATION GALERIE
              ============================================== */}
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={
                      previousImage
                    }
                    aria-label={
                      t.previousImage
                    }
                    className="
                      absolute
                      start-2
                      top-1/2
                      z-10
                      inline-flex
                      h-9
                      w-9
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-black/45
                      text-lg
                      text-white
                      shadow-xl
                      backdrop-blur-xl
                      transition-all
                      duration-200

                      hover:scale-105
                      hover:bg-black/65

                      sm:start-4
                      sm:h-11
                      sm:w-11
                    "
                  >
                    {isRTL
                      ? "→"
                      : "←"}
                  </button>

                  <button
                    type="button"
                    onClick={
                      nextImage
                    }
                    aria-label={
                      t.nextImage
                    }
                    className="
                      absolute
                      end-2
                      top-1/2
                      z-10
                      inline-flex
                      h-9
                      w-9
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-black/45
                      text-lg
                      text-white
                      shadow-xl
                      backdrop-blur-xl
                      transition-all
                      duration-200

                      hover:scale-105
                      hover:bg-black/65

                      sm:end-4
                      sm:h-11
                      sm:w-11
                    "
                  >
                    {isRTL
                      ? "←"
                      : "→"}
                  </button>
                </>
              )}

              {/* =============================================
                  LÉGENDE ACTIVE
              ============================================== */}
              <div
                className="
                  absolute
                  inset-x-4
                  bottom-4
                  z-10
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >
                <div
                  className="
                    max-w-[80%]
                    rounded-xl
                    border
                    border-white/10
                    bg-black/45
                    px-4
                    py-2.5
                    backdrop-blur-xl
                  "
                >
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {
                      activeImageLabel
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MINIATURES
          ================================================== */}
          {gallery.length > 1 && (
            <div
              className="
                mt-4
                grid
                grid-cols-2
                gap-2.5

                sm:grid-cols-3
                sm:gap-3

                lg:grid-cols-5
              "
            >
              {gallery.map(
                (item, index) => {
                  const isActive =
                    activeIndex ===
                    index;

                  const itemLabel =
                    item.label?.[
                      language
                    ] ||
                    item.label?.[
                      fallbackLanguage
                    ] ||
                    projectTitle;

                  return (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() =>
                        setActiveIndex(
                          index
                        )
                      }
                      aria-pressed={
                        isActive
                      }
                      aria-label={`${t.imageSelector}: ${itemLabel}`}
                      className={`
                        group/thumb
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        text-start
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "border-primary/70 bg-primary/[0.045] shadow-lg shadow-primary/5"
                            : "border-border/60 bg-surface/30 hover:-translate-y-1 hover:border-primary/35"
                        }
                      `}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-surface-elevated">
                        <Image
                          src={
                            item.src
                          }
                          alt={
                            itemLabel
                          }
                          fill
                          className={`
                            object-cover
                            object-center
                            transition-all
                            duration-500

                            ${
                              isActive
                                ? "scale-[1.02]"
                                : "opacity-75 group-hover/thumb:scale-[1.03] group-hover/thumb:opacity-100"
                            }
                          `}
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />

                        <div
                          aria-hidden="true"
                          className={`
                            absolute
                            inset-0
                            transition-colors
                            duration-300

                            ${
                              isActive
                                ? "bg-primary/[0.02]"
                                : "bg-background/10"
                            }
                          `}
                        />
                      </div>

                      <div className="p-2.5 sm:p-3">
                        <div className="flex items-start gap-2.5">
                          <span
                            dir="ltr"
                            className={`
                              shrink-0
                              text-[10px]
                              font-bold
                              tracking-[0.12em]

                              ${
                                isActive
                                  ? "text-primary"
                                  : "text-muted/70"
                              }
                            `}
                          >
                            {formatNumber(
                              index + 1
                            )}
                          </span>

                          <p
                            className={`
                              line-clamp-2
                              text-xs
                              font-semibold
                              leading-5

                              ${
                                isActive
                                  ? "text-foreground"
                                  : "text-muted"
                              }
                            `}
                          >
                            {
                              itemLabel
                            }
                          </p>
                        </div>
                      </div>

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            inset-x-4
                            bottom-0
                            h-px
                            bg-primary
                          "
                        />
                      )}
                    </button>
                  );
                }
              )}
            </div>
          )}
        </div>
      )}

      {/* =====================================================
          CONTENU DU CASE STUDY
      ====================================================== */}
      <div
        className={`
          relative
          p-5

          sm:p-9

          lg:p-10

          ${
            activeImage
              ? "border-t border-border/60"
              : ""
          }
        `}
      >
        {/* =================================================
            INTRODUCTION PROJET
        ================================================== */}
        <div
          className="
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          <div className="max-w-4xl">
            {projectType && (
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-primary
                "
              >
                {projectType}
              </p>
            )}

            {projectTitle && (
              <h3
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                  tracking-[-0.035em]
                  text-foreground

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                {projectTitle}
              </h3>
            )}

            {projectDescription && (
              <p
                className="
                  mt-5
                  max-w-3xl
                  text-base
                  leading-8
                  text-muted

                  sm:text-lg
                "
              >
                {
                  projectDescription
                }
              </p>
            )}
          </div>

          {projectStatus && (
            <span
              className="
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-warning/25
                bg-warning/[0.05]
                px-4
                py-2.5
                text-sm
                font-semibold
                text-foreground
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-warning
                  shadow-[0_0_14px_var(--warning)]
                "
              />

              {projectStatus}
            </span>
          )}
        </div>

        {/* =================================================
            PROBLÈME + SOLUTION
        ================================================== */}
        {(projectProblem ||
          projectSolution) && (
          <div
            className="
              mt-9
              grid
              gap-4

              sm:mt-12
              sm:gap-5

              md:grid-cols-2
            "
          >
            {projectProblem && (
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border/65
                  bg-surface/30
                  p-6
                  backdrop-blur-md

                  sm:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-primary/[0.05]
                    blur-2xl
                  "
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border/70
                        bg-background/45
                        text-xs
                        font-bold
                        text-primary
                      "
                    >
                      01
                    </span>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-primary
                      "
                    >
                      {t.problem}
                    </p>
                  </div>

                  <p className="mt-5 leading-7 text-muted">
                    {
                      projectProblem
                    }
                  </p>
                </div>
              </div>
            )}

            {projectSolution && (
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-primary/20
                  bg-primary/[0.025]
                  p-6
                  backdrop-blur-md

                  sm:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-primary/[0.08]
                    blur-2xl
                  "
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-primary/25
                        bg-primary/[0.055]
                        text-xs
                        font-bold
                        text-primary
                      "
                    >
                      02
                    </span>

                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-primary
                      "
                    >
                      {t.solution}
                    </p>
                  </div>

                  <p className="mt-5 leading-7 text-muted">
                    {
                      projectSolution
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =================================================
            FONCTIONNALITÉS + TECHNOLOGIES
        ================================================== */}
        {(projectHighlights.length >
          0 ||
          technologies.length >
            0) && (
          <div
            className="
              mt-9
              grid
              gap-8

              sm:mt-12
              sm:gap-10

              lg:grid-cols-[1.45fr_0.55fr]
            "
          >
            {projectHighlights.length >
              0 && (
              <div>
                <h4
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-foreground
                  "
                >
                  {t.features}
                </h4>

                <ul
                  className="
                    mt-6
                    grid
                    gap-3

                    sm:grid-cols-2
                  "
                >
                  {projectHighlights.map(
                    (feature) => (
                      <li
                        key={
                          feature
                        }
                        className="
                          flex
                          items-start
                          gap-3
                          rounded-xl
                          border
                          border-border/55
                          bg-surface/25
                          px-4
                          py-3.5
                          text-sm
                          leading-6
                          text-muted
                          transition-colors
                          duration-200

                          hover:border-primary/20
                          hover:text-foreground
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            mt-[0.45rem]
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-primary
                            shadow-[0_0_10px_var(--primary)]
                          "
                        />

                        <span>
                          {
                            feature
                          }
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {technologies.length >
              0 && (
              <div>
                <h4
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-foreground
                  "
                >
                  {
                    t.technologies
                  }
                </h4>

                <div
                  dir="ltr"
                  className={`
                    mt-6
                    flex
                    flex-wrap
                    gap-2.5

                    ${
                      isRTL
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
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
                          rounded-xl
                          border
                          border-primary/20
                          bg-primary/[0.035]
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-foreground
                        "
                      >
                        {
                          technology
                        }
                      </span>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* =================================================
            ÉTAT DU PROJET
        ================================================== */}
        {projectResult && (
          <div
            className="
              mt-9
              border-t
              border-border/60
              pt-7

              sm:mt-12
              sm:pt-8
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              {t.result}
            </p>

            <p
              className="
                mt-4
                max-w-4xl
                leading-7
                text-muted
              "
            >
              {projectResult}
            </p>
          </div>
        )}

        {/* =================================================
            LIENS
        ================================================== */}
        {(project.liveUrl ||
          project.githubUrl) && (
          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {project.liveUrl && (
              <a
                href={
                  project.liveUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  bg-primary
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-background
                  shadow-lg
                  shadow-primary/10
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-primary-hover
                "
              >
                {t.live} ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={
                  project.githubUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-xl
                  border
                  border-border/70
                  bg-surface/30
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-foreground
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-primary/35
                  hover:bg-surface/55
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

export default function Projects() {
  const {
    language,
    isRTL,
  } = useLanguage();

  const t =
    content[language] ||
    content.fr;

  if (
    !portfolio.projects.length
  ) {
    return null;
  }

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        border-t
        border-border/60
        bg-background/30
        px-4
        py-20
        backdrop-blur-[1px]

        sm:px-6

        lg:py-24
      "
    >
      {/* =====================================================
          AMBIANCE DE SECTION
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            -left-44
            top-32
            h-[32rem]
            w-[32rem]
            rounded-full
            opacity-[0.04]
            blur-[120px]

            dark:opacity-[0.08]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        <div
          className="
            absolute
            -right-48
            bottom-[-8rem]
            h-[34rem]
            w-[34rem]
            rounded-full
            opacity-[0.035]
            blur-[130px]

            dark:opacity-[0.07]
          "
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* =====================================================
            EN-TÊTE
        ====================================================== */}
        <div>
          <div className="text-center">
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
            PROJETS
        ====================================================== */}
        <div
          className="
            mt-10
            space-y-10

            sm:mt-12
            sm:space-y-12

            lg:mt-14
            lg:space-y-14
          "
        >
          {portfolio.projects.map(
            (project) => (
              <ProjectCard
                key={project.id}
                project={
                  project
                }
                language={
                  language
                }
                t={t}
                isRTL={
                  isRTL
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}