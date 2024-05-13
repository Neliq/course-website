import type { Metadata } from "next";
import "./globals.css";

import { NextAuthProvider } from "./Providers";

import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "UXSource | Free UX/UI Design Courses",
  description:
    "UXSource is a curated list of free courses made by our experienced designers. From beginner to advanced, with Figma Files and Feedback system.",
  metadataBase: new URL("https://courses.koszyka.com/"),
  keywords: [
    "Free UX/UI Courses",
    "Free Courses",
    "UXSource",
    "UX/UI",
    "UX",
    "Product Design",
    "UI",
    "Online Courses",
    "Design",
    "Design Courses",
    "UX Courses",
    "UI Courses",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "/favicon.ico",
      url: "/favicon.ico",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "UXSource | Free UX/UI Design Courses",
    description:
      "UXSource is a curated list of free courses made by our experienced designers. From beginner to advanced, with Figma Files and Feedback system.",
    url: "https://courses.koszyka.com/",
    siteName: "Jakub Koszyka",
    images: [
      {
        url: "https://courses.koszyka.com/thumbnail.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://courses.koszyka.com/thumbnail.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
