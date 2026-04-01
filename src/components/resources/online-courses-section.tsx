"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function OnlineCoursesSection() {
  return (
    <section className="pb-24">
      <SectionContainer className="max-w-[1600px]">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[#ebedf2] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.05)]">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10 lg:p-12">
                <span className="inline-flex rounded-full bg-[#eef7f4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                  Coming Soon
                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
                  Self-Paced Wellness Courses
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                  Nnenna is currently preparing a collection of thoughtful digital
                  wellness courses designed to help women build healthier rhythms,
                  restore balance, and deepen intentional living.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-[#8d97b1]">
                  For now, explore the free guides and featured resources already
                  available below.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/programs"
                    className="inline-flex min-w-[210px] items-center justify-center rounded-full bg-[var(--brand)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[var(--brand-dark)]"
                  >
                    Explore Programs
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d9dde7] bg-white px-8 py-4 text-base font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                  >
                    Ask About Courses
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-[420px]">
                <Image
                  src="/self-paced.png"
                  alt="Self-paced wellness courses coming soon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}