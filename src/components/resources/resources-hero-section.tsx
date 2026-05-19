"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { urlFor } from "@/sanity/lib/image";
import type { ResourcesPageData } from "@/sanity/lib/types";

type ResourcesHeroSectionProps = {
  page?: ResourcesPageData | null;
};

export function ResourcesHeroSection({ page }: ResourcesHeroSectionProps) {
  const imageUrl = page?.heroImage
    ? urlFor(page.heroImage).width(1400).height(1050).url()
    : "/6-week-program.png";

  return (
    <section className="py-20 lg:py-24">
      <SectionContainer className="max-w-[1600px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                {page?.heroEyebrow || "Curation for the Soul"}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl font-bold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-[6rem]">
                {page?.heroTitleLineOne || "Wellness"}
                <br />
                {page?.heroTitleLineTwo || "Resources"}
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                {page?.heroBody ||
                  "Thoughtfully designed tools, guides, and featured readings to help you cultivate intentionality, nourish your body, and live from the inside out."}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[32px] shadow-[0_18px_45px_rgba(16,32,66,0.08)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={imageUrl}
                  alt={page?.heroImageAlt || "Featured wellness resource"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}