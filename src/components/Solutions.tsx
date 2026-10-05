import React, { useState } from 'react';
import { SOLUTIONS, Solution, getWhatsAppUrl } from '../data/siteData.ts';
import { SolutionModal } from './SolutionModal.tsx';

export const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  return (
    <section id="solucoes" className="py-14 md:py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block: Title, Subtitle, and CTA Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 text-left gap-3">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-1.5">
              ESTRUTURA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14213D] tracking-tight leading-tight mb-1.5">
              Estrutura Digital
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Posicionamento completo e sob medida para sua marca atrair clientes todos os dias.
            </p>
          </div>

          <div>
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#14213D] hover:bg-[#1E293B] text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.74 14.12c-.24.68-1.4 1.31-1.94 1.39-.51.08-1.18.11-1.92-.13-.45-.15-1.04-.34-1.8-.67-3.19-1.39-5.26-4.63-5.42-4.84-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4 0.85-.4.21 0 .43 0 .61.01.2 0 .46-.07.72.54.26.63.89 2.17.97 2.33.08.16.13.35.03.56-.1.21-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.33.32-.14.64.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.82-.96 1.04-1.28.21-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/>
              </svg>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 2x3 Grid on Desktop, 1 Column on Mobile - Compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {SOLUTIONS.map((solution) => {
            return (
              <div
                key={solution.id}
                onClick={() => setSelectedSolution(solution)}
                className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between text-left cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    {/* Icon container */}
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                      {solution.iconName === 'MapPin' && (
                        <svg className="w-4 h-4 text-red-500 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      )}
                      {solution.iconName === 'Instagram' && (
                        <svg className="w-4 h-4 text-rose-500 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      )}
                      {solution.iconName === 'Globe' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      )}
                      {solution.iconName === 'CreditCard' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                      )}
                      {solution.iconName === 'Megaphone' && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m3 11 18-5v12L3 14v-3z" />
                          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                        </svg>
                      )}
                      {solution.iconName === 'Palette' && (
                        <svg className="w-4 h-4 text-amber-500 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/>
                        </svg>
                      )}
                    </div>

                    {/* Arrow action */}
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all duration-200">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#14213D] mb-0.5 group-hover:text-[#2563EB] transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-[11px] font-medium text-slate-500 mb-1.5">
                    {solution.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-400">
                  <span className="text-slate-500">{solution.tag}</span>
                  <span className="text-[#2563EB] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver detalhes
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />
    </section>
  );
};
