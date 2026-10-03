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
import { AnimatePresence, motion } from 'motion/react';


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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Intersection Observer for scroll reveals and Parallax
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const applyReveal = () => {
      const elements = document.querySelectorAll('section, .reveal-up');
      elements.forEach((el) => {
        if (el.tagName.toLowerCase() === 'section') {
          el.classList.add('reveal-up');
        }
        observer.observe(el);
      });
    };

    // Delay slightly to let React render
    setTimeout(applyReveal, 100);

    let frameId: number;
    const handleScroll = () => {
      frameId = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>;
        parallaxElements.forEach((el) => {
          const speed = el.dataset.speed ? parseFloat(el.dataset.speed) : 0.1;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [currentPath]);

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

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    in: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    out: { opacity: 0, y: -15, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#071325] text-[#d7e3fc] flex flex-col font-['DM_Sans'] antialiased selection:bg-[#ff6b00] selection:text-[#081426]">
      {/* Top Fixed Header Navbar */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="w-full h-full"
          >
            {currentPath === '/' && <HomePage onNavigate={handleNavigate} />}
            {currentPath === '/work' && <WorkPage onNavigate={handleNavigate} />}
            {currentPath === '/services' && <ServicesPage onNavigate={handleNavigate} />}
            {currentPath === '/clients' && <ClientsPage onNavigate={handleNavigate} />}
            {currentPath === '/contact' && <ContactPage />}
            {currentPath === '/work/cybernaut' && <CybernautCaseStudyPage onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
