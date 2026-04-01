"use client";

import { impactTestimonials } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function VoicesOfImpactSection() {
  return (
    <section className="bg-[#fbf2ed] py-24">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-5xl text-[#f1b093]">”</div>
            <h2 className="mt-3 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              Voices of Impact
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-2">
          {impactTestimonials.map((item, index) => (
            <Reveal key={item.name} delay={0.08 + index * 0.08}>
              <article className="rounded-[24px] bg-white p-8 shadow-[0_10px_30px_rgba(16,32,66,0.05)]">
                <p className="text-lg italic leading-8 text-[var(--foreground)]">
                  “{item.quote}”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#c9d1df]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#8d97b1]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}