/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rostislavzeberg.github.io'],
    unoptimized: true, // Для экспорта статического сайта
  },
  // Для генерации статического сайта
  output: 'export',
  trailingSlash: true,
  
  // Оптимизации для SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig