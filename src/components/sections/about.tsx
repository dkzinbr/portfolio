import { FaArrowRight } from "react-icons/fa";

import Section from "@/src/components/ui/section";
import Reveal from "@/src/components/ui/reveal";
import { bio } from "@/src/data/profile";

const currentFocus = [
  "Interfaces acessíveis e responsivas",
  "Integração entre front-end e APIs",
  "TypeScript em aplicações modernas",
] as const;

export default function About() {
  return (
    <Section
      id="sobre"
      eyebrow="04 / Sobre"
      title="Curiosidade, prática e evolução constante."
      description="Meu objetivo é crescer como desenvolvedor sem perder de vista quem usa o produto e quem dará manutenção ao código."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal>
          <div className="space-y-6">
            {bio.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-lg leading-8 text-slate-300"
              >
                {paragraph}
              </p>
            ))}

            <a
              href="#contato"
              className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white transition hover:text-brand-light"
            >
              Vamos conversar
              <FaArrowRight
                aria-hidden="true"
                className="text-xs transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-line bg-surface/45 p-7 md:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-light">
              Foco atual
            </p>
            <ul className="mt-5">
              {currentFocus.map((focus, index) => (
                <li
                  key={focus}
                  className="flex items-center gap-4 border-t border-line py-5 first:border-t-brand/30"
                >
                  <span className="font-mono text-xs text-slate-600">
                    0{index + 1}
                  </span>
                  <span className="font-medium text-slate-200">{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
