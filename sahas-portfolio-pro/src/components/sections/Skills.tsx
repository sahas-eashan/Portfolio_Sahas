'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Wrench, Cpu, Globe, Settings } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { SKILLS } from '@/data/skills';

const Skills = () => {
  const categoryIcons = {
    'Programming & Frameworks': Code,
    'AI, Data & Modern ML': Brain,
    'Hardware & CAD Tools': Wrench,
    'Robotics & Embedded': Cpu,
    'Web & Mobile Development': Globe,
    'Tools & Platforms': Settings,
  };

  const categoryColors = {
    'Programming & Frameworks': 'from-blue-600/20 to-blue-600/10',
    'AI, Data & Modern ML': 'from-purple-600/20 to-purple-600/10',
    'Hardware & CAD Tools': 'from-yellow-600/20 to-yellow-600/10',
    'Robotics & Embedded': 'from-green-600/20 to-green-600/10',
    'Web & Mobile Development': 'from-cyan-600/20 to-cyan-600/10',
    'Tools & Platforms': 'from-indigo-600/20 to-indigo-600/10',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Calculate total skills for stats
  const totalSkills = SKILLS.reduce((sum, category) => sum + category.skills.length, 0);

  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-custom">
        <motion.div
          className="text-center space-element"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-heading gradient-text mb-4">Technical Skills</h2>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of technology,
            from low-level hardware design to modern AI and web development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-element"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILLS.map((skillCategory, index) => {
            const IconComponent = categoryIcons[skillCategory.category as keyof typeof categoryIcons] || Code;
            const gradientColor = categoryColors[skillCategory.category as keyof typeof categoryColors] || 'from-blue-600/20 to-blue-600/10';

            return (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Card hover className="h-full">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br ${gradientColor} rounded-lg`}>
                      <IconComponent className="w-6 h-6 text-slate-800 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {skillCategory.category}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">
                        {skillCategory.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: (index * 0.1) + (skillIndex * 0.02),
                        }}
                      >
                        <Badge
                          variant="skill"
                          size="sm"
                          className="w-full justify-center text-center py-2"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Proficiency Indicator (placeholder) */}
                  <div className="mt-4 pt-4 border-t border-slate-300/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
                      <span className="text-slate-800 dark:text-white font-medium">
                        {index < 2 ? 'Advanced' : index < 4 ? 'Intermediate' : 'Proficient'}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300/50 dark:bg-slate-700/50 rounded-full h-2 mt-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${index < 2 ? 90 : index < 4 ? 75 : 60}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "Total Skills", value: totalSkills.toString() },
            { label: "Categories", value: SKILLS.length.toString() },
            { label: "Programming Languages", value: "7+" },
            { label: "Years Experience", value: "4+" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-lg bg-slate-200/50 dark:bg-slate-800/30 border border-slate-300/50 dark:border-slate-700/30"
              whileHover={{ scale: 1.05, borderColor: 'rgb(59 130 246 / 0.5)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          className="text-center space-y-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Core Competencies</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Hardware & Embedded",
                description: "From PCB design to microcontroller programming",
                highlight: "STM32, ESP32, Altium Designer"
              },
              {
                title: "Robotics & AI",
                description: "Autonomous systems and intelligent algorithms",
                highlight: "ROS, Computer Vision, Machine Learning"
              },
              {
                title: "Full-Stack Development",
                description: "Modern web applications and user interfaces",
                highlight: "React, Next.js, TypeScript"
              }
            ].map((competency) => (
              <motion.div
                key={competency.title}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-200/50 to-slate-200/30 dark:from-slate-800/50 dark:to-slate-800/30 border border-slate-300/50 dark:border-slate-700/50"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{competency.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{competency.description}</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{competency.highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;