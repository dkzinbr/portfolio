# Portfólio — Henri Teodoro

Portfólio pessoal em uma única página, construído com Next.js (App Router), TypeScript e Tailwind CSS. Todo o conteúdo é renderizado de forma estática e o conteúdo editável vive em arquivos de dados, separado dos componentes visuais.

## Stack

- [Next.js 16](https://nextjs.org) com App Router e Turbopack
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com) (configuração via CSS, em `app/globals.css`)
- [react-icons](https://react-icons.github.io/react-icons/)

## Rodando o projeto

```bash
pnpm install
pnpm dev
```

A aplicação sobe em [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
pnpm build   # build de produção
pnpm start   # sobe o build de produção
pnpm lint    # ESLint
```

## Variáveis de ambiente

| Variável               | Obrigatória | Descrição                                                                              |
| ---------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Não         | URL pública do site, usada no canonical, Open Graph, `robots.txt` e `sitemap.xml`.      |

Na Vercel, se a variável não for definida, a URL de produção do projeto (`VERCEL_PROJECT_PRODUCTION_URL`) é usada automaticamente. Em desenvolvimento, o fallback é `http://localhost:3000`.

## Estrutura

```
app/
  layout.tsx            # HTML raiz, fontes, metadata de SEO, header/footer e skip link
  page.tsx              # composição das seções + JSON-LD (schema.org/Person)
  globals.css           # tokens de design, animações e preferências de movimento
  icon.tsx              # favicon gerado em build
  opengraph-image.tsx   # imagem de compartilhamento gerada em build
  robots.ts, sitemap.ts # arquivos de SEO
src/
  components/
    layout/             # header (menu mobile + scrollspy), footer, brilho de fundo
    sections/           # hero, sobre, hard skills, soft skills, projetos, contato
    ui/                 # Section, Eyebrow e Reveal (animação de entrada)
  data/                 # conteúdo editável: perfil, projetos e skills
  lib/                  # utilitários de classe/estilo
```

## Como atualizar o conteúdo

Nada de conteúdo fica escrito dentro dos componentes. Para atualizar o portfólio, edite:

- `src/data/profile.ts` — nome, cargo, bio, localização, contatos, redes, números de destaque e itens do menu.
- `src/data/projects.ts` — projetos exibidos. `repoUrl` e `liveUrl` são opcionais: os botões "Código" e "Ver online" só aparecem quando preenchidos.
- `src/data/skills.ts` — hard skills (agrupadas por área, com ícone e cor) e soft skills.

Imagens ficam em `public/`. Ao trocar uma imagem de projeto, mantenha a proporção aproximada de 16/10 para não aparecer corte estranho no card.

## Acessibilidade e SEO

- Hierarquia de headings com um único `h1`, seções com `aria-labelledby` e link "pular para o conteúdo".
- Menu mobile com `aria-expanded`/`aria-controls`, fechamento por `Esc` e travamento do scroll.
- Ícones decorativos marcados com `aria-hidden`, e links externos avisando que abrem em nova aba.
- Animações de entrada respeitam `prefers-reduced-motion` e não escondem conteúdo quando o JavaScript não executa.
- Metadata completo (Open Graph, Twitter Card, canonical), `robots.txt`, `sitemap.xml` e dados estruturados JSON-LD.

## Deploy

O projeto roda em qualquer plataforma com suporte a Next.js. Na [Vercel](https://vercel.com/new), basta importar o repositório; nenhuma configuração extra é necessária.
