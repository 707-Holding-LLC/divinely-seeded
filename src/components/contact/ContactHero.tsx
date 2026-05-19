"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { ContactPageData } from "@/sanity/lib/types";

type ContactHeroProps = {
  page?: ContactPageData | null;
};

export function ContactHero({ page }: ContactHeroProps) {
  const imageUrl = page?.heroImage
    ? urlFor(page.heroImage).width(1600).height(1000).url()
    : "/contact-hero.png";

  return (
    <section className="relative h-[420px] overflow-hidden sm:h-[480px]">
      <Image
        src={imageUrl}
        alt={page?.heroImageAlt || "Lush green fern canopy — Begin Your Wellness Journey"}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {page?.heroTitle || "Begin Your Wellness Journey"}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
          {page?.heroBody ||
            "We are here to support your path to wholeness. Whether you seek guidance, partnership, or community, reach out to us."}
        </p>
      </div>
    </section>
  );
}