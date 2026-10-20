import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, CheckCircle2, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Language } from '../types';
import { sounds } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, currentLang, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    sounds.playSuccess();
    // Simulate real PDF resume download by creating a virtual downloadable blob
    const resumeText = `
========================================
JOHN - SENIOR WEB DEVELOPER
Portfolio: Developer X
Email: john.developerx@example.com
Location: Jakarta, Indonesia / Remote Worldwide
========================================

SUMMARY:
Senior Full-Stack Engineer with 10+ years of expertise architecting high-performance web applications, modern UI/UX with fluid motion, and scalable cloud systems.

CORE TECHNICAL SKILLS:
- Frontend: React 19, Next.js, TypeScript, Tailwind CSS, Framer Motion, WebSockets
- Backend: Node.js, Express, NestJS, REST APIs, GraphQL, Microservices
- Databases: PostgreSQL, Redis, MongoDB, TimescaleDB
- DevOps & Cloud: Docker, Kubernetes, AWS, GCP, GitHub Actions CI/CD

EXPERIENCE:
1. Senior Staff Frontend Engineer — DevFlow Technologies (2022 - Present)
2. Lead Full-Stack Developer — Apex Digital Studio (2019 - 2022)
3. Frontend Web Engineer — Nexa Innovations (2016 - 2019)

EDUCATION:
- B.S. in Computer Science, Universitas Indonesia (2012 - 2016)
- AWS Certified Solutions Architect - Associate (2023)
========================================
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `John_Senior_Web_Developer_CV_2026_${currentLang.toUpperCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#111520] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto text-slate-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                CURRICULUM VITAE
              </div>
              <h2 className="text-2xl font-bold text-white">
                John — Senior Web Developer
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="py-6 space-y-6">
            {/* Bio summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {currentLang === 'id' ? 'Ringkasan Profesional' : 'Professional Summary'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'id'
                  ? 'Senior Full-Stack Engineer dengan pengalaman lebih dari satu dekade merancang dan mengembangkan aplikasi web modern skala besar. Ahli dalam ekosistem React, TypeScript, Next.js, dan arsitektur cloud terukur.'
                  : 'Senior Full-Stack Engineer with 10+ years specializing in enterprise web architecture, modern React ecosystems, micro-frontends, and high-throughput systems.'}
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {currentLang === 'id' ? 'Kompetensi Inti' : 'Core Competencies'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  'React 19 & Next.js',
                  'TypeScript Enterprise',
                  'Tailwind CSS & Motion',
                  'Node.js & Express',
                  'PostgreSQL & Redis',
                  'Docker & CI/CD Pipelines',
                  'Web Performance & Core Vitals',
                  'REST & GraphQL APIs',
                  'Design Systems (Figma to Code)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {currentLang === 'id' ? 'Pendidikan & Sertifikasi' : 'Education & Certifications'}
              </h3>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      B.S. in Computer Science — Universitas Indonesia
                    </div>
                    <div className="text-xs text-slate-400">
                      2012 — 2016 · GPA 3.84/4.00 · Focus in Distributed Systems
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      AWS Certified Solutions Architect & Meta Frontend Certified
                    </div>
                    <div className="text-xs text-slate-400">
                      Issued 2023 · Validated Cloud & Advanced Frontend Architecture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              Developer X · Confidential Profile
            </span>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 cursor-pointer"
            >
              {currentLang === 'id' ? 'Tutup' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
