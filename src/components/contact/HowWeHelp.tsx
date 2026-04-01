import { Calendar, Brain, Handshake } from "lucide-react";

const helpCards = [
  {
    icon: Calendar,
    title: "Book a Consultation",
    description:
      "Schedule a 1-on-1 session to discuss your personal growth and wellness goals.",
    cta: "View availability",
    href: "#form",
  },
  {
    icon: Brain,
    title: "Coaching Inquiries",
    description:
      "Interested in our specialized coaching programs? Let's find the right fit for you.",
    cta: "Send inquiry",
    href: "#form",
  },
  {
    icon: Handshake,
    title: "Workshops & Partnerships",
    description:
      "Collaborate with us for corporate wellness or community workshops.",
    cta: "Get in touch",
    href: "#form",
  },
];

export function HowWeHelp() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <h2 className="text-center font-heading text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          How can we help?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {helpCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className="group flex flex-col items-center rounded-2xl border border-[var(--line)] bg-white px-8 py-10 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand)]/10">
                  <Icon className="h-7 w-7 text-[var(--brand)]" />
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold text-[var(--foreground)]">
                  {card.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  {card.description}
                </p>

                <span className="mt-6 flex items-center gap-1 text-base font-semibold text-[var(--brand)] transition duration-200 group-hover:translate-x-1">
                  {card.cta} →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}