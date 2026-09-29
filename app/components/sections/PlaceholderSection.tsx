"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { getNavIndex } from "@/app/lib/navigation";
import type { NavId } from "@/app/types";

export function PlaceholderSection({ id }: { id: NavId }) {
  const { dictionary } = useLanguage();

  return (
    <section
      id={id}
      className="min-h-screen border-b border-border py-24 last:border-b-0"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            index={getNavIndex(id)}
            title={dictionary.nav[id]}
            description={dictionary.comingSoon}
          />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
