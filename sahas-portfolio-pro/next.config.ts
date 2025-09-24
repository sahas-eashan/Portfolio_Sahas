import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sahas-portfolio-pro' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sahas-portfolio-pro/' : '',
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
