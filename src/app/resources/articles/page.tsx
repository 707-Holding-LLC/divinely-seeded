import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { BlogPostSummary, SiteSettings } from "@/sanity/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Articles | Divinely Seeded",
  description:
    "Explore Divinely Seeded articles on wellness, faith, provider-informed conversations, and intentional living.",
  alternates: {
    canonical: "/resources/articles",
  },
  openGraph: {
    title: "Articles | Divinely Seeded",
    description:
      "Explore Divinely Seeded articles on wellness, faith, provider-informed conversations, and intentional living.",
    url: "/resources/articles",
  },
  twitter: {
    title: "Articles | Divinely Seeded",
    description:
      "Explore Divinely Seeded articles on wellness, faith, provider-informed conversations, and intentional living.",
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

export default async function ArticlesPage() {
  const [{ data: posts }, { data: settings }] = await Promise.all([
    sanityFetch({ query: blogPostsQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ]);

  const articles = (posts || []) as BlogPostSummary[];
  const siteSettings = (settings || null) as SiteSettings | null;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteHeader settings={siteSettings} />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#68b7b0]">
            Divinely Seeded Articles
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#102044] md:text-6xl">
            Wellness resources for intentional living.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#5b6475]">
            Explore reflections, educational articles, and grounded guidance
            created to support women in approaching wellness with clarity,
            faith, and provider-informed awareness.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="mx-auto mt-16 max-w-3xl rounded-[2rem] border border-[#eadfd5] bg-white/80 p-8 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-[#102044]">
              No articles yet
            </h2>
            <p className="mt-3 text-[#5b6475]">
              New Divinely Seeded articles will appear here once they are
              ready to share.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((post) => {
              const imageUrl = post.featuredImage
                ? urlFor(post.featuredImage as SanityImageSource)
                    .width(900)
                    .height(650)
                    .fit("crop")
                    .url()
                : null;

              return (
                <article
                  key={post._id}
                  className="group overflow-hidden rounded-[2rem] border border-[#eadfd5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {imageUrl ? (
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={
                          post.featuredImageAlt ||
                          post.title ||
                          "Divinely Seeded article image"
                        }
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ) : (
                    <div className="flex h-60 items-center justify-center bg-[#efe4da]">
                      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#68b7b0]">
                        Divinely Seeded
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#68b7b0]">
                      <span>{formatPillar(post.contentPillar)}</span>
                      {post.publishAt ? (
                        <span>· {formatDate(post.publishAt)}</span>
                      ) : null}
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#102044]">
                      {post.title}
                    </h2>

                    {post.excerpt ? (
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#5b6475]">
                        {post.excerpt}
                      </p>
                    ) : null}

                    {post.slug?.current ? (
                      <Link
                        href={`/resources/articles/${post.slug.current}`}
                        className="mt-6 inline-flex text-sm font-semibold text-[#102044] underline decoration-[#68b7b0] decoration-2 underline-offset-4"
                      >
                        Read article
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <SiteFooter settings={siteSettings} />
    </main>
  );
}