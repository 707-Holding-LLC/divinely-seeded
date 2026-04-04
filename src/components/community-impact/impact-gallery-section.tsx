"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/layout/section-container";

export function ImpactGallerySection() {
  return (
    <section className="py-24">
      <SectionContainer>
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[30px]">
              <Image
                src="/women-1.png"
                alt="Community celebration"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="relative min-h-[250px] overflow-hidden rounded-[26px]">
                  <Image
                    src="/women-2.png"
                    alt="Connection"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative min-h-[250px] overflow-hidden rounded-[26px]">
                  <Image
                    src="/women-3.png"
                    alt="Coaching support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative min-h-[250px] overflow-hidden rounded-[26px]">
                <Image
                  src="/women-5.jpeg"
                  alt="Group connection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}