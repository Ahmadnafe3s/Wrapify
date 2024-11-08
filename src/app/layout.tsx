import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "wrapify",
  description: "an app for customize covers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider afterSignOutUrl={'/sign-in'}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster />
          <Navbar />

          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">   {/*two items are child of this parent div*/}

            <div className="flex flex-1 flex-col h-full">
              {children}
            </div>

            <Footer />

          </main>

        </body>
      </ClerkProvider>
    </html>
  );
}
