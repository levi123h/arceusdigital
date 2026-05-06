import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial"],
});

export const metadata: Metadata = {
  title: "Arceus Digital — Precision Marketing for Scalable Growth",
  description:
    "Arceus Digital helps brands turn data into revenue through performance marketing, creative strategy, and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body id="top" className="min-h-full flex flex-col bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
