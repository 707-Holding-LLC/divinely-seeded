"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import type { HomePageData, HomeFeaturedProgramItem } from "@/sanity/lib/types";

type FeaturedProgramsSectionProps = {
  page?: HomePageData | null;
};

const HOMEPAGE_PROGRAM_IMAGE_FALLBACKS: Record<string, string> = {
  "metabolic wellness discovery session": "/beautiful-nnenna-3.jpeg",
  seed: "/beautiful-nnenna-3.jpeg",
  "12-week regenerative wellness coaching": "/holistic-group.png",
  bloom: "/holistic-group.png",
};

function getFallbackImage(title?: string) {
  if (!title) return "/hero-image.png";
  const normalized = title.trim().toLowerCase();
  return HOMEPAGE_PROGRAM_IMAGE_FALLBACKS[normalized] || "/hero-image.png";
}

function getHomepageCardTitle(item: HomeFeaturedProgramItem) {
  const overrideTitle = item.cardTitleOverride?.trim();
  if (overrideTitle) return overrideTitle;

  const baseTitle = item.program?.title?.trim();
  if (!baseTitle) return "Program";

  const normalized = baseTitle.toLowerCase();

  if (normalized === "seed") return "Metabolic Wellness Discovery Session";
  if (normalized === "bloom") return "12-Week Regenerative Wellness Coaching";

  return baseTitle;
}

function getHomepageCardDescription(item: HomeFeaturedProgramItem) {
  return (
    item.cardDescriptionOverride?.trim() ||
    item.program?.description?.trim() ||
    "Explore this program for more details."
  );
}

function getHomepageBadge(item: HomeFeaturedProgramItem) {
  const explicitBadge = item.badge?.trim();
  if (explicitBadge) return explicitBadge;

  const normalizedTitle = item.program?.title?.trim().toLowerCase();

  if (
    normalizedTitle === "metabolic wellness discovery session" ||
    normalizedTitle === "seed"
  ) {
    return "Start Here";
  }

  if (
    normalizedTitle === "12-week regenerative wellness coaching" ||
    normalizedTitle === "bloom"
  ) {
    return "Most Popular";
  }

  return item.program?.eyebrow?.trim() || null;
}

function getHomepageCardLink(item: HomeFeaturedProgramItem) {
  return item.ctaLink?.trim() || "/programs";
}

function getHomepageCardCta(item: HomeFeaturedProgramItem) {
  return item.ctaLabel?.trim() || "Learn More";
}

function getHomepageImageUrl(item: HomeFeaturedProgramItem) {
  if (item.cardImage) {
    return urlFor(item.cardImage).width(1200).height(700).url();
  }

  if (item.program?.programImage) {
    return urlFor(item.program.programImage).width(1200).height(700).url();
  }

  return getFallbackImage(item.program?.title);
}

function getHomepageImageAlt(item: HomeFeaturedProgramItem, title: string) {
  return item.cardImageAlt?.trim() || title;
}

export function FeaturedProgramsSection({ page }: FeaturedProgramsSectionProps) {
  const programs = (page?.featuredPrograms || []).filter(
    (item): item is HomeFeaturedProgramItem => Boolean(item?.program)
  );

  if (!programs.length) return null;

  return (
    <section className="py-24">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              {page?.featuredProgramsTitle || "Featured Programs"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              {page?.featuredProgramsIntro ||
                "Tailored coaching experiences designed to support your journey towards a more vibrant you."}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {programs.map((item, index) => {
            const title = getHomepageCardTitle(item);
            const description = getHomepageCardDescription(item);
            const badge = getHomepageBadge(item);
            const href = getHomepageCardLink(item);
            const cta = getHomepageCardCta(item);
            const imageUrl = getHomepageImageUrl(item);
            const imageAlt = getHomepageImageAlt(item, title);
            const key = item.program?._id || `${title}-${index}`;

            return (
              <Reveal key={key} delay={0.1 + index * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden rounded-[24px] border border-[#e7e7ea] bg-white shadow-sm"
                >
                  <div className="relative h-[280px] w-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                        {title}
                      </h3>

                      {badge && (
                        <span className="rounded-full bg-[#fff1e7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand)]">
                          {badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                      {description}
                    </p>

                    <Link
                      href={href}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--brand)] transition hover:translate-x-1"
                    >
                      {cta} →
                    </Link>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}