'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { MapPin, Copy, Check } from 'lucide-react';

const jpAddress = '〒107-0052 東京都港区赤坂2-15-18 西山興業赤坂ビル';
const enAddress = 'Nishiyama Kogyo Akasaka Building, 2-15-18 Akasaka, Minato-ku, Tokyo 107-0052, Japan';

// Google Maps Embed API用のURL
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.7375!3d35.6744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzVcsDQwJzI3LjgiTiAxMznCsDQ0JzE1LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp';

export default function AccessSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<'jp' | 'en' | null>(null);

  const copyAddress = async (type: 'jp' | 'en') => {
    try {
      const text = type === 'jp' ? jpAddress : enAddress;
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // クリップボード非対応環境では無視
    }
  };

  return (
    <section className="bg-white shadow-xl border border-slate-100 p-6 sm:p-8 md:p-12 rounded-lg">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#b49856]" />
        <h2 className="text-xl md:text-2xl font-light text-slate-800 tracking-tight">{t.access.title}</h2>
      </div>

      {/* Google Maps埋め込み */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-xs font-medium text-slate-600 mb-3 uppercase tracking-wider">
          {t.access.mapTitle}
        </h3>
        <div className="overflow-hidden border border-slate-200 shadow-sm rounded-lg">
          <iframe
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 sm:h-80 md:h-96"
          />
        </div>
      </div>

      {/* 住所情報 */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xs font-medium text-slate-600 mb-3 uppercase tracking-wider">
            {t.common.address}
          </h3>
          <div className="bg-slate-50 border border-slate-200 p-5 md:p-6 rounded-lg">
            <p className="text-slate-800 font-light text-base md:text-lg mb-2 leading-relaxed">{jpAddress}</p>
            <p className="text-sm text-slate-600 font-light leading-relaxed">{enAddress}</p>
            <p className="text-xs text-slate-500 mt-4 font-light">{t.common.cashOnly}</p>
          </div>
        </div>

        {/* 住所コピーボタン */}
        <div>
          <h3 className="text-xs font-medium text-slate-600 mb-3 uppercase tracking-wider">
            {t.access.copyAddress}
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <button
              type="button"
              onClick={() => copyAddress('jp')}
              className="flex items-center justify-center gap-2 h-12 px-4 py-2 border border-slate-300 bg-white text-slate-700 hover:border-[#b49856] hover:text-[#b49856] transition-colors font-light text-sm rounded-md"
            >
              {copied === 'jp' ? (
                <Check className="h-4 w-4 text-[#b49856]" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {t.access.copyJapanese}
            </button>
            <button
              type="button"
              onClick={() => copyAddress('en')}
              className="flex items-center justify-center gap-2 h-12 px-4 py-2 border border-slate-300 bg-white text-slate-700 hover:border-[#b49856] hover:text-[#b49856] transition-colors font-light text-sm rounded-md"
            >
              {copied === 'en' ? (
                <Check className="h-4 w-4 text-[#b49856]" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {t.access.copyEnglish}
            </button>
          </div>
          {copied && (
            <p className="mt-3 text-sm text-[#b49856] font-light">{t.common.copied}</p>
          )}
          <p className="mt-3 text-xs text-slate-500 font-light leading-relaxed">{t.access.copyNote}</p>
        </div>
      </div>
    </section>
  );
}
