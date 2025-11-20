import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header />
      <main
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col items-center justify-center p-24`}
      >
        <h1 className="text-5xl font-bold mb-8">Welcome to home page ❤️</h1>
        <div className="flex">
          <Card
            title="Card Title 1"
            content="This is the content of the first card."
          />
          <div className="mx-4" />
          <Card
            title="Card Title 2"
            content="This is the content of the second card."
          />
        </div>
        <PostModal />
      </main>
    </div>
  );
}
