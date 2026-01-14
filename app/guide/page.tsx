"use client";
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function GuidePage() {
  const { language } = useLanguage();
  const t = translations[language].guide;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2 text-center">{t.title}</h1>
        <p className="text-center text-slate-500 mb-12">Parking Procedure (Attendant Service)</p>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-6 items-start border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-300 font-bold text-9xl leading-none -mr-4 -mt-4 select-none opacity-50 font-serif">1</div>
            <div className="flex-shrink-0 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-amber-400 font-bold text-2xl shadow-lg z-10">
              1
            </div>
            <div className="flex-1 z-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.step1_title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.step1_desc}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-6 items-start border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-300 font-bold text-9xl leading-none -mr-4 -mt-4 select-none opacity-50 font-serif">2</div>
            <div className="flex-shrink-0 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-amber-400 font-bold text-2xl shadow-lg z-10">
              2
            </div>
            <div className="flex-1 z-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.step2_title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.step2_desc}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-6 items-start border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-300 font-bold text-9xl leading-none -mr-4 -mt-4 select-none opacity-50 font-serif">3</div>
            <div className="flex-shrink-0 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-amber-400 font-bold text-2xl shadow-lg z-10">
              3
            </div>
            <div className="flex-1 z-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.step3_title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.step3_desc}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-slate-100 rounded-lg border border-slate-200 text-center">
          <p className="text-slate-600">
            <strong>Safety Note:</strong> Please follow the attendant's instructions when using the turntable.
          </p>
        </div>
      </div>
    </div>
  );
}
