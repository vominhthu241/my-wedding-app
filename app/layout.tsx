import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from 'next/image';
import "./globals.css";
import { Toaster } from 'sonner';
import { AudioPlayer } from "@/components/ui/audio-player";

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
  title: "Thông và Dung's Wedding",
  description: "Thông và Dung's Wedding Invitation App",
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
        <div aria-hidden="true">
          {[...Array(11)].map((_, index) => (
            <div key={index} className="snowflake">
              <Image 
                src="/images/snowflake.png"
                alt="snowflake"
                width={20}
                height={20}
                priority={true}
              />
            </div>
          ))}
        </div>
        <AudioPlayer />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
