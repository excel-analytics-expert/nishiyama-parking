"use client";
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import Calculator from '@/components/Calculator';
import Link from 'next/link';

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <section className="relative bg-slate-900 pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight mb-6 leading-tight">
            <span className="block text-amber-400 text-base sm:text-xl font-sans font-bold tracking-widest uppercase mb-2">Premium Parking</span>
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light">{t.hero.subtitle}</p>
          <div className="mt-10 flex justify-center gap-4"><Link href="/tenants" className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 font-medium backdrop-blur-sm">{t.nav.tenants}</Link></div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 pb-20"><Calculator /></section>
      <section className="max-w-7xl mx-auto py-12 px-4 text-center"><p className="text-slate-500 text-sm">&copy; 2026 Nishiyama Kogyo Akasaka Building. All rights reserved.</p></section>
    </main>
  );
}
