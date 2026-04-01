"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const partners = [
  "WellnessTrust",
  "CityGrant Fund",
  "Unity Collective",
  "Bloom Foundation",
];

export function ImpactPartnersSection() {
  return (
    <section className="py-20">
      <SectionContainer>
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#9aa3b7]">
              Trusted by our partners
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-4xl font-semibold text-[#9a9a9a]">
            {partners.map((partner) => (
              <span key={partner} className="opacity-80">
                {partner}
              </span>
            ))}
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}