import type { CSSProperties } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: FaNodeJs, name: "Node.js", color: "#5FA04E" },
  { icon: FaGitAlt, name: "Git", color: "#F05032" },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20">
      <h3 className="mb-8 text-3xl font-bold uppercase">Hard-skills</h3>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="group flex h-20 w-full items-center justify-center rounded-xl border border-slate-700 bg-[#0B1228]/60 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--skill-color)]/60 hover:[box-shadow:0_0_30px_var(--skill-glow)]"
              style={{
                "--skill-color": skill.color,
                "--skill-glow": `${skill.color}33`,
              } as CSSProperties}
            >
              <div
                className="rounded-full p-2 transition duration-300 group-hover:scale-110 group-hover:[box-shadow:0_0_24px_var(--skill-glow)]"
              >
                <Icon
                  size={28}
                  className="transition duration-300 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_12px_var(--skill-color))]"
                  style={{
                    color: skill.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
