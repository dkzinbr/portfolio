import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Section from "@/src/components/ui/section";
import Reveal from "@/src/components/ui/reveal";
import { projects } from "@/src/data/projects";
import { surfaceCard, surfaceCardHover } from "@/src/lib/ui";

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Portfólio"
      title="Projetos"
      description="Alguns projetos que construí estudando e trabalhando. Cada um me ensinou algo que uso hoje."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.title}>
            <Reveal delay={index * 90} className="h-full">
              <article
                className={`${surfaceCard} ${surfaceCardHover} group flex h-full flex-col overflow-hidden`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand-light"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {project.repoUrl || project.liveUrl ? (
                    <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-4">
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-brand-light"
                        >
                          <FaGithub aria-hidden="true" />
                          Código
                          <span className="sr-only">
                            do projeto {project.title} (abre em nova aba)
                          </span>
                        </a>
                      ) : null}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-brand-light"
                        >
                          <FaArrowUpRightFromSquare aria-hidden="true" className="text-xs" />
                          Ver online
                          <span className="sr-only">
                            o projeto {project.title} (abre em nova aba)
                          </span>
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
