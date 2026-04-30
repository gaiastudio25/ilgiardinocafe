import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="nosotros" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
          {/* Text Column */}
          <div className="order-2 md:order-1">
            <ScrollReveal>
              <p className="mb-4 font-accent text-xs uppercase tracking-[0.3em] text-palta-dark">
                Nuestra historia
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h2 className="font-heading text-4xl uppercase leading-tight text-carbon sm:text-5xl lg:text-6xl">
                Más que
                <br />
                un café
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-carbon-light lg:text-lg">
                <p>
                  Todo empezó con una pregunta simple:{" "}
                  <em className="text-salvia">
                    ¿qué pasa cuando un café deja de ser un lugar donde
                    consumís y empieza a ser un lugar donde existís?
                  </em>
                </p>
                <p>
                  Bruma nació de esa inquietud. De querer crear un espacio
                  donde el tiempo se mide distinto, donde la taza de café no
                  es el producto sino la excusa para detenerse.
                </p>
                <p>
                  Antes fuimos Cardenal Carrasco. Hoy somos una marca 100%
                  propia y local, construida con las manos y con la certeza
                  de que lo bueno se hace despacio.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={360}>
              <div className="mt-10 flex items-center gap-6">
                <div className="h-px flex-1 bg-arcilla/50" />
                <p className="font-accent text-xs text-carbon-lighter">
                  100% local · Café de especialidad
                </p>
                <div className="h-px flex-1 bg-arcilla/50" />
              </div>
            </ScrollReveal>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2">
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/cafe-interior.png"
                    alt="Interior de Bruma Café con luz natural y plantas"
                    width={640}
                    height={800}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-salvia px-6 py-4 text-white shadow-lg md:-left-10">
                  <p className="font-accent text-xs uppercase tracking-wider opacity-80">
                    Desde
                  </p>
                  <p className="font-heading text-2xl">2024</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
