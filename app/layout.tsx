import type { Metadata } from "next";
import {Inter, Open_Sans, Poppins, Roboto} from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/components/shared/LeftSideBar";
import Footer from "@/components/Footer";
import AvailableForWork from "@/components/AvailableForWork";
import React from "react";

const inter = Inter(
	{
		subsets: ["latin"]
	}
);

const roboto = Roboto(
	{
		subsets: ["latin"],
		weight: ["100","300","400","500","700","900"]
	}
);

const poppins = Poppins(
	{
		subsets: ["latin"],
		weight: ["500"]
	}
);

const openSans = Open_Sans(
	{
		subsets: ["latin"]
	}
)

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A web developer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
      <main className="flex flex-col sm:flex-row justify-between items-start divide-x w-full">
	      <LeftSideBar/>
	      <div className="flex-1 mx-auto px-10 py-10">  {/* max-w-[75%] flex-1  bg-amber-300   */}
		      <AvailableForWork/>
		      {children}
		      <Footer/>
	      </div>
      </main>
	  </body>
    </html>
  );
}
