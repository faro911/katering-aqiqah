import React from 'react';
import { Sparkles, Phone, MapPin, Sliders, CheckCircle } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function AnnouncementBar() {
  const { businessInfo, setIsCustomizerOpen } = useBusiness();

  return (
    <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm font-medium border-b border-emerald-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Promo message */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-amber-400/30">
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
            Promo Berkah
          </span>
          <p className="line-clamp-1">
            Free Ongkir Area <span className="text-amber-300 font-semibold">{businessInfo.deliveryAreas[0]} & {businessInfo.deliveryAreas[1]}</span> + Bonus Sertifikat Bingkai & Souvenir!
          </p>
        </div>

        {/* Right action & UMKM demo switcher */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-emerald-300 text-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Ngaliyan, Semarang (Depan UIN Walisongo 3)</span>
          </div>

          <div className="h-3 w-px bg-emerald-700 hidden lg:block" />

          {/* UMKM Client Demo Pill */}
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-emerald-200 hover:text-white px-2.5 py-1 rounded-md text-xs font-medium transition shadow-sm border border-emerald-600/50 cursor-pointer"
            title="Klik untuk mengubah nama usaha, nomor WA, atau kota saat demo ke calon klien UMKM"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-300" />
            <span>Mode Demo Klien UMKM</span>
          </button>
        </div>
      </div>
    </div>
  );
}
