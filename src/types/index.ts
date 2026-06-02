export interface Project {
  id: string;
  title: string;
  keywords: string[];
  description: string;
  href?: string;
  label?: string;
  blogHref?: string;
  ongoing?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  gpa: string;
  majorGpa?: string;
  details?: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  href?: string;
}

