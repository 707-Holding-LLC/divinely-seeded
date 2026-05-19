import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { FounderSection } from "@/components/home/founder-section";
import { FeaturedProgramsSection } from "@/components/home/featured-programs-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { JsonLd } from "@/components/seo/json-ld";
import { client } from "@/sanity/lib/client";
import { homePageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { HomePageData, SiteSettings } from "@/sanity/lib/types";

const siteUrl = "https://www.divinelyseeded.com";

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Divinely Seeded",
  url: siteUrl,
  description:
    "Discover holistic wellness coaching, featured programs, client stories, and intentional support designed to help women live balanced, purposeful, and radiant lives.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Holistic Wellness Coaching",
  provider: {
    "@type": "Organization",
    name: "Divinely Seeded",
    url: siteUrl,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Women seeking holistic wellness support",
  },
  description:
    "Holistic wellness coaching, programs, and supportive resources designed to help women build sustainable habits, emotional balance, and purposeful living.",
};

export const metadata: Metadata = {
  title: "Holistic Wellness for Women",
  description:
    "Discover holistic wellness coaching, featured programs, client stories, and intentional support designed to help women live balanced, purposeful, and radiant lives.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Divinely Seeded | Holistic Wellness for Women",
    description:
      "Discover holistic wellness coaching, featured programs, client stories, and intentional support designed to help women live balanced, purposeful, and radiant lives.",
    url: "/",
  },
  twitter: {
    title: "Divinely Seeded | Holistic Wellness for Women",
    description:
      "Discover holistic wellness coaching, featured programs, client stories, and intentional support designed to help women live balanced, purposeful, and radiant lives.",
  },
};

export default async function HomePage() {
  const [settings, page] = await Promise.all([
    client.fetch<SiteSettings | null>(siteSettingsQuery),
    client.fetch<HomePageData | null>(homePageQuery),
  ]);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <JsonLd data={homePageSchema} />
      <JsonLd data={serviceSchema} />

      <SiteHeader settings={settings} />
      <HeroSection page={page} />
      <MissionSection page={page} />
      <FounderSection page={page} />
      <FeaturedProgramsSection page={page} />
      <TestimonialsSection page={page} />
      <SiteFooter settings={settings} />
    </main>
  );
}