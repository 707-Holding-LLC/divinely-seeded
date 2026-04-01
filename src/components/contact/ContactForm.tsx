"use client";

import { useState, useRef } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSciyFufmBHE-ITumW3HrBVTDpuQ5GrOrJ8FY6y9hSUgy5FgiA/formResponse";

const ENTRY_FIRST_NAME = "entry.454892663";
const ENTRY_LAST_NAME  = "entry.1218174906";
const ENTRY_EMAIL      = "entry.781986437";
const ENTRY_INQUIRY    = "entry.604739016";
const ENTRY_MESSAGE    = "entry.2123967211";

const inquiryOptions = [
  "General Inquiry",
  "Book a Consultation",
  "Coaching Inquiry",
  "Workshops & Partnerships",
  "Other",
];

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand)]/10 text-3xl text-[var(--brand)]">
        ✓
      </div>
      <h3 className="mt-5 font-heading text-2xl font-bold text-[var(--foreground)]">
        Message Sent!
      </h3>
      <p className="mt-3 max-w-sm text-base leading-7 text-[var(--muted)]">
        Thank you for reaching out. Our team will get back to you within 24–48
        hours.
      </p>
    </div>
  );
}

export function ContactForm() {
  const [firstName, setFirstName]   = useState("");
  const [lastName, setLastName]     = useState("");
  const [email, setEmail]           = useState("");
  const [inquiry, setInquiry]       = useState("General Inquiry");
  const [message, setMessage]       = useState("");
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const iframeRef                   = useRef<HTMLIFrameElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        setSubmitted(true);
        setSubmitting(false);
      };
    }
    e.currentTarget.submit();
  }

  const inputClass =
    "h-14 w-full rounded-xl border border-[#e2d5cc] bg-white px-4 text-base text-[var(--foreground)] outline-none placeholder:text-[#b8a9a0] transition focus:border-[var(--brand)]";

  const labelClass =
    "mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)]";

  return (
    <>
      <div className="rounded-3xl bg-[#fdf5f0] p-8 sm:p-10">
        {submitted ? (
          <SuccessMessage />
        ) : (
          <>
            <h2 className="font-heading text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              Send us a message
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              Fill out the form below and our team will get back to you within
              24–48 hours.
            </p>

            <form
              action={FORM_ACTION}
              method="POST"
              target="ds-contact-iframe"
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Hidden inputs — carry all values into the POST */}
              <input type="hidden" name={ENTRY_FIRST_NAME} value={firstName} />
              <input type="hidden" name={ENTRY_LAST_NAME}  value={lastName} />
              <input type="hidden" name={ENTRY_EMAIL}      value={email} />
              <input type="hidden" name={ENTRY_INQUIRY}    value={inquiry} />
              <input type="hidden" name={ENTRY_MESSAGE}    value={message} />

              {/* First + Last */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Jane"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>

              {/* Inquiry dropdown */}
              <div>
                <label className={labelClass}>How Can We Help?</label>
                <div className="relative">
                  <select
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    className="h-14 w-full appearance-none rounded-xl border border-[#e2d5cc] bg-white px-4 pr-10 text-base text-[var(--foreground)] outline-none transition focus:border-[var(--brand)]"
                  >
                    {inquiryOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                    ▾
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your journey…"
                  className="w-full resize-none rounded-xl border border-[#e2d5cc] bg-white px-4 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[#b8a9a0] transition focus:border-[var(--brand)]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[var(--brand)] text-base font-semibold text-white transition hover:bg-[var(--brand-dark)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>

      {/* Hidden iframe absorbs Google's post-submit redirect */}
      <iframe
        ref={iframeRef}
        name="ds-contact-iframe"
        title="Form submission target"
        aria-hidden="true"
        className="hidden"
      />
    </>
  );
}