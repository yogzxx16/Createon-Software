import { ProjectItem, ServiceItem, ProcessStep, StudioPrinciple } from '../types';

export const SITE_METADATA = {
  name: 'CreateOn Software',
  tagline: 'YOUR VISION. OUR CODE.',
  subTagline: 'CREATE. LEARN. GROW.',
  email: 'createonsoftware@gmail.com',
  whatsapp: '+91 97892 83382',
  instagram: 'https://www.instagram.com/createon.official/',
  address: '179, Thirunagar, Thirumalai Salai, Ramapuram, Chennai, Tamil Nadu – 600089',
  city: 'Chennai',
  region: 'Tamil Nadu',
  country: 'India',
  logoPath: '/brand/createon-logo.png',
  copyright: '© 2026 CREATEON SOFTWARE. ALL RIGHTS RESERVED.',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cybernaut',
    slug: 'cybernaut',
    number: '01',
    title: 'CYBERNAUT EDTECH',
    subtitle: 'Autonomous System Console & Developer Intelligence',
    category: 'EDTECH & DIGITAL PLATFORMS',
    status: 'CLIENT PROJECT · IN PROGRESS',
    stage: 'DESIGN → DEVELOPMENT',
    description:
      'An active client project currently being designed and developed by CreateOn Software. Engineered as a high-throughput computational platform with intuitive visual navigation and next-generation interactive data density.',
    scope: 'Brand Experience & UI Architecture',
    stack: 'Next.js 14, WebGL, Tailwind CSS',
    timeline: 'Q2 — Q3 2025',
    liveUrl: 'https://www.cybernaut.co.in/',
    image: '/projects/cybernaut.jpg',
    tags: ['Design System', 'Responsive Web', 'Telemetry HUD', 'SPA'],
    deliverables: ['Design Tokens', 'Component Library', 'Production SPA'],
  },
  {
    id: 'pakoda-boyz',
    slug: 'pakoda-boyz',
    number: '02',
    title: 'PAKODA BOYZ BIRIYANI',
    subtitle: 'Authentic Chennai Flavors & Culinary Ordering System',
    category: 'HOSPITALITY & COMMERCE',
    status: 'CLIENT PROJECT · IN PROGRESS',
    stage: 'IN SPRINT',
    location: 'CHENNAI, TAMIL NADU',
    business: 'Biryani Restaurant',
    address: '183 Periyar Pathai, Chennai, Tamil Nadu – 600094',
    phone: '090030 96662',
    description:
      'Collaborative menu categorization, digital takeaway ordering flow, and authentic Chennai flavor photography art direction designed for fast-paced modern dining.',
    scope: 'Brand Identity & Digital Experience',
    stack: 'Responsive Web, Mobile First, Tailwind',
    timeline: 'Active Sprint 04',
    image: '/projects/pakoda-boyz.jpg',
    tags: ['Menu Architecture', 'Takeaway Ordering', 'Tactile Imagery'],
    deliverables: ['Brand Architecture', 'Mobile Ordering Flows', 'Local SEO Schema'],
  },
  {
    id: 'cafeme',
    slug: 'cafeme',
    number: '03',
    title: 'CAFE ME',
    subtitle: 'Neighborhood Sanctuary & Specialty Artisan Coffee',
    category: 'HOSPITALITY · LIVE DEPLOYMENT',
    status: 'CLIENT PROJECT · LIVE',
    stage: 'VERCEL DEPLOYED',
    location: 'K.K. NAGAR · CHENNAI',
    business: '100% Vegetarian Café',
    address: 'Old No. 260, New No. 54, Alagirisamy Salai, Opp. PSBB School (Gate 1), Sector 8, K.K. Nagar, Chennai, Tamil Nadu – 600078',
    phone: '9042888988',
    liveUrl: 'https://create-on-software-cafe-me.vercel.app/',
    description:
      'A welcoming neighborhood café showcase highlighting pure vegetarian artisan specials, curated comfort platters, responsive layout architecture, and high-conversion tactile imagery.',
    scope: 'Website Design & Development',
    stack: 'React, Tailwind CSS, Vercel Edge',
    timeline: 'Live Production',
    image: '/projects/cafeme.jpg',
    metrics: [
      { label: 'STATUS', value: 'LIVE IN PRODUCTION' },
      { label: 'CONCIERGE', value: 'WHATSAPP RESERVATIONS' },
    ],
    tags: ['Live Deployment', 'WhatsApp Concierge', 'Pure Vegetarian Sanctum'],
    deliverables: ['Production Web Platform', 'Interactive Menu', 'Google Maps Routing'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'WEB DESIGN',
    tagline: 'FOUNDATIONAL INTERACTION LAYER',
    description:
      'Interfaces designed around your brand, audience and goals. We combine visual hierarchy, user psychology, and design tokens to create interfaces that engage.',
    deliverablesLabel: 'DELIVERABLES',
    tags: ['Wireframes', 'Design Systems', 'High-Fidelity UI', 'Responsive Layouts'],
  },
  {
    id: 'web-development',
    number: '02',
    title: 'WEB DEVELOPMENT',
    tagline: 'PRECISION FRONTEND ENGINEERING',
    description:
      'Fast, responsive websites engineered for real-world use. Clean code, modern frontend standards, and accessible markup built on resilient infrastructure.',
    deliverablesLabel: 'TECH STACK',
    tags: ['HTML5/CSS3', 'Modern JS', 'Tailwind CSS', 'Responsive Grids'],
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-COMMERCE',
    tagline: 'TRANSACTIONAL COMMERCE ENGINES',
    description:
      'Digital storefronts designed around usability and conversion. Streamlined checkout flows and intuitive catalog architecture that maximize transaction efficiency.',
    deliverablesLabel: 'SPECIALIZATION',
    tags: ['Checkout UX', 'Inventory Views', 'Payment APIs'],
  },
  {
    id: 'cms-development',
    number: '04',
    title: 'CMS DEVELOPMENT',
    tagline: 'HEADLESS & MODULAR PUBLISHING',
    description:
      'Flexible content systems and CMS integrations. Easy-to-manage workflows tailored to your team\'s publishing rhythm without visual fragility or code bloat.',
    deliverablesLabel: 'CAPABILITIES',
    tags: ['Custom Schemas', 'Editorial Auth', 'REST / GraphQL'],
  },
  {
    id: 'seo-ready-development',
    number: '05',
    title: 'SEO-READY DEVELOPMENT',
    tagline: 'CRAWLABILITY & TECHNICAL DISCOVERY',
    description:
      'Clean technical foundations that support discoverability and performance. Semantic markup, metadata structure, and fast load times engineered straight into source.',
    deliverablesLabel: 'FOCUS AREAS',
    tags: ['Semantic HTML', 'Schema Graph', 'Edge Speed'],
  },
  {
    id: 'digital-products',
    number: '06',
    title: 'DIGITAL PRODUCTS',
    tagline: 'FULL-SCALE INTERACTIVE PLATFORMS',
    description:
      'Custom web applications and interactive products. Scalable frontend interfaces designed for complex functionality, resilient state handling, and data density.',
    deliverablesLabel: 'FRAMEWORKS',
    tags: ['Custom Portals', 'SaaS UX', 'State Flows'],
  },
  {
    id: 'responsive-experiences',
    number: '07',
    title: 'RESPONSIVE EXPERIENCES',
    tagline: 'CROSS-DEVICE FLUIDITY',
    description:
      'Interfaces designed to work seamlessly across desktop, tablet and mobile devices with pixel precision. No truncated typography or awkward touch targets.',
    deliverablesLabel: 'SPECS',
    tags: ['Mobile First', 'Touch Tuning', 'Fluid Typescale'],
  },
  {
    id: 'maintenance-support',
    number: '08',
    title: 'MAINTENANCE & SUPPORT',
    tagline: 'POST-DEPLOYMENT LIFECYCLE',
    description:
      'Ongoing improvements, performance monitoring, updates, and dedicated technical support after launch so your product continues to evolve sustainably.',
    deliverablesLabel: 'COVERAGE',
    tags: ['Health Checks', 'Security Patches', 'SLA Response'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    step: 'UNDERSTAND',
    title: 'UNDERSTAND',
    description: 'We learn about your business, audience and the problem you\'re solving.',
    deliverable: 'System Architecture & Discovery',
  },
  {
    number: '02',
    step: 'SHAPE',
    title: 'SHAPE',
    description: 'We define the structure, experience and visual direction.',
    deliverable: 'Interactive Prototypes & UI Kit',
  },
  {
    number: '03',
    step: 'BUILD',
    title: 'BUILD',
    description: 'We develop and refine your solution with clear communication.',
    deliverable: 'Full-Stack Production Builds',
  },
  {
    number: '04',
    step: 'DELIVER',
    title: 'DELIVER',
    description: 'We test, launch and support the final product.',
    deliverable: 'Global Edge Deployment & SLA',
  },
];

export const PRINCIPLES: StudioPrinciple[] = [
  {
    number: '01',
    title: 'BUILT WITH INTENTION',
    description: 'Every decision is guided by the project\'s purpose and the people who will use it. We resist cosmetic filler and arbitrary trends in favor of functional clarity.',
  },
  {
    number: '02',
    title: 'DESIGN MEETS DEVELOPMENT',
    description: 'We bring visual thinking and technical implementation together. Our designers understand engineering limitations; our engineers respect typographic and spatial integrity.',
  },
  {
    number: '03',
    title: 'COLLABORATION THAT MATTERS',
    description: 'We work closely with clients, maintain clear communication and refine ideas together. No layers of account managers—you speak directly with the builders.',
  },
];
