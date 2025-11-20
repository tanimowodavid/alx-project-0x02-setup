import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div>
      <Header />
      <main
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col items-center justify-center p-24`}
      >
        <h1 className="text-5xl font-bold mb-8">Welcome to About page</h1>
        <p className="text-lg mb-8">
          This is a sample application using Next.js with Geist fonts.
        </p>
        <Button size="small" shape="rounded-sm" />
        <Button size="medium" shape="rounded-md" />
        <Button size="large" shape="rounded-full" />
      </main>
    </div>
  );
}
