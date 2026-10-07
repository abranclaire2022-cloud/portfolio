"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(undefined);

const SUPPORTED_THEMES = [
  "light",
  "dark",
];

function isSupportedTheme(theme) {
  return SUPPORTED_THEMES.includes(theme);
}

function getSystemTheme() {
  if (
    typeof window !== "undefined" &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
  ) {
    return "dark";
  }

  return "light";
}

export function ThemeProvider({
  children,
}) {
  const [theme, setTheme] =
    useState("light");

  const [mounted, setMounted] =
    useState(false);

  // =========================================================
  // CHARGEMENT DU THÈME INITIAL
  // =========================================================

  useEffect(() => {
    let initialTheme =
      getSystemTheme();

    try {
      const savedTheme =
        localStorage.getItem(
          "portfolio-theme"
        );

      if (
        savedTheme &&
        isSupportedTheme(
          savedTheme
        )
      ) {
        initialTheme =
          savedTheme;
      }
    } catch {
      /*
        Si localStorage n'est pas disponible,
        on conserve simplement le thème système.
      */
    }

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // =========================================================
  // APPLICATION DU THÈME
  // =========================================================

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const root =
      document.documentElement;

    if (theme === "dark") {
      root.classList.add(
        "dark"
      );
    } else {
      root.classList.remove(
        "dark"
      );
    }

    /*
      Aide également les éléments natifs
      du navigateur à respecter le thème.
    */
    root.style.colorScheme =
      theme;

    try {
      localStorage.setItem(
        "portfolio-theme",
        theme
      );
    } catch {
      /*
        Aucun blocage du site si le stockage
        local n'est pas disponible.
      */
    }
  }, [theme, mounted]);

  // =========================================================
  // CHANGEMENT DE THÈME
  // =========================================================

  const toggleTheme = () => {
    setTheme(
      (currentTheme) =>
        currentTheme === "dark"
          ? "light"
          : "dark"
    );
  };

  // =========================================================
  // VALEURS PARTAGÉES
  // =========================================================

  const value = {
    theme,
    isDark:
      theme === "dark",
    toggleTheme,
  };

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// =========================================================
// HOOK
// =========================================================

export function useTheme() {
  const context =
    useContext(
      ThemeContext
    );

  if (
    context === undefined
  ) {
    throw new Error(
      "useTheme doit être utilisé à l'intérieur d'un ThemeProvider"
    );
  }

  return context;
}