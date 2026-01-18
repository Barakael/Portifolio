export interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  badges?: string[];
  url?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  technologies: string[];
}

export interface WorkProject {
  id: number;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  highlights: string[];
}

