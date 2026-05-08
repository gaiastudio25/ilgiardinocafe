import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  {
    src: "/images/hero.png",
    alt: "Ambiente cálido de Bruma Café con luz natural",
    span: "md:col-span-2 md:row-span-2",
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
    span: "md:col-span-2",
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
    <section id="galeria" className="py-16 lg:py-20 bg-crema-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-6 font-accent text-xs uppercase tracking-[0.4em] text-palta-dark">
              Nuestro espacio
            </p>
            <h2 className="font-heading text-4xl uppercase text-carbon sm:text-5xl lg:text-6xl">
              Galería
            </h2>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-palta/30" />
              <span className="w-1 h-1 rounded-full bg-palta/30" />
              <span className="h-px w-6 bg-palta/30" />
            </div>
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-carbon-light">
              Un rincón donde la luz entra suave y el tiempo se mide distinto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src + i} delay={i * 100}>
              <div
                className={`gallery-item relative overflow-hidden bg-crema ${img.span}`}
              >
                <div className="absolute inset-0 border border-arcilla/10 transition-all duration-500 hover:border-palta/30 z-10" />
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 flex items-center justify-center gap-4 md:mt-16">
            <div className="h-px w-20 bg-arcilla/30" />
            <p className="font-accent text-xs tracking-[0.2em] text-carbon-lighter">
              Bruma Café · Carrasco
            </p>
            <div className="h-px w-20 bg-arcilla/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}