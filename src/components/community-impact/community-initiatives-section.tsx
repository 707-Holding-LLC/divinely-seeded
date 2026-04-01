"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { communityImpactCards } from "@/data/site";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function CommunityInitiativesSection() {
  return (
    <section className="bg-[#eef3f8] py-24">
      <SectionContainer>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
              Community Initiatives
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[var(--brand)]" />
            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Our programs are designed to be accessible, culturally responsive,
              and deeply impactful.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {communityImpactCards.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_12px_35px_rgba(16,32,66,0.07)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-[2rem] font-semibold leading-tight text-[var(--foreground)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-8 inline-flex text-lg font-semibold text-[var(--brand)] transition hover:translate-x-1"
                  >
                    Learn More <span className="ml-3">→</span>
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