import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LegalPage } from "@/components/legal/legal-page";

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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        lastUpdated="April 1, 2026"
      >
        <p>
          Divinely Seeded (“we,” “our,” or “us”) respects your privacy and is
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, disclose, and
          protect information when you visit our website, submit a form, contact
          us, or engage with our services.
        </p>

        <h2>1. Information we collect</h2>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Contact information</strong>, such as your name, email
            address, phone number, and any information you choose to provide in
            forms or messages.
          </li>
          <li>
            <strong>Service inquiry information</strong>, including details you
            share about your wellness goals, coaching interests, workshop
            inquiries, or partnership requests.
          </li>
          <li>
            <strong>Website usage data</strong>, such as browser type, device
            information, pages visited, time spent on pages, referral source,
            and general interaction data.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong>, which may be used
            to improve site functionality, analyze traffic, and enhance user
            experience.
          </li>
        </ul>

        <h2>2. How we use your information</h2>
        <p>We may use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and communicate with you.</li>
          <li>Provide coaching, program, workshop, or support information.</li>
          <li>Improve our website, services, and user experience.</li>
          <li>Monitor site performance, analytics, and engagement.</li>
          <li>
            Protect the security and integrity of our website and operations.
          </li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>3. How information is collected</h2>
        <p>We may collect information in several ways, including when you:</p>
        <ul>
          <li>Fill out a contact or inquiry form.</li>
          <li>Send us an email or otherwise contact us directly.</li>
          <li>Browse our website.</li>
          <li>Interact with external tools, forms, or links connected to our website.</li>
        </ul>

        <h2>4. Cookies and analytics</h2>
        <p>
          Our website may use cookies, analytics tools, or similar technologies
          to understand how visitors use the site and to improve performance and
          content. These tools may collect technical and behavioral data such as
          IP address, browser type, pages viewed, and session activity.
        </p>
        <p>
          You can usually control cookies through your browser settings. Please
          note that disabling certain cookies may affect how the site functions.
        </p>

        <h2>5. Third-party services</h2>
        <p>
          We may use trusted third-party tools and service providers to operate
          our website or manage communications. These may include website
          hosting providers, analytics providers, scheduling tools, embedded
          forms, email platforms, or payment processors.
        </p>
        <p>
          When you interact with these tools, your information may be processed
          according to their own privacy practices. We encourage you to review
          the privacy policies of any third-party services you use through our
          site.
        </p>

        <h2>6. Data sharing</h2>
        <p>
          We do not sell your personal information. We may share information
          only in limited circumstances, such as:
        </p>
        <ul>
          <li>With service providers who help us operate the website or business.</li>
          <li>When required by law, regulation, court order, or legal process.</li>
          <li>
            To protect our rights, safety, users, business operations, or the
            public.
          </li>
          <li>
            As part of a business transition, merger, acquisition, or asset
            transfer, where legally permitted.
          </li>
        </ul>

        <h2>7. Data retention</h2>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy, including
          responding to inquiries, maintaining records, improving services, and
          meeting legal or operational requirements.
        </p>

        <h2>8. Data security</h2>
        <p>
          We take reasonable administrative, technical, and organizational steps
          to help protect personal information from unauthorized access, loss,
          misuse, disclosure, alteration, or destruction. However, no method of
          transmission over the internet or electronic storage is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>9. Your choices and rights</h2>
        <p>
          Depending on where you live, you may have rights regarding the
          personal information we hold about you, such as the right to request
          access, correction, deletion, or restriction of certain uses. To make
          a request, contact us using the information below.
        </p>

        <h2>10. Children’s privacy</h2>
        <p>
          Our website is not intended for children under 13, and we do not
          knowingly collect personal information from children through the site
          without appropriate consent. If you believe a child has provided us
          personal information, please contact us so we can review and remove it
          where appropriate.
        </p>

        <h2>11. Health and wellness information</h2>
        <p>
          Divinely Seeded provides wellness education, coaching, and related
          services. Information submitted through this website should not include
          highly sensitive medical information unless specifically requested
          through a secure and appropriate channel. Content on this site is not
          a substitute for professional medical diagnosis, treatment, or advice.
        </p>

        <h2>12. International visitors</h2>
        <p>
          If you access our website from outside the United States, please be
          aware that your information may be processed and stored in the United
          States or other locations where our service providers operate.
        </p>

        <h2>13. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, technology, legal requirements, or business
          operations. When we do, we will update the “Last updated” date at the
          top of this page.
        </p>

        <h2>14. Contact us</h2>
        <p>
          If you have questions about this Privacy Policy or about how your
          information is handled, please contact:
        </p>
        <p>
          <strong>Divinely Seeded</strong>
          <br />
          Email: <strong>info@divinelyseeded.com</strong>
          <br />
          Mailing Address: <strong>1 E Erie St Suite 525-3498 Chicago, IL 60611</strong>
        </p>
      </LegalPage>

      <SiteFooter />
    </main>
  );
}