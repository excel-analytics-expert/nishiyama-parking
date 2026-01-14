'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'ja' as const, label: '日本語', flag: '🇯🇵' },
  { code: 'en' as const, label: 'English', flag: '🇺🇸' },
  { code: 'zh' as const, label: '中文', flag: '🇨🇳' },
  { code: 'ko' as const, label: '한국어', flag: '🇰🇷' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-slate-200 hover:text-white"
        aria-label="Language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">
          {languages.find((l) => l.code === language)?.flag}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-md border border-slate-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 flex items-center gap-2 hover:bg-slate-50 transition-colors rounded-md ${
                language === lang.code ? 'bg-slate-50 text-[#b49856]' : 'text-slate-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm font-light">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
