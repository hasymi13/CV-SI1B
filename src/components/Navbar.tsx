import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Volume2, VolumeX, Mail } from 'lucide-react';
import { Language } from '../types';
import { uiContent } from '../data/translations';
import { sounds } from '../utils/sound';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onDownloadCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  soundEnabled,
  onToggleSound,
  onDownloadCv
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = uiContent[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLangToggle = (lang: Language) => {
    sounds.playSwitch();
    onLanguageChange(lang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f1218]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <span className="font-mono font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Developer <span className="text-blue-500">X</span>
            </span>
          </a>

          {/* Clean 5 Nav Links: Home, About, Projects, Skills, Contact */}
          <nav className="hidden md:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick('#projects')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {t.projects}
            </button>
            <button
              onClick={() => handleNavClick('#skills')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {t.skills}
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {t.contact}
            </button>
          </nav>

          {/* Action Area: Language Switcher, Sound FX, CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher [ID | EN] */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700/60 rounded-full p-0.5">
              <button
                onClick={() => handleLangToggle('id')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  currentLang === 'id'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Ganti ke Bahasa Indonesia"
              >
                ID
              </button>
              <button
                onClick={() => handleLangToggle('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                if (!soundEnabled) sounds.playSwitch();
              }}
              className={`p-2 rounded-lg border transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-blue-600/20 border-blue-500/40 text-blue-400'
                  : 'bg-slate-900/80 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={soundEnabled ? 'Mute Audio FX' : 'Enable Anime UI Audio'}
              aria-label="Sound Toggle"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* CTA Button: Download CV */}
            <button
              onClick={onDownloadCv}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md shadow-blue-600/20 transition-all cursor-pointer transform active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.downloadCv}</span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1017]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-slate-800/50 rounded-lg"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('#about')}
              className="text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-slate-800/50 rounded-lg"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick('#projects')}
              className="text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-slate-800/50 rounded-lg"
            >
              {t.projects}
            </button>
            <button
              onClick={() => handleNavClick('#skills')}
              className="text-left py-2 px-3 text-sm font-medium text-slate-200 hover:bg-slate-800/50 rounded-lg"
            >
              {t.skills}
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-left py-2 px-3 text-sm font-medium text-blue-400 hover:bg-blue-600/10 rounded-lg"
            >
              {t.contact}
            </button>
            
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={onDownloadCv}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.downloadCv}</span>
              </button>
              
              <div className="flex gap-2">
                <button
                  onClick={() => handleLangToggle('id')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    currentLang === 'id' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => handleLangToggle('en')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    currentLang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
