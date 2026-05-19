import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { programsPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { ProgramsPageData, SiteSettings } from "@/sanity/lib/types";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProgramsHeroSection } from "@/components/programs/programs-hero-section";
import { PackagesSection } from "@/components/programs/programs-packages-section";
import { ClientJourneySection } from "@/components/programs/programs-client-journey-section";
import { ScopeSection } from "@/components/programs/programs-scope-section";
import { ProgramsCtaSection } from "@/components/programs/programs-cta-section";
import { VoicesOfImpactSection } from "@/components/community-impact/voices-of-impact-section";

export const dynamic = "force-dynamic"; 

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Divinely Seeded's wellness coaching packages — Seed, Bloom, and Concierge — designed to support metabolic health, lifestyle transformation, and sustainable wellbeing.",
};

export default async function ProgramsPage() {
  const [page, settings] = await Promise.all([
    sanityFetch({ query: programsPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const programsPage = page?.data as ProgramsPageData | null;
  const siteSettings = settings?.data as SiteSettings | null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader settings={siteSettings} />
      <ProgramsHeroSection page={programsPage} />
      <PackagesSection page={programsPage} />
      <ClientJourneySection page={programsPage} />
      <ScopeSection page={programsPage} />
      <VoicesOfImpactSection page={programsPage} />
      <ProgramsCtaSection page={programsPage} />
      <SiteFooter settings={siteSettings} />
    </main>
  );
}