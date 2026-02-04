import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BASALT SYSTEMS",
    template: "%s | BASALT SYSTEMS"
  },
  description: "Automated Enterprise Infrastructure - Deploy scalable intelligence with industrial-grade AI agents",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="document-layout">
          <NavBar />
          <main className="document-main">
            <div className="content-wrapper">
              {children}
              <Footer />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
