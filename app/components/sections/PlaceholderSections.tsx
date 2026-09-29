"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { NAV_ITEMS } from "@/app/lib/navigation";
import type { NavId } from "@/app/types";

const PLACEHOLDER_IDS: NavId[] = ["projects", "about", "experience", "contact"];

export function PlaceholderSections() {
  const { dictionary } = useLanguage();
  const items = NAV_ITEMS.filter((item) => PLACEHOLDER_IDS.includes(item.id));

  return (
    <>
      {items.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className="min-h-screen border-b border-border py-24 last:border-b-0"
        >
          <Container>
            <RevealOnScroll>
              <SectionHeading
                index={item.index}
                title={dictionary.nav[item.id]}
                description={dictionary.comingSoon}
              />
            </RevealOnScroll>
          </Container>
        </section>
      ))}
    </>
  );
}
