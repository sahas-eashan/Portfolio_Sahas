'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, MapPin } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { LEADERSHIP_ROLES, EDUCATION, CERTIFICATIONS, EXTRA_ACTIVITIES } from '@/data/experience';

const About = () => {
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

  return (
    <section id="about" className="section-padding bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container-custom">
        <motion.div
          className="text-center space-element"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-heading gradient-text mb-4">About Me</h2>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm an enthusiastic undergraduate at the University of Moratuwa specializing in Electronic and
            Telecommunication Engineering with a CGPA of 3.94. Passionate about robotics, hardware design,
            AI, and solving real-world problems with technology.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 space-element"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Education</h3>
              </div>

              {EDUCATION.map((edu, index) => (
                <div key={index} className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">{edu.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.organization}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.period}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {edu.skills && (
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="primary" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-indigo-600/20 rounded-lg">
                  <Award className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="border-b border-slate-700/50 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-slate-800 dark:text-white text-sm">{cert.title}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm">{cert.organization}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">{cert.period}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-teal-600/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Quick Facts</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "CGPA", value: "3.94/4.0" },
                    { label: "Year", value: "3rd Year" },
                    { label: "Location", value: "Sri Lanka" },
                    { label: "Status", value: "Available" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg">
                      <div className="text-lg font-bold text-slate-800 dark:text-white">{stat.value}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-700/50">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Currently pursuing my degree while actively participating in
                    robotics competitions, hackathons, and leadership roles.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Leadership Roles */}
        <motion.div
          className="space-element"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-subheading text-slate-800 dark:text-white mb-2">Leadership & Community</h3>
            <p className="text-slate-600 dark:text-slate-400">Active involvement in university organizations and community building</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP_ROLES.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-lg flex-shrink-0">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-1">{role.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{role.organization}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mb-2">{role.period}</p>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra Activities */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Extra Curricular Activities</h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {EXTRA_ACTIVITIES.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Badge variant="default" size="sm">
                  {activity}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;