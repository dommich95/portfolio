import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dominik Michel Portfolio",
  description: "Dominik Michels Porfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ backgroundImage: "/Images/background.png" }}
        className={inter.className}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
