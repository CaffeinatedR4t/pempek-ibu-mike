import type { Metadata } from "next";
import { Vollkorn, Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";

const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pempek Ibu Mike — Pempek Asli Palembang di Bogor (Sejak 2017)",
  description:
    "UMKM pempek autentik Palembang berbahan baku ikan tenggiri asli pilihan, beroperasi di Bogor sejak 2017. Tanpa pengawet, terverifikasi NIB, P-IRT, dan Halal MUI. Pesan via WhatsApp.",
  keywords: [
    "pempek bogor",
    "pempek ibu mike",
    "pempek palembang asli",
    "pempek tenggiri",
    "pempek kapal selam",
    "pempek frozen bogor",
    "catering pempek",
  ],
  authors: [{ name: "Pempek Ibu Mike" }],
  openGraph: {
    title: "Pempek Ibu Mike — Pempek Asli Palembang di Bogor",
    description:
      "Rasa Asli Palembang, lahir dari Hati. Olahan ikan tenggiri asli pilihan sejak 2017.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Pempek Ibu Mike",
    image: "/images/logo%20pempek.png",
    description:
      "Pempek autentik Palembang berbahan baku ikan tenggiri asli pilihan di Bogor sejak 2017.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pasar Perumahan",
      addressLocality: "Bogor",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "11:00",
      },
    ],
    telephone: "+6287885170561",
    priceRange: "$$",
    servesCuisine: "Indonesian, Palembang",
  };

  return (
    <html lang="id" className={`${vollkorn.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#000000] text-[#E7DFCC] selection:bg-[#660903] selection:text-[#FDB03F]">
        <SmoothScroll>
          <MotionProvider>
            {children}
            <WhatsAppFloating />
          </MotionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
