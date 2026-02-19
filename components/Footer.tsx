
import React from 'react';
import { Baby, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 safe-area-bottom">
      {/* Nature depth gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-orange-950/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 safe-area-left safe-area-right relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 text-center sm:text-left">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-1.5 rounded-lg text-white">
                <Baby size={20} strokeWidth={2.5} />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-white">Kids</span><span className="text-orange-400">Aan</span><span className="text-white">Zee</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Binnenkort jouw digitale gids voor een onvergetelijke vakantie met kinderen aan de Belgische kust. Speeltuinen, horeca, en meer.
            </p>
            
            {/* Contact Email */}
            <a 
              href="mailto:info@kidsaanzee.be" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors"
              aria-label="Email contact"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">info@kidsaanzee.be</span>
            </a>
          </div>
          
          {/* Column 2: Binnenkort */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-slate-500 mb-5 uppercase tracking-[0.2em] text-xs">Binnenkort</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-slate-300 inline-block">Kids Hotspots</span>
              </li>
              <li>
                <span className="text-slate-300 inline-block">Beste Horeca</span>
              </li>
              <li>
                <span className="text-slate-300 inline-block">Activiteiten</span>
              </li>
              <li>
                <span className="text-slate-300 inline-block">Praktische Info</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Status */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-bold text-slate-500 mb-5 uppercase tracking-[0.2em] text-xs">Status</h4>
            <div className="inline-flex items-center gap-2 bg-black/20 border border-white/5 rounded-full px-3 py-1.5 text-xs font-mono mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400">In ontwikkeling</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              We werken hard aan jouw<br />
              nieuwe kustgids voor gezinnen.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="text-slate-500 text-xs">
              <span className="text-slate-400">Kids</span><span className="text-orange-400">Aan</span><span className="text-slate-400">Zee</span>.be &copy; 2026
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <span>website door</span> 
              <a 
                href="https://webaanzee.be" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold hover:text-orange-400 flex items-center gap-1 group transition-colors duration-300"
              >
                <span><span className="text-slate-300">Web</span><span className="text-amber-400">aan</span><span className="text-slate-300">Zee</span></span>
                <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
