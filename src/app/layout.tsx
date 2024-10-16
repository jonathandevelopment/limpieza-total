import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Limpieza Total",
  description: "Limpieza Total ofrece una amplia gama de productos de limpieza para autos y el hogar. Mantén tus espacios y vehículos impecables con nuestras soluciones de alta calidad.",
  icons: {
    icon: "/favicon.ico",  // Asegúrate de que el favicon esté en la carpeta public
  },
  // Meta imagen para SEO y redes sociales
  openGraph: {
    images: "/truck-loaded.webp",  // Asegúrate de que la imagen esté en la carpeta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
         {children}
        <Footer />
      </body>
    </html>
  );
}
