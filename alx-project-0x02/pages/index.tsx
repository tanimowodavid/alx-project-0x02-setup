import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Index() {
  return (
    <div>
      <Header />
      <main
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col items-center justify-center p-24`}
      >
        <h1 className="text-5xl font-bold mb-8">Welcome to My Next.js App!</h1>
      </main>
    </div>
  );
}
