import React from 'react';
import { X, Check, MessageCircle, Gift, Sparkles, Truck, ShieldCheck } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function PackageDetailModal() {
  const { businessInfo, formatRupiah, getWhatsAppLink, activePackageModal, setActivePackageModal } = useBusiness();

  if (!activePackageModal) return null;

  const pkg = activePackageModal;
  const waMsg = `Halo Admin ${businessInfo.name}, saya ingin booking *${pkg.name}* seharga ${formatRupiah(pkg.price)}. Mohon info langkah pemesanannya ya.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-emerald-100 flex flex-col max-h-[90vh]">
        
        {/* Modal Header Media */}
        <div className="relative aspect-[16/9] w-full bg-stone-100 shrink-0">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={() => setActivePackageModal(null)}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[11px] font-bold bg-amber-500 text-stone-950 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5 inline-block">
              {pkg.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black">{pkg.name}</h3>
            <p className="text-xs text-stone-200 mt-0.5">{pkg.portion} • {pkg.meatYield}</p>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {/* Price Box */}
          <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-xs text-emerald-800 font-semibold block">Total Biaya Paket:</span>
              <span className="text-2xl font-black text-emerald-900">{formatRupiah(pkg.price)}</span>
            </div>
            {pkg.pricePerBox ? (
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Rata-rata per box:</span>
                <span className="text-sm font-bold text-stone-700">±{formatRupiah(pkg.pricePerBox)}</span>
              </div>
            ) : null}
          </div>

          <p className="text-stone-600 leading-relaxed">
            {pkg.description}
          </p>

          {/* Full Itemized List */}
          <div>
            <h4 className="font-bold text-stone-900 text-xs sm:text-sm uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Kelengkapan & Fasilitas Paket:
            </h4>
            <div className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-200">
              {pkg.includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Gratis Pengiriman Wilayah</span>
            </div>
            <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Jaminan Tanpa Bau Prengus</span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setActivePackageModal(null)}
            className="px-4 py-2.5 rounded-xl text-stone-600 hover:bg-stone-200 text-xs font-semibold transition"
          >
            Tutup
          </button>

          <a
            href={getWhatsAppLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Pesan Paket Ini via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
