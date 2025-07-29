import React from "react";
import { motion } from "framer-motion";
import ParallaxSection from "./ParallaxSection";

const skills = [
  {
    category: "Programming & Frameworks",
    items: [
      "Python",
      "C/C++",
      "JavaScript",
      "React",
      "Node.js",
      "Arduino IDE",
      "MATLAB"
    ]
  },
  {
    category: "AI, Data & Modern ML",
    items: [
      "TensorFlow",
      "OpenCV",
      "scikit-learn",
      "Pandas",
      "Computer Vision",
      "NLP",
      "Agentic AI",
      "LLMs"
    ]
  },
  {
    category: "Hardware & CAD Tools",
    items: [
      "PCB Design",
      "Altium Designer",
      "EasyEDA",
      "STM32",
      "STM32CubeIDE",
      "ESP32",
      "Raspberry Pi",
      "Onshape",
      "SolidWorks"
    ]
  },
  {
    category: "Robotics & Embedded",
    items: [
      "ROS",
      "Navigation",
      "Sensors",
      "Control Systems",
      "Microcontrollers",
      "IoT"
    ]
  }
];

export default function Skills() {
  return (
    <ParallaxSection offset={60}>
      <section id="skills" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-transparent to-blue-950/30">
        {/* --- Background: Circuit SVG pattern --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M12 0v5h5v5h-5v5h-5v-5H0V5h5V0z" fill="currentColor" opacity="0.35" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit3)" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-l from-blue-500/25 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Technical Skills
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((category, idx) => (
              <motion.div
                key={category.category}
                className="bg-white/10 p-8 rounded-xl shadow-lg border border-cyan-400/10 transition-all hover:scale-105 hover:shadow-cyan-400/10 hover:bg-gradient-to-br hover:from-cyan-800/10 hover:to-purple-900/10"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.12 * idx }}
              >
                <div className="text-lg font-semibold text-cyan-400 mb-3">{category.category}</div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white rounded-lg border border-cyan-400/20 font-medium text-sm transition-all hover:scale-110 hover:bg-cyan-500/30"
                      whileHover={{
                        background: "linear-gradient(90deg,#06b6d4,#a855f7)",
                        color: "#fff"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}
