import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/ui/Hero";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Tabs from "@/components/ui/Tabs";
import Tabs2 from "@/components/ui/Tabs2";
import Footer from "@/components/ui/Footer";
import { Separator } from "@/components/ui/separator";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RemitSafe",
  description: "Your Place to transfer money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main
          data-scroll
          data-scroll-speed="0.4"
          className="relative flex flex-col min-h-screen"
        >
          <NavBar></NavBar>
          <div className="flex-grow flex-1">{children}</div>
          <div className="mt-4 flex flex-col gap-y-4 ">
            <Hero></Hero>
            <Separator />
            <Tabs></Tabs>
            <Tabs2></Tabs2>
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
