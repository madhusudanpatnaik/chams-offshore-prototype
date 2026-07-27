import React from 'react';
import { motion } from 'motion/react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Shield, Anchor, Award, Clock } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: <Shield className="w-7 h-7 text-amber-400" />,
      number: '3,500,000+',
      label: 'Safe Man-Hours',
      sublabel: 'Zero Lost Time Injury (LTI) Policy'
    },
    {
      icon: <Anchor className="w-7 h-7 text-amber-400" />,
      number: '140+',
      label: 'Offshore Modules & Projects',
      sublabel: 'Topside Skids, Jackets, & Piping'
    },
    {
      icon: <Award className="w-7 h-7 text-amber-400" />,
      number: '100%',
      label: 'Class Approved QA/QC',
      sublabel: 'DNV • ABS • Bureau Veritas • AWS'
    },
    {
      icon: <Clock className="w-7 h-7 text-amber-400" />,
      number: '24/7/365',
      label: 'Rapid Riding Squads',
      sublabel: 'Singapore Anchorage & OPL Mobilization'
    }
  ];

  return (
    <section className="bg-slate-950 border-y border-amber-500/20 py-12 relative overflow-hidden">
      {/* 21st.dev background grid accent */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.2), transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-6 bg-slate-900/80 border-slate-800/80 backdrop-blur-xl h-full flex flex-col items-center text-center space-y-3 group">
                <div className="p-3 bg-slate-950 rounded-2xl border border-amber-500/30 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/10">
                  {stat.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-heading gold-gradient-text tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-sm font-bold text-slate-100">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  {stat.sublabel}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
