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
  title: "Marketing Engine by Stitchflow | Become an AI-Native Marketing Team",
  description:
    "We build you an AI-powered marketing engine loaded with your context. Blogs, sales decks, outbound, case studies — output that sounds like you, not like a robot.",
  openGraph: {
    title: "Marketing Engine by Stitchflow | Become an AI-Native Marketing Team",
    description:
      "Stop juggling AI tools for generic output. We build a marketing engine loaded with your positioning, voice, and buyer language. The output sounds like you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Engine by Stitchflow | Become an AI-Native Marketing Team",
    description:
      "Stop juggling AI tools for generic output. We build a marketing engine loaded with your positioning, voice, and buyer language. The output sounds like you.",
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
