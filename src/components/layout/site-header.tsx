"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { motion } from "framer-motion";
import clsx from "clsx";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,246,243,0.95)] backdrop-blur">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Divinely Seeded logo"
            width={180}
            height={64}
            priority
            className="h-auto w-[120px] sm:w-[140px] md:w-[160px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "relative pb-2 text-sm font-medium transition xl:text-base",
                  isActive
                    ? "text-[var(--brand)]"
                    : "text-[var(--foreground)] hover:text-[var(--brand)]"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[10px] h-[2px] rounded-full bg-[var(--brand)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </header>
  );
}