"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const deepLayerRef = useRef(null);
  const gridLayerRef = useRef(null);
  const orbitLayerRef = useRef(null);
  const frontLayerRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const frameRef = useRef(null);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const scrollRef = useRef(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const finePointer = window.matchMedia(
      "(pointer: fine)"
    );

    const updateScene = () => {
      const { x, y } = mouseRef.current;
      const scroll = scrollRef.current;

      if (deepLayerRef.current) {
        deepLayerRef.current.style.transform = `
          translate3d(
            ${x * -8}px,
            ${y * -6 - scroll * 0.003}px,
            0
          )
          scale(1.05)
        `;
      }

      if (gridLayerRef.current) {
        gridLayerRef.current.style.transform = `
          translate3d(
            ${x * -14}px,
            ${y * -10 + scroll * 0.005}px,
            0
          )
        `;
      }

      if (orbitLayerRef.current) {
        orbitLayerRef.current.style.transform = `
          translate3d(
            ${x * -24}px,
            ${y * -18 - scroll * 0.008}px,
            0
          )
        `;
      }

      if (frontLayerRef.current) {
        frontLayerRef.current.style.transform = `
          translate3d(
            ${x * -40}px,
            ${y * -28 - scroll * 0.012}px,
            0
          )
        `;
      }

      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `
          translate3d(
            ${x * window.innerWidth * 0.32}px,
            ${y * window.innerHeight * 0.28}px,
            0
          )
        `;
      }

      frameRef.current = null;
    };

    const requestUpdate = () => {
      if (frameRef.current) {
        return;
      }

      frameRef.current =
        requestAnimationFrame(updateScene);
    };

    const handlePointerMove = (event) => {
      if (
        reducedMotion.matches ||
        !finePointer.matches
      ) {
        return;
      }

      mouseRef.current = {
        x:
          event.clientX /
            window.innerWidth -
          0.5,

        y:
          event.clientY /
            window.innerHeight -
          0.5,
      };

      requestUpdate();
    };

    const handleScroll = () => {
      if (reducedMotion.matches) {
        return;
      }

      scrollRef.current =
        window.scrollY;

      requestUpdate();
    };

    const resetScene = () => {
      mouseRef.current = {
        x: 0,
        y: 0,
      };

      requestUpdate();
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "blur",
      resetScene
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "blur",
        resetScene
      );

      if (frameRef.current) {
        cancelAnimationFrame(
          frameRef.current
        );
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* =====================================================
          1 — PROFONDEUR / LUMIÈRE
      ====================================================== */}
      <div
        ref={deepLayerRef}
        className="absolute inset-[-8%] transition-transform duration-700 ease-out"
        style={{
          willChange: "transform",
        }}
      >
        {/* Halo supérieur droit */}
        <div
          className="absolute right-[-4%] top-[-12%] h-[52rem] w-[52rem] rounded-full blur-[150px]"
          style={{
            opacity: 0.13,
            background:
              "radial-gradient(circle, var(--primary), transparent 68%)",
          }}
        />

        {/* Halo gauche */}
        <div
          className="absolute left-[-15%] top-[28%] h-[42rem] w-[42rem] rounded-full blur-[140px]"
          style={{
            opacity: 0.07,
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />

        {/* Halo inférieur */}
        <div
          className="absolute bottom-[-20%] right-[20%] h-[38rem] w-[38rem] rounded-full blur-[130px]"
          style={{
            opacity: 0.065,
            background:
              "radial-gradient(circle, var(--primary), transparent 72%)",
          }}
        />
      </div>

      {/* =====================================================
          2 — GRILLE / ESPACE
      ====================================================== */}
      <div
        ref={gridLayerRef}
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          willChange: "transform",
        }}
      >
        {/* Grille très discrète */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.045,

            backgroundImage: `
              linear-gradient(
                to right,
                var(--border) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                var(--border) 1px,
                transparent 1px
              )
            `,

            backgroundSize:
              "92px 92px",

            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 76%)",

            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 76%)",
          }}
        />

        {/* Sol perspective */}
        <div
          className="absolute -bottom-[30%] left-[-20%] h-[60%] w-[140%]"
          style={{
            opacity: 0.1,

            backgroundImage: `
              linear-gradient(
                to right,
                var(--primary) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                var(--primary) 1px,
                transparent 1px
              )
            `,

            backgroundSize:
              "82px 82px",

            transform:
              "perspective(760px) rotateX(66deg) scale(1.2)",

            transformOrigin:
              "center top",

            maskImage:
              "linear-gradient(to bottom, black, transparent 84%)",

            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 84%)",
          }}
        />
      </div>

      {/* =====================================================
          3 — ORBITES
      ====================================================== */}
      <div
        ref={orbitLayerRef}
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          willChange: "transform",
          perspective: "1200px",
          transformStyle:
            "preserve-3d",
        }}
      >
        {/* Grande orbite droite */}
        <div
          className="absolute right-[-12%] top-[3%] h-[30rem] w-[50rem] rounded-[50%] border border-primary/10"
          style={{
            transform:
              "rotate(-14deg)",
          }}
        />

        {/* Orbite centre */}
        <div
          className="absolute left-[5%] top-[30%] h-[25rem] w-[44rem] rounded-[50%] border border-primary/10"
          style={{
            transform:
              "rotate(17deg)",
          }}
        />

        {/* Orbite basse */}
        <div
          className="absolute bottom-[3%] right-[6%] h-[20rem] w-[37rem] rounded-[50%] border border-secondary/10"
          style={{
            transform:
              "rotate(-23deg)",
          }}
        />

        {/* Anneau gauche */}
        <div
          className="absolute left-[-5rem] top-[12%] h-56 w-56 rounded-full border border-primary/10"
          style={{
            transform:
              "translateZ(-35px)",
          }}
        />

        {/* Anneau droit */}
        <div
          className="absolute right-[7%] top-[50%] h-44 w-44 rounded-full border border-primary/10"
          style={{
            transform:
              "translateZ(25px)",
          }}
        />

        {/* Anneau central */}
        <div
          className="absolute bottom-[15%] left-[34%] h-28 w-28 rounded-full border border-secondary/10"
          style={{
            transform:
              "translateZ(40px)",
          }}
        />
      </div>

      {/* =====================================================
          4 — ÉLÉMENTS AVANT
      ====================================================== */}
      <div
        ref={frontLayerRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          willChange: "transform",
        }}
      >
        {/* Point 1 */}
        <div
          className="absolute left-[10%] top-[20%] h-2.5 w-2.5 rounded-full bg-primary/60"
          style={{
            boxShadow:
              "0 0 24px var(--primary)",
          }}
        />

        {/* Point 2 */}
        <div className="absolute right-[13%] top-[16%] h-1.5 w-1.5 rounded-full bg-secondary/60" />

        {/* Point 3 */}
        <div
          className="absolute bottom-[17%] right-[7%] h-2.5 w-2.5 rounded-full bg-primary/45"
          style={{
            boxShadow:
              "0 0 20px var(--primary)",
          }}
        />

        {/* Cercle */}
        <div className="absolute bottom-[25%] left-[5%] h-10 w-10 rounded-full border border-primary/20" />

        {/* Petit cercle */}
        <div className="absolute right-[22%] top-[40%] h-6 w-6 rounded-full border border-secondary/20" />

        {/* Losange */}
        <div
          className="absolute right-[6%] top-[30%] h-9 w-9 rounded-lg border border-primary/20 bg-primary/[0.02]"
          style={{
            transform:
              "rotate(45deg)",
          }}
        />

        {/* Petit losange */}
        <div
          className="absolute left-[18%] top-[58%] h-5 w-5 border border-secondary/15"
          style={{
            transform:
              "rotate(45deg)",
          }}
        />

        {/* Ligne droite */}
        <div
          className="absolute right-[3%] top-[38%] h-px w-52"
          style={{
            opacity: 0.25,

            background:
              "linear-gradient(to right, transparent, var(--primary), transparent)",

            transform:
              "rotate(-28deg)",
          }}
        />

        {/* Ligne gauche */}
        <div
          className="absolute bottom-[24%] left-[7%] h-px w-40"
          style={{
            opacity: 0.16,

            background:
              "linear-gradient(to right, transparent, var(--secondary), transparent)",

            transform:
              "rotate(24deg)",
          }}
        />
      </div>

      {/* =====================================================
          5 — LUMIÈRE CURSEUR
      ====================================================== */}
      <div
        ref={cursorGlowRef}
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[125px]"
        style={{
          opacity: 0.055,

          background:
            "radial-gradient(circle, var(--primary), transparent 70%)",

          willChange: "transform",
        }}
      />

      {/* =====================================================
          VIGNETTE
      ====================================================== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 42%, var(--background) 138%)",
        }}
      />
    </div>
  );
}