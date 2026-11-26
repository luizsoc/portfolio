"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Badge } from "@/app/components/ui/Badge";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { EDUCATION, EXPERIENCES } from "@/app/lib/content/experience";

export function Experience() {
  const { dictionary } = useLanguage();
  const { experience } = dictionary;

  return (
    <section id="experience" className="border-b border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            label={dictionary.nav.experience}
            title={experience.title}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <h3 className="mb-2 flex items-center gap-2 font-mono text-xs text-foreground-subtle">
            <Briefcase aria-hidden="true" size={13} />
            {experience.workTitle}
          </h3>
        </RevealOnScroll>

        <ol>
          {EXPERIENCES.map((item, index) => {
            const content = experience.items[item.id];

            return (
              <li key={item.id} className="border-b border-border">
                <RevealOnScroll
                  delay={index * 0.05}
                  className="grid gap-4 py-8 md:grid-cols-[13rem_1fr] md:gap-10"
                >
                  <div className="flex flex-col gap-1 font-mono text-xs">
                    <p className="text-foreground-muted">{content.period}</p>
                    <p className="text-foreground-subtle">
                      {content.location} · {content.model}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                        {item.company}
                      </h4>
                      <p className="text-sm text-foreground-muted">{content.role}</p>
                    </div>

                    <ul className="flex max-w-3xl flex-col gap-2.5">
                      {content.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-px w-3 shrink-0 bg-foreground-subtle"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <li key={tech}>
                          <Badge>{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              </li>
            );
          })}
        </ol>

        <RevealOnScroll>
          <h3 className="mt-16 mb-2 flex items-center gap-2 font-mono text-xs text-foreground-subtle">
            <GraduationCap aria-hidden="true" size={14} />
            {experience.educationTitle}
          </h3>
        </RevealOnScroll>

        <ol>
          {EDUCATION.map((item) => {
            const content = experience.education[item.id];

            return (
              <li key={item.id} className="border-b border-border">
                <RevealOnScroll className="grid gap-4 py-8 md:grid-cols-[13rem_1fr] md:gap-10">
                  <p className="font-mono text-xs text-foreground-muted">{content.detail}</p>
                  <div>
                    <h4 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                      {item.institution}
                    </h4>
                    <p className="text-sm text-foreground-muted">{content.degree}</p>
                  </div>
                </RevealOnScroll>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
