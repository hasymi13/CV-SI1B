export type Language = 'id' | 'en';

export interface Project {
  id: string;
  title: string;
  description: {
    id: string;
    en: string;
  };
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface TechnicalSkill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
}

export interface SoftSkill {
  name: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  icon: string;
}
