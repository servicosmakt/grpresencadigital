import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { LegalDocKey, getWhatsAppUrl } from '../data/siteData.ts';

interface FooterProps {
  onOpenLegal: (doc: LegalDocKey) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#0F172A] text-slate-400 pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Brand Info (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="dark" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Presença digital sofisticada, profissional e acessível para negócios de beleza, estética e profissionais autônomos conquistarem clientes todos os dias.
            </p>
            <div className="text-xs text-slate-500">
              Belo Horizonte / MG • Atendimento em todo o Brasil
            </div>
          </div>

          {/* Quick Navigation (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Modelos</a>
              </li>
              <li>
                <a href="#pacotes" className="hover:text-white transition-colors">Pacotes</a>
              </li>
              <li>
                <a href="#crm" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">CRM</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Atendimento Direto
            </h4>
            
            <a
              href={getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
            >
              <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.74 14.12c-.24.68-1.4 1.31-1.94 1.39-.51.08-1.18.11-1.92-.13-.45-.15-1.04-.34-1.8-.67-3.19-1.39-5.26-4.63-5.42-4.84-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4 0.85-.4.21 0 .43 0 .61.01.2 0 .46-.07.72.54.26.63.89 2.17.97 2.33.08.16.13.35.03.56-.1.21-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.33.32-.14.64.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.82-.96 1.04-1.28.21-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/>
              </svg>
              <span>Falar no WhatsApp</span>
            </a>

            <div>
              <div className="text-xs text-slate-400 mb-2">Siga nossas redes sociais:</div>
              <div className="flex items-center gap-2">
                {/* Instagram (pink hover) */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#E1306C] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram da GR Presença Digital"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#2563EB] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook da GR Presença Digital"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://br.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Pinterest da GR Presença Digital"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 0 0-4.33 23.17c-.06-.98-.01-2.14.25-3.14l.87-3.69s-.22-.44-.22-1.09c0-1.02.59-1.78 1.33-1.78.63 0 .93.47.93 1.04 0 .63-.4 1.58-.61 2.45-.17.72.36 1.3 1.07 1.3 1.28 0 2.27-1.35 2.27-3.3 0-1.73-1.24-2.94-3.02-2.94-2.06 0-3.27 1.55-3.27 3.15 0 .62.24 1.29.54 1.65.06.07.07.13.05.2-.06.24-.2 1-.23 1.14-.04.16-.13.19-.3.11-1.12-.52-1.82-2.16-1.82-3.48 0-2.83 2.06-5.43 5.95-5.43 3.13 0 5.56 2.23 5.56 5.21 0 3.11-1.96 5.61-4.68 5.61-.91 0-1.77-.47-2.06-1.03l-.56 2.14c-.2.77-.75 1.74-1.12 2.33A12 12 0 1 0 12 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Legal & LGPD Links Area (Requirement: remove cards, leave clean links) */}
        <div className="py-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Conformidade & LGPD (Lei nº 13.709/2018)
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <button
              type="button"
              onClick={() => onOpenLegal('privacidade')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('termos')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('cookies')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Política de Cookies
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('lgpd')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Proteção de Dados & LGPD
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 GR Presença Digital. Todos os direitos reservados.</p>
          <p>Feito para pequenos negócios e profissionais brilharem na internet.</p>
        </div>

      </div>
    </footer>
  );
};
