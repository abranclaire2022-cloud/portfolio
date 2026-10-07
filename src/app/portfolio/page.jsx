import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ProfileExtras from "@/components/ProfileExtras";
import Contact from "@/components/Contact";

import AmbientBackground from "@/components/effects/AmbientBackground";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* =====================================================
          FOND 3D GLOBAL
      ====================================================== */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0"
      >
        <AmbientBackground />
      </div>

      {/* =====================================================
          CONTENU DU PORTFOLIO
      ====================================================== */}
      <div className="relative z-10">
        <Navbar />

        <Hero />

        <TechStack />

        <Projects />

        <Experience />

        <Education />

        <ProfileExtras />

        <Contact />
      </div>
    </main>
  );
}