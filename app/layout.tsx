import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josecentenodev.vercel.app"),
  title: "José Centeno | Desarrollador Web Full Stack",
  description:
    "Desarrollador Full Stack con experiencia en Next.js, TypeScript, React, TailwindCSS, PostgreSQL, Prisma y más. Portfolio profesional con proyectos destacados.",
  keywords: [
    "desarrollo web",
    "full stack",
    "next.js",
    "react",
    "typescript",
    "tailwindcss",
    "angular",
    "josé centeno",
    "programador",
    "desarrollador",
  ],
  authors: [{ name: "José Centeno" }],
  creator: "José Centeno",
  publisher: "José Centeno",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://josecentenodev.vercel.app",
    title: "José Centeno | Desarrollador Web Full Stack",
    description:
      "Desarrollador Full Stack con experiencia en Next.js, TypeScript, React, TailwindCSS, PostgreSQL, Prisma y más. Portfolio profesional con proyectos destacados.",
    siteName: "Portfolio de José Centeno",
    images: [
      {
        url: "/yo.webp",
        width: 1200,
        height: 630,
        alt: "José Centeno - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Centeno | Desarrollador Web Full Stack",
    description:
      "Desarrollador Full Stack con experiencia en Next.js, TypeScript, React, TailwindCSS, PostgreSQL, Prisma y más.",
    images: ["/yo.webp"],
  },
  alternates: {
    canonical: "https://josecentenodev.vercel.app",
  },
};

// Separar viewport y themeColor en su propia exportación
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="dark"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
