import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import type React from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col
                        bg-gradient-to-br from-gray-100 via-slate-50 to-stone-100
                        dark:from-gray-900 dark:via-gray-950 dark:to-black
                        transition-colors duration-300 text-foreground"
          >
            <Navbar />
            <main className="flex-grow">
              { children }
            </main>
            <Footer />
          </div>
          <SonnerToaster />
          <RadixToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
