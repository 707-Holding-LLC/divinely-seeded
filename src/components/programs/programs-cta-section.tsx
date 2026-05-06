"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const CALENDLY_URL = "https://calendly.com/divinelyseeded";

export function ProgramsCtaSection() {
  return (
    <section className="pb-16 lg:pb-20">
      <SectionContainer>
        <Reveal>
          <div className="overflow-hidden rounded-[36px] bg-[#2b130b] px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Ready to plant the seeds of your transformation?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
                Schedule a discovery call to find the program that resonates
                with your current season of life.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[250px] items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
                >
                  Book a Discovery Call
                </Link>

                <ButtonLink href="/resources" variant="dark" className="min-w-[250px]">
                  Download Resources
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}