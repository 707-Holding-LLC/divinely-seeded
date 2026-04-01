"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function AboutLeadershipSection() {
  return (
    <section className="pb-20 lg:pb-24">
      <SectionContainer>
        <Reveal>
          <div className="rounded-[32px] bg-[#102042] px-8 py-12 text-white sm:px-12 lg:px-16">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
              Leadership with Depth
            </span>

            <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
              Built with compassion and discipline
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/85 sm:text-xl">
              Nnenna’s work extends beyond coaching alone. She also leads other
              mission-driven ventures and brings a broader background spanning
              wellness, healthcare, entrepreneurship, and community-centered
              leadership. That multidisciplinary perspective strengthens the
              foundation of Divinely Seeded and reinforces the care, discipline,
              and integrity behind the brand.
            </p>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}