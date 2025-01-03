/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true, // Enable the experimental app directory feature
  },
};

module.exports = nextConfig;
