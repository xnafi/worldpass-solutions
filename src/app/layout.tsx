import type { Metadata } from "next";
import {Source_Code_Pro} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Source_Code_Pro({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Source_Code_Pro({
  weight: "900",
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "worldpass solutions",
  description: "Your Gateway to the World – Simplified Visa Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
