import React from 'react';
import { Logo } from './Logo';
import { servicesData } from '../../data/servicesData';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onSelectService: (slug: string) => void;
  onOpenPortal: () => void;
  onOpenQuotation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onSelectService,
  onOpenPortal,
  onOpenQuotation
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    scrollToTop();
  };

  const handleSvc = (slug: string) => {
    setActiveTab('services');
    onSelectService(slug);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-amber-500/20 pt-16 pb-8 relative overflow-hidden">
      
      {/* Footer Top Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div onClick={() => handleNav('home')}>
              <Logo variant="full" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              CHAMS Offshore Engineering Pte. Ltd. is Singapore’s premier marine engineering specialist delivering heavy module fabrication, process piping, 24/7 riding squad anchorage support, and class-certified machinery overhauls.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[10px] font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-amber-400 font-semibold">
                DNV Approved
              </span>
              <span className="text-[10px] font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-amber-400 font-semibold">
                ABS Class Certified
              </span>
              <span className="text-[10px] font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-emerald-400 font-semibold">
                ISO 45001 / 9001
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest font-heading">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors">
                  About CHAMS
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('safety')} className="hover:text-amber-300 transition-colors">
                  Safety & Quality
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('map')} className="hover:text-amber-300 transition-colors">
                  Interactive Site Map
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-amber-300 transition-colors">
                  Careers & Recruitment
                </button>
              </li>
              <li>
                <button onClick={onOpenPortal} className="hover:text-amber-300 transition-colors text-amber-400 font-semibold">
                  Client Portal Login
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Hierarchy (SRS Exact match) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest font-heading">
              Engineering Services
            </p>
            <ul className="space-y-2 text-xs">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => handleSvc(svc.slug)}
                    className="hover:text-amber-300 transition-colors text-left line-clamp-1"
                  >
                    • {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest font-heading">
              Singapore Yard HQ
            </p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>12 Tuas South Street 5, Singapore 637000</span>
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-bold font-mono">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+6568619000">+65 6861 9000 (24/7)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:enquiries@chamsconstruction.com" className="hover:underline">
                  enquiries@chamsconstruction.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuotation}
                className="w-full py-2 bg-gold-metallic text-slate-950 font-bold text-xs rounded-lg shadow hover:opacity-90 transition-opacity"
              >
                Request Commercial Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CHAMS Offshore Engineering Pte. Ltd. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>3,500,000 LTI-Free Manhours</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
