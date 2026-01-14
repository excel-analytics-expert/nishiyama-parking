"use client";
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function TenantsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-bold text-white sm:text-4xl tracking-wide">{t.nav.tenants}</h1>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {t.tenants_list.map((tenant) => (
            <div key={tenant.id} className="group flex flex-col bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="relative w-full h-56 bg-slate-200 flex items-center justify-center text-slate-400">
                <span className="text-sm">Image: {tenant.name}</span>
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-amber-400 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold border border-amber-500/30">{tenant.category}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">{tenant.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">{tenant.description}</p>
                <div className="mt-auto bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-xs text-amber-800 font-bold uppercase tracking-wide mb-1">Special Offer</p>
                  <p className="text-sm font-bold text-slate-800">{tenant.discount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
