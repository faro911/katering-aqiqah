import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, Check, Store, Phone, MapPin, Tag } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function DemoCustomizer() {
  const {
    businessInfo,
    updateBusinessInfo,
    resetDefaults,
    isCustomizerOpen,
    setIsCustomizerOpen
  } = useBusiness();

  const [tempName, setTempName] = useState(businessInfo.name);
  const [tempTagline, setTempTagline] = useState(businessInfo.tagline);
  const [tempWa, setTempWa] = useState(businessInfo.whatsapp);
  const [tempAddress, setTempAddress] = useState(businessInfo.address);
  const [tempCity, setTempCity] = useState(businessInfo.deliveryAreas[0] || 'Semarang');
  const [savedAlert, setSavedAlert] = useState(false);

  if (!isCustomizerOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    updateBusinessInfo({
      name: tempName,
      tagline: tempTagline,
      whatsapp: tempWa,
      address: tempAddress,
      deliveryAreas: [tempCity, 'Kendal & Sekitarnya', 'Area Terdekat']
    });
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      setIsCustomizerOpen(false);
    }, 900);
  };

  const handleReset = () => {
    resetDefaults();
    setIsCustomizerOpen(false);
  };

  // Quick Presets for demonstrating to different clients
  const applyPreset = (presetName, presetWa, presetCity, presetAddress) => {
    setTempName(presetName);
    setTempTagline(`Layanan Aqiqah & Katering Siap Saji ${presetCity}`);
    setTempWa(presetWa);
    setTempAddress(presetAddress);
    setTempCity(presetCity);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-emerald-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400/20 rounded-lg text-amber-300">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Kustomisasi Template UMKM</h3>
              <p className="text-xs text-emerald-200">Ubah data untuk demonstrasi langsung ke calon klien Anda</p>
            </div>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-1.5 text-emerald-300 hover:text-white rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {savedAlert && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2 font-medium">
              <Check className="w-4 h-4 text-emerald-600" />
              Perubahan berhasil diterapkan ke seluruh website!
            </div>
          )}

          {/* Quick presets */}
          <div>
            <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-2">
              Pilihan Contoh Profil Demo:
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => applyPreset(
                  'Aila Aqiqah Semarang',
                  '082323594374',
                  'Kota Semarang',
                  'Sadeng, Kec. Gunungpati, Kota Semarang'
                )}
                className="p-2.5 text-left rounded-lg border border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition font-medium"
              >
                <span className="font-bold text-emerald-800 block">Aila Aqiqah (Default)</span>
                <span className="text-stone-500 text-[11px]">Gunungpati & Semarang</span>
              </button>

              <button
                type="button"
                onClick={() => applyPreset(
                  'Berkah Amanah Aqiqah',
                  '081234567890',
                  'Jakarta Timur',
                  'Jl. Raya Pondok Kelapa No. 12, Duren Sawit, Jakarta Timur'
                )}
                className="p-2.5 text-left rounded-lg border border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition font-medium"
              >
                <span className="font-bold text-stone-800 block">Berkah Amanah</span>
                <span className="text-stone-500 text-[11px]">Jakarta & Bekasi</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5 text-emerald-600" /> Nama Usaha / Brand
              </label>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-stone-800 font-medium"
                placeholder="Contoh: Aqiqah Berkah Mandiri"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-emerald-600" /> Tagline / Slogan
              </label>
              <input
                type="text"
                value={tempTagline}
                onChange={(e) => setTempTagline(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-stone-800"
                placeholder="Layanan Aqiqah & Katering Siap Saji"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> No. WhatsApp Admin
                </label>
                <input
                  type="text"
                  value={tempWa}
                  onChange={(e) => setTempWa(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-stone-800"
                  placeholder="0823-2359-4374"
                  required
                />
                <span className="text-[10px] text-stone-500">Semua tombol checkout WA akan terhubung ke nomor ini.</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Kota Utama
                </label>
                <input
                  type="text"
                  value={tempCity}
                  onChange={(e) => setTempCity(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-stone-800"
                  placeholder="Kota Semarang"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Alamat Lengkap Kantor / Dapur
              </label>
              <textarea
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
                rows={2}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-stone-800 text-xs"
                placeholder="Alamat lengkap usaha..."
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3 border-t border-stone-100">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-700 py-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Kembalikan Default
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCustomizerOpen(false)}
                  className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 text-xs font-semibold transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition shadow-md shadow-emerald-700/20"
                >
                  Terapkan Sekarang
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
