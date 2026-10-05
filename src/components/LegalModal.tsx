import React, { useState, useEffect } from 'react';
import { LEGAL_DOCS, LegalDocKey } from '../data/siteData.ts';

interface LegalModalProps {
  initialDoc?: LegalDocKey;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  initialDoc = 'privacidade',
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<LegalDocKey>(initialDoc);

  useEffect(() => {
    setActiveTab(initialDoc);
  }, [initialDoc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const doc = LEGAL_DOCS[activeTab] || LEGAL_DOCS.privacidade;

  const tabs: { key: LegalDocKey; label: string }[] = [
    { key: 'privacidade', label: 'Política de Privacidade' },
    { key: 'termos', label: 'Termos de Uso' },
    { key: 'cookies', label: 'Política de Cookies' },
    { key: 'lgpd', label: 'Proteção de Dados & LGPD' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 relative text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block">
              {doc.badge}
            </span>
            <h2 id="legal-modal-title" className="text-xl sm:text-2xl font-bold text-[#14213D]">
              {doc.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Fechar janela"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigator */}
        <div className="flex items-center gap-1 px-6 pt-3 pb-2 bg-slate-50 border-b border-slate-100 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.key
                  ? 'bg-white text-[#2563EB] shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Document Content Scrollable Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-bold text-slate-900 text-base">
                {section.heading}
              </h3>
              <p>{section.content}</p>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
            Última atualização: 2026 • GR Presença Digital • Belo Horizonte / MG
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#14213D] text-white text-xs font-semibold hover:bg-slate-900 transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
