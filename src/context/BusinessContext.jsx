import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_BUSINESS_INFO } from '../data/mockData';

const BusinessContext = createContext();

export function BusinessProvider({ children }) {
  const [businessInfo, setBusinessInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('demo_business_info');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name && parsed.name.includes('Nuur Rahma')) {
          localStorage.removeItem('demo_business_info');
          return DEFAULT_BUSINESS_INFO;
        }
        return parsed;
      }
      return DEFAULT_BUSINESS_INFO;
    } catch {
      return DEFAULT_BUSINESS_INFO;
    }
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [activePackageModal, setActivePackageModal] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('demo_business_info', JSON.stringify(businessInfo));
    } catch {
      // storage unavailable
    }
  }, [businessInfo]);

  const updateBusinessInfo = (newFields) => {
    setBusinessInfo(prev => ({
      ...prev,
      ...newFields,
      whatsappDisplay: newFields.whatsapp ? newFields.whatsapp : prev.whatsappDisplay
    }));
  };

  const resetDefaults = () => {
    setBusinessInfo(DEFAULT_BUSINESS_INFO);
    try {
      localStorage.removeItem('demo_business_info');
    } catch {
      // no-op
    }
  };

  // Helper WhatsApp generator
  const getWhatsAppLink = (message) => {
    let cleanNumber = (businessInfo.whatsapp || DEFAULT_BUSINESS_INFO.whatsapp).replace(/[^0-9]/g, '');
    if (cleanNumber.startsWith('0')) {
      cleanNumber = '62' + cleanNumber.slice(1);
    }
    const encoded = encodeURIComponent(message || `Halo Admin ${businessInfo.name}, saya ingin konsultasi seputar paket Aqiqah & Katering.`);
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  const formatRupiah = (number) => {
    if (!number) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };

  return (
    <BusinessContext.Provider
      value={{
        businessInfo,
        updateBusinessInfo,
        resetDefaults,
        getWhatsAppLink,
        formatRupiah,
        isCustomizerOpen,
        setIsCustomizerOpen,
        activePackageModal,
        setActivePackageModal
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness() {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
}
