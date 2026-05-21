import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Pinyon_Script } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Il Giardino Café — La pausa que el día necesita",
    template: "%s | Il Giardino Café",
  },
  description:
    "Il Giardino Café es un refugio urbano en Montevideo donde el diseño y la calidez conviven. Café de especialidad, espacio de trabajo y punto de respiración en la ciudad.",
  keywords: [
    "café de especialidad",
    "cafetería Montevideo",
    "il giardino café",
    "café Montevideo",
    "espacio de trabajo",
    "coworking café",
    "brunch Montevideo",
    "café de especialidad Uruguay",
  ],
  metadataBase: new URL("https://ilgiardinocafe.com"),
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: "Il Giardino Café",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Il Giardino Café",
    description:
      "Café de especialidad en Montevideo. Refugio urbano con café de especialidad, espacio de trabajo y ambiente cálido.",
    url: "https://ilgiardinocafe.com",
    telephone: "+59895834531",
    email: "cafeilgiardino@gmail.com",
    servesCuisine: "Coffee",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gral. Máximo Tajes 7288 ",
      addressLocality: "Montevideo",
      addressCountry: "UY",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "14:00" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.8752742,
      longitude: -56.0480125,
    },
    image: "https://ilgiardinocafe.com/images/hero.png",
    sameAs: ["https://instagram.com/ilgiardinocafe", "https://wa.me/59895834531"],
  };

  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${sourceSans.variable} ${pinyonScript.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
