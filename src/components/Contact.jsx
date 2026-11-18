
"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";
import TiltCard from "@/components/effects/TiltCard";

/* =========================================================
   LYDIA PORTFOLIO — CYBER VIOLET
   SECTION CONTACT

   - Coordonnées réelles depuis portfolio.js
   - Copie de l'email
   - Liens LinkedIn, GitHub et CV
   - Cartes 3D TiltCard
   - 5 langues et RTL
   - Mode clair / sombre
   - Responsive
========================================================= */

const content = {
  fr: {
    eyebrow: "Contact & opportunités",
    title: "ÉCHANGEONS",
    subtitle: "Parlons de ce que nous pourrions construire",
    description:
      "Je suis ouverte aux opportunités professionnelles, aux projets web et aux échanges autour du numérique. Si mon profil correspond à ce que vous recherchez, parlons-en.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    availability: "Disponibilité",
    writeMe: "M’écrire",
    copyEmail: "Copier l’email",
    copied: "Email copié !",
    copyFailed: "Copie impossible",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Voir mon CV",
    cvLanguage: "CV en français",
    links: "Liens professionnels",
    footer: "Développement web Full-Stack",
  },

  en: {
    eyebrow: "Contact & opportunities",
    title: "LET’S CONNECT",
    subtitle: "Let’s talk about what we could build together",
    description:
      "I’m open to professional opportunities, web projects and conversations around digital work. If my profile matches what you’re looking for, let’s connect.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    availability: "Availability",
    writeMe: "Email me",
    copyEmail: "Copy email",
    copied: "Email copied!",
    copyFailed: "Unable to copy",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "View my CV",
    cvLanguage: "CV in French",
    links: "Professional links",
    footer: "Full-Stack Web Development",
  },

  "pt-BR": {
    eyebrow: "Contato & oportunidades",
    title: "VAMOS CONVERSAR",
    subtitle: "Vamos falar sobre o que podemos construir",
    description:
      "Estou aberta a oportunidades profissionais, projetos web e conversas sobre o universo digital. Se meu perfil corresponde ao que você procura, vamos conversar.",
    email: "Email",
    phone: "Telefone",
    location: "Localização",
    availability: "Disponibilidade",
    writeMe: "Enviar email",
    copyEmail: "Copiar email",
    copied: "Email copiado!",
    copyFailed: "Não foi possível copiar",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Ver meu CV",
    cvLanguage: "CV em francês",
    links: "Links profissionais",
    footer: "Desenvolvimento Web Full-Stack",
  },

  ja: {
    eyebrow: "お問い合わせ & 機会",
    title: "つながりましょう",
    subtitle: "一緒に何ができるか、お話ししましょう",
    description:
      "仕事の機会、Webプロジェクト、デジタル分野での交流を歓迎しています。私のプロフィールが求めているものと合いましたら、ぜひご連絡ください。",
    email: "メール",
    phone: "電話",
    location: "所在地",
    availability: "対応状況",
    writeMe: "メールを送る",
    copyEmail: "メールアドレスをコピー",
    copied: "コピーしました！",
    copyFailed: "コピーできませんでした",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "履歴書を見る",
    cvLanguage: "フランス語の履歴書",
    links: "プロフェッショナルリンク",
    footer: "フルスタックWeb開発",
  },

  ar: {
    eyebrow: "التواصل والفرص",
    title: "لنتواصل",
    subtitle: "لنتحدث عمّا يمكننا بناؤه معًا",
    description:
      "أنا منفتحة على الفرص المهنية ومشاريع الويب والنقاشات حول المجال الرقمي. إذا كان ملفي يناسب ما تبحث عنه، يسعدني التواصل معك.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    availability: "التوفر",
    writeMe: "راسلني",
    copyEmail: "نسخ البريد الإلكتروني",
    copied: "تم نسخ البريد الإلكتروني!",
    copyFailed: "تعذر النسخ",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "عرض سيرتي الذاتية",
    cvLanguage: "السيرة الذاتية بالفرنسية",
    links: "الروابط المهنية",
    footer: "تطوير الويب المتكامل",
  },
};

/* =========================================================
   UTILITAIRES
========================================================= */

function translate(value, language, fallback = "") {
  if (typeof value === "string") return value;
  return value?.[language] ?? value?.fr ?? fallback;
}

/* =========================================================
   ICÔNES SVG
========================================================= */

function ContactIcon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.9a2 2 0 0 1-.6 1.8L7.2 10a16 16 0 0 0 6.8 6.8l1.6-1.8a2 2 0 0 1 1.8-.6l2.9.5A2 2 0 0 1 22 16.9Z" />
        </svg>
      );

    case "map":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );

    case "copy":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      );

    case "file":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6M8 13h8M8 17h6" />
        </svg>
      );

    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-12-2 16" />
        </svg>
      );

    default:
      return null;
  }
}

/* =========================================================
   BLOC D'INFORMATION
========================================================= */

function InfoItem({ icon, label, children }) {
  return (
    <div
      className="min-w-0"
      style={{ transform: "translateZ(36px)" }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-xl
            border border-primary/25
            bg-primary/[0.08]
            text-primary
          "
        >
          <ContactIcon name={icon} size={18} />
        </span>

        <p
          className="
            text-xs font-bold uppercase
            tracking-[0.13em] text-muted
          "
        >
          {label}
        </p>
      </div>

      <div
        className="
          mt-3 min-w-0
          text-sm font-semibold
          leading-6 text-foreground
          sm:text-base
        "
      >
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   LIEN PROFESSIONNEL
========================================================= */

function ProfessionalLink({
  href,
  title,
  subtitle,
  icon,
  isRTL,
  featured = false,
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group/link relative
        flex items-center
        justify-between gap-4
        rounded-2xl border
        px-4 py-4
        backdrop-blur-md
        transition-all duration-300

        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-primary/10

        sm:px-5

        ${
          featured
            ? "border-primary/35 bg-primary/[0.08] hover:border-primary/65"
            : "border-border/70 bg-surface/40 hover:border-primary/45 hover:bg-primary/[0.055]"
        }
      `}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex min-w-0 items-center gap-4">
        <span
          className={`
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-xl border
            text-primary

            ${
              featured
                ? "border-primary/35 bg-primary/15"
                : "border-primary/20 bg-primary/[0.07]"
            }
          `}
        >
          <ContactIcon name={icon} size={21} />
        </span>

        <div className="min-w-0">
          <p
            className="
              font-bold text-foreground
              transition-colors duration-200
              group-hover/link:text-primary
            "
          >
            {title}
          </p>

          {subtitle && (
            <p
              className="
                mt-1 text-xs text-muted
                sm:text-sm
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <span
        aria-hidden="true"
        className={`
          shrink-0 text-primary
          transition-transform duration-200

          ${
            isRTL
              ? "group-hover/link:-translate-x-1"
              : "group-hover/link:translate-x-1"
          }
        `}
      >
        <ContactIcon name="arrow" size={19} />
      </span>
    </a>
  );
}

/* =========================================================
   SECTION CONTACT
========================================================= */

export default function Contact() {
  const { language, isRTL } = useLanguage();

  const t = content[language] || content.fr;

  const [copyStatus, setCopyStatus] = useState("idle");
  const copyTimeoutRef = useRef(null);

  const identity = portfolio.identity || {};
  const links = portfolio.links || {};

  const email = identity.email || "";
  const phone = identity.phone || "";

  const location = translate(identity.location, language);
  const availability = translate(portfolio.availability, language);
  const role = translate(identity.role, language);

  const cvLink =
    typeof links.cv === "string"
      ? links.cv
      : links.cv?.[language] || links.cv?.fr || "";

  const phoneHref = phone
    ? `tel:${phone.replace(/[^\d+]/g, "")}`
    : "";

  /* =======================================================
     NETTOYAGE DU TIMER
  ======================================================== */

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  /* =======================================================
     COPIE DE L'EMAIL
  ======================================================== */

  async function handleCopyEmail() {
    if (!email) return;

    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }

    copyTimeoutRef.current = setTimeout(() => {
      setCopyStatus("idle");
      copyTimeoutRef.current = null;
    }, 2200);
  }

  const copyLabel =
    copyStatus === "success"
      ? t.copied
      : copyStatus === "error"
        ? t.copyFailed
        : t.copyEmail;

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        border-t border-border/60
        bg-surface/20
        px-4 py-20
        sm:px-6
        lg:py-24
      "
    >
      {/* =====================================================
          AMBIANCE CYBER VIOLET
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute -left-40 top-[10%]
            h-[30rem] w-[30rem]
            rounded-full
            opacity-[0.09] blur-[110px]
            dark:opacity-[0.15]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        <div
          className="
            absolute -right-40 bottom-[-8rem]
            h-[32rem] w-[32rem]
            rounded-full
            opacity-[0.07] blur-[120px]
            dark:opacity-[0.12]
          "
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            EN-TÊTE
        ================================================== */}

        <div>
          <div className="text-center">
            <p
              className="
                text-xs font-bold uppercase
                tracking-[0.2em] text-primary
                sm:text-sm
              "
            >
              {t.eyebrow}
            </p>

            <h2
              className="
                mx-auto mt-4
                text-3xl font-extrabold
                uppercase leading-[1.1]
                tracking-[-0.04em]
                text-foreground
                sm:text-5xl
                lg:text-[3.4rem]
              "
            >
              {t.title}
              <span className="text-primary">.</span>
            </h2>

            <div
              aria-hidden="true"
              className="
                mx-auto mt-5
                h-[3px] w-24 rounded-full
                bg-gradient-to-r
                from-primary via-secondary to-primary
                opacity-80
              "
            />
          </div>

          <div className="mt-8 max-w-2xl text-start">
            <p
              className="
                text-lg font-semibold
                leading-snug text-foreground
                sm:text-xl
              "
            >
              {t.subtitle}
            </p>

            <p
              className="
                mt-3 text-sm leading-7
                text-muted sm:text-base
              "
            >
              {t.description}
            </p>
          </div>
        </div>

        {/* =================================================
            GRILLE PRINCIPALE
        ================================================== */}

        <div
          className="
            mt-12 grid items-stretch gap-6
            lg:mt-14
            lg:grid-cols-[1.12fr_0.88fr]
            lg:gap-7
          "
        >
          {/* ===============================================
              CARTE 1 — COORDONNÉES
          ================================================ */}

          <TiltCard
            intensity="subtle"
            glare={true}
            className="
              group relative
              h-full
              rounded-[1.7rem]
              border border-primary/25
              bg-background/70
              shadow-xl shadow-black/10
              backdrop-blur-xl
              transition-[border-color,box-shadow]
              duration-300

              hover:border-primary/55
              hover:shadow-2xl
              hover:shadow-primary/10
            "
          >
            {/* COUCHE ARRIÈRE */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-3
                rounded-[1.25rem]
                border border-primary/10
                bg-primary/[0.015]
              "
              style={{ transform: "translateZ(-22px)" }}
            />

            {/* HALO */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -top-24 -end-16
                h-60 w-60 rounded-full
                bg-primary/[0.08]
                blur-[75px]
              "
            />

            {/* LIGNE LUMINEUSE */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-x-8 top-0 h-px
              "
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent)",
                transform: "translateZ(10px)",
              }}
            />

            {/* CONTENU */}
            <div
              className="
                relative z-10
                p-5 sm:p-8
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="
                  grid gap-x-8 gap-y-7
                  sm:grid-cols-2
                  sm:gap-y-9
                "
              >
                {/* EMAIL */}
                {email && (
                  <InfoItem icon="mail" label={t.email}>
                    <a
                      href={`mailto:${email}`}
                      dir="ltr"
                      className="
                        inline-block max-w-full
                        break-all
                        transition-colors
                        hover:text-primary
                      "
                    >
                      {email}
                    </a>
                  </InfoItem>
                )}

                {/* TÉLÉPHONE */}
                {phone && (
                  <InfoItem icon="phone" label={t.phone}>
                    <a
                      href={phoneHref}
                      dir="ltr"
                      className="
                        inline-block
                        transition-colors
                        hover:text-primary
                      "
                    >
                      {phone}
                    </a>
                  </InfoItem>
                )}

                {/* LOCALISATION */}
                {location && (
                  <InfoItem icon="map" label={t.location}>
                    {location}
                  </InfoItem>
                )}

                {/* DISPONIBILITÉ */}
                {availability && (
                  <InfoItem
                    icon="check"
                    label={t.availability}
                  >
                    <span className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="
                          mt-2 h-2 w-2 shrink-0
                          rounded-full bg-success
                          shadow-[0_0_12px_var(--success)]
                        "
                      />
                      <span>{availability}</span>
                    </span>
                  </InfoItem>
                )}
              </div>

              {/* ACTIONS */}
              {email && (
                <div
                  className="
                    mt-9 flex flex-col gap-3
                    border-t border-border/60
                    pt-7
                    sm:flex-row sm:flex-wrap
                  "
                  style={{
                    transform: "translateZ(48px)",
                  }}
                >
                  <a
                    href={`mailto:${email}`}
                    className="
                      inline-flex
                      w-full items-center
                      justify-center gap-2.5
                      rounded-xl bg-primary
                      px-6 py-3.5
                      text-sm font-bold
                      text-white
                      shadow-lg shadow-primary/20
                      transition-all duration-200

                      hover:-translate-y-1
                      hover:bg-primary-hover
                      hover:shadow-primary/30

                      sm:w-auto
                    "
                  >
                    <ContactIcon name="mail" size={18} />
                    {t.writeMe}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`
                      inline-flex
                      w-full items-center
                      justify-center gap-2.5
                      rounded-xl
                      border px-6 py-3.5
                      text-sm font-semibold
                      transition-all duration-200

                      hover:-translate-y-1

                      sm:w-auto

                      ${
                        copyStatus === "success"
                          ? "border-success/40 bg-success/10 text-success"
                          : "border-primary/30 bg-surface/50 text-foreground hover:border-primary/55 hover:bg-primary/10"
                      }
                    `}
                  >
                    <ContactIcon
                      name={
                        copyStatus === "success"
                          ? "check"
                          : "copy"
                      }
                      size={18}
                    />
                    {copyLabel}
                  </button>

                  <span
                    className="sr-only"
                    aria-live="polite"
                    role="status"
                  >
                    {copyStatus !== "idle"
                      ? copyLabel
                      : ""}
                  </span>
                </div>
              )}
            </div>

            {/* ORBITE DÉCORATIVE */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute bottom-6 end-6
                h-14 w-14 rounded-full
                border border-primary/15
              "
              style={{
                transform: "translateZ(15px)",
              }}
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute bottom-10 end-10
                h-2 w-2 rounded-full
                bg-secondary
                shadow-[0_0_14px_var(--secondary)]
              "
              style={{
                transform: "translateZ(48px)",
              }}
            />
          </TiltCard>

          {/* ===============================================
              CARTE 2 — LIENS PROFESSIONNELS
          ================================================ */}

          <TiltCard
            intensity="subtle"
            glare={false}
            className="
              group relative
              h-full rounded-[1.7rem]
              border border-border/70
              bg-background/65
              shadow-xl shadow-black/10
              backdrop-blur-xl
              transition-[border-color,box-shadow]
              duration-300

              hover:border-primary/40
              hover:shadow-2xl
              hover:shadow-primary/10
            "
          >
            {/* COUCHE ARRIÈRE */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-3
                rounded-[1.25rem]
                border border-primary/10
              "
              style={{
                transform: "translateZ(-18px)",
              }}
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -bottom-24 -end-20
                h-60 w-60 rounded-full
                bg-secondary/[0.055]
                blur-[80px]
              "
            />

            <div
              className="relative z-10 p-5 sm:p-8"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* TITRE */}
              <div
                className="mb-6 flex items-center gap-3"
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                <span
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    border border-primary/25
                    bg-primary/[0.08]
                    text-primary
                  "
                >
                  <ContactIcon name="code" size={20} />
                </span>

                <h3
                  className="
                    text-xs font-bold
                    uppercase tracking-[0.16em]
                    text-primary
                    sm:text-sm
                  "
                >
                  {t.links}
                </h3>
              </div>

              {/* LIENS */}
              <div
                className="space-y-3"
                style={{
                  transform: "translateZ(40px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <ProfessionalLink
                  href={links.linkedin}
                  title={t.linkedin}
                  subtitle="linkedin.com"
                  icon="code"
                  isRTL={isRTL}
                />

                <ProfessionalLink
                  href={links.github}
                  title={t.github}
                  subtitle="github.com"
                  icon="code"
                  isRTL={isRTL}
                />

                <ProfessionalLink
                  href={cvLink}
                  title={t.cv}
                  subtitle={t.cvLanguage}
                  icon="file"
                  isRTL={isRTL}
                  featured
                />
              </div>
            </div>
          </TiltCard>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <footer
          className="
            mt-14
            border-t border-border/60
            pt-7
            sm:mt-16 sm:pt-8
          "
        >
          <div
            className="
              flex flex-col gap-3
              text-xs text-muted
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:text-sm
            "
          >
            <p>
              © {new Date().getFullYear()}{" "}
              {identity.name}
            </p>

            <p>{role || t.footer}</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
