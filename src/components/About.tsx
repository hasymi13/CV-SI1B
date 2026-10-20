import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, CheckCircle2, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { uiContent } from '../data/translations';
import { sounds } from '../utils/sound';

interface AboutProps {
  currentLang: Language;
  onDownloadCv: () => void;
}

export const About: React.FC<AboutProps> = ({ currentLang, onDownloadCv }) => {
  const t = uiContent[currentLang].about;

  return (
    <section id="about" className="relative py-24 bg-[#11141c] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact '/ ABOUT ME' kicker */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500 font-mono text-sm font-semibold tracking-wider">/</span>
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
              {currentLang === 'id' ? 'TENTANG SAYA' : 'ABOUT ME'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* 4 KPI Highlight Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {t.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-slate-900 transition-all group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono tabular-nums mb-2 group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Background & Key Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
              {t.intro}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {t.background}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onDownloadCv}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>{currentLang === 'id' ? 'Unduh CV / Resume' : 'Download CV / Resume'}</span>
              </button>

              <a
                href="#contact"
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
              >
                <span>{currentLang === 'id' ? 'Kirim Pesan' : 'Get in Touch'}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {currentLang === 'id' ? 'Performa & Kecepatan Web' : 'Web Speed & Core Vitals'}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentLang === 'id' ? 'Memastikan waktu muat di bawah 1 detik dan rendering 60fps yang stabil.' : 'Sub-second initial loads and silky 60fps compositor transitions.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {currentLang === 'id' ? 'Kode Bersih & Type-Safe' : 'Clean & Type-Safe Code'}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentLang === 'id' ? 'TypeScript modular, minim bug runtime, dan mudah dikembangkan dalam tim.' : 'Modular TypeScript with strict contracts and zero hidden technical debt.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {currentLang === 'id' ? 'UI/UX Human-Centric' : 'Human-Centric UI/UX'}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentLang === 'id' ? 'Antarmuka intuitif dari sketsa Figma hingga implementasi responsif.' : 'Figma-to-code fidelity with intuitive interaction flows and accessibility.'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
