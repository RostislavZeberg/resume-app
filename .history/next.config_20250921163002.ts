/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rostislavzeberg.github.io'],
    unoptimized: true, // Для экспорта статического сайта
  },
  // Убрали headers, так как они не совместимы с output: 'export'
  output: 'export',
  trailingSlash: true,
  // Добавим компрессию для статических файлов
  compress: true,
  // Оптимизации для production
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig