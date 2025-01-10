import type { Metadata } from "next";
import "./globals.css";
import UserContextProvider from "@/components/UserContextProvider";
import Navbar from "@/components/Navbar";
import AnimationWrapper from "@/components/AnimationWrapper";
import { Mona_Sans } from "next/font/google";
import { Ubuntu } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import { Readex_Pro } from "next/font/google";
import { Poppins } from "next/font/google";
import { Mulish } from "next/font/google";
import { Public_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include only required weights
  variable: "--font-mulish", // Optional CSS variable for custom usage
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const readexPro = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex-pro",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});
export const metadata: Metadata = {
  title: "Lumina",
  description: "Masterminds to Your Positive Goal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-white ${monaSans.className} ${publicSans.variable} ${mulish.variable} ${ubuntu.variable} ${montserrat.variable} ${inter.variable} ${readexPro.variable} ${poppins.variable}`}
      >
        <UserContextProvider>
          <Navbar />
          <AnimationWrapper>
            {children}
            <Footer />
          </AnimationWrapper>
        </UserContextProvider>
      </body>
    </html>
  );
}
