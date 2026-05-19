"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { urlFor } from "@/sanity/lib/image";
import type { HomePageData } from "@/sanity/lib/types";

type MissionSectionProps = {
  page?: HomePageData | null;
};

export function MissionSection({ page }: MissionSectionProps) {
  const missionImageUrl = page?.missionImage
    ? urlFor(page.missionImage).width(1200).height(900).url()
    : "/hero-image.png";

  const pillars = page?.missionPillars?.length
    ? page.missionPillars
    : [
        { title: "Balance", description: "Finding equilibrium in every day." },
        { title: "Purpose", description: "Aligning with your true calling." },
        { title: "Radiance", description: "Nurturing your natural glow." },
      ];

  return (
    <section className="bg-white py-24">
      <SectionContainer className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-sm">
              <Image
                src={missionImageUrl}
                alt={page?.missionImageAlt || "Our mission visual"}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center justify-center rounded-[28px] bg-[var(--brand)] text-4xl text-white shadow-lg">
              ✦
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              {page?.missionTitle || "Our Mission"}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-3xl text-lg italic leading-8 text-[var(--muted)] sm:text-xl">
              “{page?.missionQuote || "Helping women achieve holistic wellness through personalized guidance and mindful practices."}”
            </p>
          </Reveal>

          {(page?.missionBody || []).map((paragraph, index) => (
            <Reveal key={index} delay={0.2 + index * 0.08}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {pillars.map((value, index) => (
              <Reveal key={`${value.title}-${index}`} delay={0.25 + index * 0.08}>
                <div>
                  <div className="mb-4 text-2xl text-[var(--brand)]">✦</div>
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}