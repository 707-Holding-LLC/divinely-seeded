import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProgramsHeroSection } from "@/components/programs/programs-hero-section";
import { ProgramsGridSection } from "@/components/programs/programs-grid-section";
import { ProgramsCtaSection } from "@/components/programs/programs-cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Divinely Seeded wellness programs, including personalized coaching, group experiences, workshops, and guided wellness support for women.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Programs | Divinely Seeded",
    description:
      "Explore Divinely Seeded wellness programs, including personalized coaching, group experiences, workshops, and guided wellness support for women.",
    url: "/programs",
  },
  twitter: {
    title: "Programs | Divinely Seeded",
    description:
      "Explore Divinely Seeded wellness programs, including personalized coaching, group experiences, workshops, and guided wellness support for women.",
  },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <ProgramsHeroSection />
      <ProgramsGridSection />
      <ProgramsCtaSection />
      <SiteFooter />
    </main>
  );
}