import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Barbearia do Max 💈 | Corte Masculino em Angra dos Reis",
    template: "%s | Barbearia do Max",
  },

  description:
    "Barbearia do Max em Angra dos Reis 💈 Corte masculino, barba e combo com preço acessível. Agende online ou chame no WhatsApp!",

  keywords: [
    "barbearia em angra dos reis",
    "corte masculino angra",
    "barbeiro angra dos reis",
    "barbearia perto de mim",
    "corte de cabelo masculino"
  ],

  authors: [{ name: "Barbearia do Max" }],
  creator: "Barbearia do Max",

  metadataBase: new URL("https://seudominio.com"),

  openGraph: {
    title: "Barbearia do Max 💈",
    description:
      "Cortes modernos, barba e atendimento de qualidade em Angra dos Reis.",
    url: "https://seudominio.com",
    siteName: "Barbearia do Max",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barbearia do Max",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Barbearia do Max 💈",
    description:
      "Cortes modernos e barba em Angra dos Reis.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}