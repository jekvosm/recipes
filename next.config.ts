import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eda.rambler.ru',
      },
      {
        protocol: 'https',
        hostname: 'gotovim-doma.ru',
      },
    ],
  },
}

export default nextConfig
