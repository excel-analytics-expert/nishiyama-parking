'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Building2, MapPin, BookOpen, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'ホーム', icon: Home, key: 'home' },
    { href: '/guide', label: '利用方法', icon: BookOpen, key: 'guide' },
    { href: '/tenants', label: '提携テナント', icon: Building2, key: 'tenants' },
    { href: '/#access', label: 'アクセス', icon: MapPin, key: 'access' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ロゴ */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            onClick={closeMenu}
          >
            <div>
              <h1 className="text-base md:text-lg font-semibold tracking-tight text-white">
                {t.header.title}
              </h1>
              <p className="text-xs text-slate-400 hidden sm:block">
                {t.header.subtitle}
              </p>
            </div>
          </Link>

          {/* PC用ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href === '/#access' && pathname === '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 lg:px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'bg-[#b49856] text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="ml-2 pl-2 border-l border-slate-700">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* モバイル用ハンバーガーメニューボタン */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* モバイル用ドロワーメニュー */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />
            {/* ドロワー */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-900 shadow-xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || (item.href === '/#access' && pathname === '/');
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center space-x-3 px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                        isActive
                          ? 'bg-[#b49856] text-white'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-slate-700">
                  <div className="px-4">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
