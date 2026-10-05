import React from 'react';
import { getWhatsAppUrl } from '../data/siteData.ts';
import imgAboutWorkspace from '../assets/fundadora.webp.webp';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-14 md:py-20 bg-white border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern 2-Column Integrated Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          
          {/* Left Column: Studio Photo (col-span-5) */}
          <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 aspect-[4/3] lg:aspect-[4/4]">
              <img
                src={imgAboutWorkspace}
                alt="Espaço de Trabalho GR Presença Digital"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/75 via-transparent to-transparent" />
              
              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-blue-300 mb-0.5">
                  Fundadora & Estrategista
                </div>
                <div className="text-base font-bold">
                  Gleiciene Rocha
                </div>
              </div>
            </div>

            {/* Subtle floating trust badge */}
            <div className="absolute -top-2.5 -right-2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200 text-[10px] font-semibold text-slate-800 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Atendimento Direto</span>
            </div>
          </div>

          {/* Right Column: Story Copy & Mission + Integrated Stats Row (col-span-7) */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-2">
              SOBRE A GR
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#14213D] tracking-tight leading-tight mb-3">
              Presença digital sob medida para o seu momento.
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              <p>
                A <strong>GR Presença Digital</strong> nasceu da vontade de transformar negócios através da internet. Acreditamos que toda marca tem um grande potencial — e o digital é o caminho definitivo para fazê-lo chegar mais longe.
              </p>

              <p>
                Ajudamos profissionais autônomos e pequenos negócios do setor de beleza e estética a brilharem na internet com elegância, sem burocracia e com valores justos e acessíveis.
              </p>

              <p>
                Cuidamos de toda a estrutura digital — Google Perfil, SEO local, sites e links — facilitando o agendamento de horários e valorizando o seu trabalho artesanal.
              </p>
            </div>

            {/* New Compact Horizontal Cards Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs">🚀</span>
                  <span className="text-sm font-bold text-[#14213D] font-['Poppins']">+50 projetos</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">Estruturados e ativos no digital.</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs">🎯</span>
                  <span className="text-sm font-bold text-[#14213D] font-['Poppins']">100% foco</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">No resultado do seu negócio.</p>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs">🤝</span>
                  <span className="text-sm font-bold text-[#14213D] font-['Poppins']">Atendimento</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">Direto com a fundadora.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
