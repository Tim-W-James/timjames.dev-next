import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@styles/colors.scss" as colors;
      @use "@styles/mixins.scss" as mixins;
    `,
  },
};

export default nextConfig;
