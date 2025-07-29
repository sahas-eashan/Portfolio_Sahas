import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Omni-Directional Robot",
    description: "Advanced mecanum wheel robot with autonomous navigation and sensor integration.",
    tech: ["Arduino", "Sensors", "SolidWorks"],
    media: [
      { type: "image", src: "assets/placeholder.jpg" },
      { type: "video", src: "assets/placeholder.mp4" },
    ],
    link: "https://github.com/sahas-eashan/OmniDirectionalRobot-EN2160",
  },
  {
    title: "Agentic AI Practice",
    description: "Multi-agent AI system with web search, finance agents, and PDF processing.",
    tech: ["Python", "AI/ML", "Multi-Agent"],
    media: [
      { type: "image", src: "assets/placeholder.jpg" },
    ],
    link: "https://github.com/sahas-eashan/Agentic_AI_Practice",
  },
  // Add more projects with media as you wish!
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950/20 to-purple-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
