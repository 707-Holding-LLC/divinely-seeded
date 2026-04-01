"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function ProgramsHeroSection() {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer>
        <Reveal>
          <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
            Transformative Journeys
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5.2rem]">
            Our Programs
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            Nurturing transformation through curated wellness experiences.
            Discover a path tailored to your unique spiritual and physical
            journey.
          </p>
        </Reveal>
      </SectionContainer>
    </section>
  );
}