/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { DB_HOST: process.env.DB_HOST },
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
