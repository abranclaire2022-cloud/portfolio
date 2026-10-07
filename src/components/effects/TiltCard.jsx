"use client";

import { useRef } from "react";

const intensityLevels = {
  subtle: {
    rotate: 3,
    lift: 4,
  },

  medium: {
    rotate: 6,
    lift: 8,
  },

  strong: {
    rotate: 9,
    lift: 12,
  },
};

export default function TiltCard({
  children,
  className = "",
  intensity = "medium",
  glare = true,
}) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const frameRef = useRef(null);

  const settings =
    intensityLevels[intensity] ||
    intensityLevels.medium;

  const handlePointerMove = (event) => {
    // Pas d'effet de tilt sur tactile
    if (event.pointerType !== "mouse") {
      return;
    }

    const card = cardRef.current;

    if (!card) {
      return;
    }

    // Respect du réglage système d'accessibilité
    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (reducedMotion) {
      return;
    }

    const rect =
      card.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const percentX =
      mouseX / rect.width;

    const percentY =
      mouseY / rect.height;

    const rotateY =
      (percentX - 0.5) *
      settings.rotate *
      2;

    const rotateX =
      (0.5 - percentY) *
      settings.rotate *
      2;

    if (frameRef.current) {
      cancelAnimationFrame(
        frameRef.current
      );
    }

    frameRef.current =
      requestAnimationFrame(() => {
        card.style.transform = `
          perspective(1200px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-${settings.lift}px)
        `;

        if (
          glare &&
          glareRef.current
        ) {
          glareRef.current.style.background = `
            radial-gradient(
              circle at ${percentX * 100}% ${percentY * 100}%,
              rgba(255, 255, 255, 0.14),
              rgba(255, 255, 255, 0.04) 22%,
              transparent 55%
            )
          `;

          glareRef.current.style.opacity =
            "1";
        }
      });
  };

  const resetCard = () => {
    const card =
      cardRef.current;

    if (!card) {
      return;
    }

    if (frameRef.current) {
      cancelAnimationFrame(
        frameRef.current
      );
    }

    frameRef.current =
      requestAnimationFrame(() => {
        card.style.transform = `
          perspective(1200px)
          rotateX(0deg)
          rotateY(0deg)
          translateY(0px)
        `;

        if (
          glareRef.current
        ) {
          glareRef.current.style.opacity =
            "0";
        }
      });
  };

  return (
    <div
      className="relative"
      style={{
        perspective: "1200px",
      }}
    >
      <div
        ref={cardRef}
        onPointerMove={
          handlePointerMove
        }
        onPointerLeave={
          resetCard
        }
        onPointerCancel={
          resetCard
        }
        className={`relative transform-gpu transition-transform duration-300 ease-out ${className}`}
        style={{
          transformStyle:
            "preserve-3d",
          willChange:
            "transform",
        }}
      >
        {children}

        {glare && (
          <div
            ref={glareRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-50 rounded-[inherit] opacity-0 transition-opacity duration-300"
          />
        )}
      </div>
    </div>
  );
}