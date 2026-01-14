/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 画像最適化設定（必要に応じて）
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // 国際化設定（日本語のみ）
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig
