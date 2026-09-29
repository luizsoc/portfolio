"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { getNavIndex } from "@/app/lib/navigation";

export function About() {
  const { dictionary } = useLanguage();

  return (
    <section
      id="about"
      className="border-b border-border py-24 last:border-b-0"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading index={getNavIndex("about")} title={dictionary.about.title} />
          <p className="max-w-2xl text-base leading-relaxed text-foreground-muted md:text-lg">
            {dictionary.about.paragraph}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
