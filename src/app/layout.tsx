import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "3D Animation Portfolio - Lan Anh",
  description: "Welcome to my 3D Animation portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={
        `${inter.className} bg-gray-900 text-white antialiased flex flex-col min-h-screen`
      }>
        <Navbar />
        <main className="flex-grow">{ children }</main>
        <Footer />
      </body>
    </html>
  );
}
