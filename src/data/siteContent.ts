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
    category: 'EDTECH & DIGITAL PLATFORMS',
    status: 'WEBSITE COMPLETED / ERP IN DEVELOPMENT',
    description: 'Cybernaut is an EdTech platform for delivering digital learning experiences, with an ERP system currently being developed to support its internal operations.',
    image: '/clients/cybernaut.png',
    challenge: 'Cybernaut needs a strong digital platform for its EdTech ecosystem while also building an internal system to manage its operations.',
    solution: 'CreateOn completed the Cybernaut website and is currently developing Cybernaut Minutos ERP as a full-stack, multi-tenant business management platform.',
    delivered: 'Cybernaut Minutos ERP is being developed with separate administrative and user experiences, role-based access, multi-tenant architecture, real-time notifications and modular business workflows.',
    tags: ['Super Admin', 'Admin', 'User', 'HR / Manager / Employee / Intern Roles', 'Authentication', 'Role-Based Access Control', 'Multi-Tenant ERP', 'Real-Time Notifications', 'Audit Logging'],
    deliverables: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Redis', 'React', 'Vite', 'Tailwind', 'Socket.io']
  },
  {
    id: 'pakoda-boyz',
    slug: 'pakoda-boyz',
    number: '02',
    title: 'PAKODA BOYZ BIRIYANI',
    category: 'HOSPITALITY & FOOD',
    status: 'WEBSITE + ANDROID APP IN DEVELOPMENT',
    description: 'CreateOn is building a dedicated digital ordering and delivery platform for Pakoda Boyz Biryani across web and Android.',
    image: '/clients/Pakodaboyz.png',
    challenge: 'Build a digital ordering experience that makes it easier for customers to browse, order and receive food while giving the restaurant a central system to manage operations.',
    solution: 'We are developing a connected customer, restaurant and delivery experience with a shared backend and database.',
    delivered: 'The platform includes a customer-facing Android app and website, a restaurant admin dashboard, and a delivery partner interface.',
    tags: ['Customer App', 'Customer Website', 'Menu Browsing', 'Cart', 'Order Placement', 'Delivery Details', 'Online Payments', 'Order Tracking', 'Restaurant Admin', 'Menu Management', 'Customer Management', 'Delivery Assignment', 'Delivery Status', 'Backend + Database', 'Notifications', 'Order Synchronization'],
  },
  {
    id: 'cafeme',
    slug: 'cafeme',
    number: '03',
    title: 'CAFE ME',
    category: 'HOSPITALITY / LIVE PROJECT',
    status: 'CLIENT PROJECT · LIVE',
    description: 'A welcoming neighborhood café showcase highlighting pure vegetarian artisan specials, curated comfort platters, responsive layout architecture, and high-conversion tactile imagery.',
    image: '/projects/cafeme.jpg',
    challenge: 'Translating the cozy, artisanal feel of a neighborhood cafe into a modern digital storefront.',
    solution: 'Built a visually warm, image-rich responsive site featuring a direct WhatsApp concierge integration.',
    delivered: 'A welcoming digital sanctuary that drives footfall and simplifies table reservations.',
    tags: ['Live Deployment', 'WhatsApp Concierge', 'Pure Vegetarian Sanctum'],
    deliverables: ['Production Web Platform', 'Interactive Menu', 'Google Maps Routing'],
    liveUrl: 'https://create-on-software-cafe-me.vercel.app/'
  },
  {
    id: 'microfin',
    slug: 'microfin',
    number: '04',
    title: 'MICROFIN',
    category: 'FINTECH / MICROFINANCE',
    status: 'APPLICATION PROJECT',
    description: 'MicroFin is a mobile-first microfinance management application designed to manage sectors, customers, loans, payments, collections and financial records in one place.',
    image: '/clients/MICROFIN.png',
    challenge: 'Finance managers need a simple way to manage customers, loans, collections and financial records while keeping all related information connected.',
    solution: 'MicroFin connects customer management, loan management, collections, payments, dashboard information and financial records in one application.',
    delivered: 'Users can manage sectors and customers, automatically generate customer Roll Numbers such as #A01 and #A02, create and track loans, record payments and monitor outstanding balances.',
    tags: ['Sector Management', 'Customer Management', 'Automatic Roll Numbers', 'Customer Profiles', 'Loan Management', 'Loan History', 'Active Loan Tracking', 'Loan Limit Controls', 'Payment Collection', 'Cash / UPI / Bank Transfer', 'Automatic Outstanding Balance Updates', 'Dashboard', 'Transaction History', 'Cash Calculator', 'Audit', 'Settings / Profile'],
    liveUrl: 'https://micro-fi-ten.vercel.app/'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'WEB DESIGN',
    category: 'DIGITAL EXPERIENCES',
    description: 'Modern, responsive websites designed around your brand, audience and business goals.',
    tags: ['UI/UX Design', 'Responsive Design', 'Design Systems', 'Brand Integration', 'Conversion-focused Layouts'],
  },
  {
    id: 'web-development',
    number: '02',
    title: 'WEB DEVELOPMENT',
    category: 'DIGITAL EXPERIENCES',
    description: 'Fast, responsive websites that work smoothly across phones, tablets and desktops.',
    tags: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel', 'Cloud Deployment'],
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-COMMERCE',
    category: 'DIGITAL EXPERIENCES',
    description: 'Online stores designed to make browsing, checkout and order management simple for your customers.',
    tags: ['Product Catalog', 'Cart & Checkout', 'Payment Integration', 'Order Management', 'Mobile Commerce'],
  },
  {
    id: 'business-systems',
    number: '04',
    title: 'BUSINESS SYSTEMS',
    category: 'BUSINESS & GROWTH',
    description: 'Dashboards, ERP tools and internal systems that bring your business operations into one place.',
    tags: ['ERP', 'Admin Dashboards', 'Role-Based Access', 'Data Management', 'Real-Time Systems', 'Reports & Analytics'],
  },
  {
    id: 'seo-digital-growth',
    number: '05',
    title: 'SEO & DIGITAL GROWTH',
    category: 'BUSINESS & GROWTH',
    description: 'Improve how your business appears online and make it easier for customers to find you.',
    tags: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'Google Business Profile', 'Search Visibility', 'Analytics'],
  },
  {
    id: 'meta-ads',
    number: '06',
    title: 'META ADS',
    category: 'BUSINESS & GROWTH',
    description: 'Targeted advertising campaigns designed to reach the right audience, generate enquiries and support business growth.',
    tags: ['Campaign Strategy', 'Audience Targeting', 'Ad Creatives', 'Lead Generation', 'Campaign Optimization'],
  },
  {
    id: 'custom-software',
    number: '07',
    title: 'CUSTOM SOFTWARE',
    category: 'DIGITAL EXPERIENCES',
    description: 'Custom digital products built around the specific way your business works.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis', 'Socket.io', 'REST APIs', 'AWS'],
  },
  {
    id: 'maintenance-support',
    number: '08',
    title: 'MAINTENANCE & SUPPORT',
    category: 'BUSINESS & GROWTH',
    description: 'Keep your website or application secure, updated and running smoothly after launch.',
    tags: ['Bug Fixes', 'Updates', 'Security', 'Performance', 'Monitoring', 'Ongoing Support'],
  },
  {
    id: 'mobile-applications',
    number: '09',
    title: 'MOBILE APPLICATIONS',
    category: 'MOBILE',
    description: 'Mobile applications designed for your customers, employees or business operations.',
    tags: ['Android', 'React Native', 'API Integration', 'Authentication', 'Notifications'],
  }
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
