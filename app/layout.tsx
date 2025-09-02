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
      <body className="min-w-screen min-h-screen bg-[#8DB0BB]">
        <header className="m-8 p-2 border-b-2 border-white">
          <div className="flex justify-between">
            <div className="bg-white h-10 w-12 rounded-2xl"></div>
            <nav className="hidden md:block">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/counting" className="nav-link">
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
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
