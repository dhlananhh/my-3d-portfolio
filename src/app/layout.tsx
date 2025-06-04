import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const siteUrl = "https://your-portfolio-domain.com"; // Thay bằng domain của bạn

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio 3D Animation - Lan Anh",
    template: "%s | Lan Anh's Portfolio Website", // Dùng cho các trang con
  },
  description: "Explore Lan Anh's portfolio website. Contact me for collaboration!",
  keywords: [ "3D animation", "portfolio", "Lan Anh", "programming", "frontend", ],
  authors: [ { name: "Lan Anh", url: siteUrl } ],
  creator: "Lan Anh",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Portfolio 3D Animation - Lan Anh",
    description: "Explore Lan Anh's portfolio website.",
    url: siteUrl,
    siteName: "Lan Anh's Portfolio Website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Tạo file /public/og-image.jpg (1200x630px)
        width: 1200,
        height: 630,
        alt: "Lan Anh's Profile Image",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio 3D Animation - Lan Anh",
    description: "Khám phá thế giới 3D animation của Lan Anh.",
    // siteId: 'yourTwitterSiteId', // Nếu có
    creator: "@yourTwitterHandle", // Nếu có
    images: [ `${siteUrl}/og-image.jpg` ], // Twitter cũng có thể dùng og:image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: { // Favicons
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // }
};

export const viewport: Viewport = {
  themeColor: "#14B8A6",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={ `${inter.className} bg-gray-900 text-white antialiased` }>
        <Navbar />
        <main>{ children }</main>
      </body>
    </html>
  );
}
