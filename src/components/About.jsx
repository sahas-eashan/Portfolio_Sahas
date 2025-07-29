import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

// Animation settings
const container = {
  visible: { transition: { staggerChildren: 0.13 } }
};
const child = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  // Leadership/community roles (fill images as needed)
  const roles = [
    {
      org: "Mora Esports Community",
      title: "Director - Event Management and Logistics",
      period: "Jun 2025 – Present",
      image: `${import.meta.env.BASE_URL}OIP.webp`,
      desc: "Spearheading logistics and event strategy for campus-wide Esports tournaments and digital engagement.",
    },
    {
      org: "IEEE RAS - UoM",
      title: "Assistant Secretary",
      period: "Dec 2024 – Present",
      image: `${import.meta.env.BASE_URL}RAs.webp`,
      desc: "Coordinating robotics activities, communications, and documentation for the student branch.",
    },
    {
      org: "Robotic Day",
      title: "Co-Chair",
      period: "Feb 2025 - Apr 2025 ",
      image: `${import.meta.env.BASE_URL}sb.webp`,
      desc: "Co-led one of the biggest university Events; managed the public crowd, delivered keynotes.",
    },
    {
      org: "Mora Esports Community",
      title: "Assistant Pillar Head - Public Relations",
      period: "May 2024 – Jun 2025",
      image: `${import.meta.env.BASE_URL}OIP.webp`,
      desc: "Built strong campus Esports presence via outreach, content, and creative PR initiatives.",
    },
    {
      org: "Electronic Club UoM",
      title: "Committee Member (Operations) - Main Pillar",
      period: "Feb 2024 – Present",
      image: `${import.meta.env.BASE_URL}eclub.webp`,
      desc: "Main pillar operations, project logistics, and STEM workshop facilitation.",
    },
    {
      org: "AIESEC UoM",
      title: "Matching Manager - IGV",
      period: "Feb 2024 – Aug 2024",
      image: `${import.meta.env.BASE_URL}aiesec.webp`,
      desc: "Managed interview and onboarding process for exchange students, growing cross-cultural collaboration.",
    },
  ];

  const extras = [
    "Committee - Electronic Club (UoM)",
    "Volunteer - IESL Student Chapter",
    "Prospect - Leo Club (UoM Leos)",
    "Member - IEEE IES (UoM)",
    "OC Member - NexGen 1.0",
    "Co-Chair - Robotics Day 2025",
    "PM Team Member - AIESEC",
    "OC Member - Enigma",
    "PR Committee - FINNC by IEEE IES",
    "Matching Panelist - AIESEC"
  ];

  return (
    <ParallaxSection offset={48}>
      <section
        id="about"
        className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-transparent to-blue-950/30"
      >
        {/* Animated circuit + orb background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M12 0v5h5v5h-5v5h-5v-5H0V5h5V0z" fill="currentColor" opacity="0.35" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit2)" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-blue-500/25 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-7 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center"
            variants={child}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          {/* Personal Statement */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12"
            variants={child}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            Enthusiastic undergraduate at the University of Moratuwa specializing in Electronic and Telecommunication Engineering (CGPA: 3.94). <br />
            Passionate about robotics, hardware design, AI, and solving real-world problems with tech.<br />
            <span className="text-cyan-400 font-semibold">Competitive programming enthusiast & robotics aficionado.</span>
          </motion.p>

          {/* Education & Certifications */}
          <motion.div 
            className="flex flex-col md:flex-row gap-8 justify-center mb-10"
            variants={child}
          >
            <motion.div
              className="bg-white/10 p-7 rounded-2xl shadow-xl flex-1 min-w-[260px]"
              whileHover={{
                boxShadow: "0 6px 42px 0 rgba(14, 165, 233, 0.15)",
                scale: 1.018,
                background:
                  "linear-gradient(90deg, rgba(6,182,212,0.13) 0%, rgba(139,92,246,0.09) 100%)"
              }}
              transition={{ type: "spring", stiffness: 320, damping: 25 }}
            >
              <div className="text-cyan-400 font-semibold text-lg mb-2">Education</div>
              <div className="text-white font-bold">B.Sc. (Hons) Electronic & Telecommunication Engineering</div>
              <div className="text-gray-300 mb-1">University of Moratuwa, 2023–2027</div>
              <div className="text-gray-400 text-sm">CGPA: 3.94/4.0</div>
              <div className="text-cyan-300 text-xs mt-2">Relevant Courses:</div>
              <ul className="text-gray-400 text-xs list-disc ml-4">
                <li>Circuits & Signals, Communication Systems, Robotics Design</li>
                <li>Engineering Design Project, Computer Organization, Maths</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white/10 p-7 rounded-2xl shadow-xl flex-1 min-w-[260px]"
              whileHover={{
                boxShadow: "0 6px 42px 0 rgba(139,92,246,0.17)",
                scale: 1.018,
                background:
                  "linear-gradient(90deg, rgba(139,92,246,0.09) 0%, rgba(236,72,153,0.09) 100%)"
              }}
              transition={{ type: "spring", stiffness: 320, damping: 25 }}
            >
              <div className="text-purple-400 font-semibold text-lg mb-2">Certifications</div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>
                  <b>Mathematics for Machine Learning</b><br/>
                  <span className="text-gray-400">Imperial College London, Dec 2024</span>
                </li>
                <li>
                  <b>Deep Learning Specialization</b><br/>
                  <span className="text-gray-400">DeepLearning.AI, Jun 2024</span>
                </li>
                <li>
                  <b>Embedded Systems & AI</b><br/>
                  <span className="text-gray-400">UC Irvine, ongoing</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Leadership & Community Roles */}
          <motion.div className="mb-14" variants={child}>
            <h3 className="text-2xl font-bold text-purple-300 text-center mb-8">Leadership & Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title + i}
                  className="group bg-white/10 p-5 rounded-2xl shadow-xl w-full sm:w-[350px] flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-cyan-600/10 hover:to-purple-800/10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={child}
                  whileHover={{ scale: 1.045 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  {/* Animated Logo Glow */}
                  <div className="relative w-20 h-14 mb-2 flex items-center justify-center">
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-white/8 to-purple-400/10 blur-xl"
                      animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.18, 0.95] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative w-20 h-14 rounded-2xl bg-white/60 backdrop-blur-lg flex items-center justify-center border border-white/70 shadow-sm overflow-hidden">
                      <img
                        src={role.image}
                        alt={role.org}
                        className="w-16 h-10 object-contain"
                        style={{
                          padding: "3px",
                          borderRadius: "0.9rem",
                          background: "rgba(255,255,255,0.09)",
                          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.03)"
                        }}
                        onError={e => e.target.style.display="none"}
                      />
                    </div>
                  </div>
                  <div className="font-semibold text-lg text-white text-center">{role.title}</div>
                  <div className="text-cyan-300 text-sm mb-1">{role.org}</div>
                  <div className="text-gray-400 text-xs mb-2">{role.period}</div>
                  <div className="text-gray-300 text-sm text-center">{role.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extra Activities (as tags/chips) */}
          <motion.div className="mb-8" variants={child}>
            <h3 className="text-lg text-center text-cyan-400 font-semibold mb-4">Extra Curricular Activities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {extras.map((item, idx) => (
                <motion.span
                  key={item + idx}
                  className="px-4 py-1.5 bg-white/10 border border-cyan-400/10 rounded-full text-xs text-cyan-200 font-medium shadow hover:bg-cyan-900/30 hover:scale-110 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.18 + idx * 0.06 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </ParallaxSection>
  );
}
