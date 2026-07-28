import React from 'react';
import { motion } from 'motion/react';
import { GlowBadge } from '../ui/GlowBadge';
import { SpotlightCard } from '../ui/SpotlightCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  Anchor,
  Sparkles,
  Zap,
  Building2,
  PhoneCall
} from 'lucide-react';

interface HeroVideoProps {
  onExploreServices: () => void;
  onOpenMap: () => void;
  onOpenQuotation: () => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  onExploreServices,
  onOpenMap,
  onOpenQuotation
}) => {
  return (
    <div className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1920&auto=format&fit=crop"
          alt="Chams Offshore Engineering Tuas Yard"
          wrapperClassName="w-full h-full"
          className="w-full h-full object-cover scale-105 filter brightness-60 contrast-110"
        />

        {/* High-Tech Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none z-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.15) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Dark Navy Gradient Overlay Filters */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/80 z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl space-y-6"
        >
          {/* Top Pill Badge */}
          <GlowBadge variant="gold" icon={<Sparkles className="w-3.5 h-3.5 text-amber-400" />}>
            Singapore Premier Offshore & Marine Engineering Partner
          </GlowBadge>

          {/* Main Title & Tagline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight leading-[1.08]">
            CHAMS <span className="gold-gradient-text">OFFSHORE</span> ENGINEERING
          </h1>

          <p className="text-lg sm:text-2xl font-bold tracking-widest text-amber-300/90 font-heading uppercase">
            BUILDING OFFSHORE. POWERING TOMORROW.
          </p>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
            Delivering turnkey structural module fabrication, high-pressure piping, 24/7 anchorage riding squads, and class-certified marine machinery overhauls across the Asia-Pacific maritime sector.
          </p>

          {/* Key Differentiator Cards with SpotlightCard effect */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-2xl">
            <SpotlightCard className="p-3 bg-slate-950/80 border-slate-800 backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">DNV / ABS Certified</p>
                  <p className="text-[10px] text-slate-400">AWS 6G/6GR Welders</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-3 bg-slate-950/80 border-slate-800 backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">24/7 Riding Squads</p>
                  <p className="text-[10px] text-slate-400">Singapore Anchorage</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-3 bg-slate-950/80 border-slate-800 backdrop-blur-xl col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2.5">
                <Anchor className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Turnkey Yard</p>
                  <p className="text-[10px] text-slate-400">Tuas South Yard, SG</p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenQuotation}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gold-metallic bg-gold-metallic-hover shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Request Fast RFQ / Quotation</span>
            </button>

            <button
              onClick={onExploreServices}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 shadow-xl backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Explore Engineering Services</span>
              <ArrowRight className="w-4 h-4 text-amber-400 ml-1" />
            </button>

            <button
              onClick={onOpenMap}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-400 shadow-xl backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Interactive Site Map</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

