import React, { useState } from 'react';
import { ClientDashboard } from './ClientDashboard';
import { X, UserCheck, Shield, KeyRound, Sparkles } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleDemoLogin = () => {
    setEmail('client@seascape-energy.com');
    setIsLoggedIn(true);
  };

  const handleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoggedIn ? (
          <ClientDashboard
            userEmail={email || 'client@seascape-energy.com'}
            onLogout={() => setIsLoggedIn(false)}
          />
        ) : (
          <div className="max-w-md mx-auto py-4 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                CHAMS Client Portal
              </h3>
              <p className="text-xs text-slate-400">
                Secure access to live fabrication progress, class inspection certificates, and site camera feeds.
              </p>
            </div>

            {/* Quick Demo Credentials Box */}
            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Interactive Client Demo Access</span>
                </span>
                <span className="text-[10px] font-mono bg-amber-500/20 px-2 py-0.5 rounded">
                  SINGLE CLICK
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Experience the live client dashboard with pre-loaded Seascape Energy FPSO Topside fabrication data.
              </p>
              <button
                onClick={handleDemoLogin}
                className="w-full py-2.5 bg-gold-metallic hover:opacity-90 text-slate-950 font-bold rounded-xl text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                Log In as Seascape Energy (Demo)
              </button>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-4 text-[10px] font-mono text-slate-500 uppercase">
                Or Sign In with Corporate Credentials
              </span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            {/* Standard Login Form */}
            <form onSubmit={handleCustomLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Corporate Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Project Key / Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 focus:border-amber-400 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <KeyRound className="w-4 h-4 text-amber-400" />
                <span>Authenticate Session</span>
              </button>
            </form>

            <div className="text-center pt-2">
              <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>SSL 256-bit Encrypted Corporate Portal</span>
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
