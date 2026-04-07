import type { Metadata } from "next";
import { Fredoka, Nunito, Caveat } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LYLYLAND | Glacier & Salon de Thé Artisanal - La Chapelle en Vercors",
  description:
    "Glaces artisanales, sorbets, bubble waffles, crêpes et pâtisseries au cœur du Vercors. Épicerie fine et cave à vins. Salon de thé familial à La Chapelle en Vercors.",
  keywords: [
    "glacier",
    "glaces artisanales",
    "La Chapelle en Vercors",
    "Vercors",
    "salon de thé",
    "bubble waffle",
    "sorbet",
    "épicerie fine",
  ],
  openGraph: {
    title: "LYLYLAND - Glacier Artisanal du Vercors",
    description:
      "Des glaces faites avec amour au cœur des montagnes du Vercors",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fredoka.variable} ${nunito.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen bg-cream text-chocolate overflow-x-hidden">{children}</body>
    </html>
  );
}
