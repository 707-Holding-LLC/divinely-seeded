import { ReactNode } from "react";
import clsx from "clsx";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section className={clsx("mx-auto w-full max-w-7xl px-6 lg:px-10", className)}>
      {children}
    </section>
  );
}