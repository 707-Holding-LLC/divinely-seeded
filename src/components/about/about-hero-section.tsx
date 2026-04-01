"use client";

import Image from "next/image";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function AboutHeroSection() {
  return (
    <section className="overflow-hidden py-20 lg:py-24">
      <SectionContainer className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex rounded-full bg-[#f3dfd5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Our Founder
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5.2rem]">
              Meet Nnenna
              <br />
              Animashaun
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-2xl italic text-[#7d8f78] sm:text-[2rem]">
              Integrative Health &amp; Wellness Coach
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Divinely Seeded was born from Nnenna Animashaun&apos;s personal
              healing journey. Her mission is to empower women to rediscover
              their vitality and purpose through a holistic approach to wellness.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#journey" variant="primary" className="min-w-[170px]">
                My Journey
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="min-w-[170px] bg-[#e9ece7] border-[#e9ece7] hover:border-[var(--brand)]">
                Learn More
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="relative mx-auto w-full max-w-[720px]">
            <div className="rounded-[30px] bg-[#ecece6] p-4 shadow-[0_20px_50px_rgba(16,32,66,0.08)]">
              <div className="relative aspect-[4/4.25] overflow-hidden rounded-[26px] bg-white">
                <Image
                  src="/headshot.jpeg"
                  alt="Nnenna Animashaun"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}