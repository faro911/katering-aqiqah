import React from 'react';
import { BusinessProvider } from './context/BusinessContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AqiqahCalculator from './components/AqiqahCalculator';
import PackagesSection from './components/PackagesSection';
import CateringSection from './components/CateringSection';
import WhyUsSection from './components/WhyUsSection';
import ProcessSection from './components/ProcessSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import LocationSection from './components/LocationSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import DemoCustomizer from './components/DemoCustomizer';
import PackageDetailModal from './components/PackageDetailModal';
import './App.css';

export default function App() {
  return (
    <BusinessProvider>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-800 antialiased selection:bg-emerald-700 selection:text-white flex flex-col">
        {/* Top Announcement & UMKM Demo Toggle */}
        <AnnouncementBar />

        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Banner */}
          <Hero />

          {/* Interactive Cost Calculator */}
          <AqiqahCalculator />

          {/* Filterable Aqiqah Packages */}
          <PackagesSection />

          {/* General Catering & Event Meal Boxes */}
          <CateringSection />

          {/* 7 Core Syar'i & Service Advantages */}
          <WhyUsSection />

          {/* 4 Easy Order Steps */}
          <ProcessSection />

          {/* Gallery & Food Showcase */}
          <GallerySection />

          {/* Google Maps Authentic Reviews */}
          <ReviewsSection />

          {/* FAQ Accordion */}
          <FaqSection />

          {/* Google Maps Embed & Office Location */}
          <LocationSection />

          {/* High-conversion Final Call to Action */}
          <CtaSection />
        </main>

        {/* Comprehensive Footer */}
        <Footer />

        {/* Floating WhatsApp Bubble */}
        <FloatingWhatsApp />

        {/* Interactive UMKM Customizer Modal for pitching clients */}
        <DemoCustomizer />

        {/* Package Detail Modal */}
        <PackageDetailModal />
      </div>
    </BusinessProvider>
  );
}
