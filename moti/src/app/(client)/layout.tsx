import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Kumbh_Sans } from "next/font/google"
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Moti",
  description: "Your trusted source for a wide variety of cars.",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

const primary = Kumbh_Sans({
  variable: "--font-primary",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${primary.variable}`}>
      <body>{children}</body>
    </html>
  );
}
