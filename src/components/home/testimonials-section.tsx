"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { HomePageData } from "@/sanity/lib/types";

type TestimonialsSectionProps = {
  page?: HomePageData | null;
};

function getInitials(name?: string) {
  if (!name) return "DS";
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection({ page }: TestimonialsSectionProps) {
  const testimonials = page?.homeTestimonials || [];

  return (
    <section className="bg-[var(--navy)] py-24 text-white">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-4xl text-[var(--brand)]">”</div>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
              {page?.testimonialsTitle || "Client Stories"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#b7c1da] sm:text-lg">
              {page?.testimonialsIntro ||
                "Real journeys from women who have rediscovered their vitality and peace through our programs."}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((story, index) => (
            <Reveal key={story._id} delay={0.1 + index * 0.08}>
              <article className="rounded-[24px] border border-[#273354] bg-[rgba(255,255,255,0.04)] p-7 backdrop-blur-sm">
                <div className="mb-5 text-sm tracking-wide text-[var(--brand)]">
                  ★★★★★
                </div>

                <p className="min-h-[160px] text-lg leading-8 text-white/90">
                  “{story.quote}”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#425174] text-sm font-semibold text-white">
                    {getInitials(story.name)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm uppercase tracking-wide text-[#9eabc8]">
                      {story.role}
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