/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'development',
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = withContentlayer(nextConfig);