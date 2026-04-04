import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socials = [
  {
    Component: IconInstagram,
    href: "https://instagram.com/divinelyseeded",
    label: "Instagram",
  },
  {
    Component: IconFacebook,
    href: "https://facebook.com/divinelyseeded",
    label: "Facebook",
  },
  {
    Component: IconEmail,
    href: "mailto:info@divinelyseeded.com",
    label: "Email",
  },
];

const navColumnOne = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
];

const navColumnTwo = [
  { label: "Resources", href: "/resources" },
  { label: "Community Impact", href: "/community-impact" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)]">
      <SectionContainer className="py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.9fr] lg:gap-12">
          <div className="max-w-sm">
            <Image
              src="/seeded-logo.svg"
              alt="Divinely Seeded logo"
              width={220}
              height={72}
              className="h-auto w-[150px] sm:w-[170px]"
            />

            <p className="mt-5 text-[15px] leading-7 text-[var(--muted)] sm:text-base">
              Your partner in holistic wellness. Empowering women to live
              balanced, purposeful, and radiant lives.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Component, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd7] bg-white text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  <Component />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:max-w-md">
            <div className="space-y-4">
              {navColumnOne.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-[15px] text-[var(--muted)] transition hover:text-[var(--brand)] sm:text-base"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              {navColumnTwo.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-[15px] text-[var(--muted)] transition hover:text-[var(--brand)] sm:text-base"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
                Contact
              </p>
              <a
                href="mailto:info@divinelyseeded.com"
                className="mt-3 block text-[15px] leading-7 text-[var(--muted)] transition hover:text-[var(--brand)] sm:text-base"
              >
                info@divinelyseeded.com
              </a>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
                Book a Session
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex text-[15px] text-[var(--muted)] transition hover:text-[var(--brand)] sm:text-base"
              >
                Start your journey →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--line)] pt-6">
          <div className="flex flex-col gap-4 text-sm text-[#9aa3b7] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Divinely Seeded Wellness. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/privacy-policy"
                className="transition hover:text-[var(--brand)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="transition hover:text-[var(--brand)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}