"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LanguageContext = createContext(undefined);

// =========================================================
// LANGUES SUPPORTÉES
// =========================================================

export const LANGUAGE_OPTIONS = [
  {
    code: "fr",
    shortLabel: "FR",
    label: "Français",
    direction: "ltr",
  },
  {
    code: "en",
    shortLabel: "EN",
    label: "English",
    direction: "ltr",
  },
  {
    code: "pt-BR",
    shortLabel: "PT",
    label: "Português",
    direction: "ltr",
  },
  {
    code: "ja",
    shortLabel: "JA",
    label: "日本語",
    direction: "ltr",
  },
  {
    code: "ar",
    shortLabel: "AR",
    label: "العربية",
    direction: "rtl",
  },
];

export const SUPPORTED_LANGUAGES =
  LANGUAGE_OPTIONS.map(
    (language) => language.code
  );

// =========================================================
// UTILITAIRES
// =========================================================

function isSupportedLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(
    language
  );
}

function getLanguageOption(language) {
  return (
    LANGUAGE_OPTIONS.find(
      (item) =>
        item.code === language
    ) || LANGUAGE_OPTIONS[0]
  );
}

function getLanguageDirection(language) {
  return getLanguageOption(
    language
  ).direction;
}

// =========================================================
// PROVIDER
// =========================================================

export function LanguageProvider({
  children,
}) {
  const [language, setLanguage] =
    useState("fr");

  const [mounted, setMounted] =
    useState(false);

  // ---------------------------------------------------------
  // CHARGEMENT DE LA LANGUE SAUVEGARDÉE
  // ---------------------------------------------------------

  useEffect(() => {
    try {
      const savedLanguage =
        localStorage.getItem(
          "portfolio-language"
        );

      if (
        savedLanguage &&
        isSupportedLanguage(
          savedLanguage
        )
      ) {
        setLanguage(
          savedLanguage
        );
      } else {
        setLanguage("fr");
      }
    } catch {
      /*
        Si localStorage n'est pas disponible,
        le portfolio reste simplement en français.
      */
      setLanguage("fr");
    }

    setMounted(true);
  }, []);

  // ---------------------------------------------------------
  // SYNCHRONISATION DU DOCUMENT HTML
  // ---------------------------------------------------------

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const root =
      document.documentElement;

    const direction =
      getLanguageDirection(
        language
      );

    root.setAttribute(
      "lang",
      language
    );

    root.setAttribute(
      "dir",
      direction
    );

    try {
      localStorage.setItem(
        "portfolio-language",
        language
      );
    } catch {
      /*
        Rien à faire si le stockage
        local est indisponible.
      */
    }
  }, [language, mounted]);

  // ---------------------------------------------------------
  // CHANGEMENT MANUEL DE LANGUE
  // ---------------------------------------------------------

  const changeLanguage = (
    newLanguage
  ) => {
    if (
      !isSupportedLanguage(
        newLanguage
      )
    ) {
      return;
    }

    setLanguage(newLanguage);
  };

  // ---------------------------------------------------------
  // INFORMATIONS SUR LA LANGUE ACTIVE
  // ---------------------------------------------------------

  const activeLanguage =
    getLanguageOption(language);

  const direction =
    activeLanguage.direction;

  const isRTL =
    direction === "rtl";

  // ---------------------------------------------------------
  // VALEURS PARTAGÉES
  // ---------------------------------------------------------

  const value = {
    language,
    changeLanguage,

    languages:
      LANGUAGE_OPTIONS,

    activeLanguage,

    direction,

    isRTL,
  };

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// =========================================================
// HOOK
// =========================================================

export function useLanguage() {
  const context =
    useContext(
      LanguageContext
    );

  if (
    context === undefined
  ) {
    throw new Error(
      "useLanguage doit être utilisé à l'intérieur d'un LanguageProvider"
    );
  }

  return context;
}