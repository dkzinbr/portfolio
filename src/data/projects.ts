export type Project = {
  title: string;
  category: string;
  summary: string;
  highlights: string[];
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
    title: "Portfólio profissional",
    category: "Produto pessoal · 2026",
    summary:
      "Plataforma pessoal criada para apresentar experiência, projetos e competências com uma navegação rápida e acessível.",
    highlights: [
      "App Router e geração estática",
      "SEO técnico e dados estruturados",
      "Navegação acessível e responsiva",
    ],
    image: "/project-portfolio-v2.png",
    imageAlt: "Tela inicial do portfólio profissional de Henri Teodoro",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/dkzinbr/portfolio",
    liveUrl: "https://portfolio-henri.vercel.app",
  },
  {
    title: "Task App",
    category: "Aplicação web · Projeto de estudo",
    summary:
      "Experiência de organização de tarefas construída com componentes reutilizáveis, tipagem estática e estados de interface bem definidos.",
    highlights: [
      "Criação e conclusão de tarefas",
      "Filtros de visualização",
      "Interface responsiva",
    ],
    image: "/project-1.png",
    imageAlt: "Tela do Task App com a lista de tarefas",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Landing Page",
    category: "Landing page · Projeto autoral",
    summary:
      "Landing page desenvolvida do zero para praticar estrutura semântica, composição visual responsiva e interações sem frameworks.",
    highlights: [
      "HTML semântico",
      "CSS responsivo",
      "Interações em JavaScript",
    ],
    image: "/project-3.png",
    imageAlt: "Tela de uma landing page autoral",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
