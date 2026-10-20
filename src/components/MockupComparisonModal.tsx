import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { mockupReferenceImage } from '../data/translations';
import { sounds } from '../utils/sound';

interface MockupComparisonModalProps {
  isOpen: boolean;
  currentLang: Language;
  onClose: () => void;
}

export const MockupComparisonModal: React.FC<MockupComparisonModalProps> = ({ isOpen, currentLang, onClose }) => {
  if (!isOpen) return null;

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
          className="relative w-full max-w-4xl bg-[#111520] border border-slate-700 rounded-2xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto text-slate-200"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                {currentLang === 'id' ? 'DESAIN REFERENSI LAMPIRAN' : 'ATTACHED REFERENCE DESIGN'}
              </div>
              <h3 className="text-xl font-bold text-white">
                Developer X — Original Mockup
              </h3>
            </div>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-300">
              {currentLang === 'id'
                ? 'Website ini mengimplementasikan tata letak 3-kolom persis seperti gambar lampiran Anda (Logo </>, Navigasi, Judul I\'m John a Web Developer, Tombol Lingkaran Biru Scroll, Potret John di Tengah, Blok About Me & My Work di Kanan, dan Ikon Media Sosial).'
                : 'This website faithfully implements the exact 3-column architecture from your attached reference image (</> Logo, Navigation, "I\'m John a Web Developer" Title, Circular Blue Down Button, Centered Portrait, About Me & My Work side columns, and Follow Me social icons).'}
            </p>

            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={mockupReferenceImage}
                alt="Original Reference Mockup"
                className="w-full h-auto object-contain max-h-[60vh] mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLang === 'id' ? 'Tata letak 3-Kolom identik' : 'Exact 3-Column Hero Layout'}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLang === 'id' ? 'Dukungan 2 Bahasa (ID & EN)' : 'Dual-Language (ID & EN)'}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentLang === 'id' ? 'Animasi Anime 60fps Halus' : 'Modern Anime Motion Physics'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
