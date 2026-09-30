import { FaDownload, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Reveal from "@/src/components/ui/reveal";
import { Eyebrow } from "@/src/components/ui/section";
import { emailLink, profile, whatsappLink } from "@/src/data/profile";

export default function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/70 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)] md:p-12 lg:p-14">
          <div
            aria-hidden="true"
            className="absolute right-[-10rem] top-[-10rem] h-80 w-80 rounded-full bg-brand/10 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow>05 / Contato</Eyebrow>

              <h2
                id="contato-titulo"
                className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl"
              >
                Vamos conversar sobre a próxima oportunidade.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                Se você procura um desenvolvedor com atenção à interface, organização
                de código e disposição para aprender, estou disponível para conversar.
              </p>

              <a
                href={emailLink}
                className="group mt-8 inline-flex items-center gap-3 text-lg font-semibold text-white transition hover:text-brand-light md:text-xl"
              >
                <FaEnvelope aria-hidden="true" className="text-brand" />
                {profile.email}
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  className="text-xs text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-line bg-white/[0.03] px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-brand/50 hover:bg-brand/[0.06] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <FaLinkedin aria-hidden="true" className="text-brand-light" />
                  LinkedIn
                </span>
                <FaArrowUpRightFromSquare aria-hidden="true" className="text-xs" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="flex items-center justify-between rounded-xl border border-line bg-white/[0.03] px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-brand/50 hover:bg-brand/[0.06] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <FaDownload aria-hidden="true" className="text-brand-light" />
                  Currículo em PDF
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-slate-500">
                  Download
                </span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-line bg-white/[0.03] px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-400/[0.05] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <FaWhatsapp aria-hidden="true" className="text-emerald-400" />
                  WhatsApp
                </span>
                <FaArrowUpRightFromSquare aria-hidden="true" className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
