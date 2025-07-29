import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper for random float
const rand = (a, b) => a + Math.random() * (b - a);

// Glassy animated bubble SVG
const GlassyBubble = ({
  x0,
  y0,
  x1,
  y1,
  r,
  duration,
  delay,
  opacity,
  outline,
  fill
}) => (
  <motion.svg
    className="absolute pointer-events-none"
    width={r * 2}
    height={r * 2}
    style={{ left: x0, top: y0, opacity }}
    animate={{
      x: x1 - x0,
      y: y1 - y0,
      opacity: [opacity, opacity * 0.88, opacity]
    }}
    transition={{
      duration,
      repeat: Infinity,
      repeatType: "mirror",
      delay,
      ease: "easeInOut"
    }}
  >
    <defs>
      <radialGradient id="bubbleGlass" cx="60%" cy="40%" r="80%">
        <stop offset="0%" stopColor="#e0f2ff" stopOpacity="0.9" />
        <stop offset="70%" stopColor="#a1d8ff" stopOpacity="0.35" />
        <stop offset="100%" stopColor="white" stopOpacity="0.05" />
      </radialGradient>
      <radialGradient id="shine" cx="75%" cy="20%" r="50%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Bubble core */}
    <circle
      cx={r}
      cy={r}
      r={r - outline}
      fill={fill ? "url(#bubbleGlass)" : "none"}
      stroke="#84cafe"
      strokeWidth={outline}
      opacity={0.95}
    />
    {/* Subtle shine highlight */}
    <ellipse
      cx={r * 1.25}
      cy={r * 0.82}
      rx={r * 0.28}
      ry={r * 0.13}
      fill="url(#shine)"
      opacity={0.22}
    />
    {/* Bottom subtle highlight */}
    <ellipse
      cx={r * 0.95}
      cy={r * 1.28}
      rx={r * 0.21}
      ry={r * 0.10}
      fill="#fff"
      opacity={0.11}
    />
  </motion.svg>
);

// Generate array of bubble configs
const genBubbles = (n, w, h) =>
  Array.from({ length: n }).map(() => {
    const r = rand(14, 75); // radius
    const x0 = rand(0, w - r * 2);
    const y0 = rand(0, h - r * 2);
    // random direction and distance
    const x1 = x0 + rand(-120, 120);
    const y1 = y0 + rand(-160, 120);
    return {
      x0,
      y0,
      x1,
      y1,
      r,
      duration: rand(6, 13),
      delay: rand(0, 5),
      opacity: rand(0.17, 0.29),
      outline: rand(1.2, 2.7),
      fill: true
    };
  });

const BubblesBackground = ({ bubbleCount = 24, width = 1600, height = 900 }) => {
  const [bubbles] = useState(() => genBubbles(bubbleCount, width, height));
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {bubbles.map((b, i) => (
        <GlassyBubble key={i} {...b} />
      ))}
    </div>
  );
};

// Main loader
export default function ModernLoader({ show, onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (show) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => onComplete && onComplete(), 800);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(progressInterval);
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.07,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* -- Realistic Glassy Bubbles Background -- */}
          <BubblesBackground bubbleCount={28} width={window.innerWidth} height={window.innerHeight} />

          {/* --- Central Loader & Progress Bar (as before) --- */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-16">
              {/* Outer Rotating Ring */}
              <motion.div
                className="absolute inset-0 w-40 h-40 border-4 border-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #06b6d4, #a855f7, #eab308, #06b6d4)",
                  borderRadius: "50%",
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-black rounded-full" />
              </motion.div>
              {/* Middle Pulsing Ring */}
              <motion.div
                className="absolute inset-4 w-32 h-32 border-2 border-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Inner Morphing Shape */}
              <motion.div
                className="absolute inset-8 w-24 h-24 bg-gradient-to-br from-cyan-400 via-purple-500 to-yellow-400 rounded-full"
                animate={{
                  borderRadius: [
                    "50%",
                    "25%",
                    "50%",
                    "40%",
                    "50%",
                  ],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 0.8, 1.2, 0.9, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            {/* Dynamic Progress Visualization */}
            <div className="w-96 max-w-lg mb-12">
              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden mb-6">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                  animate={{ x: [-96, 400] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              {/* Progress Number */}
              <div className="text-center">
                <motion.span
                  className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent"
                  key={progress}
                  initial={{ scale: 1.2, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.span>
              </div>
            </div>
            {/* Name Animation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl font-light text-gray-300 tracking-[0.5em] mb-4"
                animate={{
                  letterSpacing: ["0.5em", "0.8em", "0.5em"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SAHAS EASHAN
              </motion.h1>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-96 mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2, duration: 2 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
