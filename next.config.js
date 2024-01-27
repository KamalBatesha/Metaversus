/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreDevErrors: true,
  },
};

module.exports = nextConfig;
