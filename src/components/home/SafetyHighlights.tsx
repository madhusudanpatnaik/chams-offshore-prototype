import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface SafetyHighlightsProps {
  onLearnMore: () => void;
}

export const SafetyHighlights: React.FC<SafetyHighlightsProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>HSE & Quality Culture</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading leading-tight">
              Uncompromised Safety & <span className="gold-gradient-text">Class QA/QC</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At CHAMS Offshore Engineering, health, safety, and environmental stewardship are the bedrock of our operational execution. Our zero-harm mandate protects personnel across all fabrication yards, offshore rigs, and riding squad operations.
            </p>

            {/* Core Protocols */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">ISO 45001 & ISO 9001 Certified Quality Systems</p>
                  <p className="text-xs text-slate-400">Integrated safety risk assessments (JSA) and daily toolbox talks for all hot work.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">Class Surveyor Sign-off Guarantee (DNV / ABS / Lloyd's)</p>
                  <p className="text-xs text-slate-400">Full material traceability, NDT testing (UT, MPI, RT), and pressure test records.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">BOSIET & OPITO Certified Offshore Personnel</p>
                  <p className="text-xs text-slate-400">All engineers and welders possess valid offshore survival credentials.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gold-metallic hover:opacity-90 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full HSE & QA Manual</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Visual Card Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 bg-slate-900/90 border border-amber-500/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-6"
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div>
                <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  CHAMS HSE DASHBOARD
                </p>
                <h3 className="text-xl font-bold text-white font-heading mt-1">
                  Quality & Accreditation Standards
                </h3>
              </div>
              <Award className="w-10 h-10 text-amber-400" />
            </div>

            {/* Certification Badges Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                <FileCheck className="w-6 h-6 text-emerald-400" />
                <p className="text-sm font-bold text-white">ISO 9001:2015</p>
                <p className="text-[11px] text-slate-400">Quality Management System</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                <ShieldCheck className="w-6 h-6 text-sky-400" />
                <p className="text-sm font-bold text-white">ISO 45001:2018</p>
                <p className="text-[11px] text-slate-400">Occupational Health & Safety</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                <Award className="w-6 h-6 text-amber-400" />
                <p className="text-sm font-bold text-white">DNV & ABS Approved</p>
                <p className="text-[11px] text-slate-400">Hull Structural & Piping WPQ</p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <p className="text-sm font-bold text-white">bizSAFE STAR</p>
                <p className="text-[11px] text-slate-400">MOM Singapore Standard</p>
              </div>
            </div>

            {/* Live Safety Counter */}
            <div className="bg-gradient-to-r from-emerald-950 to-slate-950 border border-emerald-500/40 p-5 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  CURRENT ACCIDENT-FREE MILESTONE
                </p>
                <p className="text-2xl font-black text-white font-heading mt-0.5">
                  3,500,000 Safe Hours
                </p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-full border border-emerald-500/40">
                100% Zero-Harm
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
