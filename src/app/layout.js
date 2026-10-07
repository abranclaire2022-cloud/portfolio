import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "BILE Abran Claire Lydia | Développeuse Web Full-Stack";

const siteDescription =
  "Portfolio de BILE Abran Claire Lydia, développeuse web full-stack à Abidjan : projets, compétences techniques, expériences et parcours académique.";

export const metadata = {
  title: siteTitle,

  description: siteDescription,

  applicationName:
    "Portfolio — BILE Abran Claire Lydia",

  authors: [
    {
      name: "BILE Abran Claire Lydia",
    },
  ],

  creator: "BILE Abran Claire Lydia",

  keywords: [
    "BILE Abran Claire Lydia",
    "Développeuse Web Full-Stack",
    "Full-Stack Web Developer",
    "Développement web",
    "React",
    "Next.js",
    "Laravel",
    "PHP",
    "MySQL",
    "Abidjan",
    "Côte d'Ivoire",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "fr_FR",
    siteName:
      "Portfolio — BILE Abran Claire Lydia",
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="fr"
      dir="ltr"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.className} ${geistMono.variable}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}