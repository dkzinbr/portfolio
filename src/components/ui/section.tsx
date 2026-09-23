import type { ReactNode } from "react";

import { cn } from "@/src/lib/ui";
import Reveal from "@/src/components/ui/reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-light">
      {children}
    </span>
  );
}

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-titulo`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 md:py-24", className)}
    >
      <Reveal>
        <div className="max-w-2xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2
            id={headingId}
            className={cn(
              "text-3xl font-bold uppercase tracking-tight md:text-4xl",
              eyebrow && "mt-5",
            )}
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 leading-7 text-muted">{description}</p>
          ) : null}
        </div>
      </Reveal>

      <div className="mt-10 md:mt-12">{children}</div>
    </section>
  );
}
