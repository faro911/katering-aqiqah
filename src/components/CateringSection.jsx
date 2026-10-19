import React from 'react';
import { Utensils, Users, Building, HeartHandshake, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data/mockData';
import { useBusiness } from '../context/BusinessContext';

export default function CateringSection() {
  const { businessInfo, formatRupiah, getWhatsAppLink, setActivePackageModal } = useBusiness();

  const cateringPackages = PACKAGES.filter((p) => p.category === 'katering');

  const cateringFeatures = [
    {
      title: 'Prasmanan & Hajatan',
      desc: 'Pernikahan, khitanan, arisan keluarga, syukuran rumah baru lengkap alat & pramusaji.',
      icon: Users
    },
    {
      title: 'Nasi Kotak / Bento Kantor',
      desc: 'Pengajian, seminar kampus, rapat dinas/kantor dengan kemasan higienis & rapi.',
      icon: Building
    },
    {
      title: 'Snack Box Tradisi & Modern',
      desc: 'Kue basah lezat, bolu, pastel, lemper, pie buah dan air mineral kemas.',
      icon: Utensils
    }
  ];

  return (
    <section id="katering" className="py-16 sm:py-24 bg-stone-50 border-y border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            Layanan Katering Berkah Nusantara
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Katering Acara, Prasmanan & Nasi Kotak
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Selain aqiqah, <strong>{businessInfo.name}</strong> melayani aneka kebutuhan katering prasmanan dan nasi box untuk instansi, kampus, kantor, maupun hajatan tasyakuran keluarga di wilayah Semarang dan Kendal.
          </p>
        </div>

        {/* 3 Pillars of Catering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cateringFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-amber-50 text-amber-700 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">{feat.title}</h3>
                  <p className="text-stone-500 text-xs mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catering Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cateringPackages.map((pkg) => {
            const waOrderMsg = `Halo Admin ${businessInfo.name}, saya ingin memesan ${pkg.name}. Mohon info pricelist dan menunya. Terima kasih.`;

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-stone-900 font-bold text-[11px] px-2.5 py-1 rounded-full shadow">
                      {pkg.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900">{pkg.name}</h3>
                      <p className="text-xs text-stone-500 mt-1">{pkg.description}</p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-amber-700">
                        {formatRupiah(pkg.price)}
                      </span>
                      {pkg.priceNote && (
                        <span className="text-xs text-stone-500 font-medium">/{pkg.priceNote}</span>
                      )}
                    </div>

                    <div className="space-y-1.5 text-xs text-stone-600">
                      <p className="font-bold text-stone-800 text-[11px] uppercase tracking-wider mb-2">
                        Menu & Fasilitas:
                      </p>
                      {pkg.includes.slice(0, 4).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setActivePackageModal(pkg)}
                    className="w-full py-2.5 rounded-xl border border-stone-300 hover:border-amber-600 text-stone-700 text-xs font-bold transition text-center cursor-pointer"
                  >
                    Rincian Menu
                  </button>
                  <a
                    href={getWhatsAppLink(waOrderMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Pesan Katering</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Food Tester Notice */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-amber-200/80 max-w-2xl mx-auto flex items-center gap-4 text-xs sm:text-sm">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-stone-900 block">Tersedia Layanan Food Tester Gratis!</span>
            <p className="text-stone-600">
              Ragu dengan rasa? Untuk pemesanan prasmanan hajatan & nasi kotak instansi jumlah tertentu, Anda dapat meminta tester masakan diantar ke alamat Anda.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
