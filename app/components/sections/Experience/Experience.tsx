"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Card } from "@/app/components/ui/Card";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { EXPERIENCES } from "@/app/lib/content/experience";
import { getNavIndex } from "@/app/lib/navigation";

export function Experience() {
  const { dictionary } = useLanguage();

  return (
    <section
      id="experience"
      className="border-b border-border py-24 last:border-b-0"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            index={getNavIndex("experience")}
            title={dictionary.experience.title}
            description={dictionary.experience.description}
          />
        </RevealOnScroll>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((experience, index) => {
            const content = dictionary.experience.items[experience.id];

            return (
              <RevealOnScroll key={experience.id} delay={index * 0.06}>
                <Card className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.company}
                      </h3>
                      <p className="text-accent-strong">{content.role}</p>
                    </div>
                    <p className="font-mono text-xs text-foreground-subtle">
                      {content.period}
                    </p>
                  </div>

                  <p className="font-mono text-xs tracking-wide text-foreground-muted uppercase">
                    {content.location} · {content.model}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {content.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-foreground-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
