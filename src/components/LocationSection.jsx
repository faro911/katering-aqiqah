import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Truck, CheckCircle2 } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function LocationSection() {
  const { businessInfo } = useBusiness();

  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Lokasi Dapur & Kantor
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Kunjungi Kami di Sadeng, Gunungpati, Semarang
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Kantor dan kandang kami mudah dijangkau di Sadeng, Gunungpati Semarang. Anda dipersilakan berkunjung langsung untuk memilih dan menimbang hewan aqiqah.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Information Card (Left) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Alamat Kantor Resmi
              </span>
              <h3 className="text-xl font-bold text-stone-900 leading-snug">
                {businessInfo.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {businessInfo.address}
              </p>
              {businessInfo.addressNote && (
                <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-xl text-xs font-semibold border border-amber-200/80">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Patokan: {businessInfo.addressNote}</span>
                </div>
              )}
            </div>

            <div className="space-y-4 pt-4 border-t border-stone-100 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Jam Operasional Layanan</p>
                  <p className="text-stone-500 text-xs">{businessInfo.openingHours}</p>
                  <p className="text-[11px] text-emerald-700 font-medium">Customer Service WhatsApp aktif 24 jam</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Kontak WhatsApp & Telepon</p>
                  <p className="text-stone-700 font-semibold">{businessInfo.whatsappDisplay || businessInfo.whatsapp}</p>
                  <p className="text-[11px] text-stone-500">Respon cepat & ramah konsultasi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Cakupan Pengiriman Gratis</p>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {businessInfo.deliveryAreas.map((area, i) => (
                      <span key={i} className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition cursor-pointer text-sm"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Buka Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

          </div>

          {/* Interactive Map Visual (Right) */}
          <div className="lg:col-span-7 h-full min-h-[380px] bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm relative flex flex-col justify-between">
            {/* Google Maps Embed iframe with safety check */}
            <iframe
              title={`Lokasi Google Maps ${businessInfo.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(businessInfo.mapsEmbedQuery || 'Aila+Aqiqah+Semarang')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-80 sm:h-96 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom bar of map */}
            <div className="p-4 bg-white border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Terdaftar resmi di Google Bisnisku dengan {businessInfo.stats.totalReviews} ulasan bintang {businessInfo.stats.googleRating}</span>
              </div>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
              >
                <span>Lihat di Aplikasi Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
