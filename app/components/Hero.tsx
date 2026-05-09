import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/bar-bruma.png"
          alt="Interior cálido de Bruma Café"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-crema/80 via-crema/65 to-crema/95" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="mb-4 font-accent text-xs uppercase tracking-[0.35em] text-salvia">
            Café de especialidad
          </p>
        </div>

        <h1 className="animate-fade-in-up-delay-1 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Bruma Café"
            width={400}
            height={200}
            priority
            className="h-auto w-auto max-w-[280px] sm:max-w-[400px]"
          />
        </h1>

        <div className="animate-fade-in-up-delay-2 mt-6 md:mt-8">
          <p className="font-body text-lg font-light text-carbon-light md:text-xl">
            La pausa que el día necesita
          </p>
        </div>

        <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/menu" className="btn-primary">
            Ver menú
          </Link>
          <Link href="/nosotros" className="btn-secondary">
            Conocenos
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-scroll-indicator">
        <div className="flex flex-col items-center gap-2">
          <span className="font-accent text-[10px] uppercase tracking-widest text-carbon-lighter">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            className="text-carbon-lighter"
          >
            <path
              d="M7.293 23.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L8 21.586l-5.657-5.657a1 1 0 00-1.414 1.414l6.364 6.364zM7 0v23h2V0H7z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
