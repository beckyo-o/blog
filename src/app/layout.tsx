import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TBBETBM",
  description: "React Project from Becky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <a href='/'>
          <HomeIcon className='size-8 text-white-500 fixed top-6 left-10 z-10' />
        </a>
        {children}
        <Analytics />
        <SpeedInsights />

        <div className='flex h-24 w-full items-end justify-center mb-7'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Made with{" "}
            <Image
              src='/next.svg'
              alt='Next Logo'
              className='dark:invert light:default'
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </body>
    </html>
  );
}
