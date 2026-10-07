"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolio from "@/data/portfolio";

import TiltCard from "@/components/effects/TiltCard";

const content = {
  fr: {
    eyebrow: "Profil complémentaire",
    title: "LANGUES & COMPÉTENCES",

    subtitle: "Au-delà de la technique",

    description:
      "Langues, qualités professionnelles, outils et engagements complètent mon profil et ma manière de travailler.",

    languages: "Langues",
    softSkills: "Compétences humaines",
    certification: "Certification",
    officeTools: "Outils bureautiques",
    engagement: "Engagement & réalisation",
  },

  en: {
    eyebrow: "Additional profile",
    title: "LANGUAGES & SKILLS",

    subtitle: "Beyond technical skills",

    description:
      "Languages, professional qualities, tools and personal involvement complement my profile and the way I work.",

    languages: "Languages",
    softSkills: "Professional skills",
    certification: "Certification",
    officeTools: "Office tools",
    engagement: "Engagement & achievement",
  },

  "pt-BR": {
    eyebrow: "Perfil complementar",
    title: "IDIOMAS & COMPETÊNCIAS",

    subtitle: "Além da técnica",

    description:
      "Idiomas, qualidades profissionais, ferramentas e experiências complementam meu perfil e minha forma de trabalhar.",

    languages: "Idiomas",
    softSkills: "Competências profissionais",
    certification: "Certificação",
    officeTools: "Ferramentas de escritório",
    engagement: "Engajamento & realização",
  },

  ja: {
    eyebrow: "補足プロフィール",
    title: "言語 & スキル",

    subtitle: "技術力だけではない強み",

    description:
      "語学力、仕事への姿勢、使用ツール、さまざまな活動経験が、私のプロフィールと働き方を形づくっています。",

    languages: "言語",
    softSkills: "ヒューマンスキル",
    certification: "認定資格",
    officeTools: "オフィスツール",
    engagement: "活動・実績",
  },

  ar: {
    eyebrow: "الملف التكميلي",
    title: "اللغات والمهارات",

    subtitle: "ما وراء المهارات التقنية",

    description:
      "تكمل اللغات والمهارات المهنية والأدوات والمشاركات المختلفة ملفي وطريقتي في العمل.",

    languages: "اللغات",
    softSkills: "المهارات المهنية",
    certification: "الشهادة",
    officeTools: "الأدوات المكتبية",
    engagement: "المشاركة والإنجاز",
  },
};

export default function ProfileExtras() {
  const {
    language,
    isRTL,
  } = useLanguage();

  const t =
    content[language] ||
    content.fr;

  const extras =
    portfolio.profileExtras;

  if (!extras) {
    return null;
  }

  const languages =
    extras.languages || [];

  const softSkills =
    extras.softSkills || [];

  const certifications =
    extras.certifications || [];

  const officeTools =
    extras.officeTools || [];

  const engagement =
    extras.engagement || [];

  const hasContent =
    languages.length > 0 ||
    softSkills.length > 0 ||
    certifications.length > 0 ||
    officeTools.length > 0 ||
    engagement.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <section
      id="profile-extras"
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
        <div
          className="
            absolute
            -left-40
            top-24
            h-[28rem]
            w-[28rem]
            rounded-full
            opacity-[0.045]
            blur-[110px]

            dark:opacity-[0.09]
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />

        <div
          className="
            absolute
            -right-40
            bottom-[-8rem]
            h-[30rem]
            w-[30rem]
            rounded-full
            opacity-[0.035]
            blur-[120px]

            dark:opacity-[0.07]
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
          <div className="text-center">
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
            LANGUES + COMPÉTENCES HUMAINES
        ====================================================== */}
        <div
          className="
            mt-10
            grid
            gap-5

            sm:mt-12
            sm:gap-6

            lg:mt-14
            lg:grid-cols-2
            lg:gap-7
          "
        >
          {/* =================================================
              LANGUES
          ================================================== */}
          {languages.length > 0 && (
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
                    "translateZ(-20px)",
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
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-primary
                  "
                  style={{
                    transform:
                      "translateZ(32px)",
                  }}
                >
                  {t.languages}
                </p>

                <div
                  className="
                    mt-5
                    space-y-3

                    sm:mt-6
                    sm:space-y-4
                  "
                >
                  {languages.map(
                    (item) => {
                      const name =
                        item.name?.[
                          language
                        ] ||
                        item.name?.fr ||
                        "";

                      const level =
                        item.level?.[
                          language
                        ] ||
                        item.level?.fr ||
                        "";

                      return (
                        <div
                          key={item.id}
                          className="
                            flex
                            flex-col
                            items-start
                            gap-2.5
                            rounded-2xl
                            border
                            border-border/60
                            bg-surface/35
                            px-4
                            py-3.5

                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            sm:gap-6
                            sm:px-5
                            sm:py-4
                          "
                          style={{
                            transform:
                              "translateZ(42px)",
                          }}
                        >
                          <p
                            className="
                              font-semibold
                              text-foreground
                            "
                          >
                            {name}
                          </p>

                          <span
                            className="
                              rounded-full
                              border
                              border-primary/20
                              bg-primary/[0.035]
                              px-3
                              py-1
                              text-xs
                              font-medium
                              text-primary

                              sm:text-sm
                            "
                          >
                            {level}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-5
                  end-5
                  h-10
                  w-10
                  rounded-full
                  border
                  border-primary/10

                  sm:bottom-7
                  sm:end-7
                  sm:h-14
                  sm:w-14
                "
                style={{
                  transform:
                    "translateZ(14px)",
                }}
              />
            </TiltCard>
          )}

          {/* =================================================
              COMPÉTENCES HUMAINES
          ================================================== */}
          {softSkills.length > 0 && (
            <TiltCard
              intensity="subtle"
              glare={false}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-border/70
                bg-background/50
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
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-primary
                  "
                  style={{
                    transform:
                      "translateZ(32px)",
                  }}
                >
                  {t.softSkills}
                </p>

                <div
                  className={`
                    mt-5
                    flex
                    flex-wrap
                    gap-2

                    sm:mt-6
                    sm:gap-3

                    ${
                      isRTL
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                  style={{
                    transform:
                      "translateZ(46px)",
                  }}
                >
                  {softSkills.map(
                    (skill) => {
                      const label =
                        skill?.[
                          language
                        ] ||
                        skill?.fr ||
                        "";

                      return (
                        <span
                          key={label}
                          className="
                            rounded-xl
                            border
                            border-border/70
                            bg-surface/50
                            px-3
                            py-2
                            text-xs
                            font-medium
                            text-muted
                            backdrop-blur-md
                            transition-all
                            duration-200

                            group-hover:border-primary/20
                            group-hover:text-foreground

                            sm:px-4
                            sm:py-2.5
                            sm:text-sm
                          "
                        >
                          {label}
                        </span>
                      );
                    }
                  )}
                </div>
              </div>
            </TiltCard>
          )}
        </div>

        {/* =====================================================
            CERTIFICATION + OUTILS BUREAUTIQUES
        ====================================================== */}
        {(certifications.length >
          0 ||
          officeTools.length >
            0) && (
          <div
            className="
              mt-5
              grid
              items-start
              gap-5

              sm:mt-6
              sm:gap-6

              lg:mt-7
              lg:grid-cols-2
              lg:gap-7
            "
          >
            {/* ===============================================
                CERTIFICATION
            ================================================ */}
            {certifications.length >
              0 && (
              <TiltCard
                intensity="subtle"
                glare={false}
                className="
                  relative
                  self-start
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
                  className="
                    relative
                    p-5

                    sm:p-7
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-primary
                    "
                  >
                    {
                      t.certification
                    }
                  </p>

                  <div
                    className="
                      mt-4
                      space-y-3

                      sm:mt-5
                    "
                  >
                    {certifications.map(
                      (item) => {
                        const title =
                          item.title?.[
                            language
                          ] ||
                          item.title
                            ?.fr ||
                          "";

                        const date =
                          item.date?.[
                            language
                          ] ||
                          item.date
                            ?.fr ||
                          "";

                        return (
                          <div
                            key={
                              item.id
                            }
                            className="
                              rounded-2xl
                              border
                              border-border/60
                              bg-surface/35
                              px-4
                              py-3.5

                              sm:px-5
                              sm:py-4
                            "
                          >
                            <p
                              className="
                                text-xs
                                font-semibold
                                text-primary

                                sm:text-sm
                              "
                            >
                              {
                                item.issuer
                              }
                            </p>

                            <h3
                              className="
                                mt-1
                                text-base
                                font-bold
                                leading-snug
                                text-foreground

                                sm:text-xl
                              "
                            >
                              {title}
                            </h3>

                            {date && (
                              <p
                                className="
                                  mt-2
                                  text-xs
                                  text-muted

                                  sm:text-sm
                                "
                              >
                                {
                                  date
                                }
                              </p>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </TiltCard>
            )}

            {/* ===============================================
                OUTILS BUREAUTIQUES
            ================================================ */}
            {officeTools.length >
              0 && (
              <TiltCard
                intensity="subtle"
                glare={false}
                className="
                  relative
                  self-start
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
                  className="
                    relative
                    p-5

                    sm:p-7
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-primary
                    "
                  >
                    {
                      t.officeTools
                    }
                  </p>

                  <div
                    dir="ltr"
                    className={`
                      mt-4
                      flex
                      flex-wrap
                      gap-2

                      sm:mt-5
                      sm:gap-3

                      ${
                        isRTL
                          ? "justify-end"
                          : "justify-start"
                      }
                    `}
                  >
                    {officeTools.map(
                      (tool) => (
                        <span
                          key={tool}
                          className="
                            rounded-xl
                            border
                            border-border/70
                            bg-surface/45
                            px-3
                            py-2
                            text-xs
                            font-semibold
                            text-foreground

                            sm:px-4
                            sm:text-sm
                          "
                        >
                          {tool}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </TiltCard>
            )}
          </div>
        )}

        {/* =====================================================
            ENGAGEMENT & RÉALISATION
        ====================================================== */}
        {engagement.length > 0 && (
          <div
            className="
              mt-5

              sm:mt-6

              lg:mt-7
            "
          >
            <TiltCard
              intensity="subtle"
              glare={true}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-primary/20
                bg-background/50
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
                  border-primary/[0.07]
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
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-primary
                  "
                  style={{
                    transform:
                      "translateZ(32px)",
                  }}
                >
                  {t.engagement}
                </p>

                <div
                  className="
                    mt-4
                    space-y-4

                    sm:mt-5
                    sm:space-y-5
                  "
                >
                  {engagement.map(
                    (item) => {
                      const title =
                        item.title?.[
                          language
                        ] ||
                        item.title?.fr ||
                        "";

                      const startDate =
                        item.startDate?.[
                          language
                        ] ||
                        item.startDate
                          ?.fr ||
                        "";

                      const endDate =
                        item.endDate?.[
                          language
                        ] ||
                        item.endDate
                          ?.fr ||
                        "";

                      return (
                        <div
                          key={item.id}
                          className="
                            flex
                            flex-col
                            gap-3

                            sm:gap-4

                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                          "
                          style={{
                            transform:
                              "translateZ(42px)",
                          }}
                        >
                          <div className="max-w-3xl">
                            <h3
                              className="
                                max-w-2xl
                                text-base
                                font-bold
                                leading-[1.45]
                                text-foreground

                                sm:text-xl

                                lg:text-[1.35rem]
                              "
                            >
                              {title}
                            </h3>
                          </div>

                          {(startDate ||
                            endDate) && (
                            <span
                              className="
                                inline-flex
                                w-fit
                                shrink-0
                                rounded-full
                                border
                                border-border/60
                                bg-surface/35
                                px-3.5
                                py-2
                                text-xs
                                font-medium
                                text-muted

                                sm:px-4
                                sm:text-sm
                              "
                            >
                              {
                                startDate
                              }

                              {startDate &&
                              endDate
                                ? " — "
                                : ""}

                              {endDate}
                            </span>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-5
                  end-5
                  h-10
                  w-10
                  rounded-full
                  border
                  border-primary/10

                  sm:bottom-8
                  sm:end-8
                  sm:h-14
                  sm:w-14
                "
                style={{
                  transform:
                    "translateZ(14px)",
                }}
              />
            </TiltCard>
          </div>
        )}
      </div>
    </section>
  );
}