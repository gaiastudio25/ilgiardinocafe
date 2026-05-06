"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "navbar-solid py-3" : "py-5"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Bruma Café"
          width={100}
          height={100}
          className="font-heading text-xl tracking-wider text-carbon"
          aria-label="Bruma Café - Inicio"
        />

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-accent text-xs uppercase tracking-widest text-carbon-light transition-colors duration-300 hover:text-salvia"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-2 md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {/* Línea Superior */}
          <span
            className={`block h-[1px] bg-carbon transition-all duration-500 ease-in-out ${mobileOpen ? "w-6 translate-y-[4.5px] rotate-45" : "w-6"
              }`}
          />
          {/* Línea Inferior - Jugamos con anchos distintos para un look más "estudio de diseño" */}
          <span
            className={`block h-[1px] bg-carbon transition-all duration-500 ease-in-out ${mobileOpen ? "w-6 -translate-y-[4.5px] -rotate-45" : "w-5"
              }`}
          />
        </button>

        {/* Backdrop: Oscurece el fondo sin taparlo totalmente */}
        <div
          className={`fixed inset-0 z-40 bg-carbon/20 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menú Lateral: No ocupa toda la pantalla */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-[#F7F2EC] shadow-2xl transform transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >
          <div className="flex flex-col h-full p-8">
            {/* Botón Cerrar integrado o alineado */}
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-carbon font-['IBM_Plex_Mono'] text-xs tracking-widest uppercase"
              >
                Cerrar —
              </button>
            </div>

            {/* Enlaces con jerarquía tipográfica Bruma */}
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-['Anton'] text-3xl uppercase tracking-tighter text-carbon hover:text-[#A9CB5A] transition-colors"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Espacio de "Refugio" en la base del menú */}
            <div className="mt-auto pt-12 border-t border-[#D4B8A5]/30">
              <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.2em] text-[#C9A98A] mb-4">
                La pausa que el día necesita
              </p>
              <div className="flex flex-col gap-1 text-[11px] font-['DM_Sans'] text-carbon/60">
                <span>Montevideo, Uruguay</span>
                <a href="https://instagram.com/brumacafe" className="underline decoration-[#A9CB5A] underline-offset-4">
                  @brumacafe
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
