import React from 'react';
import { BENEFITS, getWhatsAppUrl } from '../data/siteData.ts';

export const WhyPresence: React.FC = () => {
  return (
    <section id="beneficios" className="py-14 md:py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Editorial Statement (col-span-5) */}
          <div className="lg:col-span-5 text-left sticky top-28">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-2">
              POR QUE TER
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14213D] tracking-tight leading-[1.18] mb-4">
              Presença digital?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-3">
              Seu cliente não precisa conhecer você de antemão. Ele precisa conseguir encontrar você no momento exato em que precisa do seu serviço.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Para pequenos negócios e profissionais autônomos, estar bem posicionado na internet é o diferencial definitivo que transforma curiosas em clientes fiéis. Estar presente no digital é o que conecta sua marca às pessoas certas, na hora certa.
            </p>

            <div className="pt-2">
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

          {/* Right Column: 4 Editorial Benefit Cards (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {BENEFITS.map((benefit, index) => {
              // Custom icons for each benefit
              const icons = [
                // Visibilidade / Map
                <svg key="1" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>,
                // Credibilidade / Shield / Badge
                <svg key="2" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>,
                // Clientes / Users
                <svg key="3" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>,
                // Crescimento / Trend
                <svg key="4" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              ];

              return (
                <div
                  key={benefit.id}
                  className="bg-[#F8FAFC] border border-slate-200/80 rounded-xl p-4 sm:p-4.5 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                        {icons[index % icons.length]}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-[15px] font-bold text-[#14213D] mb-1.5">
                      {benefit.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                    <span>{benefit.badge}</span>
                    <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      ✓ Essencial
                    </span>
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
