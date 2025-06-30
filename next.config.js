/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Cho phép tất cả hostname
        pathname: "/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development', // Bypass optimization in dev
  },
  experimental: {
    allowedDevOrigins: ["*.replit.dev"],
  },
};

module.exports = nextConfig;
