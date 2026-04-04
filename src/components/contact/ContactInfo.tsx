import Image from "next/image";
import { MapPin } from "lucide-react";

const PHONE    = "(872) 810-3236";
const EMAIL    = "info@divinelyseeded.com";
//const ADDRESS1 = "1 E Erie St Suite 525-3498";
//const ADDRESS2 = "Chicago, IL 60611";

// ── Inline SVGs — lucide-react does not export brand icons ───────────────────
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

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const socials = [
  { Component: IconInstagram, href: "https://instagram.com/divinelyseeded",  label: "Instagram" },
  { Component: IconFacebook,  href: "https://facebook.com/divinelyseeded",   label: "Facebook" },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Office image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src="/contact-office.png"
          alt="Divinely Seeded wellness sanctuary — peaceful office space"
          fill
          className="object-cover"
        />
      </div>

      {/* Visit Our Sanctuary */}
      <div className="space-y-6">
        <h3 className="font-heading text-2xl font-bold text-[var(--foreground)]">
          Visit Our Sanctuary
        </h3>
        <p className="text-base leading-7 text-[var(--muted)]">
          Located in the heart of the city, our office is designed to be a
          peaceful retreat from the daily hustle. We welcome scheduled visits
          for in-person sessions.
        </p>

        

        {/* Phone + Email */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
              Call Us
            </p>
            <a
              href="tel:+18728103236"
              className="mt-1 block text-base font-semibold text-[var(--foreground)] transition hover:text-[var(--brand)]"
            >
              {PHONE}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
              Email Us
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-1 block break-all text-base font-semibold text-[var(--foreground)] transition hover:text-[var(--brand)]"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
            Follow Our Growth
          </p>
          <div className="mt-4 flex items-center gap-3">
            {socials.map(({ Component, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--muted)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <Component />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}