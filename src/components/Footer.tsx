import React from 'react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteContent';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="w-full bg-[#030e20] border-t border-white/[0.08] text-[#d7e3fc]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          {/* Studio Brand Anchor */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-3 mb-6 focus:outline-none text-left group"
            >
              <img
                src={SITE_METADATA.logoPath}
                alt="CreateOn Software"
                className="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-white">
                CREATEON <span className="text-[#ff6b00]">SOFTWARE</span>
              </span>
            </button>
            <p className="font-['Space_Grotesk'] text-xl lg:text-2xl font-bold uppercase tracking-tight text-white mb-2">
              {SITE_METADATA.tagline}
            </p>
            <p className="font-['JetBrains_Mono'] text-xs uppercase text-[#94a3b8] tracking-widest">
              {SITE_METADATA.subTagline}
            </p>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] mt-4 max-w-sm leading-relaxed">
              An independent studio designing and engineering bespoke digital experiences, web applications, and high-performance digital products.
            </p>
          </div>

          {/* Navigation & Presence */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#94a3b8] mb-4">
                Navigation
              </h4>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => onNavigate(link.path)}
                    className="font-['JetBrains_Mono'] text-xs uppercase text-[#d7e3fc] hover:text-[#ff6b00] tracking-wider transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-2">
              <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#94a3b8] mb-2">
                Location
              </h4>
              <p className="font-['DM_Sans'] text-sm text-[#d7e3fc] flex items-start gap-2 max-w-[200px]">
                <span className="material-symbols-outlined text-[#ff6b00] text-base mt-0.5">location_on</span>
                <span>179, Thirunagar, Thirumalai Salai, Ramapuram, Chennai, Tamil Nadu – 600089</span>
              </p>
            </div>
          </div>

          {/* Direct Connect */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#94a3b8] mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="font-['JetBrains_Mono'] text-xs text-[#ff6b00] hover:underline transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                {SITE_METADATA.email}
              </a>
              <a
                href="https://wa.me/919789283382"
                target="_blank"
                rel="noreferrer"
                className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] hover:text-[#25D366] transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp
              </a>
              <a
                href={SITE_METADATA.instagram}
                target="_blank"
                rel="noreferrer"
                className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] hover:text-[#E1306C] transition-colors flex items-center gap-1.5"
                aria-label="Visit CreateOn Software on Instagram"
              >
                <span className="material-symbols-outlined text-sm">share</span>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] tracking-wider uppercase">
            {SITE_METADATA.copyright}
          </span>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12]">
            <span className="w-2 h-2 rounded-full bg-[#fabd00] animate-pulse" />
            <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase text-[#fabd00] tracking-widest font-medium">
              AVAILABLE FOR SELECT PROJECTS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
