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
  },
  experimental: {
    allowedDevOrigins: ["*.replit.dev"],
  },
};

module.exports = nextConfig;
