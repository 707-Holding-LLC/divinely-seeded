"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { ProgramsPageData } from "@/sanity/lib/types";

type ClientJourneySectionProps = {
  page?: ProgramsPageData | null;
};

export function ClientJourneySection({ page }: ClientJourneySectionProps) {
  const steps = page?.journeySteps || [];

  if (!steps.length) return null;

  return (
    <section className="pb-24">
      <SectionContainer>
        <Reveal>
          <div className="rounded-[36px] bg-[#fbf2ed] p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                {page?.clientJourneyEyebrow || "Your Path to Wellness"}
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
                {page?.journeyTitle || "How the Client Journey Works"}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                From your first conversation to long-term maintenance - here is
                what to expect when you work with Divinely Seeded.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={`${step.stepLabel}-${step.stepTitle}-${index}`} delay={0.06 + index * 0.06}>
                  <div className="rounded-2xl bg-white p-7 shadow-sm">
                    <span className="text-3xl font-black tracking-tight text-[var(--brand)] opacity-40">
                      {step.stepLabel || String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[var(--foreground)]">
                      {step.stepTitle}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                      {step.stepDescription}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}