import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { HowWeHelp } from "@/components/contact/HowWeHelp";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { JsonLd } from "@/components/seo/json-ld";

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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
      <SiteHeader />
      <ContactHero />
      <HowWeHelp />
      <section id="form" className="pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}