import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { HowWeHelp } from "@/components/contact/HowWeHelp";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { JsonLd } from "@/components/seo/json-ld";
import { sanityFetch } from "@/sanity/lib/live";
import { contactPageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import type { ContactPageData, SiteSettings } from "@/sanity/lib/types";

const siteUrl = "https://www.divinelyseeded.com";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Divinely Seeded",
  url: `${siteUrl}/contact`,
  description:
    "Contact Divinely Seeded to book a session, ask a coaching question, inquire about workshops, or connect about your wellness journey.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Divinely Seeded",
  url: siteUrl,
  email: "info@divinelyseeded.com",
  telephone: "+1-872-810-3236",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 E Erie St Suite 525-3498",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60611",
    addressCountry: "US",
  },
  image: `${siteUrl}/contact-office.png`,
  description:
    "Divinely Seeded offers holistic wellness coaching, workshops, and supportive resources for women.",
  areaServed: "United States",
};

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Divinely Seeded to book a session, ask a coaching question, inquire about workshops, or connect about your wellness journey.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Divinely Seeded",
    description:
      "Contact Divinely Seeded to book a session, ask a coaching question, inquire about workshops, or connect about your wellness journey.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Divinely Seeded",
    description:
      "Contact Divinely Seeded to book a session, ask a coaching question, inquire about workshops, or connect about your wellness journey.",
  },
};

export default async function ContactPage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: contactPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const contactPage = (page || null) as ContactPageData | null;
  const siteSettings = (settings || null) as SiteSettings | null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
      <SiteHeader settings={siteSettings} />
      <ContactHero page={contactPage} />
      <HowWeHelp page={contactPage} />
      <section id="form" className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <ContactForm page={contactPage} />
            <ContactInfo page={contactPage} />
          </div>
        </div>
      </section>
      <SiteFooter settings={siteSettings} />
    </main>
  );
}