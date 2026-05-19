"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { ProgramsPageData } from "@/sanity/lib/types";

type ProgramsHeroSectionProps = {
  page?: ProgramsPageData | null;
};

export function ProgramsHeroSection({ page }: ProgramsHeroSectionProps) {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer>
        <Reveal>
          <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
            {page?.eyebrow || "Wellness Coaching Packages"}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5.2rem]">
            {page?.title || "Support for Sustainable Lifestyle Transformation"}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 text-base font-medium text-[var(--muted)]">
            {page?.intro ||
              "Founded by Nnenna Animashaun - Triple-certified through the Institute for Integrative Nutrition (Health Coach, Gut Health, Women's Hormone Health) with 18+ years of federal health program leadership."}
          </p>
        </Reveal>

        {page?.introHighlight && (
          <Reveal delay={0.16}>
            <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[#fbf2ed] px-8 py-7">
              <p className="text-lg leading-8 text-[var(--foreground)]">
                {page.introHighlight}
              </p>
            </div>
          </Reveal>
        )}

        {(page?.packagesTitle || page?.packagesIntro) && (
          <Reveal delay={0.2}>
            <div className="mt-12 border-t border-[var(--line)] pt-10">
              <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                {page?.packagesTitle || "Wellness Coaching, Rooted in Lifestyle Support"}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                {page?.packagesIntro ||
                  "Your body is not a project to fix - it is a system to nourish, understand, and support. Our packages are designed to help you feel more confident, prepared, and consistent as you explore or navigate provider-led metabolic, regenerative, or peptide-based wellness care."}
              </p>
            </div>
          </Reveal>
        )}
      </SectionContainer>
    </section>
  );
}