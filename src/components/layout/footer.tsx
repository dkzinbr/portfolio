import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

import { emailLink, profile, whatsappLink } from "@/src/data/profile";

const socials = [
  { href: profile.links.github, label: "GitHub", icon: FaGithub, external: true },
  { href: profile.links.linkedin, label: "LinkedIn", icon: FaLinkedin, external: true },
  { href: whatsappLink, label: "WhatsApp", icon: FaWhatsapp, external: true },
  { href: emailLink, label: "E-mail", icon: FaEnvelope, external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-lg font-semibold text-white">
            HT<span className="text-brand">.</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            © {new Date().getFullYear()} {profile.fullName}. Desenvolvido com Next.js,
            TypeScript e atenção aos detalhes.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noreferrer" : undefined}
                    aria-label={
                      social.external
                        ? `${social.label} (abre em nova aba)`
                        : social.label
                    }
                    className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
                  >
                    <Icon aria-hidden="true" />
                    {social.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-brand-light"
          >
            <FaArrowUp aria-hidden="true" className="text-xs" />
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
