import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calisoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mohamed Saeed Portfolio",
  description: "Angular/React Frontend Developer and you can call me Iskndr by the way;)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calisoga.variable,
          "bg-gray-900 text-white antialiased font-sans "
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
