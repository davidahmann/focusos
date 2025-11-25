import type { Metadata } from "next";
import "./globals.css";


import { AppShell } from "@/components/ui";

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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
