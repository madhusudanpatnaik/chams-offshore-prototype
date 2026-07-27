import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, FileText, Anchor, ShieldAlert, X, ChevronUp, MessageSquare, Zap } from 'lucide-react';

interface FloatingEmergencyWidgetProps {
  onOpenQuotation: () => void;
  onOpenPortal: () => void;
}

export const FloatingEmergencyWidget: React.FC<FloatingEmergencyWidgetProps> = ({
  onOpenQuotation,
  onOpenPortal
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 bg-slate-950/95 border border-amber-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl space-y-3"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold font-mono text-amber-400 tracking-wider uppercase">
                  24/7 Riding Squad Ready
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Immediate offshore mobilization for anchorage repairs, high-pressure line leaks, and voyage emergency engineering support across Singapore Straits.
            </p>

            {/* Actions Grid */}
            <div className="space-y-2">
              <a
                href="tel:+6568619000"
                className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs transition-all"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call Emergency Hotline</span>
                </div>
                <span className="font-mono text-[11px]">+65 6861 9000</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenQuotation();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Request Urgent RFQ</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">2h Response</span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenPortal();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs transition-all text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Client Live Telemetry</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Secure Access</span>
              </button>
            </div>

            <div className="pt-1 text-[10px] text-slate-500 text-center font-mono">
              Class Approved: DNV • ABS • Bureau Veritas • AWS
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-slate-900 border border-amber-500/50 hover:border-amber-400 text-amber-400 rounded-full shadow-2xl backdrop-blur-md cursor-pointer group transition-all"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
        <Zap className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold text-white tracking-wide">24/7 Riding Squad Hotline</span>
        <ChevronUp className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
    </div>
  );
};
