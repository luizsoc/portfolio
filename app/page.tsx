import { Hero } from "@/app/components/sections/Hero/Hero";
import { About } from "@/app/components/sections/About/About";
import { Experience } from "@/app/components/sections/Experience/Experience";
import { ProjectsSection } from "@/app/components/sections/Projects/ProjectsSection";
import { Skills } from "@/app/components/sections/Skills/Skills";
import { PlaceholderSection } from "@/app/components/sections/PlaceholderSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <Skills />
      <PlaceholderSection id="contact" />
    </>
  );
}
