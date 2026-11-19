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
    title: "Pirate Battle",
    category: "Jogo web · Desafio técnico · 2026",
    summary:
      "Shooter naval 2D jogável no navegador, com simulação em TypeScript puro a 120 Hz separada da renderização em PixiJS e das telas em React.",
    highlights: [
      "Simulação desacoplada do React e do renderizador",
      "Ranking e histórico com TanStack Query, Axios e MSW",
      "102 testes E2E com Playwright no desktop e no mobile",
    ],
    image: "/project-pirate-battle.png",
    imageAlt: "Partida do Pirate Battle com o navio do jogador entre ilhas e navios inimigos",
    tags: ["React", "TypeScript", "PixiJS", "TanStack Query", "Playwright"],
    repoUrl: "https://github.com/dkzinbr/pirate-battle",
    liveUrl: "https://pirate-battle-sigma-plum.vercel.app",
  },
  {
    title: "Ritual Party",
    category: "Aplicação full stack · Uso real · 2026",
    summary:
      "App mobile-first usado em uma festa real: convidados confirmam presença, são sorteados em equipes e enviam fotos de missões que o anfitrião aprova ao vivo.",
    highlights: [
      "API em Express com Postgres (Neon) e upload de fotos",
      "Painel do anfitrião protegido por PIN",
      "78 testes automatizados com Vitest",
    ],
    image: "/project-ritual-party.png",
    imageAlt: "Tela de entrada do Ritual Party com o formulário para entrar na festa",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Vitest"],
    repoUrl: "https://github.com/dkzinbr/ritual-party",
    liveUrl: "https://22evy.vercel.app",
  },
  {
    title: "Estocke",
    category: "Sistema interno · ADC Benefícios · 2026",
    summary:
      "Sistema interno de pedidos, chamados de mau funcionamento e estoque que desenvolvi na ADC Benefícios. É a evolução de dois protótipos anteriores (OperaPlan e inventory). A demo pública usa dados fictícios.",
    highlights: [
      "Perfis de acesso: admin, supervisor e funcionário",
      "Trilha de auditoria e troca de senha obrigatória no 1º acesso",
      "API com rotas do Next.js, Prisma, PostgreSQL e JWT",
    ],
    image: "/project-estocke.png",
    imageAlt: "Tela de login do Estocke, plataforma de gestão de estoque",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
    repoUrl: "https://github.com/dkzinbr/estocke",
    liveUrl: "https://estocke-adc.vercel.app",
  },
  {
    title: "Pharma Pads ERP",
    category: "Sistema de gestão · Full stack · 2026",
    summary:
      "ERP para um pequeno negócio com clientes, fornecedores, produtos, estoque, vendas, compras e relatórios, com autenticação por JWT.",
    highlights: [
      "API REST com rotas do Next.js e validação com Zod",
      "Modelagem de dados com Prisma e PostgreSQL",
      "Dashboard com indicadores e gráficos",
    ],
    image: "/project-pharma-pads.png",
    imageAlt: "Tela de login do ERP Pharma Pads",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
    repoUrl: "https://github.com/dkzinbr/pharma-pads",
    liveUrl: "https://pharma-pads.vercel.app",
  },
  {
    title: "Luck’s Style",
    category: "Site institucional · Cliente real · 2026",
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
    repoUrl: "https://github.com/dkzinbr/luck-leads",
    liveUrl: "https://barbearia-lucks-style.vercel.app",
  },

];
