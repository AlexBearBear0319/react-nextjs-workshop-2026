import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const productionHost =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (productionHost ? "https://" + productionHost : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "React Workshop Series | React & Next.js",
  description:
    "Step-by-step interactive guide for the 2-day React & Next.js workshop.",
  openGraph: {
    title: "React Workshop Series",
    description:
      "Step-by-step interactive guide for the 2-day React & Next.js workshop.",
    images: [
      {
        url: "/brand/react-workshop-series.png",
        width: 317,
        height: 215,
        alt: "React Workshop Series logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "React Workshop Series",
    description:
      "Step-by-step interactive guide for the 2-day React & Next.js workshop.",
    images: ["/brand/react-workshop-series.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
