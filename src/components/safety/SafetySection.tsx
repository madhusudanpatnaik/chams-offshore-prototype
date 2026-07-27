import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, ShieldAlert, HeartPulse } from 'lucide-react';

export const SafetySection: React.FC = () => {
  return (
    <div className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Health, Safety & Environment</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Safety Culture & <span className="gold-gradient-text">Quality Assurance</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Safety and Quality are non-negotiable at CHAMS Offshore Engineering. Our zero-harm policy ensures that every employee, contractor, and client representative returns home safely at the end of every shift.
          </p>
        </motion.div>

        {/* Milestone Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-emerald-500/40 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              OFFICIAL HSE PERFORMANCE MILESTONE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              3,500,000 Safe Hours Without LTI
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              Maintained across all Singapore fabrication yard operations, offshore riding squad deployments, and deepwater rig maintenance projects over the past 5 consecutive years.
            </p>
          </div>

          <div className="shrink-0 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center">
            <span className="text-3xl font-black text-emerald-400 font-heading">0.00</span>
            <p className="text-[10px] font-bold text-slate-300 uppercase mt-1">Lost Time Injury Rate (LTIR)</p>
          </div>
        </motion.div>

        {/* 5 Safety Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl inline-block">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Mandatory Stop Work Authority</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every worker on a CHAMS job site possesses unconditional authority to halt operations immediately if an unsafe condition or hazard is identified.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl inline-block">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Job Safety Analysis (JSA)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prior to initiating any hot work, confined space entry, or heavy lifting, a comprehensive JSA and Permit-To-Work (PTW) are formally verified.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl inline-block">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Occupational Health & Care</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Regular health surveillance, gas safety monitoring, noise protection, and heat stress prevention protocols protect our offshore teams.
            </p>
          </div>

        </motion.div>

        {/* QA/QC Procedures & Class Approvals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900 border border-amber-500/30 p-8 rounded-3xl space-y-6"
        >
          <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-400" />
            <span>Class Approved QA/QC Procedures</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
            <div className="flex items-start gap-2.5 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Full Material Traceability (EN 10204 3.1 / 3.2)</p>
                <p className="text-slate-400 mt-0.5">Every steel plate, pipe spool, and fitting is heat-number logged with mill test certificates.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">ASNT Level II / III Non-Destructive Testing (NDT)</p>
                <p className="text-slate-400 mt-0.5">Ultrasonic (UT), Magnetic Particle (MPI), Dye Penetrant (DPT), and Radiographic (RT) testing.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">AWS D1.1 & ASME IX Welding Performance Qualification</p>
                <p className="text-slate-400 mt-0.5">Qualified WPS/PQR for carbon steel, stainless steel, super duplex, and CuNi alloys.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Calibrated Pressure Testing & NAS 6 Oil Flushing</p>
                <p className="text-slate-400 mt-0.5">Hydrostatic test logs up to 15,000 PSI certified with digital pressure recorders.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
