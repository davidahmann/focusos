import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Focus OS",
  description: "Your AI Chief of Staff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
