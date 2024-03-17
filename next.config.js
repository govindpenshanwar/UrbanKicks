/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'static.nike.com'
      },
      {
        hostname: "lh3.googleusercontent.com"
      }

    ],
  },
}

module.exports = nextConfig
