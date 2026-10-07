"use client";

import { useRef } from "react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

const content = {
  fr: {
    greeting: "Bonjour, je suis",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaCvOpen: "Voir mon CV",
    ctaCvDownload: "Télécharger mon CV",
    stack: "Stack principale",
    location: "Localisation",
    orbitLabel: "DÉVELOPPEUSE WEB FULL-STACK",
  },

  en: {
    greeting: "Hi, I'm",
    ctaProjects: "View my projects",
    ctaContact: "Get in touch",
    ctaCvOpen: "View my CV (FR)",
    ctaCvDownload: "Download my CV (FR)",
    stack: "Core stack",
    location: "Location",
    orbitLabel: "FULL-STACK WEB DEVELOPER",
  },

  "pt-BR": {
    greeting: "Olá, eu sou",
    ctaProjects: "Ver meus projetos",
    ctaContact: "Entrar em contato",
    ctaCvOpen: "Ver meu CV (FR)",
    ctaCvDownload: "Baixar meu CV (FR)",
    stack: "Stack principal",
    location: "Localização",
    orbitLabel: "DESENVOLVEDORA WEB FULL-STACK",
  },

  ja: {
    greeting: "こんにちは、",
    ctaProjects: "プロジェクトを見る",
    ctaContact: "お問い合わせ",
    ctaCvOpen: "履歴書を見る（フランス語）",
    ctaCvDownload: "履歴書をダウンロード（フランス語）",
    stack: "主要スタック",
    location: "所在地",
    orbitLabel: "フルスタックWEB開発者",
  },

  ar: {
    greeting: "مرحبًا، أنا",
    ctaProjects: "عرض مشاريعي",
    ctaContact: "تواصل معي",
    ctaCvOpen: "عرض سيرتي الذاتية (بالفرنسية)",
    ctaCvDownload: "تحميل سيرتي الذاتية (بالفرنسية)",
    stack: "التقنيات الأساسية",
    location: "الموقع",
    orbitLabel: "مطورة ويب متكاملة",
  },
};

export default function Hero() {
  const { language, isRTL } =
    useLanguage();

  const sceneRef = useRef(null);
  const photoRef = useRef(null);
  const rearRingRef = useRef(null);
  const glowRef = useRef(null);

  const t =
    content[language] ||
    content.fr;

  const cvLink =
    portfolio.links.cv[language] ||
    portfolio.links.cv.fr;

  const cvDownloadName =
    portfolio.links.cv.downloadName;

  const role =
    portfolio.identity.role[
      language
    ] ||
    portfolio.identity.role.fr;

  const location =
    portfolio.identity.location[
      language
    ] ||
    portfolio.identity.location.fr;

  const availability =
    portfolio.availability[
      language
    ] ||
    portfolio.availability.fr;

  const valueProposition =
    portfolio.hero
      ?.valueProposition?.[
      language
    ] ||
    portfolio.hero
      ?.valueProposition?.fr ||
    "";

  const introduction =
    portfolio.hero
      ?.introduction?.[
      language
    ] ||
    portfolio.hero?.introduction
      ?.fr ||
    "";

  const orbitText =
    `${t.orbitLabel} • ${t.orbitLabel} •`;

  const handlePointerMove = (
    event
  ) => {
    if (
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reduceMotion) {
      return;
    }

    const scene =
      sceneRef.current;

    if (!scene) {
      return;
    }

    const rect =
      scene.getBoundingClientRect();

    const x =
      (event.clientX -
        rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY -
        rect.top) /
        rect.height -
      0.5;

    const rotateY = x * 9;
    const rotateX = y * -7;

    scene.style.transform = `
      perspective(1100px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

    if (photoRef.current) {
      photoRef.current.style.transform = `
        translate3d(
          ${x * 14}px,
          ${y * 11}px,
          60px
        )
      `;
    }

    if (
      rearRingRef.current
    ) {
      rearRingRef.current.style.transform = `
        translate3d(
          ${x * -12}px,
          ${y * -10}px,
          -35px
        )
      `;
    }

    if (glowRef.current) {
      glowRef.current.style.transform = `
        translate3d(
          ${x * 20}px,
          ${y * 16}px,
          -55px
        )
      `;
    }
  };

  const resetScene = () => {
    if (sceneRef.current) {
      sceneRef.current.style.transform =
        "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    }

    if (photoRef.current) {
      photoRef.current.style.transform =
        "translate3d(0, 0, 60px)";
    }

    if (
      rearRingRef.current
    ) {
      rearRingRef.current.style.transform =
        "translate3d(0, 0, -35px)";
    }

    if (glowRef.current) {
      glowRef.current.style.transform =
        "translate3d(0, 0, -55px)";
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        border-b
        border-border/60
        bg-background/35
        px-4
        backdrop-blur-[1px]

        sm:px-6
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-8
          py-12

          sm:py-14

          lg:min-h-[calc(100vh-73px)]
          lg:grid-cols-[1.2fr_0.8fr]
          lg:gap-8
          lg:py-16
        "
      >
        {/* =====================================================
            GAUCHE
        ====================================================== */}
        <div className="max-w-[760px]">
          <p
            className="
              text-sm
              font-semibold
              tracking-wide
              text-primary
            "
          >
            {t.greeting}
          </p>

          {/* NOM */}
          <h1
            dir="ltr"
            className={`
              mt-3
              text-[2.25rem]
              font-bold
              leading-[1.02]
              tracking-[-0.045em]
              text-foreground

              sm:text-[3.3rem]
              md:text-[3.55rem]

              lg:whitespace-nowrap
              lg:text-[3.25rem]

              xl:text-[3.55rem]

              ${
                isRTL
                  ? "text-right"
                  : "text-left"
              }
            `}
          >
            {
              portfolio.identity
                .name
            }
          </h1>

          {/* RÔLE */}
          <p
            className="
              mt-4
              text-lg
              font-semibold
              text-primary

              sm:mt-5
              sm:text-2xl
            "
          >
            {role}
          </p>

          {valueProposition && (
            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-foreground

                sm:mt-6
                sm:text-lg
                sm:leading-8
              "
            >
              {valueProposition}
            </p>
          )}

          {introduction && (
            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-muted

                sm:mt-4
                sm:text-base
                sm:leading-7
              "
            >
              {introduction}
            </p>
          )}

          {/* DISPONIBILITÉ */}
          {availability && (
            <div
              className="
                mt-6
                sm:mt-7
              "
            >
              <span
                className="
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-border/75
                  bg-surface/55
                  px-4
                  py-2
                  text-start
                  text-sm
                  font-medium
                  text-muted
                  shadow-sm
                  backdrop-blur-xl
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-2.5
                    w-2.5
                    shrink-0
                    rounded-full
                    bg-success
                    shadow-[0_0_14px_var(--success)]
                  "
                />

                {availability}
              </span>
            </div>
          )}

          {/* ACTIONS */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:mt-9
              sm:flex-row
              sm:flex-wrap
              sm:items-center
            "
          >
            <a
              href="#projects"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-primary
                px-6
                py-3
                text-sm
                font-semibold
                text-background
                shadow-lg
                shadow-primary/10
                transition-all
                duration-200

                hover:-translate-y-1
                hover:bg-primary-hover

                sm:w-auto
              "
            >
              {t.ctaProjects}
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-border/80
                bg-background/35
                px-6
                py-3
                text-sm
                font-semibold
                text-foreground
                backdrop-blur-xl
                transition-all
                duration-200

                hover:-translate-y-1
                hover:border-primary/40
                hover:bg-surface/55

                sm:w-auto
              "
            >
              {t.ctaContact}
            </a>

            {cvLink && (
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border/80
                  bg-background/35
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-foreground
                  backdrop-blur-xl
                  transition-all
                  duration-200

                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:bg-surface/55

                  sm:w-auto
                "
              >
                {t.ctaCvOpen}
              </a>
            )}
          </div>

          {/* TÉLÉCHARGEMENT CV */}
          {cvLink && (
            <div className="mt-4">
              <a
                href={cvLink}
                download={
                  cvDownloadName
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-primary
                  transition-colors

                  hover:text-primary-hover
                "
              >
                <span
                  aria-hidden="true"
                >
                  ↓
                </span>

                {
                  t.ctaCvDownload
                }
              </a>
            </div>
          )}

          {/* INFOS */}
          <div
            className="
              mt-8
              grid
              max-w-2xl
              grid-cols-1
              gap-5
              border-t
              border-border/50
              pt-6

              sm:mt-9
              sm:grid-cols-2
              sm:gap-6
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                {t.stack}
              </p>

              <p
                dir="ltr"
                className="
                  mt-2
                  text-base
                  font-semibold
                  text-foreground
                "
              >
                React · Next.js ·
                Laravel
              </p>
            </div>

            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                {t.location}
              </p>

              <p
                className="
                  mt-2
                  text-base
                  font-semibold
                  text-foreground
                "
              >
                {location}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            DROITE — COMPOSITION CIRCULAIRE 3D

            Desktop uniquement :
            la landing contient déjà le portrait.
            Cela évite de surcharger le Hero mobile.
        ====================================================== */}
        <div
          className="
            hidden
            items-center
            justify-center

            lg:flex
            lg:justify-end
          "
        >
          <div
            ref={sceneRef}
            onPointerMove={
              handlePointerMove
            }
            onPointerLeave={
              resetScene
            }
            onPointerCancel={
              resetScene
            }
            className="
              relative
              flex
              h-[24rem]
              w-[24rem]
              items-center
              justify-center
              transition-transform
              duration-300
              ease-out
            "
            style={{
              perspective:
                "1100px",

              transformStyle:
                "preserve-3d",

              transform:
                "perspective(1100px) rotateX(0deg) rotateY(0deg)",

              willChange:
                "transform",
            }}
          >
            {/* HALO */}
            <div
              ref={glowRef}
              aria-hidden="true"
              className="
                absolute
                inset-[16%]
                rounded-full
                bg-primary/15
                blur-[75px]
                transition-transform
                duration-300
              "
              style={{
                transform:
                  "translate3d(0, 0, -55px)",
              }}
            />

            {/* ANNEAU PROFOND */}
            <div
              ref={rearRingRef}
              aria-hidden="true"
              className="
                absolute
                inset-[5%]
                rounded-full
                border
                border-primary/15
                transition-transform
                duration-300
              "
              style={{
                transform:
                  "translate3d(0, 0, -35px)",
              }}
            />

            {/* ANNEAU SECONDAIRE */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-[10%]
                rounded-full
                border
                border-secondary/10
              "
              style={{
                transform:
                  "translateZ(-10px)",
              }}
            />

            {/* TEXTE ORBITAL */}
            <svg
              viewBox="0 0 500 500"
              className="
                absolute
                inset-0
                h-full
                w-full
                animate-orbit-slow
                text-primary
              "
              aria-hidden="true"
            >
              <defs>
                <path
                  id="hero-orbit-path"
                  d="
                    M 250 250
                    m -205 0
                    a 205 205 0 1 1 410 0
                    a 205 205 0 1 1 -410 0
                  "
                />
              </defs>

              <text
                fill="currentColor"
                fontSize="18"
                fontWeight="700"
                letterSpacing="4"
              >
                <textPath
                  href="#hero-orbit-path"
                  startOffset="0%"
                  textLength="1180"
                  lengthAdjust="spacing"
                >
                  {orbitText}
                </textPath>
              </text>
            </svg>

            {/* PHOTO */}
            <div
              ref={photoRef}
              className="
                relative
                z-20
                h-[15rem]
                w-[15rem]
                transition-transform
                duration-300
              "
              style={{
                transform:
                  "translate3d(0, 0, 60px)",

                transformStyle:
                  "preserve-3d",
              }}
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-3
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/[0.025]
                  shadow-[0_0_60px_rgba(96,165,250,0.14)]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-full
                  border
                  border-white/10
                  bg-surface
                  shadow-2xl
                  shadow-black/35
                  animate-float-slow
                "
              >
                <Image
                  src="/image/claire-portfolio.jpeg"
                  alt={
                    portfolio
                      .identity.name
                  }
                  fill
                  priority
                  sizes="240px"
                  className="
                    object-cover
                    object-center
                  "
                />
              </div>
            </div>

            {/* ACCENTS */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-[7%]
                top-[25%]
                h-8
                w-8
                rounded-full
                border
                border-primary/25
                bg-primary/[0.025]
                animate-float-medium
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                right-[5%]
                top-[35%]
                h-9
                w-9
                rotate-45
                rounded-xl
                border
                border-primary/20
                bg-primary/[0.02]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[17%]
                left-[16%]
                h-2.5
                w-2.5
                rounded-full
                bg-primary
                shadow-[0_0_24px_var(--primary)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}