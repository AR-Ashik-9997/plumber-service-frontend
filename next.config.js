/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { DB_HOST: process.env.DB_HOST },
  images: {
    domains: ["i.ibb.co","res.cloudinary.com"],
  },
};

module.exports = nextConfig;
