"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const CALENDLY_URL = "https://calendly.com/divinelyseeded";

const packages = [
  {
    name: "Seed",
    tag: "Start Here",
    price: "Starting at $497",
    subtitle: "Metabolic Wellness Discovery Session",
    description:
      "A focused, one-time strategy session designed to help you prepare for an informed conversation with your licensed medical provider. Ideal if you are curious about metabolic wellness or longevity support but want clarity before starting anything new.",
    includes: [
      "One 75-minute private coaching session",
      "Lifestyle, nutrition, sleep, stress, hydration & movement review",
      "Personal wellness goal-mapping",
      "Provider question list",
      "Lab checklist to discuss with your medical provider",
      "Current supplement and medication organization",
      "Personalized next-step wellness plan",
      "Red-flag education: when to seek medical guidance",
    ],
    bestFor: [
      "Peptide-curious clients",
      "Clients preparing for a provider visit",
      "Clients who want clarity before investing in a full program",
      "Clients who want a safe, grounded starting point",
    ],
    cta: "Book Your Discovery Session",
    bg: "#fbf2ed",
    border: "#f1d1bf",
  },
  {
    name: "Bloom",
    tag: "Signature Program",
    price: "Starting at $4,497",
    subtitle: "12-Week Regenerative Wellness Coaching",
    description:
      "A deeper 12-week coaching container for clients who want a complete lifestyle transformation rooted in metabolic health, nourishment, accountability, nervous system balance, and sustainable wellness habits. This is our signature program.",
    includes: [
      "45-minute weekly private coaching sessions (12 total)",
      "Personalized lifestyle roadmap",
      "Nutrition, hydration, protein, fiber & meal-rhythm support",
      "Accountability tracking between sessions",
      "Sleep, stress & nervous system reset tools",
      "Supplement organization and review",
      "Provider collaboration checklist",
      "Symptom and progress tracking for provider review",
      "Mindset and self-trust coaching",
      "Travel, dining-out & lifestyle planning",
      "Maintenance plan for long-term success",
      "Email support between sessions (within agreed boundaries)",
    ],
    bestFor: [
      "Clients who want a full lifestyle reset",
      "Clients using provider-prescribed peptide or metabolic support",
      "Clients focused on body composition, energy, inflammation or longevity",
      "Clients beginning peptide therapy who want structured habit support",
    ],
    cta: "Apply for the Bloom Experience",
    bg: "#f4faf8",
    border: "#b8ddd4",
    featured: true,
  },
  {
    name: "Concierge",
    tag: "Premium Experience",
    price: "By application only. Limited to one client per quarter.",
    subtitle: "High-Touch Wellness Navigation",
    description:
      "A premium, high-touch coaching experience for clients who desire a more personalized, guided, and elevated wellness journey with white-glove support around lifestyle optimization and wellness organization.",
    includes: [
      "Bi-weekly extended private coaching sessions (90 min each)",
      "Customized wellness roadmap tailored to your lifestyle",
      "Provider appointment preparation & follow-up support",
      "Lab and wellness document organization and guide",
      "Supplement and routine optimization support",
      "Travel wellness planning",
      "Meal rhythm, hydration, sleep & stress optimization",
      "Monthly comprehensive progress review",
      "VIP client experience with priority scheduling",
      "Unlimited text/email support (within defined boundaries)",
      "Ongoing lifestyle accountability",
      "Maintenance and next-phase planning",
    ],
    bestFor: [
      "Busy professionals and executives",
      "Clients who want premium support and organization",
      "Clients managing multiple wellness goals",
      "Clients who travel frequently",
      "Clients who want a luxury coaching experience with accountability",
    ],
    cta: "Inquire About Concierge",
    bg: "#f9f6f2",
    border: "#e8ddd4",
  },
];

export function PackagesSection() {
  return (
    <section className="pb-24">
      <SectionContainer>

        {/* Section label */}
        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[var(--brand)]" />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              Choose Your Level of Support
            </span>
          </div>
        </Reveal>

        {/* 3 cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={0.08 + index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                style={{ backgroundColor: pkg.bg, borderColor: pkg.border }}
                className="relative flex flex-col overflow-hidden rounded-[28px] border shadow-[0_12px_35px_rgba(16,32,66,0.06)]"
              >
                {pkg.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-[var(--brand)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">

                  {/* Tag + Name + Subtitle */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand)]">
                      {pkg.tag}
                    </p>
                    <h2 className="mt-2 text-4xl font-bold text-[var(--foreground)]">
                      {pkg.name}
                    </h2>
                    <p className="mt-1 text-base font-semibold text-[var(--foreground)]/60">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-5 rounded-2xl bg-white/70 px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                      Investment
                    </p>
                    <p className="mt-1 text-lg font-bold text-[var(--foreground)]">
                      {pkg.price}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-6 text-base leading-7 text-[var(--muted)]">
                    {pkg.description}
                  </p>

                  {/* Includes */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)]">
                      What&apos;s Included
                    </p>
                    <ul className="mt-4 space-y-3">
                      {pkg.includes.map((item) => (
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

                  {/* Best For */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)]">
                      Best For
                    </p>
                    <ul className="mt-4 space-y-2">
                      {pkg.bestFor.map((item) => (
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

                  {/* Single CTA — Calendly */}
                  <div className="mt-8">
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--brand)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--brand-dark)]"
                    >
                      {pkg.cta}
                    </Link>
                  </div>

                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

      </SectionContainer>
    </section>
  );
}