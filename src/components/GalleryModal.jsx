import React from "react";
export default function GalleryModal({ media, currentIndex, onClose, onPrev, onNext }) {
  const current = media[currentIndex];
  return (
    <div className="fixed inset-0 bg-black/80 z-[99] flex items-center justify-center">
      <button className="absolute top-6 right-8 text-4xl text-white" onClick={onClose}>×</button>
      <button className="absolute left-6 top-1/2 text-3xl text-white" onClick={onPrev}>{"‹"}</button>
      <div>
        {current.type === "video" ? (
          <video controls src={current.src} className="max-w-xs sm:max-w-xl max-h-[70vh] rounded-lg shadow-xl" />
        ) : (
          <img src={current.src} className="max-w-xs sm:max-w-xl max-h-[70vh] rounded-lg shadow-xl" alt="" />
        )}
      </div>
      <button className="absolute right-6 top-1/2 text-3xl text-white" onClick={onNext}>{"›"}</button>
    </div>
  );
}
