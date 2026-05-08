import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
const pillars = [
  {
    number: "01",
    title: "Sin apuro",
    description:
      "Un espacio donde el reloj no mandos. Cada taza se prepara con el tiempo que merece, y cada visita se disfruta sin cuenta regresiva.",
    accent: "Slow coffee",
  },
  {
    number: "02",
    title: "Sin ruido",
    description:
      "Un refugio del caos cotidiano. Música suave, luz cálida y una atmósfera pensada para que tu mente descanse o se inspire.",
    accent: "Refugio urbano",
  },
  {
    number: "03",
    title: "Sin pretensión",
    description:
      "Calidad genuina, sin poses. Lo que ves es lo que somos: café honesto, ingredientes de verdad y un equipo que ama lo que hace.",
    accent: "Autenticidad",
  },
];

export default function NosotrosPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-24 text-center">
              <p className="mb-6 font-accent text-xs uppercase tracking-[0.35em] text-palta-dark">
                Nuestra historia
              </p>
              <h1 className="font-heading text-5xl uppercase leading-tight text-carbon sm:text-6xl lg:text-7xl">
                Más que<br />un café
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-8 text-xl leading-relaxed text-carbon-light">
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

          <ScrollReveal delay={300}>
            <div className="mt-16 flex items-center justify-center gap-6">
              <div className="h-px w-16 bg-arcilla/50" />
              <p className="font-accent text-xs text-carbon-lighter">
                100% local · Café de especialidad · Desde 2024
              </p>
              <div className="h-px w-16 bg-arcilla/50" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-salvia text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <p className="mb-6 font-accent text-xs uppercase tracking-[0.35em] text-palta">
                El concepto
              </p>
              <h2 className="font-heading text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl">
                Un punto de<br />respiración
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
                Creemos en los espacios que cuidan. En que una pausa bien tomada
                puede cambiar el resto del día.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.number} delay={i * 150}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-500 hover:border-palta/30 hover:bg-white/10">
                  <span className="font-accent text-sm text-palta">{pillar.number}</span>
                  <h3 className="mt-6 font-heading text-2xl uppercase tracking-wide lg:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    {pillar.description}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px w-8 bg-palta/50 transition-all duration-500 group-hover:w-12" />
                    <span className="font-accent text-xs uppercase tracking-wider text-palta/70">
                      {pillar.accent}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <ScrollReveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/cafe-interior.png"
                    alt="Interior de Bruma Café"
                    width={640}
                    height={800}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-xl bg-salvia px-6 py-4 text-white shadow-lg md:-left-10">
                  <p className="font-accent text-xs uppercase tracking-wider opacity-80">
                    Desde
                  </p>
                  <p className="font-heading text-2xl">2024</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <h2 className="font-heading text-4xl uppercase leading-tight text-carbon sm:text-5xl lg:text-6xl">
                  Un refugio<br />en la ciudad
                </h2>
                <p className="text-lg leading-relaxed text-carbon-light">
                  Bruma es ese rincón donde la ciudad se detiene. Donde la luz entra
                  suave por las ventanas, donde la música no compite con tus
                  pensamientos y donde cada visita se siente como volver a
                  un lugar que ya conoces.
                </p>
                <Link href="/contacto" className="btn-primary">
                  Visitanos
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}