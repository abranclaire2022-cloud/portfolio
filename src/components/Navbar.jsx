
"use client";

import { useEffect, useRef, useState } from "react";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

/* =========================================================
   TRADUCTIONS
========================================================= */

const content = {
  fr: {
    home: "Accueil",
    projects: "Projets",
    stack: "Compétences",
    experience: "Expérience",
    education: "Formation",
    extras: "Profil",
    contact: "Contact",
    cv: "CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    menu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    changeTheme: "Changer de thème",
    languageSelector: "Choisir une langue",
    mobileNavigation: "Navigation mobile",
  },

  en: {
    home: "Home",
    projects: "Projects",
    stack: "Skills",
    experience: "Experience",
    education: "Education",
    extras: "Profile",
    contact: "Contact",
    cv: "CV (FR)",
    github: "GitHub",
    linkedin: "LinkedIn",
    menu: "Open menu",
    closeMenu: "Close menu",
    changeTheme: "Change theme",
    languageSelector: "Choose a language",
    mobileNavigation: "Mobile navigation",
  },

  "pt-BR": {
    home: "Início",
    projects: "Projetos",
    stack: "Competências",
    experience: "Experiência",
    education: "Formação",
    extras: "Perfil",
    contact: "Contato",
    cv: "CV (FR)",
    github: "GitHub",
    linkedin: "LinkedIn",
    menu: "Abrir menu",
    closeMenu: "Fechar menu",
    changeTheme: "Alterar tema",
    languageSelector: "Escolher idioma",
    mobileNavigation: "Navegação móvel",
  },

  ja: {
    home: "ホーム",
    projects: "プロジェクト",
    stack: "技術",
    experience: "経験",
    education: "学歴",
    extras: "プロフィール",
    contact: "お問い合わせ",
    cv: "CV (FR)",
    github: "GitHub",
    linkedin: "LinkedIn",
    menu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    changeTheme: "テーマを変更",
    languageSelector: "言語を選択",
    mobileNavigation: "モバイルナビゲーション",
  },

  ar: {
    home: "الرئيسية",
    projects: "المشاريع",
    stack: "المهارات",
    experience: "الخبرات",
    education: "التعليم",
    extras: "الملف الشخصي",
    contact: "التواصل",
    cv: "السيرة الذاتية (FR)",
    github: "GitHub",
    linkedin: "LinkedIn",
    menu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    changeTheme: "تغيير المظهر",
    languageSelector: "اختيار اللغة",
    mobileNavigation: "التنقل على الهاتف",
  },
};

/* =========================================================
   ICÔNES
========================================================= */

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          <path d="m4.93 4.93 1.42 1.42" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="m4.93 19.07 1.42-1.42" />
          <path d="m17.66 6.34 1.41-1.41" />
        </svg>
      );

    case "moon":
      return (
        <svg {...common}>
          <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
        </svg>
      );

    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );

    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );

    case "chevron":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );

    case "external":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      );

    case "github":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.588 2 12.248c0 4.529 2.865 8.372 6.839 9.728.5.095.682-.222.682-.492 0-.243-.009-.888-.014-1.743-2.782.619-3.369-1.373-3.369-1.373-.455-1.185-1.11-1.5-1.11-1.5-.908-.636.069-.623.069-.623 1.004.072 1.532 1.056 1.532 1.056.892 1.566 2.341 1.114 2.91.852.091-.663.349-1.114.635-1.37-2.221-.259-4.555-1.138-4.555-5.064 0-1.118.389-2.033 1.029-2.75-.103-.259-.446-1.302.098-2.714 0 0 .84-.275 2.75 1.05A9.34 9.34 0 0 1 12 7.269a9.35 9.35 0 0 1 2.504.345c1.909-1.325 2.748-1.05 2.748-1.05.546 1.412.203 2.455.1 2.714.64.717 1.027 1.632 1.027 2.75 0 3.936-2.338 4.802-4.566 5.056.359.317.679.944.679 1.902 0 1.373-.012 2.48-.012 2.817 0 .273.18.592.688.491C19.139 20.617 22 16.777 22 12.248 22 6.588 17.523 2 12 2Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.338 3.5A2.338 2.338 0 1 1 5.34 8.176 2.338 2.338 0 0 1 5.338 3.5ZM3.317 9.825H7.36V20.5H3.317V9.825Zm6.568 0h3.877v1.46h.055c.54-1.023 1.86-2.102 3.83-2.102 4.096 0 4.853 2.698 4.853 6.207V20.5h-4.04v-4.53c0-1.08-.02-2.47-1.505-2.47-1.507 0-1.738 1.176-1.738 2.39v4.61H11.18V9.825h-1.295Z" />
        </svg>
      );

    default:
      return null;
  }
}

/* =========================================================
   COMPOSANT NAVBAR
========================================================= */

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  const {
    language,
    changeLanguage,
    languages,
    isRTL,
  } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  const [languageMenuOpen, setLanguageMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] = useState(false);

  const languageMenuRef = useRef(null);

  const t = content[language] || content.fr;

  const activeLanguage =
    languages.find((item) => item.code === language) ||
    languages[0];

  const cvLink =
    portfolio.links.cv[language] ||
    portfolio.links.cv.fr;

  /* =====================================================
     NAVIGATION DESKTOP
  ===================================================== */

  const desktopNavigation = [
    { label: t.home, href: "#home" },
    { label: t.projects, href: "#projects" },
    { label: t.stack, href: "#stack" },
    { label: t.experience, href: "#experience" },
    { label: t.contact, href: "#contact" },
  ];

  /* =====================================================
     NAVIGATION MOBILE
  ===================================================== */

  const mobileNavigation = [
    { label: t.home, href: "#home" },
    { label: t.projects, href: "#projects" },
    { label: t.stack, href: "#stack" },
    { label: t.experience, href: "#experience" },
    { label: t.education, href: "#education" },
    { label: t.extras, href: "#profile-extras" },
    { label: t.contact, href: "#contact" },
  ];

  /* =====================================================
     EFFET AU SCROLL
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     ACCESSIBILITÉ ET FERMETURE DES MENUS
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    const handleOutsideClick = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setLanguageMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setLanguageMenuOpen(false);
  };

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    closeMenus();
  };

  /* =====================================================
     STYLES DES CONTRÔLES
  ===================================================== */

  const controlClass = `
    inline-flex
    h-10
    items-center
    justify-center
    rounded-xl
    border
    border-border/75
    bg-surface/45
    text-foreground
    transition-all
    duration-200
    hover:border-primary/45
    hover:bg-primary/[0.055]
    hover:text-primary
    focus-visible:outline
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-primary
  `;

  /* =====================================================
     RENDU
  ===================================================== */

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        border-b
        transition-all
        duration-300

        ${
          scrolled
            ? "border-border/80 bg-background/90 shadow-lg shadow-black/5 backdrop-blur-2xl"
            : "border-border/50 bg-background/75 backdrop-blur-xl"
        }
      `}
    >
      {/* LIGNE CYAN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[-1px]
          h-px
        "
        style={{
          background:
            "linear-gradient(to right, transparent, var(--primary), transparent)",
          opacity: scrolled ? 0.35 : 0.12,
        }}
      />

      {/* =================================================
          BARRE PRINCIPALE
      ================================================== */}

      <nav
        aria-label="Portfolio"
        className="
          relative
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          gap-3
          px-4
          py-3
          sm:px-6
        "
      >
        {/* SIGNATURE */}

        <a
          href="#home"
          onClick={closeMenus}
          dir="ltr"
          aria-label={portfolio.identity.name}
          className="
            group
            flex
            shrink-0
            items-center
            text-lg
            font-extrabold
            tracking-[-0.055em]
            text-foreground
            transition-colors
            hover:text-primary
            sm:text-xl
          "
        >
          LYDIA
          <span className="text-primary">.</span>
        </a>

        {/* =================================================
            LIENS DESKTOP
        ================================================== */}

        <ul
          className="
            hidden
            items-center
            gap-1
            xl:flex
          "
        >
          {desktopNavigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() =>
                  setLanguageMenuOpen(false)
                }
                className="
                  group/nav
                  relative
                  block
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-muted
                  transition-colors
                  hover:bg-surface/65
                  hover:text-foreground
                "
              >
                {item.label}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0.5
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-primary
                    transition-all
                    duration-300
                    group-hover/nav:w-1/2
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* =================================================
            ACTIONS
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2
          "
        >
          {/* LIENS PROFESSIONNELS */}

          <div
            className="
              hidden
              items-center
              gap-1
              xl:flex
            "
          >
            {portfolio.links.github && (
              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.github}
                title={t.github}
                className={`${controlClass} w-10`}
              >
                <Icon name="github" size={18} />
              </a>
            )}

            {portfolio.links.linkedin && (
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.linkedin}
                title={t.linkedin}
                className={`${controlClass} w-10`}
              >
                <Icon name="linkedin" size={18} />
              </a>
            )}

            {cvLink && (
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ml-1
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/35
                  bg-primary/[0.055]
                  px-3.5
                  text-xs
                  font-bold
                  text-primary
                  transition-colors
                  hover:bg-primary/10
                "
              >
                {t.cv}
              </a>
            )}
          </div>

          {/* =================================================
              SÉLECTEUR DE LANGUE
          ================================================== */}

          <div
            className="relative"
            ref={languageMenuRef}
          >
            <button
              type="button"
              onClick={() => {
                setLanguageMenuOpen(
                  (previous) => !previous
                );
                setMenuOpen(false);
              }}
              aria-label={t.languageSelector}
              aria-expanded={languageMenuOpen}
              aria-haspopup="true"
              aria-controls="portfolio-language-menu"
              className={`${controlClass} gap-1.5 px-3`}
            >
              <span
                dir="ltr"
                className="text-xs font-bold"
              >
                {activeLanguage?.shortLabel || language}
              </span>

              <span
                className={`
                  transition-transform
                  duration-200
                  ${
                    languageMenuOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              >
                <Icon name="chevron" size={15} />
              </span>
            </button>

            {languageMenuOpen && (
              <div
                id="portfolio-language-menu"
                className="
                  absolute
                  end-0
                  top-full
                  z-[60]
                  mt-3
                  min-w-48
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border/80
                  bg-background
                  p-1.5
                  shadow-2xl
                  shadow-black/15
                "
              >
                {languages.map((item) => {
                  const active =
                    item.code === language;

                  return (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() =>
                        handleLanguageChange(item.code)
                      }
                      aria-current={
                        active ? "true" : undefined
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-5
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        transition-colors

                        ${
                          active
                            ? "bg-primary text-white dark:text-[#071522]"
                            : "text-foreground hover:bg-surface"
                        }
                      `}
                    >
                      <span
                        dir={item.direction || "ltr"}
                      >
                        {item.label}
                      </span>

                      <span
                        dir="ltr"
                        className="text-xs font-bold"
                      >
                        {item.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* =================================================
              THÈME CLAIR / SOMBRE
          ================================================== */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.changeTheme}
            title={t.changeTheme}
            className={`${controlClass} w-10`}
          >
            <Icon
              name={isDark ? "sun" : "moon"}
            />
          </button>

          {/* =================================================
              MENU MOBILE
          ================================================== */}

          <button
            type="button"
            onClick={() => {
              setMenuOpen(
                (previous) => !previous
              );
              setLanguageMenuOpen(false);
            }}
            aria-label={
              menuOpen
                ? t.closeMenu
                : t.menu
            }
            aria-expanded={menuOpen}
            aria-controls="portfolio-mobile-navigation"
            className={`${controlClass} w-10 xl:hidden`}
          >
            <Icon
              name={menuOpen ? "close" : "menu"}
            />
          </button>
        </div>
      </nav>

      {/* =====================================================
          NAVIGATION MOBILE
      ====================================================== */}

      {menuOpen && (
        <div
          id="portfolio-mobile-navigation"
          className="
            max-h-[calc(100dvh-70px)]
            overflow-y-auto
            overscroll-contain
            border-t
            border-border/60
            bg-background/95
            px-4
            py-5
            shadow-xl
            shadow-black/10
            backdrop-blur-2xl
            sm:px-6
            xl:hidden
          "
        >
          <nav
            aria-label={t.mobileNavigation}
            className="mx-auto max-w-6xl"
          >
            <ul className="space-y-1">
              {mobileNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenus}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-muted
                      transition-colors
                      hover:bg-surface/70
                      hover:text-primary
                    "
                  >
                    {item.label}

                    <span
                      aria-hidden="true"
                      className="text-primary"
                    >
                      {isRTL ? "←" : "→"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* LIENS PROFESSIONNELS MOBILE */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-2
                border-t
                border-border/60
                pt-5
              "
            >
              {portfolio.links.github && (
                <a
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-border/75
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-foreground
                    transition-colors
                    hover:border-primary/40
                    hover:text-primary
                  "
                >
                  <Icon name="github" size={17} />
                  {t.github}
                </a>
              )}

              {portfolio.links.linkedin && (
                <a
                  href={portfolio.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-border/75
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-foreground
                    transition-colors
                    hover:border-primary/40
                    hover:text-primary
                  "
                >
                  <Icon name="linkedin" size={17} />
                  {t.linkedin}
                </a>
              )}

              {cvLink && (
                <a
                  href={cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-4
                    py-2.5
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-primary-hover
                    dark:text-[#071522]
                  "
                >
                  {t.cv}
                  <Icon name="external" size={15} />
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
