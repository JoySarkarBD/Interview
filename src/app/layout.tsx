import AdmissionBanner from "@/components/AdmissionBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Outfit, Raleway } from "next/font/google";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap", // Control font loading behavior
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap", // Control font loading behavior
});

export const metadata: Metadata = {
  title: "Little Learners Academy",
  description: "A nurturing environment for young minds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${raleway.variable} antialiased`}>
        <AdmissionBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
