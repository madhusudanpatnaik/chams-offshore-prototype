import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Building2 } from 'lucide-react';
import { handleImageError } from '../../lib/imageUtils';
import { OptimizedImage } from '../ui/OptimizedImage';

export const AboutSection: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Overview</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            About CHAMS <span className="gold-gradient-text">Offshore Engineering</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Headquartered in Singapore, CHAMS Offshore Engineering Pte. Ltd. is a premier marine and offshore engineering contractor delivering high-yield structural fabrication, high-pressure piping, machinery overhauls, and 24/7 riding squad support across Southeast Asia.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 relative overflow-hidden">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl inline-block">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Our Mission</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To provide world-class, class-approved offshore engineering services through innovative technical execution, absolute zero-harm safety standards, and transparent project delivery that empowers global marine energy operators.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 relative overflow-hidden">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl inline-block">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Our Vision</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To be the most trusted offshore engineering partner in Asia-Pacific, recognized for technical excellence, rapid riding squad responsiveness, and unyielding commitment to environmental sustainability.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white font-heading">
              CHAMS <span className="gold-gradient-text">Core Values</span>
            </h3>
            <p className="text-xs text-slate-400">Principles that guide our engineers, welders, and yard personnel daily.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-2">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
              <h4 className="text-base font-bold text-white">Safety First</h4>
              <p className="text-xs text-slate-400">Zero-harm culture with mandatory stop-work authority for every crew member.</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-2">
              <Award className="w-8 h-8 text-amber-400" />
              <h4 className="text-base font-bold text-white">Engineering Quality</h4>
              <p className="text-xs text-slate-400">100% compliance with DNV, ABS, Lloyd’s Register and AWS welding codes.</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-2">
              <CheckCircle2 className="w-8 h-8 text-amber-400" />
              <h4 className="text-base font-bold text-white">Agility & Speed</h4>
              <p className="text-xs text-slate-400">Rapid 24/7 riding squad deployment for anchorage and voyage emergencies.</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl space-y-2">
              <Building2 className="w-8 h-8 text-amber-400" />
              <h4 className="text-base font-bold text-white">Integrity & Trust</h4>
              <p className="text-xs text-slate-400">Transparent reporting, real-time client portal tracking, and honest pricing.</p>
            </div>
          </div>
        </motion.div>

        {/* Yard Infrastructure Showcase */}
        <div className="bg-slate-900 border border-amber-500/30 p-8 sm:p-12 rounded-3xl space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                TUA SOUTH YARD INFRASTRUCTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                State-of-the-Art Offshore Fabrication Base
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Spanning 25,000 square meters in Tuas South, Singapore, our yard facility is equipped with automated CNC plasma cutters, 800-ton hydraulic press brakes, submerged arc welding bays, and direct quayside access for barge loadouts.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>250-meter heavy-duty quayside depth accommodating deep-draft offshore vessels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Covered fabrication halls with dual 50-ton overhead gantry cranes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Class-approved NDT testing bunker & high-pressure hydrostatic test bay</span>
                </li>
              </ul>
            </div>

            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop"
                alt="Tuas Yard"
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
