"use client";

import Image from "next/image";
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
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
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

          <RevealOnScroll
            delay={0.15}
            className="w-full max-w-sm shrink-0 lg:max-w-md"
          >
            <Image
              src="/images/hero-computer.svg"
              alt=""
              aria-hidden="true"
              width={2200}
              height={1466}
              priority
              className="h-auto w-full"
            />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
