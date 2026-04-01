"use client";

import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function ImpactCtaSection() {
  return (
    <section className="pb-16 lg:pb-20">
      <SectionContainer>
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-[var(--brand)] px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
            <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[#d9570f]/50" />
            <div className="absolute -right-8 top-8 h-36 w-36 rounded-full bg-[#ff9a58]/35" />

            <div className="relative mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                Ready to make an impact?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl">
                Whether you want to join a program, become a partner, or support
                our mission with a donation, there is a place for you here.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-[#fff1e8] px-8 py-4 text-lg font-semibold text-[#d9570f] shadow-sm transition hover:bg-white hover:text-[var(--brand-dark)]"
                >
                  Partner With Us
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
                >
                  Join a Workshop
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}