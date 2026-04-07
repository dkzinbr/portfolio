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
          Sou desenvolvedor web focado em React, Next.js, TypeScript e Tailwind.
          Gosto de transformar ideias em interfaces modernas, responsivas e com
          boa experiência de uso. Estou construindo projetos para fortalecer meu
          portfólio e crescer profissionalmente na área.
        </p>

      </div>
    </section>
  );
}