import React, { useState, useEffect } from 'react';
import { Waves, Wind, Compass, ShieldCheck, Activity, Eye, Zap } from 'lucide-react';

export const MaritimeTelemetryBar: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC+8');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-950 border-b border-slate-900 text-slate-400 text-[11px] font-mono py-1.5 px-4 overflow-x-auto hidden sm:block select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap">
        
        {/* Left: Yard Telemetry Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>TUAS YARD STATUS:</span>
            <span className="text-emerald-400">NORMAL OPERATIONAL</span>
          </div>

          <span className="text-slate-800">|</span>

          <div className="flex items-center gap-1.5 text-slate-300">
            <Waves className="w-3.5 h-3.5 text-sky-400" />
            <span>SINGAPORE STRAIT SWELL: 0.6m (STABLE)</span>
          </div>

          <span className="text-slate-800">|</span>

          <div className="flex items-center gap-1.5 text-slate-300">
            <Wind className="w-3.5 h-3.5 text-sky-400" />
            <span>WIND: 12 KTS NE</span>
          </div>
        </div>

        {/* Right: Real-time Clock & HSE Index */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>YARD LOAD CAPACITY: <strong className="text-amber-400">78%</strong></span>
          </div>

          <span className="text-slate-800">|</span>

          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LTI RECORD: 3.5M HRS</span>
          </div>

          <span className="text-slate-800">|</span>

          <span className="text-slate-400">{time || '2026-07-25 10:00:00 UTC+8'}</span>
        </div>

      </div>
    </div>
  );
};
