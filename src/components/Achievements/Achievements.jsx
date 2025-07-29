import React, { useState } from "react";
import { motion } from "framer-motion";

// Your image modal if you want it, else just show preview (optional)
function Modal({ open, onClose, src, alt }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center" onClick={onClose}>
      <img src={src} alt={alt} className="max-w-2xl max-h-[90vh] rounded-xl shadow-2xl" />
    </div>
  );
}

// Timeline data
const achievements = [
  {
    title: "Finalist – PLEASE Hack",
    description: "Top finalist in South Asia for the PLEASE Hack 2025, representing Sri Lanka with a seaweed-based bioplastic solution for marine pollution.",
    year: "2025",
    img: `${import.meta.env.BASE_URL}pleasehack.jpeg`
  },
  {
    title: "2nd Runners-up – IESL RoboGames 25",
    description: "Secured 2nd Runners-Up in IESL RoboGames (University Category) with an autonomous robot project using Kinect and computer vision.",
    year: "2025",
    img: `${import.meta.env.BASE_URL}BB.jpeg`
  },
  {
    title: "1st Runner-up – CodeRally 5.0",
    description: "Secured 1st runner-up at CodeRally 5.0 hackathon, leading a high-performing team from University of Moratuwa.",
    year: "2025",
    img: `${import.meta.env.BASE_URL}cr.jpeg`
  },
  {
    title: "Winner – Insighture Hackathon",
    description: "Built an AI-powered virtual real estate assistant and won the Insighture Hackathon.",
    year: "2025",
    img: `${import.meta.env.BASE_URL}IH.jpeg`
  },
  {
    title: "Finalist – CodeSprintX (IIT)",
    description: "Recognized for innovation and teamwork as a finalist in CodeSprintX 2024.",
    year: "2025",
    img: `${import.meta.env.BASE_URL}CS.jpg`
  },
  {
    title: "🌱 Best Environment Project – Tyumen State University, Russia",
    description: 'Awarded "Best Environment Project" for our bioplastics solution at the Calling Fire on Us! Ideathon.',
    year: "2025",
    img: `${import.meta.env.BASE_URL}tymen.jpeg`
  },
  // Finalist positions
  {
    title: "Finalist – Robofest (Micromouse)",
    description: "Finalist in the Robofest Micromouse autonomous robotics challenge.",
    year: "2024",
    img: `${import.meta.env.BASE_URL}mouse.png`
  },
  {
    title: "Finalist – Dextron (Fast Line Following)",
    description: "Dextron Fast Line Following finalist, demonstrating high-speed autonomous navigation.",
    year: "2024",
    img: `${import.meta.env.BASE_URL}fast.png`
  },
  {
    title: "Finalist – AlgoExplore",
    description: "AlgoExplore finalist (algorithmic coding challenge).",
    year: "2024",
    img: `${import.meta.env.BASE_URL}algo.jpeg`
  },
  {
    title: "Finalist – MoraXtreme 9.0",
    description: "Reached finals in MoraXtreme 9.0 competitive programming.",
    year: "2024",
    img: `${import.meta.env.BASE_URL}morax.jpeg`
  },
  {
    title: "Finalist – ReidXtreme 3.0",
    description: "Finalist at ReidXtreme 3.0 programming hackathon.",
    year: "2024",
    img: `${import.meta.env.BASE_URL}raidx.jpeg`
  },
    {
    title: "Finalist – Codex 2025",
    description: "Finalist at Codex 2025 programming hackathon.",
    year: "2025",
    img: `${import.meta.env.BASE_URL}codexmora.jpeg`
  },     
   {
    title: "15th place in the XTREME Encode 2024",
    description: "Achieved 15th place in global coding event XTREME Encode 2024.",
    year: "2024",
    img: `${import.meta.env.BASE_URL}codex.jpeg`
  },
  
      {
    title: "Participated IEEE Xtreme 18.0",
    description: "Participated in IEEE Xtreme 18.0 programming competition.",
    year: "2024",
    img: `${import.meta.env.BASE_URL}ieee.png`
  }
];

export default function Achievements() {
  const [modal, setModal] = useState({ open: false, src: "", alt: "" });

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-transparent to-blue-950/30">
      {/* BG - circuit + orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit-timeline" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M12 0v5h5v5h-5v5h-5v-5H0V5h5V0z" fill="currentColor" opacity="0.35" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-timeline)" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-blue-500/25 to-transparent rounded-full blur-3xl" />
      </div>
      {/* Main */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent z-10 relative"
      >
        Achievements
      </motion.h2>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="border-l-2 border-cyan-500/30 ml-5 pl-6">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.title}
              className="mb-12 flex flex-col sm:flex-row items-center sm:items-start group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
            >
              {/* Timeline marker */}
              <span className="absolute -left-7 sm:-left-7 flex items-center justify-center w-7 h-7 bg-gradient-to-br from-cyan-400 via-purple-400 to-blue-400 rounded-full shadow-lg border-4 border-white/10 group-hover:scale-110 transition-transform duration-300" />
              {/* Image */}
              <div className="mr-0 sm:mr-6 mb-4 sm:mb-0">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-28 h-20 rounded-xl object-cover shadow-lg border border-cyan-300/20 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setModal({ open: true, src: a.img, alt: a.title })}
                />
              </div>
              {/* Details */}
              <div>
                <div className="text-cyan-400 font-bold text-lg mb-1">{a.title}</div>
                <div className="text-gray-300 mb-1">{a.description}</div>
                <div className="text-xs text-cyan-300 font-semibold">{a.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full image */}
      <Modal open={modal.open} src={modal.src} alt={modal.alt} onClose={() => setModal({ open: false, src: "", alt: "" })} />
    </section>
  );
}
