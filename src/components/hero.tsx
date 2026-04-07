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
          Um desenvolvedor
          <br />
          Front-end | Back-end
        </h2>

        <p className="mt-6 max-w-lg text-base text-slate-300 md:text-lg">
          Desenvolvedor focado em React, Next.js, TypeScript e Tailwind,
          criando interfaces modernas, responsivas e funcionais.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/henri-teodoro/"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dkzinbr"
            className="rounded-lg border border-slate-700 bg-[#0B1228]/70 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-500"
          >
            GitHub
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
            <p className="pl-8 text-blue-400">{`<li>React</li>`}</p>
            <p className="pl-8 text-blue-400">{`<li>Next.js</li>`}</p>
            <p className="pl-8 text-blue-400">{`<li>TypeScript</li>`}</p>
            <p className="pl-8 text-blue-400">{`<li>Tailwind</li>`}</p>
            <p className="pl-8 text-blue-400">{`<li>Node.js</li>`}</p>
            <p>{`</body>`}</p>
          </div>
        </div>

        <div className="absolute -bottom-8 right-0 max-w-xs rounded-2xl border border-slate-700 bg-[#0B1228]/80 p-4 text-sm text-slate-300 backdrop-blur-sm">
          Sou apaixonado por tecnologia e por criar interfaces com identidade,
          performance e boa experiência de uso.
        </div>
      </div>
    </section>
  );
}