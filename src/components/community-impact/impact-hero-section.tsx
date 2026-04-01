"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function ImpactHeroSection() {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex rounded-full bg-[#f3dfd5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Our Impact Journey
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5.1rem]">
              Empowering Women&apos;s
              <br />
              <span className="text-[var(--brand)]">Mental &amp; Physical</span>
              <br />
              Well-being
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Our mission is to cultivate resilience through community-driven
              wellness initiatives. We provide safe spaces for diverse women to
              grow, heal, and thrive together.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
              <div className="border-l-4 border-[var(--brand)] pl-4">
                <div className="text-5xl font-bold text-[var(--foreground)]">
                  2,500+
                </div>
                <p className="mt-2 text-lg text-[var(--muted)]">Women Reached</p>
              </div>

              <div className="border-l-4 border-[var(--brand)] pl-4">
                <div className="text-5xl font-bold text-[var(--foreground)]">
                  150+
                </div>
                <p className="mt-2 text-lg text-[var(--muted)]">Workshops Held</p>
              </div>

              <div className="border-l-4 border-[var(--brand)] pl-4">
                <div className="text-5xl font-bold text-[var(--foreground)]">
                  $500k+
                </div>
                <p className="mt-2 text-lg text-[var(--muted)]">Grant Funding</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="relative overflow-hidden rounded-[30px] shadow-[0_18px_45px_rgba(16,32,66,0.08)]">
              <Image
                src="/our-impact-journey.png"
                alt="Community impact"
                width={900}
                height={980}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-8 left-8 flex items-center gap-4 rounded-[28px] bg-white px-6 py-5 shadow-[0_12px_35px_rgba(16,32,66,0.12)]">
              <div className="flex -space-x-3">
                <div className="h-14 w-14 rounded-full bg-[#cfd8e6]" />
                <div className="h-14 w-14 rounded-full bg-[#9aa8c1]" />
                <div className="h-14 w-14 rounded-full bg-[#6f7f9d]" />
              </div>
              <p className="text-xl font-semibold text-[var(--foreground)]">
                Join our growing community
              </p>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}