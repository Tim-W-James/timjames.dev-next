import type { Metadata, Viewport } from "next";
import Image from "next/image";
import "@styles/main.scss";
import backgroundImage from "@assets/images/bg-aurora.jpg";
import AccessibilityProvider from "@components/AccessiblityProvider";
import ErrorBoundaryClient from "@components/ErrorBoundaryClient";
import Footer from "@layout/Footer";
import Navbar from "@layout/nav/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

// biome-ignore lint/style/noProcessEnv: allowed for metadata
// biome-ignore lint/correctness/noProcessGlobal: allowed for metadata
const siteUrl = process.env.SITE_URL || "https://timjames.dev";

export const metadata: Metadata = {
  title: {
    template: "%s | Tim James",
    default: "Tim James | Full-Stack Software Engineer 🚀",
  },
  description:
    "Hi, I'm Tim William James, a full-stack developer from Canberra, Australia. My core technologies include TypeScript, React, and AWS.",
  authors: {
    name: "Tim William James",
    url: siteUrl,
  },
  creator: "Tim William James",
  publisher: "Tim William James",
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/images/logo.png",
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Tim James | Full-Stack Software Engineer 🚀",
    description:
      "Hi, I'm Tim William James, a full-stack developer from Canberra, Australia. My core technologies include TypeScript, React, and AWS.",
    url: siteUrl,
    siteName: "Tim James",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 800,
        height: 600,
        alt: "Tim James Logo",
      },
    ],
    type: "website",
    countryName: "Australia",
    locale: "en-AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim James | Full-Stack Software Engineer 🚀",
    description:
      "Hi, I'm Tim William James, a full-stack developer from Canberra, Australia. My core technologies include TypeScript, React, and AWS.",
    creator: "@TimWJames",
    images: "/assets/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#185454",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <html className="h-full antialiased" data-scroll-behavior="smooth" lang="en">
    <body className="flex min-h-full flex-col">
      <ErrorBoundaryClient>
        <SpeedInsights />
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
