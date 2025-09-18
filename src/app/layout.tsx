import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YC - Your AI Agent for Ideas & Research",
  description: "An AI agent for sparking ideas and doing long term research. Discover, explore, and innovate with intelligent assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
