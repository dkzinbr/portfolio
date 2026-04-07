import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="grid gap-10 py-20 md:grid-cols-[280px_1fr] md:items-center"
    >
      <div className="rounded-2xl border border-slate-700 bg-[#0B1228]/60 p-6 backdrop-blur-sm">
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-pink-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div className="flex justify-center">
          <Image
            src="/perfil.jpg"
            alt="Foto de perfil"
            width={160}
            height={220}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold uppercase">Sobre mim</h3>
        <p className="mt-2 text-slate-400">São Paulo, Brasil</p>

        <p className="mt-6 max-w-2xl leading-7 text-slate-300">
          Opa esse aqui na foto sou eu, tenho 23 anos e sou desenvolvedor a cerca de 1 ano,
          trabalhei em uma start-up por 10 meses e foi onde me desenvolvi bastante,
          nesse meio tempo me tornei pai de um menino lindo, o Klaus, e isso me motivou ainda mais a crescer 
          profissionalmente para proporcionar uma vida melhor para ele.
        </p>
        <p className="mt-6 max-w-2xl leading-7 text-slate-300">
          Sempre fui muito ligado a tecnologia, desde pequeno adorava desmontar aparelhos 
          eletrônicos para entender como funcionavam, mexia em pastas e arquivos para melhorar
          o desempenho de jogos, um inicio lindo de nerd raiz.
        </p>

      </div>
    </section>
  );
}