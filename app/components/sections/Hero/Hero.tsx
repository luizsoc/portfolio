"use client";

import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { profile } from "@/app/lib/content/profile";
import { HeroCodeAccent } from "./HeroCodeAccent";

export function Hero() {
  const { dictionary } = useLanguage();

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center border-b border-border last:border-b-0"
    >
      <Container>
        <RevealOnScroll className="flex max-w-2xl flex-col gap-6">
          <HeroCodeAccent />

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold text-foreground md:text-6xl">
              {profile.name}
            </h1>
            <p className="text-xl text-accent-strong md:text-2xl">
              {dictionary.hero.role}
            </p>
            <p className="font-mono text-sm tracking-wide text-foreground-muted">
              Python · Java · C#
            </p>
          </div>

          <p className="text-base leading-relaxed text-foreground-muted md:text-lg">
            {dictionary.hero.tagline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#projects" variant="primary">
              {dictionary.hero.viewProjects}
            </Button>
            <Button href="#contact" variant="secondary">
              {dictionary.hero.contactMe}
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
