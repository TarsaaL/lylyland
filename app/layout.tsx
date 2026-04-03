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
  title: "LYLYLAND | Glacier & Salon de The Artisanal - La Chapelle en Vercors",
  description:
    "Glaces artisanales, sorbets, bubble waffles, crepes et patisseries au coeur du Vercors. Epicerie fine et cave a vins. Salon de the familial a La Chapelle en Vercors.",
  keywords: [
    "glacier",
    "glaces artisanales",
    "La Chapelle en Vercors",
    "Vercors",
    "salon de the",
    "bubble waffle",
    "sorbet",
    "epicerie fine",
  ],
  openGraph: {
    title: "LYLYLAND - Glacier Artisanal du Vercors",
    description:
      "Des glaces faites avec amour au coeur des montagnes du Vercors",
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
      <body className="min-h-screen bg-cream text-chocolate">{children}</body>
    </html>
  );
}
