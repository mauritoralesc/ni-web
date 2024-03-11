import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});
const oduda = localFont({
  src: "./oduda.otf",
  variable: "--font-oduda",
});

export const metadata: Metadata = {
  title: "Ni",
  description: "Nutrición Infantil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oduda.variable} ${monserrat.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
