"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function AboutFounderStorySection() {
  return (
    <section className="pb-20 lg:pb-24">
      <SectionContainer className="max-w-5xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            Why Divinely Seeded Was Created
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex gap-6">
            <div className="w-1 shrink-0 rounded-full bg-[var(--brand)]" />
            <blockquote className="max-w-4xl text-3xl italic leading-[1.6] text-[var(--foreground)] sm:text-4xl">
              “Healing became personal before it ever became professional.”
            </blockquote>
          </div>
        </Reveal>

        <div className="mt-12 space-y-8">
          <Reveal delay={0.14}>
            <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Divinely Seeded was born from necessity. When conventional
              medical solutions did not bring the answers she needed, Nnenna
              began searching for natural ways to heal her body and restore
              balance in her life.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
              That personal journey eventually led her to formal training in
              integrative wellness — and to a calling much larger than herself.
              She also grew up watching her immigrant parents work tirelessly to
              build their businesses, often with limited resources, A foundation
              that shaped her commitment to resilience, opportunity, and
              empowerment.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Today, that same conviction lives at the heart of Divinely
              Seeded: helping women build healthier, more aligned lives with the
              right tools, support, and knowledge.
            </p>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}