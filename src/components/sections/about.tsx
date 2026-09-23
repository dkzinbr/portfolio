import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

import Section from "@/src/components/ui/section";
import Reveal from "@/src/components/ui/reveal";
import { bio, profile } from "@/src/data/profile";
import { surfaceCard } from "@/src/lib/ui";

export default function About() {
  return (
    <Section id="sobre" eyebrow="Quem sou" title="Sobre mim">
      <div className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-12">
        <Reveal>
          <div className={`${surfaceCard} p-5`}>
            <div className="mb-4 flex gap-2">
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-pink-400" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-yellow-400" />
              <span aria-hidden="true" className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <Image
              src="/perfil.jpg"
              alt={`Foto de ${profile.fullName}`}
              width={739}
              height={1304}
              sizes="(min-width: 768px) 300px, 100vw"
              className="aspect-[3/4] w-full rounded-xl object-cover"
            />

            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <FaLocationDot aria-hidden="true" className="text-brand-light" />
              {profile.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-5">
            {bio.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl leading-7 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
