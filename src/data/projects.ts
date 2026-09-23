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
    title: "Luck’s Style",
    category: "Site institucional · Negócio local · 2026",
    summary:
      "Experiência digital criada para uma barbearia real, conectando marca, equipe, serviços e canais de conversão em uma navegação responsiva.",
    highlights: [
      "Agendamento externo, WhatsApp e Google Maps",
      "Apresentação de planos e catálogo de produtos",
      "Galerias de equipe e cortes com imagens otimizadas",
    ],
    image: "/project-lucks-style.png",
    imageAlt: "Tela inicial do site da Barbearia Luck’s Style",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://barbearialucksstyle.com",
  },
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
];
