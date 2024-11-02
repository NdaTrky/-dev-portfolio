/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HYGRAPH_URL: process.env.XT_PUBLIC_HYGRAPH_URL,
  }
};

export default nextConfig;
