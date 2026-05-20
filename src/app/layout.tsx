import type { Metadata } from "next";
import { Inter, Fraunces, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://diyasharma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Diya Sharma",
    template: "%s — Diya Sharma",
  },
  description:
    "Diya Sharma — Computer Science at Georgia Tech. Projects, writing, and a bit of photography.",
  openGraph: {
    title: "Diya Sharma",
    description:
      "Computer Science at Georgia Tech — projects, writing, and a bit of photography.",
    url: SITE_URL,
    siteName: "Diya Sharma",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diya Sharma",
    description:
      "Computer Science at Georgia Tech — projects, writing, and a bit of photography.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
