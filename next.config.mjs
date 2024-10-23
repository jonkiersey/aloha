/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://ilv6l603a3.execute-api.us-west-2.amazonaws.com/main/:path*",
      },
    ];
  },
};

export default nextConfig;
