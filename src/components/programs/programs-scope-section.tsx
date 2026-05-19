"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { ProgramsPageData } from "@/sanity/lib/types";

type ScopeSectionProps = {
  page?: ProgramsPageData | null;
};

function normalizeLines(value?: string | string[]) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.map((item) => item.trim()).filter(Boolean);
  }

  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ScopeSection({ page }: ScopeSectionProps) {
  const left = page?.scopeItems?.[0];
  const right = page?.scopeItems?.[1];

  const weSupport = normalizeLines(left?.description);
  const medicalOnly = normalizeLines(right?.description);

  return (
    <section className="pb-24">
      <SectionContainer>
        <Reveal>
          <div className="rounded-[36px] border border-[#e8ddd4] bg-white p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                {page?.scopeEyebrow || "Scope of Practice"}
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
                {page?.scopeTitle || "What We Support"}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                {page?.scopeIntro ||
                  "Divinely Seeded provides health and wellness coaching, education, and lifestyle support. We do not diagnose, treat, prescribe, inject, dispense, or manage medications. Coaching services are not a substitute for medical care."}
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl bg-[#f4faf8] p-8">
                <h3 className="font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                  {left?.title || "Divinely Seeded Supports"}
                </h3>

                <ul className="mt-6 space-y-4">
                  {weSupport.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-6 text-[var(--foreground)]"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#fdf5f0] p-8">
                <h3 className="font-bold uppercase tracking-[0.14em] text-[#c0392b]">
                  {right?.title || "Medical Care Remains With Your Provider"}
                </h3>

                <ul className="mt-6 space-y-4">
                  {medicalOnly.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-6 text-[var(--foreground)]"
                    >
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-[#c0392b]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {page?.medicalDisclaimer && (
              <p className="mt-10 text-sm leading-7 text-[var(--muted)]">
                <strong className="text-[var(--foreground)]">
                  Medical Disclaimer:
                </strong>{" "}
                {page.medicalDisclaimer}
              </p>
            )}
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}