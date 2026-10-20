import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, Copy, Check, Linkedin, Github, Dribbble, Twitter } from 'lucide-react';
import { Language } from '../types';
import { uiContent } from '../data/translations';
import { sounds } from '../utils/sound';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = uiContent[currentLang].contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText(t.emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = currentLang === 'id' ? 'Nama lengkap wajib diisi' : 'Full name is required';
    }
    if (!email.trim() || !email.includes('@')) {
      newErrors.email = currentLang === 'id' ? 'Email tidak valid' : 'Valid email is required';
    }
    if (!message.trim() || message.length < 5) {
      newErrors.message = currentLang === 'id' ? 'Pesan minimal 5 karakter' : 'Message must be at least 5 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    sounds.playClick();

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      sounds.playSuccess();
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0d1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-500 font-mono text-sm font-semibold tracking-wider">/</span>
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
              {currentLang === 'id' ? 'KONTAK' : 'CONTACT'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.headline}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {t.subhead}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Email & Professional Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              
              {/* Direct Email Address */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t.directEmailTitle}
                </h3>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2.5 text-sm text-slate-200 font-mono truncate">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{t.emailAddress}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Professional Social Media Links (LinkedIn, GitHub, Dribbble) */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {t.socialTitle}
                </h3>
                <div className="space-y-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">/in/developerx</span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">GitHub</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">@developerx</span>
                  </a>

                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-pink-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Dribbble className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">Dribbble</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">@developerx</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Formulir Kontak Sederhana (Nama, Email, Pesan) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setName('');
                      setEmail('');
                      setMessage('');
                      setSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    {currentLang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {t.nameLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.name ? 'border-red-500' : 'border-slate-800'
                      } text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {t.emailLabel} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      } text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {t.messageLabel} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.messagePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                        errors.message ? 'border-red-500' : 'border-slate-800'
                      } text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>{t.sendingButton}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.sendButton}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
