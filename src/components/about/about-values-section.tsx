"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const values = [
  {
    title: "Integrity",
    description:
      "Guided by authenticity, compassion, and care in every client journey.",
  },
  {
    title: "Balance",
    description:
      "Creating harmony between body, mind, spirit, and daily life.",
  },
  {
    title: "Growth",
    description:
      "Encouraging sustainable transformation through steady self-evolution.",
  },
  {
    title: "Divine Alignment",
    description:
      "Honoring the connection between wellness, purpose, and inner peace.",
  },
];

export function AboutValuesSection() {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full bg-[#f3dfd5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                Mission, Vision & Values
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5rem]">
                Rooted in Wellness.
                <br />
                Guided by Purpose.
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Divinely Seeded exists to inspire and support women in nurturing
                their divine potential through holistic wellness, self-awareness,
                and lifestyle transformation.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Our vision is radiant health, emotional balance, and a deeper
                connection to purpose — rooted in divine alignment.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[30px] shadow-[0_18px_45px_rgba(16,32,66,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/beautiful-nnenna-2.jpeg"
                  alt="Divinely Seeded mission and values"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={0.08 + index * 0.08}>
              <article className="rounded-[28px] bg-white p-8 shadow-[0_10px_30px_rgba(16,32,66,0.05)]">
                <div className="mb-5 text-2xl text-[var(--brand)]">✦</div>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}