import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import LenisWrapper from "@/utils/SmoothScrollLenisWrapper";

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
      <LenisWrapper>
        <body
          className={`${geistSans.className} ${geistMono.className} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </LenisWrapper>
    </html>
  );
}
