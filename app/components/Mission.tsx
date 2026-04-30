import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Sin apuro",
    description:
      "Un espacio donde el reloj no manda. Cada taza se prepara con el tiempo que merece, y cada visita se disfruta sin cuenta regresiva.",
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

export default function Mission() {
  return (
    <section className="section-padding bg-salvia text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 font-accent text-xs uppercase tracking-[0.3em] text-palta">
              Nuestra visión
            </p>
            <h2 className="font-heading text-4xl uppercase leading-tight sm:text-5xl lg:text-6xl">
              Un punto de
              <br />
              respiración
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Creemos en los espacios que cuidan. En que una pausa bien tomada
              puede cambiar el resto del día.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={i * 150}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-palta/30 hover:bg-white/10 lg:p-10">
                <span className="font-accent text-sm text-palta">
                  {pillar.number}
                </span>
                <h3 className="mt-4 font-heading text-2xl uppercase tracking-wide lg:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60 lg:text-base">
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
  );
}
