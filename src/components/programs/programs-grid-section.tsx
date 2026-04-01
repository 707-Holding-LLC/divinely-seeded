"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { programsPageCards } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const categoryIcons: Record<string, string> = {
  Individual: "◦",
  Community: "✣",
  Corporate: "▣",
  Assessment: "◫",
};

export function ProgramsGridSection() {
  return (
    <section className="pb-24">
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-3">
          {programsPageCards.slice(0, 3).map((program, index) => (
            <Reveal key={program.title} delay={0.08 + index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-[26px] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.06)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                    <span>{categoryIcons[program.category]}</span>
                    <span>{program.category}</span>
                  </div>

                  <h3 className="mt-5 text-[2rem] font-semibold leading-tight text-[var(--foreground)]">
                    {program.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                    {program.description}
                  </p>

                  <Link
                    href={program.href}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-[#f1d1bf] px-6 py-4 text-lg font-semibold text-[var(--brand)] transition hover:border-[var(--brand)] hover:bg-[#fff7f2]"
                  >
                    {program.cta} <span className="ml-3">→</span>
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.9fr]">
          {programsPageCards.slice(3, 4).map((program) => (
            <Reveal key={program.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-[26px] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.06)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                    <span>{categoryIcons[program.category]}</span>
                    <span>{program.category}</span>
                  </div>

                  <h3 className="mt-5 text-[2rem] font-semibold leading-tight text-[var(--foreground)]">
                    {program.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                    {program.description}
                  </p>

                  <Link
                    href={program.href}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-[#f1d1bf] px-6 py-4 text-lg font-semibold text-[var(--brand)] transition hover:border-[var(--brand)] hover:bg-[#fff7f2]"
                  >
                    {program.cta} <span className="ml-3">→</span>
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <article className="grid overflow-hidden rounded-[26px] border border-[#f0d8cc] bg-[#fbf2ed] shadow-[0_12px_35px_rgba(16,32,66,0.06)] lg:grid-cols-[0.55fr_1.45fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/featured-experience.png"
                  alt="Featured experience"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center p-8 sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                    <span>⌂</span>
                    <span>Featured Experience</span>
                  </div>

                  <h3 className="mt-5 text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
                    Wellness Retreats &amp; Community Workshops
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-[var(--muted)] sm:text-xl">
                    Immerse yourself in transformative weekend retreats and
                    local workshops. Reconnect with nature, self, and a vibrant
                    community of like-minded women in serene, muted earth-toned
                    settings designed for deep restoration.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand)] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[var(--brand-dark)]"
                    >
                      Upcoming Dates
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-2xl border border-[#d9dde7] bg-white px-8 py-4 text-lg font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                    >
                      Workshop Calendar
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}