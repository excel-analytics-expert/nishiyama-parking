"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import { calculateFee } from '@/lib/parkingLogic';

export default function Calculator() {
  const { language } = useLanguage();
  const t = translations[language].calculator;
  const [activeTab, setActiveTab] = useState<'check' | 'budget'>('check');

  // State for inputs
  // Initialize with current date/time rounded to nice value? Or empty?
  // User request: "placeholder... input entry time".

  const [entryDate, setEntryDate] = useState('');
  const [entryTime, setEntryTime] = useState('');

  // For budget tab
  const [exitDate, setExitDate] = useState('');
  const [exitTime, setExitTime] = useState('');

  const [resultFee, setResultFee] = useState<number | null>(null);

  useEffect(() => {
    // Set default date to today for convenience
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    setEntryDate(`${yyyy}-${mm}-${dd}`);
    setExitDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleCalculate = () => {
    if (!entryDate || !entryTime) return;

    const start = new Date(`${entryDate}T${entryTime}`);
    let end = new Date();

    if (activeTab === 'budget') {
      if (!exitDate || !exitTime) return;
      end = new Date(`${exitDate}T${exitTime}`);
    }

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return;
    }

    if (start > end) {
      alert(language === 'ja' ? '入庫日時は出庫日時より前である必要があります。' : 'Entry time must be before exit time.');
      return;
    }

    const fee = calculateFee(start, end);
    setResultFee(fee);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden mt-[-3rem] relative z-10 transition-all duration-300">
      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => { setActiveTab('check'); setResultFee(null); }}
          className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors duration-200 ${activeTab === 'check' ? 'bg-slate-900 text-amber-400' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
        >
          {t.tab_check}
        </button>
        <button
          onClick={() => { setActiveTab('budget'); setResultFee(null); }}
          className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors duration-200 ${activeTab === 'budget' ? 'bg-slate-900 text-amber-400' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
        >
          {t.tab_budget}
        </button>
      </div>

      <div className="p-6 md:p-8">
        <h2 className="text-center font-serif text-xl text-slate-800 mb-6">
          {activeTab === 'check' ? t.tab_check : t.tab_budget}
        </h2>

        <div className="space-y-4">
          {/* Entry Date/Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Date</label>
              <input
                type="date"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
                className="w-full h-12 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 transition-all bg-slate-50 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Time</label>
              <input
                type="time"
                value={entryTime}
                onChange={(e) => setEntryTime(e.target.value)}
                className="w-full h-12 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 transition-all bg-slate-50 text-sm"
              />
            </div>
          </div>

          {/* Exit Date/Time (Budget only) */}
          {activeTab === 'budget' && (
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 mt-2">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Exit Date</label>
                <input
                  type="date"
                  value={exitDate}
                  onChange={(e) => setExitDate(e.target.value)}
                  className="w-full h-12 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 transition-all bg-slate-50 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Exit Time</label>
                <input
                  type="time"
                  value={exitTime}
                  onChange={(e) => setExitTime(e.target.value)}
                  className="w-full h-12 px-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 transition-all bg-slate-50 text-sm"
                />
              </div>
            </div>
          )}

          <button
            onClick={handleCalculate}
            className="w-full h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 mt-4 active:scale-95 transition-transform"
          >
            <span>{t.button_calc}</span>
          </button>

          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500 mb-1">{t.result}</p>
            <p className="text-4xl font-serif font-bold text-slate-900">
              {resultFee !== null ? resultFee.toLocaleString() : '---'}
              <span className="text-lg font-sans font-normal text-slate-500 ml-1">{t.currency}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
