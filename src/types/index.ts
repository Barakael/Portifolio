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
