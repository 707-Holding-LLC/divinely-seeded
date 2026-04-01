"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const credentials = [
  "Certified Integrative Nutrition Health Coach",
  "Integrative Nutrition Gut Health Certification",
  "Women’s Hormone Health Certification",
  "Background in Behavioral Health, Mind-Body Medicine, and Wellness Education",
];

const approach = [
  "Listen deeply",
  "Assess holistically",
  "Create a realistic plan",
  "Support lasting change",
];

export function AboutCredentialsSection() {
  return (
    <section className="bg-[#eef0ea] py-20 lg:py-24">
      <SectionContainer className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              A Holistic Approach, Grounded in Training
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Divinely Seeded blends evidence-based wellness coaching with
              mindfulness, spiritual reflection, and practical lifestyle
              transformation. The work is designed to support sustainable change,
              not temporary fixes.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4">
            {credentials.map((item, index) => (
              <Reveal key={item} delay={0.12 + index * 0.05}>
                <div className="rounded-2xl bg-white px-6 py-5 text-base leading-7 text-[var(--foreground)] shadow-sm">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(16,32,66,0.05)]">
              <span className="inline-flex rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand)]">
                Our Method
              </span>

              <h3 className="mt-6 text-3xl font-semibold text-[var(--foreground)]">
                How the work unfolds
              </h3>

              <div className="mt-8 space-y-5">
                {approach.map((step, index) => (
                  <Reveal key={step} delay={0.1 + index * 0.06}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7e9e0] text-sm font-bold text-[var(--brand)]">
                        {index + 1}
                      </div>
                      <p className="text-lg text-[var(--foreground)]">{step}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}