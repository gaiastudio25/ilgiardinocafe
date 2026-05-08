import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Lucía M.",
    text: "El mejor café de especialidad de Montevideo. El flat white es perfecto y el ambiente es ideal para trabajar. Mi lugar favorito.",
  },
  {
    name: "Andrés P.",
    text: "Un refugio en la ciudad. La V60 es espectacular y las medialunas recién horneadas son imperdibles. Volver cada semana.",
  },
  {
    name: "Carolina G.",
    text: "El espacio es hermoso, la atención es increíble y el café es de primera calidad. Bruma se convirtió en mi oficina alterna.",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 lg:py-20 bg-crema-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="mb-4 font-accent text-xs uppercase tracking-[0.4em] text-palta-dark">
              Reseñas
            </p>
            <h2 className="font-heading text-3xl uppercase text-carbon sm:text-4xl lg:text-5xl">
              Lo que dicen
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-palta/30" />
              <span className="w-1 h-1 rounded-full bg-palta/30" />
              <span className="h-px w-6 bg-palta/30" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 120}>
              <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="mb-4 flex gap-1 text-palta">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-carbon-light">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-accent text-xs uppercase tracking-wider text-carbon">
                  — {review.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
