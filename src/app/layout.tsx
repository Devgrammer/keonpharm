import type { Metadata } from "next";
import {Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


     const poppins = Poppins({
       subsets: ["latin"], // Or other desired subsets
       weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Or a range or specific weights
       variable: "--font-poppins", //  Optional, but recommended for better performance
     });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keon Pharm | Inventing Wellness, Inspiring World.",
  description:
    "World-Class Pharma Research & Development from the Heart of Varanasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
