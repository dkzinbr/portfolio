import type { CSSProperties } from "react";

import Section from "@/src/components/ui/section";
import Reveal from "@/src/components/ui/reveal";
import { skillGroups } from "@/src/data/skills";
import { surfaceCard } from "@/src/lib/ui";

export default function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Stack"
      title="Hard skills"
      description="As tecnologias que uso no dia a dia para tirar uma ideia do papel e colocar em produção."
    >
      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              {group.title}
            </h3>

            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <li key={skill.name}>
                    <Reveal delay={index * 60}>
                      <div
                        className={`${surfaceCard} group flex h-full items-center gap-3 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--skill-color)]/60 hover:[box-shadow:0_0_30px_var(--skill-glow)]`}
                        style={
                          {
                            "--skill-color": skill.color,
                            "--skill-glow": `${skill.color}33`,
                          } as CSSProperties
                        }
                      >
                        <Icon
                          aria-hidden="true"
                          size={24}
                          className="shrink-0 transition duration-300 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_12px_var(--skill-color))]"
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
