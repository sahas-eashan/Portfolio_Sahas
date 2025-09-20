'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/sahas-eashan', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sahas-eashan', icon: Linkedin },
    { name: 'Email', href: 'mailto:sahaseashangalle@gmail.com', icon: Mail }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-200/50 dark:bg-slate-900/50 border-t border-slate-300/50 dark:border-slate-700/50 relative">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Brand & Description */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SE</span>
              </div>
              <span className="text-slate-800 dark:text-white font-bold text-xl">Sahas Eashan</span>
            </motion.div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Electronic & Telecommunication Engineering student passionate about robotics,
              AI, and creating innovative solutions to real-world problems.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-slate-800 dark:text-white font-semibold text-lg">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors duration-200 text-left"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-slate-800 dark:text-white font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-slate-600 dark:text-slate-400">
                📍 University of Moratuwa, Sri Lanka
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                📧 sahaseashangalle@gmail.com
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                🎓 Electronic & Telecommunication Engineering
              </p>
            </div>
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </motion.button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-300/50 dark:border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sahas Eashan. All rights reserved.
            </p>
            <motion.p
              className="text-slate-600 dark:text-slate-400 text-sm flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
            >
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={14} className="text-red-500" />
              </motion.span>
              <span>using Next.js & Tailwind CSS</span>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/5 dark:bg-indigo-600/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;