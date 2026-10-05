import React from 'react';
import { Solution, getWhatsAppUrl } from '../data/siteData.ts';

interface SolutionModalProps {
  solution: Solution | null;
  onClose: () => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({ solution, onClose }) => {
  if (!solution) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <span className="inline-block px-2.5 py-1 text-xs font-semibold text-[#2563EB] bg-blue-50 rounded-md mb-3">
          {solution.tag}
        </span>

        <h3 className="text-2xl font-bold text-[#14213D] mb-2">
          {solution.title}
        </h3>

        <p className="text-sm font-medium text-slate-500 mb-4">
          {solution.subtitle}
        </p>

        <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
          <p>{solution.description}</p>
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
            <strong className="text-slate-900 block mb-1">Por que é importante:</strong>
            <p className="text-slate-700">{solution.importance}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href={getWhatsAppUrl('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#14213D] hover:bg-[#1E293B] text-white py-3 px-5 rounded-xl font-medium text-sm transition-colors text-center shadow"
          >
            <span>Quero essa solução no WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-medium text-sm text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
