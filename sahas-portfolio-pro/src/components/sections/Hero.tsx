'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Zap, CircuitBoard, Cpu } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position to movement values instead of rotation
  const moveX = useTransform(mouseXSpring, [-300, 300], [-10, 10]);
  const moveY = useTransform(mouseYSpring, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = (containerRef.current as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
        setMousePosition({ x: e.clientX - centerX, y: e.clientY - centerY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/sahas-eashan', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sahas-eashan', icon: Linkedin },
    { name: 'Email', href: 'mailto:sahaseashangalle@gmail.com', icon: Mail }
  ];

  // Floating particles animation - Fixed for SSR
  const [particles, setParticles] = useState<React.ReactElement[]>([]);

  // Simple seeded random function to ensure consistency
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  useEffect(() => {
    setIsMounted(true);

    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => {
        const seed = i * 123.456; // Use index as seed for consistency
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            initial={{
              x: seededRandom(seed + 1) * (window.innerWidth || 1000),
              y: seededRandom(seed + 2) * (window.innerHeight || 800),
              opacity: 0
            }}
            animate={{
              x: seededRandom(seed + 3) * (window.innerWidth || 1000),
              y: seededRandom(seed + 4) * (window.innerHeight || 800),
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: seededRandom(seed + 5) * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: seededRandom(seed + 6) * 100 + '%',
              top: seededRandom(seed + 7) * 100 + '%',
            }}
          />
        );
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #1a1a3e 75%, #0f0f23 100%)',
        perspective: '1000px'
      }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Dynamic Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {isMounted && particles}
      </div>

      {/* Main Container */}
      <motion.div
        className="relative z-20 h-full flex items-center justify-center p-8"
        style={{
          x: moveX,
          y: moveY
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Left: Modern Profile Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Glassmorphism Photo Card */}
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto"
              animate={{
                scale: isHovered ? 1.02 : 1,
                rotateY: isHovered ? 5 : 0
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
              </div>

              {/* Photo container */}
              <div className="relative w-full h-full p-4">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/sahas eashan.jpg"
                    alt="Sahas Eashan"
                    className="w-full h-full object-cover object-top filter brightness-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue-500/10" />
                </div>

              </div>

              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-blue-400/50 to-purple-400/50 animate-spin-slow" style={{ animation: 'spin 20s linear infinite' }} />
            </motion.div>
          </motion.div>

          {/* Right: Content with modern design */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Name Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  className="block text-white/90 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Sahas Eashan
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Role Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center gap-3 text-xl sm:text-2xl font-semibold text-cyan-300">
                <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                Research Associate at RoboticGen Labs
              </div>
              <p className="text-lg text-blue-200/90 ml-6">
                Electronic & Telecommunication Engineering Student
              </p>
            </motion.div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="text-lg leading-relaxed text-gray-200 max-w-2xl">
                Contributing to{" "}
                <span className="text-blue-400 font-semibold border-b-2 border-blue-400/50">
                  advanced robotics & AI
                </span>{" "}
                with focus on{" "}
                <span className="text-cyan-400 font-semibold border-b-2 border-cyan-400/50">
                  AI applications
                </span>
                ,{" "}
                <span className="text-purple-400 font-semibold border-b-2 border-purple-400/50">
                  embedded systems
                </span>
                , and autonomous robotic solutions.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="flex flex-wrap gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                {
                  label: "CGPA",
                  value: "3.92",
                  description: "First Class Honours",
                  color: "text-emerald-400",
                  icon: "🎓"
                },
                {
                  label: "Projects",
                  value: "15+",
                  description: "Technical Projects",
                  color: "text-blue-400",
                  icon: "🚀"
                },
                {
                  label: "Awards",
                  value: "10+",
                  description: "Recognition",
                  color: "text-purple-400",
                  icon: "🏆"
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-white/90 text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-white/60 text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-6 pt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <motion.button
                onClick={() => scrollToAbout()}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-semibold text-white border border-blue-500/50 shadow-lg shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-2">
                  <span>Explore My Universe</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="bg-slate-800/50 hover:bg-slate-700/50 px-8 py-4 rounded-xl font-semibold text-white border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-2">
                  <Download size={18} />
                  <span>Download CV</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-3 rounded-full text-white/80 hover:text-white bg-slate-800/30 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="relative p-4 rounded-full text-white/80 group overflow-hidden"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            type: "spring",
            stiffness: 300
          }}
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 group-hover:border-white/40 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
          </div>

          {/* Icon */}
          <div className="relative z-10">
            <ArrowDown size={20} />
          </div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-blue-500/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;