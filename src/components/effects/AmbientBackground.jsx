
"use client";

import { usePathname } from "next/navigation";

/* =========================================================
   LYDIA PORTFOLIO — GLASS 3D BACKGROUND
   Cyber Violet Edition

   - Sphères translucides en verre
   - Anneaux 3D
   - Reflets violets et roses
   - Animations douces
   - Compatible Next.js / React
   - Compatible mode clair et sombre
   - Responsive
   - Respect des préférences de mouvement
   - Taille réduite uniquement sur la page d'accueil
   - Aucun changement du fond sur /portfolio
========================================================= */

const spheres = [
  {
    id: "glass-one",
    position: "glass-position-one",
    variant: "violet",
    animation: "glassFloatOne",
    duration: "23s",
  },
  {
    id: "glass-two",
    position: "glass-position-two",
    variant: "pink",
    animation: "glassFloatTwo",
    duration: "27s",
  },
  {
    id: "glass-three",
    position: "glass-position-three",
    variant: "soft",
    animation: "glassFloatThree",
    duration: "29s",
  },
];

/* =========================================================
   SPHÈRE EN VERRE
========================================================= */

function GlassSphere({
  position,
  variant,
  animation,
  duration,
}) {
  return (
    <div
      className={`glass3d-sphere ${position}`}
      style={{
        animationName: animation,
        animationDuration: duration,
      }}
    >
      <div className={`glass3d-ball glass3d-ball-${variant}`}>
        <div className="glass3d-highlight" />
        <div className="glass3d-reflection" />
        <div className="glass3d-inner-shadow" />
        <div className="glass3d-specular" />
      </div>
    </div>
  );
}

/* =========================================================
   BACKGROUND PRINCIPAL
========================================================= */

export default function AmbientBackground() {
  const pathname = usePathname();
  const isIntroPage = pathname === "/";

  return (
    <>
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute inset-0
          overflow-hidden
          ${
            isIntroPage
              ? "glass3d-intro"
              : "glass3d-portfolio"
          }
        `}
      >
        {/* FOND PRINCIPAL */}

        <div
          className="absolute inset-0"
          style={{
            background: "var(--background, #100b25)",
          }}
        />

        {/* ÉCLAIRAGE AMBIANT */}

        <div className="glass3d-atmosphere" />

        {/* HALOS */}

        <div className="glass3d-glow glass3d-glow-one" />
        <div className="glass3d-glow glass3d-glow-two" />

        {/* ANNEAUX */}

        <div className="glass3d-ring glass3d-ring-one" />
        <div className="glass3d-ring glass3d-ring-two" />

        {/* GRANDES SPHÈRES */}

        {spheres.map((sphere) => (
          <GlassSphere key={sphere.id} {...sphere} />
        ))}

        {/* PETITES SPHÈRES */}

        <div className="glass3d-small glass3d-small-one" />
        <div className="glass3d-small glass3d-small-two" />
        <div className="glass3d-small glass3d-small-three" />

        {/* VIGNETTE */}

        <div className="glass3d-vignette" />
      </div>

      <style>{`
        /* ================================================
           BASE
        ================================================= */

        .glass3d-atmosphere,
        .glass3d-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .glass3d-atmosphere {
          background:
            radial-gradient(
              ellipse at 25% 28%,
              var(--glow-primary, rgba(168,85,247,0.2)),
              transparent 55%
            ),
            radial-gradient(
              ellipse at 82% 67%,
              var(--glow-secondary, rgba(244,114,182,0.14)),
              transparent 54%
            );

          opacity: 0.55;
        }

        /* ================================================
           HALOS
        ================================================= */

        .glass3d-glow {
          position: absolute;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .glass3d-glow-one {
          top: 10%;
          left: -140px;
          background: rgba(168, 85, 247, 0.09);
        }

        .glass3d-glow-two {
          top: 28%;
          right: -140px;
          background: rgba(244, 114, 182, 0.07);
        }

        /* ================================================
           GRANDES SPHÈRES
        ================================================= */

        .glass3d-sphere {
          position: absolute;
          border-radius: 50%;
          transform-style: preserve-3d;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          pointer-events: none;
        }

        /* TAILLES ORIGINALES : PAGE PORTFOLIO */

        .glass-position-one {
          width: clamp(240px, 33vw, 450px);
          height: clamp(240px, 33vw, 450px);
          top: 7%;
          left: -11%;
        }

        .glass-position-two {
          width: clamp(220px, 29vw, 390px);
          height: clamp(220px, 29vw, 390px);
          top: 12%;
          right: -12%;
        }

        .glass-position-three {
          width: clamp(180px, 25vw, 340px);
          height: clamp(180px, 25vw, 340px);
          bottom: -14%;
          left: 28%;
        }

        /* ================================================
           TAILLES RÉDUITES : ACCUEIL UNIQUEMENT

           Les dimensions sont réduites directement.
           Les animations gardent leurs transformations.
        ================================================= */

        .glass3d-intro .glass-position-one {
          width: clamp(150px, 23vw, 315px);
          height: clamp(150px, 23vw, 315px);
        }

        .glass3d-intro .glass-position-two {
          width: clamp(140px, 20vw, 273px);
          height: clamp(140px, 20vw, 273px);
        }

        .glass3d-intro .glass-position-three {
          width: clamp(115px, 17.5vw, 238px);
          height: clamp(115px, 17.5vw, 238px);
        }

        /* ================================================
           SURFACE EN VERRE
        ================================================= */

        .glass3d-ball {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 50%;

          border: 1px solid rgba(200, 166, 255, 0.3);

          background:
            radial-gradient(
              circle at 30% 22%,
              rgba(255,255,255,0.21),
              rgba(216,180,254,0.09) 20%,
              transparent 47%
            ),
            radial-gradient(
              circle at 74% 76%,
              rgba(168,85,247,0.21),
              transparent 61%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,0.11),
              rgba(168,85,247,0.07) 42%,
              rgba(244,114,182,0.045) 78%,
              rgba(255,255,255,0.025)
            );

          box-shadow:
            inset 12px 15px 36px rgba(255,255,255,0.055),
            inset -22px -28px 46px rgba(79,28,124,0.18),
            0 22px 70px rgba(4,2,17,0.15),
            0 0 65px rgba(168,85,247,0.06);
        }

        .glass3d-ball-violet {
          border-color: rgba(192,132,252,0.33);
        }

        .glass3d-ball-pink {
          border-color: rgba(244,114,182,0.28);

          background:
            radial-gradient(
              circle at 30% 24%,
              rgba(255,255,255,0.2),
              transparent 43%
            ),
            radial-gradient(
              circle at 76% 74%,
              rgba(244,114,182,0.22),
              transparent 58%
            ),
            linear-gradient(
              145deg,
              rgba(244,114,182,0.09),
              rgba(168,85,247,0.06),
              rgba(255,255,255,0.03)
            );
        }

        .glass3d-ball-soft {
          opacity: 0.7;
        }

        /* ================================================
           REFLETS
        ================================================= */

        .glass3d-highlight,
        .glass3d-reflection,
        .glass3d-inner-shadow,
        .glass3d-specular {
          position: absolute;
          pointer-events: none;
        }

        .glass3d-highlight {
          left: 14%;
          top: 8%;
          width: 66%;
          height: 37%;
          border-radius: 50%;
          transform: rotate(-25deg);

          background:
            radial-gradient(
              ellipse,
              rgba(255,255,255,0.23),
              rgba(255,255,255,0.055) 48%,
              transparent 76%
            );

          filter: blur(18px);
        }

        .glass3d-reflection {
          left: 6%;
          top: 19%;
          width: 18%;
          height: 62%;
          border-radius: 50%;
          transform: rotate(15deg);
          border-left: 2px solid rgba(255,255,255,0.17);
          filter: blur(2px);
        }

        .glass3d-inner-shadow {
          inset: 0;
          border-radius: 50%;

          box-shadow:
            inset -18px -18px 45px rgba(168,85,247,0.13),
            inset 9px 9px 25px rgba(255,255,255,0.05);
        }

        .glass3d-specular {
          left: 27%;
          top: 17%;
          width: 24%;
          height: 8%;
          transform: rotate(-24deg);
          border-radius: 50%;
          background: rgba(255,255,255,0.27);
          filter: blur(8px);
        }

        /* ================================================
           ANNEAUX EN VERRE
        ================================================= */

        .glass3d-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(192,132,252,0.18);

          background:
            radial-gradient(
              circle at 28% 20%,
              rgba(255,255,255,0.055),
              transparent 42%
            );

          box-shadow:
            inset 0 0 35px rgba(168,85,247,0.05),
            0 0 45px rgba(168,85,247,0.04);

          animation:
            glassRingDrift 30s ease-in-out infinite alternate;
        }

        .glass3d-ring-one {
          width: clamp(280px, 37vw, 500px);
          height: clamp(280px, 37vw, 500px);
          left: 14%;
          top: 24%;
        }

        .glass3d-ring-two {
          width: clamp(240px, 32vw, 440px);
          height: clamp(240px, 32vw, 440px);
          right: -7%;
          top: 43%;
          border-color: rgba(244,114,182,0.16);
          animation-delay: -12s;
        }

        /* ================================================
           PETITES SPHÈRES
        ================================================= */

        .glass3d-small {
          position: absolute;
          width: 56px;
          height: 56px;
          border-radius: 50%;

          border: 1px solid rgba(216,180,254,0.34);

          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,0.3),
              rgba(192,132,252,0.12) 35%,
              rgba(168,85,247,0.05) 75%
            );

          box-shadow:
            inset -7px -9px 17px rgba(168,85,247,0.14),
            0 10px 32px rgba(8,4,27,0.15);

          animation:
            glassSmallFloat 20s ease-in-out infinite alternate;
        }

        .glass3d-small-one {
          top: 13%;
          left: 72%;
        }

        .glass3d-small-two {
          top: 68%;
          left: 12%;
          width: 42px;
          height: 42px;
          animation-delay: -6s;
        }

        .glass3d-small-three {
          bottom: 14%;
          right: 19%;
          width: 48px;
          height: 48px;
          animation-delay: -12s;
        }

        /* ================================================
           VIGNETTE
        ================================================= */

        .glass3d-vignette {
          background:
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(10,5,25,0.04) 82%,
              rgba(10,5,25,0.1) 100%
            );
        }

        /* ================================================
           ANIMATIONS
        ================================================= */

        @keyframes glassFloatOne {
          0% {
            transform: translate3d(0,0,0) scale(1);
          }

          50% {
            transform: translate3d(22px,-17px,0) scale(1.025);
          }

          100% {
            transform: translate3d(36px,12px,0) scale(0.99);
          }
        }

        @keyframes glassFloatTwo {
          0% {
            transform: translate3d(0,0,0) scale(1);
          }

          50% {
            transform: translate3d(-24px,18px,0) scale(1.035);
          }

          100% {
            transform: translate3d(-40px,-12px,0) scale(0.985);
          }
        }

        @keyframes glassFloatThree {
          0% {
            transform: translate3d(0,0,0) scale(1);
          }

          50% {
            transform: translate3d(16px,-25px,0) scale(1.04);
          }

          100% {
            transform: translate3d(-12px,-38px,0) scale(0.99);
          }
        }

        @keyframes glassRingDrift {
          0% {
            transform:
              rotateX(58deg)
              rotateZ(-18deg)
              translate3d(0,0,0);
          }

          100% {
            transform:
              rotateX(62deg)
              rotateZ(-8deg)
              translate3d(12px,-20px,0);
          }
        }

        @keyframes glassSmallFloat {
          0% {
            transform: translate3d(0,0,0);
          }

          100% {
            transform: translate3d(12px,-28px,0);
          }
        }

        /* ================================================
           MODE CLAIR
        ================================================= */

        :root:not(.dark) .glass3d-ball {
          border-color: rgba(126,34,206,0.22);

          box-shadow:
            inset 10px 12px 30px rgba(255,255,255,0.4),
            inset -18px -22px 40px rgba(168,85,247,0.08),
            0 18px 55px rgba(94,42,140,0.07);
        }

        :root:not(.dark) .glass3d-vignette {
          opacity: 0.12;
        }

        /* ================================================
           RESPONSIVE
        ================================================= */

        @media (max-width: 767px) {
          .glass3d-ring {
            opacity: 0.5;
          }

          .glass3d-small {
            opacity: 0.55;
          }

          .glass3d-glow {
            width: 280px;
            height: 280px;
          }

          .glass3d-intro .glass-position-one {
            width: 150px;
            height: 150px;
          }

          .glass3d-intro .glass-position-two {
            width: 140px;
            height: 140px;
          }

          .glass3d-intro .glass-position-three {
            width: 115px;
            height: 115px;
          }
        }

        /* ================================================
           ACCESSIBILITÉ
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .glass3d-sphere,
          .glass3d-ring,
          .glass3d-small {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
