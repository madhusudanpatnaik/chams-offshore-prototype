import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { FloatingEmergencyWidget } from './components/common/FloatingEmergencyWidget';
import { HeroVideo } from './components/home/HeroVideo';
import { StatsBanner } from './components/home/StatsBanner';
import { ServicesOverview } from './components/home/ServicesOverview';
import { ProjectsMap } from './components/home/ProjectsMap';
import { SafetyHighlights } from './components/home/SafetyHighlights';
import { AboutSection } from './components/about/AboutSection';
import { SafetySection } from './components/safety/SafetySection';
import { CareersSection } from './components/careers/CareersSection';
import { ContactSection } from './components/contact/ContactSection';
import { ServiceDetailModal } from './components/services/ServiceDetailModal';
import { ClientPortalModal } from './components/portal/ClientPortalModal';
import { QuotationModal } from './components/contact/QuotationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const [clientPortalOpen, setClientPortalOpen] = useState<boolean>(false);
  const [quotationOpen, setQuotationOpen] = useState<boolean>(false);

  const handleSelectService = (slug: string) => {
    setSelectedServiceSlug(slug);
  };

  const handleOpenQuotation = () => {
    setQuotationOpen(true);
  };

  const handleOpenMap = () => {
    setActiveTab('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Global Corporate Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSelectService={handleSelectService}
        onOpenPortal={() => setClientPortalOpen(true)}
        onOpenQuotation={handleOpenQuotation}
      />

      {/* Main Page Router View */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {activeTab === 'home' && (
              <div className="space-y-0">
                {/* Hero Header */}
                <HeroVideo
                  onExploreServices={() => {
                    const el = document.getElementById('services-overview');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onOpenMap={handleOpenMap}
                  onOpenQuotation={handleOpenQuotation}
                />

                {/* High-Impact Stats Banner */}
                <StatsBanner />

                {/* Services Overview */}
                <ServicesOverview
                  onSelectService={handleSelectService}
                  onOpenQuotation={handleOpenQuotation}
                />

                {/* Interactive Construction & Offshore Sites Map */}
                <ProjectsMap />

                {/* Safety & QA Highlights */}
                <SafetyHighlights
                  onLearnMore={() => {
                    setActiveTab('safety');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}

            {activeTab === 'about' && <AboutSection />}

            {activeTab === 'services' && (
              <div className="pt-20">
                <ServicesOverview
                  onSelectService={handleSelectService}
                  onOpenQuotation={handleOpenQuotation}
                />
              </div>
            )}

            {activeTab === 'safety' && <SafetySection />}

            {activeTab === 'map' && (
              <div className="pt-20">
                <ProjectsMap />
              </div>
            )}

            {activeTab === 'careers' && <CareersSection />}

            {activeTab === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Modals */}
      <ServiceDetailModal
        slug={selectedServiceSlug}
        onClose={() => setSelectedServiceSlug(null)}
        onOpenQuotation={handleOpenQuotation}
      />

      <ClientPortalModal
        isOpen={clientPortalOpen}
        onClose={() => setClientPortalOpen(false)}
      />

      <QuotationModal
        isOpen={quotationOpen}
        onClose={() => setQuotationOpen(false)}
      />

      {/* Floating 24/7 Emergency Riding Squad Widget */}
      <FloatingEmergencyWidget
        onOpenQuotation={handleOpenQuotation}
        onOpenPortal={() => setClientPortalOpen(true)}
      />

      {/* Global Corporate Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSelectService={handleSelectService}
        onOpenPortal={() => setClientPortalOpen(true)}
        onOpenQuotation={handleOpenQuotation}
      />

    </div>
  );
}
