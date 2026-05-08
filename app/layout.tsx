import type { Metadata } from "next";
import { Anton, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bruma Café — La pausa que el día necesita",
    template: "%s | Bruma Café",
  },
  description:
    "Bruma Café es un refugio urbano en Montevideo donde el diseño y la calidez conviven. Café de especialidad, espacio de trabajo y punto de respiración en la ciudad.",
  keywords: [
    "café de especialidad",
    "cafetería Montevideo",
    "bruma café",
    "café Montevideo",
    "espacio de trabajo",
    "coworking café",
    "brunch Montevideo",
    "café de especialidad Uruguay",
  ],
  metadataBase: new URL("https://brumacafe.com"),
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: "Bruma Café",
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
    name: "Bruma Café",
    description:
      "Café de especialidad en Montevideo. Refugio urbano con café de especialidad, espacio de trabajo y ambiente cálido.",
    url: "https://brumacafe.com",
    telephone: "+59891234567",
    email: "hola@brumacafe.com",
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
    image: "https://brumacafe.com/images/hero.png",
    sameAs: ["https://instagram.com/brumacafe", "https://wa.me/59891234567"],
  };

  return (
    <html
      lang="es"
      className={`${anton.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
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
