import type { Metadata } from "next";
import "./globals.css";
import { GrommetProvider } from "@/components/GrommetProvider";
import Navbar from "@/components/Navbar";

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
    <html lang="es">
      <body style={{ background: '#3a3a3a', margin: 0, padding: 0 }}>
        <GrommetProvider>
          <Navbar />
          {children}
        </GrommetProvider>
      </body>
    </html>
  );
}
