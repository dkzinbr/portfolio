import About from "@/src/components/about";
import BackgroundGlow from "@/src/components/backgroundGlow";
import Header from "@/src/components/header";
import Hero from "@/src/components/hero";
import Projects from "@/src/components/project";
import Skills from "@/src/components/skills";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <BackgroundGlow />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}