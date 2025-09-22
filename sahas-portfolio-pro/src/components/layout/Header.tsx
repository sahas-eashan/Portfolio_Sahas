'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';

// --- DATA CONSTANTS ---
// Keeping data separate makes the component easier to read and manage.
const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/sahas-eashan', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/sahas-eashan', icon: Linkedin },
  { name: 'Email', href: 'mailto:sahaseashangalle@gmail.com', icon: Mail },
];

// --- ANIMATION VARIANTS ---
// Using variants for animations cleans up the JSX.
const mobileMenuVariant = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2, when: "afterChildren" }
  },
};

const mobileMenuItemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 }
};


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function for smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Left - Logo & Name */}
          <motion.a href="#home" onClick={(e) => scrollToSection(e, '#home')} whileHover={{ scale: 1.05 }} className="flex-shrink-0 flex items-center space-x-3" style={{ marginLeft: '40px' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">Sahas Eashan</span>
          </motion.a>

          {/* Center - Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium text-base tracking-wide relative group px-4 py-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Right - Actions */}
          <div className="flex items-center gap-6" style={{ marginRight: '12px' }}>
            <div className="hidden sm:flex items-center gap-4">
              {SOCIAL_LINKS.filter(s => s.name !== 'Email').map((social) => {
                const Icon = social.icon;
                return (
                   <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>

            <motion.button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-400/50 text-blue-300 hover:text-blue-200 font-medium text-sm rounded-md transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-full transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50"
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col space-y-2 p-6">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-slate-300 hover:text-white transition-colors duration-200 py-2 text-lg"
                  variants={mobileMenuItemVariant}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div variants={mobileMenuItemVariant} className="pt-4 mt-4 border-t border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                 {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon size={22} />
                      </motion.a>
                    );
                  })}
                </div>
                <motion.button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 border border-blue-500/50 text-blue-300 font-medium text-sm rounded-lg transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                 >
                  <Download size={16} />
                  <span>Resume</span>
                </motion.button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;