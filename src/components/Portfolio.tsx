import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react';
import { Language, Project } from '../types';
import { uiContent, projectsData } from '../data/translations';
import { sounds } from '../utils/sound';

interface ProjectsProps {
  currentLang: Language;
}

export const Portfolio: React.FC<ProjectsProps> = ({ currentLang }) => {
  const t = uiContent[currentLang].projects;

  return (
    <section id="projects" className="relative py-24 bg-[#0d1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500 font-mono text-sm font-semibold tracking-wider">/</span>
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
              {currentLang === 'id' ? 'PORTOFOLIO / PROYEK' : 'PORTFOLIO / PROJECTS'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.headline}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.subhead}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Thumbnail Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content: Title, Description, Tags */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description[currentLang]}
                  </p>

                  {/* Technology Tags (React, Figma, Python, etc.) */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Live Demo & GitHub Source Code */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-2 flex items-center justify-between gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/20 active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.liveDemo}</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-all active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.sourceCode}</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All on GitHub Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            onClick={() => sounds.playClick()}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{t.viewAllGithub}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
