import Header from "./components/Header/Header";
import { AboutSection } from "./components/AboutSection";
import { AcademicSection } from "./components/AcademicSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main
      className="
      h-screen 
      overflow-y-auto 
      snap-mandatory 
      snap-y 
      scroll-smooth
      pt-[4.5rem]
    "
    >
      <Header />
      <div className="snap-start">
        <HeroSection />
      </div>
      <div className="snap-start" id="experiences">
        <AboutSection />
      </div>
      <div className="snap-start" id="academic">
        <AcademicSection />
      </div>
      <div className="snap-start" id="projects">
        <ProjectsSection />
      </div>
      <div className="snap-start" id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
