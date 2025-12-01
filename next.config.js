/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index-digital-agency',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
