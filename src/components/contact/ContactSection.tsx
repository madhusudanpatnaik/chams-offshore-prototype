import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QuotationModal } from './QuotationModal';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Send, CheckCircle2, FileText, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [quotationOpen, setQuotationOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

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
            <Globe className="w-3.5 h-3.5" />
            <span>24/7 Global Response</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Contact <span className="gold-gradient-text">CHAMS Offshore</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach our engineering headquarters, Tuas fabrication yard, or dispatch emergency anchorage riding squads 24/7/365.
          </p>
        </motion.div>

        {/* Top Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl inline-block">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Singapore HQ & Yard</h3>
            <p className="text-xs text-slate-300">
              12 Tuas South Street 5, Singapore 637000
            </p>
            <p className="text-[11px] text-slate-500 font-mono">Quayside Depth: 12.5m | Direct Launch Pier</p>
          </div>

          <div className="bg-slate-900 border border-amber-500/30 p-6 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="p-3 bg-amber-500/20 text-amber-300 rounded-xl inline-block border border-amber-500/40">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">24/7 Emergency Hotline</h3>
            <a href="tel:+6568619000" className="text-base font-bold text-amber-400 hover:underline block font-mono">
              +65 6861 9000
            </a>
            <p className="text-[11px] text-slate-400">Anchorage Riding Squad & Voyage Support Unit</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl inline-block">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">General Enquiries</h3>
            <a href="mailto:enquiries@chamsconstruction.com" className="text-xs font-semibold text-amber-300 hover:underline block font-mono">
              enquiries@chamsconstruction.com
            </a>
            <p className="text-[11px] text-slate-500 font-mono">Commercial RFQ: rfq@chamsoffshore.com</p>
          </div>
        </motion.div>

        {/* Form & Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">Send General Enquiry</h3>
                <p className="text-xs text-slate-400">Our engineering representatives will respond within 4 hours.</p>
              </div>

              <button
                onClick={() => setQuotationOpen(true)}
                className="px-4 py-2 bg-gold-metallic text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RFQ Form</span>
              </button>
            </div>

            {formSent ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-800 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Delivered</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out to CHAMS Offshore Engineering. An engineer will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Tan"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Subject / Nature of Inquiry</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Floating Crane Lift / Hydraulic Piping Overhaul"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your project scope..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs border border-slate-700 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Headquarters Map View */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Singapore HQ & Yard Location</span>
            </h3>

            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                title="Singapore Yard Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.337754668705!2d103.6300!3d1.2700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0e698ef6f0db%3A0x8673a3ff03d98bd2!2sTuas%20South%20St%205%2C%20Singapore!5e0!3m2!1sen!2ssg!4v1680000000000!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Yard Business Hours:</span>
                <span className="font-semibold text-white">Mon - Sat: 08:00 - 18:00 SST</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Riding Squad Dispatch:</span>
                <span className="font-semibold text-emerald-400">24/7 Unrestricted</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Quotation Modal */}
        <QuotationModal
          isOpen={quotationOpen}
          onClose={() => setQuotationOpen(false)}
        />

      </div>
    </div>
  );
};
