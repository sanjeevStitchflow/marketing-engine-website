import type { Metadata } from "next";
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
  title: "Marketing Engine | We Build Your AI-Powered Marketing Machine",
  description:
    "We come in, learn your business, and build an AI-powered marketing engine that produces blogs, sales decks, outbound campaigns, and more — all in your voice.",
  openGraph: {
    title: "Marketing Engine | We Build Your AI-Powered Marketing Machine",
    description:
      "We build your AI-powered marketing engine. Blogs, sales decks, outbound, case studies — all grounded in your positioning and voice.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Engine | We Build Your AI-Powered Marketing Machine",
    description:
      "We build your AI-powered marketing engine. Blogs, sales decks, outbound, case studies — all grounded in your positioning and voice.",
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        style={{ margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
