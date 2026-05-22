"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MenuContent() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom > 200) {
          setActiveSection(idx);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (idx: number) => {
    const sections = document.querySelectorAll("[data-section]");
    sections[idx]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="menu-page pt-20">
      <section className="py-8 lg:py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <p className="mb-4 font-accent text-xs uppercase tracking-[0.35em] text-primary">
            Nuestra oferta
          </p>
          <h1 className="font-heading text-4xl uppercase text-carbon sm:text-5xl">
            Nuestro menú
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-carbon-light">
            Café de especialidad, bebidas artesanales y opciones para acompañar.
          </p>
        </div>
      </section>

      <style jsx global>{`
        .menu-page {
          min-height: 100vh;
          background: #f3efe7;
          position: relative;
        }

        .menu-page::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 0;
        }

       

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scrollIndicator {
          0% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        

        

       

        

        

        /* Menu Sections */
        .menu-section {
          position: relative;
          z-index: 1;
          padding: 0 1.5rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .menu-section {
            padding: 0 3rem 4rem;
          }
        }

        .menu-svg-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .menu-svg-container {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 2rem;
          }
        }

.menu-svg-wrapper {
          flex: 1;
          max-width: 600px;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .menu-svg-wrapper {
            max-width: 50%;
          }
        }

        .menu-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }
      `}</style>
      <div className="menu-section" data-section>
        <div className="menu-svg-container">
          <div className="menu-svg-wrapper">
            <Image
              src="/menu/.svg"
              alt="Menú Il Giardino Café - Página 1"
              width={595}
              height={842}
              className="menu-img"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="menu-svg-wrapper">
            <Image
              src="/menu/.svg"
              alt="Menú Il Giardino Café - Página 2"
              width={595}
              height={842}
              className="menu-img"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}