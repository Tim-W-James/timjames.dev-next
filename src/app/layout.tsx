import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tim James | Full-Stack Software Engineer 🚀",
  description:
    "Hi, I'm Tim William James, a full-stack developer from Canberra, Australia. My core technologies include TypeScript, React, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full antialiased" lang="en">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
