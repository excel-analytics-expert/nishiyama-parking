"use client";
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function AccessPage() {
    const { language } = useLanguage();
    const t = translations[language].access;

    const handleCopy = () => {
        navigator.clipboard.writeText(t.address);
        alert(t.copy_done);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">{t.title}</h1>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <p className="text-lg font-bold text-slate-800 mb-2">{t.address}</p>
                        <button onClick={handleCopy} className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors">
                            {t.copy_btn}
                        </button>
                    </div>
                    <div className="w-full h-96 bg-slate-200">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.205763952726!2d139.7354!3d35.6725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b86d9a0a0a1%3A0x0!2z5p2x5Lqs6YO95riv5Yy66LWk5Z2C77yS5LiB55uu77yR77yS4oiS77yR77yQ!5e0!3m2!1sja!2sjp!4v1600000000000"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
