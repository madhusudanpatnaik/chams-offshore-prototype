import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Phone, Mail, MapPin, Upload } from 'lucide-react';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceSlug?: string;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  initialServiceSlug
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceType, setServiceType] = useState(initialServiceSlug || 'structural-module-fabrication-installation');
  const [urgency, setUrgency] = useState<'Standard' | 'Urgent (24h)' | 'Emergency Voyage'>('Standard');
  const [vesselName, setVesselName] = useState('');
  const [message, setMessage] = useState('');
  const [attachedFile, setAttachedFile] = useState('');
  const [showEstimator, setShowEstimator] = useState(false);
  const [vesselTonnage, setVesselTonnage] = useState<number>(15000);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Feasibility estimation logic
  const estimatedCrewSize = urgency === 'Emergency Voyage' ? 12 : urgency === 'Urgent (24h)' ? 8 : 5;
  const estimatedLeadHours = urgency === 'Emergency Voyage' ? 4 : urgency === 'Urgent (24h)' ? 12 : 36;
  const classRequirement = vesselTonnage > 20000 ? 'DNV / ABS Full Survey Required' : 'Standard Class Inspection';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">CHAMS ENGINEERING ESTIMATION</span>
            <h3 className="text-2xl font-bold text-white font-heading">
              Request Official Quotation
            </h3>
            <p className="text-xs text-slate-400">
              Receive a detailed commercial estimate, work scope schedule, and class feasibility review.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-950/80 border border-emerald-800 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-white">Quotation Request Dispatched!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, {fullName}. Our Commercial Estimating Team and Lead Engineer will review your requirements and respond within 2 hours. Reference: <span className="text-amber-400 font-mono font-bold">RFQ-2026-CHAMS-890</span>.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-800 text-white font-bold rounded-xl text-xs hover:bg-slate-700 cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              
              {/* Urgency Badge Selector */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">Project Urgency Level</label>
                  <button
                    type="button"
                    onClick={() => setShowEstimator(!showEstimator)}
                    className="text-[11px] font-mono font-bold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    ⚡ {showEstimator ? 'Hide Lead Time Calc' : 'Toggle Mobilization Calc'}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['Standard', 'Urgent (24h)', 'Emergency Voyage'] as const).map((u) => (
                    <button
                      type="button"
                      key={u}
                      onClick={() => setUrgency(u)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        urgency === u
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Mobilization Feasibility Preview Panel */}
              {showEstimator && (
                <div className="p-3.5 bg-slate-900/90 border border-amber-500/30 rounded-2xl space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center justify-between text-amber-400 font-bold border-b border-slate-800 pb-1.5">
                    <span>ESTIMATED MOBILIZATION METRICS</span>
                    <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">LIVE ESTIMATOR</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                      <div className="text-amber-400 font-extrabold text-sm">{estimatedLeadHours} Hours</div>
                      <div className="text-[10px] text-slate-400">Target MOB Lead</div>
                    </div>
                    <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                      <div className="text-amber-400 font-extrabold text-sm">{estimatedCrewSize} Pax</div>
                      <div className="text-[10px] text-slate-400">Riding Squad</div>
                    </div>
                    <div className="bg-slate-950 p-2 rounded-xl border border-slate-800">
                      <div className="text-emerald-400 font-extrabold text-[11px] truncate">{classRequirement}</div>
                      <div className="text-[10px] text-slate-400">Class Protocol</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Eng. Alex Wong"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@shipping.com"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Phone Number / WhatsApp *</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+65 6861 9000"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Company Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Global Energy Fleet Ltd."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Required Service Category</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="structural-module-fabrication-installation">Structural Module Fabrication</option>
                    <option value="piping-hydraulic-works">Piping & Hydraulic Works</option>
                    <option value="machinery-mechanical-services">Mechanical Services</option>
                    <option value="electrical-instrumentation">Electrical & Instrumentation</option>
                    <option value="machinery-repair">Machinery Repair</option>
                    <option value="anchorage-voyage-support">Anchorage & Voyage Support</option>
                    <option value="technical-manpower-solutions">Technical Manpower Solutions</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Target Vessel / Rig Name</label>
                  <input
                    type="text"
                    value={vesselName}
                    onChange={(e) => setVesselName(e.target.value)}
                    placeholder="e.g. MV Orion Energy"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Project Description / Scope of Work</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Include material grades, dimensions, class requirements, or target mobilization location..."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Upload Attachment */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Attach Technical Drawings / Specs (Optional)</label>
                <div className="border border-dashed border-slate-800 hover:border-amber-500/50 rounded-xl p-3 text-center cursor-pointer bg-slate-900/40 relative">
                  <input
                    type="file"
                    onChange={(e) => setAttachedFile(e.target.files?.[0]?.name || '')}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
                    <Upload className="w-4 h-4 text-amber-400" />
                    <span>{attachedFile ? `Attached: ${attachedFile}` : 'Upload PDF, CAD DWG, or ZIP file'}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gold-metallic hover:opacity-90 text-slate-950 font-bold rounded-xl text-xs shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
