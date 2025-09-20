'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-slate-800/50 animate-pulse" />
    );
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' }
  ];

  const currentTheme = themes.find(t => t.name === theme) || themes[1];
  const Icon = currentTheme.icon;

  return (
    <div className="relative">
      <motion.button
        className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-200"
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.name === theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          setTheme(themes[nextIndex].name);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={`Switch to ${themes[(themes.findIndex(t => t.name === theme) + 1) % themes.length].label} mode`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;