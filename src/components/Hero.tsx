import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Twitter, Instagram, Youtube, Facebook, Sparkles, Layers, Mail } from 'lucide-react';
import { Language } from '../types';
import { uiContent, portraitImage } from '../data/translations';
import { sounds } from '../utils/sound';

interface HeroProps {
  currentLang: Language;
  onOpenMockupModal: () => void;
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenMockupModal, onDownloadCv }) => {
  const t = uiContent[currentLang].hero;
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    sounds.playClick();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Mini Bar: Status & Attached Mockup Reference Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between flex-wrap gap-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 absolute" />
            <span className="font-medium ml-1">
              {currentLang === 'id' ? 'Tersedia untuk Proyek & Kontrak Baru' : 'Available for New Projects & Contracts'}
            </span>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenMockupModal();
            }}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors cursor-pointer bg-slate-900/50 hover:bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-800"
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>{currentLang === 'id' ? 'Lihat Mockup Asli Lampiran' : 'View Original Mockup'}</span>
          </button>
        </motion.div>

        {/* 3-Column Hero Grid matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Accent bar, Headline, Bio, Circular Blue Down Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-center text-left"
          >
            {/* White horizontal accent bar */}
            <div className="w-16 h-1 bg-white mb-6 rounded-full shadow-sm" />

            {/* Headline singkat & padat as requested */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-5">
              {currentLang === 'id' ? (
                <>
                  Halo, saya <span className="text-white">John</span> —<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
                    Web Developer & UI Designer
                  </span>
                </>
              ) : (
                <>
                  Hi, I’m <span className="text-white">John</span> —<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400">
                    Web Developer & UI Designer
                  </span>
                </>
              )}
            </h1>

            {/* Ringkasan 1-2 kalimat tentang keahlian utama & nilai tambah */}
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
              {t.summary}
            </p>

            {/* Quick CTAs + Circular Blue Action Button with bouncing arrow */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('#about')}
                className="group w-14 h-14 rounded-full bg-[#1A68FF] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/35 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative shrink-0"
                aria-label={t.scrollDown}
                title={t.scrollDown}
              >
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 pointer-events-none" />
                <ArrowDown className="w-6 h-6 transition-transform group-hover:translate-y-1" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {t.ctaContact}
                </button>
                <button
                  onClick={onDownloadCv}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                >
                  {t.ctaCv}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Portrait Image with modern anime aura framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative my-4 lg:my-0"
          >
            <div className="relative w-full max-w-[370px] sm:max-w-[420px] aspect-[4/5] flex items-end justify-center">
              
              {/* Anime tech ambient aura backdrop */}
              <div className="absolute inset-x-4 top-8 bottom-0 rounded-3xl bg-gradient-to-t from-blue-900/30 via-slate-800/20 to-transparent border border-blue-500/20 shadow-2xl shadow-blue-950/60 pointer-events-none" />
              
              {/* Glowing ring accent */}
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full border border-blue-400/30 blur-[1px] pointer-events-none animate-pulse" />
              
              {/* Developer Studio Portrait */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-2xl group">
                <img
                  src={portraitImage}
                  alt="John - Web Developer & UI Designer"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center">
                    <span className="text-xs text-slate-500">Loading portrait...</span>
                  </div>
                )}

                {/* Soft gradient bottom scrim so the photo blends seamlessly */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0d1017] via-[#0d1017]/70 to-transparent pointer-events-none" />

                {/* Floating Micro Badge: 10+ Years */}
                <div className="absolute bottom-5 left-5 z-20 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">10+ Years</div>
                    <div className="text-[10px] text-slate-400">Web & UI Craft</div>
                  </div>
                </div>

                {/* Floating Micro Badge: Full-Stack & UI */}
                <div className="absolute top-5 right-5 z-20 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[11px] font-semibold text-slate-200">React & Figma Specialist</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: ABOUT ME, MY WORK, FOLLOW ME */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col justify-center space-y-6 text-left"
          >
            {/* ABOUT ME block */}
            <div className="group">
              <h3 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-2">
                {t.aboutMini}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
                {t.aboutDesc}
              </p>
              <button
                onClick={() => scrollToSection('#about')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-wider group/link cursor-pointer border-b border-white/40 pb-0.5 hover:border-blue-400"
              >
                <span>{t.learnMore}</span>
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </button>
            </div>

            {/* Hairline Divider */}
            <div className="border-t border-slate-800/80" />

            {/* MY WORK block */}
            <div className="group">
              <h3 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-2">
                {t.workMini}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
                {t.workDesc}
              </p>
              <button
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-wider group/link cursor-pointer border-b border-white/40 pb-0.5 hover:border-blue-400"
              >
                <span>{t.browseProjects}</span>
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </button>
            </div>

            {/* Hairline Divider */}
            <div className="border-t border-slate-800/80" />

            {/* FOLLOW ME block with professional social icons */}
            <div>
              <h3 className="text-xs font-bold tracking-widest text-slate-200 uppercase mb-3">
                {t.followMe}
              </h3>
              <div className="flex items-center gap-4 text-slate-300">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="hover:text-blue-500 hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="hover:text-sky-400 hover:scale-110 transition-all duration-200"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="hover:text-pink-400 hover:scale-110 transition-all duration-200"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="hover:text-blue-400 hover:scale-110 transition-all duration-200"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
