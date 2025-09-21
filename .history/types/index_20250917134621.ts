export interface Project {
  name: string;
  description: string;
  demoLink: string;
  codeLink: string;
  technologies: string[];
}

export interface Contact {
  icon: string;
  text: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}