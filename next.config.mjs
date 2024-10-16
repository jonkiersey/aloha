/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.aloha-kiersey.com",
      },
    ];
  },
};

export default nextConfig;
