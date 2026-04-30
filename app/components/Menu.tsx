"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

type Category = "especiales" | "bebidas" | "comer";

const categories: { id: Category; label: string }[] = [
  { id: "especiales", label: "Cafés Especiales" },
  { id: "bebidas", label: "Bebidas" },
  { id: "comer", label: "Para Comer" },
];

const menuItems: {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
}[] = [
  {
    id: 1,
    name: "Espresso",
    description:
      "Doble shot de café de especialidad. Intenso, con notas de chocolate amargo y caramelo.",
    price: "$2.200",
    category: "especiales",
    image: "/images/coffee-latte.png",
  },
  {
    id: 2,
    name: "Americano",
    description:
      "Espresso diluido en agua caliente. Suave, equilibrado y aromático.",
    price: "$2.500",
    category: "especiales",
    image: "/images/coffee-latte.png",
  },
  {
    id: 3,
    name: "Cortado",
    description:
      "Espresso cortado con leche texturizada. La proporción perfecta entre fuerza y suavidad.",
    price: "$2.800",
    category: "especiales",
    image: "/images/coffee-latte.png",
  },
  {
    id: 4,
    name: "Flat White",
    description:
      "Doble espresso con microespuma de leche. Sedoso, envolvente y con cuerpo.",
    price: "$3.200",
    category: "especiales",
    image: "/images/coffee-latte.png",
  },
  {
    id: 5,
    name: "Cappuccino",
    description:
      "Espresso con leche texturizada y espuma cremosa. Un clásico reinventado.",
    price: "$3.000",
    category: "especiales",
    image: "/images/coffee-latte.png",
  },
  {
    id: 6,
    name: "V60 Pour Over",
    description:
      "Café de filtro preparado a mano. Limpio, con notas florales y frutales.",
    price: "$3.500",
    category: "especiales",
    image: "/images/pourover.png",
  },
  {
    id: 7,
    name: "Cold Brew",
    description:
      "Extraído en frío durante 18 horas. Refrescante, con dulzor natural y baja acidez.",
    price: "$3.000",
    category: "especiales",
    image: "/images/coffee-latte.png",
  },
  {
    id: 8,
    name: "Matcha Latte",
    description:
      "Matcha ceremonial japonés con la leche de tu elección. Energía suave y sostenida.",
    price: "$3.500",
    category: "bebidas",
    image: "/images/coffee-latte.png",
  },
  {
    id: 9,
    name: "Chai Latte",
    description:
      "Blend artesanal de especias con leche texturizada. Cálido y reconfortante.",
    price: "$3.200",
    category: "bebidas",
    image: "/images/coffee-latte.png",
  },
  {
    id: 10,
    name: "Golden Latte",
    description:
      "Cúrcuma, jengibre y leche. Antiinflamatorio, delicioso y con un toque de miel.",
    price: "$3.200",
    category: "bebidas",
    image: "/images/coffee-latte.png",
  },
  {
    id: 11,
    name: "Chocolate Caliente",
    description:
      "Chocolate artesanal con leche vaporizada. Intenso, cremoso y reconfortante.",
    price: "$3.000",
    category: "bebidas",
    image: "/images/coffee-latte.png",
  },
  {
    id: 12,
    name: "Medialunas de manteca",
    description:
      "Horneadas cada mañana. Crocantes por fuera, tiernas por dentro. El clásico perfecto.",
    price: "$2.800",
    category: "comer",
    image: "/images/pastries.png",
  },
  {
    id: 13,
    name: "Tostada con palta",
    description:
      "Pan de masa madre, palta, semillas, un toque de limón y aceite de oliva.",
    price: "$4.500",
    category: "comer",
    image: "/images/pastries.png",
  },
  {
    id: 14,
    name: "Banana Bread",
    description:
      "Con nueces y chips de chocolate. Receta de la casa, horneado cada día.",
    price: "$3.000",
    category: "comer",
    image: "/images/pastries.png",
  },
  {
    id: 15,
    name: "Cookie de chocolate",
    description:
      "Crocante por fuera, chewy por dentro. Tamaño generoso con chocolate belga.",
    price: "$2.200",
    category: "comer",
    image: "/images/pastries.png",
  },
  {
    id: 16,
    name: "Carrot Cake",
    description:
      "Con frosting de queso crema y especias. Húmeda, aromática y adictiva.",
    price: "$3.500",
    category: "comer",
    image: "/images/pastries.png",
  },
];

export default function Menu() {
  const [active, setActive] = useState<Category>("especiales");

  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-4 font-accent text-xs uppercase tracking-[0.3em] text-palta-dark">
              Nuestro menú
            </p>
            <h2 className="font-heading text-4xl uppercase text-carbon sm:text-5xl lg:text-6xl">
              Para disfrutar
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-carbon-light">
              Cada taza está preparada con café de especialidad, tostado con
              cuidado y servido con intención.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={150}>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`menu-tab-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-6 py-2.5 font-accent text-xs uppercase tracking-wider transition-all duration-300 ${
                  active === cat.id
                    ? "bg-carbon text-crema"
                    : "bg-crema-dark text-carbon-light hover:bg-arcilla/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80}>
              <div className="menu-card rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={260}
                    className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg uppercase tracking-wide text-carbon">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-carbon-light">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-accent text-sm font-medium text-salvia">
                    {item.price}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
