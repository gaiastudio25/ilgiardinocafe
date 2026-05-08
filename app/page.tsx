import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";

export const metadata: Metadata = {
  title: "Bruma Café — Café de especialidad en Montevideo",
  description:
    "Bruma Café es un refugio urbano en Montevideo. Café de especialidad, espacio de trabajo y punto de respiración en la ciudad. Visitanos en Carrasco.",
  openGraph: {
    title: "Bruma Café — La pausa que el día necesita",
    description:
      "Un refugio urbano donde el diseño y la calidez conviven. Café de especialidad en Montevideo, Uruguay.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Gallery />
      <Reviews />
      <section className="py-16 lg:py-20 bg-crema-dark">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="mb-4 font-accent text-xs uppercase tracking-[0.4em] text-palta-dark">
            Visitanos
          </p>
          <h2 className="font-heading text-3xl uppercase text-carbon sm:text-4xl lg:text-5xl">
            Te esperamos
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-carbon-light">
            Gral. Máximo Tajes 7288, Carrasco
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contacto" className="btn-primary">
              Cómo llegar
            </Link>
            <Link href="/menu" className="btn-secondary">
              Ver menú
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
