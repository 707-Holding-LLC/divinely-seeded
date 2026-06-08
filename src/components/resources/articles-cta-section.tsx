"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { ResourcesPageData } from "@/sanity/lib/types";

type ArticlesCtaSectionProps = {
  page?: ResourcesPageData | null;
};

export function ArticlesCtaSection({ page }: ArticlesCtaSectionProps) {
  const cta = page?.articlesCta;

  const eyebrow = cta?.eyebrow || "Wellness Articles";
  const title =
    cta?.title || "Read grounded reflections for intentional wellness.";
  const body =
    cta?.body ||
    "Explore Divinely Seeded articles on wellness, faith, provider-informed conversations, and everyday practices for living with more clarity and intention.";
  const ctaLabel = cta?.ctaLabel || "Read Wellness Articles";
  const ctaLink = cta?.ctaLink || "/resources/articles";

  return (
    <section className="pb-24">
      <SectionContainer className="max-w-[1600px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-[#ebedf2] bg-white px-8 py-10 shadow-[0_12px_35px_rgba(16,32,66,0.05)] sm:px-10 lg:px-12">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#eef7f4]" />
            <div className="absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-[#f7efe6]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef7f4] text-[var(--brand)]">
                <BookOpenText className="h-8 w-8" />
              </div>

              <div>
                <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                  {eyebrow}
                </span>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl">
                  {title}
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  {body}
                </p>
              </div>

              <div className="lg:justify-self-end">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
                >
                  {ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}