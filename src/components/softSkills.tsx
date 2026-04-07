const softSkills = [
  {
    title: "Comunicação clara",

  },
  {
    title: "Trabalho em equipe",

  },
  {
    title: "Aprendizado constante",

  },
  {
    title: "Organização",

  },
  {
    title: "Resolução de problemas",

  },
  {
    title: "Adaptabilidade",
  },
];

export default function SoftSkills() {
  return (
    <section id="softskills" className="py-20">
      <div className="mb-10 max-w-2xl">
        <h3 className="text-3xl font-bold uppercase">Soft-skills</h3>
        <p className="mt-3 leading-7 text-slate-300">
          Competencias que fortalecem minha forma de trabalhar, colaborar e
          evoluir em equipe.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {softSkills.map((skill) => (
          <article
            key={skill.title}
            className="group rounded-xl border border-slate-700 bg-[#0B1228]/60 px-4 py-3 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-[0_12px_28px_rgba(37,99,235,0.12)]"
          >
            <h4 className="text-base font-medium leading-tight text-white transition group-hover:text-blue-300">
              {skill.title}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
}
