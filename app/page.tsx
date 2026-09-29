import { Hero } from "@/app/components/sections/Hero/Hero";
import { About } from "@/app/components/sections/About/About";
import { Experience } from "@/app/components/sections/Experience/Experience";
import { ProjectsSection } from "@/app/components/sections/Projects/ProjectsSection";
import { Skills } from "@/app/components/sections/Skills/Skills";
import { Contact } from "@/app/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ProjectsSection />
      <Skills />
      <Contact />
    </>
  );
}
