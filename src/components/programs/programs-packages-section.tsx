"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import type { ProgramsPageData } from "@/sanity/lib/types";

type PackagesSectionProps = {
  page?: ProgramsPageData | null;
};

const CARD_STYLES = [
  { bg: "#fbf2ed", border: "#f1d1bf" },
  { bg: "#f4faf8", border: "#b8ddd4" },
  { bg: "#f9f6f2", border: "#e8ddd4" },
];

export function PackagesSection({ page }: PackagesSectionProps) {
  const packages = [...(page?.programCards || [])].sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
  );

  if (!packages.length) return null;

  return (
    <section className="pb-24">
      <SectionContainer>
        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[var(--brand)]" />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Choose Your Level of Support
            </span>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const style = CARD_STYLES[index % CARD_STYLES.length];
            const includes = pkg.includedItems || [];
            const bestFor = pkg.bestForItems || [];
            const ctaLink = pkg.ctaLink || "https://calendly.com/divinelyseeded";

            return (
              <Reveal key={pkg._id} delay={0.08 + index * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  style={{ backgroundColor: style.bg, borderColor: style.border }}
                  className="relative flex flex-col overflow-hidden rounded-[28px] border shadow-[0_12px_35px_rgba(16,32,66,0.06)]"
                >
                  {pkg.featured && (
                    <div className="absolute right-6 top-6 rounded-full bg-[var(--brand)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand)]">
                        {pkg.eyebrow || "Program"}
                      </p>
                      <h2 className="mt-2 text-4xl font-bold text-[var(--foreground)]">
                        {pkg.title || "Program"}
                      </h2>
                      {pkg.subtitle && (
                        <p className="mt-1 text-base font-semibold text-[var(--foreground)]/60">
                          {pkg.subtitle}
                        </p>
                      )}
                    </div>

                    {pkg.investment && (
                      <div className="mt-5 rounded-2xl bg-white/70 px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                          Investment
                        </p>
                        <p className="mt-1 text-lg font-bold text-[var(--foreground)]">
                          {pkg.investment}
                        </p>
                      </div>
                    )}

                    {pkg.description && (
                      <p className="mt-6 text-base leading-7 text-[var(--muted)]">
                        {pkg.description}
                      </p>
                    )}

                    {!!includes.length && (
                      <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)]">
                          What&apos;s Included
                        </p>
                        <ul className="mt-4 space-y-3">
                          {includes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!!bestFor.length && (
                      <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)]">
                          Best For
                        </p>
                        <ul className="mt-4 space-y-2">
                          {bestFor.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-8">
                      <Link
                        href={ctaLink}
                        target={ctaLink.startsWith("http") ? "_blank" : undefined}
                        rel={ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--brand-dark)]"
                      >
                        {pkg.ctaLabel || "Learn More"}
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}