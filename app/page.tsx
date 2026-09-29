import { Hero } from "@/app/components/sections/Hero/Hero";
import { PlaceholderSection } from "@/app/components/sections/PlaceholderSection";
import { ProjectsSection } from "@/app/components/sections/Projects/ProjectsSection";
import { Skills } from "@/app/components/sections/Skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <PlaceholderSection id="about" />
      <PlaceholderSection id="experience" />
      <ProjectsSection />
      <Skills />
      <PlaceholderSection id="contact" />
    </>
  );
}
