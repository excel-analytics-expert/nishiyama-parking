import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

// SEO用メタデータ
export const metadata: Metadata = {
  title: '西山興業赤坂ビル有料駐車場 | Nishiyama Kogyo Akasaka Building Paid Parking',
  description: '東京都港区赤坂2-15-18にある西山興業赤坂ビル有料駐車場の料金表・料金シミュレーター・所在地情報。平日・土日祝の料金体系、夜間最大料金、利用方法をご案内。Nishiyama Kogyo Akasaka Building paid parking lot in Minato-ku, Tokyo. Parking rates, fee calculator, and location information.',
  keywords: [
    '西山興業',
    '赤坂',
    '駐車場',
    '有料駐車場',
    '港区',
    '東京都',
    'Nishiyama Kogyo',
    'Akasaka',
    'parking',
    'paid parking',
    'Minato-ku',
    'Tokyo',
  ],
  authors: [{ name: 'Nishiyama Kogyo' }],
  creator: 'Nishiyama Kogyo',
  publisher: 'Nishiyama Kogyo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a1c2e' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1c2e' },
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://parking.nishiyama-kogyo.example.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ja': '/',
      'en': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: '西山興業赤坂ビル有料駐車場',
    title: '西山興業赤坂ビル有料駐車場 | Nishiyama Kogyo Akasaka Building Paid Parking',
    description: '東京都港区赤坂2-15-18にある西山興業赤坂ビル有料駐車場の料金表・料金シミュレーター・所在地情報。平日・土日祝の料金体系、夜間最大料金、利用方法をご案内。',
    images: [
      {
        url: '/og-image.jpg', // OGP画像のパス（後で追加可能）
        width: 1200,
        height: 630,
        alt: '西山興業赤坂ビル有料駐車場',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '西山興業赤坂ビル有料駐車場 | Nishiyama Kogyo Akasaka Building Paid Parking',
    description: '東京都港区赤坂2-15-18にある西山興業赤坂ビル有料駐車場の料金表・料金シミュレーター・所在地情報。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console等の検証コードを追加する場合はここに記述
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 構造化データ（JSON-LD）
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ParkingFacility',
    name: '西山興業赤坂ビル有料駐車場',
    alternateName: 'Nishiyama Kogyo Akasaka Building Paid Parking',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '赤坂2-15-18',
      addressLocality: '港区',
      addressRegion: '東京都',
      postalCode: '107-0052',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.6744, // 赤坂エリアの概算座標（実際の座標に置き換えてください）
      longitude: 139.7375,
    },
    paymentAccepted: 'Cash',
    currencyAccepted: 'JPY',
    openingHours: 'Mo-Su 00:00-23:59',
  }

  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        {/* 構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={notoSansJP.className}>
        {children}
      </body>
    </html>
  )
}
