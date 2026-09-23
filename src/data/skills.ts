import type { IconType } from "react-icons";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export type HardSkill = {
  name: string;
  icon: IconType;
  color: string;
};

export type SkillGroup = {
  title: string;
  skills: HardSkill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Back-end e ferramentas",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
    ],
  },
];

export type SoftSkill = {
  title: string;
  description: string;
};

export const softSkills: SoftSkill[] = [
  {
    title: "Comunicação clara",
    description:
      "Explico o que estou fazendo sem enrolação, tanto para quem é técnico quanto para quem não é.",
  },
  {
    title: "Trabalho em equipe",
    description:
      "Gosto de revisar código com calma, pedir ajuda quando travo e dividir o que aprendi.",
  },
  {
    title: "Aprendizado constante",
    description:
      "Estudo todos os dias e transformo cada tecnologia nova em um projeto pequeno para fixar.",
  },
  {
    title: "Organização",
    description:
      "Quebro tarefas grandes em entregas pequenas para manter o ritmo e o histórico limpo.",
  },
  {
    title: "Resolução de problemas",
    description:
      "Antes de sair codando, investigo a causa do bug para resolver o problema certo.",
  },
  {
    title: "Adaptabilidade",
    description:
      "Já mudei de stack, de prioridade e de escopo no meio do caminho, e sigo entregando.",
  },
];
