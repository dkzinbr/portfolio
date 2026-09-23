import Image from "next/image";
import { FaCheck, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Section from "@/src/components/ui/section";
import Reveal from "@/src/components/ui/reveal";
import { projects, type Project } from "@/src/data/projects";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.repoUrl && !project.liveUrl) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-night transition hover:-translate-y-0.5 hover:bg-brand-light"
        >
          <FaArrowUpRightFromSquare aria-hidden="true" className="text-xs" />
          Ver projeto
          <span className="sr-only">{project.title} (abre em nova aba)</span>
        </a>
      ) : null}

      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-brand-light"
        >
          <FaGithub aria-hidden="true" />
          Código
          <span className="sr-only">do projeto {project.title} (abre em nova aba)</span>
        </a>
      ) : null}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
          <FaCheck aria-hidden="true" className="mt-1.5 shrink-0 text-[0.65rem] text-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <Section
      id="projetos"
      eyebrow="01 / Trabalho selecionado"
      title="Projetos com decisões que consigo explicar."
      description="Uma seleção de produtos em que pratiquei arquitetura de interface, responsividade, tipagem e integração entre as diferentes partes da aplicação."
    >
      <Reveal>
        <article className="group overflow-hidden rounded-2xl border border-line bg-surface/65">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[300px] overflow-hidden border-b border-line lg:min-h-[520px] lg:border-b-0 lg:border-r">
              <Image
                src={featuredProject.image}
                alt={featuredProject.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/35 to-transparent lg:hidden" />
            </div>

            <div className="flex flex-col justify-between p-7 md:p-9">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-light">
                  {featuredProject.category}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white">
                  {featuredProject.title}
                </h3>
                <p className="mt-5 leading-7 text-muted">{featuredProject.summary}</p>
                <div className="mt-7">
                  <Highlights items={featuredProject.highlights} />
                </div>
              </div>

              <div className="mt-10">
                <ul className="mb-6 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[0.65rem] text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ProjectLinks project={featuredProject} />
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      <ul className="mt-6 grid gap-6 lg:grid-cols-2">
        {otherProjects.map((project, index) => (
          <li key={project.title} className="h-full">
            <Reveal delay={(index + 1) * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 transition duration-300 hover:border-slate-600">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-brand-light">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-muted">{project.summary}</p>

                  <div className="mt-6">
                    <Highlights items={project.highlights} />
                  </div>

                  <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mono text-[0.65rem] text-slate-400"
                      >
                        {tag}
                        <span aria-hidden="true" className="ml-2 text-slate-700">
                          /
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
