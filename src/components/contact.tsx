import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=5511981798126&text=Ol%C3%A1+Henri%2C+vim+pelo+seu+portf%C3%B3lio+e+gostaria+de+conversar.&type=phone_number&app_absent=0.";
const emailLink =
  "mailto:henriteo23@gmail.com?subject=Contato%20pelo%20portfólio";

export default function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="overflow-hidden rounded-3xl border border-slate-700 bg-[#0B1228]/70 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.32)] backdrop-blur-sm md:p-10">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
            Contato
          </span>
          <h3 className="mt-5 text-3xl font-bold uppercase">Iae gostou de alguma coisa que viu?</h3>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">
            Click em um dos botões abaixo para entrar em contato comigo, obrigado por visitar esse meu espaço que criei com tanto carinho.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Entrar em contato pelo WhatsApp"
            className="group inline-flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-[0_18px_40px_rgba(37,211,102,0.32)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/20 transition group-hover:bg-white/20">
              <FaWhatsapp className="text-xl" />
            </span>
            <span>WhatsApp</span>
          </a>

          <a
            href={emailLink}
            aria-label="Enviar um e-mail"
            className="group inline-flex items-center gap-3 rounded-xl border border-slate-600 bg-[#101935] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.28)] transition hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-[#132041] hover:shadow-[0_18px_40px_rgba(59,130,246,0.16)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/15 transition group-hover:bg-white/12">
              <FaEnvelope className="text-lg" />
            </span>
            <span>E-mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
