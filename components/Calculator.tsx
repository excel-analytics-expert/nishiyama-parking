"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function Calculator() {
  const { language } = useLanguage();
  const t = translations[language].calculator;
  const [activeTab, setActiveTab] = useState<'check' | 'budget'>('check');

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden mt-[-3rem] relative z-10">
      <div className="flex border-b border-slate-200">
        <button onClick={() => setActiveTab('check')} className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors duration-200 ${activeTab === 'check' ? 'bg-slate-900 text-amber-400' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>{t.tab_check}</button>
        <button onClick={() => setActiveTab('budget')} className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors duration-200 ${activeTab === 'budget' ? 'bg-slate-900 text-amber-400' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>{t.tab_budget}</button>
      </div>
      <div className="p-6 md:p-8">
        <h2 className="text-center font-serif text-xl text-slate-800 mb-6">{activeTab === 'check' ? t.tab_check : t.tab_budget}</h2>
        <div className="space-y-4">
          <div><label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Time</label><input type="time" className="w-full h-12 px-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 transition-all bg-slate-50 text-lg" /></div>
          <button className="w-full h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2"><span>{t.button_calc}</span></button>
          <div className="mt-8 pt-6 border-t border-slate-200 text-center"><p className="text-sm text-slate-500 mb-1">{t.result}</p><p className="text-4xl font-serif font-bold text-slate-900">0 <span className="text-lg font-sans font-normal text-slate-500">{t.currency}</span></p></div>
        </div>
      </div>
    </div>
  );
}
