import React from 'react';
import { UtensilsCrossed, Phone, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function Footer() {
  const { businessInfo, getWhatsAppLink, setIsCustomizerOpen } = useBusiness();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-800 text-amber-300 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block">
                  {businessInfo.name}
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  {businessInfo.slogan}
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              Jasa layanan aqiqah siap saji dan katering acara terpercaya di Semarang & Kendal. Melayani dengan standar syariat Islam yang tertib, higienis, masakan bercita rasa tinggi, dan bebas bau prengus.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-900 hover:bg-emerald-800 text-stone-300 hover:text-white transition"
                title="Instagram Resmi"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-900 hover:bg-emerald-800 text-stone-300 hover:text-white transition"
                title="WhatsApp Resmi"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-stone-900 hover:bg-emerald-800 text-stone-300 hover:text-white transition"
                title="Google Maps Lokasi"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#paket" className="hover:text-emerald-400 transition">Paket Nasi Box Aqiqah</a></li>
              <li><a href="#paket" className="hover:text-emerald-400 transition">Paket Nasi Kebuli Arab</a></li>
              <li><a href="#paket" className="hover:text-emerald-400 transition">Kambing Masak Prasmanan</a></li>
              <li><a href="#katering" className="hover:text-emerald-400 transition">Katering Prasmanan Acara</a></li>
              <li><a href="#katering" className="hover:text-emerald-400 transition">Nasi Kotak Syukuran & Rapat</a></li>
              <li><a href="#katering" className="hover:text-emerald-400 transition">Snack Box Tradisional</a></li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#beranda" className="hover:text-emerald-400 transition">Beranda</a></li>
              <li><a href="#kalkulator" className="hover:text-emerald-400 transition text-amber-400 font-bold">Kalkulator Biaya</a></li>
              <li><a href="#keunggulan" className="hover:text-emerald-400 transition">Keunggulan Syar'i</a></li>
              <li><a href="#testimoni" className="hover:text-emerald-400 transition">Ulasan Google Maps</a></li>
              <li><a href="#lokasi" className="hover:text-emerald-400 transition">Lokasi & Jam Buka</a></li>
              <li>
                <button
                  onClick={() => setIsCustomizerOpen(true)}
                  className="text-emerald-400 hover:underline cursor-pointer"
                >
                  Kustomisasi Demo UMKM
                </button>
              </li>
            </ul>
          </div>

          {/* Office & Operating */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Dapur & Layanan Pelanggan
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{businessInfo.openingHours}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {businessInfo.whatsappDisplay || businessInfo.whatsapp}</span>
              </p>
            </div>

            {/* Payment Method Badges */}
            <div className="pt-3">
              <span className="text-[11px] font-semibold text-stone-500 block mb-1.5 uppercase tracking-wider">
                Metode Pembayaran Aman:
              </span>
              <div className="flex flex-wrap gap-2 text-[10px] font-bold text-stone-300">
                <span className="px-2 py-1 bg-stone-900 rounded border border-stone-800">Transfer BCA</span>
                <span className="px-2 py-1 bg-stone-900 rounded border border-stone-800">Bank Mandiri</span>
                <span className="px-2 py-1 bg-stone-900 rounded border border-stone-800">BSI Syariah</span>
                <span className="px-2 py-1 bg-stone-900 rounded border border-stone-800">Bank BRI</span>
                <span className="px-2 py-1 bg-emerald-950 text-emerald-400 rounded border border-emerald-900">COD (Bayar di Tempat)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & template notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.name}. Seluruh Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-stone-400 text-[11px]">
              Template Demo UMKM Aqiqah & Katering Siap Deploy ke Vercel
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-stone-900 hover:bg-emerald-800 text-stone-300 hover:text-white rounded-lg transition"
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
