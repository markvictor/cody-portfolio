import { Inter, Inter_Tight } from "next/font/google";
import "../globals.css";
import {Navbar} from "@/app/(site)/components/navbar";
import Image from "next/image";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cody Gall | Brand Designer",
  description: "Cody Gall is a brand and motion designer located in San Francisco, CA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div id="outer-container">
              <Navbar />
              {children}
              <footer className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-[#2B2B2B] rounded max-w-[1400px] m-auto place-items-center py-12 px-24 mb-12">
                <div className="">
                  <span className="bg-main-color font-bold text-default-color py-1 px-4 rounded-full inline-block mb-6 ">Connect</span>
                  <h3 className="text-white mb-12">Let’s create great things together.</h3>
                  <a href="mailto:hello@codygall.com" className="bg-main-color duration-700 ease-in-out hover:opacity-80 text-default-color font-bold py-4 px-6 rounded">hello@codygall.com</a>
                </div>
                <div className="md:justify-self-end">
                    <video width={350} height={350} autoPlay loop muted playsInline>
                        <source src="videos/cat_bottom.mp4" type="video/mp4" />
                    </video>
                </div>
              </footer>
            </div>
      </body>
    </html>
  );
}
