'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Star } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { LEADERSHIP_ROLES, EDUCATION, CERTIFICATIONS, EXTRA_ACTIVITIES } from '@/data/experience';
import { generateSeededPositions } from '@/utils/seededRandom';

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const positions = generateSeededPositions(12, 54321);
    setFloatingElements(positions);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-20 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 25%, #2d1b69 50%, #1a1a3e 75%, #0a0a1a 100%)',
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {isMounted && floatingElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay
              }}
              style={{
                left: element.left + '%',
                top: element.top + '%',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-8 lg:px-16">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          {/* Intro Section */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <p className="text-lg text-white">
                Research Associate at <span className="text-cyan-300 font-semibold border-b-2 border-cyan-300/50">RoboticGen Labs</span>
              </p>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/20"></div>

            <div className="text-center">
              <p className="text-lg text-white">
                CGPA <span className="text-emerald-300 font-semibold border-b-2 border-emerald-300/50">3.92/4.0</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Unified Card-Based Layout */}
        <div className="w-full max-w-6xl space-y-12 mb-16 lg:mb-20">

          {/* Education & Certifications Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Education Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                  <GraduationCap className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white leading-tight">
                  B.Sc. Electronic & Telecommunication Engineering
                </h4>

                <div className="space-y-2">
                  <p className="text-cyan-300 font-semibold">University of Moratuwa</p>
                  <p className="text-blue-300">2023 – 2027</p>
                </div>

                <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                  <p className="text-emerald-300 font-bold">CGPA: 3.92/4.0</p>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm">
                  First Class Honours candidate specializing in{" "}
                  <span className="text-blue-300 font-medium">electronics</span>,{" "}
                  <span className="text-cyan-300 font-medium">robotics</span>, and{" "}
                  <span className="text-purple-300 font-medium">signal processing</span>.
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                  <Award className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="text-white font-semibold">Mathematics for Machine Learning</h4>
                    <p className="text-blue-300 text-sm">Imperial College London • Dec 2024</p>
                  </div>

                  <div className="border-l-4 border-cyan-400 pl-4">
                    <h4 className="text-white font-semibold">Deep Learning Specialization</h4>
                    <p className="text-cyan-300 text-sm">DeepLearning.AI • Jun 2024</p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="text-white font-semibold">Embedded Systems & AI</h4>
                    <p className="text-purple-300 text-sm">UC Irvine • Ongoing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


        </div>

        {/* Leadership Section */}
        <motion.div
          className="w-full max-w-6xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-3xl lg:text-4xl font-bold mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Leadership Roles
              </span>
            </motion.h3>
            <p className="text-gray-400">Building communities and leading initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP_ROLES.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/30">
                    <Users className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white text-base mb-3 leading-tight">{role.title}</h4>
                    <div className="space-y-2">
                      <p className="text-cyan-300 font-medium text-sm">{role.organization}</p>
                      <p className="text-blue-300 text-sm">{role.period}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra Activities */}
        <motion.div
          className="w-full max-w-5xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl lg:text-3xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Activities & Involvement
            </span>
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {EXTRA_ACTIVITIES.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <span className="text-sm font-medium text-purple-200 hover:text-purple-100 transition-colors">
                  {activity}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;