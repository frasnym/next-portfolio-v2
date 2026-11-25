/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'i.ibb.co' }],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
