export interface Project {
  name: string;
  description: string;
  demoLink: string;
  codeLink: string;
  technologies: string[];
  image?: string;
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

export interface IconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

export interface ProjectCardProps {
  project: Project;
}