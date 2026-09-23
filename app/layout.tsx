import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";

import BackgroundGlow from "@/src/components/layout/background-glow";
import Footer from "@/src/components/layout/footer";
import Header from "@/src/components/layout/header";
import { profile, siteUrl } from "@/src/data/profile";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const title = `${profile.firstName} | Portfólio`;
const description = profile.headline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.fullName}`,
  },
  description,
  applicationName: `Portfólio de ${profile.fullName}`,
  authors: [{ name: profile.fullName, url: profile.links.github }],
  creator: profile.fullName,
  keywords: [
    profile.fullName,
    "desenvolvedor full-stack",
    "desenvolvedor front-end",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "portfólio",
    "São Paulo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: `${profile.fullName} | Portfólio`,
    title: `${profile.fullName} | ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} | ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>

        {/* `overflow-x-clip` recorta o brilho de fundo sem criar um container de
            scroll, o que manteria o header sticky preso no topo da página. */}
        <div className="relative min-h-screen overflow-x-clip bg-night">
          <BackgroundGlow />

          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
            <Header />
            <main id="conteudo">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
