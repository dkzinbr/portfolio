import About from "@/src/components/sections/about";
import Contact from "@/src/components/sections/contact";
import Hero from "@/src/components/sections/hero";
import Projects from "@/src/components/sections/projects";
import Skills from "@/src/components/sections/skills";
import SoftSkills from "@/src/components/sections/soft-skills";
import { profile, siteUrl } from "@/src/data/profile";
import { skillGroups } from "@/src/data/skills";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  description: profile.headline,
  url: siteUrl,
  image: `${siteUrl}/perfil.jpg`,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressCountry: "BR",
  },
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
      <Contact />
    </>
  );
}
