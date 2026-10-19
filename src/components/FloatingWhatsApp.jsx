import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export default function FloatingWhatsApp() {
  const { businessInfo, getWhatsAppLink } = useBusiness();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-white text-stone-800 p-3.5 rounded-2xl shadow-xl border border-stone-200 max-w-xs text-xs animate-bounce relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Tutup pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1 text-emerald-800 font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>Admin {businessInfo.name}</span>
          </div>
          <p className="text-stone-600 leading-tight">
            Ada pertanyaan tentang paket aqiqah atau katering? Yuk chat langsung via WhatsApp!
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={getWhatsAppLink(`Halo Admin ${businessInfo.name}, saya ingin konsultasi paket aqiqah.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-700/50 hover:scale-110 active:scale-95 transition-all group relative cursor-pointer"
        aria-label="Chat WhatsApp Admin"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
