import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProgramsHeroSection } from "@/components/programs/programs-hero-section";
import { PackagesSection } from "@/components/programs/programs-packages-section";
import { ClientJourneySection } from "@/components/programs/programs-client-journey-section";
import { ScopeSection } from "@/components/programs/programs-scope-section";
import { ProgramsCtaSection } from "@/components/programs/programs-cta-section";
import { VoicesOfImpactSection } from "@/components/community-impact/voices-of-impact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Divinely Seeded's wellness coaching packages — Seed, Bloom, and Concierge — designed to support metabolic health, lifestyle transformation, and sustainable wellbeing.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <ProgramsHeroSection />
      <PackagesSection />
      <ClientJourneySection />
      <ScopeSection />
      <VoicesOfImpactSection />
      <ProgramsCtaSection />
      <SiteFooter />
    </main>
  );
}