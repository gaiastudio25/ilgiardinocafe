const reviews = [
  {
    name: "Rossana A.",
    text: "Disfrutamos de una merienda en el nuevo local de Carrasco y la experiencia fue súper buena: el café de especialidad es riquísimo y la comida tanto salada como dulce es súper tentadora y disfrutable sin dudas volveremos para elegir nuevas propuestas y disfrutar de una excelente atención",
  },
  {
    name: "Ana Carolina S.",
    text: "Fuimos con mi equipo de trabajo a este lugar y la verdad fue un acierto total. El brunch estaba delicioso, con opciones frescas y bien presentadas, y el ambiente era muy agradable para compartir un buen momento. Pero lo que realmente marcó la diferencia fue la amabilidad del servicio: nos atendieron con una sonrisa, atentos en todo momento y con mucha calidez. Sin duda vamos a volver.",
  },
  {
    name: "Alejandro B.",
    text: "Muy lindo todo. Excelente atención del personal y de los dueños, todos atentos para ofrecer una excelente experiencia. Una carta muy original, y con precios muy razonables. Un lugar de paso para pasar un buen rato, en una zona que necesitaba un lugar así.",
  },
];

export default function Reviews() {
  return (
    <section className="py-10 lg:py-12 bg-crema-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 text-center">
          <p className="mb-3 font-accent text-xs uppercase tracking-[0.4em] text-primary">
            Reseñas
          </p>
          <h2 className="font-heading text-2xl uppercase text-carbon sm:text-3xl lg:text-4xl">
            Lo que dicen
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-xl bg-white p-5 shadow-sm">
              <div className="mb-2 flex gap-1 text-primary">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="mb-3 text-sm leading-relaxed text-carbon-light">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-accent text-xs uppercase tracking-wider text-carbon">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
