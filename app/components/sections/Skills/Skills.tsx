"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Badge } from "@/app/components/ui/Badge";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { SKILL_CATEGORIES } from "@/app/lib/content/skills";
import { cn } from "@/app/lib/utils";

// The first category (Data Engineering) is the primary focus and gets the
// wide, emphasized tile; the rest form the supporting grid.
export function Skills() {
  const { dictionary } = useLanguage();
  const { skills } = dictionary;

  return (
    <section id="skills" className="border-b border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            label={dictionary.nav.skills}
            title={skills.title}
            description={skills.description}
          />
        </RevealOnScroll>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => {
            const isPrimary = index === 0;
            const content = skills.categories[category.id];

            return (
              <RevealOnScroll
                key={category.id}
                delay={index * 0.05}
                className={cn(isPrimary && "md:col-span-2")}
              >
                <div
                  className={cn(
                    "flex h-full flex-col gap-5 rounded-xl border p-6",
                    isPrimary
                      ? "relative overflow-hidden border-border-strong bg-surface-raised sm:p-8"
                      : "border-border bg-surface"
                  )}
                >
                  {isPrimary && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"
                    />
                  )}
                  <div className="flex flex-col gap-1.5">
                    <h3
                      className={cn(
                        "font-semibold tracking-[-0.02em] text-foreground",
                        isPrimary ? "text-xl" : "text-base"
                      )}
                    >
                      {content.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground-muted">
                      {content.description}
                    </p>
                  </div>

                  <ul className="mt-auto flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <Badge
                          className={cn(
                            isPrimary && "px-2.5 py-1 text-[13px] text-foreground"
                          )}
                        >
                          {skill}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
