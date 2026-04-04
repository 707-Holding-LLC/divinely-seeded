"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

export function SiteHeader() {
  const pathname = normalizePath(usePathname());
  const [mobileOpen, setMobileOpen] = useState(false);

  const orderedNavLinks = useMemo(() => {
    const desiredOrder = [
      "/",
      "/about",
      "/programs",
      "/resources",
      "/community-impact",
      "/contact",
    ];
    const orderMap = new Map(desiredOrder.map((href, index) => [href, index]));
    return [...navLinks].sort((a, b) => {
      const aIndex = orderMap.get(a.href) ?? 999;
      const bIndex = orderMap.get(b.href) ?? 999;
      return aIndex - bIndex;
    });
  }, []);

  const isActiveLink = (href: string) => {
    const normalizedHref = normalizePath(href);
    if (normalizedHref === "/") return pathname === "/";
    return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
  };

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,246,243,0.95)] backdrop-blur">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

        {/* ── Logo — larger and left-aligned ── */}
        <Link href="/" className="shrink-0" onClick={closeMobileMenu}>
          <Image
            src="/seeded-logo.svg"
            alt="Divinely Seeded logo"
            width={220}
            height={72}
            priority
            className="h-auto w-[140px] sm:w-[170px] md:w-[190px] lg:w-[210px]"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {orderedNavLinks.map((link) => {
            const isActive = isActiveLink(link.href);
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

        {/* ── CTA + mobile toggle ── */}
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="hidden sm:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)] lg:px-6"
            >
              Book Now
            </Link>
          </motion.div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-[var(--line)] bg-(--background) lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
              <nav className="flex flex-col">
                {orderedNavLinks.map((link) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={clsx(
                        "rounded-2xl px-4 py-3 text-base font-medium transition",
                        isActive
                          ? "bg-[rgba(243,223,213,0.55)] text-[var(--brand)]"
                          : "text-[var(--foreground)] hover:bg-white hover:text-[var(--brand)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 sm:hidden">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}