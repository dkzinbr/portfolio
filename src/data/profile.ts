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
    "Construo produtos digitais claros, rápidos e confiáveis — da interface à integração com APIs.",
  summary:
    "Desenvolvedor full-stack com experiência em aplicações web, suporte técnico e análise de dados, trabalhando com React, Next.js, TypeScript e Node.js.",
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
  { label: "Experiência", value: "1+ ano em tecnologia" },
  { label: "Atuação", value: "Desenvolvimento e TI" },
  { label: "Base", value: profile.location },
] as const;

export const bio = [
  "Sou desenvolvedor full-stack de São Paulo e encontrei no software uma forma de transformar curiosidade em produtos úteis. Minhas experiências na Nexo Sistemas e ADC Benefícios consolidaram uma abordagem prática: entender o problema, construir com clareza e evoluir a solução a partir de feedback.",
  "Atuo entre interface e back-end, com atenção especial à experiência de uso, responsividade, acessibilidade e código legível. Busco equipes que valorizem colaboração, qualidade técnica e aprendizado contínuo.",
] as const;

export const navItems = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#competencias", label: "Competências" },
  { href: "#sobre", label: "Sobre" },
] as const;
