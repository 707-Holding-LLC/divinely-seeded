import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ResourcesHeroSection } from "@/components/resources/resources-hero-section";
import { WorkbooksSection } from "@/components/resources/workbooks-section";
import { FeaturedArticleSection } from "@/components/resources/featured-article-section";
import { OnlineCoursesSection } from "@/components/resources/online-courses-section";
import { sanityFetch } from "@/sanity/lib/live";
import { resourcesPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { ResourcesPageData, SiteSettings } from "@/sanity/lib/types";

export const dynamic = "force-dynamic"; 

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

export default async function ResourcesPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: resourcesPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const resourcesPage = (page || null) as ResourcesPageData | null;
  const siteSettings = (settings || null) as SiteSettings | null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader settings={siteSettings} />
      <ResourcesHeroSection page={resourcesPage} />
      <WorkbooksSection page={resourcesPage} />
      <FeaturedArticleSection page={resourcesPage} />
      <OnlineCoursesSection page={resourcesPage} />
      <SiteFooter settings={siteSettings} />
    </main>
  );
}