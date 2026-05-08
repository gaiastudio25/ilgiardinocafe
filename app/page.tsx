import type { Metadata } from "next";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";

export const metadata: Metadata = {
  title: "Bruma Café — Café de especialidad en Montevideo",
  description:
    "Bruma Café es un refugio urbano en Montevideo. Café de especialidad, espacio de trabajo y punto de respiración en la ciudad. Visitanos en Punta Carretas.",
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
    </>
  );
}
