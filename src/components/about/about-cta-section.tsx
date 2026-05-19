"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { AboutPageData } from "@/sanity/lib/types";

type AboutCtaSectionProps = {
  page?: AboutPageData | null;
};

export function AboutCtaSection({ page }: AboutCtaSectionProps) {
  const primaryLink = page?.primaryCtaLink || "https://calendly.com/divinelyseeded";
  const secondaryLink = page?.secondaryCtaLink || "/programs";

  const isExternalPrimary = primaryLink.startsWith("http");

  return (
    <section className="pb-16 lg:pb-20">
      <SectionContainer>
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-[#2b130b] px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
            <div className="absolute right-8 top-8 text-8xl text-white/15 lg:right-12 lg:top-10">
              ✿
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {page?.ctaTitle ||
                  "Start your wellness journey with support that sees the whole you"}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
                {page?.ctaBody ||
                  "Whether you’re ready for coaching, exploring programs, or simply looking for a more aligned path forward, Divinely Seeded is here to support your next step."}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {isExternalPrimary ? (
                  <Link
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-[240px] items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
                  >
                    {page?.primaryCtaLabel || "Book a Session"}
                  </Link>
                ) : (
                  <ButtonLink href={primaryLink} className="min-w-[240px]">
                    {page?.primaryCtaLabel || "Book a Session"}
                  </ButtonLink>
                )}

                <ButtonLink href={secondaryLink} variant="dark" className="min-w-[240px]">
                  {page?.secondaryCtaLabel || "Explore Programs"}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}