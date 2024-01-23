/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tjh51hv2xjk4dyvr.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
