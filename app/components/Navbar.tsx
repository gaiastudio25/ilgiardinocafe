"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/menu", label: "Menú" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      if (mounted) document.body.style.overflow = "";
    };
  }, [mobileOpen, mounted]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "navbar-solid py-3" : "py-5"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
<Link href="/" className="block">
          <img
            src="/images/logo-hoja.png"
            alt="Il Giardino Café"
            width={60}
            height={60}
            className="font-heading text-xl tracking-wider text-carbon"
            aria-label="Il Giardino Café - Inicio"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-accent text-xs uppercase tracking-widest text-carbon-light transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          id="mobile-menu-toggle"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-2 md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-[1px] bg-carbon transition-all duration-500 ease-in-out ${mobileOpen ? "w-6 translate-y-[4.5px] rotate-45" : "w-6"}`}
          />
          <span
            className={`block h-[1px] bg-carbon transition-all duration-500 ease-in-out ${mobileOpen ? "w-6 -translate-y-[4.5px] -rotate-45" : "w-5"}`}
          />
        </button>

        <div
          className={`fixed inset-0 z-40 bg-carbon/20 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-[#F3EFE7] shadow-2xl transform transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-carbon font-['IBM_Plex_Mono'] text-xs tracking-widest uppercase"
              >
                Cerrar —
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="font-['Anton'] text-3xl uppercase tracking-tighter text-carbon hover:text-[#A6AE9A] transition-colors"
              >
                Inicio
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-['Anton'] text-3xl uppercase tracking-tighter text-carbon hover:text-[#A6AE9A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-[#C47A5A]/30">
              <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.2em] text-[#C47A5A] mb-4">
                La pausa que el día necesita
              </p>
              <div className="flex flex-col gap-1 text-[11px] font-['DM_Sans'] text-carbon/60">
                <span>Montevideo, Uruguay</span>
                <a
                  href="https://instagram.com/ilgiardino.cafe"
                  className="underline decoration-[#A6AE9A] underline-offset-4"
                >
                  @ilgiardino.cafe
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
