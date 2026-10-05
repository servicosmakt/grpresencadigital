import React from 'react';
import { getWhatsAppUrl } from '../data/siteData.ts';
import { BrandLogo } from './BrandLogo.tsx';

export const FinalCta: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-[#14213D] text-white relative overflow-hidden">
      {/* Background Decorative Abstract Rings */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-left">
          
          {/* Left Text */}
          <div className="max-w-2xl">
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-blue-300 block mb-3">
              TRANSFORMAÇÃO DIGITAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-4">
              Vamos levar o seu negócio para o próximo nível?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Fale agora mesmo no WhatsApp e descubra como a <strong>GR Presença Digital</strong> pode ajudar você a ser encontrada por novas clientes todos os dias.
            </p>
          </div>

          {/* Right Action & Brand Mark */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 text-center"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.74 14.12c-.24.68-1.4 1.31-1.94 1.39-.51.08-1.18.11-1.92-.13-.45-.15-1.04-.34-1.8-.67-3.19-1.39-5.26-4.63-5.42-4.84-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4 0.85-.4.21 0 .43 0 .61.01.2 0 .46-.07.72.54.26.63.89 2.17.97 2.33.08.16.13.35.03.56-.1.21-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.33.32-.14.64.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.82-.96 1.04-1.28.21-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/>
              </svg>
              <span>Falar no WhatsApp</span>
              <span>→</span>
            </a>

            <div className="hidden xl:block pl-6 border-l border-slate-700/80">
              <BrandLogo variant="dark" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
