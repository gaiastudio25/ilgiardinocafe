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
    <section className="py-16 lg:py-20 bg-salvia text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-12 max-w-xl text-center mx-auto">
            <p className="mb-4 font-accent text-xs uppercase tracking-[0.4em] text-palta">
              Nuestra visión
            </p>
            <h2 className="font-heading text-3xl uppercase leading-[1.1] sm:text-4xl lg:text-5xl">
              Un punto de<br />respiración
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-palta/40" />
              <span className="w-1 h-1 rounded-full bg-palta/40" />
              <span className="h-px w-8 bg-palta/40" />
            </div>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Creemos en los espacios que cuidan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-4">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={i * 150}>
              <div className="group border-l border-white/10 pl-6 transition-all duration-500 hover:border-palta/40">
                <span className="font-accent text-xs text-palta/70">
                  {pillar.number}
                </span>
                <h3 className="mt-3 font-heading text-lg uppercase tracking-wide text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {pillar.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-px w-6 bg-palta/30 transition-all duration-500 group-hover:w-10" />
                  <span className="font-accent text-[10px] uppercase tracking-wider text-palta/50">
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
