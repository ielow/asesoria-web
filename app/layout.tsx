import type { Metadata } from "next";
import { League_Spartan, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { GrommetProvider } from "@/components/GrommetProvider";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Sitio web profesional con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${leagueSpartan.variable} ${instrumentSans.variable}`}>
      <body style={{ background: '#3a3a3a', margin: 0, padding: 0 }}>
        <GrommetProvider>
          {children}
        </GrommetProvider>
      </body>
    </html>
  );
}
