import React from 'react';

interface GlowBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'gold' | 'emerald' | 'amber' | 'sky';
  className?: string;
  pulse?: boolean;
}

export const GlowBadge: React.FC<GlowBadgeProps> = ({
  children,
  icon,
  variant = 'gold',
  className = '',
  pulse = true
}) => {
  const variantStyles = {
    gold: 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-amber-500/10',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/10',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-amber-500/10',
    sky: 'bg-sky-500/10 border-sky-500/30 text-sky-400 shadow-sky-500/10'
  };

  const dotStyles = {
    gold: 'bg-amber-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    sky: 'bg-sky-400'
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold font-mono tracking-wider uppercase shadow-md backdrop-blur-md transition-all ${variantStyles[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotStyles[variant]}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotStyles[variant]}`} />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
