"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredPrograms } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";
import { motion } from "framer-motion";

export function FeaturedProgramsSection() {
  return (
    <section className="py-24">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              Featured Programs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              Tailored coaching experiences designed to support your journey
              towards a more vibrant you.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {featuredPrograms.map((program, index) => (
            <Reveal key={program.title} delay={0.1 + index * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-[24px] border border-[#e7e7ea] bg-white shadow-sm"
              >
                <div className="relative h-[280px] w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                      {program.title}
                    </h3>
                    <span className="rounded-full bg-[#fff1e7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand)]">
                      {program.badge}
                    </span>
                  </div>

                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                    {program.description}
                  </p>

                  <Link
                    href={program.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--brand)] transition hover:translate-x-1"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}