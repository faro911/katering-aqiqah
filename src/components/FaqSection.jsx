import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';
import { useBusiness } from '../context/BusinessContext';

export default function FaqSection() {
  const { businessInfo, getWhatsAppLink } = useBusiness();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            Tanya Jawab Seputar Aqiqah
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Informasi lengkap seputar ketentuan syariat aqiqah, pemesanan, pengiriman, dan cara pembayaran di {businessInfo.name}.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-600 bg-emerald-50/20 shadow-sm'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm sm:text-base cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`p-1.5 rounded-full transition-colors shrink-0 ${isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-500'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 bg-stone-50 rounded-3xl border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-stone-900 text-sm sm:text-base">Masih Punya Pertanyaan Lain?</h4>
            <p className="text-stone-500 text-xs mt-0.5">Customer Service kami siap membantu menjawab pertanyaan Anda via WhatsApp.</p>
          </div>
          <a
            href={getWhatsAppLink(`Halo Admin ${businessInfo.name}, saya ingin bertanya seputar aqiqah.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
