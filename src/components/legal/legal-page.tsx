import { ReactNode } from "react";
import { PortableText } from "@portabletext/react";
import { SectionContainer } from "@/components/layout/section-container";
import type { PortableTextBlock } from "@/sanity/lib/types";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  children?: ReactNode;
  body?: PortableTextBlock[];
};

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => <p>{children}</p>,
    h2: ({ children }: { children?: ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children?: ReactNode }) => <h3>{children}</h3>,
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => <ul>{children}</ul>,
    number: ({ children }: { children?: ReactNode }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => <strong>{children}</strong>,
    em: ({ children }: { children?: ReactNode }) => <em>{children}</em>,
    link: ({
      children,
      value,
    }: {
      children?: ReactNode;
      value?: { href?: string };
    }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  children,
  body,
}: LegalPageProps) {
  return (
    <section className="py-16 lg:py-20">
      <SectionContainer className="max-w-5xl">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-[#f3dfd5] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
            {eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-[#8e97ad]">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-lg mt-12 max-w-none prose-headings:font-semibold prose-headings:text-[var(--foreground)] prose-p:text-[var(--muted)] prose-p:leading-8 prose-li:text-[var(--muted)] prose-li:leading-8 prose-strong:text-[var(--foreground)]">
          {body?.length ? (
            <PortableText value={body} components={portableTextComponents} />
          ) : (
            children
          )}
        </div>
      </SectionContainer>
    </section>
  );
}