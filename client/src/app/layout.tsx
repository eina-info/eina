import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const questrialSans = localFont({
  src: "./fonts/Questrial-Regular.ttf",
  variable: "--font-questrial-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "eina",
  description: "Compartiendo recursos de desconstrucción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrialSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
