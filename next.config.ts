import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ❗ disables blocking build on lint errors
  },
};

export default nextConfig;
