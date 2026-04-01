import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";

const siteUrl = "https://www.divinelyseeded.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Divinely Seeded",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  sameAs: [
    "https://instagram.com/divinelyseeded",
    "https://facebook.com/divinelyseeded",
    "https://youtube.com/@divinelyseeded",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@divinelyseeded.com",
      telephone: "+1-872-810-3236",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Divinely Seeded",
  url: siteUrl,
  description:
    "Holistic wellness, coaching, and intentional support designed to help women live balanced, purposeful, and radiant lives.",
  publisher: {
    "@type": "Organization",
    name: "Divinely Seeded",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Divinely Seeded | Holistic Wellness for Women",
    template: "%s | Divinely Seeded",
  },
  description:
    "Divinely Seeded supports women through holistic wellness, coaching, programs, and intentional resources designed to nurture balance, healing, and purpose.",
  applicationName: "Divinely Seeded",
  keywords: [
    "Divinely Seeded",
    "holistic wellness",
    "wellness coaching",
    "women's wellness",
    "integrative health coach",
    "mindfulness",
    "self-care",
    "wellness programs",
    "community wellness",
    "wellness resources",
  ],
  authors: [{ name: "Divinely Seeded" }],
  creator: "Divinely Seeded",
  publisher: "Divinely Seeded",
  category: "Wellness",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Divinely Seeded",
    title: "Divinely Seeded | Holistic Wellness for Women",
    description:
      "Holistic wellness, coaching, and intentional support designed to help women live balanced, purposeful, and radiant lives.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divinely Seeded",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divinely Seeded | Holistic Wellness for Women",
    description:
      "Holistic wellness, coaching, and intentional support designed to help women live balanced, purposeful, and radiant lives.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  );
}