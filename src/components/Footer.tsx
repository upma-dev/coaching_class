import { useState } from "react";
import { Phone, MapPin, Send, HelpCircle, Heart, Copy, Check, MessageSquare, Info } from "lucide-react";
import { BRANCHES } from "../data";

export default function Footer() {
  const [copiedBranch, setCopiedBranch] = useState<string | null>(null);

  const handleCopyAddress = (address: string, branchName: string) => {
    navigator.clipboard.writeText(address);
    setCopiedBranch(branchName);
    setTimeout(() => setCopiedBranch(null), 2500);
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid: Interactive Map Locations & Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Info Branding */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white font-extrabold text-lg">
                SCC
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight">Safalta Classes</h3>
                <p className="text-xs uppercase font-mono tracking-widest text-blue-400 font-bold">Saath Rahenge Success Tak</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Established with an aim to offer premium yet reasonable classroom coaching to Class 1st - 12th aspirants and Spoken English learners in Susner, guided by Sanju & Jivesh Sir.
            </p>
            
            {/* Quick Contacts */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">Admission Directors:</span>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <a 
                    href="tel:+919098816538"
                    className="flex items-center gap-1.5 font-bold text-white hover:text-blue-400 transition-colors hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    9098816538 (Jivesh Sir)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="tel:+919131657804" 
                    className="flex items-center gap-1.5 font-bold text-white hover:text-blue-400 transition-colors hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    9131657804 (Sanju Sir)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Dual Branches cards & Directions */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-extrabold text-lg text-white">📍 Visit Our Branches in Susner</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BRANCHES.map((branch) => (
                <div 
                  key={branch.name}
                  className="bg-slate-800/40 rounded-2xl p-5 border border-slate-800 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2 bg-slate-800/40">
                      <span className="text-xs font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">
                        {branch.name.includes("Branch 1") ? "Head Branch" : "Secondary Branch"}
                      </span>
                      <button
                        onClick={() => handleCopyAddress(branch.address, branch.name)}
                        className="text-slate-500 hover:text-white transition-colors cursor-pointer"
                        title="Copy address"
                      >
                        {copiedBranch === branch.name ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <h4 className="font-extrabold text-white text-sm sm:text-base">{branch.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{branch.address}</p>
                    <p className="text-xs text-slate-500 italic">
                      <strong>Landmark:</strong> {branch.landmark}
                    </p>
                  </div>

                  {/* Aesthetic static Map guide coordinates block inside footer */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/50">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">Quick Navigation Help:</span>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] leading-relaxed space-y-1">
                      <p className="flex items-center gap-1.5 text-slate-350">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        <span>Direct Google Maps Link:</span>
                      </p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 font-bold hover:underline block truncate mt-1"
                      >
                        Open directions in map launcher →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Base Ribbon */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Safalta Coaching Classes, Susner. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-500 font-semibold font-mono">
            <span>शिक्षा ही सफलता की कुंजी है</span>
            <Heart className="w-3 h-3 text-red-500 fill-current ml-1" />
          </p>
        </div>

      </div>

      {/* FLOATING ACTION WHATSAPP HELP DESK WIDGET */}
      <a
        href="https://wa.me/919098816538?text=Hello%20Safalta%20Coaching%20Classes!%20I%20am%20interested%20in%20session%20fees%20and%20availabilities."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer group"
        aria-label="Direct WhatsApp Message"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-44 group-hover:ml-2 transition-all duration-300 font-bold text-xs whitespace-nowrap">
          Chat Jivesh Sir
        </span>
      </a>

    </footer>
  );
}
