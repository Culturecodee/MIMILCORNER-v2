import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catering 24 Jam Malang | Mimilcorner",
  description:
    "Mimilcorner – Catering Malang terpercaya. Spesialis Nasi Kotak Malang, Nasi Tumpeng Malang, Snack Box, dan Jajanan Pasar. Buka 24 jam untuk semua acara spesial Anda.",
  keywords: [
    "Catering Malang",
    "Nasi Kotak Malang",
    "Nasi Tumpeng Malang",
    "Catering 24 Jam Malang",
    "Snack Box Malang",
    "Jajanan Pasar Malang",
    "Catering Event Malang",
    "Mimilcorner",
  ],
  openGraph: {
    title: "Catering 24 Jam Malang | Mimilcorner",
    description:
      "Catering Malang terpercaya. Nasi Kotak, Nasi Tumpeng, Snack Box, dan Jajanan Pasar. Melayani 24 jam di Landungsari, Kabupaten Malang.",
    url: "https://mimilcorner.com",
    siteName: "Mimilcorner",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering 24 Jam Malang | Mimilcorner",
    description:
      "Nasi Kotak, Nasi Tumpeng, Snack Box – Catering Malang buka 24 jam. Hubungi +62 857-3034-9744.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="_9cfCOJ2Kzrah7LDD7vJsFO1EhhHhhx-zh5WWmcshvE" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal antialiased">{children}</body>
    </html>
  );
}
