"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const differentiators = [
  {
    title: "Holistic and spiritually grounded",
    description:
      "We integrate wellness coaching with mindfulness and divine alignment.",
  },
  {
    title: "Personalized support",
    description:
      "Each client journey is tailored, not templated.",
  },
  {
    title: "Sustainable lifestyle change",
    description:
      "We focus on long-term habits, not temporary fixes.",
  },
  {
    title: "Compassionate and measurable",
    description:
      "Growth is supported through reflection, self-assessment, and real life wellness shifts.",
  },
];

export function AboutDifferentiatorsSection() {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              What Makes Divinely Seeded Different
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Our work is designed to be deeply human, spiritually grounded, and
              practical enough to support real, sustainable transformation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={0.1 + index * 0.06}>
              <article className="rounded-[26px] border border-[#ebedf2] bg-white p-8 shadow-[0_10px_30px_rgba(16,32,66,0.04)]">
                <h3 className="text-2xl font-semibold leading-tight text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}