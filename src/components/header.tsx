export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <h1 className="text-lg font-semibold tracking-wide text-white">
        {"<"}Henri <span className="text-blue-500">/</span>{">"}
      </h1>

      <nav className="hidden gap-6 md:flex">
        <a href="#home" className="text-sm text-slate-300 transition hover:text-blue-400">
          Home
        </a>
        <a href="#sobre" className="text-sm text-slate-300 transition hover:text-blue-400">
          Sobre
        </a>
        <a href="#habilidades" className="text-sm text-slate-300 transition hover:text-blue-400">
          Habilidades
        </a>
        <a href="#projetos" className="text-sm text-slate-300 transition hover:text-blue-400">
          Projetos
        </a>
      </nav>
    </header>
  );
}