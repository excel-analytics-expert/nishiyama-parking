"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react is available, or remove icons if not

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="text-white text-xl font-serif font-bold tracking-wider">西山興業赤坂ビル駐車場</span>
          </Link>

          {/* PC Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">{t.home}</Link>
            <Link href="/guide" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">{t.guide}</Link>
            <Link href="/manual" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">{t.manual}</Link>
            <Link href="/tenants" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">{t.tenants}</Link>
            <Link href="/access" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">{t.access}</Link>
            <div className="ml-4 border-l border-slate-700 pl-4">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 pb-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-amber-400 px-4 py-2 block">{t.home}</Link>
              <Link href="/guide" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-amber-400 px-4 py-2 block">{t.guide}</Link>
              <Link href="/manual" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-amber-400 px-4 py-2 block">{t.manual}</Link>
              <Link href="/tenants" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-amber-400 px-4 py-2 block">{t.tenants}</Link>
              <Link href="/access" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-amber-400 px-4 py-2 block">{t.access}</Link>
            </nav>
            <div className="mt-4 px-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
