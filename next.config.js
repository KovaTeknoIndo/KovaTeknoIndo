/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // basePath: isProd ? "" : "",
  // assetPrefix: isProd ? "/" : "",
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    domains: ["cdn.domainanda.com"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
