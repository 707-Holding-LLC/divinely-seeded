"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionContainer } from "@/components/layout/section-container";
import { urlFor } from "@/sanity/lib/image";
import type { HomePageData } from "@/sanity/lib/types";

type FounderSectionProps = {
  page?: HomePageData | null;
};

export function FounderSection({ page }: FounderSectionProps) {
  const founderStripImageUrl = page?.founderStripImage
    ? urlFor(page.founderStripImage).width(300).height(300).url()
    : "/headshot.jpeg";

  return (
    <section className="border-y border-[var(--line)] bg-[var(--soft-peach)] py-10">
      <SectionContainer className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Reveal className="flex items-center gap-5">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-sm">
            <Image
              src={founderStripImageUrl}
              alt={page?.founderStripImageAlt || "Founder headshot"}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              {page?.founderStripName || "Meet Nnenna"}
            </h3>
            <p className="text-base text-[var(--muted)]">
              {page?.founderStripRole || "Founder & Holistic Wellness Coach"}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ButtonLink
            href={page?.founderStripCtaLink || "/about"}
            variant="secondary"
            className="bg-[var(--navy)] text-white hover:border-[var(--navy)] hover:bg-[#13224b] hover:text-white"
          >
            {page?.founderStripCtaLabel || "Meet the Founder"}
          </ButtonLink>
        </Reveal>
      </SectionContainer>
    </section>
  );
}