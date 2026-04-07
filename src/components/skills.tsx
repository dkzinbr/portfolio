import { skills } from "../data/projectsAndSkills";

export default function Skills() {
  return (
    <section id="habilidades" className="py-20">
      <h3 className="mb-8 text-3xl font-bold uppercase">Habilidades</h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex h-20 items-center justify-center rounded-xl border border-slate-700 bg-[#0B1228]/60 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-500"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}