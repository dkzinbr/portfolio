import Image from "next/image";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Reveal from "@/src/components/ui/reveal";
import { professionalFacts, profile } from "@/src/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-titulo"
      className="grid items-center gap-14 pb-24 pt-16 md:min-h-[calc(100vh-76px)] md:pb-28 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
    >
      <Reveal>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-light">
          {profile.role}
        </p>

        <h1
          id="home-titulo"
          className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]"
        >
          {profile.fullName}
        </h1>

        <p className="mt-8 max-w-2xl text-xl font-medium leading-8 tracking-[-0.02em] text-slate-200 md:text-2xl md:leading-9">
          {profile.headline}
        </p>

        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-night transition hover:-translate-y-0.5 hover:bg-brand-light"
          >
            Ver projetos selecionados
            <FaArrowRight
              aria-hidden="true"
              className="text-xs transition group-hover:translate-x-0.5"
            />
          </a>

          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-brand-light"
          >
            <FaDownload aria-hidden="true" className="text-xs" />
            Baixar currículo
          </a>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-white"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
            <span className="sr-only">(abre em nova aba)</span>
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-white"
          >
            <FaGithub aria-hidden="true" />
            GitHub
            <span className="sr-only">(abre em nova aba)</span>
          </a>
        </div>

        <dl className="mt-12 grid gap-5 border-t border-line pt-6 sm:grid-cols-3">
          {professionalFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm font-medium text-slate-200">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative mx-auto max-w-[430px] lg:ml-auto">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-brand/10 bg-brand/[0.025]" />
          <div className="overflow-hidden rounded-[1.6rem] border border-line bg-surface p-2 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <div className="relative overflow-hidden rounded-[1.15rem]">
              <Image
                src="/perfil.jpg"
                alt={`Retrato de ${profile.fullName}`}
                width={739}
                height={1304}
                priority
                sizes="(min-width: 1024px) 430px, (min-width: 640px) 55vw, 90vw"
                className="aspect-[4/5] w-full object-cover object-[50%_28%] saturate-[0.85]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07090f] via-[#07090f]/45 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                  />
                  {profile.availability}
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                  <FaLocationDot aria-hidden="true" className="text-brand-light" />
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
          <p className="absolute -right-4 top-10 hidden rounded-lg border border-line bg-night/90 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted shadow-xl backdrop-blur md:block">
            React · Next.js · Node.js
          </p>
        </div>
      </Reveal>
    </section>
  );
}
