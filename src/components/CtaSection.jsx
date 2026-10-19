import React from 'react';
import { MessageCircle, Gift, Calculator, Sparkles, CheckCircle2 } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function CtaSection() {
  const { businessInfo, getWhatsAppLink } = useBusiness();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-tr from-emerald-950 via-emerald-900 to-emerald-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7">
        
        <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          Ibadah Sekali Seumur Hidup Buah Hati
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Sempurnakan Syukur Aqiqah Anda dengan <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
            Penuh Berkah, Kemudahan & Rasa Istimewa
          </span>
        </h2>

        <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Jangan ragu untuk mengonsultasikan tanggal kelahiran, perkiraan jumlah porsi box, dan pilihan menu olahan bersama customer service {businessInfo.name}. Kami siap melayani dengan sepenuh hati.
        </p>

        {/* Action buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink(`Halo Admin ${businessInfo.name}, saya ingin booking paket aqiqah untuk bulan ini.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 px-8 py-4 rounded-2xl font-black text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-stone-950" />
            <span>Booking Jadwal via WhatsApp</span>
          </a>

          <a
            href="#kalkulator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-2xl font-bold text-base transition backdrop-blur-sm"
          >
            <Calculator className="w-5 h-5 text-emerald-300" />
            <span>Simulasi Ulang Biaya</span>
          </a>
        </div>

        {/* Benefits bar */}
        <div className="pt-6 border-t border-emerald-800/60 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-emerald-200">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Tanpa Biaya Admin
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Bebas Bau Prengus 100%
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Gratis Antar Sampai Meja Makan
          </span>
        </div>

      </div>
    </section>
  );
}
