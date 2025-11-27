import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VendorX - Buy & Sell Smarter With Our Mobile App",
  description: "A clean, organized marketplace app for WhatsApp vendors and buyers. Join thousands of successful vendors who have transformed their business.",
  keywords: ["vendor app", "marketplace", "mobile commerce", "WhatsApp business", "e-commerce"],
  authors: [{ name: "VendorX Team" }],
  openGraph: {
    title: "VendorX - Buy & Sell Smarter With Our Mobile App",
    description: "A clean, organized marketplace app for WhatsApp vendors and buyers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
