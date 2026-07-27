import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { GlowBadge } from '../ui/GlowBadge';
import { SpotlightCard } from '../ui/SpotlightCard';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Anchor,
  Sparkles,
  Zap
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // High quality offshore & marine engineering stock video
  const videoSourceUrl = "https://assets.mixkit.co/videos/preview/mixkit-large-cargo-ship-in-the-middle-of-the-ocean-41525-large.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110 transition-transform duration-1000"
        >
          <source src={videoSourceUrl} type="video/mp4" />
        </video>

        {/* 21st.dev Style High-Tech Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none z-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.15) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Dark Navy Gradient Overlay Filters */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/80 z-1" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950 z-1" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
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
              onClick={onExploreServices}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gold-metallic bg-gold-metallic-hover shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Engineering Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenMap}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-400 shadow-xl backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Interactive Site Map</span>
            </button>

            <button
              onClick={onOpenQuotation}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-amber-300 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Quotation</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Video Overlay Controls Bottom-Right */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-full backdrop-blur-lg shadow-2xl">
        <div className="flex items-center gap-2 text-xs text-slate-300 border-r border-slate-800 pr-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] font-semibold text-amber-400">LIVE FEED // RECENT BUILDS</span>
        </div>

        <button
          onClick={togglePlay}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-200 hover:text-amber-400 transition-colors"
          title={isPlaying ? 'Pause Background Video' : 'Play Video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-200 hover:text-amber-400 transition-colors"
          title={isMuted ? 'Unmute Video Sound' : 'Mute Video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
