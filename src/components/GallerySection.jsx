import React, { useState } from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Olahan Daging', 'Nasi Box Spesial', 'Kemasan', 'Kandang & Hewan', 'Bonus Eksklusif'];

  const filteredItems = activeCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            Dokumentasi & Portofolio
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Galeri Sajian & Bukti Layanan
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Melihat lebih dekat kualitas daging olahan rempah, kemasan eksklusif, hingga kondisi kebersihan kandang hewan aqiqah kami.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm aspect-[4/3] bg-stone-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold bg-white/90 text-stone-900 px-2.5 py-1 rounded-full shadow">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold text-base leading-snug">{item.title}</h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
