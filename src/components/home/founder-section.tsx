"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionContainer } from "@/components/layout/section-container";

export function FounderSection() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--soft-peach)] py-10">
      <SectionContainer className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Reveal className="flex items-center gap-5">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-sm">
            <Image
              src="/headshot.jpeg"
              alt="Founder headshot"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Meet Nnenna
            </h3>
            <p className="text-base text-[var(--muted)]">
              Founder &amp; Holistic Wellness Coach
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ButtonLink href="/about" variant="secondary" className="bg-[var(--navy)] text-white hover:border-[var(--navy)] hover:bg-[#13224b] hover:text-white">
            Meet the Founder
          </ButtonLink>
        </Reveal>
      </SectionContainer>
    </section>
  );
}