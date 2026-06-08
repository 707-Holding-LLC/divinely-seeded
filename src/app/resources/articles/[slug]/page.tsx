import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { sanityFetch } from "@/sanity/lib/live";
import {
  blogPostBySlugQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { BlogPostData, SiteSettings } from "@/sanity/lib/types";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-6 text-lg leading-8 text-[#465166]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-semibold tracking-tight text-[#102044]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#102044]">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-4 border-[#68b7b0] pl-6 text-xl italic leading-8 text-[#102044]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-[#465166]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-[#465166]">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          className="font-semibold text-[#5aa9a3] underline underline-offset-4"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

function formatDate(date?: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function formatPillar(pillar?: string) {
  const labels: Record<string, string> = {
    "peptide-informed-lifestyle": "Peptide-Informed Lifestyle",
    "primary-food-passport": "Primary Food Passport",
    "metabolic-wellness": "Metabolic Wellness",
    "self-advocacy-provider-collaboration":
    "Self-Advocacy & Provider Collaboration",
    "faith-intentional-living": "Faith + Intentional Living",
  };

  return pillar ? labels[pillar] || pillar : "Divinely Seeded";
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const { data } = await sanityFetch({
    query: blogPostBySlugQuery,
    params: { slug },
  });

  const post = (data || null) as BlogPostData | null;

  if (!post) {
    return {
      title: "Article Not Found | Divinely Seeded",
    };
  }

  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage as SanityImageSource)
        .width(1200)
        .height(630)
        .fit("crop")
        .url()
    : undefined;

  return {
    title: `${post.title} | Divinely Seeded`,
    description: post.excerpt || "Read this Divinely Seeded wellness article.",
    alternates: {
      canonical: `/resources/articles/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || "Read this Divinely Seeded wellness article.",
      url: `/resources/articles/${slug}`,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      title: post.title,
      description: post.excerpt || "Read this Divinely Seeded wellness article.",
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const [{ data: postData }, { data: settings }] = await Promise.all([
    sanityFetch({
      query: blogPostBySlugQuery,
      params: { slug },
    }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const post = (postData || null) as BlogPostData | null;
  const siteSettings = (settings || null) as SiteSettings | null;

  if (!post) {
    notFound();
  }

  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage as SanityImageSource)
        .width(1400)
        .height(850)
        .fit("crop")
        .url()
    : null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader settings={siteSettings} />

      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Link
          href="/resources/articles"
          className="text-sm font-semibold text-[#5aa9a3] underline decoration-2 underline-offset-4"
        >
          ← Back to articles
        </Link>

        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#68b7b0]">
            {formatPillar(post.contentPillar)}
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#102044] md:text-6xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#5b6475]">
            {post.author ? <span>By {post.author}</span> : null}
            {post.publishAt ? <span>· {formatDate(post.publishAt)}</span> : null}
          </div>

          {post.excerpt ? (
            <p className="mt-8 text-xl leading-8 text-[#5b6475]">
              {post.excerpt}
            </p>
          ) : null}
        </header>

        {imageUrl ? (
          <div className="relative mt-12 h-[28rem] overflow-hidden rounded-[2rem]">
            <Image
              src={imageUrl}
              alt={
                post.featuredImageAlt ||
                post.title ||
                "Divinely Seeded article image"
              }
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
            />
          </div>
        ) : null}

        <section className="mt-12">
          {post.body && post.body.length > 0 ? (
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          ) : (
            <p className="text-lg leading-8 text-[#465166]">
              This article is being prepared.
            </p>
          )}
        </section>
      </article>

      <SiteFooter settings={siteSettings} />
    </main>
  );
}