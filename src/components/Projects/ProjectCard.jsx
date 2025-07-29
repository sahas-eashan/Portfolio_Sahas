import React, { useState } from "react";
import { motion } from "framer-motion";
import GalleryModal from "../GalleryModal";

export default function ProjectCard({ project, idx }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);

  return (
    <motion.div
      className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 * idx }}
    >
      <div className="mb-2">
        {/* Gallery preview */}
        <div className="flex gap-2 mb-2">
          {project.media.map((item, i) => (
            <div key={i}
              onClick={() => { setModalIdx(i); setModalOpen(true); }}
              className="cursor-pointer">
              {item.type === "video" ? (
                <div className="w-20 h-14 bg-gray-800 flex items-center justify-center text-xs text-gray-300 rounded-lg">Video</div>
              ) : (
                <img src={item.src} alt="" className="w-20 h-14 object-cover rounded-lg" />
              )}
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-cyan-400 mb-1">{project.title}</h3>
      <p className="text-gray-300 mb-2 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-cyan-400 hover:underline mb-1">
        View on GitHub →
      </a>
      {modalOpen && (
        <GalleryModal
          media={project.media}
          currentIndex={modalIdx}
          onClose={() => setModalOpen(false)}
          onPrev={() => setModalIdx(i => (i > 0 ? i - 1 : project.media.length - 1))}
          onNext={() => setModalIdx(i => (i < project.media.length - 1 ? i + 1 : 0))}
        />
      )}
    </motion.div>
  );
}
