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
    <footer className="border-t border-line py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            {"<"}Henri <span className="text-brand">/</span>
            {">"}
          </p>
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} {profile.fullName}. Feito com Next.js,
            TypeScript e Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <ul className="flex items-center gap-2">
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface/70 text-slate-300 transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-white"
                  >
                    <Icon aria-hidden="true" className="text-lg" />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-2 rounded-xl border border-line bg-surface/70 px-4 py-2.5 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-brand/60 hover:text-white"
          >
            <FaArrowUp aria-hidden="true" className="text-xs" />
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
