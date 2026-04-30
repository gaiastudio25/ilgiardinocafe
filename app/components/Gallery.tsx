import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  {
    src: "/images/hero.png",
    alt: "Ambiente cálido de Bruma Café con luz natural",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/coffee-latte.png",
    alt: "Latte art en taza de cerámica artesanal",
    span: "",
  },
  {
    src: "/images/pourover.png",
    alt: "Preparación de café V60 pour over",
    span: "",
  },
  {
    src: "/images/cafe-corner.png",
    alt: "Rincón de trabajo con laptop y café",
    span: "col-span-2",
  },
  {
    src: "/images/pastries.png",
    alt: "Selección de pastelería artesanal del día",
    span: "",
  },
  {
    src: "/images/cafe-interior.png",
    alt: "Barra de café con máquina de espresso y plantas",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-crema-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-4 font-accent text-xs uppercase tracking-[0.3em] text-palta-dark">
              Nuestro espacio
            </p>
            <h2 className="font-heading text-4xl uppercase text-carbon sm:text-5xl lg:text-6xl">
              Galería
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-carbon-light">
              Un vistazo a nuestro rincón. Cada detalle está pensado para que
              te sientas en casa.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal
              key={img.src + i}
              delay={i * 100}
              className={img.span}
            >
              <div className="gallery-item h-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
