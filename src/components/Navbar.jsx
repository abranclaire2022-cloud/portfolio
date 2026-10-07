"use client";

import { useEffect, useState } from "react";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

const content = {
  fr: {
    home: "Accueil",
    stack: "Stack",
    projects: "Projets",
    experience: "Expérience",
    education: "Formation",
    skills: "Compétences",
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
    stack: "Stack",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
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
    stack: "Stack",
    projects: "Projetos",
    experience: "Experiência",
    education: "Formação",
    skills: "Competências",
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
    stack: "技術",
    projects: "プロジェクト",
    experience: "経験",
    education: "学歴",
    skills: "スキル",
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
    stack: "التقنيات",
    projects: "المشاريع",
    experience: "الخبرات",
    education: "التعليم",
    skills: "المهارات",
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

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.42 1.42" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.588 2 12.248c0 4.529 2.865 8.372 6.839 9.728.5.095.682-.222.682-.492 0-.243-.009-.888-.014-1.743-2.782.619-3.369-1.373-3.369-1.373-.455-1.185-1.11-1.5-1.11-1.5-.908-.636.069-.623.069-.623 1.004.072 1.532 1.056 1.532 1.056.892 1.566 2.341 1.114 2.91.852.091-.663.349-1.114.635-1.37-2.221-.259-4.555-1.138-4.555-5.064 0-1.118.389-2.033 1.029-2.75-.103-.259-.446-1.302.098-2.714 0 0 .84-.275 2.75 1.05A9.34 9.34 0 0 1 12 7.269a9.35 9.35 0 0 1 2.504.345c1.909-1.325 2.748-1.05 2.748-1.05.546 1.412.203 2.455.1 2.714.64.717 1.027 1.632 1.027 2.75 0 3.936-2.338 4.802-4.566 5.056.359.317.679.944.679 1.902 0 1.373-.012 2.48-.012 2.817 0 .273.18.592.688.491C19.139 20.617 22 16.777 22 12.248 22 6.588 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.338 3.5A2.338 2.338 0 1 1 5.34 8.176 2.338 2.338 0 0 1 5.338 3.5ZM3.317 9.825H7.36V20.5H3.317V9.825Zm6.568 0h3.877v1.46h.055c.54-1.023 1.86-2.102 3.83-2.102 4.096 0 4.853 2.698 4.853 6.207V20.5h-4.04v-4.53c0-1.08-.02-2.47-1.505-2.47-1.507 0-1.738 1.176-1.738 2.39v4.61H11.18V9.825h-1.295Z" />
    </svg>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const {
    isDark,
    toggleTheme,
  } = useTheme();

  const {
    language,
    changeLanguage,
    languages,
    isRTL,
  } = useLanguage();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [
    languageMenuOpen,
    setLanguageMenuOpen,
  ] = useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const t =
    content[language] ||
    content.fr;

  const activeLanguage =
    languages.find(
      (item) =>
        item.code === language
    ) || languages[0];

  const cvLink =
    portfolio.links.cv[language] ||
    portfolio.links.cv.fr;

  const navigation = [
    {
      label: t.home,
      href: "#home",
    },
    {
      label: t.stack,
      href: "#stack",
    },
    {
      label: t.projects,
      href: "#projects",
    },
    {
      label: t.experience,
      href: "#experience",
    },
    {
      label: t.education,
      href: "#education",
    },
    {
      label: t.skills,
      href: "#profile-extras",
    },
    {
      label: t.contact,
      href: "#contact",
    },
  ];

  /* =========================================================
     SCROLL NAVBAR
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 16
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     FERMETURE AU CLAVIER + CHANGEMENT DE LARGEUR
  ========================================================= */
  useEffect(() => {
    const handleKeyDown = (
      event
    ) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLanguageMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (
        window.innerWidth >= 1280
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "resize",
      handleResize
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
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setLanguageMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(
      (previous) => !previous
    );

    setLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(
      (previous) => !previous
    );

    setMenuOpen(false);
  };

  const handleLanguageChange = (
    code
  ) => {
    changeLanguage(code);

    setLanguageMenuOpen(false);
    setMenuOpen(false);
  };

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
            ? "border-border/70 bg-background/75 shadow-lg shadow-black/5 backdrop-blur-2xl"
            : "border-border/50 bg-background/55 backdrop-blur-xl"
        }
      `}
    >
      {/* =====================================================
          LIGNE LUMINEUSE
      ====================================================== */}
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

          opacity: scrolled
            ? 0.3
            : 0.14,
        }}
      />

      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <nav
        className="
          relative
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          gap-2
          px-4
          py-3

          sm:gap-3
          sm:px-6
          sm:py-3.5
        "
      >
        {/* =================================================
            IDENTITÉ
        ================================================== */}
        <a
          href="#home"
          onClick={closeMenus}
          dir="ltr"
          className="
            group/brand
            relative
            min-w-0
            max-w-[10.5rem]
            shrink
            truncate
            text-[13px]
            font-bold
            tracking-[-0.02em]
            text-foreground

            sm:max-w-none
            sm:shrink-0
            sm:text-base
          "
        >
          <span
            className="
              relative
              z-10
              transition-colors
              duration-200

              group-hover/brand:text-primary
            "
          >
            {portfolio.identity.name}
          </span>

          <span
            aria-hidden="true"
            className="
              absolute
              -bottom-1
              left-0
              h-px
              w-0
              bg-primary
              transition-all
              duration-300

              group-hover/brand:w-full
            "
          />
        </a>

        {/* =================================================
            NAVIGATION DESKTOP
        ================================================== */}
        <ul
          className="
            hidden
            items-center
            gap-0.5

            xl:flex
          "
        >
          {navigation.map(
            (item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() =>
                    setLanguageMenuOpen(
                      false
                    )
                  }
                  className="
                    group/nav
                    relative
                    block
                    rounded-lg
                    px-2.5
                    py-2
                    text-sm
                    font-medium
                    text-muted
                    transition-colors
                    duration-200

                    hover:bg-surface/50
                    hover:text-foreground
                  "
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-primary
                      transition-all
                      duration-300

                      group-hover/nav:w-[55%]
                    "
                  />
                </a>
              </li>
            )
          )}
        </ul>

        {/* =================================================
            ACTIONS
        ================================================== */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-1

            sm:gap-1.5
          "
        >
          {/* ===============================================
              LIENS PRO DESKTOP
          ================================================ */}
          <div
            className="
              hidden
              items-center
              gap-1

              xl:flex
            "
          >
            {/* GITHUB */}
            {portfolio.links
              .github && (
              <a
                href={
                  portfolio.links
                    .github
                }
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                aria-label={t.github}
                title={t.github}
                className="
                  inline-flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-muted
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-surface/60
                  hover:text-foreground
                "
              >
                <GitHubIcon />
              </a>
            )}

            {/* LINKEDIN */}
            {portfolio.links
              .linkedin && (
              <a
                href={
                  portfolio.links
                    .linkedin
                }
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                aria-label={
                  t.linkedin
                }
                title={t.linkedin}
                className="
                  inline-flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-muted
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-surface/60
                  hover:text-foreground
                "
              >
                <LinkedInIcon />
              </a>
            )}

            {/* CV */}
            {cvLink && (
              <a
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-lg
                  border
                  border-border/70
                  bg-background/25
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-foreground
                  backdrop-blur-xl
                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:border-primary/40
                  hover:bg-primary/[0.05]
                  hover:text-primary
                "
              >
                {t.cv}
              </a>
            )}
          </div>

          {/* ===============================================
              LANGUE
          ================================================ */}
          <div className="relative">
            <button
              type="button"
              onClick={
                toggleLanguageMenu
              }
              aria-label={
                t.languageSelector
              }
              aria-expanded={
                languageMenuOpen
              }
              aria-haspopup="listbox"
              className="
                flex
                h-9
                items-center
                gap-1
                rounded-lg
                border
                border-border/70
                bg-background/25
                px-2
                text-xs
                font-semibold
                text-foreground
                backdrop-blur-xl
                transition-all
                duration-200

                hover:border-primary/40
                hover:bg-surface/60

                sm:gap-2
                sm:px-3
                sm:text-sm
              "
            >
              <span dir="ltr">
                {
                  activeLanguage.shortLabel
                }
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
                <ChevronIcon />
              </span>
            </button>

            {/* =============================================
                MENU LANGUE
            ============================================== */}
            {languageMenuOpen && (
              <div
                role="listbox"
                aria-label={
                  t.languageSelector
                }
                className="
                  absolute
                  end-0
                  top-full
                  z-[60]
                  mt-2
                  min-w-48
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border/70
                  bg-background/90
                  p-1.5
                  shadow-2xl
                  shadow-black/15
                  backdrop-blur-2xl

                  sm:mt-3
                  sm:min-w-52
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-primary/10
                    blur-3xl
                  "
                />

                <div className="relative">
                  {languages.map(
                    (item) => {
                      const isActive =
                        item.code ===
                        language;

                      return (
                        <button
                          key={
                            item.code
                          }
                          type="button"
                          role="option"
                          aria-selected={
                            isActive
                          }
                          onClick={() =>
                            handleLanguageChange(
                              item.code
                            )
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
                            transition-all
                            duration-200

                            ${
                              isActive
                                ? "bg-primary text-background shadow-lg shadow-primary/10"
                                : "text-foreground hover:bg-surface/70"
                            }
                          `}
                        >
                          <span
                            dir={
                              item.direction ||
                              "ltr"
                            }
                          >
                            {item.label}
                          </span>

                          <span
                            dir="ltr"
                            className={`
                              text-xs
                              font-semibold

                              ${
                                isActive
                                  ? "text-background"
                                  : "text-muted"
                              }
                            `}
                          >
                            {
                              item.shortLabel
                            }
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ===============================================
              THÈME
          ================================================ */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              t.changeTheme
            }
            title={t.changeTheme}
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-border/70
              bg-background/25
              text-foreground
              backdrop-blur-xl
              transition-all
              duration-200

              hover:-translate-y-0.5
              hover:border-primary/40
              hover:bg-surface/60
              hover:text-primary
            "
          >
            {isDark ? (
              <SunIcon />
            ) : (
              <MoonIcon />
            )}
          </button>

          {/* ===============================================
              MOBILE
          ================================================ */}
          <button
            type="button"
            onClick={
              toggleMobileMenu
            }
            aria-label={
              menuOpen
                ? t.closeMenu
                : t.menu
            }
            aria-expanded={
              menuOpen
            }
            aria-controls="mobile-navigation"
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-border/70
              bg-background/25
              text-foreground
              backdrop-blur-xl
              transition-all
              duration-200

              hover:border-primary/40
              hover:bg-surface/60
              hover:text-primary

              xl:hidden
            "
          >
            {menuOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </nav>

      {/* =====================================================
          MENU MOBILE
      ====================================================== */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="
            max-h-[calc(100dvh-60px)]
            overflow-y-auto
            overscroll-contain
            border-t
            border-border/60
            bg-background/90
            px-4
            py-4
            shadow-xl
            shadow-black/10
            backdrop-blur-2xl

            sm:px-6
            sm:py-5

            xl:hidden
          "
        >
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label={
                t.mobileNavigation
              }
            >
              <ul className="space-y-1">
                {navigation.map(
                  (item) => (
                    <li
                      key={
                        item.href
                      }
                    >
                      <a
                        href={
                          item.href
                        }
                        onClick={
                          closeMenus
                        }
                        className="
                          group/mobile
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          px-3
                          py-2.5
                          text-sm
                          font-medium
                          text-muted
                          transition-all
                          duration-200

                          hover:bg-surface/65
                          hover:text-foreground

                          sm:px-4
                          sm:py-3
                          sm:text-base
                        "
                      >
                        <span>
                          {
                            item.label
                          }
                        </span>

                        <span
                          aria-hidden="true"
                          className={`
                            text-primary/50
                            opacity-0
                            transition-all
                            duration-200

                            group-hover/mobile:opacity-100

                            ${
                              isRTL
                                ? "group-hover/mobile:-translate-x-1"
                                : "group-hover/mobile:translate-x-1"
                            }
                          `}
                        >
                          {isRTL
                            ? "←"
                            : "→"}
                        </span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* ===============================================
                LIENS PRO MOBILE
            ================================================ */}
            <div
              className="
                mt-4
                border-t
                border-border/60
                pt-4

                sm:mt-5
                sm:pt-5
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  gap-2.5

                  sm:gap-3
                "
              >
                {portfolio.links
                  .github && (
                  <a
                    href={
                      portfolio.links
                        .github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={
                      closeMenus
                    }
                    dir="ltr"
                    className="
                      rounded-lg
                      border
                      border-border/70
                      bg-background/30
                      px-3.5
                      py-2.5
                      text-sm
                      font-semibold
                      text-foreground
                      transition-all
                      duration-200

                      hover:border-primary/40
                      hover:bg-surface/60

                      sm:px-4
                    "
                  >
                    {t.github} ↗
                  </a>
                )}

                {portfolio.links
                  .linkedin && (
                  <a
                    href={
                      portfolio.links
                        .linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={
                      closeMenus
                    }
                    dir="ltr"
                    className="
                      rounded-lg
                      border
                      border-border/70
                      bg-background/30
                      px-3.5
                      py-2.5
                      text-sm
                      font-semibold
                      text-foreground
                      transition-all
                      duration-200

                      hover:border-primary/40
                      hover:bg-surface/60

                      sm:px-4
                    "
                  >
                    {t.linkedin} ↗
                  </a>
                )}

                {cvLink && (
                  <a
                    href={cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={
                      closeMenus
                    }
                    className="
                      rounded-lg
                      bg-primary
                      px-3.5
                      py-2.5
                      text-sm
                      font-semibold
                      text-background
                      shadow-lg
                      shadow-primary/10
                      transition-all
                      duration-200

                      hover:bg-primary-hover

                      sm:px-4
                    "
                  >
                    {t.cv}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}