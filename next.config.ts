import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 允许加载外部图片（保持你原有的配置）
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    ],
  },
  // 2. 实验性配置：尝试强制使用边缘运行时
  experimental: {
    runtime: 'edge',
  },
};

export default nextConfig;
