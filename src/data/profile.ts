const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

const whatsappMessage =
  "Olá Henri, vim pelo seu portfólio e gostaria de conversar.";

export const profile = {
  firstName: "Henri",
  fullName: "Henri Teodoro",
  role: "Desenvolvedor Full-stack",
  location: "São Paulo, Brasil",
  headline:
    "Desenvolvedor full-stack focado em React, Next.js, TypeScript e Node.js, criando interfaces modernas, acessíveis e rápidas.",
  availability: "Disponível para novas oportunidades",
  email: "henriteo23@gmail.com",
  whatsappNumber: "5511981798126",
  links: {
    github: "https://github.com/dkzinbr",
    linkedin: "https://www.linkedin.com/in/henri-teodoro/",
  },
} as const;

export const emailLink = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Contato pelo portfólio",
)}`;

export const whatsappLink = `https://api.whatsapp.com/send/?phone=${
  profile.whatsappNumber
}&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`;

export const stats = [
  { value: "1+", label: "ano escrevendo código" },
  { value: "10", label: "meses de experiência em start-up" },
  { value: "8+", label: "tecnologias no dia a dia" },
] as const;

export const bio = [
  "Opa, esse aqui na foto sou eu! Tenho 23 anos e sou desenvolvedor há cerca de um ano. Trabalhei em uma start-up por 10 meses e foi onde me desenvolvi bastante, pegando desde tela até integração com API.",
  "Nesse meio tempo me tornei pai de um menino lindo, o Klaus, e isso me motivou ainda mais a crescer profissionalmente para proporcionar uma vida melhor para ele.",
  "Sempre fui muito ligado a tecnologia: desde pequeno adorava desmontar aparelhos eletrônicos para entender como funcionavam e mexia em pastas e arquivos para melhorar o desempenho dos jogos. Um início lindo de nerd raiz.",
] as const;

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Hard skills" },
  { href: "#softskills", label: "Soft skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;
