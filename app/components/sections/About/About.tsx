"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { getNavIndex } from "@/app/lib/navigation";

export function About() {
  const { dictionary } = useLanguage();
  const { about } = dictionary;

  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            index={getNavIndex("about")}
            label={dictionary.nav.about}
            title={about.title}
          />
          <div className="flex max-w-3xl flex-col gap-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-pretty text-foreground-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
