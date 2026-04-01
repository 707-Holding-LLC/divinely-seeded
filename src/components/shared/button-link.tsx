"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={clsx(
          "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-semibold transition",
          variant === "primary" &&
            "bg-[var(--brand)] text-white shadow-sm hover:bg-[var(--brand-dark)]",
          variant === "secondary" &&
            "border border-[#d9dde7] bg-white text-[var(--foreground)] hover:border-[var(--brand)] hover:text-[var(--brand)]",
          variant === "dark" &&
            "border border-[#4a352e] bg-[#47332c] text-white hover:border-[#5b4139] hover:bg-[#5b4139] hover:text-white",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}