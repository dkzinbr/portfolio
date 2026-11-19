import type { IconType } from "react-icons";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiDotnet,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

export type HardSkill = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: HardSkill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Stack principal",
    description: "Tecnologias que concentram meu desenvolvimento atual.",
    skills: [
      { name: "C#", icon: TbBrandCSharp, color: "#9B4F96" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
    ],
  },
  {
    title: "Fundamentos de interface",
    description: "Base para criar experiências semânticas e responsivas.",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Back-end, dados e testes",
    description: "APIs, banco de dados e testes automatizados nos projetos full stack.",
    skills: [
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
      { name: "Vitest", icon: SiVitest, color: "#729B1B" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
  },
];

export const practices = [
  "Componentização",
  "Responsividade",
  "Acessibilidade",
  "Integração com APIs",
  "Código legível",
  "Git flow",
];
