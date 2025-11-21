import type { Metadata } from "next";
import { League_Spartan, Instrument_Sans } from "next/font/google";
import Script from "next/script";
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P545GXG2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P545GXG2');
          `}
        </Script>
        <GrommetProvider>
          {children}
        </GrommetProvider>
      </body>
    </html>
  );
}
