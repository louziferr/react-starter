import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-w-screen bg-black flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
