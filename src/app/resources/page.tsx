import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ResourcesHeroSection } from "@/components/resources/resources-hero-section";
import { WorkbooksSection } from "@/components/resources/workbooks-section";
import { FeaturedArticleSection } from "@/components/resources/featured-article-section";
import { OnlineCoursesSection } from "@/components/resources/online-courses-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Browse Divinely Seeded wellness resources, including guided downloads, featured readings, and thoughtful tools to support intentional living and holistic well-being.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources | Divinely Seeded",
    description:
      "Browse Divinely Seeded wellness resources, including guided downloads, featured readings, and thoughtful tools to support intentional living and holistic well-being.",
    url: "/resources",
  },
  twitter: {
    title: "Resources | Divinely Seeded",
    description:
      "Browse Divinely Seeded wellness resources, including guided downloads, featured readings, and thoughtful tools to support intentional living and holistic well-being.",
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <ResourcesHeroSection />
      <WorkbooksSection />
      <FeaturedArticleSection />
      <OnlineCoursesSection />
      <SiteFooter />
    </main>
  );
}