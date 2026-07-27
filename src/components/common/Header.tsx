import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { MaritimeTelemetryBar } from './MaritimeTelemetryBar';
import { servicesData } from '../../data/servicesData';
import {
  ChevronDown,
  Phone,
  ShieldCheck,
  MapPin,
  UserCheck,
  Menu,
  X,
  FileText,
  Anchor,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectService: (serviceSlug: string) => void;
  onOpenPortal: () => void;
  onOpenQuotation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onSelectService,
  onOpenPortal,
  onOpenQuotation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (slug: string) => {
    setActiveTab('services');
    onSelectService(slug);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Live Maritime Telemetry Ticker Bar */}
      <MaritimeTelemetryBar />

      {/* Top Corporate Status Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Offshore Emergency: <a href="tel:+6568619000" className="hover:underline font-bold text-white">+65 6861 9000</a></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Singapore HQ & Tuas South Yard</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 bg-emerald-950/70 text-emerald-400 border border-emerald-800/50 px-2.5 py-0.5 rounded-full font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>3,500,000 LTI-Free Safe Hours</span>
            </div>
            <button
              onClick={onOpenPortal}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 font-medium transition-colors cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Client Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-3'
            : 'bg-gradient-to-b from-slate-950/90 to-slate-900/80 backdrop-blur-sm py-4 border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Company Brand Logo */}
          <div onClick={() => handleNavClick('home')}>
            <Logo variant="full" />
          </div>

          {/* Desktop Navigation Links with 21st.dev Sliding Pill */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800/80 backdrop-blur-md">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services', isDropdown: true },
              { id: 'safety', label: 'Safety & Quality' },
              { id: 'map', label: 'Interactive Map', icon: <MapPin className="w-3.5 h-3.5 text-amber-400 inline mr-1" /> },
              { id: 'careers', label: 'Careers' },
              { id: 'contact', label: 'Contact' }
            ].map((nav) => {
              const isActive = activeTab === nav.id;

              if (nav.isDropdown) {
                return (
                  <div
                    key={nav.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`relative px-3 py-1.5 text-xs font-bold transition-all rounded-lg flex items-center gap-1 cursor-pointer z-10 ${
                        isActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabPill"
                          className="absolute inset-0 bg-amber-500/15 border border-amber-500/40 rounded-lg -z-10 shadow-sm shadow-amber-500/10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{nav.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 w-80 pt-2 z-50"
                        >
                          <div className="bg-slate-900/95 border border-amber-500/30 rounded-2xl shadow-2xl p-2 backdrop-blur-2xl">
                            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-800/80 mb-1 flex items-center justify-between">
                              <span>Engineering Capabilities</span>
                              <Anchor className="w-3.5 h-3.5" />
                            </div>
                            {servicesData.map((svc) => (
                              <button
                                key={svc.id}
                                onClick={() => handleServiceClick(svc.slug)}
                                className="w-full text-left px-3 py-2 text-xs font-medium text-slate-200 hover:text-amber-300 hover:bg-amber-500/10 rounded-xl transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <span className="line-clamp-1">{svc.title}</span>
                                <span className="text-amber-400/40 group-hover:text-amber-400 text-[10px] transition-transform group-hover:translate-x-1">→</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={nav.id}
                  onClick={() => handleNavClick(nav.id)}
                  className={`relative px-3 py-1.5 text-xs font-bold transition-all rounded-lg cursor-pointer z-10 ${
                    isActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-amber-500/15 border border-amber-500/40 rounded-lg -z-10 shadow-sm shadow-amber-500/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {nav.icon}
                  <span>{nav.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="px-3.5 py-2 rounded-lg text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Client Portal</span>
            </button>

            <button
              onClick={onOpenQuotation}
              className="px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-gold-metallic bg-gold-metallic-hover shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Quotation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuotation}
              className="px-3 py-1.5 rounded-md text-xs font-bold text-slate-950 bg-gold-metallic"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
            >
              About Us
            </button>

            <div className="py-1">
              <div className="px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wider">
                Services
              </div>
              <div className="pl-4 space-y-1">
                {servicesData.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => handleServiceClick(svc.slug)}
                    className="w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:text-amber-300"
                  >
                    • {svc.title}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('safety')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
            >
              Safety & Quality
            </button>
            <button
              onClick={() => handleNavClick('map')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Interactive Sites Map</span>
            </button>
            <button
              onClick={() => handleNavClick('careers')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
            >
              Contact Us
            </button>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPortal(); }}
                className="w-full py-2 rounded-lg text-xs font-bold bg-slate-800 text-slate-200 flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Client Portal Login</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuotation(); }}
                className="w-full py-2 rounded-lg text-xs font-bold bg-gold-metallic text-slate-950 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
