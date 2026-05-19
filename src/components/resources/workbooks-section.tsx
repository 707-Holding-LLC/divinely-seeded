"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { urlFor } from "@/sanity/lib/image";
import type { ResourcesPageData } from "@/sanity/lib/types";

type WorkbooksSectionProps = {
  page?: ResourcesPageData | null;
};

const fallbackDownloads = [
  {
    title: "Happiness Through Self-Care",
    subtitle: "How To Love Yourself More",
    description:
      "A 10-chapter guide to building confidence, silencing your inner critic, and designing a life rooted in self-love — using CBT, mindfulness, and practical daily habits.",
    tag: "Mindset & Self-Love",
    pages: "54 pages",
    href: "/downloads/happiness-through-self-care.pdf",
    ctaLabel: "Download Free PDF",
    coverPath: "/happiness.png",
  },
  {
    title: "Mindful Eating Reset",
    subtitle: "The Gut Replenishing Guide — 5 Day Reset",
    description:
      "An interactive 5-day gut reset packed with a full meal plan, supplement guide, alkaline eating principles, and daily rituals to re-energize your body from the inside out.",
    tag: "Nutrition & Gut Health",
    pages: "12 pages",
    href: "/downloads/mindful-eating-reset.pdf",
    ctaLabel: "Download Free PDF",
    coverPath: "/minful-reset.png",
  },
];

export function WorkbooksSection({ page }: WorkbooksSectionProps) {
  const downloads = page?.downloads?.length ? page.downloads : fallbackDownloads;

  return (
    <section className="pb-24">
      <SectionContainer className="max-w-[1600px]">
        <div className="mb-12">
          <Reveal>
            <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              {page?.downloadsSectionEyebrow || "Digital Downloads"}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              {page?.downloadsSectionTitle || "Free Wellness Guides"}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
              {page?.downloadsSectionIntro ||
                "Two resources created to support your journey — download, read, and return to them whenever you need a reset."}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {downloads.map((item, index) => {
            const coverUrl =
              "cover" in item && item.cover
                ? urlFor(item.cover).width(1200).height(675).url()
                : "coverPath" in item
                ? item.coverPath
                : "";

            return (
              <Reveal key={`${item.title}-${index}`} delay={0.1 + index * 0.08}>
                <article className="group flex flex-col overflow-hidden rounded-[28px] border border-[#ebedf2] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#f0f5f0]">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--brand)] to-[#0e8a74]">
                      <div className="text-center text-white">
                        <FileText className="mx-auto h-14 w-14 opacity-60" />
                        <p className="mt-3 text-sm font-semibold uppercase tracking-widest opacity-70">
                          PDF Guide
                        </p>
                      </div>
                    </div>

                    {coverUrl && (
                      <Image
                        src={coverUrl}
                        alt={("coverAlt" in item && item.coverAlt) || item.title || "Resource cover"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex rounded-full bg-[#eef7f4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                        {item.tag}
                      </span>
                      <span className="text-sm text-[var(--muted)]">
                        {item.pages}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-snug text-[var(--foreground)] sm:text-3xl">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-1 text-base font-medium italic text-[var(--brand)]">
                        {item.subtitle}
                      </p>
                    )}

                    <p className="mt-4 flex-1 text-base leading-8 text-[var(--muted)]">
                      {item.description}
                    </p>

                    <a
                      href={item.href || "#"}
                      download
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--brand)] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
                    >
                      <FileText className="h-5 w-5" />
                      {item.ctaLabel || "Download Free PDF"}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}