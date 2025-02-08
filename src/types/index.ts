import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  docsUrl: string;
  lastUpdated: string;
  category: string;
  features: string[];
  maintainers: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  icon: LucideIcon;
  responsibilities: {
    title: string;
    description: string;
  }[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface ProjectDocumentation {
  title: string;
  sections: {
    gettingStarted: DocumentationSection;
    development: DocumentationSection;
    contribution: DocumentationSection;
    community: DocumentationSection;
    [key: string]: DocumentationSection;
  };
}

export interface DocumentationSection {
  title: string;
  content: string;
}