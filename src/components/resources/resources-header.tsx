"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Resources", href: "/resources" },
  { label: "Community Impact", href: "/community-impact" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function ResourcesHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,246,243,0.96)] backdrop-blur">
      <div className="mx-auto flex h-24 w-full max-w-[1600px] items-center justify-between gap-6 px-6 lg:px-10">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Divinely Seeded logo"
              width={200}
              height={56}
              priority
              className="h-auto w-[150px] sm:w-[170px] md:w-[190px]"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={clsx(
                    "relative pb-2 text-[15px] font-medium transition",
                    isActive
                      ? "text-[var(--brand)]"
                      : "text-[var(--foreground)] hover:text-[var(--brand)]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-[10px] h-[2px] rounded-full bg-[var(--brand)]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:flex">
          <div className="flex h-14 min-w-[300px] items-center gap-3 rounded-full bg-[#eef2f7] px-5 text-[#7f8aa3]">
            <Search className="h-5 w-5" />
            <span className="text-base">Search resources...</span>
          </div>
        </div>
      </div>
    </header>
  );
}