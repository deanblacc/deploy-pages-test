import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/deploy-pages-test",
  assetPrefix: "/deploy-pages-test/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
