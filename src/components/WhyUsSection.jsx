import React from 'react';
import {
  ShieldCheck,
  Eye,
  Video,
  Utensils,
  Truck,
  Award,
  HeartHandshake,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ADVANTAGES } from '../data/mockData';
import { useBusiness } from '../context/BusinessContext';

export default function WhyUsSection() {
  const { businessInfo } = useBusiness();

  const iconMap = {
    ShieldCheck,
    Eye,
    Video,
    Utensils,
    Truck,
    Award,
    HeartHandshake
  };

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Standar Kualitas & Syariat
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Mengapa Memilih {businessInfo.name}?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Kami menjaga amanah ibadah aqiqah buah hati Anda dengan ketelitian syariat, kebersihan dapur, dan kelezatan cita rasa masakan yang membanggakan saat dibagikan.
          </p>
        </div>

        {/* 7 Core Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ADVANTAGES.map((adv) => {
            const IconComponent = iconMap[adv.icon] || ShieldCheck;

            return (
              <div
                key={adv.id}
                className="bg-stone-50/70 hover:bg-white p-7 rounded-3xl border border-stone-200/80 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full">
                      {adv.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-stone-900 text-lg group-hover:text-emerald-800 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Jaminan Mutu Teruji</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Syar'i Certificate Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900 to-emerald-950 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <Award className="w-9 h-9" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Juru Sembelih Halal (JULEHA) & Syar'i
              </h4>
              <p className="text-emerald-200 text-xs sm:text-sm max-w-xl mt-1">
                Seluruh proses penyembelihan dipimpin oleh praktisi sembelih halal yang memahami fiqih aqiqah, tata cara ihsan kepada hewan, serta memutus 3 saluran leher hewan secara sempurna.
              </p>
            </div>
          </div>

          <div className="shrink-0 text-center md:text-right">
            <span className="inline-block bg-amber-500 text-stone-950 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow">
              100% Terverifikasi
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
