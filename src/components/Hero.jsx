
"use client";

import { useRef } from "react";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

/* =========================================================
   LYDIA PORTFOLIO — CYBER VIOLET
   HERO — FINAL LAYOUT ADJUSTMENTS

   - Texte mieux espacé
   - Portrait rapproché de la colonne de gauche
   - Taille du portrait inchangée
   - Effets 3D et animations conservés
   - Boutons visibles plus rapidement
   - Informations secondaires simplifiées
   - Cinq langues et RTL
========================================================= */

const content = {
  fr: {
    eyebrow: "DÉVELOPPEUSE WEB FULL-STACK",
    greeting: "Bonjour, je suis",
    headline:
      "Je conçois des applications web modernes, fonctionnelles et intuitives.",
    description:
      "Du front-end au back-end, j'associe développement web et sens du design pour créer des expériences numériques adaptées aux besoins des utilisateurs.",
    projects: "Voir mes projets",
    downloadCV: "Télécharger mon CV",
    viewCV: "Consulter le CV",
    linkedin: "Mon LinkedIn",
    location: "LOCALISATION",
    orbit: "DÉVELOPPEUSE WEB FULL-STACK",
  },

  en: {
    eyebrow: "FULL-STACK WEB DEVELOPER",
    greeting: "Hi, I'm",
    headline:
      "I build modern, functional and intuitive web applications.",
    description:
      "From front-end to back-end, I combine web development and design thinking to create digital experiences tailored to users' needs.",
    projects: "View my projects",
    downloadCV: "Download my CV (FR)",
    viewCV: "View CV (FR)",
    linkedin: "My LinkedIn",
    location: "LOCATION",
    orbit: "FULL-STACK WEB DEVELOPER",
  },

  "pt-BR": {
    eyebrow: "DESENVOLVEDORA WEB FULL-STACK",
    greeting: "Olá, eu sou",
    headline:
      "Desenvolvo aplicações web modernas, funcionais e intuitivas.",
    description:
      "Do front-end ao back-end, combino desenvolvimento web e design para criar experiências digitais adaptadas às necessidades dos usuários.",
    projects: "Ver meus projetos",
    downloadCV: "Baixar meu CV (FR)",
    viewCV: "Visualizar CV (FR)",
    linkedin: "Meu LinkedIn",
    location: "LOCALIZAÇÃO",
    orbit: "DESENVOLVEDORA WEB FULL-STACK",
  },

  ja: {
    eyebrow: "フルスタックWEB開発者",
    greeting: "こんにちは、",
    headline:
      "モダンで使いやすく、機能的なWebアプリケーションを開発しています。",
    description:
      "フロントエンドからバックエンドまで、Web開発とデザインの視点を組み合わせ、ユーザーのニーズに合ったデジタル体験を提供します。",
    projects: "プロジェクトを見る",
    downloadCV: "履歴書をダウンロード（仏語）",
    viewCV: "履歴書を見る（仏語）",
    linkedin: "LinkedIn",
    location: "所在地",
    orbit: "フルスタックWEB開発者",
  },

  ar: {
    eyebrow: "مطوّرة ويب متكاملة",
    greeting: "مرحبًا، أنا",
    headline:
      "أطوّر تطبيقات ويب حديثة وعملية وسهلة الاستخدام.",
    description:
      "من الواجهة الأمامية إلى الخلفية، أجمع بين تطوير الويب وحس التصميم لإنشاء تجارب رقمية تلبي احتياجات المستخدمين.",
    projects: "عرض مشاريعي",
    downloadCV: "تحميل السيرة الذاتية (بالفرنسية)",
    viewCV: "عرض السيرة الذاتية (بالفرنسية)",
    linkedin: "LinkedIn",
    location: "الموقع",
    orbit: "مطوّرة ويب متكاملة",
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

function ArrowIcon({ diagonal = false, isRTL = false }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : isRTL ? (
        <>
          <path d="M19 12H5" />
          <path d="m12 5-7 7 7 7" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      )}
    </svg>
  );
}

function DownloadIcon() {
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
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 17v3h14v-3" />
    </svg>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const { language, isRTL } = useLanguage();

  const sceneRef = useRef(null);
  const photoRef = useRef(null);
  const rearRingRef = useRef(null);
  const glowRef = useRef(null);

  const t = content[language] || content.fr;

  const cvData = portfolio.links?.cv;

  const cvLink =
    typeof cvData === "string"
      ? cvData
      : cvData?.[language] || cvData?.fr || "";

  const cvDownloadName =
    typeof cvData === "object" && cvData?.downloadName
      ? cvData.downloadName
      : "CV_Abran_Claire_Lydia_BILE.pdf";

  const location = translate(
    portfolio.identity?.location,
    language
  );

  const availability = translate(
    portfolio.availability,
    language
  );

  const orbitText = `${t.orbit} • ${t.orbit} •`;

  /* =======================================================
     MOUVEMENT 3D DU PORTRAIT
  ======================================================== */

  function handlePointerMove(event) {
    if (event.pointerType !== "mouse") return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const scene = sceneRef.current;
    if (!scene) return;

    const rect = scene.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    scene.style.transform = `
      perspective(1100px)
      rotateX(${y * -6}deg)
      rotateY(${x * 8}deg)
    `;

    if (photoRef.current) {
      photoRef.current.style.transform = `
        translate3d(${x * 12}px, ${y * 10}px, 60px)
      `;
    }

    if (rearRingRef.current) {
      rearRingRef.current.style.transform = `
        translate3d(${x * -10}px, ${y * -8}px, -35px)
      `;
    }

    if (glowRef.current) {
      glowRef.current.style.transform = `
        translate3d(${x * 16}px, ${y * 14}px, -55px)
      `;
    }
  }

  function resetScene() {
    if (sceneRef.current) {
      sceneRef.current.style.transform =
        "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    }

    if (photoRef.current) {
      photoRef.current.style.transform =
        "translate3d(0, 0, 60px)";
    }

    if (rearRingRef.current) {
      rearRingRef.current.style.transform =
        "translate3d(0, 0, -35px)";
    }

    if (glowRef.current) {
      glowRef.current.style.transform =
        "translate3d(0, 0, -55px)";
    }
  }

  return (
    <section
      id="home"
      className="
        relative isolate
        border-b border-border/60
        bg-background/35
        px-4 sm:px-6
      "
    >
      {/* HALO DISCRET DU HERO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 top-10
          h-[28rem] w-[28rem]
          rounded-full
          bg-primary/[0.055]
          blur-[110px]
        "
      />

      {/* ===================================================
          GRILLE PRINCIPALE

          Deux colonnes sur desktop.
          Espacements harmonisés pour garder
          les actions accessibles.
      ==================================================== */}

      <div
        className="
          relative z-10 mx-auto
          grid max-w-6xl
          items-center gap-10

          py-12 sm:py-14

          lg:min-h-[calc(100svh-73px)]
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-6
          lg:py-8
        "
      >
        {/* =================================================
            COLONNE GAUCHE — PRÉSENTATION
        ================================================== */}

        <div
          className={`
            min-w-0 max-w-[760px]
            ${isRTL ? "text-right" : "text-left"}
          `}
        >
          {/* ÉTIQUETTE PROFESSIONNELLE */}
          <div className="inline-flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="
                h-2 w-2 shrink-0
                rounded-full bg-primary
                shadow-[0_0_15px_var(--primary)]
              "
            />

            <span
              className="
                text-[11px] font-bold
                uppercase tracking-[0.18em]
                text-primary sm:text-xs
              "
            >
              {t.eyebrow}
            </span>
          </div>

          {/* SALUTATION */}
          <p className="mt-3 text-sm font-medium text-muted">
            {t.greeting}
          </p>

          {/* NOM */}
          <h1
            dir="ltr"
            className={`
              mt-1.5
              max-w-[750px]
              text-[clamp(2.3rem,4.7vw,4rem)]
              font-extrabold
              leading-[1.06]
              tracking-[-0.045em]
              text-foreground

              ${isRTL ? "text-right" : "text-left"}
            `}
          >
            BILE Abran
            <span className="block">
              Claire Lydia
              <span className="text-primary">.</span>
            </span>
          </h1>

          {/* TECHNOLOGIES PRINCIPALES */}
          <div
            dir="ltr"
            className={`
              mt-5 flex flex-wrap gap-2

              ${
                isRTL
                  ? "justify-end"
                  : "justify-start"
              }
            `}
          >
            {["React", "Next.js", "Laravel"].map(
              (technology) => (
                <span
                  key={technology}
                  className="
                    rounded-lg
                    border border-primary/25
                    bg-primary/[0.065]
                    px-3 py-1.5
                    text-xs font-semibold
                    text-primary
                  "
                >
                  {technology}
                </span>
              )
            )}
          </div>

          {/* PROPOSITION DE VALEUR */}
          <h2
            className="
              mt-5 max-w-2xl
              text-xl font-semibold
              leading-snug
              tracking-[-0.025em]
              text-foreground

              sm:text-2xl
              lg:text-[1.55rem]
            "
          >
            {t.headline}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3 max-w-xl
              text-sm leading-6
              text-muted

              sm:text-[0.9375rem]
              sm:leading-7
            "
          >
            {t.description}
          </p>

          {/* DISPONIBILITÉ */}
          {availability && (
            <div className="mt-5">
              <span
                className="
                  inline-flex max-w-full
                  items-center gap-2.5
                  rounded-full
                  border border-primary/25
                  bg-surface/50
                  px-3.5 py-2
                  text-xs font-medium
                  leading-5 text-muted
                  sm:text-sm
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-2 w-2 shrink-0
                    rounded-full bg-success
                  "
                />

                {availability}
              </span>
            </div>
          )}

          {/* =================================================
              ACTIONS PRINCIPALES
          ================================================== */}

          <div
            className="
              mt-5 flex flex-col gap-3
              sm:flex-row sm:flex-wrap
            "
          >
            <a
              href="#projects"
              className="
                inline-flex min-h-11
                items-center justify-center gap-2.5
                rounded-xl
                bg-primary px-5 py-3
                text-sm font-bold text-white
                shadow-lg shadow-primary/15

                transition-all duration-200

                hover:-translate-y-0.5
                hover:bg-primary-hover
                hover:shadow-primary/25

                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-primary
              "
            >
              {t.projects}
              <ArrowIcon isRTL={isRTL} />
            </a>

            {cvLink && (
              <a
                href={cvLink}
                download={cvDownloadName}
                className="
                  inline-flex min-h-11
                  items-center justify-center gap-2.5
                  rounded-xl
                  border border-primary/30
                  bg-surface/55
                  px-5 py-3
                  text-sm font-semibold
                  text-foreground

                  transition-all duration-200

                  hover:-translate-y-0.5
                  hover:border-primary/55
                  hover:bg-primary/[0.08]
                "
              >
                <DownloadIcon />
                {t.downloadCV}
              </a>
            )}
          </div>

          {/* LIENS SECONDAIRES */}
          <div
            className="
              mt-3 flex flex-wrap
              items-center gap-x-6 gap-y-2
            "
          >
            {cvLink && (
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-xs font-medium
                  text-muted
                  underline underline-offset-4
                  decoration-border

                  transition-colors
                  hover:text-primary

                  sm:text-sm
                "
              >
                {t.viewCV}
              </a>
            )}

            {portfolio.links?.linkedin && (
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5
                  text-xs font-medium
                  text-primary

                  transition-colors
                  hover:text-primary-hover

                  sm:text-sm
                "
              >
                {t.linkedin}
                <ArrowIcon diagonal />
              </a>
            )}
          </div>

          {/* =================================================
              INFORMATION COMPLÉMENTAIRE

              La répétition de React, Next.js et
              Laravel a été supprimée.
          ================================================== */}

          {location && (
            <div
              className="
                mt-4
                border-t border-border/50
                pt-3
              "
            >
              <p
                className="
                  flex flex-wrap
                  items-center gap-x-2 gap-y-1
                  text-xs text-muted
                "
              >
                <span
                  className="
                    font-bold uppercase
                    tracking-[0.1em]
                    text-foreground
                  "
                >
                  {t.location}
                </span>

                <span
                  aria-hidden="true"
                  className="text-primary"
                >
                  •
                </span>

                <span>{location}</span>
              </p>
            </div>
          )}
        </div>

        {/* =================================================
            COLONNE DROITE — PORTRAIT 3D

            Taille inchangée : 24rem.
            Décalage de 24px vers la colonne texte.
        ================================================== */}

        <div
          className={`
            hidden items-center justify-center
            lg:flex

            ${
              isRTL
                ? "lg:justify-start"
                : "lg:justify-end"
            }
          `}
        >
          {/* Conteneur de positionnement :
              déplacer celui-ci ne perturbe pas
              les transformations 3D de la scène. */}
          <div
            className={
              isRTL
                ? "relative lg:translate-x-[24px]"
                : "relative lg:-translate-x-[24px]"
            }
          >
            <div
              ref={sceneRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={resetScene}
              onPointerCancel={resetScene}
              className="
                relative flex
                h-[24rem] w-[24rem]
                items-center justify-center

                transition-transform
                duration-300 ease-out
              "
              style={{
                perspective: "1100px",
                transformStyle: "preserve-3d",
                transform:
                  "perspective(1100px) rotateX(0deg) rotateY(0deg)",
              }}
            >
              {/* HALO ARRIÈRE */}
              <div
                ref={glowRef}
                aria-hidden="true"
                className="
                  absolute inset-[12%]
                  rounded-full
                  bg-primary/20
                  blur-[80px]

                  transition-transform duration-300
                "
                style={{
                  transform:
                    "translate3d(0, 0, -55px)",
                }}
              />

              {/* ANNEAU ARRIÈRE */}
              <div
                ref={rearRingRef}
                aria-hidden="true"
                className="
                  absolute inset-[5%]
                  rounded-full
                  border border-primary/20

                  transition-transform duration-300
                "
                style={{
                  transform:
                    "translate3d(0, 0, -35px)",
                }}
              />

              {/* ANNEAU INTÉRIEUR */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-[10%]
                  rounded-full
                  border border-secondary/15
                "
                style={{
                  transform: "translateZ(-10px)",
                }}
              />

              {/* TEXTE ORBITAL */}
              <svg
                viewBox="0 0 500 500"
                className="
                  pointer-events-none
                  absolute inset-0
                  h-full w-full
                  animate-orbit-slow
                  overflow-visible
                  text-primary
                "
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="hero-cyber-violet-orbit"
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
                    href="#hero-cyber-violet-orbit"
                    startOffset="0%"
                    textLength="1180"
                    lengthAdjust="spacing"
                  >
                    {orbitText}
                  </textPath>
                </text>
              </svg>

              {/* PORTRAIT */}
              <div
                ref={photoRef}
                className="
                  relative z-20
                  h-[15rem] w-[15rem]

                  transition-transform
                  duration-300
                "
                style={{
                  transform:
                    "translate3d(0, 0, 60px)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* CONTOUR LUMINEUX */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -inset-3
                    rounded-full
                    border border-primary/25
                    bg-primary/[0.035]
                    shadow-[0_0_65px_var(--glow-primary)]
                  "
                />

                {/* IMAGE */}
                <div
                  className="
                    absolute inset-0
                    overflow-hidden rounded-full
                    border border-border/40
                    bg-surface

                    shadow-2xl
                    shadow-black/25

                    animate-float-slow
                  "
                >
                  <Image
                    src="/image/claire-portfolio.jpeg"
                    alt={portfolio.identity.name}
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

              {/* ÉLÉMENTS DÉCORATIFS */}
              <div
                aria-hidden="true"
                className="
                  absolute left-[7%] top-[25%]
                  h-8 w-8
                  rounded-full

                  border border-primary/25
                  bg-primary/[0.035]

                  animate-float-medium
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute right-[5%] top-[35%]
                  h-9 w-9 rotate-45
                  rounded-xl

                  border border-primary/20
                  bg-primary/[0.025]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute bottom-[17%] left-[16%]
                  h-2.5 w-2.5
                  rounded-full bg-primary

                  shadow-[0_0_24px_var(--primary)]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
