import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster as RadixToaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "3D Animation Portfolio - Lan Anh",
  description: "Welcome to my 3D Animation portfolio.",
  openGraph: {
    title: "Portfolio - Lan Anh",
    description: "Frontend Developer Portfolio of Lan Anh.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={ `${inter.className} antialiased flex flex-col min-h-screen` }
      >
        <Navbar />
        <main className="flex-grow">
          { children }
        </main>
        <Footer />
        <RadixToaster />
      </body>
    </html>
  );
}
