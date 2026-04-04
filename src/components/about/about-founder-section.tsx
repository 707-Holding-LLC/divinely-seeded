"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function AboutFounderSection() {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex rounded-full bg-[#f3dfd5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Meet the Founder
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5rem]">
              Nnenna
              <br />
              Animashaun
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-2xl italic text-[#7d8f78]">
              Founder · Certified Integrative Health & Wellness Coach
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Nnenna’s work is rooted in lived experience, healing, and service.
              Through Divinely Seeded, she helps women restore energy, create
              healthier rhythms, and reconnect with purpose through holistic
              support that honors mind, body, and spirit.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="relative mx-auto w-full max-w-[720px]">
            <div className="rounded-[30px] bg-[#ecece6] p-4 shadow-[0_20px_50px_rgba(16,32,66,0.08)]">
              <div className="relative aspect-[4/4.3] overflow-hidden rounded-[26px] bg-white">
                <Image
                  src="/nnenna-1.png"
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