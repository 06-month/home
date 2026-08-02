export interface Project {
  id: string;
  title: string;
  period?: string;
  keywords: string[];
  description: string;
  href?: string;
  label?: string;
  blogHref?: string;
  ongoing?: boolean;
  /** Work from the earlier 2D-vision identity; rendered in a compressed list. */
  earlier?: boolean;
  type?: string;
}

export interface ArticleItem {
  tag: string;
  /** Publication date as shown on the archive, e.g. "2026.07.17". */
  date: string;
  title: string;
  href: string;
  /** Reviews from the earlier hand-pose reading; collapsed by default. */
  earlier?: boolean;
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
