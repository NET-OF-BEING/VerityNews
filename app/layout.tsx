import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veritynews.com"),
  title: {
    default: "VerityNews — AI-Powered Truth in a Post-Truth World",
    template: "%s | VerityNews",
  },
  description:
    "Investigative journalism powered by AI. We follow the money, expose the systems, and hold power accountable.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "VerityNews",
    title: "VerityNews — AI-Powered Truth in a Post-Truth World",
    description:
      "Investigative journalism powered by AI. We follow the money, expose the systems, and hold power accountable.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VerityNews",
    description:
      "Investigative journalism powered by AI. We follow the money, expose the systems, and hold power accountable.",
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
        className={`${playfair.variable} ${sourceSerif.variable} ${jetbrains.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
