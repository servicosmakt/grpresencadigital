import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Geometric Interconnected GR Monogram Icon */}
      <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? "#FFFFFF" : "#14213D"} />
              <stop offset="100%" stopColor={isDark ? "#93C5FD" : "#2563EB"} />
            </linearGradient>
            <linearGradient id="grAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {/* Stylized Modern GR Interconnected Mark */}
          {/* G outline & curve */}
          <path
            d="M 44 26 C 28 26 18 36 18 50 C 18 64 28 74 44 74 C 54 74 60 68 62 60 L 44 60 L 44 50 L 72 50 C 72 68 58 84 44 84 C 22 84 8 68 8 50 C 8 32 22 16 44 16 C 56 16 66 21 72 29 L 62 38 C 58 31 52 26 44 26 Z"
            fill={isDark ? "#FFFFFF" : "#14213D"}
          />
          {/* R flow loop and diagonal kick */}
          <path
            d="M 58 18 L 82 18 C 91 18 96 23 96 32 C 96 40 91 44 84 46 L 96 82 L 83 82 L 73 48 L 70 48 L 70 82 L 58 82 L 58 18 Z M 70 30 L 70 39 L 81 39 C 84 39 86 37 86 34.5 C 86 32 84 30 81 30 L 70 30 Z"
            fill={isDark ? "#60A5FA" : "#2563EB"}
          />
          {/* Micro dynamic accent dot */}
          <circle cx="58" cy="50" r="3.5" fill={isDark ? "#93C5FD" : "#3B82F6"} />
        </svg>
      </div>

      {/* Typography: PRESENÇA DIGITAL */}
      <div className="flex flex-col tracking-tight leading-none">
        <span
          className={`text-[15px] font-bold tracking-[0.14em] uppercase font-['Poppins'] ${
            isDark ? 'text-white' : 'text-[#14213D]'
          }`}
        >
          PRESENÇA
        </span>
        <span
          className={`text-[12px] font-semibold tracking-[0.24em] uppercase font-['Poppins'] mt-0.5 ${
            isDark ? 'text-blue-300' : 'text-[#2563EB]'
          }`}
        >
          DIGITAL
        </span>
      </div>
    </div>
  );
};
