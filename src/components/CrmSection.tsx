import React from 'react';
import { CRM_VIP_GROUP_URL, getWhatsAppUrl } from '../data/siteData.ts';

export const CrmSection: React.FC = () => {
  return (
    <section
      id="crm"
      className="py-14 md:py-20 bg-[#0B132B] text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-semibold tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>EM BREVE • LANÇAMENTO EXCLUSIVO</span>
        </div>

        {/* 3-Column / Editorial Grid Matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Heading, Copy & Action (col-span-4) */}
          <div className="lg:col-span-4 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight mb-3">
              Gestão inteligente para o seu relacionamento.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2.5">
              Nosso CRM ajuda você a organizar contatos, acompanhar leads e transformar oportunidades em clientes frequentes.
            </p>

            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed mb-5">
              Feito sob medida para Nail Designers, Lash Designers, Barbeiros, Especialistas em Estética e autônomos que buscam praticidade.
            </p>

            <div className="space-y-2">
              <a
                href={CRM_VIP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.74 14.12c-.24.68-1.4 1.31-1.94 1.39-.51.08-1.18.11-1.92-.13-.45-.15-1.04-.34-1.8-.67-3.19-1.39-5.26-4.63-5.42-4.84-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4 0.85-.4.21 0 .43 0 .61.01.2 0 .46-.07.72.54.26.63.89 2.17.97 2.33.08.16.13.35.03.56-.1.21-.16.35-.31.53-.16.18-.33.4-.47.54-.16.15-.33.32-.14.64.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.13.7-.08.19-.21.82-.96 1.04-1.28.21-.32.43-.27.72-.16.29.11 1.85.87 2.17 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.45z"/>
                </svg>
                <span>Quero entrar no grupo VIP</span>
                <span>→</span>
              </a>

              <div className="text-[10px] text-slate-400 flex items-center gap-1 pt-0.5">
                <span>🔒</span>
                <span>Vagas limitadas no grupo de lançamento.</span>
              </div>
            </div>
          </div>

          {/* Center Column: High-Tech Laptop Dashboard Mockup - Scaled Down (col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-[390px] bg-slate-950 rounded-xl p-2 shadow-2xl border border-slate-800">
              
              {/* Laptop Top Browser Bar */}
              <div className="bg-slate-900 rounded-t-lg px-2.5 py-1 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[9px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded">
                  app.grcrm.com.br
                </span>
                <span className="text-[8px] font-semibold text-emerald-400">Online</span>
              </div>

              {/* CRM App Dashboard Body */}
              <div className="bg-slate-900/90 rounded-b-lg p-2.5 text-left grid grid-cols-12 gap-2 min-h-[210px]">
                
                {/* Mini CRM Sidebar */}
                <div className="col-span-3 border-r border-slate-800 pr-1.5 space-y-1.5 text-[9px]">
                  <div className="font-bold text-white mb-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded bg-blue-500" />
                    <span>GR CRM</span>
                  </div>
                  <div className="bg-blue-600/20 text-blue-300 font-semibold p-1 rounded flex items-center gap-1">
                    <span>👥</span>
                    <span className="hidden sm:inline">Clientes</span>
                  </div>
                  <div className="text-slate-400 p-1 rounded flex items-center gap-1">
                    <span>📅</span>
                    <span className="hidden sm:inline">Agenda</span>
                  </div>
                  <div className="text-slate-400 p-1 rounded flex items-center gap-1">
                    <span>💰</span>
                    <span className="hidden sm:inline">Finanças</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-9 space-y-2">
                  
                  {/* Metric Top Bar */}
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60">
                      <div className="text-[8px] text-slate-400">Clientes</div>
                      <div className="text-xs font-bold text-white">42 ativos</div>
                    </div>
                    <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60">
                      <div className="text-[8px] text-slate-400">Faturamento</div>
                      <div className="text-xs font-bold text-emerald-400">R$ 5.840</div>
                    </div>
                    <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/60">
                      <div className="text-[8px] text-slate-400">Retorno</div>
                      <div className="text-xs font-bold text-blue-400">89%</div>
                    </div>
                  </div>

                  {/* Client Table Preview */}
                  <div className="bg-slate-800/60 rounded p-1.5 border border-slate-700/50">
                    <div className="text-[9px] font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span>Últimos Agendamentos</span>
                      <span className="text-[8px] text-blue-400">+ Novo</span>
                    </div>

                    <div className="space-y-1 text-[8px]">
                      <div className="flex items-center justify-between p-1 rounded bg-slate-900/60">
                        <span className="font-semibold text-slate-200">Mariana Costa</span>
                        <span className="text-slate-400">Lash</span>
                        <span className="text-emerald-400 font-bold">Hoje 14h</span>
                      </div>
                      <div className="flex items-center justify-between p-1 rounded bg-slate-900/60">
                        <span className="font-semibold text-slate-200">Juliana Silva</span>
                        <span className="text-slate-400">Nail Art</span>
                        <span className="text-blue-400 font-bold">Hoje 16h</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Pill */}
                  <div className="p-1.5 bg-blue-900/30 border border-blue-500/20 rounded flex items-center justify-between text-[8px]">
                    <span className="text-blue-200">💬 Lembrete via WhatsApp</span>
                    <span className="bg-emerald-500 text-slate-950 font-bold px-1 py-0.2 rounded">
                      1 Toque
                    </span>
                  </div>

                </div>

              </div>

              {/* Laptop bottom bar */}
              <div className="w-[104%] -ml-[2%] h-1.5 bg-slate-800 rounded-b-lg border-t border-slate-700" />
            </div>
          </div>

          {/* Right Column: 4 Strategic Feature Bullets - Compact (col-span-3) */}
          <div className="lg:col-span-3 text-left space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white">Organize contatos</h3>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">Histórico de clientes e procedimentos realizados.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white">Acompanhe leads</h3>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">Saiba quem te procurou e quem agendou.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white">Melhore o atendimento</h3>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">Mensagens prontas para confirmação de horário.</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16V8"/>
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-white">Mais conversões</h3>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">Controle financeiro e calculadora de preços.</p>
            </div>
          </div>

        </div>

        {/* 3 Bonus Cards Included - Compact */}
        <div className="mt-10 pt-8 border-t border-slate-800/80">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            🎁 BÔNUS EXCLUSIVOS INCLUSOS NO LANÇAMENTO:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider block mb-1">Bônus 01</span>
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                <span>💬</span>
                <span>Mensagens Prontas</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Confirmação de agendamentos e lembretes para enviar em 1 toque no WhatsApp.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">Bônus 02</span>
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                <span>💰</span>
                <span>Controle Financeiro</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Saiba quanto faturou no dia, semana e mês com controle simplificado.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider block mb-1">Bônus 03</span>
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                <span>🧮</span>
                <span>Calculadora de Preços</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Descubra quanto cobrar por cada procedimento calculando seus custos e margem.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
