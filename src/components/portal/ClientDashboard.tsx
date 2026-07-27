import React, { useState } from 'react';
import { clientProjectsData } from '../../data/portalData';
import { ClientProject } from '../../types';
import { OptimizedImage } from '../ui/OptimizedImage';
import {
  FileText,
  Download,
  CheckCircle2,
  Clock,
  Video,
  ShieldCheck,
  AlertCircle,
  FileCheck,
  LogOut,
  Send,
  Building,
  ChevronRight
} from 'lucide-react';

interface ClientDashboardProps {
  userEmail: string;
  onLogout: () => void;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ userEmail, onLogout }) => {
  const [activeProject, setActiveProject] = useState<ClientProject>(clientProjectsData[0]);
  const [activeTab, setActiveTab] = useState<'milestones' | 'documents' | 'livecam' | 'changeorder'>('milestones');
  const [changeOrderMsg, setChangeOrderMsg] = useState('');
  const [changeOrderSent, setChangeOrderSent] = useState(false);

  const handleSendChangeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!changeOrderMsg.trim()) return;
    setChangeOrderSent(true);
    setTimeout(() => {
      setChangeOrderSent(false);
      setChangeOrderMsg('');
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {/* Top Welcome Bar */}
      <div className="bg-slate-900 border border-amber-500/30 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">AUTHENTICATED CLIENT PORTAL</span>
          </div>
          <h2 className="text-xl font-bold text-white font-heading">
            Welcome, <span className="text-amber-300">{activeProject.clientName}</span>
          </h2>
          <p className="text-xs text-slate-400">Account Session: {userEmail}</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-slate-300">
            <span className="text-slate-500">Active Project Code: </span>
            <span className="font-mono font-bold text-amber-400">{activeProject.code}</span>
          </div>

          <button
            onClick={onLogout}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Project Selector Switcher */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clientProjectsData.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setActiveProject(proj)}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
              activeProject.id === proj.id
                ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900'
            }`}
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-amber-400">
                {proj.code}
              </span>
              <h4 className="text-sm font-bold text-white line-clamp-1">{proj.name}</h4>
              <p className="text-xs text-slate-400">{proj.siteLocation}</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-amber-400 font-heading">{proj.progress}%</span>
              <p className="text-[10px] text-emerald-400 font-semibold">{proj.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Project Dashboard Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        
        {/* Project Header Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <p className="text-[11px] text-slate-400 font-bold uppercase">Target Vessel / Rig</p>
            <p className="text-sm font-bold text-white font-mono flex items-center gap-1.5">
              <Building className="w-4 h-4 text-amber-400" />
              <span>{activeProject.vesselName}</span>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] text-slate-400 font-bold uppercase">HSE Safety Clearance</p>
            <p className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{activeProject.safetyRating}</span>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] text-slate-400 font-bold uppercase">Estimated Handover</p>
            <p className="text-sm font-bold text-white flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{activeProject.targetDelivery}</span>
            </p>
          </div>
        </div>

        {/* Dashboard Sub-Tabs */}
        <div className="flex border-b border-slate-800 gap-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('milestones')}
            className={`pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'milestones'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Progress Milestones</span>
          </button>

          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'documents'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Class QA/QC Documents ({activeProject.documents.length})</span>
          </button>

          {activeProject.liveCameraAvailable && (
            <button
              onClick={() => setActiveTab('livecam')}
              className={`pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'livecam'
                  ? 'border-amber-400 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Video className="w-4 h-4 text-red-400" />
              <span>Yard Live Webcam Stream</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('changeorder')}
            className={`pb-3 text-xs font-bold transition-colors border-b-2 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'changeorder'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Submit Work Scope Query</span>
          </button>
        </div>

        {/* Sub-Tab 1: Milestones */}
        {activeTab === 'milestones' && (
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Gantt Work Scope Roadmap
            </h4>
            <div className="space-y-3">
              {activeProject.milestones.map((ms, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-center justify-between ${
                    ms.completed
                      ? 'bg-slate-950 border-emerald-500/30 text-slate-200'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-full ${ms.completed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold ${ms.completed ? 'text-white' : 'text-slate-300'}`}>
                        {ms.name}
                      </p>
                      <p className="text-[11px] font-mono text-slate-500">{ms.date}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${
                    ms.completed
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                      : 'bg-amber-950/40 text-amber-300 border-amber-800/50'
                  }`}>
                    {ms.completed ? 'Completed & Signed' : 'Scheduled / In Progress'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-Tab 2: Documents */}
        {activeTab === 'documents' && (
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              DNV / ABS Signed Inspection Certificates
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeProject.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-8 h-8 text-amber-400 shrink-0" />
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold text-white line-clamp-1">{doc.title}</p>
                      <p className="text-[10px] text-slate-400 font-mono">{doc.type} • {doc.size} • {doc.date}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Downloading verified PDF: ${doc.title}`)}
                    className="p-2 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 rounded-lg transition-colors cursor-pointer"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sub-Tab 3: Live Cam */}
        {activeTab === 'livecam' && (
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span>Yard Bay 3 Security Camera Feed</span>
              </h4>
              <span className="text-[10px] font-mono text-slate-400">FPS: 30 • 1080p Encrypted</span>
            </div>

            <div className="relative h-64 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex items-center justify-center">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop"
                alt="Yard Live Feed"
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-slate-950/20 z-10" />
              <div className="absolute top-3 left-3 bg-red-950/90 text-red-300 border border-red-800 px-3 py-1 rounded-md text-xs font-mono font-bold flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5" />
                <span>REC // CAM 03 - JURONG BAY FABRICATION</span>
              </div>
            </div>
          </div>
        )}

        {/* Sub-Tab 4: Change Order Form */}
        {activeTab === 'changeorder' && (
          <form onSubmit={handleSendChangeOrder} className="space-y-4 pt-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Direct Inquiry to Lead Project Engineer
            </h4>

            {changeOrderSent ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-300 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Inquiry submitted! Our Project Manager will acknowledge within 2 hours.</span>
              </div>
            ) : (
              <div className="space-y-3">
                <textarea
                  value={changeOrderMsg}
                  onChange={(e) => setChangeOrderMsg(e.target.value)}
                  placeholder="Detail any work scope adjustment, urgent inspection request, or specification update..."
                  rows={4}
                  className="w-full p-3 bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gold-metallic hover:opacity-90 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </div>
            )}
          </form>
        )}

      </div>
    </div>
  );
};
