import React, { useState } from 'react';
import { motion } from 'motion/react';
import { careersData } from '../../data/careersData';
import { CareerOpportunity } from '../../types';
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  FileText,
  Upload,
  Send,
  Sparkles,
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerOpportunity | null>(careersData[0]);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  
  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantExp, setApplicantExp] = useState('');
  const [applicantCertifications, setApplicantCertifications] = useState<string[]>([]);
  const [resumeFileName, setResumeFileName] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const toggleCert = (cert: string) => {
    if (applicantCertifications.includes(cert)) {
      setApplicantCertifications(applicantCertifications.filter(c => c !== cert));
    } else {
      setApplicantCertifications([...applicantCertifications, cert]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;
    setApplicationSubmitted(true);
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
            <Users className="w-3.5 h-3.5" />
            <span>Join Our Engineering Fleet</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            Careers at CHAMS <span className="gold-gradient-text">Offshore</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Build your career with Southeast Asia’s leading offshore engineering specialist. We offer continuous technical development, competitive offshore allowances, class certification support, and an uncompromising safety culture.
          </p>
        </motion.div>

        {/* Culture & Benefits Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
            <ShieldCheck className="w-8 h-8 text-amber-400" />
            <h3 className="text-base font-bold text-white">Class Certification Sponsorship</h3>
            <p className="text-xs text-slate-400">We sponsor DNV 6G/6GR welder testing, BOSIET survival refreshers, and ASNT NDT qualifications.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
            <Briefcase className="w-8 h-8 text-amber-400" />
            <h3 className="text-base font-bold text-white">Competitive Offshore Allowances</h3>
            <p className="text-xs text-slate-400">Attractive daily riding squad bonuses, comprehensive medical coverage, and family protection benefits.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
            <Sparkles className="w-8 h-8 text-amber-400" />
            <h3 className="text-base font-bold text-white">Global Energy Projects</h3>
            <p className="text-xs text-slate-400">Work on FPSO topside fabrications, deepwater semi-submersibles, and high-spec marine vessels.</p>
          </div>
        </motion.div>

        {/* Open Job Listings & Detail Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* Left Column: Job Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              ACTIVE POSITIONS ({careersData.length})
            </h3>

            {careersData.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  selectedJob?.id === job.id
                    ? 'bg-amber-500/10 border-amber-500 text-white shadow-xl'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold bg-slate-950 text-amber-400 px-2.5 py-0.5 rounded border border-slate-800">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">{job.type}</span>
                </div>

                <h4 className="text-base font-bold text-white font-heading">{job.title}</h4>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate">{job.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Selected Job Inspector & Application Trigger */}
          {selectedJob && (
            <div className="lg:col-span-7 bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                    {selectedJob.department}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                    {selectedJob.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{selectedJob.location} • {selectedJob.experience}</p>
                </div>

                <button
                  onClick={() => { setApplicationSubmitted(false); setApplyModalOpen(true); }}
                  className="px-5 py-3 bg-gold-metallic hover:opacity-90 text-slate-950 font-bold rounded-xl text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Apply For Position</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Role Overview
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedJob.description}
                </p>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Candidate Requirements
                </h4>
                <div className="space-y-2">
                  {selectedJob.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Key Responsibilities
                </h4>
                <div className="space-y-2">
                  {selectedJob.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </motion.div>

        {/* Job Application Modal Form */}
        {applyModalOpen && selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
              
              <button
                onClick={() => setApplyModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">OFFICIAL RECRUITMENT PORTAL</span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Application for: {selectedJob.title}
                  </h3>
                </div>

                {applicationSubmitted ? (
                  <div className="p-6 bg-emerald-950/80 border border-emerald-800 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Application Received!</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Thank you, {applicantName}. Your application and credentials have been forwarded to CHAMS HR & Recruitment Team. We will review your profile within 3 business days.
                    </p>
                    <button
                      onClick={() => setApplyModalOpen(false)}
                      className="px-6 py-2.5 bg-slate-800 text-white font-bold rounded-xl text-xs hover:bg-slate-700"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="space-y-4 pt-2">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="john@example.com"
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
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          placeholder="+65 9123 4567"
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300">Years of Marine Experience</label>
                        <select
                          value={applicantExp}
                          onChange={(e) => setApplicantExp(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="1-3">1 - 3 Years</option>
                          <option value="3-5">3 - 5 Years</option>
                          <option value="5-10">5 - 10 Years</option>
                          <option value="10+">10+ Years Senior</option>
                        </select>
                      </div>
                    </div>

                    {/* Certifications Selection Checkboxes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Active Certifications Held</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {['DNV 6G/6GR WPQ', 'AWS D1.1 Card', 'BOSIET / OPITO', 'ASNT Level II NDT', 'STCW Marine', 'bizSAFE Safety'].map((cert) => (
                          <button
                            type="button"
                            key={cert}
                            onClick={() => toggleCert(cert)}
                            className={`p-2 rounded-lg text-[11px] font-bold border text-left transition-colors cursor-pointer ${
                              applicantCertifications.includes(cert)
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {applicantCertifications.includes(cert) ? '✓ ' : '+ '}
                            {cert}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Resume Attachment Upload Simulator */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Attach Resume / CV (PDF or DOCX)</label>
                      <div className="border-2 border-dashed border-slate-800 hover:border-amber-500/50 rounded-xl p-4 text-center cursor-pointer bg-slate-900/50 relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <Upload className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                        <p className="text-xs font-bold text-slate-200">
                          {resumeFileName ? `Attached: ${resumeFileName}` : 'Click or Drag & Drop File Here'}
                        </p>
                        <p className="text-[10px] text-slate-500">Max size: 10MB</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gold-metallic hover:opacity-90 text-slate-950 font-bold rounded-xl text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Job Application</span>
                    </button>
                  </form>
                )}

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
