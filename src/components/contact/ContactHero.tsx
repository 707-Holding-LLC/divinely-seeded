import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative h-[420px] overflow-hidden sm:h-[480px]">
      <Image
        src="/contact-hero.png"
        alt="Lush green fern canopy — Begin Your Wellness Journey"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Begin Your Wellness Journey
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
          We are here to support your path to wholeness. Whether you seek
          guidance, partnership, or community, reach out to us.
        </p>
      </div>
    </section>
  );
}