import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import type React from "react";
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={
        `${inter.className} antialiased text-white flex flex-col min-h-screen`
      }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">
              { children }
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
