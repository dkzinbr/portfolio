import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaJs, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaGithub, name: "GitHub" },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20">
      <h3 className="mb-8 text-3xl font-bold uppercase">Habilidades</h3>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="group flex h-20 w-full items-center justify-center rounded-xl border border-slate-700 bg-[#0B1228]/60 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-500"
            >
              <Icon
                size={28}
                className="text-slate-300 transition group-hover:text-blue-400"
              />
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Conhecimento em SOLID
        </span>
      </div>
    </section>
  );
}