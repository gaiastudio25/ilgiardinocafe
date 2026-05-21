import Image from "next/image";
import Link from "next/link";

const conceptos = [
  {
    number: "01",
    title: "Sin apuro",
    description:
      "Un espacio donde el reloj no manda. Cada taza se prepara con el tiempo que merece, y cada visita se disfruta sin cuenta regresiva.",
    tag: "Slow coffee",
  },
  {
    number: "02",
    title: "Sin ruido",
    description:
      "Un refugio del caos cotidiano. Música suave, luz cálida y una atmósfera pensada para que tu mente descanse o se inspire.",
    tag: "Refugio urbano",
  },
  {
    number: "03",
    title: "Sin pretensión",
    description:
      "Calidad genuina, sin poses. Lo que ves es lo que somos: café honesto, ingredientes de verdad y un equipo que ama lo que hace.",
    tag: "Autenticidad",
  },
];

export default function NosotrosPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary">
                Concepto No. 01 — El Refugio
              </p>
              <h1 className="mt-4 font-heading text-4xl uppercase leading-[0.95] tracking-wider text-carbon sm:text-5xl lg:text-6xl">
                La pausa
                <br />
                que el día
                <br />
                necesita
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-carbon-light">
                Un estudio donde el diseño y la calidez conviven. Donde cada
                taza se sirve con la misma intención con la que elegimos cada
                detalle.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] w-full max-h-[350px] lg:max-h-none overflow-hidden rounded-sm">
                <Image
                  src="/images/nosotros.png"
                  alt="Interior de Il Giardino Café"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="relative aspect-[16/9] lg:aspect-[3/1] w-full max-h-[200px] lg:max-h-none overflow-hidden rounded-sm">
            <Image
              src="/images/bruma-coffee-house.png"
              alt="Ambiente de Il Giardino Café"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-crema-dark">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary">
            Nuestra historia
          </p>
          <p className="mt-6 text-xl leading-relaxed text-carbon/80 italic font-heading">
            &ldquo;¿Qué pasa cuando un café deja de ser un lugar donde
            consumís y empieza a ser un lugar donde existís?&rdquo;
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-base leading-relaxed text-carbon-light">
              Il Giardino nació de esa inquietud. De querer crear un espacio donde
              el tiempo se mide distinto, donde la taza de café no es el
              producto sino la excusa para detenerse.
            </p>
            <p className="text-base leading-relaxed text-carbon-light">
              Hoy somos una cafetería de especialidad en Carrasco con identidad propia. Un espacio en Montevideo donde el buen café, el brunch y la pastelería artesanal se hacen despacio y con ganas.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="h-px flex-1 bg-crema-dark/60" />
            <span className="font-accent text-[11px] uppercase tracking-[0.25em] text-carbon-lighter">
              Desde 2024
            </span>
            <div className="h-px flex-1 bg-crema-dark/60" />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-olive text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p className="mb-3 font-accent text-xs uppercase tracking-[0.4em] text-primary">
              El concepto
            </p>
            <h2 className="font-heading text-2xl text-white sm:text-3xl lg:text-4xl">
              Un punto de respiración
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-4">
            {conceptos.map((c) => (
              <div key={c.number} className="border-l border-white/10 pl-5">
                <span className="font-accent text-xs text-primary/70">
                  {c.number}
                </span>
                <h3 className="mt-2 font-heading text-base uppercase tracking-wide text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {c.description}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px w-5 bg-primary/30" />
                  <span className="font-accent text-[10px] uppercase tracking-wider text-primary/50">
                    {c.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="relative aspect-[3/4] w-full max-h-[350px] lg:max-h-none overflow-hidden rounded-sm">
                <Image
                  src="/images/capuchino-bruma.png"
                  alt="Café latte con latte art"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-7">
              <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary">
                El espacio
              </p>
              <h2 className="mt-4 font-heading text-3xl uppercase leading-[0.95] tracking-wider text-carbon sm:text-4xl">
                Un refugio
                <br />
                en la ciudad
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-carbon-light">
                Il Giardino es ese rincón donde la ciudad se detiene. Donde la luz
                entra suave por las ventanas y cada visita se siente como
                volver a un lugar que ya conocés.
              </p>
              <Link
                href="/contacto"
                className="mt-6 inline-block font-accent text-sm uppercase tracking-[0.25em] text-primary underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all duration-300"
              >
                Vení a conocernos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}