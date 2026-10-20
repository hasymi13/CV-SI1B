import React from 'react';
import { motion } from 'motion/react';
import { Code2, Server, Database, Layers, Terminal, FileCode2, Palette, GitBranch, Brain, Users, Clock, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { uiContent, technicalSkills, softSkills } from '../data/translations';

interface SkillsProps {
  currentLang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const t = uiContent[currentLang].skills;

  const getTechIcon = (icon: string) => {
    switch (icon) {
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-sky-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-rose-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  const getSoftIcon = (icon: string) => {
    switch (icon) {
      case 'Brain': return <Brain className="w-5 h-5 text-blue-400" />;
      case 'Users': return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Clock': return <Clock className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#11141c] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500 font-mono text-sm font-semibold tracking-wider">/</span>
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
              {currentLang === 'id' ? 'KEAHLIAN & TOOLS' : 'SKILLS & TOOLS'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.headline}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.subhead}
          </p>
        </div>

        {/* Part 1: Technical Skills & Software Tools (Hard Skills) */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>{t.techTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform">
                    {getTechIcon(skill.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-white tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                <div className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors mb-3">
                  {skill.name}
                </div>

                {/* Progress Meter */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: Supporting Skills & Mindset (Soft Skills) */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.softTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {softSkills.map((soft, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800/80 w-fit mb-4 text-blue-400">
                    {getSoftIcon(soft.icon)}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {soft.name[currentLang]}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {soft.description[currentLang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
