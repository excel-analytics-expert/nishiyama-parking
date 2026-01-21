import './globals.css';
import type { Metadata } from 'next';
import { Noto_Serif_JP, Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/LanguageContext';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const serif = Noto_Serif_JP({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: '西山興業赤坂ビル有料駐車場 (Preview)',
  description: '赤坂の中心で、安心と格式ある駐車体験を。',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${serif.variable} font-sans bg-slate-50 text-slate-800`}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
