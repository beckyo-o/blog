
{/* <div className="relative h-32 w-32">
                <div className="absolute inset-y-0 right-0 w-16">
                06
                </div>
                    </div> */}

import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
