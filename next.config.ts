// biome-ignore lint/correctness/noNodejsModules: config file
import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  cacheComponents: true,
  sassOptions: {
    additionalData: `
      @use "@styles/colors.scss" as colors;
      @use "@styles/mixins.scss" as mixins;
    `,
  },
  images: {
    remotePatterns: [
      new URL("https://storage.ko-fi.com/cdn/kofi5.png?v=3"),
      new URL("https://media2.dev.to/dynamic/image/**"),
      new URL("https://dev-to-uploads.s3.amazonaws.com/**"),
    ],
  },
  turbopack: {
    root: path.join(import.meta.dirname, ".."),
  },
};

export default nextConfig;
