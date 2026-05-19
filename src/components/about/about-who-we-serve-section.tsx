"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { AboutPageData } from "@/sanity/lib/types";

type AboutWhoWeServeSectionProps = {
  page?: AboutPageData | null;
};

const fallbackAudience = [
  "Women seeking holistic healing",
  "Women navigating stress and burnout",
  "Women pursuing emotional balance and sustainable wellness",
  "Women managing demanding lifestyles who want support that fits real life",
];

export function AboutWhoWeServeSection({
  page,
}: AboutWhoWeServeSectionProps) {
  const audience =
    page?.whoWeServeItems?.length ? page.whoWeServeItems : fallbackAudience;

  return (
    <section className="bg-[#fbf2ed] py-20 lg:py-24">
      <SectionContainer>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              {page?.whoWeServeTitle || "Who We Serve"}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              {page?.whoWeServeIntro ||
                "Divinely Seeded is designed for women who want a more sustainable, compassionate, and whole-person approach to wellness."}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {audience.map((item, index) => (
            <Reveal key={`${item}-${index}`} delay={0.1 + index * 0.06}>
              <div className="rounded-[24px] bg-white px-7 py-6 text-lg leading-8 text-[var(--foreground)] shadow-[0_10px_30px_rgba(16,32,66,0.04)]">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}