import React from 'react';
import { PACKAGES, getWhatsAppUrl, MessageKey } from '../data/siteData.ts';

export const Packages: React.FC = () => {
  return (
    <section id="pacotes" className="py-14 md:py-20 bg-white relative border-y border-slate-200/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-2">
            PLANOS & ESTRUTURA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14213D] tracking-tight leading-tight mb-3">
            Escolha o ponto de partida para sua presença digital
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Três opções de pacotes sob medida para o momento específico do seu negócio, sem burocracia e com atendimento personalizado.
          </p>
        </div>

        {/* 3 Pricing Cards with Profissional as Featured Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            const msgKey = pkg.id as MessageKey;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 text-left ${
                  isPopular
                    ? 'bg-[#14213D] text-white shadow-xl lg:-translate-y-2 border-2 border-blue-500/50 hover:border-blue-400'
                    : 'bg-[#F8FAFC] text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5'
                }`}
              >
                {/* Most Popular Badge on Top */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider py-0.5 px-3 rounded-full shadow-md">
                    {pkg.badge || 'MAIS PROCURADO'}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3
                        className={`text-xl font-bold tracking-tight ${
                          isPopular ? 'text-white' : 'text-[#14213D]'
                        }`}
                      >
                        {pkg.name}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 leading-relaxed ${
                          isPopular ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {pkg.target}
                      </p>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isPopular
                          ? 'bg-blue-600/30 text-blue-300'
                          : 'bg-blue-50 text-[#2563EB]'
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>

                  {/* Personalized Investment Block */}
                  <div className="py-3.5 my-3 border-y border-slate-200/20">
                    <span
                      className={`text-xl sm:text-2xl font-bold tracking-tight block ${
                        isPopular ? 'text-blue-300' : 'text-[#2563EB]'
                      }`}
                    >
                      Sob Medida
                    </span>
                    <span
                      className={`text-[11px] block mt-0.5 ${
                        isPopular ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      Investimento personalizado para a sua necessidade
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mb-6">
                    <div
                      className={`text-[10px] font-bold uppercase tracking-wider mb-2.5 ${
                        isPopular ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      O que está incluso:
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <span
                            className={`flex-shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center mt-0.5 ${
                              isPopular
                                ? 'bg-blue-500 text-white'
                                : 'bg-blue-100 text-[#2563EB]'
                            }`}
                          >
                            <svg className="w-2 h-2" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="2 6 5 9 10 3" />
                            </svg>
                          </span>
                          <span
                            className={
                              isPopular ? 'text-slate-200' : 'text-slate-700'
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-1">
                  <a
                    href={getWhatsAppUrl(msgKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow hover:shadow-md text-center ${
                      isPopular
                        ? 'bg-[#2563EB] hover:bg-blue-600 text-white'
                        : 'bg-[#14213D] hover:bg-slate-900 text-white'
                    }`}
                  >
                    <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.74 14.12c-.24.68-1.4 1.31-1.94 1.39-.51.08-1.18.11-1.92-.13-.45-.15-1.04-.34-1.8-.67-3.19-1.39-5.26-4.63-5.42-4.84-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4 0.85-.4.21 0 .43 0 .61.01.2 0 .46-.07.72.54.26.63.89 2.17.97 2.33.08.16.13.35.03.56-.1.21-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.33.32-.14.64.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.82-.96 1.04-1.28.21-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/>
                    </svg>
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance text below packages */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Todos os pacotes são configurados individualmente para a realidade e localização do seu negócio.
        </div>

      </div>
    </section>
  );
};
