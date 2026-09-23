import { FaCheck } from "react-icons/fa";

import Reveal from "@/src/components/ui/reveal";
import Section from "@/src/components/ui/section";
import { experience, workingPrinciples } from "@/src/data/experience";

export default function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="02 / Trajetória"
      title="Experiência que fortaleceu minha base técnica."
      description="O ambiente de startup me ensinou a navegar entre diferentes partes do produto, comunicar decisões e manter o foco na entrega."
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <Reveal>
          <article className="relative overflow-hidden rounded-2xl border border-line bg-surface/55 p-7 md:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-brand via-brand/30 to-transparent"
            />

            <div className="flex flex-col gap-5 border-b border-line pb-7 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-light">
                  {experience.organization}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                  {experience.role}
                </h3>
              </div>
              <p className="shrink-0 rounded-md border border-line bg-white/[0.03] px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-slate-300">
                {experience.duration}
              </p>
            </div>

            <p className="mt-7 max-w-2xl leading-7 text-muted">{experience.description}</p>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {experience.activities.map((activity) => (
                <li
                  key={activity}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <FaCheck
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 text-[0.65rem] text-brand"
                  />
                  {activity}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              Como trabalho
            </h3>
            <ol className="mt-5">
              {workingPrinciples.map((principle) => (
                <li
                  key={principle.number}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-6 first:border-t-brand/50"
                >
                  <span className="font-mono text-xs text-brand-light">{principle.number}</span>
                  <div>
                    <h4 className="font-semibold text-white">{principle.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
