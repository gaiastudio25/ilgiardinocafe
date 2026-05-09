import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
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
      {/* ── HERO (crema) ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="font-accent text-xs uppercase tracking-[0.3em] text-palta-dark">
                  Concepto No. 01 — El Refugio
                </p>
                <h1 className="mt-6 font-heading text-5xl uppercase leading-[0.95] tracking-wider text-carbon sm:text-6xl lg:text-7xl">
                  La pausa
                  <br />
                  que el día
                  <br />
                  necesita
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <p className="mt-12 max-w-md text-lg leading-relaxed text-carbon-light">
                  Un estudio donde el diseño y la calidez conviven. Donde cada
                  taza se sirve con la misma intención con la que elegimos cada
                  detalle.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal delay={400}>
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-h-[400px] lg:max-h-none overflow-hidden rounded-sm">
                  <Image
                    src="/images/expresso-bruma.png"
                    alt="Interior de Bruma Café"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK ── */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative aspect-[16/9] lg:aspect-[3/1] w-full max-h-[250px] lg:max-h-none overflow-hidden rounded-sm">
              <Image
                src="/images/bruma-coffee-house.png"
                alt="Ambiente de Bruma Café"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STORY (crema-dark) ── */}
      <section className="py-24 lg:py-32 bg-crema-dark">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="font-accent text-xs uppercase tracking-[0.3em] text-palta-dark">
              Nuestra historia
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-12 text-2xl leading-relaxed text-carbon/80 italic font-heading">
              &ldquo;¿Qué pasa cuando un café deja de ser un lugar donde
              consumís y empieza a ser un lugar donde existís?&rdquo;
            </p>
          </ScrollReveal>
          <div className="mt-16 space-y-6">
            <ScrollReveal delay={300}>
              <p className="text-[17px] leading-relaxed text-carbon-light">
                Bruma nació de esa inquietud. De querer crear un espacio donde
                el tiempo se mide distinto, donde la taza de café no es el
                producto sino la excusa para detenerse.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-[17px] leading-relaxed text-carbon-light">
                Antes fuimos Cardenal Carrasco. Hoy somos una marca 100% propia
                y local, construida con las manos y con la certeza de que lo
                bueno se hace despacio.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={500}>
            <div className="mt-16 flex items-center gap-6">
              <div className="h-px flex-1 bg-crema-dark/60" />
              <span className="font-accent text-[11px] uppercase tracking-[0.25em] text-carbon-lighter">
                Desde 2024
              </span>
              <div className="h-px flex-1 bg-crema-dark/60" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONCEPT / PILLARS (salvia) ── */}
      <section className="py-16 lg:py-24 bg-salvia text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 font-accent text-xs uppercase tracking-[0.4em] text-palta">
                El concepto
              </p>
              <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
                Un punto de respiración
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-palta/40" />
                <span className="w-1 h-1 rounded-full bg-palta/40" />
                <span className="h-px w-6 bg-palta/40" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3 md:gap-4">
            {conceptos.map((c, i) => (
              <ScrollReveal key={c.number} delay={i * 150}>
                <div className="group border-l border-white/10 pl-6 transition-all duration-500 hover:border-palta/40">
                  <span className="font-accent text-xs text-palta/70">
                    {c.number}
                  </span>
                  <h3 className="mt-3 font-heading text-lg uppercase tracking-wide text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {c.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-px w-6 bg-palta/30 transition-all duration-500 group-hover:w-10" />
                    <span className="font-accent text-[10px] uppercase tracking-wider text-palta/50">
                      {c.tag}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL IMAGE + CTA ── */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:col-start-1">
              <ScrollReveal>
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-h-[400px] lg:max-h-none overflow-hidden rounded-sm">
                  <Image
                    src="/images/capuchino-bruma.png"
                    alt="Café latte con latte art"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={200}>
                <p className="font-accent text-xs uppercase tracking-[0.3em] text-palta-dark">
                  El espacio
                </p>
                <h2 className="mt-8 font-heading text-3xl uppercase leading-[0.95] tracking-wider text-carbon sm:text-4xl lg:text-5xl">
                  Un refugio
                  <br />
                  en la ciudad
                </h2>
                <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-carbon-light">
                  Bruma es ese rincón donde la ciudad se detiene. Donde la luz
                  entra suave por las ventanas y cada visita se siente como
                  volver a un lugar que ya conocés.
                </p>
                <Link
                  href="/contacto"
                  className="mt-10 inline-block font-accent text-sm uppercase tracking-[0.25em] text-palta underline underline-offset-8 decoration-palta/30 hover:decoration-palta transition-all duration-300"
                >
                  Vení a conocernos
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
