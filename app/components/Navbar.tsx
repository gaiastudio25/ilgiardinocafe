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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-solid py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl tracking-wider text-carbon"
          aria-label="Bruma Café - Inicio"
        >
          BRUMA
        </a>

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
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-[1.5px] w-5 bg-carbon transition-all duration-300 ${
              mobileOpen ? "translate-y-[4.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-carbon transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-carbon transition-all duration-300 ${
              mobileOpen ? "-translate-y-[4.5px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-crema transition-all duration-500 md:hidden ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-heading text-3xl uppercase tracking-wide text-carbon transition-colors duration-300 hover:text-salvia"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 font-accent text-xs text-carbon-lighter">
            La pausa que el día necesita
          </div>
        </div>
      </nav>
    </header>
  );
}
