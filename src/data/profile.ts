const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

const whatsappMessage =
  "Olá Henri, vim pelo seu portfólio e gostaria de conversar.";

export const profile = {
  firstName: "Henri",
  fullName: "Henri Teodoro",
  role: "Desenvolvedor Full Stack Júnior",
  location: "São Paulo, Brasil",
  headline:
    "Construo produtos digitais claros, rápidos e confiáveis, da interface à integração com APIs.",
  summary:
    "Desenvolvedor full stack júnior com 10 meses de experiência na Nexo Sistemas, trabalhando com C#, .NET, React, TypeScript, Node.js e PostgreSQL.",
  availability: "Disponível para novas oportunidades",
  email: "henriteo23@gmail.com",
  whatsappNumber: "5511981798126",
  resumeUrl: "/curriculo-henri-teodoro.pdf",
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

export const professionalFacts = [
  { label: "Experiência", value: "10 meses na Nexo Sistemas" },
  { label: "Stacks", value: "C#/.NET e React/Node.js" },
  { label: "Base", value: profile.location },
] as const;

export const bio = [
  "Sou desenvolvedor full stack de São Paulo e encontrei no software uma forma de transformar curiosidade em produtos úteis. Na Nexo Sistemas, trabalhando em C#, .NET e React, consolidei uma abordagem prática: entender o problema, construir com clareza e evoluir a solução a partir de feedback.",
  "Atuo entre interface e back-end, com atenção especial à experiência de uso, responsividade, acessibilidade e código legível. Busco equipes que valorizem colaboração, qualidade técnica e aprendizado contínuo.",
] as const;

export const navItems = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#competencias", label: "Competências" },
  { href: "#sobre", label: "Sobre" },
] as const;
