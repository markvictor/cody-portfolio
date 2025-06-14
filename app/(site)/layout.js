import { Inter, Inter_Tight } from "next/font/google";
import "../globals.css";
import {Navbar} from "@/app/(site)/components/navbar";
import Image from "next/image";

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
          <footer className="grid grid-cols-1 gap-4 md:grid-cols-2 bg-gray-800 rounded max-w-[1400px] m-auto place-items-center py-12 px-24 rounded mb-12">
            <div className="">
              <span className="bg-red-500 font-bold py-1 px-4 rounded-full inline-block mb-6">Connect</span>
              <h3 className="text-white mb-12">Let’s create great things together.</h3>
              <a href="mailto:hello@codygall.com" className="bg-red-500 hover:bg-red-700 font-bold py-4 px-6 rounded">hello@codygall.com</a>
            </div>
            <div className="md:justify-self-end"><Image
                width="330"
                height="260"
                // sizes="100vw"
                src="https://placehold.co/330x360.png"  alt="Hello! I'm Cody"/></div>
          </footer>
        </div>
      </body>
    </html>
  );
}
