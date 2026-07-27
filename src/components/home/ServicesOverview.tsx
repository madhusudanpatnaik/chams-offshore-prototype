import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { handleImageError } from '../../lib/imageUtils';
import { SpotlightCard } from '../ui/SpotlightCard';
import { OptimizedImage } from '../ui/OptimizedImage';
import {
  Building2,
  Wrench,
  Cog,
  Zap,
  Hammer,
  Anchor,
  Users,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileSpreadsheet,
  Search,
  Filter,
  X
} from 'lucide-react';

interface ServicesOverviewProps {
  onSelectService: (slug: string) => void;
  onOpenQuotation: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectService,
  onOpenQuotation
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'fabrication', label: 'Structural & Modules' },
    { id: 'piping', label: 'Piping & Hydraulics' },
    { id: 'mechanical', label: 'Machinery Overhaul' },
    { id: 'voyage', label: 'Anchorage & Voyage' }
  ];

  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-amber-400" />,
    Wrench: <Wrench className="w-6 h-6 text-amber-400" />,
    Cog: <Cog className="w-6 h-6 text-amber-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
    Hammer: <Hammer className="w-6 h-6 text-amber-400" />,
    Anchor: <Anchor className="w-6 h-6 text-amber-400" />,
    Users: <Users className="w-6 h-6 text-amber-400" />
  };

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedCategory === 'all') return matchesSearch;
    if (selectedCategory === 'fabrication') return matchesSearch && service.slug.includes('structural');
    if (selectedCategory === 'piping') return matchesSearch && service.slug.includes('piping');
    if (selectedCategory === 'mechanical') return matchesSearch && (service.slug.includes('machinery') || service.slug.includes('electrical'));
    if (selectedCategory === 'voyage') return matchesSearch && (service.slug.includes('anchorage') || service.slug.includes('manpower'));
    return matchesSearch;
  });

  return (
    <section id="services-overview" className="py-20 bg-slate-950 text-slate-100 relative">
      {/* Background Accent Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>Core Engineering Division</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Offshore & Marine <span className="gold-gradient-text">Engineering Services</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Engineered to international classification standards (DNV, ABS, Lloyd’s Register). We provide specialized turn-key solutions for offshore platforms, FPSOs, marine vessels, and industrial yards.
          </p>
        </motion.div>

        {/* Search & Category Filtering Bar */}
        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl backdrop-blur-md space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search capabilities (e.g. DNV welding, spool...)"
                className="w-full pl-10 pr-9 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500 text-slate-950 border border-amber-400 shadow-md'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <SpotlightCard className="group h-full bg-slate-900/90 border-slate-800 flex flex-col justify-between">
                  <div>
                    {/* Image & Overlay */}
                    <div className="relative h-52 overflow-hidden rounded-t-2xl">
                      <OptimizedImage
                        src={service.heroImage}
                        alt={service.title}
                        wrapperClassName="w-full h-full"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                      
                      {/* Category Index & Icon */}
                      <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 p-2.5 rounded-xl shadow-lg">
                        {iconMap[service.iconName] || <Wrench className="w-6 h-6 text-amber-400" />}
                      </div>

                      <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md">
                        SVC-0{index + 1}
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-lg font-bold text-white font-heading leading-snug group-hover:text-amber-300 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>

                      {/* Highlights Bullet Checklist */}
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                          Key Capabilities:
                        </p>
                        {service.capabilities.slice(0, 3).map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{cap}</span>
                          </div>
                        ))}
                      </div>

                      {/* Standards Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.standards.map((std, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700/80"
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer CTAs */}
                  <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectService(service.slug)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
                    >
                      <span>Technical Specs & Scope</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={onOpenQuotation}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 transition-colors cursor-pointer"
                    >
                      Request RFQ
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-slate-900/50 border border-slate-800 rounded-2xl">
            <p className="text-sm font-semibold text-slate-400">No capabilities match your search query "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-amber-400 hover:underline font-bold"
            >
              Reset Search & Category Filters
            </button>
          </div>
        )}

        {/* Bottom Quotation CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white font-heading">
              Require Custom Technical Specifications or Emergency Riding Squads?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Our engineering estimation team provides rapid turn-around for work scope pricing, MOB feasibility, and classification compliance.
            </p>
          </div>

          <button
            onClick={onOpenQuotation}
            className="shrink-0 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gold-metallic bg-gold-metallic-hover shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Request Official Quotation</span>
          </button>
        </div>
      </div>
    </section>
  );
};
