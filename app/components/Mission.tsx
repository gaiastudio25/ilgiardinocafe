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
    <section className="py-10 lg:py-12 bg-olive text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 max-w-xl text-center mx-auto">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.4em] text-primary">
            Nuestra visión
          </p>
          <h2 className="font-heading text-2xl uppercase leading-[1.1] sm:text-3xl lg:text-4xl">
            Un punto de<br />respiración
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Creemos en los espacios que cuidan.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-4">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="border-l border-white/10 pl-5">
              <span className="font-accent text-xs text-primary/70">
                {pillar.number}
              </span>
              <h3 className="mt-2 font-heading text-base uppercase tracking-wide text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {pillar.description}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-px w-5 bg-primary/30" />
                <span className="font-accent text-[10px] uppercase tracking-wider text-primary/50">
                  {pillar.accent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
