export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  /** Preenchido apenas quando o código é público. */
  repoUrl?: string;
  /** Preenchido apenas quando existe uma versão publicada. */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Task App",
    description:
      "Aplicação de tarefas com interface moderna e componentizada, com criação, conclusão e filtro de tarefas.",
    image: "/project-1.png",
    imageAlt: "Tela do Task App com a lista de tarefas",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Portfólio",
    description:
      "Este portfólio: uma single page em Next.js com App Router, renderização estática, SEO e foco em acessibilidade.",
    image: "/project-2.png",
    imageAlt: "Tela inicial do portfólio",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/dkzinbr/portfolio",
  },
  {
    title: "Landing Page",
    description:
      "Um presente para minha namorada e o primeiro projeto que fiz sozinho, do zero, só com HTML, CSS e JavaScript.",
    image: "/project-3.png",
    imageAlt: "Tela da landing page feita como presente",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
