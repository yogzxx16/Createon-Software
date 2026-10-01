export type RoutePath = '/' | '/work' | '/services' | '/clients' | '/contact' | '/work/cybernaut';

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  status: 'CLIENT PROJECT · IN PROGRESS' | 'CLIENT PROJECT · LIVE';
  stage?: string;
  location?: string;
  business?: string;
  address?: string;
  phone?: string;
  description: string;
  scope?: string;
  stack?: string;
  timeline?: string;
  liveUrl?: string;
  image: string;
  metrics?: { label: string; value: string }[];
  tags?: string[];
  deliverables?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverablesLabel: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface StudioPrinciple {
  number: string;
  title: string;
  description: string;
}
