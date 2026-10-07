"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";
import AmbientBackground from "@/components/effects/AmbientBackground";
import portfolio from "@/data/portfolio";

const content = {
  fr: {
    welcome: "Bienvenue.",
    instruction: "Cliquez sur l’image pour entrer.",
    enter: "Entrer dans le portfolio",
    orbitTop: "DÉVELOPPEUSE WEB",
    orbitBottom: "FULL-STACK",
  },

  en: {
    welcome: "Welcome.",
    instruction: "Click on the image to enter.",
    enter: "Enter the portfolio",
    orbitTop: "FULL-STACK WEB",
    orbitBottom: "DEVELOPER",
  },

  "pt-BR": {
    welcome: "Bem-vindo(a).",
    instruction: "Clique na imagem para entrar.",
    enter: "Entrar no portfólio",
    orbitTop: "DESENVOLVEDORA WEB",
    orbitBottom: "FULL-STACK",
  },

  ja: {
    welcome: "ようこそ。",
    instruction: "画像をクリックして入ってください。",
    enter: "ポートフォリオに入る",
    orbitTop: "フルスタック",
    orbitBottom: "WEB開発者",
  },

  ar: {
    welcome: "مرحبًا بك.",
    instruction: "انقر على الصورة للدخول.",
    enter: "الدخول إلى معرض الأعمال",
    orbitTop: "مطورة ويب",
    orbitBottom: "متكاملة",
  },
};

export default function Home() {
  const { language } = useLanguage();

  const t =
    content[language] ||
    content.fr;

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-background
        px-6
        text-foreground
      "
    >
      {/* =====================================================
          FOND 3D GLOBAL
      ====================================================== */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0"
      >
        <AmbientBackground />
      </div>

      {/* =====================================================
          CONTENU
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* =================================================
            NOM
        ================================================== */}
        <p
          dir="ltr"
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.45em]
            text-primary
            sm:text-xs
          "
        >
          {portfolio.identity.name}
        </p>

        {/* =================================================
            ENTRÉE CLIQUABLE
        ================================================== */}
        <Link
          href="/portfolio"
          aria-label={t.enter}
          className="
            group
            relative
            mt-5
            block
            rounded-full
            focus-visible:outline-none
          "
        >
          <div
            className="
              perspective-scene
              relative
              flex
              h-[20rem]
              w-[20rem]
              items-center
              justify-center

              sm:h-[23rem]
              sm:w-[23rem]

              md:h-[25rem]
              md:w-[25rem]
            "
          >
            {/* =================================================
                HALO PROFOND
            ================================================== */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-[8%]
                rounded-full
                bg-primary/15
                blur-[65px]
                transition-all
                duration-500

                group-hover:scale-110
                group-hover:bg-primary/25
                group-hover:blur-[85px]
              "
            />

            {/* =================================================
                ANNEAUX
            ================================================== */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-[1%]
                rounded-full
                border
                border-primary/15
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-[6%]
                rounded-full
                border
                border-primary/10
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-[11%]
                rounded-full
                border
                border-secondary/10
              "
            />

            {/* =================================================
                TEXTE SUPÉRIEUR + INFÉRIEUR
            ================================================== */}
            <svg
              viewBox="0 0 500 500"
              className="
                pointer-events-none
                absolute
                inset-0
                z-40
                h-full
                w-full
                overflow-visible
                text-primary
              "
              aria-hidden="true"
            >
              <defs>
                {/* ARC SUPÉRIEUR */}
                <path
                  id="intro-top-arc"
                  d="
                    M 88 250
                    A 162 162
                    0 0 1
                    412 250
                  "
                />

                {/* ARC INFÉRIEUR — FULL-STACK DESCENDU */}
                <path
                  id="intro-bottom-arc"
                  d="
                    M 92 360
                    Q 250 510
                    408 360
                  "
                />
              </defs>

              {/* DÉVELOPPEUSE WEB */}
              <text
                fill="currentColor"
                fontSize="20"
                fontWeight="700"
                letterSpacing="6"
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(96,165,250,0.28))",
                }}
              >
                <textPath
                  href="#intro-top-arc"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {t.orbitTop}
                </textPath>
              </text>

              {/* FULL-STACK */}
              <text
                fill="currentColor"
                fontSize="18"
                fontWeight="700"
                letterSpacing="7"
                style={{
                  filter:
                    "drop-shadow(0 0 10px rgba(96,165,250,0.28))",
                }}
              >
                <textPath
                  href="#intro-bottom-arc"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {t.orbitBottom}
                </textPath>
              </text>
            </svg>

            {/* =================================================
                CERCLE BLEU / PHOTO
            ================================================== */}
            <div
              className="
                relative
                z-20
                h-[14.5rem]
                w-[14.5rem]
                rounded-full

                transition-all
                duration-500
                ease-out

                group-hover:-translate-y-1
                group-hover:scale-[1.045]

                sm:h-[16.2rem]
                sm:w-[16.2rem]

                md:h-[17rem]
                md:w-[17rem]
              "
              style={{
                transformStyle:
                  "preserve-3d",
              }}
            >
              {/* GLOW AUTOUR DU CERCLE */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -inset-4
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/[0.025]

                  shadow-[0_0_60px_rgba(96,165,250,0.14)]

                  transition-all
                  duration-500

                  group-hover:border-primary/40
                  group-hover:shadow-[0_0_100px_rgba(96,165,250,0.30)]
                "
              />

              {/* =================================================
                  FOND BLEU DU SITE
              ================================================== */}
              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-full
                  border
                  border-primary/30

                  shadow-[0_22px_70px_rgba(0,0,0,0.42)]
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at 50% 27%,
                      rgba(59, 130, 246, 0.42) 0%,
                      rgba(37, 99, 235, 0.29) 24%,
                      rgba(22, 51, 108, 0.96) 58%,
                      rgba(8, 22, 52, 0.99) 82%,
                      rgba(3, 10, 28, 1) 100%
                    )
                  `,
                }}
              >
                {/* LUMIÈRE CENTRALE */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-[26%]
                    h-[64%]
                    w-[72%]
                    -translate-x-1/2
                    rounded-full
                    bg-primary/20
                    blur-[36px]
                  "
                />

                {/* LUMIÈRE HAUTE */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -top-[18%]
                    left-1/2
                    h-[48%]
                    w-[75%]
                    -translate-x-1/2
                    rounded-full
                    bg-secondary/10
                    blur-[34px]
                  "
                />

                {/* GRILLE INTERNE */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    opacity-[0.075]
                  "
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to right,
                        rgba(96,165,250,0.30) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(96,165,250,0.24) 1px,
                        transparent 1px
                      )
                    `,

                    backgroundSize:
                      "34px 34px",

                    maskImage:
                      "radial-gradient(circle at center, black 0%, transparent 82%)",

                    WebkitMaskImage:
                      "radial-gradient(circle at center, black 0%, transparent 82%)",
                  }}
                />

                {/* ANNEAU INTERNE */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-[10px]
                    rounded-full
                    border
                    border-primary/15
                  "
                />

                {/* =================================================
                    PORTRAIT TRANSPARENT
                ================================================== */}
                <div
                  className="
                    absolute
                    -inset-[3%]
                    z-10
                  "
                >
                  <Image
                    src="/image/claire-portfolio-transparent.png"
                    alt={
                      portfolio.identity.name
                    }
                    fill
                    priority
                    sizes="(max-width: 640px) 240px, 285px"
                    className="
                      object-contain
                      object-bottom
                      scale-[1.09]

                      transition-transform
                      duration-500
                      ease-out

                      group-hover:scale-[1.14]
                    "
                  />
                </div>

                {/* VIGNETTE BASSE */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                  "
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 58%, rgba(2,6,23,0.16) 100%)",
                  }}
                />
              </div>
            </div>

            {/* =================================================
                ORBITE DÉCORATIVE
            ================================================== */}
            <div
              aria-hidden="true"
              className="
                animate-orbit-slow
                absolute
                inset-[2%]
                z-30
                rounded-full
              "
            >
              {/* POINT BLEU */}
              <span
                className="
                  absolute
                  left-[5%]
                  top-[24%]
                  h-3
                  w-3
                  rounded-full
                  bg-primary
                  shadow-[0_0_24px_var(--primary)]
                "
              />

              {/* PETIT ANNEAU */}
              <span
                className="
                  absolute
                  bottom-[18%]
                  right-[6%]
                  h-8
                  w-8
                  rounded-full
                  border
                  border-secondary/35
                "
              />
            </div>

            {/* LOSANGE */}
            <div
              aria-hidden="true"
              className="
                absolute
                right-[4%]
                top-[35%]
                z-30
                h-10
                w-10
                rotate-45
                rounded-xl
                border
                border-primary/25
                bg-primary/[0.025]

                transition-transform
                duration-500

                group-hover:rotate-[55deg]
                group-hover:scale-110
              "
            />
          </div>
        </Link>

        {/* =================================================
            MESSAGE
        ================================================== */}
        <div
          className="
            relative
            z-20
            mt-2
            sm:mt-3
          "
        >
          <p
            className="
              text-xl
              font-bold
              text-foreground
              sm:text-2xl
            "
          >
            {t.welcome}
          </p>

          <p
            className="
              mt-1.5
              text-sm
              font-medium
              text-primary/80
              sm:text-base
            "
          >
            {t.instruction}
          </p>

          {/* INDICATEUR */}
          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-4
              flex
              h-9
              w-6
              items-start
              justify-center
              rounded-full
              border
              border-border/80
              pt-2
            "
          >
            <span
              className="
                animate-float-fast
                h-1.5
                w-1.5
                rounded-full
                bg-primary
                shadow-[0_0_12px_var(--primary)]
              "
            />
          </div>
        </div>
      </div>
    </main>
  );
}