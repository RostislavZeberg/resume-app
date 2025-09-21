/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rostislavzeberg.github.io'],
    unoptimized: true,
  },
  // Убираем output: 'export' для разработки
  // output: 'export',
  // trailingSlash: true,
  
  // Оптимизации для SEO (оставляем, но они не будут работать в dev режиме)
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