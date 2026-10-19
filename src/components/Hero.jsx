import React from 'react';
import { ShieldCheck, Star, Sparkles, MessageCircle, ArrowRight, Truck, Award, CheckCircle2, ChevronDown, Calculator } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function Hero() {
  const { businessInfo, getWhatsAppLink } = useBusiness();

  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Islamic Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fde68a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Pilihan Terbaik di Semarang & Kendal
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-800/80 text-emerald-200 border border-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Sesuai Syariat Islam
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Tasyakuran Aqiqah Berkah, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
                Praktis, Nikmat & Syar'i
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Ibadah aqiqah buah hati tercinta bersama <strong>{businessInfo.name}</strong>. Hewan sehat cukup umur, disembelih syar'i bersertifikat, masakan lezat <span className="text-amber-300 font-semibold underline decoration-amber-400/50">tanpa bau prengus</span>, dan diantar hangat tepat waktu gratis sampai depan rumah Anda.
            </p>

            {/* Key USPs Mini List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-emerald-100">
              <div className="flex items-center gap-2 bg-emerald-900/50 p-2.5 rounded-xl border border-emerald-800/60">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Video Sembelih HD</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/50 p-2.5 rounded-xl border border-emerald-800/60">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sertifikat + Bingkai</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/50 p-2.5 rounded-xl border border-emerald-800/60 col-span-2 sm:col-span-1">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free Ongkir Wilayah</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#kalkulator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 px-6 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calculator className="w-5 h-5 text-stone-950" />
                <span>Hitung Biaya (Kalkulator)</span>
              </a>

              <a
                href={getWhatsAppLink('Halo Admin ' + businessInfo.name + ', saya mau tanya paket aqiqah.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-base backdrop-blur-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* Social Proof & Rating from Google Maps */}
            <div className="pt-4 border-t border-emerald-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-90 transition group"
                title="Buka Ulasan Google Maps"
              >
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-left">
                  <span className="font-bold text-white group-hover:underline">Rating {businessInfo.stats.googleRating} / 5.0</span>
                  <span className="text-emerald-300 block text-[11px]">(140+ Ulasan Google Maps)</span>
                </div>
              </a>

              <div className="h-6 w-px bg-emerald-800 hidden sm:block" />

              <div className="flex items-center gap-2 text-emerald-200">
                <Award className="w-4 h-4 text-amber-300" />
                <span><strong>{businessInfo.stats.satisfiedClients}</strong> Shohibul Aqiqah Terlayani</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-400 to-emerald-400 rounded-3xl blur-md opacity-30 animate-pulse" />

              {/* Main Image Card */}
              <div className="relative bg-emerald-900 rounded-3xl overflow-hidden border-2 border-emerald-700/80 shadow-2xl">
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80"
                    alt="Sajian Sate Kambing dan Nasi Box Aqiqah Nuur Rahma"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
                  
                  {/* Floating Tag over image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">Menu Favorit</p>
                        <h4 className="font-bold text-sm sm:text-base">Sate Kambing Empuk & Gule Rempah</h4>
                      </div>
                      <span className="bg-amber-500 text-stone-950 text-xs font-black px-2.5 py-1 rounded-lg">
                        100% Halal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub Features Inside Card */}
                <div className="p-5 bg-gradient-to-b from-emerald-900 to-emerald-950 space-y-3">
                  <div className="flex items-center justify-between text-xs text-emerald-200 pb-3 border-b border-emerald-800">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-amber-400" />
                      Free Delivery Semarang - Kendal
                    </span>
                    <span className="bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded font-medium text-[11px]">
                      Siap Antar Hangat
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-emerald-800/60 p-2.5 rounded-xl border border-emerald-700/60">
                      <p className="text-emerald-300 text-[11px]">Harga Mulai</p>
                      <p className="font-extrabold text-amber-300 text-sm sm:text-base">Rp 1.450.000</p>
                      <p className="text-[10px] text-emerald-300">Siap Saji Matang</p>
                    </div>
                    <div className="bg-emerald-800/60 p-2.5 rounded-xl border border-emerald-700/60">
                      <p className="text-emerald-300 text-[11px]">Pilihan Olahan</p>
                      <p className="font-bold text-white text-xs sm:text-sm">Sate, Gule, Kebuli</p>
                      <p className="text-[10px] text-emerald-300">Tongseng & Tengkleng</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white text-stone-800 p-3.5 rounded-2xl shadow-xl border border-stone-200 max-w-xs items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Reviewer"
                  className="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-amber-400"
                />
                <div className="text-xs">
                  <div className="flex items-center text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-bold text-stone-900 leading-tight">"Makanannya sedap, tidak prengus sama sekali!"</p>
                  <p className="text-stone-500 text-[10px]">Ibu Rahayu - Kaliwungu</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
