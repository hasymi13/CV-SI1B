import { Project, TechnicalSkill, SoftSkill } from '../types';

export const portraitImage = '/src/assets/images/avatar_john_developer_1792489352410.jpg';
export const mockupReferenceImage = '/public/assets/aistudio/image_129f4250.png';

export const projectsData: Project[] = [
  {
    id: 'metricly-saas',
    title: 'Metricly — SaaS Analytics Suite',
    description: {
      id: 'Platform analitik cloud modern untuk memonitor metrik bisnis dan infrastruktur secara real-time dengan grafik interaktif 60fps.',
      en: 'Real-time cloud analytics and observability suite for tracking business growth and system telemetry with 60fps interactive charts.'
    },
    image: '/src/assets/images/portfolio_saas_dashboard_1792489353016.jpg',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Figma', 'Python'],
    demoUrl: 'https://metricly.example.com',
    githubUrl: 'https://github.com/developerx/metricly-suite'
  },
  {
    id: 'arc-ambience-store',
    title: 'Arc & Ambience — Luxury E-Commerce',
    description: {
      id: 'Toko online berorientasi editorial untuk furnitur mewah dan pencahayaan arsitektur dengan checkout kilat dan visual interaktif.',
      en: 'Editorial-grade e-commerce storefront for architectural lighting and luxury furnishings with instant checkouts and tactile motion.'
    },
    image: '/src/assets/images/portfolio_ecommerce_platform_1792489353132.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Stripe'],
    demoUrl: 'https://arcambience.example.com',
    githubUrl: 'https://github.com/developerx/arc-ambience'
  },
  {
    id: 'finfolio-wealth',
    title: 'FinFolio — Crypto & Wealth Tracker',
    description: {
      id: 'Aplikasi pelacakan aset multi-mata uang dan portofolio kripto dengan antarmuka dark glassmorphism dan analitik keuntungan real-time.',
      en: 'Next-generation crypto and multi-asset wealth tracker with dark glassmorphism, market feeds, and precision portfolio analytics.'
    },
    image: '/src/assets/images/portfolio_mobile_fintech_1792489353655.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Web3'],
    demoUrl: 'https://finfolio.example.com',
    githubUrl: 'https://github.com/developerx/finfolio-web'
  }
];

export const technicalSkills: TechnicalSkill[] = [
  { name: 'React 19 & Next.js', level: 96, category: 'frontend', icon: 'Code2' },
  { name: 'TypeScript', level: 95, category: 'frontend', icon: 'FileCode2' },
  { name: 'Tailwind CSS & Motion', level: 98, category: 'frontend', icon: 'Palette' },
  { name: 'Python & FastApi', level: 88, category: 'backend', icon: 'Terminal' },
  { name: 'Node.js & Express', level: 90, category: 'backend', icon: 'Server' },
  { name: 'PostgreSQL & Database', level: 86, category: 'backend', icon: 'Database' },
  { name: 'Figma & UI Design', level: 92, category: 'tools', icon: 'Layers' },
  { name: 'Git & GitHub Actions', level: 92, category: 'tools', icon: 'GitBranch' },
];

export const softSkills: SoftSkill[] = [
  {
    name: {
      id: 'Pemecahan Masalah Kritis',
      en: 'Critical Problem Solving'
    },
    description: {
      id: 'Menganalisis kebutuhan bisnis kompleks dan menerjemahkannya ke solusi teknis terstruktur.',
      en: 'Deconstructing complex business requirements into elegant, resilient engineering architectures.'
    },
    icon: 'Brain'
  },
  {
    name: {
      id: 'Kolaborasi & Komunikasi Tim',
      en: 'Team Leadership & Collaboration'
    },
    description: {
      id: 'Berkomunikasi jelas dengan tim produk, desainer, dan pemangku kepentingan lintas fungsi.',
      en: 'Fostering proactive communication across engineering squads, product managers, and clients.'
    },
    icon: 'Users'
  },
  {
    name: {
      id: 'Manajemen Waktu & Agile / Scrum',
      en: 'Agile Delivery & Time Management'
    },
    description: {
      id: 'Disiplin sprint delivery, estimasi fitur yang akurat, dan rilis terjadwal tanpa kompromi kualitas.',
      en: 'Rigorous sprint execution, dependable estimation, and on-schedule production milestones.'
    },
    icon: 'Clock'
  },
  {
    name: {
      id: 'Fokus pada Kualitas & Pengguna',
      en: 'User Empathy & Quality Focus'
    },
    description: {
      id: 'Mengutamakan kemudahan aksesibilitas (WCAG), kecepatan muat halaman, dan pengalaman pengguna optimal.',
      en: 'Championing WCAG AA accessibility, sub-second latency, and intuitive interaction flow.'
    },
    icon: 'Sparkles'
  }
];

export const uiContent = {
  id: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      downloadCv: 'Unduh CV',
      contactMe: 'Hubungi Saya'
    },
    hero: {
      accentKicker: 'DEVELOPER X · PORTOFOLIO',
      headline: 'Halo, saya John — Web Developer & UI Designer',
      summary: 'Membangun antarmuka web modern berperforma tinggi, animasi interaktif 60fps, dan arsitektur sistem yang andal untuk membantu bisnis berkembang lebih cepat.',
      aboutMini: 'TENTANG SAYA',
      aboutDesc: 'Pengalaman 10+ tahun merancang produk digital yang menggabungkan kecepatan, kemudahan perawatan kode, dan estetika visual.',
      learnMore: 'PELAJARI LEBIH LANJUT',
      workMini: 'KARYA SAYA',
      workDesc: 'Menghadirkan platform SaaS, e-commerce, dan aplikasi FinTech dengan standar kualitas kelas dunia.',
      browseProjects: 'LIHAT PROYEK',
      followMe: 'IKUTI SAYA',
      scrollDown: 'Gulir ke Bawah',
      ctaContact: 'Hubungi Saya',
      ctaCv: 'Download CV'
    },
    about: {
      kicker: '/ TENTANG SAYA',
      headline: 'Latar Belakang Profesional & Pengalaman',
      intro: 'Saya adalah seorang Web Developer & UI Designer dengan passion mendalam pada arsitektur web modern. Saya fokus menghasilkan produk digital yang cepat, responsif, dan mudah digunakan.',
      background: 'Selama lebih dari satu dekade, saya telah memimpin pengembangan frontend dan full-stack untuk berbagai platform dari startup Silicon Valley hingga enterprise di Asia Tenggara. Minat utama saya mencakup sistem desain komponen modern, optimasi Web Vitals, dan implementasi transisi animasi yang hidup.',
      stats: [
        { value: '10+', label: 'Tahun Pengalaman', sub: 'Industri Teknologi' },
        { value: '150+', label: 'Proyek Selesai', sub: 'Produk Web & Aplikasi' },
        { value: '99%', label: 'Kepuasan Klien', sub: 'Ulasan Bintang 5' },
        { value: '40+', label: 'Mitra & Klien Global', sub: 'Skala Internasional' }
      ]
    },
    projects: {
      kicker: '/ PORTOFOLIO / PROYEK',
      headline: 'Karya Pilihan & Proyek Terbaru',
      subhead: 'Berikut adalah beberapa proyek unggulan yang mencerminkan pendekatan saya terhadap kode bersih, performa tinggi, dan desain modern.',
      liveDemo: 'Live Demo',
      sourceCode: 'Kode Sumber',
      viewAllGithub: 'Lihat Semua Repositori di GitHub'
    },
    skills: {
      kicker: '/ KEAHLIAN & TOOLS',
      headline: 'Keahlian Teknis & Keahlian Pendukung',
      subhead: 'Alat dan metodologi yang saya gunakan sehari-hari untuk menghadirkan solusi perangkat lunak terbaik.',
      techTitle: 'Keahlian Teknis & Alat Kerja (Hard Skills)',
      softTitle: 'Keahlian Pendukung & Kolaborasi (Soft Skills)',
      proficiencyLabel: 'Tingkat Kemahiran'
    },
    contact: {
      kicker: '/ KONTAK',
      headline: 'Mari Bekerja Sama Membangun Proyek Anda',
      subhead: 'Punya ide proyek, tawaran kolaborasi, atau ingin konsultasi teknis? Kirimkan pesan di bawah ini atau hubungi langsung melalui email dan media sosial.',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'cth. Budi Pratama',
      emailLabel: 'Alamat Email',
      emailPlaceholder: 'budi@perusahaan.com',
      messageLabel: 'Pesan',
      messagePlaceholder: 'Ceritakan secara singkat tentang proyek, kebutuhan, atau pertanyaan Anda...',
      sendButton: 'Kirim Pesan',
      sendingButton: 'Mengirim...',
      successTitle: 'Pesan Berhasil Terkirim!',
      successDesc: 'Terima kasih telah menghubungi! Saya akan merespons pesan Anda via email dalam waktu 24 jam.',
      directEmailTitle: 'Alamat Email Langsung',
      socialTitle: 'Media Sosial Profesional',
      emailAddress: 'john.developerx@example.com'
    },
    footer: {
      copyright: '© 2026 Developer X (John). Seluruh hak cipta dilindungi.',
      quickNav: 'Navigasi Cepat',
      builtWith: 'Dibuat dengan React 19, TypeScript, Tailwind CSS, dan Motion.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me'
    },
    hero: {
      accentKicker: 'DEVELOPER X · PORTFOLIO',
      headline: "Hi, I'm John — Web Developer & UI Designer",
      summary: 'Crafting high-performance web applications, fluid 60fps micro-animations, and resilient system architectures that empower digital products to scale.',
      aboutMini: 'ABOUT ME',
      aboutDesc: '10+ years of craft harmoniously fusing sub-second speed, spotless maintainability, and characterful visual design.',
      learnMore: 'LEARN MORE',
      workMini: 'MY WORK',
      workDesc: 'Delivering enterprise SaaS suites, modern editorial e-commerce, and FinTech apps built to global standards.',
      browseProjects: 'BROWSE PROJECTS',
      followMe: 'FOLLOW ME',
      scrollDown: 'Scroll Down',
      ctaContact: 'Contact Me',
      ctaCv: 'Download CV'
    },
    about: {
      kicker: '/ ABOUT ME',
      headline: 'Professional Background & Experience',
      intro: "I am a Web Developer & UI Designer passionate about contemporary frontend architecture. I focus on shipping digital products that are lightning fast, responsive, and intuitive.",
      background: 'For over a decade, I have led frontend and full-stack engineering efforts for Silicon Valley venture startups and multinational enterprises. My core interests lie in modular design token systems, Core Web Vitals optimization, and tactile spring physics motion.',
      stats: [
        { value: '10+', label: 'Years Experience', sub: 'Tech Industry' },
        { value: '150+', label: 'Shipped Projects', sub: 'Web & Mobile Apps' },
        { value: '99%', label: 'Client Satisfaction', sub: '5-Star Reviews' },
        { value: '40+', label: 'Global Clients', sub: 'Worldwide Reach' }
      ]
    },
    projects: {
      kicker: '/ PORTFOLIO / PROJECTS',
      headline: 'Featured Works & Case Studies',
      subhead: 'A curated selection of production projects showcasing clean code, robust performance, and modern aesthetic polish.',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      viewAllGithub: 'View All Repositories on GitHub'
    },
    skills: {
      kicker: '/ SKILLS & TOOLS',
      headline: 'Technical Disciplines & Supporting Skills',
      subhead: 'The toolchains, frameworks, and methodologies I leverage daily to deliver production-grade software.',
      techTitle: 'Technical Capabilities & Tools (Hard Skills)',
      softTitle: 'Supporting Capabilities & Mindset (Soft Skills)',
      proficiencyLabel: 'Proficiency'
    },
    contact: {
      kicker: '/ CONTACT',
      headline: "Let's Build Something Great Together",
      subhead: "Have an upcoming project, contract inquiry, or want to explore collaboration? Send a note below or reach out directly.",
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Alex Morgan',
      emailLabel: 'Email Address',
      emailPlaceholder: 'alex@company.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly describe your project goals, scope, or questions...',
      sendButton: 'Send Message',
      sendingButton: 'Sending...',
      successTitle: 'Message Sent Successfully!',
      successDesc: 'Thank you for reaching out! Your message has been received and I will reply to your email within 24 hours.',
      directEmailTitle: 'Direct Email Address',
      socialTitle: 'Professional Social Profiles',
      emailAddress: 'john.developerx@example.com'
    },
    footer: {
      copyright: '© 2026 Developer X (John). All rights reserved.',
      quickNav: 'Quick Navigation',
      builtWith: 'Engineered with React 19, TypeScript, Tailwind CSS, and Motion.'
    }
  }
};
