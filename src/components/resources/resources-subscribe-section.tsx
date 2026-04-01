"use client";

import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function ResourcesSubscribeSection() {
  return (
    <section className="pb-16 lg:pb-20">
      <SectionContainer className="max-w-[1600px]">
        <Reveal>
          <div className="border-t border-[var(--line)] pt-20">
            <div className="mx-auto max-w-4xl rounded-[32px] bg-[#fbf2ed] px-8 py-14 text-center shadow-[0_10px_30px_rgba(16,32,66,0.05)] sm:px-12">
              <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
                Looking for deeper support?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Start with a free guide, explore Nnenna’s featured wellness
                insights, or book a session for more personalized support.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[var(--brand)] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[var(--brand-dark)]"
                >
                  Book a Session
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d9dde7] bg-white px-10 py-4 text-lg font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}