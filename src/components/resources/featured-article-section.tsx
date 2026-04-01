"use client";

import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const KOR_URL =
  "https://korshots.com/blogs/journal/a-simple-trick-for-boosting-energy-while-intermittent-fasting";

export function FeaturedArticleSection() {
  return (
    <section className="pb-24">
      <SectionContainer className="max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-12">
          <Reveal>
            <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Featured In
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              As Seen On
            </h2>
          </Reveal>
        </div>

        {/* Article card */}
        <Reveal delay={0.1}>
          <a
            href={KOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[2rem] border border-[#ebedf2] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              {/* Left: content */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                {/* Source badge */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3e0] text-lg font-bold text-orange-600">
                    K
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--foreground)]">
                      KOR Shots Journal
                    </p>
                    <p className="text-xs text-[var(--muted)]">
                      February 8, 2021
                    </p>
                  </div>
                  <span className="ml-auto inline-flex rounded-full bg-[#eef7f4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                    Feature
                  </span>
                </div>

                {/* Title */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold leading-snug text-[var(--foreground)] sm:text-3xl lg:text-4xl">
                    10 Simple Tricks for Boosting Energy While Intermittent
                    Fasting
                  </h3>

                  <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                    Health Coach Nnenna Animashaun of Divinely Seeded is
                    featured in this KOR Shots piece on intermittent fasting —
                    sharing her signature morning tonic ritual and guidance on
                    how women should approach fasting differently based on their
                    hormonal cycle.
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="mt-8 rounded-2xl border-l-4 border-[var(--brand)] bg-[#f4faf8] px-6 py-5">
                  <p className="text-base italic leading-8 text-[var(--foreground)]">
                    &quot;Consuming a tonic of apple cider vinegar, lemon, manuka
                    honey, ginger water &amp; cinnamon at the start of your fast
                    will stimulate the digestive juices in your gut and give you
                    the energy boost you need all day!&quot;
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-[var(--brand)]">
                    — Nnenna Animashaun, Health Coach · Divinely Seeded
                  </footer>
                </blockquote>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-base font-semibold text-[var(--brand)] transition group-hover:translate-x-1">
                  Read the Full Article
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              {/* Right: decorative panel */}
              <div className="hidden items-center justify-center bg-gradient-to-br from-[#e8f5f0] to-[#c8ead8] p-12 lg:flex">
                <div className="text-center">
                  {/* KOR-style visual stand-in */}
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="text-4xl font-black tracking-tight text-[var(--brand)]">
                      KOR
                    </span>
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#2d7a5f]">
                    Organic Wellness Shots
                  </p>
                  <p className="mt-2 max-w-50 text-sm leading-7 text-[#4a8c72]">
                    Cold-pressed in small batches from locally sourced produce
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