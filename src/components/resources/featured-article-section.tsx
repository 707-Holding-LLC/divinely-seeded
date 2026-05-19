"use client";

import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { ResourcesPageData } from "@/sanity/lib/types";

type FeaturedArticleSectionProps = {
  page?: ResourcesPageData | null;
};

export function FeaturedArticleSection({ page }: FeaturedArticleSectionProps) {
  const article = page?.featuredArticle;

  if (!article) return null;

  return (
    <section className="pb-24">
      <SectionContainer className="max-w-[1600px]">
        <div className="mb-12">
          <Reveal>
            <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              {page?.featuredArticleSectionEyebrow || "Featured In"}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              {page?.featuredArticleSectionTitle || "As Seen On"}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <a
            href={article.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[2rem] border border-[#ebedf2] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3e0] text-lg font-bold text-orange-600">
                    {article.sourceInitial || "K"}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[var(--foreground)]">
                      {article.sourceName || "KOR Shots Journal"}
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                      {article.publishDate || "February 8, 2021"}
                    </p>
                  </div>

                  <span className="ml-auto inline-flex rounded-full bg-[#eef7f4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                    {article.badge || "Feature"}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold leading-snug text-[var(--foreground)] sm:text-3xl lg:text-4xl">
                    {article.title || "Featured Article"}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                    {article.description}
                  </p>
                </div>

                {article.quote && (
                  <blockquote className="mt-8 rounded-2xl border-l-4 border-[var(--brand)] bg-[#f4faf8] px-6 py-5">
                    <p className="text-base italic leading-8 text-[var(--foreground)]">
                      “{article.quote.replace(/^["“]+|["”]+$/g, "").trim()}”
                    </p>
                    {article.quoteAttribution && (
                      <footer className="mt-3 text-sm font-semibold text-[var(--brand)]">
                        {article.quoteAttribution}
                      </footer>
                    )}
                  </blockquote>
                )}

                <div className="mt-8 flex items-center gap-2 text-base font-semibold text-[var(--brand)] transition group-hover:translate-x-1">
                  {article.ctaLabel || "Read the Full Article"}
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              <div className="hidden items-center justify-center bg-gradient-to-br from-[#e8f5f0] to-[#c8ead8] p-12 lg:flex">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="text-4xl font-black tracking-tight text-[var(--brand)]">
                      {article.decorativeLabel || "KOR"}
                    </span>
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#2d7a5f]">
                    {article.decorativeSubtext || "Organic Wellness Shots"}
                  </p>
                  <p className="mt-2 max-w-50 text-sm leading-7 text-[#4a8c72]">
                    {article.decorativeDescription ||
                      "Cold-pressed in small batches from locally sourced produce"}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      </SectionContainer>
    </section>
  );
}