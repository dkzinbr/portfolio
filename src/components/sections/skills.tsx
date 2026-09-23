import type { CSSProperties } from "react";

import Section from "@/src/components/ui/section";
import Reveal from "@/src/components/ui/reveal";
import { practices, skillGroups } from "@/src/data/skills";

export default function Skills() {
  return (
    <Section
      id="competencias"
      eyebrow="03 / Competências"
      title="Uma stack objetiva, sustentada por fundamentos."
      description="Ferramentas são escolhas de implementação. O objetivo continua sendo entregar interfaces claras, integrações confiáveis e código que outra pessoa consiga manter."
    >
      <div className="grid overflow-hidden rounded-2xl border border-line bg-surface/45 md:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 80} className="h-full">
            <article className="h-full border-b border-line p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-8">
              <p className="font-mono text-[0.65rem] text-brand-light">
                0{groupIndex + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                {group.title}
              </h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-muted">
                {group.description}
              </p>

              <ul className="mt-7 space-y-1">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <li
                      key={skill.name}
                      className="group flex items-center justify-between border-t border-line/70 py-3.5 first:border-t-brand/30"
                      style={{ "--skill-color": skill.color } as CSSProperties}
                    >
                      <span className="text-sm font-medium text-slate-300 transition group-hover:text-white">
                        {skill.name}
                      </span>
                      <Icon
                        aria-hidden="true"
                        size={20}
                        className="text-slate-500 transition group-hover:text-[var(--skill-color)]"
                      />
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="mt-8 flex flex-col gap-5 border-y border-line py-6 md:flex-row md:items-center">
          <p className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">
            Práticas de desenvolvimento
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {practices.map((practice) => (
              <li key={practice} className="text-sm font-medium text-slate-300">
                <span aria-hidden="true" className="mr-2 text-brand">
                  /
                </span>
                {practice}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
