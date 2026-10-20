import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { MockupComparisonModal } from './components/MockupComparisonModal';
import { AnimeBackground } from './components/AnimeBackground';
import { sounds } from './utils/sound';

export default function App() {
  // Initialize language from localStorage or default to Indonesian 'id'
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('developer_x_lang');
      if (saved === 'id' || saved === 'en') return saved;
    }
    return 'id';
  });

  // Sound FX toggle
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('developer_x_sound');
      return saved === 'true';
    }
    return false;
  });

  // Modals state
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isMockupOpen, setIsMockupOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('developer_x_lang', currentLang);
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  useEffect(() => {
    sounds.enabled = soundEnabled;
    localStorage.setItem('developer_x_sound', String(soundEnabled));
  }, [soundEnabled]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleToggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const handleDownloadCv = () => {
    sounds.playClick();
    setIsResumeOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0d1017] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Modern Anime Canvas Particle & Ambient Lighting */}
      <AnimeBackground />

      {/* 1. Header / Navigasi: Logo/Nama, Menu Navigasi (Home, About, Projects, Skills, Contact), CTA Download CV */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onDownloadCv={handleDownloadCv}
      />

      <main className="relative z-10">
        {/* 2. Hero Section: Foto profil, Headline singkat & padat, Ringkasan 1-2 kalimat keahlian & nilai tambah */}
        <Hero
          currentLang={currentLang}
          onOpenMockupModal={() => setIsMockupOpen(true)}
          onDownloadCv={handleDownloadCv}
        />

        {/* 3. Tentang Saya (About Me): Latar belakang profesional, pengalaman, minat utama, statistik singkat */}
        <About
          currentLang={currentLang}
          onDownloadCv={handleDownloadCv}
        />

        {/* 4. Portofolio / Proyek (Projects): Thumbnail, judul, deskripsi, tags (React, Figma, Python), Live Demo, GitHub */}
        <Portfolio
          currentLang={currentLang}
        />

        {/* 5. Keahlian (Skills & Tools): Daftar keahlian teknis (bahasa, software) dan keahlian pendukung (soft skills) */}
        <Skills
          currentLang={currentLang}
        />

        {/* 6. Kontak (Contact): Formulir sederhana (Nama, Email, Pesan), media sosial profesional, alamat email langsung */}
        <Contact
          currentLang={currentLang}
        />
      </main>

      {/* 7. Footer: Hak cipta dan navigasi cepat */}
      <Footer currentLang={currentLang} />

      {/* Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        currentLang={currentLang}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Reference Mockup Comparison Modal */}
      <MockupComparisonModal
        isOpen={isMockupOpen}
        currentLang={currentLang}
        onClose={() => setIsMockupOpen(false)}
      />
    </div>
  );
}
