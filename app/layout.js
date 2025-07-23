import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks -URL shortner",
  description: "The best URL shortner in the market",
    icons: {
    icon: '/favicon.ico', // telling Next.js to use your favicon.ico in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
