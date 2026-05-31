import type { Metadata } from "next";
import Image from "next/image";
import "@styles/main.scss";
import backgroundImage from "@assets/images/bg-aurora.jpg";
import AccessibilityProvider from "@components/AccessiblityProvider";
import ErrorBoundaryClient from "@components/ErrorBoundaryClient";
import Footer from "@layout/Footer";
import Navbar from "@layout/nav/Navbar";

export const metadata: Metadata = {
  title: "Tim James | Full-Stack Software Engineer 🚀",
  description:
    "Hi, I'm Tim William James, a full-stack developer from Canberra, Australia. My core technologies include TypeScript, React, and AWS.",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <html className="h-full antialiased" data-scroll-behavior="smooth" lang="en">
    <body className="flex min-h-full flex-col">
      <ErrorBoundaryClient>
        <Image
          alt=""
          aria-hidden
          className="aurora-background-image"
          height={1080}
          priority
          quality={75}
          sizes="100vw"
          src={backgroundImage}
          width={1920}
        />
        <AccessibilityProvider>
          <Navbar />
          <ErrorBoundaryClient>{children}</ErrorBoundaryClient>
          <Footer allowFixed />
        </AccessibilityProvider>
      </ErrorBoundaryClient>
    </body>
  </html>
);

export default RootLayout;
