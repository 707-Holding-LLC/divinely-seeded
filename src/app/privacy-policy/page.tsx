import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LegalPage } from "@/components/legal/legal-page";
import { sanityFetch } from "@/sanity/lib/live";
import { privacyPolicyPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { LegalDocumentPageData, SiteSettings } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Divinely Seeded Privacy Policy to understand how personal information is collected, used, stored, and protected.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Divinely Seeded",
    description:
      "Read the Divinely Seeded Privacy Policy to understand how personal information is collected, used, stored, and protected.",
    url: "/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy | Divinely Seeded",
    description:
      "Read the Divinely Seeded Privacy Policy to understand how personal information is collected, used, stored, and protected.",
  },
};

export default async function PrivacyPolicyPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: privacyPolicyPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const privacyPage = (page || null) as LegalDocumentPageData | null;
  const siteSettings = (settings || null) as SiteSettings | null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader settings={siteSettings} />

      <LegalPage
        eyebrow={privacyPage?.eyebrow || "Legal"}
        title={privacyPage?.title || "Privacy Policy"}
        lastUpdated={privacyPage?.lastUpdated || "April 1, 2026"}
        body={privacyPage?.body}
      />

      <SiteFooter settings={siteSettings} />
    </main>
  );
}