import Image from "next/image";

const galleryImages = [
  {
    src: "/images/capuchino-bruma.png",
    alt: "Café capuchino con arte latte en Il Giardino",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/expresso-bruma.png",
    alt: "Expresso servido en taza de cerámica artesanal",
    span: "",
  },
  {
    src: "/images/grilled-cheese-bruma.png",
    alt: "Sándwich grilled cheese con queso derretido",
    span: "",
  },
  {
    src: "/images/bar-bruma.png",
    alt: "Barra principal de Il Giardino Café",
    span: "",
  },
  {
    src: "/images/toston-bruma.png",
    alt: "Tostón con ingredientes frescos",
    span: "md:col-span-2",
  },

  {
    src: "/images/alfajor.PNG",
    alt: "Alfajor artesanal relleno de dulce de leche",
    span: "",
  },
  {
    src: "/images/cinammon-roll.jpg",
    alt: "Cinnamon roll con glaseado",
    span: "",
  },
  {
    src: "/images/cookies.jpg",
    alt: "Cookies artesanales recién horneadas",
    span: "",
  },
  {
    src: "/images/merienda-para-dos.JPG",
    alt: "Merienda para dos en Il Giardino",
    span: "",
  },
  {
    src: "/images/pasta-frola.jpg",
    alt: "Pasta frola casera con membrillo",
    span: "",
  },
  {
    src: "/images/grilled-cheese-2.PNG",
    alt: "Grilled cheese acompañado de papas",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-8 lg:py-12 bg-crema-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.4em] text-primary">
            Nuestro espacio
          </p>
          <h2 className="font-heading text-2xl uppercase text-carbon sm:text-3xl lg:text-4xl">
            Galería
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
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

        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-secondary/30" />
          <p className="font-accent text-xs tracking-[0.2em] text-carbon-lighter">
            Il Giardino Café · Carrasco
          </p>
          <div className="h-px w-12 bg-secondary/30" />
        </div>
      </div>
    </section>
  );
}
