"use client";
import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function TenantsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [currentImageIndices, setCurrentImageIndices] = React.useState<{ [key: string]: number }>({});

  React.useEffect(() => {
    const timers = t.tenants_list.map((tenant) => {
      const allImages = [tenant.image, ...(tenant.additionalImages || [])];
      if (allImages.length > 1) {
        return setInterval(() => {
          setCurrentImageIndices((prev) => ({
            ...prev,
            [tenant.id]: ((prev[tenant.id] || 0) + 1) % allImages.length,
          }));
        }, 3000);
      }
      return null;
    });

    return () => timers.forEach((timer) => timer && clearInterval(timer));
  }, [t.tenants_list]);

  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-800 pt-20 select-none transition-all duration-500"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-bold text-white sm:text-4xl tracking-wide">{t.nav.tenants}</h1>
          <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {t.tenants_list.map((tenant) => {
            const isHighlight = tenant.id === "1"; // NEXT Akasaka-Base
            return (
              <div
                key={tenant.id}
                className={`group flex flex-col rounded-xl transition-all duration-300 overflow-hidden border ${isHighlight
                  ? "border-4 border-yellow-500 bg-amber-50/50 shadow-2xl scale-[1.05] ring-4 ring-yellow-400/20"
                  : "bg-white shadow-lg hover:shadow-2xl border-slate-100"
                  }`}
              >
                <div className="relative w-full h-72 bg-slate-900 overflow-hidden">
                  {[tenant.image, ...(tenant.additionalImages || [])].map((img, idx) => (
                    <img
                      key={img}
                      src={img}
                      alt={tenant.name}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isHighlight ? "object-contain bg-[#d7384a]" : "object-cover"} ${currentImageIndices[tenant.id] === idx || (!currentImageIndices[tenant.id] && idx === 0)
                        ? "opacity-100"
                        : "opacity-0"
                        } pointer-events-none`}
                    />
                  ))}

                  {/* Badge Overlay (Category & Pick Up) */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="bg-slate-900/80 backdrop-blur-sm text-amber-400 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold border border-amber-500/30">
                      {tenant.category}
                    </div>
                    {isHighlight && (
                      <div className="bg-yellow-500 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter animate-pulse shadow-lg self-start">
                        PICK UP
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-xl font-serif font-bold mb-2 transition-colors ${isHighlight ? "text-amber-600 scale-105 origin-left" : "text-slate-900 group-hover:text-amber-600"}`}>
                    {tenant.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 flex-1 whitespace-pre-wrap ${isHighlight ? "text-slate-700 font-medium" : "text-slate-600"}`}>
                    {tenant.description}
                  </p>

                  {isHighlight && (
                    <div className="mb-6">
                      <a
                        href="https://next-akasaka.com/kick-boxing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95 group/btn"
                      >
                        <span>公式サイトを見る</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                  <div className={`mt-auto rounded-lg p-4 border-l-4 ${isHighlight ? "bg-amber-100/50 border-amber-600" : "bg-amber-50 border-amber-500"
                    }`}>
                    <p className="text-xs text-amber-800 font-bold uppercase tracking-wide mb-1">Special Offer</p>
                    <p className="text-sm font-bold text-slate-800">{tenant.discount}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
