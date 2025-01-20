import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider"; 
import { Toaster } from "sonner";


import { Poppins, Roboto } from '@next/font/google';


// Import fonts
const poppins = Poppins({
  weight: ['400', '700'], // Specify weights needed
  subsets: ['latin'], // Subsets you want to load
  variable: '--font-poppins', // Set as a CSS variable
});

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StockSage",
  description: "Get daily curated stock recommendations delivered to your email. StockSage analyzes key metrics like PE ratio, ROE, ROCE, dividend yield, and more to help you make smarter investment decisions effortlessly.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="bg-gray-400 " >
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
<StoreProvider>
        {children}
  </StoreProvider>
  <Toaster/>


      </body>
    </html>
  );
}
