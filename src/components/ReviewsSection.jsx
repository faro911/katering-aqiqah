import React from 'react';
import { Star, Quote, ExternalLink, CheckCircle, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { useBusiness } from '../context/BusinessContext';

export default function ReviewsSection() {
  const { businessInfo } = useBusiness();

  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-stone-50 border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Ulasan Terverifikasi Google Maps
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Apa Kata Shohibul Aqiqah & Pelanggan?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Kepuasan pelanggan adalah amanah tertinggi kami. Berikut ulasan nyata dari para orang tua dan instansi di Semarang & Kendal.
          </p>

          {/* Rating Summary Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-stone-200">
              <span className="font-extrabold text-stone-900 text-lg">{businessInfo.stats.googleRating}</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600 font-medium">Berdasarkan {businessInfo.stats.totalReviews} Ulasan</span>
            </div>

            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-900 font-bold bg-emerald-100/70 hover:bg-emerald-100 px-4 py-2 rounded-2xl transition"
            >
              <span>Lihat di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating & Source */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-stone-400 bg-stone-100 px-2.5 py-0.5 rounded-full">
                    {item.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic">
                  "{item.review}"
                </p>

                {/* Package Ordered Tag */}
                <div className="inline-block bg-emerald-50 text-emerald-900 font-bold text-[11px] px-3 py-1 rounded-xl border border-emerald-100">
                  Pesanan: {item.packageOrdered}
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-600/30"
                  />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    </h4>
                    <p className="text-stone-500 text-xs">{item.role}</p>
                  </div>
                </div>

                <div className="text-right flex items-center gap-1 text-[11px] text-stone-500">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>{item.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
