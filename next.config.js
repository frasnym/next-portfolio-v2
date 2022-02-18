/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['i.ibb.co'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
