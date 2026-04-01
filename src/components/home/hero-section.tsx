"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionContainer } from "@/components/layout/section-container";

export function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-[var(--line)]">
      <SectionContainer className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-14 lg:grid-cols-2 lg:py-0">
        <div className="order-2 max-w-2xl lg:order-1">
          <Reveal>
            <span className="inline-flex rounded-full bg-[#f3dfd5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Holistic Wellness Coaching
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5.5rem]">
              Live with Balance,
              <br />
              Purpose, and
              <br />
              <span className="italic text-[var(--brand)]">Radiant Health</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Nurturing women&apos;s wellness through mindful practices and
              personalized guidance for a harmonious life.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="primary" className="min-w-[200px]">
                Book a Session
              </ButtonLink>
              <ButtonLink href="/programs" variant="secondary" className="min-w-[200px]">
                Explore Programs
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative mx-auto h-[420px] w-full max-w-[720px] overflow-hidden rounded-[28px] bg-[#f1ece7] sm:h-[520px] lg:h-[760px]">
            <Image
              src="/hero-image.png"
              alt="Founder of Divinely Seeded"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1020421a] via-transparent to-transparent" />
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}