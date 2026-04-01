"use client";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function AboutCtaSection() {
  return (
    <section className="pb-16 lg:pb-20">
      <SectionContainer>
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-[#2b130b] px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
            <div className="absolute right-8 top-8 text-8xl text-white/15 lg:right-12 lg:top-10">
              ✿
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Start your wellness journey with support that sees the whole you
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
                Whether you’re ready for coaching, exploring programs, or simply
                looking for a more aligned path forward, Divinely Seeded is here
                to support your next step.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink href="/contact" variant="primary" className="min-w-[240px]">
                  Book a Session
                </ButtonLink>

                <ButtonLink href="/programs" variant="dark" className="min-w-[240px]">
                  Explore Programs
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}