"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

// ── Update these href values to the real hosted PDF URLs / Paystack links
// when Nnenna publishes them for sale or free download.
const downloads = [
  {
    title: "Happiness Through Self-Care",
    subtitle: "How To Love Yourself More",
    description:
      "A 10-chapter guide to building confidence, silencing your inner critic, and designing a life rooted in self-love — using CBT, mindfulness, and practical daily habits.",
    tag: "Mindset & Self-Love",
    pages: "54 pages",
    href: "/downloads/happiness-through-self-care.pdf",
    cover: "/resource-cover-selfcare.png", // replace with real cover image
  },
  {
    title: "Mindful Eating Reset",
    subtitle: "The Gut Replenishing Guide — 5 Day Reset",
    description:
      "An interactive 5-day gut reset packed with a full meal plan, supplement guide, alkaline eating principles, and daily rituals to re-energize your body from the inside out.",
    tag: "Nutrition & Gut Health",
    pages: "12 pages",
    href: "/downloads/mindful-eating-reset.pdf",
    cover: "/resource-cover-gutreset.png", // replace with real cover image
  },
];

export function WorkbooksSection() {
  return (
    <section className="pb-24">
      <SectionContainer className="max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-12">
          <Reveal>
            <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Digital Downloads
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              Free Wellness Guides
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Two resources created to support your journey — download, read,
              and return to them whenever you need a reset.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {downloads.map((item, index) => (
            <Reveal key={item.title} delay={0.1 + index * 0.08}>
              <article className="group flex flex-col overflow-hidden rounded-[28px] border border-[#ebedf2] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Cover image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#f0f5f0]">
                  {/* Fallback gradient cover shown until real image is added */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--brand)] to-[#0e8a74]">
                    <div className="text-center text-white">
                      <FileText className="mx-auto h-14 w-14 opacity-60" />
                      <p className="mt-3 text-sm font-semibold uppercase tracking-widest opacity-70">
                        PDF Guide
                      </p>
                    </div>
                  </div>
                  {/* Uncomment once real cover images exist:
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  */}
                </div>

                {/* Content */}
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

                  <p className="mt-1 text-base font-medium italic text-[var(--brand)]">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 flex-1 text-base leading-8 text-[var(--muted)]">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    download
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--brand)] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
                  >
                    <FileText className="h-5 w-5" />
                    Download Free PDF
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}