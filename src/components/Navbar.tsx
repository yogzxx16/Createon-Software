import React, { useState } from 'react';
import { RoutePath } from '../types';
import { SITE_METADATA } from '../data/siteContent';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030e20]/80 backdrop-blur-md border-b border-white/[0.1] shadow-md' : 'bg-[#071325] border-b border-transparent'}`}>
      <div className={`max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'}`}>
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 group focus:outline-none text-left"
            aria-label="CreateOn Software Home"
          >
            <img
              src={SITE_METADATA.logoPath}
              alt="CreateOn Software Logo"
              className="h-10 lg:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white hidden sm:inline-block">
              CREATEON <span className="text-[#ff6b00]">SOFTWARE</span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path === '/work' && currentPath === '/work/cybernaut');
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`font-['JetBrains_Mono'] text-[0.8125rem] uppercase tracking-wider transition-colors py-1 relative ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#94a3b8] hover:text-[#d7e3fc]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff6b00] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('/contact')}
            className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-[0.8125rem] uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-6 py-2.5 rounded hover:bg-[#ff8a00] hover:text-black transition-all duration-200 active:scale-[0.98] shadow-md shadow-[#ff6b00]/10"
          >
            START A PROJECT →
          </button>
        </div>

        {/* Mobile Hamburger & Profile preview */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => handleNavClick('/contact')}
            className="text-xs uppercase font-['JetBrains_Mono'] tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-3 py-1.5 rounded"
          >
            CONTACT →
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#d7e3fc] hover:text-white bg-[#101c2e] border border-white/[0.08] rounded focus:outline-none"
          >
            <span className="material-symbols-outlined text-2xl block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101c2e] border-b border-white/[0.08] px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 mb-6">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left font-['JetBrains_Mono'] text-sm uppercase tracking-wider py-2 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#ff6b00] font-semibold' : 'text-[#d7e3fc] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs text-[#ff6b00]">● ACTIVE</span>}
                </button>
              );
            })}
          </nav>
          <button
            onClick={() => handleNavClick('/contact')}
            className="w-full inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold py-3.5 rounded hover:bg-[#ff8a00] transition-all text-center"
          >
            START A PROJECT →
          </button>
        </div>
      )}
    </header>
  );
};
