'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { CalendarDays, SunMedium, MoonStar } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function RateTable() {
  const { t } = useLanguage();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.12 }}
      className="bg-white shadow-xl border border-slate-100 p-6 sm:p-8 md:p-12 rounded-lg"
    >
      <motion.div variants={cardVariants} className="mb-6 md:mb-8 flex items-center gap-3">
        <CalendarDays className="h-5 w-5 md:h-6 md:w-6 text-[#b49856]" />
        <div>
          <h2 className="text-xl md:text-2xl font-light tracking-tight text-slate-800">
            {t.rates.title}
          </h2>
          <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
            {t.common.note}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          variants={cardVariants}
          className="border border-slate-200 bg-slate-50 p-5 md:p-6 hover:shadow-sm transition-shadow rounded-lg"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-800 uppercase tracking-wider">
              {t.rates.weekdays}
            </h3>
            <span className="inline-flex items-center gap-1 bg-white px-2 py-1 text-[10px] font-light uppercase tracking-wider text-slate-600 border border-slate-200 rounded-md">
              <SunMedium className="h-3 w-3 text-[#b49856]" />
              Weekday
            </span>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
              <span className="font-light">06:00 - 21:00</span>
              <span className="font-light text-[#b49856] price-display">
                15分 ¥300
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
              <span className="font-light">21:00 - 06:00</span>
              <span className="font-light text-[#b49856] price-display">
                15分 ¥300
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <span className="font-light text-red-600">{t.rates.nightMaxRate}</span>
              <span className="font-light text-red-600 price-display">¥1,800</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="border border-[#b49856] bg-white p-5 md:p-6 hover:shadow-sm transition-shadow rounded-lg"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-800 uppercase tracking-wider">
              {t.rates.weekends}
            </h3>
            <span className="inline-flex items-center gap-1 bg-[#b49856] px-2 py-1 text-[10px] font-light uppercase tracking-wider text-white rounded-md">
              <MoonStar className="h-3 w-3" />
              Holiday
            </span>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
              <span className="font-light">06:00 - 21:00</span>
              <span className="font-light text-[#b49856] price-display">
                15分 ¥200
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
              <span className="font-light">21:00 - 06:00</span>
              <span className="font-light text-[#b49856] price-display">
                15分 ¥200
              </span>
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <span className="font-light text-red-600">{t.rates.nightMaxRate}</span>
              <span className="font-light text-red-600 price-display">¥1,800</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={cardVariants}
        className="mt-6 border-l-4 border-[#b49856] bg-slate-50 px-4 py-3 text-xs text-slate-700 font-light rounded-r-md"
      >
        {t.rates.nightMaxRateNote}
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="mt-6 border-t border-slate-200 pt-6 text-xs text-slate-500 font-light leading-relaxed"
      >
        {t.common.addressFull} / {t.common.cashOnly}
        <br />
        {t.common.note}
      </motion.div>
    </motion.section>
  );
}
