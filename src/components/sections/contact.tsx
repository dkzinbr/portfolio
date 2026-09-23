import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

import Reveal from "@/src/components/ui/reveal";
import { Eyebrow } from "@/src/components/ui/section";
import { emailLink, profile, whatsappLink } from "@/src/data/profile";

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-20 md:py-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line bg-surface/70 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.32)] backdrop-blur-sm md:p-12">
          <div className="max-w-2xl">
            <Eyebrow>Contato</Eyebrow>

            <h2
              id="contato-titulo"
              className="mt-5 text-3xl font-bold uppercase tracking-tight md:text-4xl"
            >
              Gostou de algo que viu?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Clique em um dos botões abaixo para falar comigo. Obrigado por visitar
              esse espaço que criei com tanto carinho.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-[0_18px_40px_rgba(37,211,102,0.32)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition group-hover:bg-white/25">
                <FaWhatsapp aria-hidden="true" className="text-xl" />
              </span>
              WhatsApp
              <span className="sr-only">(abre em nova aba)</span>
            </a>

            <a
              href={emailLink}
              className="group inline-flex items-center gap-3 rounded-xl border border-line bg-[#101935] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition hover:-translate-y-0.5 hover:border-brand/60 hover:bg-[#132041] hover:shadow-[0_18px_40px_rgba(59,130,246,0.16)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition group-hover:bg-white/15">
                <FaEnvelope aria-hidden="true" className="text-lg" />
              </span>
              E-mail
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Ou copie o meu e-mail:{" "}
            <span className="font-mono text-slate-300">{profile.email}</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
