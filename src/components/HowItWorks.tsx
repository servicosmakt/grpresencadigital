import React from 'react';
import { PROCESS_STEPS, getWhatsAppUrl } from '../data/siteData.ts';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-14 md:py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 text-left gap-4">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-2">
              MÉTODO DE ATENDIMENTO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14213D] tracking-tight leading-tight mb-2">
              Como funciona
            </h2>
            <p className="text-sm text-slate-600">
              Um processo simples, transparente e focado no seu resultado para tirar sua presença digital do papel sem dor de cabeça.
            </p>
          </div>

          <div>
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#14213D] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.74 14.12c-.24.68-1.4 1.31-1.94 1.39-.51.08-1.18.11-1.92-.13-.45-.15-1.04-.34-1.8-.67-3.19-1.39-5.26-4.63-5.42-4.84-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4 0.85-.4.21 0 .43 0 .61.01.2 0 .46-.07.72.54.26.63.89 2.17.97 2.33.08.16.13.35.03.56-.1.21-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.33.32-.14.64.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.82-.96 1.04-1.28.21-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/>
              </svg>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline (3 Steps) */}
        <div className="relative">
          {/* Horizontal Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-5 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0" />

          {/* Vertical Connection Line (Mobile) */}
          <div className="lg:hidden absolute top-4 bottom-4 left-4 w-[2px] bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10 text-left">
            {PROCESS_STEPS.map((step, index) => {
              return (
                <div
                  key={step.number}
                  className="flex flex-row lg:flex-col items-start gap-3 lg:gap-3.5 group p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70 hover:border-blue-300 transition-colors"
                >
                  {/* Step Number Circle Badge */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#14213D] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow border-2 border-white group-hover:bg-[#2563EB] group-hover:scale-105 transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="pt-0 lg:pt-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#2563EB] transition-colors">
                        {step.title}
                      </h3>
                      {index < PROCESS_STEPS.length - 1 && (
                        <span className="hidden lg:inline text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all text-xs">
                          →
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-semibold text-slate-700 mb-1 leading-snug">
                      {step.shortDesc}
                    </p>

                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
