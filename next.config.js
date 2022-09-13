/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'secure.gravatar.com',
      'cdn.discordapp.com'
    ],
  },
}

module.exports = nextConfig
