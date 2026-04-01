"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function JourneySection() {
  return (
    <section id="journey" className="py-24 lg:py-28">
      <SectionContainer className="max-w-5xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            A Journey Toward Wholeness
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 text-lg leading-8 text-[var(--muted)] sm:text-xl">
            As a certified Integrative Health &amp; Wellness Coach, I am
            dedicated to helping women cultivate balanced, vibrant lives. But my
            passion isn&apos;t just professional — it&apos;s deeply personal.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 flex gap-6">
            <div className="w-1 shrink-0 rounded-full bg-[var(--brand)]" />
            <blockquote className="max-w-4xl text-3xl italic leading-[1.6] text-[var(--foreground)] sm:text-4xl">
              “Healing isn&apos;t just about what you eat or how you move;
              it&apos;s about the seeds you plant in your soul every day.”
            </blockquote>
          </div>
        </Reveal>

        <div className="mt-14 space-y-10">
          <Reveal delay={0.2}>
            <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
              My healing journey began when I realized that standard solutions
              weren&apos;t addressing the root of my burnout. Through years of
              study and spiritual practice, I discovered that true vitality
              requires an integrated approach that honors the connection between
              our physical bodies and our spiritual selves.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Today, I use my expertise to guide other women through the same
              transformative process. Together, we work to plant the seeds of
              wellness that will grow into a life of abundance, peace, and
              radiant health.
            </p>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}