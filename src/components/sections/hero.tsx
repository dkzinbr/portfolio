import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

import Reveal from "@/src/components/ui/reveal";
import { profile, stats } from "@/src/data/profile";
import { surfaceCard } from "@/src/lib/ui";

const codeLines = [
  { indent: 0, content: "const henri = {" },
  { indent: 1, content: `cargo: "Full-stack",`, accent: true },
  { indent: 1, content: `base: "São Paulo, BR",`, accent: true },
  { indent: 1, content: "stack: [", accent: true },
  { indent: 2, content: `"React", "Next.js",`, accent: true },
  { indent: 2, content: `"TypeScript", "Node.js",`, accent: true },
  { indent: 1, content: "],", accent: true },
  { indent: 1, content: "cafesPorDia: Infinity,", accent: true },
  { indent: 0, content: "};" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-titulo"
      className="grid items-center gap-12 py-16 md:min-h-[85vh] md:grid-cols-2 md:py-20"
    >
      <Reveal>
        <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
          <span
            aria-hidden="true"
            className="animate-pulse-ring h-2 w-2 rounded-full bg-emerald-400"
          />
          {profile.availability}
        </p>

        <h1
          id="home-titulo"
          className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl"
        >
          Olá, eu sou o{" "}
          <span className="bg-gradient-to-r from-brand-light to-brand bg-clip-text text-transparent">
            {profile.firstName}
          </span>
          , desenvolvedor{" "}
          <span className="whitespace-nowrap">full-stack</span>.
        </h1>

        <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 md:text-lg">
          {profile.headline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-[#1d4ed8] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(37,99,235,0.4)]"
          >
            Ver projetos
            <FaArrowRight
              aria-hidden="true"
              className="text-xs transition group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/70 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-brand/60"
          >
            Entrar em contato
          </a>

          <div className="flex items-center gap-2">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil no LinkedIn (abre em nova aba)"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/70 text-slate-300 transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-white"
            >
              <FaLinkedin aria-hidden="true" className="text-xl" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil no GitHub (abre em nova aba)"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/70 text-slate-300 transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-white"
            >
              <FaGithub aria-hidden="true" className="text-xl" />
            </a>
          </div>
        </div>

        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-line pl-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs leading-5 text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={120}>
        <div
          className={`${surfaceCard} p-5 shadow-[0_0_40px_rgba(37,99,235,0.1)] md:p-6`}
        >
          <div className="mb-5 flex items-center gap-2">
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-red-400/70" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="ml-2 font-mono text-xs text-muted">henri.ts</span>
          </div>

          <pre className="overflow-x-auto font-mono text-xs leading-7 text-slate-300 md:text-sm">
            <code>
              {codeLines.map((line, index) => (
                <span key={line.content} className="flex gap-4">
                  <span aria-hidden="true" className="w-4 shrink-0 text-right text-slate-600">
                    {index + 1}
                  </span>
                  <span className={line.accent ? "text-brand-light" : "text-slate-200"}>
                    {"  ".repeat(line.indent)}
                    {line.content}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </Reveal>
    </section>
  );
}
