"use client";
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function ManualPage() {
    const { language } = useLanguage();
    const t = translations[language].manual;

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{t.title}</h1>

                <div className="space-y-6">
                    {/* Calculator Feature */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex gap-4">
                        <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">💰</div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{t.calc_title}</h3>
                            <p className="text-slate-600 leading-relaxed">{t.calc_desc}</p>
                        </div>
                    </div>

                    {/* Tenant Feature */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🏢</div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{t.tenant_title}</h3>
                            <p className="text-slate-600 leading-relaxed">{t.tenant_desc}</p>
                        </div>
                    </div>

                    {/* Access Feature */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex gap-4">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🗺️</div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{t.access_title}</h3>
                            <p className="text-slate-600 leading-relaxed">{t.access_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
