import type { Metadata } from "next";
import { Anton, DM_Sans, IBM_Plex_Mono } from "next/font/google";
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
  title: "Bruma Café — La pausa que el día necesita",
  description:
    "Bruma Café es un refugio urbano donde el diseño y la calidez conviven. Café de especialidad, espacio de trabajo y punto de respiración en la ciudad.",
  keywords: [
    "café de especialidad",
    "cafetería",
    "bruma café",
    "café local",
    "espacio de trabajo",
    "coworking café",
  ],
  openGraph: {
    title: "Bruma Café — La pausa que el día necesita",
    description:
      "Un refugio urbano donde el diseño y la calidez conviven para ofrecer una interrupción al ruido cotidiano.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}