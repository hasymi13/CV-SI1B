import React from 'react';
import { ArrowUp, Github, Linkedin, Dribbble, Twitter } from 'lucide-react';
import { Language } from '../types';
import { uiContent } from '../data/translations';
import { sounds } from '../utils/sound';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = uiContent[currentLang].footer;
  const nav = uiContent[currentLang].nav;

  const scrollToSection = (id: string) => {
    sounds.playClick();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090b10] border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Wordmark */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
              <span className="font-mono font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Developer <span className="text-blue-500">X</span>
            </span>
          </div>

          {/* Quick Navigation Links (Single-page anchors) */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <button
              onClick={() => scrollToSection('#home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {nav.home}
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {nav.about}
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('#skills')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {nav.contact}
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom notes: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            {t.copyright}
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            {t.builtWith}
          </div>
        </div>

      </div>
    </footer>
  );
};
