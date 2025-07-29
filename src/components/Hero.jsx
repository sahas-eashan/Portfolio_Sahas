import React from "react";
import { motion } from "framer-motion";

// Container and child animation for stagger
const container = {
  visible: { transition: { staggerChildren: 0.08 } }
};
const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
const floatingAnimation = {
  y: [-20, 20, -20],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 pb-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0v5h5v5h-5v5h-5v-5H0V5h5V0z" fill="currentColor" opacity="0.3" />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Animated Floating Orbs */}
        <motion.div
          className="absolute -top-16 left-32 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-24 w-64 h-64 bg-purple-400/25 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -25, 0], opacity: [0.23, 0.39, 0.23] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.16, 0.30, 0.16] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-20 left-10 text-cyan-400 opacity-20"
          animate={floatingAnimation}
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-10-5z"/>
          </svg>
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-blue-400 opacity-20"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-cyan-300 opacity-15"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        >
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="z-10 text-center max-w-6xl mx-auto px-4 py-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Photo and Name Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-6">
          {/* Profile Photo with shimmer */}
          <motion.div className="flex-shrink-0" variants={child}>
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-sm opacity-75"></div>
              <img
                src={`${import.meta.env.BASE_URL}sahas eashan.jpg`}
                alt="Sahas Eashan"
                className="relative z-10 w-full object-top h-full rounded-3xl object-cover border-4 border-cyan-400/50 shadow-2xl group-hover:shadow-[0_0_32px_8px_rgba(34,211,238,0.13)] transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/30 animate-pulse"></div>
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
                initial={false}
                whileHover={{ opacity: 1 }}
                animate={{ opacity: 0.6 }}
              >
                <motion.div
                  className="absolute left-[-60%] top-0 w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ left: ["-60%", "100%"] }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Name with animated gradient shimmer */}
          <motion.div className="text-center lg:text-left" variants={child}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight"
              variants={child}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7, #06b6d4)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text"
                }}
              >
                SAHAS <span className="block" />EASHAN
              </motion.span>
            </motion.h1>
            {/* Subtitle under name */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mt-3 lg:mt-4"
              variants={child}
            >
              Engineering Innovation • AI Enthusiast • Robotics Designer
            </motion.p>
          </motion.div>
        </div>

        {/* Status Cards */}
        <motion.div
          className="mb-6 mx-auto max-w-4xl"
          variants={child}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {/* Education Card */}
            <motion.div
              className="bg-black/30 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-4 shadow-2xl transition-all hover:scale-105 hover:shadow-cyan-400/30 hover:bg-gradient-to-br hover:from-cyan-600/10 hover:to-blue-800/10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-blue-400 font-semibold text-sm">Student</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Undergraduate</h3>
              <div className="text-cyan-300 font-medium mb-2 text-sm">
                Electronics & Telecommunications Engineering
              </div>
              <div className="text-gray-300 text-xs">
                University of Moratuwa
              </div>
            </motion.div>

            {/* Work Card */}
            <motion.div
              className="bg-black/30 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-4 shadow-2xl transition-all hover:scale-105 hover:shadow-cyan-400/30 hover:bg-gradient-to-br hover:from-blue-600/10 hover:to-purple-700/10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">Currently Active</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Research Associate</h3>
              <div className="text-cyan-300 font-medium mb-2 text-sm">
                RoboticGen · Part-time
              </div>
              <div className="text-gray-300 text-xs">
                PCB Design & Hardware Development
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base text-gray-400 mb-6 text-center"
          variants={child}
        >
          Electronics & Telecommunications Engineering Student | Research Associate
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#projects"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-base font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg mb-6"
          variants={child}
          whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#06b6d4,#a855f7,#06b6d4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work ↓
        </motion.a>

        {/* Floating Skills Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
          variants={child}
        >
          {["PCB Design", "Robotics", "AI/ML", "IoT", "Hardware Design", "Research"].map((skill, index) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-gray-300 cursor-pointer transition-all duration-300"
              whileHover={{
                scale: 1.13,
                backgroundColor: "rgba(56,189,248,0.25)",
                color: "#06b6d4",
                boxShadow: "0 1px 12px 0 rgba(14, 165, 233, 0.18)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.13 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: "-100%",
              width: "200%",
            }}
            animate={{
              x: ["0%", "50%", "0%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
}
