import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, UtensilsCrossed, Sparkles, ChevronRight, Calculator } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function Navbar() {
  const { businessInfo, getWhatsAppLink } = useBusiness();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Paket Aqiqah', href: '#paket' },
    { name: 'Kalkulator', href: '#kalkulator', isSpecial: true },
    { name: 'Katering Acara', href: '#katering' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Lokasi & Kontak', href: '#lokasi' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/60'
          : 'bg-white py-4 border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 flex items-center justify-center text-amber-300 shadow-md shadow-emerald-800/20 group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl text-emerald-950 tracking-tight leading-tight">
                {businessInfo.name}
              </span>
              <span className="hidden sm:inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                Syar'i
              </span>
            </div>
            <p className="text-stone-500 text-[11px] sm:text-xs font-medium line-clamp-1">
              Aqiqah & Katering Siap Saji Semarang
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                link.isSpecial
                  ? 'text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 font-bold flex items-center gap-1.5'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-50'
              }`}
            >
              {link.isSpecial && <Calculator className="w-3.5 h-3.5 text-emerald-600" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppLink('Halo Admin, saya ingin konsultasi paket Aqiqah & Katering.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition shadow-sm hover:shadow-emerald-700/25 cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={getWhatsAppLink('Halo Admin, saya ingin tanya paket Aqiqah.')}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-700 text-white rounded-xl shadow-sm"
            aria-label="Chat WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-emerald-800 rounded-xl hover:bg-stone-100 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 animate-fade-in shadow-xl">
          <div className="py-2 border-b border-stone-100 text-xs text-stone-500 font-medium">
            Menu Navigasi
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 text-sm font-semibold transition"
            >
              <div className="flex items-center gap-2">
                {link.isSpecial && <Calculator className="w-4 h-4 text-emerald-600" />}
                <span>{link.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </a>
          ))}

          <div className="pt-3 border-t border-stone-100">
            <a
              href={getWhatsAppLink('Halo Admin, saya ingin konsultasi paket Aqiqah.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi CS WhatsApp ({businessInfo.whatsappDisplay || businessInfo.whatsapp})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
