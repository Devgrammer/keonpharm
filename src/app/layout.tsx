import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
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
  title: "Keon Pharm | Inventing Wellness, Inspiring World",
  description:
    "World-Class Pharma Research & Development from the Heart of Varanasi",
  metadataBase: new URL("https://www.keonpharm.com"),

  openGraph: {
    title: "Keon Pharm | Inventing Wellness, Inspiring World",
    description:
      "World-Class Pharma Research & Development from the Heart of Varanasi",
    url: "https://www.keonpharm.com",
    siteName: "Keon Pharm",
    images: [
      {
        url: "/images/img/KeonPharm_meta.png",
        width: 1200,
        height: 630,
        alt: "Keon Pharm",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Keon Pharm | Inventing Wellness, Inspiring World",
    description:
      "World-Class Pharma Research & Development from the Heart of Varanasi",
    images: ["/images/img/KeonPharm_meta.png"],
    site: "@keonpharm",
    creator: "@keonpharm",
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ko-KR": "/ko-KR",
    },
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#195A53" },
    { media: "(prefers-color-scheme: dark)", color: "#195A53" },
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
