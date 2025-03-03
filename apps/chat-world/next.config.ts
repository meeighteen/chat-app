import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        "@packages/ui-components": require("path").resolve(
          __dirname,
          "../../packages/ui-components"
        ),
      };
    }
    return config;
  },
};

export default nextConfig;
