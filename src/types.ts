export interface SpecItem {
  label: string;
  value: string;
  statusColor?: string;
}

export interface CredibilityCard {
  label: string;
  iconName: string;
  badge?: string;
}

export interface MetricCard {
  value: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  strategy: string;
  execution: string[];
  results: string[];
  technologies: string[];
  imageSrc: string;
  ctaText: string;
  methodology?: string[];
  keyLearnings?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  ctaText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialId?: string;
  credentialUrl?: string;
  iconColor?: string;
  isSelfDirected?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  analyticalAngle: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  contentMarkdown?: string;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  relatedArticleIds?: string[];
  relatedServicePath?: string;
  relatedServiceName?: string;
  relatedCaseStudyPath?: string;
  relatedCaseStudyName?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  linkedCaseStudyPath?: string;
}
