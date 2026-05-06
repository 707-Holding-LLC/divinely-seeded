"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We clarify your goals, coaching needs, and whether Divinely Seeded is the right fit for your wellness journey.",
  },
  {
    number: "02",
    title: "Intake & Consent",
    description:
      "You complete a wellness intake, coaching agreement, scope acknowledgment, and applicable safety screening questions.",
  },
  {
    number: "03",
    title: "Readiness Review",
    description:
      "We organize your goals, lifestyle habits, questions, and provider discussion points so you feel informed and prepared.",
  },
  {
    number: "04",
    title: "Provider-Led Medical Care",
    description:
      "Your licensed clinician handles labs, diagnosis, prescriptions, contraindications, dosing, and all medical decisions.",
  },
  {
    number: "05",
    title: "Coaching Support",
    description:
      "Divinely Seeded supports your daily habits — meals, hydration, movement, sleep, stress, mindset, tracking, and consistency.",
  },
  {
    number: "06",
    title: "Maintenance",
    description:
      "We help you create a sustainable lifestyle rhythm and reduce dependence on quick-fix thinking for long-term success.",
  },
];

export function ClientJourneySection() {
  return (
    <section className="pb-24">
      <SectionContainer>
        <Reveal>
          <div className="rounded-[36px] bg-[#fbf2ed] p-8 sm:p-12 lg:p-16">

            {/* Heading */}
            <div className="max-w-2xl">
              <span className="inline-flex text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                Your Path to Wellness
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl">
                How the Client Journey Works
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                From your first conversation to long-term maintenance - here is
                what to expect when you work with Divinely Seeded.
              </p>
            </div>

            {/* Steps grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={0.06 + index * 0.06}>
                  <div className="rounded-2xl bg-white p-7 shadow-sm">
                    <span className="text-3xl font-black tracking-tight text-[var(--brand)] opacity-40">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[var(--foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}