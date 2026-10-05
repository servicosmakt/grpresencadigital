/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { WhyPresence } from './components/WhyPresence.tsx';
import { Solutions } from './components/Solutions.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Packages } from './components/Packages.tsx';
import { CrmSection } from './components/CrmSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FinalCta } from './components/FinalCta.tsx';
import { Footer } from './components/Footer.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { LegalDocKey } from './data/siteData.ts';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocKey>('privacidade');

  const handleOpenLegal = (doc: LegalDocKey = 'privacidade') => {
    setActiveLegalDoc(doc);
    setLegalModalOpen(true);
  };

  const handleCloseLegal = () => {
    setLegalModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-['Poppins',sans-serif] selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Por que ter Presença Digital */}
        <WhyPresence />

        {/* 3. Nossas Soluções */}
        <Solutions />

        {/* 4. Como Funciona */}
        <HowItWorks />

        {/* 5. Portfólio & Amostras */}
        <Portfolio />

        {/* 6. Pacotes sob Medida */}
        <Packages />

        {/* 7. CRM Especializado */}
        <CrmSection />

        {/* 8. Sobre Nós & Fundadora */}
        <AboutSection />

        {/* 9. Chamada Final */}
        <FinalCta />
      </main>

      {/* Footer with Legal LGPD Cards */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Interactive Modal for Legal & Privacy Documents */}
      <LegalModal
        isOpen={legalModalOpen}
        initialDoc={activeLegalDoc}
        onClose={handleCloseLegal}
      />

      {/* Quick Access Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
