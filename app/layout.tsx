/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "React Basics",
  description: "Basics of React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Modak&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-w-screen min-h-screen bg-[#8DB0BB]">
        <header className="m-8 p-2 border-b-2 border-white">
          <div className="flex justify-between">
            <div className="bg-white h-10 w-12 rounded-2xl"></div>
            <nav className="hidden md:block">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/shop" className="nav-link">
                Shop
              </Link>
              <Link href="/" className="nav-link">
                Manage
              </Link>
              <Link href="/" className="nav-link">
                Play
              </Link>
            </nav>
            <img
              className="w-8 h-8 md:hidden"
              src="hamburger.svg"
              alt="Hamburger Menu"
            />
          </div>
        </header>
        <div className="flex justify-center">
          <div className="max-w-[1500px]">{children}</div>
        </div>
        <footer></footer>
      </body>
    </html>
  );
}
