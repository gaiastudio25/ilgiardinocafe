import Image from "next/image";

const galleryImages = [
  {
    src: "/images/capuchino-bruma.png",
    alt: "Ambiente cálido de Il Giardino Café con luz natural",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/expresso-bruma.png",
    alt: "Latte art en taza de cerámica artesanal",
    span: "",
  },
  {
    src: "/images/grilled-cheese-bruma.png",
    alt: "Preparación de café V60 pour over",
    span: "",
  },
  {
    src: "/images/toston-bruma.png",
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
    <section id="galeria" className="py-12 lg:py-16 bg-crema-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <p className="mb-4 font-accent text-xs uppercase tracking-[0.4em] text-primary">
            Nuestro espacio
          </p>
          <h2 className="font-heading text-3xl uppercase text-carbon sm:text-4xl lg:text-5xl">
            Galería
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`gallery-item relative overflow-hidden bg-crema ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-secondary/30" />
          <p className="font-accent text-xs tracking-[0.2em] text-carbon-lighter">
            Il Giardino Café · Carrasco
          </p>
          <div className="h-px w-16 bg-secondary/30" />
        </div>
      </div>
    </section>
  );
}