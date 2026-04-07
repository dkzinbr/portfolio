import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[80vh] items-center gap-12 py-16 md:grid-cols-2"
    >
      <div>
        <h2 className="max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
          Olá, eu sou o <span className="text-blue-500">Henri</span>.
          <br />
          desenvolvedor
          <br />
          Full-stack
        </h2>

        <p className="mt-6 max-w-lg text-base text-slate-300 md:text-lg">
          Desenvolvedor focado em React, Next.js, TypeScript e Tailwind,
          criando interfaces modernas, responsivas e funcionais.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/henri-teodoro/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar perfil no LinkedIn"
            className="group inline-flex items-center gap-3 rounded-xl border border-blue-400/30 bg-gradient-to-r from-[#0A66C2] to-[#004182] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,102,194,0.28)] transition hover:-translate-y-0.5 hover:border-blue-300/60 hover:shadow-[0_18px_40px_rgba(10,102,194,0.36)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/20 transition group-hover:bg-white/20">
              <FaLinkedin className="text-xl" />
            </span>
          </a>
          <a
            href="https://github.com/dkzinbr"
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar perfil no GitHub"
            className="group inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-[#0B1228]/88 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.32)] transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-[#111B36] hover:shadow-[0_18px_40px_rgba(59,130,246,0.18)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/15 transition group-hover:bg-white/12">
              <FaGithub className="text-xl" />
            </span>
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-2xl border border-slate-700 bg-[#0B1228]/60 p-6 shadow-[0_0_30px_rgba(37,99,235,0.08)] backdrop-blur-sm">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-500" />
            <span className="h-3 w-3 rounded-full bg-slate-400" />
            <span className="h-3 w-3 rounded-full bg-slate-300" />
          </div>

          <div className="space-y-2 font-mono text-sm text-slate-300">
            <p>{`<body>`}</p>
            <p className="pl-4">{`<h1>Habilidades</h1>`}</p>
            <p className="pl-8 text-blue-400">{` <ul>`}</p>
            <p className="pl-12 text-blue-400">{`  <li>React</li>`}</p>
            <p className="pl-12 text-blue-400">{`  <li>Next.js</li>`}</p>
            <p className="pl-12 text-blue-400">{`  <li>TypeScript</li>`}</p>
            <p className="pl-12 text-blue-400">{`  <li>Tailwind</li>`}</p>
            <p className="pl-12 text-blue-400">{`  <li>Node.js</li>`}</p>
            <p className="pl-8 text-blue-400">{` </ul>`}</p>
            <p>{`</body>`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
