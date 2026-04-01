import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LegalPage } from "@/components/legal/legal-page";

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

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader />

      <LegalPage
        eyebrow="Legal"
        title="Terms of Service"
        lastUpdated="April 1, 2026"
      >
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the
          Divinely Seeded website and any related services, content, forms,
          communications, and offerings made available through the site. By
          using this website, you agree to these Terms.
        </p>

        <h2>1. Use of the website</h2>
        <p>
          You may use this website only for lawful purposes and in accordance
          with these Terms. You agree not to misuse the site, interfere with its
          operation, attempt unauthorized access, or use the site in any way
          that could harm Divinely Seeded, its users, or its service providers.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          By using this website, you represent that you are at least the age of
          majority in your jurisdiction, or that you are using the site with
          proper consent and authority where required.
        </p>

        <h2>3. Services and informational content</h2>
        <p>
          Divinely Seeded provides wellness-related educational content,
          coaching information, resources, workshops, and other offerings. All
          content is provided for general informational and educational purposes
          only.
        </p>
        <p>
          Nothing on this website constitutes medical advice, diagnosis, or
          treatment. You should consult a qualified medical professional
          regarding any health concerns or before making medical decisions.
        </p>

        <h2>4. No professional medical relationship</h2>
        <p>
          Use of this website does not create a doctor-patient, therapist-client,
          or other licensed clinical relationship. Any coaching or wellness
          service relationship, if offered, will be governed by separate
          agreements, intake materials, and service-specific terms where
          applicable.
        </p>

        <h2>5. Accuracy of information</h2>
        <p>
          We strive to keep the information on this site accurate and current,
          but we do not guarantee that all content is complete, accurate,
          reliable, or up to date at all times. We may modify, update, suspend,
          or remove content at any time without notice.
        </p>

        <h2>6. Bookings, inquiries, and communications</h2>
        <p>
          If you submit a form, inquiry, booking request, or other communication
          through the site, you agree that the information you provide is
          accurate and not misleading. Submission of a request does not
          guarantee acceptance, booking, availability, or service.
        </p>

        <h2>7. Payments and refunds</h2>
        <p>
          If Divinely Seeded offers paid services, programs, or digital products
          through this website or related tools, additional pricing, payment,
          cancellation, and refund terms may apply. Those terms will be
          communicated at the point of purchase, booking, or service agreement.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          All website content, including text, graphics, branding, logos,
          images, downloads, guides, design elements, and other materials, is
          owned by or licensed to Divinely Seeded and is protected by applicable
          intellectual property laws.
        </p>
        <p>
          You may not copy, reproduce, republish, distribute, modify, create
          derivative works from, or commercially exploit any content from this
          website without prior written permission, except as expressly allowed
          by law.
        </p>

        <h2>9. User conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site for unlawful, harmful, or fraudulent purposes.</li>
          <li>Upload or transmit malicious code or harmful material.</li>
          <li>Attempt to gain unauthorized access to systems or accounts.</li>
          <li>Impersonate another person or misrepresent your identity.</li>
          <li>
            Use the site in a manner that disrupts or interferes with its
            operation or security.
          </li>
        </ul>

        <h2>10. Third-party links and tools</h2>
        <p>
          This website may contain links to third-party websites, platforms, or
          tools for scheduling, forms, payments, social media, or other
          services. We are not responsible for the content, practices, or terms
          of those third parties. Your use of third-party services is at your
          own risk and subject to their own terms and policies.
        </p>

        <h2>11. Disclaimer of warranties</h2>
        <p>
          This website and its content are provided on an “as is” and “as
          available” basis without warranties of any kind, express or implied,
          including but not limited to warranties of merchantability, fitness
          for a particular purpose, non-infringement, and availability.
        </p>

        <h2>12. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Divinely Seeded shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, profits, goodwill, or business
          opportunity arising from or related to your use of the website or
          reliance on its content.
        </p>

        <h2>13. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Divinely Seeded and
          its affiliates, representatives, contractors, and service providers
          from and against claims, liabilities, damages, judgments, losses,
          costs, and expenses arising out of or related to your use of the
          website, your violation of these Terms, or your violation of any law
          or third-party right.
        </p>

        <h2>14. Termination</h2>
        <p>
          We reserve the right to suspend, restrict, or terminate access to the
          website or any related service at any time, without notice, if we
          believe a user has violated these Terms or used the site in an
          inappropriate or harmful way.
        </p>

        <h2>15. Governing law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of <strong>Ilinois</strong>, without regard
          to conflict of law principles.
        </p>

        <h2>16. Changes to these Terms</h2>
        <p>
          We may revise these Terms from time to time. Updated Terms will be
          posted on this page with a revised “Last updated” date. Continued use
          of the website after changes become effective constitutes acceptance of
          the revised Terms.
        </p>

        <h2>17. Contact us</h2>
        <p>
          If you have questions about these Terms, please contact:
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