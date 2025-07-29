import React, { useState } from "react";
import { motion } from "framer-motion";
import GalleryModal from "../GalleryModal";

export default function AchievementCard({ achievement, idx }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);

  return (
    <motion.div
      className="flex flex-col bg-white/10 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.09 * idx }}
    >
      <div className="flex gap-3 mb-2">
        {achievement.media.map((item, i) => (
          <div
            key={i}
            onClick={() => { setModalIdx(i); setModalOpen(true); }}
            className="cursor-pointer"
          >
            <img
              src={item.src}
              alt={achievement.title}
              className="w-20 h-14 object-cover rounded-lg"
              style={{ border: "1.5px solid #7dd3fc" }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg font-semibold text-cyan-400">{achievement.title}</div>
          <div className="text-gray-300 text-sm">{achievement.description}</div>
        </div>
        <span className="text-cyan-400 font-semibold">{achievement.year}</span>
      </div>
      {modalOpen && (
        <GalleryModal
          media={achievement.media}
          currentIndex={modalIdx}
          onClose={() => setModalOpen(false)}
          onPrev={() => setModalIdx(i => (i > 0 ? i - 1 : achievement.media.length - 1))}
          onNext={() => setModalIdx(i => (i < achievement.media.length - 1 ? i + 1 : 0))}
        />
      )}
    </motion.div>
  );
}
