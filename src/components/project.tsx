import Image from "next/image";
import { projects } from "../data/projectsAndSkills";

export default function Projects() {
  return (
    <section id="projetos" className="py-20">
      <h3 className="mb-8 text-3xl font-bold uppercase">Projetos</h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-700 bg-[#0B1228]/60 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-500"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">
              <h4 className="text-xl font-semibold">{project.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.description}
              </p>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}