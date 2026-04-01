import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { AboutCredentialsSection } from "@/components/about/about-credentials-section";
import { AboutFounderSection } from "@/components/about/about-founder-section";
import { AboutFounderStorySection } from "@/components/about/about-founder-story-section";
import { AboutWhoWeServeSection } from "@/components/about/about-who-we-serve-section";
import { AboutDifferentiatorsSection } from "@/components/about/about-differentiators-section";
import { AboutLeadershipSection } from "@/components/about/about-leadership-section";
import { AboutCtaSection } from "@/components/about/about-cta-section";
import { JsonLd } from "@/components/seo/json-ld";

const siteUrl = "https://www.divinelyseeded.com";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Divinely Seeded",
  url: `${siteUrl}/about`,
  description:
    "Learn about Divinely Seeded, the story behind the brand, Nnenna’s founder journey, and the mission, values, and holistic approach guiding the work.",
  mainEntity: {
    "@type": "Person",
    name: "Nnenna Animashaun",
    jobTitle: "Founder and Certified Integrative Health & Wellness Coach",
    worksFor: {
      "@type": "Organization",
      name: "Divinely Seeded",
    },
  },
};

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Divinely Seeded, the story behind the brand, Nnenna’s founder journey, and the mission, values, and holistic approach guiding the work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Divinely Seeded",
    description:
      "Learn about Divinely Seeded, the story behind the brand, Nnenna’s founder journey, and the mission, values, and holistic approach guiding the work.",
    url: "/about",
  },
  twitter: {
    title: "About | Divinely Seeded",
    description:
      "Learn about Divinely Seeded, the story behind the brand, Nnenna’s founder journey, and the mission, values, and holistic approach guiding the work.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <JsonLd data={aboutPageSchema} />
      <SiteHeader />
      <AboutValuesSection />
      <AboutCredentialsSection />
      <AboutFounderSection />
      <AboutFounderStorySection />
      <AboutWhoWeServeSection />
      <AboutDifferentiatorsSection />
      <AboutLeadershipSection />
      <AboutCtaSection />
      <SiteFooter />
    </main>
  );
}