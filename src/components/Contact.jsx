"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

import TiltCard from "@/components/effects/TiltCard";

const content = {
  fr: {
    eyebrow: "Contact & opportunités",
    title: "ÉCHANGEONS",

    subtitle:
      "Parlons de ce que nous pourrions construire",

    description:
      "Je suis ouverte aux opportunités professionnelles, aux projets web et aux échanges autour du numérique. Si mon profil correspond à ce que vous recherchez, parlons-en.",

    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    availability: "Disponibilité",

    writeMe: "M’écrire",
    copyEmail: "Copier l’email",
    copied: "Email copié !",

    linkedin: "LinkedIn",
    github: "GitHub",

    cv: "Voir mon CV",
    cvLanguage: "CV en français",

    links: "Liens professionnels",
  },

  en: {
    eyebrow: "Contact & opportunities",
    title: "LET’S CONNECT",

    subtitle:
      "Let’s talk about what we could build together",

    description:
      "I’m open to professional opportunities, web projects and conversations around digital work. If my profile matches what you’re looking for, let’s connect.",

    email: "Email",
    phone: "Phone",
    location: "Location",
    availability: "Availability",

    writeMe: "Email me",
    copyEmail: "Copy email",
    copied: "Email copied!",

    linkedin: "LinkedIn",
    github: "GitHub",

    cv: "View my CV",
    cvLanguage: "CV in French",

    links: "Professional links",
  },

  "pt-BR": {
    eyebrow: "Contato & oportunidades",
    title: "VAMOS CONVERSAR",

    subtitle:
      "Vamos falar sobre o que podemos construir",

    description:
      "Estou aberta a oportunidades profissionais, projetos web e conversas sobre o universo digital. Se meu perfil corresponde ao que você procura, vamos conversar.",

    email: "Email",
    phone: "Telefone",
    location: "Localização",
    availability: "Disponibilidade",

    writeMe: "Enviar email",
    copyEmail: "Copiar email",
    copied: "Email copiado!",

    linkedin: "LinkedIn",
    github: "GitHub",

    cv: "Ver meu CV",
    cvLanguage: "CV em francês",

    links: "Links profissionais",
  },

  ja: {
    eyebrow: "お問い合わせ & 機会",
    title: "つながりましょう",

    subtitle:
      "一緒に何ができるか、お話ししましょう",

    description:
      "仕事の機会、Webプロジェクト、デジタル分野での交流を歓迎しています。私のプロフィールが求めているものと合いましたら、ぜひご連絡ください。",

    email: "メール",
    phone: "電話",
    location: "所在地",
    availability: "対応状況",

    writeMe: "メールを送る",
    copyEmail: "メールアドレスをコピー",
    copied: "コピーしました！",

    linkedin: "LinkedIn",
    github: "GitHub",

    cv: "履歴書を見る",
    cvLanguage: "フランス語の履歴書",

    links: "プロフェッショナルリンク",
  },

  ar: {
    eyebrow: "التواصل والفرص",
    title: "لنتواصل",

    subtitle:
      "لنتحدث عمّا يمكننا بناؤه معًا",

    description:
      "أنا منفتحة على الفرص المهنية ومشاريع الويب والنقاشات حول المجال الرقمي. إذا كان ملفي يناسب ما تبحث عنه، يسعدني التواصل معك.",

    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    availability: "التوفر",

    writeMe: "راسلني",
    copyEmail: "نسخ البريد الإلكتروني",
    copied: "تم نسخ البريد الإلكتروني!",

    linkedin: "LinkedIn",
    github: "GitHub",

    cv: "عرض سيرتي الذاتية",
    cvLanguage: "السيرة الذاتية بالفرنسية",

    links: "الروابط المهنية",
  },
};

export default function Contact() {
  const {
    language,
    isRTL,
  } = useLanguage();

  const t =
    content[language] ||
    content.fr;

  const [copied, setCopied] =
    useState(false);

  const cvLink =
    portfolio.links.cv[language] ||
    portfolio.links.cv.fr;

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

  const role =
    portfolio.identity.role[
      language
    ] ||
    portfolio.identity.role.fr;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        portfolio.identity.email
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Impossible de copier l'adresse email :",
        error
      );
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-border/60
        bg-surface/20
        px-4
        py-20
        backdrop-blur-[1px]

        sm:px-6

        lg:py-24
      "
    >
      {/* =====================================================
          AMBIANCE
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* HALO GAUCHE */}
        <div
          className="
            absolute
            -left-40
            top-[10%]
            h-[30rem]
            w-[30rem]
            rounded-full
            opacity-[0.055]
            blur-[110px]

            dark:opacity-[0.11]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        {/* HALO DROIT */}
        <div
          className="
            absolute
            -right-40
            bottom-[-8rem]
            h-[32rem]
            w-[32rem]
            rounded-full
            opacity-[0.045]
            blur-[120px]

            dark:opacity-[0.09]
          "
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =====================================================
            EN-TÊTE
        ====================================================== */}
        <div>
          {/* =================================================
              UNIQUEMENT CES DEUX TITRES SONT CENTRÉS
          ================================================== */}
          <div className="text-center">
            {/* CONTACT & OPPORTUNITÉS */}
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary

                sm:text-sm
              "
            >
              {t.eyebrow}
            </p>

            {/* ÉCHANGEONS */}
            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                uppercase
                leading-[1.05]
                tracking-[-0.03em]
                text-foreground

                sm:text-5xl

                lg:text-6xl
              "
            >
              {t.title}
            </h2>
          </div>

          {/* =================================================
              SOUS-TITRE + DESCRIPTION À GAUCHE
          ================================================== */}
          <div
            className="
              mt-7
              max-w-2xl
              text-start

              sm:mt-8
            "
          >
            <p
              className="
                text-base
                font-semibold
                leading-snug
                text-foreground/90

                sm:text-xl
              "
            >
              {t.subtitle}
            </p>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-muted

                sm:text-base
                sm:leading-7
              "
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* =====================================================
            CONTENU
        ====================================================== */}
        <div
          className="
            mt-10
            grid
            gap-5

            sm:mt-12
            sm:gap-6

            lg:mt-14
            lg:grid-cols-[1.12fr_0.88fr]
            lg:gap-7
          "
        >
          {/* =================================================
              CONTACT PRINCIPAL
          ================================================== */}
          <TiltCard
            intensity="subtle"
            glare={true}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-border/70
              bg-background/55
              shadow-xl
              backdrop-blur-xl
            "
          >
            {/* PLAN ARRIÈRE */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-3
                rounded-[1.35rem]
                border
                border-primary/[0.08]
                bg-primary/[0.012]
              "
              style={{
                transform:
                  "translateZ(-22px)",
              }}
            />

            {/* LIGNE LUMINEUSE */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-6
                right-6
                top-0
                h-px

                sm:left-8
                sm:right-8
              "
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--primary), transparent)",

                opacity: 0.55,

                transform:
                  "translateZ(10px)",
              }}
            />

            <div
              className="
                relative
                p-5

                sm:p-8
              "
              style={{
                transformStyle:
                  "preserve-3d",
              }}
            >
              {/* INFORMATIONS */}
              <div
                className="
                  grid
                  gap-x-8
                  gap-y-6

                  sm:grid-cols-2
                  sm:gap-y-8
                "
              >
                {/* EMAIL */}
                <div
                  style={{
                    transform:
                      "translateZ(38px)",
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {t.email}
                  </p>

                  <a
                    href={`mailto:${portfolio.identity.email}`}
                    dir="ltr"
                    className="
                      mt-2
                      inline-block
                      max-w-full
                      break-all
                      text-sm
                      font-semibold
                      text-foreground
                      transition-colors

                      hover:text-primary

                      sm:text-base
                    "
                  >
                    {
                      portfolio.identity
                        .email
                    }
                  </a>
                </div>

                {/* TÉLÉPHONE */}
                <div
                  style={{
                    transform:
                      "translateZ(34px)",
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {t.phone}
                  </p>

                  <a
                    href={`tel:${portfolio.identity.phone.replace(
                      /\s/g,
                      ""
                    )}`}
                    dir="ltr"
                    className="
                      mt-2
                      inline-block
                      text-sm
                      font-semibold
                      text-foreground
                      transition-colors

                      hover:text-primary

                      sm:text-base
                    "
                  >
                    {
                      portfolio.identity
                        .phone
                    }
                  </a>
                </div>

                {/* LOCALISATION */}
                <div
                  style={{
                    transform:
                      "translateZ(30px)",
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {t.location}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-foreground

                      sm:text-base
                    "
                  >
                    {location}
                  </p>
                </div>

                {/* DISPONIBILITÉ */}
                <div
                  style={{
                    transform:
                      "translateZ(42px)",
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {t.availability}
                  </p>

                  <div className="mt-2 flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="
                        mt-2
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                        bg-success
                        shadow-[0_0_14px_var(--success)]
                      "
                    />

                    <p
                      className="
                        text-sm
                        font-semibold
                        leading-6
                        text-foreground

                        sm:text-base
                      "
                    >
                      {availability}
                    </p>
                  </div>
                </div>
              </div>

              {/* ACTIONS */}
              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-border/60
                  pt-6

                  sm:mt-9
                  sm:flex-row
                  sm:flex-wrap
                  sm:pt-7
                "
                style={{
                  transform:
                    "translateZ(48px)",
                }}
              >
                <a
                  href={`mailto:${portfolio.identity.email}`}
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
                  {t.writeMe}
                </a>

                <button
                  type="button"
                  onClick={
                    handleCopyEmail
                  }
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-border/80
                    bg-surface/45
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-foreground
                    backdrop-blur-md
                    transition-all
                    duration-200

                    hover:-translate-y-1
                    hover:border-primary/35
                    hover:bg-surface/70

                    sm:w-auto
                  "
                >
                  {copied
                    ? t.copied
                    : t.copyEmail}
                </button>

                <span
                  className="sr-only"
                  aria-live="polite"
                >
                  {copied
                    ? t.copied
                    : ""}
                </span>
              </div>
            </div>

            {/* DÉCORATION */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-5
                end-5
                h-12
                w-12
                rounded-full
                border
                border-primary/10

                sm:bottom-7
                sm:end-7
                sm:h-16
                sm:w-16
              "
              style={{
                transform:
                  "translateZ(15px)",
              }}
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-9
                end-9
                h-1.5
                w-1.5
                rounded-full
                bg-primary/55

                sm:bottom-12
                sm:end-12
                sm:h-2
                sm:w-2
              "
              style={{
                transform:
                  "translateZ(52px)",

                boxShadow:
                  "0 0 20px var(--primary)",
              }}
            />
          </TiltCard>

          {/* =================================================
              LIENS PROFESSIONNELS
          ================================================== */}
          <TiltCard
            intensity="subtle"
            glare={false}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-border/70
              bg-background/45
              shadow-xl
              backdrop-blur-xl
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-3
                rounded-[1.35rem]
                border
                border-border/30
              "
              style={{
                transform:
                  "translateZ(-18px)",
              }}
            />

            <div
              className="
                relative
                p-5

                sm:p-8
              "
              style={{
                transformStyle:
                  "preserve-3d",
              }}
            >
              {/* TITRE */}
              <div
                className="
                  mb-5

                  sm:mb-6
                "
                style={{
                  transform:
                    "translateZ(34px)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.links}
                </p>
              </div>

              <div className="space-y-3">
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
                    className="
                      group/link
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-border/70
                      bg-surface/40
                      px-4
                      py-3.5
                      backdrop-blur-md
                      transition-all
                      duration-200

                      hover:-translate-y-0.5
                      hover:border-primary/40
                      hover:bg-surface/65

                      sm:gap-5
                      sm:px-5
                      sm:py-4
                    "
                    style={{
                      transform:
                        "translateZ(46px)",
                    }}
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        {t.linkedin}
                      </p>

                      <p
                        dir="ltr"
                        className="
                          mt-1
                          text-xs
                          text-muted

                          sm:text-sm
                        "
                      >
                        linkedin.com
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`
                        shrink-0
                        text-lg
                        text-muted
                        transition-all

                        group-hover/link:text-primary

                        ${
                          isRTL
                            ? "group-hover/link:-translate-x-1"
                            : "group-hover/link:translate-x-1"
                        }
                      `}
                    >
                      {isRTL
                        ? "↖"
                        : "↗"}
                    </span>
                  </a>
                )}

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
                    className="
                      group/link
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-border/70
                      bg-surface/40
                      px-4
                      py-3.5
                      backdrop-blur-md
                      transition-all
                      duration-200

                      hover:-translate-y-0.5
                      hover:border-primary/40
                      hover:bg-surface/65

                      sm:gap-5
                      sm:px-5
                      sm:py-4
                    "
                    style={{
                      transform:
                        "translateZ(42px)",
                    }}
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        {t.github}
                      </p>

                      <p
                        dir="ltr"
                        className="
                          mt-1
                          text-xs
                          text-muted

                          sm:text-sm
                        "
                      >
                        github.com
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`
                        shrink-0
                        text-lg
                        text-muted
                        transition-all

                        group-hover/link:text-primary

                        ${
                          isRTL
                            ? "group-hover/link:-translate-x-1"
                            : "group-hover/link:translate-x-1"
                        }
                      `}
                    >
                      {isRTL
                        ? "↖"
                        : "↗"}
                    </span>
                  </a>
                )}

                {/* CV */}
                {cvLink && (
                  <a
                    href={cvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/link
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-2xl
                      border
                      border-primary/20
                      bg-primary/[0.035]
                      px-4
                      py-3.5
                      backdrop-blur-md
                      transition-all
                      duration-200

                      hover:-translate-y-0.5
                      hover:border-primary/45
                      hover:bg-primary/[0.06]

                      sm:gap-5
                      sm:px-5
                      sm:py-4
                    "
                    style={{
                      transform:
                        "translateZ(50px)",
                    }}
                  >
                    <div>
                      <p className="font-semibold text-foreground">
                        {t.cv}
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-muted

                          sm:text-sm
                        "
                      >
                        {
                          t.cvLanguage
                        }
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`
                        shrink-0
                        text-lg
                        text-muted
                        transition-all

                        group-hover/link:text-primary

                        ${
                          isRTL
                            ? "group-hover/link:-translate-x-1"
                            : "group-hover/link:translate-x-1"
                        }
                      `}
                    >
                      {isRTL
                        ? "↖"
                        : "↗"}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer
          className="
            mt-12
            border-t
            border-border/60
            pt-6

            sm:mt-16
            sm:pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2
              text-xs
              leading-5
              text-muted

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-3
              sm:text-sm
            "
          >
            <p>
              ©{" "}
              {new Date().getFullYear()}{" "}
              {
                portfolio.identity
                  .name
              }
            </p>

            <p>
              {role}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}