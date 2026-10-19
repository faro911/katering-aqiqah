import React, { useState } from 'react';
import {
  Calculator,
  User,
  CheckCircle,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  Award,
  Info,
  Gift,
  Check,
  ChevronRight,
  Flame,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBusiness } from '../context/BusinessContext';

export default function AqiqahCalculator() {
  const { businessInfo, formatRupiah, getWhatsAppLink } = useBusiness();

  // State
  const [gender, setGender] = useState('perempuan'); // 'laki' (2 kambing) or 'perempuan' (1 kambing)
  const [goatType, setGoatType] = useState('standar'); // 'hemat', 'standar', 'premium', 'sultan'
  const [cookingStyle, setCookingStyle] = useState('sate_gule');
  const [packagingType, setPackagingType] = useState('bento'); // 'masak_saja', 'bento', 'kebuli', 'mandhi'
  const [boxQuantity, setBoxQuantity] = useState(60);
  const [includeFruit, setIncludeFruit] = useState(true);
  const [includeDonate, setIncludeDonate] = useState(false);
  const [childName, setChildName] = useState('');

  // Pricing constants
  const goatOptions = {
    hemat: { name: 'Tipe Hemat', price: 1450000, sate: 200, gule: 50, note: 'Cocok untuk 50 porsi' },
    standar: { name: 'Tipe Standar (Favorit)', price: 1850000, sate: 250, gule: 60, note: 'Cocok untuk 60-70 porsi' },
    premium: { name: 'Tipe Premium', price: 2350000, sate: 320, gule: 80, note: 'Cocok untuk 80-90 porsi' },
    sultan: { name: 'Tipe Sultan Super', price: 2850000, sate: 400, gule: 100, note: 'Cocok untuk 100+ porsi' }
  };

  const cookingOptions = [
    { id: 'sate_gule', name: 'Sate & Gule Rempah', desc: 'Menu paling klasik & digemari seluruh keluarga' },
    { id: 'sate_tongseng', name: 'Sate & Tongseng Manis Gurih', desc: 'Kombinasi sate empuk dan tongseng kuah sayur kol segar' },
    { id: 'krengseng_tengkleng', name: 'Krengsengan & Tengkleng Khas', desc: 'Bumbu pekat kecap rempah & kuah tengkleng sedap' },
    { id: 'rendang_sop', name: 'Rendang Kambing & Sup Kaldu', desc: 'Rendang medok kaya bumbu minang & kuah sup bening' }
  ];

  const packagingOptions = {
    masak_saja: { name: 'Kambing Masak Saja (Tanpa Nasi)', pricePerBox: 0, desc: 'Daging masak dikemas wadah panci higienis untuk prasmanan di rumah' },
    bento: { name: 'Paket Nasi Bento Sekat Komplit', pricePerBox: 14000, desc: 'Nasi putih pulen, sambal goreng ati kentang, acar, kerupuk udang & alat makan' },
    kebuli: { name: 'Paket Nasi Kebuli Arab Basmati', pricePerBox: 18000, desc: 'Nasi kebuli gurih aroma kapulaga kismis, sambal goreng arab & emping' },
    mandhi: { name: 'Paket Nasi Mandhi Gurih Khas Timur Tengah', pricePerBox: 19000, desc: 'Nasi mandhi rempah rempah lezat, sambal segar dhaboq & emping' }
  };

  // Calculations
  const goatMultiplier = gender === 'laki' ? 2 : 1;
  const selectedGoat = goatOptions[goatType];
  const goatTotal = selectedGoat.price * goatMultiplier;
  const isBoxOrder = packagingType !== 'masak_saja';

  const baseBoxPrice = isBoxOrder ? packagingOptions[packagingType].pricePerBox : 0;
  const fruitPrice = isBoxOrder && includeFruit ? 2500 : 0;
  const totalPerBox = baseBoxPrice + fruitPrice;
  const boxTotal = isBoxOrder ? totalPerBox * boxQuantity : 0;

  const grandTotal = goatTotal + boxTotal;

  // Trigger celebration confetti
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  // Format WhatsApp Message
  const generateWhatsAppMessage = () => {
    const genderText = gender === 'laki' ? 'Laki-laki (2 Ekor Kambing)' : 'Perempuan (1 Ekor Kambing)';
    const cookingName = cookingOptions.find(c => c.id === cookingStyle)?.name || 'Sate & Gule';
    const packagingName = packagingOptions[packagingType].name;

    let msg = `*Halo Admin ${businessInfo.name}, saya ingin konsultasi pemesanan Aqiqah:*\n\n`;
    if (childName.trim()) {
      msg += `👶 *Nama Buah Hati:* ${childName.trim()}\n`;
    }
    msg += `✨ *Jenis Aqiqah:* ${genderText}\n`;
    msg += `🐐 *Pilihan Kambing:* ${selectedGoat.name} (${formatRupiah(selectedGoat.price)} x ${goatMultiplier} = ${formatRupiah(goatTotal)})\n`;
    msg += `🍳 *Pilihan Olahan:* ${cookingName}\n`;
    msg += `🍱 *Penyajian:* ${packagingName}\n`;

    if (isBoxOrder) {
      msg += `📦 *Jumlah Nasi Box:* ${boxQuantity} Box (${formatRupiah(totalPerBox)}/box = ${formatRupiah(boxTotal)})\n`;
      msg += `🍌 *Buah Segar:* ${includeFruit ? 'Ya (+Pisang/Jeruk)' : 'Tidak'}\n`;
    }

    if (includeDonate) {
      msg += `🤝 *Penyaluran:* Ingin dibantu salurkan sebagian/seluruh ke Panti Asuhan\n`;
    }

    msg += `\n💰 *Total Estimasi:* *${formatRupiah(grandTotal)}*\n`;
    msg += `📍 *Lokasi Pengiriman:* Area Semarang / Kendal / Sekitarnya\n\n`;
    msg += `Mohon info ketersediaan tanggal dan jadwal penyembelihan terdekat ya Admin. Terima kasih! 🙏`;

    return msg;
  };

  const handleOrderClick = () => {
    triggerConfetti();
    const url = getWhatsAppLink(generateWhatsAppMessage());
    window.open(url, '_blank');
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-20 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            Fitur Interaktif
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Kalkulator Simulasi Biaya Aqiqah
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Sesuaikan pilihan hewan, olahan menu, dan kemasan nasi box sesuai kebutuhan keluarga Anda. Estimasi harga transparan, tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-stone-200/80 space-y-8">
            
            {/* Optional Child Name input */}
            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
              <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1.5">
                Nama Buah Hati (Shohibul Aqiqah) <span className="text-emerald-600 font-normal">(Opsional)</span>:
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Contoh: Muhammad Rayyan Alfatih"
                className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-stone-800 text-sm font-medium"
              />
              <p className="text-[11px] text-emerald-700 mt-1">
                *Nama ini akan disematkan di video doa penyembelihan dan sertifikat berbingkai resmi.
              </p>
            </div>

            {/* Step 1: Gender of Child */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">1</span>
                  Pilih Jenis Kelamin Bayi
                </label>
                <span className="text-xs text-stone-500 font-medium">Berdasarkan Sunnah Syariat</span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setGender('laki')}
                  className={`p-4 rounded-2xl border-2 text-left transition relative cursor-pointer ${
                    gender === 'laki'
                      ? 'border-emerald-600 bg-emerald-50/80 shadow-sm ring-1 ring-emerald-600'
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50/40'
                  }`}
                >
                  {gender === 'laki' && (
                    <div className="absolute top-3 right-3 text-emerald-600">
                      <CheckCircle className="w-5 h-5 fill-emerald-600 text-white" />
                    </div>
                  )}
                  <p className="font-extrabold text-stone-900 text-base">Laki - Laki</p>
                  <p className="text-xs text-emerald-800 font-bold mt-0.5">2 Ekor Kambing / Domba</p>
                  <p className="text-[11px] text-stone-500 mt-1">Sunnah Muakkadah 2 ekor</p>
                </button>

                <button
                  type="button"
                  onClick={() => setGender('perempuan')}
                  className={`p-4 rounded-2xl border-2 text-left transition relative cursor-pointer ${
                    gender === 'perempuan'
                      ? 'border-emerald-600 bg-emerald-50/80 shadow-sm ring-1 ring-emerald-600'
                      : 'border-stone-200 hover:border-stone-300 bg-stone-50/40'
                  }`}
                >
                  {gender === 'perempuan' && (
                    <div className="absolute top-3 right-3 text-emerald-600">
                      <CheckCircle className="w-5 h-5 fill-emerald-600 text-white" />
                    </div>
                  )}
                  <p className="font-extrabold text-stone-900 text-base">Perempuan</p>
                  <p className="text-xs text-emerald-800 font-bold mt-0.5">1 Ekor Kambing / Domba</p>
                  <p className="text-[11px] text-stone-500 mt-1">Sunnah Syariat 1 ekor</p>
                </button>
              </div>
            </div>

            {/* Step 2: Goat Type / Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">2</span>
                  Pilih Bobot & Ukuran Kambing
                </label>
                <span className="text-xs text-emerald-700 font-semibold">Harga per ekor</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(goatOptions).map(([key, opt]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setGoatType(key)}
                    className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer ${
                      goatType === key
                        ? 'border-emerald-600 bg-emerald-50/80 shadow-sm ring-1 ring-emerald-600'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 text-sm">{opt.name}</span>
                      {goatType === key && <Check className="w-4 h-4 text-emerald-600" />}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-base font-extrabold text-emerald-800">{formatRupiah(opt.price)}</span>
                      <span className="text-[10px] text-stone-500">/ekor</span>
                    </div>
                    <p className="text-[11px] text-stone-600 mt-1">
                      Hasil ±{opt.sate} sate & {opt.gule} porsi gule
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Cooking Style */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">3</span>
                  Pilih Varian Olahan Daging
                </label>
                <span className="text-xs text-amber-600 font-bold">Bebas Bau Prengus</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cookingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCookingStyle(opt.id)}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      cookingStyle === opt.id
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span>{opt.name}</span>
                      {cookingStyle === opt.id && <Check className="w-3.5 h-3.5 text-emerald-700" />}
                    </div>
                    <p className="text-[10px] text-stone-500 mt-0.5 line-clamp-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Packaging Type */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-stone-800 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">4</span>
                  Pilih Bentuk Kemasan & Sajian
                </label>
              </div>
              <div className="space-y-2.5">
                {Object.entries(packagingOptions).map(([key, opt]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPackagingType(key)}
                    className={`w-full p-3.5 rounded-2xl border-2 text-left transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      packagingType === key
                        ? 'border-emerald-600 bg-emerald-50/80 shadow-sm ring-1 ring-emerald-600'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900 text-sm">{opt.name}</span>
                        {packagingType === key && <Check className="w-4 h-4 text-emerald-600" />}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">{opt.desc}</p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      {opt.pricePerBox === 0 ? (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                          Gratis Wadah Panci
                        </span>
                      ) : (
                        <div>
                          <span className="font-extrabold text-stone-900 text-sm">{formatRupiah(opt.pricePerBox)}</span>
                          <span className="text-[10px] text-stone-500">/box</span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Quantity & Add-ons (if box selected) */}
            {isBoxOrder && (
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    Jumlah Nasi Box yang Dipesan:
                  </label>
                  <span className="text-base font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-xl">
                    {boxQuantity} Kotak
                  </span>
                </div>

                {/* Range Slider & Quick buttons */}
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="5"
                  value={boxQuantity}
                  onChange={(e) => setBoxQuantity(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />

                <div className="flex flex-wrap gap-2 text-xs">
                  {[40, 50, 60, 80, 100].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBoxQuantity(num)}
                      className={`px-3 py-1.5 rounded-lg border font-semibold transition cursor-pointer ${
                        boxQuantity === num
                          ? 'bg-emerald-700 text-white border-emerald-700'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-emerald-600'
                      }`}
                    >
                      {num} Box
                    </button>
                  ))}
                </div>

                {/* Additional fruit checkbox */}
                <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-800 font-medium">
                    <input
                      type="checkbox"
                      checked={includeFruit}
                      onChange={(e) => setIncludeFruit(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-600 accent-emerald-700"
                    />
                    <span>Tambah Buah Segar (Pisang / Jeruk)</span>
                  </label>
                  <span className="text-xs font-semibold text-stone-600">+Rp 2.500/box</span>
                </div>
              </div>
            )}

            {/* Social donation option */}
            <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80 flex items-start gap-2.5">
              <Gift className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs">
                <label className="flex items-center gap-2 font-bold text-amber-950 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDonate}
                    onChange={(e) => setIncludeDonate(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-700 focus:ring-amber-600 accent-amber-600"
                  />
                  <span>Bantu Salurkan Sebagian ke Panti Asuhan / Dhuafa Binaan</span>
                </label>
                <p className="text-amber-800/80 text-[11px] mt-0.5">
                  Tim {businessInfo.name} dapat membantu mendistribusikan langsung masakan aqiqah ke panti asuhan di Semarang lengkap dengan dokumentasi tanda terima.
                </p>
              </div>
            </div>

          </div>

          {/* Real-time Receipt / Price Summary (Right Column Sticky) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            
            <div className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-emerald-800 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/80">
                <div>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">Ringkasan Estimasi</span>
                  <h3 className="text-xl font-bold text-white">Rincian Paket Anda</h3>
                </div>
                <div className="p-2 bg-amber-400/20 text-amber-300 rounded-xl">
                  <ShoppingBag className="w-5 h-5" />
                </div>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                
                {childName && (
                  <div className="p-2.5 bg-emerald-900/60 rounded-xl border border-emerald-700/60">
                    <span className="text-[11px] text-emerald-300 block">Nama Buah Hati:</span>
                    <span className="font-bold text-white text-sm">{childName}</span>
                  </div>
                )}

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-white">
                      {selectedGoat.name} ({goatMultiplier} Ekor)
                    </p>
                    <p className="text-emerald-300 text-xs">
                      {gender === 'laki' ? 'Anak Laki-laki (2 Ekor)' : 'Anak Perempuan (1 Ekor)'} • {formatRupiah(selectedGoat.price)}/ekor
                    </p>
                  </div>
                  <span className="font-bold text-white">{formatRupiah(goatTotal)}</span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-white">Olahan: {cookingOptions.find(c => c.id === cookingStyle)?.name}</p>
                    <p className="text-emerald-300 text-[11px]">Bumbu rempah & tanpa prengus</p>
                  </div>
                  <span className="text-amber-300 text-xs font-semibold">Sudah Termasuk</span>
                </div>

                {isBoxOrder ? (
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-white">
                        {boxQuantity} Box {packagingOptions[packagingType].name}
                      </p>
                      <p className="text-emerald-300 text-xs">
                        {formatRupiah(totalPerBox)}/box {includeFruit && '(+Buah segar)'}
                      </p>
                    </div>
                    <span className="font-bold text-white">{formatRupiah(boxTotal)}</span>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-white">Wadah Panci Higienis</p>
                      <p className="text-emerald-300 text-[11px]">Masak saja siap saji prasmanan</p>
                    </div>
                    <span className="text-amber-300 text-xs font-semibold">Gratis</span>
                  </div>
                )}

                {/* Free Bonuses List */}
                <div className="pt-3 border-t border-emerald-800/80 space-y-1.5 text-xs text-emerald-200">
                  <p className="font-bold text-amber-300 flex items-center gap-1.5 text-xs">
                    <Gift className="w-3.5 h-3.5" /> Bonus Gratis Sudah Termasuk:
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Sertifikat Aqiqah Eksklusif + Pigura Kayu
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Video Dokumentasi Penyembelihan Syar'i (HD)
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Gratis Pengantaran Wilayah Semarang & Kendal
                  </p>
                </div>

              </div>

              {/* Grand Total */}
              <div className="pt-4 border-t-2 border-dashed border-emerald-800 flex items-end justify-between">
                <div>
                  <span className="text-xs text-emerald-300 block">Total Perkiraan Biaya:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300">
                    {formatRupiah(grandTotal)}
                  </span>
                </div>
                <span className="text-[10px] text-emerald-300 text-right">
                  DP mulai 20% <br /> Pelunasan COD / Transfer
                </span>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={handleOrderClick}
                className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-black py-4 px-6 rounded-2xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950" />
                <span>Pesan Paket Ini via WhatsApp</span>
              </button>

              <p className="text-[11px] text-emerald-300 text-center">
                *Format pesanan otomatis disusun rapi dan langsung dikirim ke WhatsApp resmi {businessInfo.name}.
              </p>

            </div>

            {/* Assurance Card */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-stone-900">Bisa Pesan Kapan Saja (24/7)</p>
                <p className="text-stone-500">CS kami akan membalas pesan dan mengonfirmasi ketersediaan dengan cepat.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
