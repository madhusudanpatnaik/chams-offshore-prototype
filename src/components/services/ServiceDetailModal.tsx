import React from 'react';
import { servicesData } from '../../data/servicesData';
import { OptimizedImage } from '../ui/OptimizedImage';
import {
  X,
  CheckCircle2,
  FileText,
  Wrench,
  ShieldCheck,
  Building2,
  Cog,
  Zap,
  Hammer,
  Anchor,
  Users
} from 'lucide-react';

interface ServiceDetailModalProps {
  slug: string | null;
  onClose: () => void;
  onOpenQuotation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  slug,
  onClose,
  onOpenQuotation
}) => {
  if (!slug) return null;

  const service = servicesData.find(s => s.slug === slug) || servicesData[0];

  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-8 h-8 text-amber-400" />,
    Wrench: <Wrench className="w-8 h-8 text-amber-400" />,
    Cog: <Cog className="w-8 h-8 text-amber-400" />,
    Zap: <Zap className="w-8 h-8 text-amber-400" />,
    Hammer: <Hammer className="w-8 h-8 text-amber-400" />,
    Anchor: <Anchor className="w-8 h-8 text-amber-400" />,
    Users: <Users className="w-8 h-8 text-amber-400" />
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl my-8">
        
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer z-20 border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <OptimizedImage
            src={service.heroImage}
            alt={service.title}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />

          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
              {iconMap[service.iconName]}
              <span>OFFSHORE ENGINEERING DIVISION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Detail Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Overview Paragraph */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest font-heading">
              Division Scope & Engineering Overview
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Capabilities & Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Capabilities */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Technical Capabilities Checklist</span>
              </h4>
              <div className="space-y-2.5">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Equipment */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <Wrench className="w-5 h-5 text-amber-400" />
                <span>Specialized Fleet & Equipment</span>
              </h4>
              <div className="space-y-2.5">
                {service.keyEquipment.map((eq, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Image Gallery */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest font-heading">
              Field Execution Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.gallery.map((imgUrl, i) => (
                <div key={i} className="h-40 rounded-xl overflow-hidden border border-slate-800 group">
                  <OptimizedImage
                    src={imgUrl}
                    alt={`Gallery ${i}`}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Standards & Direct RFQ Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">Class Standards:</span>
              <div className="flex flex-wrap gap-1.5">
                {service.standards.map((std, i) => (
                  <span key={i} className="text-[10px] font-mono bg-slate-900 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-md">
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => { onClose(); onOpenQuotation(); }}
              className="w-full sm:w-auto px-6 py-3 bg-gold-metallic hover:opacity-90 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Enquire / Request Quote for {service.title}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
