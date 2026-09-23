import Section from "@/src/components/ui/section";
import Reveal from "@/src/components/ui/reveal";
import { softSkills } from "@/src/data/skills";
import { surfaceCard, surfaceCardHover } from "@/src/lib/ui";

export default function SoftSkills() {
  return (
    <Section
      id="softskills"
      eyebrow="Como trabalho"
      title="Soft skills"
      description="Competências que fortalecem minha forma de trabalhar, colaborar e evoluir em equipe."
    >
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {softSkills.map((skill, index) => (
          <li key={skill.title}>
            <Reveal delay={index * 60} className="h-full">
              <article className={`${surfaceCard} ${surfaceCardHover} h-full p-5`}>
                <h3 className="text-base font-semibold text-white">{skill.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{skill.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
