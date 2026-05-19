"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionContainer } from "@/components/layout/section-container";
import { urlFor } from "@/sanity/lib/image";
import type { HomePageData } from "@/sanity/lib/types";

type HeroSectionProps = {
  page?: HomePageData | null;
};

export function HeroSection({ page }: HeroSectionProps) {
  const heroImageUrl = page?.heroImage ? urlFor(page.heroImage).width(1400).height(1600).url() : "/heronew.jpeg";

  return (
    <section className="overflow-hidden border-b border-[var(--line)]">
      <SectionContainer className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-14 lg:grid-cols-2 lg:py-0">
        <div className="order-2 max-w-2xl lg:order-1">
          <Reveal>
            <span className="inline-flex rounded-full bg-[#f3dfd5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              {page?.eyebrow || "Holistic Wellness Coaching"}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[5.5rem]">
              {page?.headlineLineOne || "Live with Balance,"}
              <br />
              {page?.headlineLineTwo || "Purpose, and"}
              <br />
              <span className="italic text-[var(--brand)]">
                {page?.headlineAccent || "Radiant Health"}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              {page?.subheadline ||
                "Nurturing women's wellness through mindful practices and personalized guidance for a harmonious life."}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={page?.primaryCtaLink || "https://calendly.com/divinelyseeded"}
                target={(page?.primaryCtaLink || "").startsWith("http") ? "_blank" : undefined}
                rel={(page?.primaryCtaLink || "").startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex min-w-[200px] items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
              >
                {page?.primaryCtaLabel || "Book a Session"}
              </a>

              <ButtonLink
                href={page?.secondaryCtaLink || "/programs"}
                variant="secondary"
                className="min-w-[200px]"
              >
                {page?.secondaryCtaLabel || "Explore Programs"}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative mx-auto h-[420px] w-full max-w-[720px] overflow-hidden rounded-[28px] bg-[#f1ece7] sm:h-[520px] lg:h-[760px]">
            <Image
              src={heroImageUrl}
              alt={page?.heroImageAlt || "Founder of Divinely Seeded"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1020421a] via-transparent to-transparent" />
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}