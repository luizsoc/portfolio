"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Badge } from "@/app/components/ui/Badge";
import { Card } from "@/app/components/ui/Card";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { SKILL_CATEGORIES } from "@/app/lib/content/skills";
import { getNavIndex } from "@/app/lib/navigation";

export function Skills() {
  const { dictionary } = useLanguage();

  return (
    <section
      id="skills"
      className="border-b border-border py-24 last:border-b-0"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            index={getNavIndex("skills")}
            title={dictionary.skills.title}
            description={dictionary.skills.description}
          />
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-6">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <RevealOnScroll
              key={category.id}
              delay={categoryIndex * 0.06}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Card className="flex h-full flex-col gap-4">
                <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
                  {dictionary.skills.categories[category.id]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
