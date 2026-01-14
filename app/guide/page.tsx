'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calculator,
  Globe,
  Building2,
  ArrowRight,
  Home,
  Clock,
  Zap,
  CheckCircle,
  ArrowDown,
  Sparkles,
} from 'lucide-react';

export default function GuidePage() {
  const [selectedLang, setSelectedLang] = useState<'ja' | 'en' | 'zh' | 'ko'>('ja');

  const languages = [
    { code: 'ja' as const, label: '日本語', flag: '🇯🇵' },
    { code: 'en' as const, label: 'English', flag: '🇺🇸' },
    { code: 'zh' as const, label: '中文', flag: '🇨🇳' },
    { code: 'ko' as const, label: '한국어', flag: '🇰🇷' },
  ];

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* 印刷時の背景色を白に固定 */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
        }
      `}</style>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 print:py-8">
        {/* ヘッダーセクション */}
        <section className="mb-16 md:mb-20 print:mb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-4 tracking-tight">
              西山興業赤坂ビル有料駐車場
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-[#b49856]">
                Webサイトリニューアル案
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b49856] to-[#d4af37] mx-auto mt-6"></div>
          </div>

          <div className="bg-slate-50 border-l-4 border-[#b49856] p-6 md:p-8 rounded-r-lg">
            <h2 className="text-xl md:text-2xl font-serif text-slate-800 mb-4 tracking-tight">
              リニューアルのコンセプト
            </h2>
            <div className="space-y-3 text-slate-700 font-light leading-relaxed">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[#b49856] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="font-medium text-slate-900">高級感のあるデザインへの刷新</strong>
                  <br />
                  ホテルのような洗練されたデザインで、お客様に安心感と信頼感を提供します。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-[#b49856] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="font-medium text-slate-900">インバウンド対応（4ヶ国語対応）</strong>
                  <br />
                  日本語・英語・中国語・韓国語に対応。管理人が外国語を話せなくても、画面を見せるだけで対応可能です。
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-[#b49856] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="font-medium text-slate-900">スマホでの使いやすさ</strong>
                  <br />
                  モバイルファースト設計により、スマートフォンからでも快適にご利用いただけます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 機能解説セクション */}
        <section className="mb-16 md:mb-20 print:mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-8 md:mb-12 text-center tracking-tight">
            主要機能のご紹介
          </h2>

          {/* 機能1: 1タップ料金計算機 */}
          <div className="mb-16 md:mb-20 print:mb-12">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c5a059] to-[#d4af37] flex items-center justify-center text-white shadow-md">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight">
                    【新機能】1タップ料金計算機
                  </h3>
                  <p className="text-sm text-slate-500 font-light">Quick Fee Calculator</p>
                </div>
              </div>

              {/* 図解エリア */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8 mb-6">
                <div className="max-w-md mx-auto">
                  {/* 入力欄のミニチュア */}
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wider">
                      入庫時間
                    </label>
                    <div className="relative">
                      <input
                        type="datetime-local"
                        value="2024-01-15T10:00"
                        disabled
                        className="w-full h-12 bg-white border-2 border-slate-300 px-4 py-3 text-base text-slate-800 rounded-md shadow-sm"
                      />
                      <button
                        disabled
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                        aria-label="現在時刻を設定"
                      >
                        <Clock className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* 矢印 */}
                  <div className="flex justify-center my-6">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowDown className="h-8 w-8 text-[#b49856]" />
                    </motion.div>
                  </div>

                  {/* 結果表示のミニチュア */}
                  <div className="bg-white border-2 border-[#b49856] rounded-lg p-6 text-center">
                    <p className="text-xs text-slate-600 mb-2 font-light uppercase tracking-wider">
                      概算料金
                    </p>
                    <p className="text-3xl md:text-4xl font-serif text-[#b49856] price-display">
                      ¥1,200
                    </p>
                  </div>
                </div>
              </div>

              {/* 説明文 */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 md:p-5 rounded-r-md mb-6">
                <p className="text-slate-700 font-light leading-relaxed">
                  <strong className="font-medium text-slate-900">お客様は時間を入れるだけ。</strong>
                  計算結果が即座に表示されます。駐車券に記載の入庫日時を入力するだけで、現在の料金を簡単に確認できます。
                </p>
              </div>

              {/* アクションボタン */}
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 h-12 bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-white font-light tracking-wide hover:shadow-lg transition-all rounded-md"
                >
                  <Calculator className="h-5 w-5" />
                  計算機を試す
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 機能2: 多言語切り替え */}
          <div className="mb-16 md:mb-20 print:mb-12">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c5a059] to-[#d4af37] flex items-center justify-center text-white shadow-md">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight">
                    【インバウンド対応】多言語切り替え
                  </h3>
                  <p className="text-sm text-slate-500 font-light">Multi-language Support</p>
                </div>
              </div>

              {/* 図解エリア */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8 mb-6">
                <div className="max-w-md mx-auto">
                  {/* ヘッダーのミニチュア */}
                  <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <p className="text-xs font-light text-slate-400">西山興業赤坂ビル有料駐車場</p>
                      </div>
                      <div className="relative">
                        <button
                          disabled
                          className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800 text-slate-200"
                        >
                          <Globe className="h-4 w-4" />
                          <span className="text-sm font-light">🇯🇵</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 矢印 */}
                  <div className="flex justify-center my-6">
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="h-8 w-8 text-[#b49856]" />
                    </motion.div>
                  </div>

                  {/* 言語選択のミニチュア */}
                  <div className="bg-white border-2 border-[#b49856] rounded-lg p-4 shadow-md">
                    <div className="space-y-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          disabled
                          className={`w-full text-left px-4 py-2 flex items-center gap-2 rounded-md transition-colors ${
                            selectedLang === lang.code
                              ? 'bg-slate-50 text-[#b49856] border border-[#b49856]'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span className="text-sm font-light">{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 説明文 */}
              <div className="bg-green-50 border-l-4 border-green-400 p-4 md:p-5 rounded-r-md mb-6">
                <p className="text-slate-700 font-light leading-relaxed">
                  <strong className="font-medium text-slate-900">ワンタップで日・英・中・韓に切り替わります。</strong>
                  <br />
                  管理人が外国語を話せなくても、画面を見せるだけで対応可能です。海外からのお客様にも安心してご利用いただけます。
                </p>
              </div>
            </div>
          </div>

          {/* 機能3: 提携テナント紹介 */}
          <div className="mb-16 md:mb-20 print:mb-12">
            <div className="bg-white border-2 border-slate-200 rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c5a059] to-[#d4af37] flex items-center justify-center text-white shadow-md">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight">
                    【回遊性】提携テナント紹介
                  </h3>
                  <p className="text-sm text-slate-500 font-light">Partner Tenants</p>
                </div>
              </div>

              {/* 図解エリア */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8 mb-6">
                <div className="max-w-md mx-auto">
                  {/* テナントカードのミニチュア */}
                  <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md">
                    <div className="relative h-32 bg-gradient-to-br from-slate-200 to-slate-300">
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-white px-3 py-1 text-xs font-light uppercase tracking-wider rounded-md flex items-center gap-1 shadow-sm">
                        <CheckCircle className="h-3 w-3" />
                        <span>Validation</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-base font-serif text-slate-800 mb-1 tracking-tight">
                        赤坂プライム・フィットネス&スパ
                      </h4>
                      <p className="text-xs text-slate-500 mb-2 font-light">Fitness</p>
                      <p className="text-sm font-serif text-[#b49856] mb-2 price-display">
                        駐車場利用でタオルレンタル無料
                      </p>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        最新マシン完備のジムと天然温泉。駐車場利用でタオルレンタル無料。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 説明文 */}
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 md:p-5 rounded-r-md mb-6">
                <p className="text-slate-700 font-light leading-relaxed">
                  <strong className="font-medium text-slate-900">写真付きで魅力を伝え、ビル内テナントへの送客を促します。</strong>
                  <br />
                  各テナントの特徴や割引情報を分かりやすく紹介。お客様の回遊性を高め、ビル全体の集客力向上につながります。
                </p>
              </div>

              {/* アクションボタン */}
              <div className="text-center">
                <Link
                  href="/tenants"
                  className="inline-flex items-center gap-2 px-6 py-3 h-12 bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-white font-light tracking-wide hover:shadow-lg transition-all rounded-md"
                >
                  <Building2 className="h-5 w-5" />
                  テナント一覧を見る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="border-t border-slate-200 pt-8 md:pt-12 mt-16 md:mt-20 print:mt-12">
          <div className="text-center space-y-6">
            <div>
              <p className="text-sm text-slate-600 font-light">
                制作：<span className="font-medium text-slate-900">Meraboco</span>
                <span className="text-slate-400 mx-2">（Web Consultant）</span>
              </p>
            </div>
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 h-12 bg-slate-900 text-white font-light tracking-wide hover:bg-slate-800 transition-colors rounded-md"
              >
                <Home className="h-5 w-5" />
                トップページへ戻る
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
