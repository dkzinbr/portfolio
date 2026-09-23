"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

import { navItems } from "@/src/data/profile";
import { cn } from "@/src/lib/ui";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 -mx-6 px-6 transition duration-300 md:-mx-10 md:px-10",
        scrolled && "border-b border-line/70 bg-night/85 backdrop-blur-md",
      )}
    >
      <div className="flex items-center justify-between py-5">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-white"
          aria-label="Ir para o início"
        >
          {"<"}Henri <span className="text-brand">/</span>
          {">"}
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative text-sm transition hover:text-brand-light",
                      isActive ? "text-brand-light" : "text-slate-300",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-brand-light transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/70 text-white transition hover:border-brand/60 md:hidden"
        >
          {menuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="animate-menu-in mb-4 rounded-2xl border border-line bg-surface/95 p-2 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm transition",
                      isActive
                        ? "bg-brand/10 text-brand-light"
                        : "text-slate-300 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
