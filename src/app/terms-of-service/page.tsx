import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LegalPage } from "@/components/legal/legal-page";
import { sanityFetch } from "@/sanity/lib/live";
import { termsOfServicePageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { LegalDocumentPageData, SiteSettings } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Divinely Seeded Terms of Service governing use of the website, services, content, and communications.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Divinely Seeded",
    description:
      "Review the Divinely Seeded Terms of Service governing use of the website, services, content, and communications.",
    url: "/terms-of-service",
  },
  twitter: {
    title: "Terms of Service | Divinely Seeded",
    description:
      "Review the Divinely Seeded Terms of Service governing use of the website, services, content, and communications.",
  },
};

export default async function TermsOfServicePage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: termsOfServicePageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const termsPage = (page || null) as LegalDocumentPageData | null;
  const siteSettings = (settings || null) as SiteSettings | null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader settings={siteSettings} />

      <LegalPage
        eyebrow={termsPage?.eyebrow || "Legal"}
        title={termsPage?.title || "Terms of Service"}
        lastUpdated={termsPage?.lastUpdated || "April 1, 2026"}
        body={termsPage?.body}
      />

      <SiteFooter settings={siteSettings} />
    </main>
  );
}