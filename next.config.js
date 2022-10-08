/** @type {import('next').NextConfig} */
// const withYaml = require("next-plugin-yaml");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
