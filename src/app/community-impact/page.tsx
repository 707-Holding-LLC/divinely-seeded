import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ImpactHeroSection } from "@/components/community-impact/impact-hero-section";
import { CommunityInitiativesSection } from "@/components/community-impact/community-initiatives-section";
import { ImpactGallerySection } from "@/components/community-impact/impact-gallery-section";
import { VoicesOfImpactSection } from "@/components/community-impact/voices-of-impact-section";
import { ImpactCtaSection } from "@/components/community-impact/impact-cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "See how Divinely Seeded supports women through community wellness initiatives, mental health circles, physical wellness programming, and meaningful local impact.",
  alternates: {
    canonical: "/community-impact",
  },
  openGraph: {
    title: "Community Impact | Divinely Seeded",
    description:
      "See how Divinely Seeded supports women through community wellness initiatives, mental health circles, physical wellness programming, and meaningful local impact.",
    url: "/community-impact",
  },
  twitter: {
    title: "Community Impact | Divinely Seeded",
    description:
      "See how Divinely Seeded supports women through community wellness initiatives, mental health circles, physical wellness programming, and meaningful local impact.",
  },
};

export default function CommunityImpactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <ImpactHeroSection />
      <CommunityInitiativesSection />
      <ImpactGallerySection />
      <VoicesOfImpactSection />
      <ImpactCtaSection />
      <SiteFooter />
    </main>
  );
}