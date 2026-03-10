import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketing Engine by Stitchflow — Turn Technical Knowledge into Pipeline",
  description:
    "AI-powered marketing engine for technical founders. Capture your product knowledge once, produce blogs, outbound, case studies, and sales decks at 10x speed. Built by Stitchflow.",
  openGraph: {
    title: "Marketing Engine by Stitchflow — Turn Technical Knowledge into Pipeline",
    description:
      "Your product closes 40% of demos. Your marketing can't keep up. Marketing Engine fixes that — an AI agent loaded with your context that produces technically accurate content at scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Engine by Stitchflow — Turn Technical Knowledge into Pipeline",
    description:
      "Your product closes 40% of demos. Your marketing can't keep up. Marketing Engine fixes that — an AI agent loaded with your context that produces technically accurate content at scale.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
