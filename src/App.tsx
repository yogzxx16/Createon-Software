import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { CybernautCaseStudyPage } from './pages/CybernautCaseStudyPage';

export default function App() {
  const getInitialPath = (): RoutePath => {
    const p = window.location.pathname;
    if (p === '/work' || p === '/services' || p === '/clients' || p === '/contact' || p === '/work/cybernaut') {
      return p as RoutePath;
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<RoutePath>(getInitialPath());

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      if (p === '/work' || p === '/services' || p === '/clients' || p === '/contact' || p === '/work/cybernaut') {
        setCurrentPath(p as RoutePath);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: RoutePath) => {
    setCurrentPath(path);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // SEO dynamic metadata management
  useEffect(() => {
    let title = 'CreateOn Software — Web Development & Digital Solutions';
    let description = 'CreateOn Software designs and builds modern websites, digital products and software experiences for businesses, teams and ambitious ideas.';

    switch (currentPath) {
      case '/work':
        title = 'Our Work — CreateOn Software | Client Projects & Architecture';
        description = "Explore CreateOn Software's active client projects including Cybernaut EdTech, Pakoda Boyz Biriyani, and Cafe Me.";
        break;
      case '/services':
        title = 'What We Do — CreateOn Software | Capabilities & Engineering';
        description = 'Web design, full-stack web development, e-commerce, CMS, responsive experiences, and digital products engineered for real-world reliability.';
        break;
      case '/clients':
        title = 'People We Build With — CreateOn Software | Collaborations';
        description = 'Radical transparency: Real partnerships, active sprint velocity, and tangible architectural code for ambitious businesses and creators.';
        break;
      case '/contact':
        title = 'Let’s Build Something — CreateOn Software | Start a Project';
        description = 'Contact CreateOn Software in Chennai, India. Direct founder dialogue, 24-hour response turnaround, and engineering sprints.';
        break;
      case '/work/cybernaut':
        title = 'Cybernaut EdTech Case Study — CreateOn Software';
        description = 'Autonomous system console and developer compute intelligence engineered from atomic design tokens to reactive front-end runtime.';
        break;
      default:
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-[#071325] text-[#d7e3fc] flex flex-col font-['DM_Sans'] antialiased selection:bg-[#ff6b00] selection:text-[#081426]">
      {/* Top Fixed Header Navbar */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentPath === '/' && <HomePage onNavigate={handleNavigate} />}
        {currentPath === '/work' && <WorkPage onNavigate={handleNavigate} />}
        {currentPath === '/services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPath === '/clients' && <ClientsPage onNavigate={handleNavigate} />}
        {currentPath === '/contact' && <ContactPage />}
        {currentPath === '/work/cybernaut' && <CybernautCaseStudyPage onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
