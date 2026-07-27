import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'symbol';
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  lightText = true
}) => {
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none group ${className}`}>
      {/* Metallic Gold Rig & Wave Emblem */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
        {/* Outer Metallic Gold Ring */}
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md transition-transform duration-300 group-hover:scale-105">
          <defs>
            <linearGradient id="goldGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF0B3" />
              <stop offset="30%" stopColor="#E5C158" />
              <stop offset="70%" stopColor="#C5A028" />
              <stop offset="100%" stopColor="#8A6B0E" />
            </linearGradient>
            <linearGradient id="navyWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#031B33" />
              <stop offset="50%" stopColor="#0B2A4A" />
              <stop offset="100%" stopColor="#011024" />
            </linearGradient>
          </defs>

          {/* Gold Ring Arc Top */}
          <path
            d="M 20 50 A 32 32 0 1 1 80 50"
            fill="none"
            stroke="url(#goldGradientLogo)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Offshore Derrick Tower */}
          <path
            d="M 50 16 L 38 65 L 62 65 Z"
            fill="none"
            stroke="url(#goldGradientLogo)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Derrick Crossbraces */}
          <line x1="43" y1="36" x2="57" y2="36" stroke="url(#goldGradientLogo)" strokeWidth="2.5" />
          <line x1="40" y1="50" x2="60" y2="50" stroke="url(#goldGradientLogo)" strokeWidth="2.5" />
          <line x1="43" y1="36" x2="57" y2="50" stroke="url(#goldGradientLogo)" strokeWidth="2" />
          <line x1="57" y1="36" x2="43" y2="50" stroke="url(#goldGradientLogo)" strokeWidth="2" />
          
          {/* Derrick Crown Beacon */}
          <circle cx="50" cy="14" r="2.5" fill="#FFE082" />

          {/* Ocean Waves at Base */}
          <path
            d="M 12 66 C 28 58, 38 72, 50 66 C 62 60, 72 72, 88 64 C 92 62, 94 65, 88 70 C 74 80, 62 68, 50 74 C 38 80, 24 68, 12 72 Z"
            fill="url(#navyWaveGradient)"
            stroke="url(#goldGradientLogo)"
            strokeWidth="1.5"
          />
          <path
            d="M 18 76 C 30 72, 40 82, 52 76 C 64 70, 76 80, 84 76"
            fill="none"
            stroke="url(#goldGradientLogo)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'symbol' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-1 tracking-wider">
            <span className={`font-black text-xl sm:text-2xl tracking-widest font-heading ${lightText ? 'text-white' : 'text-slate-900'}`}>
              CH
            </span>
            {/* Gold Delta Triangle A */}
            <span className="relative inline-flex items-center justify-center font-black text-xl sm:text-2xl text-amber-400 font-heading">
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 inline-block align-middle">
                <polygon points="12,2 22,22 2,22" />
                <polygon points="12,8 18,19 6,19" fill="#0B192C" />
              </svg>
            </span>
            <span className={`font-black text-xl sm:text-2xl tracking-widest font-heading ${lightText ? 'text-white' : 'text-slate-900'}`}>
              MS
            </span>
          </div>

          {variant === 'full' && (
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-amber-400 uppercase -mt-0.5">
                OFFSHORE ENGINEERING PTE. LTD.
              </span>
              <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.18em] text-slate-400 uppercase hidden sm:block">
                BUILDING OFFSHORE. POWERING TOMORROW.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
