import React from 'react';
import { getWhatsAppUrl } from '../data/siteData.ts';
import imgHeroMockup from '../assets/images/hero_digital_mockup_1791042181889.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF]/40 to-[#F8FAFC]"
    >
      {/* Background Subtle Gradient Mesh / Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-slate-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 z-10 text-left">
            {/* Tagline / Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#2563EB] text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span>Presença Digital Sob Medida</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold text-[#14213D] leading-[1.16] tracking-tight mb-4">
              Seu negócio no digital,{' '}
              <span className="text-[#2563EB] underline decoration-blue-200 underline-offset-8">
                do jeito certo.
              </span>
            </h1>

            {/* Preserved Commercial Copy */}
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed mb-3">
              Mais visibilidade, mais clientes e mais resultados para o seu negócio.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 max-w-xl">
              A <strong>GR Presença Digital</strong> desenvolve soluções personalizadas e sob medida para profissionais autônomos e pequenos negócios de beleza e estética brilharem na internet — com investimento acessível, foco em resultados e sem complicação.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#14213D] hover:bg-[#1E293B] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.74 14.12c-.24.68-1.4 1.31-1.94 1.39-.51.08-1.18.11-1.92-.13-.45-.15-1.04-.34-1.8-.67-3.19-1.39-5.26-4.63-5.42-4.84-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4 0.85-.4.21 0 .43 0 .61.01.2 0 .46-.07.72.54.26.63.89 2.17.97 2.33.08.16.13.35.03.56-.1.21-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.33.32-.14.64.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.82-.96 1.04-1.28.21-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href="#pacotes"
                className="inline-flex items-center justify-center font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Conheça nossos pacotes
              </a>
            </div>
          </div>

          {/* Right Column: High-End Photorealistic Composition */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group transition-transform duration-500 hover:scale-[1.01]">
              <img
                src={imgHeroMockup}
                alt="Presença Digital Completa: Smartphone com Google Perfil e Computador com Site Exclusivo"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover block"
              />

              {/* Bottom Subtle Status Pill Bar */}
              <div className="bg-white/95 backdrop-blur-md px-4 py-3 border-t border-slate-100 flex items-center justify-between text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-800">
                    Sua marca pronta para receber contatos
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                  <span>★ 5.0</span>
                  <span className="text-slate-400 font-normal text-[11px]">(Google Maps)</span>
                </div>
              </div>
            </div>

            {/* Clean link-style indicators positioned beside/below the image in a single line */}
            <div
              className="flex items-center justify-between sm:justify-center gap-2 sm:gap-3.5 text-slate-600 max-w-full flex-nowrap whitespace-nowrap"
              style={{
                marginTop: '15px',
                paddingTop: '4px',
                width: '545px',
                height: '55px',
                fontSize: '12px',
                lineHeight: '15px'
              }}
            >
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-slate-700">Google Perfil</span>
              </div>
              <span className="text-slate-300 flex-shrink-0">•</span>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-slate-700">Links para Bio & Site</span>
              </div>
              <span className="text-slate-300 flex-shrink-0">•</span>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-slate-700">WhatsApp Direto</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
