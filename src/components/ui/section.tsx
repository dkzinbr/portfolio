import type { ReactNode } from "react";

import { cn } from "@/src/lib/ui";
import Reveal from "@/src/components/ui/reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-light">
      <span aria-hidden="true" className="h-px w-7 bg-brand/70" />
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
      className={cn("py-20 md:py-28", className)}
    >
      <Reveal>
        <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-10">
          <div>{eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}</div>
          <div className="max-w-3xl">
            <h2
              id={headingId}
              className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  );
}
