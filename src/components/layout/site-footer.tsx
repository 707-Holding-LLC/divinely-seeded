import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socials = [
  { Component: IconInstagram, href: "https://instagram.com/divinelyseeded", label: "Instagram" },
  { Component: IconFacebook,  href: "https://facebook.com/divinelyseeded",  label: "Facebook" },
  { Component: IconEmail,     href: "mailto:info@divinelyseeded.com",            label: "Email" },
];

const quickLinks = [
  { label: "Home",             href: "/" },
  { label: "Programs",         href: "/programs" },
  { label: "Resources",        href: "/resources" },
  { label: "Community Impact", href: "/community-impact" },
  { label: "About Nnenna",     href: "/about" },
  { label: "Book a Session",   href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-(--background)">
      <SectionContainer className="py-16 lg:py-20">

        {/* Main grid — brand left, links right */}
        <div className="grid items-start gap-12 sm:grid-cols-[1fr_auto] lg:gap-20">

          {/* ── Left: Brand ── */}
          <div className="max-w-sm self-start">
            <Image
              src="/logo.svg"
              alt="Divinely Seeded logo"
              width={180}
              height={60}
              className="h-auto w-[150px]"
            />

            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)] sm:text-base">
              Your partner in holistic wellness. Empowering women to live
              balanced, purposeful, and radiant lives.
            </p>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ Component, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd7] text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  <Component />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Quick Links ── */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--foreground)]">
              Quick Links
            </h3>

            <nav className="mt-6 grid grid-cols-2 gap-x-16 gap-y-5">
              {quickLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[15px] text-[var(--muted)] transition hover:text-[var(--brand)] sm:text-base"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] pt-8 text-sm text-[#9aa3b7] md:flex-row md:items-center">
          <p>© 2025 Divinely Seeded Wellness. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition hover:text-[var(--brand)]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition hover:text-[var(--brand)]">
              Terms of Service
            </Link>
          </div>
        </div>

      </SectionContainer>
    </footer>
  );
}