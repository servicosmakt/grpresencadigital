import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem, getWhatsAppUrl } from '../data/siteData.ts';

// Import generated local images
import imgLashBeauty from '../assets/images/portfolio_lash_beauty_1791040846819.jpg';
import imgHairSalon from '../assets/images/portfolio_hair_salon_1791040858468.jpg';
import imgBarbershop from '../assets/images/portfolio_barbershop_1791040867340.jpg';

export const Portfolio: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  // Map items to image source or high-end UI design preview
  const getImageSource = (fallbackKey: string) => {
    if (fallbackKey === 'port1') return imgLashBeauty;
    if (fallbackKey === 'port2') return imgHairSalon;
    if (fallbackKey === 'port5') return imgBarbershop;
    return null;
  };

  return (
    <section id="portfolio" className="py-14 md:py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 text-left gap-4">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-2">
              PADRÃO VISUAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14213D] tracking-tight leading-tight mb-2">
              Modelo
            </h2>
            <p className="text-sm text-slate-600">
              Veja a proposta visual desenvolvida para demonstrar o padrão e a usabilidade de alto nível dos projetos.
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

        {/* Editorial Project Grid: Compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PORTFOLIO_ITEMS.map((item) => {
            const imgSrc = getImageSource(item.imageFallbackKey);

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col text-left cursor-pointer hover:-translate-y-0.5"
              >
                {/* Visual Preview Container */}
                <div className="relative h-40 sm:h-44 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* High-Fidelity UI Mockup Fallback Container */
                    <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                        <span className="text-[9px] font-mono text-slate-400">MOD-0{item.id.slice(-1)}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium">
                          Conceitual
                        </span>
                      </div>
                      <div className="my-auto">
                        <div className="text-[11px] text-blue-400 font-semibold mb-0.5">{item.subtitle}</div>
                        <div className="text-base font-bold text-white">{item.title}</div>
                      </div>
                      <div className="flex items-center justify-between pt-1.5 border-t border-slate-800 text-[9px] text-slate-400">
                        <span>Design Responsivo</span>
                        <span className="text-white font-semibold">★ 5.0</span>
                      </div>
                    </div>
                  )}

                  {/* Overlay Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-slate-800 shadow-sm">
                    {item.tag}
                  </div>

                  {/* Hover Overlay with Action Button */}
                  <div className="absolute inset-0 bg-[#14213D]/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <span className="bg-white text-[#14213D] font-semibold text-[11px] px-3 py-1.5 rounded-full shadow transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      Explorar modelo →
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#14213D] group-hover:text-[#2563EB] transition-colors mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-500 mb-1.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-[#2563EB] flex items-center gap-1 group-hover:underline">
                      Ver detalhes
                    </span>
                    <span className="text-slate-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Portfolio Item Detail Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar modal de portfólio"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="inline-block px-3 py-1 text-xs font-bold text-[#2563EB] bg-blue-50 rounded-md mb-2">
              {activeItem.tag}
            </span>

            <h3 className="text-2xl font-bold text-[#14213D] mb-1">
              {activeItem.title}
            </h3>

            <p className="text-sm font-semibold text-slate-500 mb-4">
              {activeItem.subtitle}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeItem.description} Cada projeto é construído exclusivamente para a identidade da sua marca, com foco em facilidade de agendamento e encantamento das clientes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#14213D] hover:bg-[#1E293B] text-white py-3 px-5 rounded-xl font-medium text-sm transition-colors text-center shadow"
              >
                <span>Quero um projeto com esse padrão</span>
              </a>
              <a
                href={activeItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-5 rounded-xl font-medium text-sm text-[#2563EB] bg-blue-50 hover:bg-blue-100 transition-colors text-center"
              >
                Abrir demonstração ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
