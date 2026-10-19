import React, { useState } from 'react';
import { Sparkles, Check, MessageCircle, Eye, ShoppingCart, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data/mockData';
import { useBusiness } from '../context/BusinessContext';

export default function PackagesSection() {
  const { businessInfo, formatRupiah, getWhatsAppLink, setActivePackageModal } = useBusiness();
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'Semua Paket' },
    { id: 'box', label: 'Paket Nasi Box' },
    { id: 'kebuli', label: 'Paket Nasi Kebuli / Mandhi' },
    { id: 'masak', label: 'Paket Kambing Masak' },
  ];

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (activeTab === 'all') return pkg.category !== 'katering'; // keep catering in separate section
    return pkg.category === activeTab;
  });

  return (
    <section id="paket" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Pilihan Paket Aqiqah Siap Saji
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Katalog Paket Aqiqah Terbaik di {businessInfo.deliveryAreas[0]}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Tersedia paket lengkap nasi box praktis, paket nasi kebuli rempah khas Timur Tengah, maupun paket kambing masak prasmanan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-800/20'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const waOrderMsg = `Halo Admin ${businessInfo.name}, saya berminat untuk memesan *${pkg.name}* (${formatRupiah(pkg.price)}). Mohon info jadwal yang tersedia. Terima kasih!`;
            
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col hover:shadow-xl group ${
                  pkg.popular
                    ? 'border-2 border-emerald-600 shadow-md relative'
                    : 'border-stone-200/90 hover:border-emerald-300'
                }`}
              >
                {/* Popular ribbon */}
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-amber-300 text-[11px] font-black uppercase tracking-wider py-1.5 px-4 text-center">
                    ⭐ Paling Banyak Dipilih (Best Seller)
                  </div>
                )}

                {/* Card Media Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/95 backdrop-blur-md text-emerald-900 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Portion Indicator */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      {pkg.portion}
                    </span>
                    <span className="text-[11px] bg-emerald-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-emerald-200">
                      {pkg.meatYield}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1.5 line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Price Tag */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-stone-400 block font-medium">Biaya Paket:</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-extrabold text-emerald-800">
                            {formatRupiah(pkg.price)}
                          </span>
                        </div>
                      </div>
                      {pkg.pricePerBox ? (
                        <div className="text-right">
                          <span className="text-[11px] text-stone-400 block">Per Box:</span>
                          <span className="text-xs font-bold text-stone-700">
                            ±{formatRupiah(pkg.pricePerBox)}
                          </span>
                        </div>
                      ) : null}
                    </div>

                    {/* Checklist of what's included */}
                    <div className="mt-5 space-y-2 text-xs text-stone-600">
                      <p className="font-bold text-stone-800 text-[11px] uppercase tracking-wider">
                        Rincian yang Didapat:
                      </p>
                      {pkg.includes.slice(0, 5).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                      {pkg.includes.length > 5 && (
                        <button
                          type="button"
                          onClick={() => setActivePackageModal(pkg)}
                          className="text-[11px] text-emerald-700 font-bold hover:underline cursor-pointer pt-1 flex items-center gap-1"
                        >
                          + {pkg.includes.length - 5} item lainnya (Lihat Detail)
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setActivePackageModal(pkg)}
                      className="px-3 py-2.5 rounded-xl border border-stone-200 hover:border-emerald-600 hover:text-emerald-800 text-stone-700 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Rincian</span>
                    </button>

                    <a
                      href={getWhatsAppLink(waOrderMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-700/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Pesan WA</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Free Customization Callout */}
        <div className="mt-14 bg-gradient-to-r from-emerald-50 via-amber-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border border-emerald-100 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              Punya Kebutuhan Menu Khusus atau Anggaran Tertentu?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              Kami siap menyesuaikan pilihan olahan masakan, porsi box, dan wadah sesuai keinginan Anda.
            </p>
          </div>
          <a
            href={getWhatsAppLink(`Halo Admin ${businessInfo.name}, saya ingin konsultasi paket aqiqah custom sesuai budget keluarga.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Konsultasi Paket Custom</span>
          </a>
        </div>

      </div>
    </section>
  );
}
