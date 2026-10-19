import React from 'react';
import { Calculator, CalendarCheck, Flame, CheckCircle2, ArrowRight } from 'lucide-react';
import { ORDER_STEPS } from '../data/mockData';

export default function ProcessSection() {
  const iconMap = {
    Calculator,
    CalendarCheck,
    Flame,
    CheckCircle2
  };

  return (
    <section className="py-16 sm:py-20 bg-stone-100/60 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
            Alur Pemesanan
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            4 Langkah Mudah Ber-Aqiqah
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Tanpa repot, tanpa ribet. Anda tinggal tentukan tanggal acara, tim kami yang mengurus seluruh proses dari kandang hingga ke meja makan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORDER_STEPS.map((step, idx) => {
            const Icon = iconMap[step.icon] || CheckCircle2;

            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-sm relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center font-black">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-stone-200">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-stone-900 text-base">{step.title}</h3>
                    <p className="text-stone-600 text-xs mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <span>Tahap {idx + 1} dari 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
