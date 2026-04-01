"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const philosophyCards = [
  {
    icon: "✿",
    title: "Lifestyle Transformation",
    description:
      "Moving beyond quick fixes to sustainable, daily habits that nourish both body and mind.",
  },
  {
    icon: "✦",
    title: "Spiritual Alignment",
    description:
      "Connecting with your inner purpose and faith to find the strength for transformation.",
  },
  {
    icon: "♡",
    title: "Balanced Living",
    description:
      "Creating harmony between your health goals and the beautiful chaos of daily life.",
  },
];

export function PhilosophySection() {
  return (
    <section className="bg-[#eef0ea] py-24 lg:py-28">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              The Philosophy
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              We believe that true health is a divine gift. Our approach centers
              on lifestyle transformation and spiritual alignment to create
              lasting change.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {philosophyCards.map((card, index) => (
            <Reveal key={card.title} delay={0.08 + index * 0.08}>
              <article className="rounded-[28px] bg-white p-9 shadow-[0_10px_35px_rgba(16,32,66,0.06)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7e9e0] text-2xl text-[var(--brand)]">
                  {card.icon}
                </div>

                <h3 className="mt-8 text-3xl font-semibold leading-tight text-[var(--foreground)]">
                  {card.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}