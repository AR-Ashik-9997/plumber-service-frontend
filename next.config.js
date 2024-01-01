/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API },
  images: {
    domains: ["i.ibb.co","res.cloudinary.com"],
  },
};

module.exports = nextConfig;
