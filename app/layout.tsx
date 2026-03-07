import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAZWAAPKI – Przejmij kontrolę nad swoją budową",
  description:
    "Zarządzaj budżetem, dokumentami i postępami budowy w jednym miejscu. Koniec z chaosem, stresem i zaskakującymi fakturami. Aplikacja dla inwestorów indywidualnych.",
  keywords: ["budowa domu", "zarządzanie budową", "kontrola budżetu", "inwestor indywidualny", "aplikacja budowlana"],
  openGraph: {
    title: "NAZWAAPKI – Przejmij kontrolę nad swoją budową",
    description:
      "Zarządzaj budżetem, dokumentami i postępami budowy w jednym miejscu.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
