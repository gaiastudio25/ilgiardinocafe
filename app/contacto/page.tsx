import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Visitanos en Montevideo, Uruguay. Café de especialidad, WiFi libre, espacio de trabajo. Luis Alberto de Herrera 2341, Punta Carretas.",
  openGraph: {
    title: "Contacto — Bruma Café",
    description:
      "Encontranos en Montevideo, Uruguay. Café de especialidad, WiFi y espacio de trabajo.",
  },
};

export default function ContactoPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 font-accent text-xs uppercase tracking-[0.3em] text-palta-dark">
                Visitanos
              </p>
              <h1 className="font-heading text-5xl uppercase text-carbon sm:text-6xl lg:text-7xl">
                Encontranos
              </h1>
            </div>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <iframe
                  title="Ubicación de Bruma Café"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.241791631622!2d-56.0480125!3d-34.8752742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f87006a137827%3A0x78a4df3b966d3e26!2sCardenal%20Carrasco!5e0!3m2!1ses-419!2suy!4v1777585576791!5m2!1ses-419!2suy"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Bruma+Cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full justify-center text-center md:hidden"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Cómo llegar
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-12">
                <div>
                  <h2 className="mb-6 font-heading text-2xl uppercase tracking-wide text-carbon">
                    Dirección
                  </h2>
                  <p className="text-lg text-carbon-light">
                    Gral. Máximo Tajes 7288
                    <br />
                    Montevideo, Uruguay
                  </p>
                  <a
                    href="https://maps.google.com/?q=Bruma+Cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-accent text-sm text-salvia transition-colors hover:text-palta-dark"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Cómo llegar →
                  </a>
                </div>

                <div>
                  <h2 className="mb-6 font-heading text-2xl uppercase tracking-wide text-carbon">
                    Horarios
                  </h2>
                  <div className="space-y-3">
                    {[
                      { day: "Lunes a viernes", hours: "8:00 — 20:00" },
                      { day: "Sábados", hours: "9:00 — 18:00" },
                      { day: "Domingos", hours: "9:00 — 14:00" },
                    ].map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex items-center justify-between border-b border-arcilla/30 pb-3"
                      >
                        <span className="text-base text-carbon-light">
                          {schedule.day}
                        </span>
                        <span className="font-accent text-base text-carbon">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-6 font-heading text-2xl uppercase tracking-wide text-carbon">
                    Contacto
                  </h2>
                  <div className="space-y-2 text-base text-carbon-light">
                    <a
                      href="mailto:hola@brumacafe.com"
                      className="block transition-colors hover:text-salvia"
                    >
                      hola@brumacafe.com
                    </a>
                    <a
                      href="tel:+59891234567"
                      className="block transition-colors hover:text-salvia"
                    >
                      +598 91 234 567
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="mb-6 font-heading text-2xl uppercase tracking-wide text-carbon">
                    Seguinos
                  </h2>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/brumacafe"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-arcilla/50 text-carbon-light transition-all duration-300 hover:border-salvia hover:bg-salvia hover:text-white"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="5" />
                        <path d="M17.5 6.5h.01" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/59891234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-arcilla/50 text-carbon-light transition-all duration-300 hover:border-salvia hover:bg-salvia hover:text-white"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="rounded-xl bg-palta/10 p-6">
                  <div className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-salvia"
                    >
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                    <div>
                      <p className="text-base font-medium text-salvia">
                        WiFi libre y rápido
                      </p>
                      <p className="mt-2 text-sm text-carbon-lighter">
                        Tu oficina alternativa favorita. Pedí la clave en barra.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
