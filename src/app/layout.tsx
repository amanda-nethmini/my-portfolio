import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amanda Nethmini",
  description: "Hello, I'm Amanda Nethmini.I'm 24 years old and I'm a fresh graduate from Sri Lanka Institute of Information Technology (SLIIT). I'm a Software Engineer and Web Developer based in Colombo, Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
