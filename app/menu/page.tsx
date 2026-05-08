import type { Metadata } from "next";
import MenuContent from "./MenuContent";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Café de especialidad, bebidas y algo para comer en Bruma Café, Montevideo. Espresso, flat white, V60 pour over, brunch y más.",
  openGraph: {
    title: "Menú — Bruma Café",
    description:
      "Café de especialidad, bebidas y algo para comer en Bruma Café, Montevideo.",
  },
};

export default function MenuPage() {
  return <MenuContent />;
}
