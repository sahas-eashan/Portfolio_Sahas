'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Zap, CircuitBoard, Cpu } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseYSpring, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
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
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ));
      setParticles(newParticles);
    };

    if (typeof window !== 'undefined') {
      generateParticles();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      style={{ perspective: '1000px' }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Main Holographic Container */}
      <motion.div
        className="relative z-20 h-full flex items-center justify-center p-8"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Left: Holographic Photo */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, z: -100 }}
            animate={{ opacity: 1, z: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Holographic frame */}
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto"
              animate={{
                rotateY: isHovered ? 10 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/50 via-cyan-400/50 to-blue-600/50 blur-xl animate-pulse" />

              {/* Photo container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-blue-500/20">
                <img
                  src="/images/sahas eashan.jpg"
                  alt="Sahas Eashan"
                  className="w-full h-full object-cover object-top"
                />

                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-cyan-400/10" />

                {/* Scanning line effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  animate={{ y: [0, 384, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Floating tech icons */}
              {[CircuitBoard, Cpu, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="absolute w-8 h-8 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg flex items-center justify-center"
                  style={{
                    left: `${20 + index * 30}%`,
                    top: `${10 + index * 20}%`,
                    transform: `translateZ(${20 + index * 10}px)`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 2 + index,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <Icon size={16} className="text-blue-400" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Content with 3D cards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Name Card */}
            <motion.div
              className="relative p-6 bg-slate-800/20 backdrop-blur-lg border border-blue-500/20 rounded-2xl"
              whileHover={{
                z: 20,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.4)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-white">Hi, I'm</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Sahas Eashan
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Role Card */}
            <motion.div
              className="relative p-6 bg-slate-800/20 backdrop-blur-lg border border-cyan-500/20 rounded-2xl"
              whileHover={{
                z: 20,
                boxShadow: "0 20px 40px rgba(34, 211, 238, 0.2)",
                borderColor: "rgba(34, 211, 238, 0.4)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <p className="text-xl sm:text-2xl font-semibold text-cyan-300">
                  Research Associate at RoboticGen Labs
                </p>
                <p className="text-lg text-blue-300/80">
                  Electronic & Telecommunication Engineering Student
                </p>
              </motion.div>
            </motion.div>

            {/* Description Card */}
            <motion.div
              className="relative p-6 bg-slate-800/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl"
              whileHover={{
                z: 20,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
                borderColor: "rgba(168, 85, 247, 0.4)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.p
                className="text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Contributing to <span className="text-blue-400 font-semibold">advanced robotics R&D</span> with focus on
                <span className="text-cyan-400 font-semibold"> PCB design</span>,
                <span className="text-purple-400 font-semibold"> embedded systems integration</span>, and autonomous robotic solutions.
              </motion.p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { label: "CGPA", value: "3.92", description: "First Class Honours Candidate", color: "from-emerald-400 to-green-500" },
                { label: "Projects", value: "15+", description: "In Robotics, AI & Embedded Systems", color: "from-blue-400 to-cyan-500" },
                { label: "Awards", value: "10+", description: "For Innovation & Academic Excellence", color: "from-purple-400 to-pink-500" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative p-4 bg-slate-800/20 backdrop-blur-lg border border-slate-600/20 rounded-xl text-center group"
                  whileHover={{
                    scale: 1.05,
                    z: 15,
                    borderColor: "rgba(59, 130, 246, 0.4)"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  <div className="text-slate-400 text-xs italic mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <motion.button
                onClick={() => scrollToAbout()}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-base rounded-xl overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  z: 25,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore My Universe</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="relative px-8 py-4 bg-transparent border-2 border-blue-500/50 text-blue-400 font-semibold text-base rounded-xl backdrop-blur-sm group"
                whileHover={{
                  scale: 1.05,
                  z: 25,
                  borderColor: "rgba(59, 130, 246, 0.8)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Download size={18} />
                  <span>Download CV</span>
                </div>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
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
                    className="relative p-3 bg-slate-800/30 border border-slate-600/30 rounded-full text-slate-300 group"
                    whileHover={{
                      scale: 1.2,
                      z: 20,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <Icon size={20} />
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
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
          className="p-4 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 group"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(59, 130, 246, 0.3)",
            borderColor: "rgba(59, 130, 246, 0.6)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ y: { duration: 2, repeat: Infinity } }}
        >
          <ArrowDown size={24} />
          <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;