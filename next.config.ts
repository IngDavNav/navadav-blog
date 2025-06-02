import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/mi-blog",
  assetPrefix: "/mi-blog/",
};

export default nextConfig;
