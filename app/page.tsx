import type { Metadata } from "next";
import Link from "next/link";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";

export const metadata: Metadata = {
  title: "Il Giardino Café — Café de especialidad en Montevideo",
  description:
    "Il Giardino Café es un refugio urbano en Montevideo. Café de especialidad, espacio de trabajo y punto de respiración en la ciudad. Visitanos en Carrasco.",
  openGraph: {
    title: "Il Giardino Café — La pausa que el día necesita",
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
      <section className="py-10 lg:py-12 bg-crema-dark">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.4em] text-primary">
            Visitanos
          </p>
          <h2 className="font-heading text-2xl uppercase text-carbon sm:text-3xl lg:text-4xl">
            Te esperamos
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-carbon-light">
            Gral. Máximo Tajes 7288, Carrasco
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
