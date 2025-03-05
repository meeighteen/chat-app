import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  env: {
    NEXT_API_SOCKET_SERVER: process.env.NEXT_API_SOCKET_SERVER,
  },
};

export default nextConfig;
