'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Calendar } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ACHIEVEMENTS } from '@/data/achievements';

const Achievements = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'winner':
        return { icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-600/20' };
      case 'runner-up':
        return { icon: Medal, color: 'text-orange-400', bg: 'bg-orange-600/20' };
      case 'finalist':
        return { icon: Award, color: 'text-blue-400', bg: 'bg-blue-600/20' };
      default:
        return { icon: Star, color: 'text-purple-400', bg: 'bg-purple-600/20' };
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'winner':
        return 'Winner';
      case 'runner-up':
        return 'Runner-Up';
      case 'finalist':
        return 'Finalist';
      default:
        return 'Participant';
    }
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  // Group achievements by type for stats
  const statsByType = ACHIEVEMENTS.reduce((acc, achievement) => {
    acc[achievement.type] = (acc[achievement.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="achievements" className="section-padding bg-gradient-main">
      <div className="container-custom">
        <motion.div
          className="text-center space-element"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-heading gradient-text mb-4">Achievements & Recognition</h2>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A timeline of competitive achievements spanning robotics competitions, hackathons,
            and academic excellence across national and international platforms.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 space-element max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: "Total Awards", value: ACHIEVEMENTS.length.toString(), icon: Trophy },
            { label: "Winners", value: (statsByType.winner || 0).toString(), icon: Trophy },
            { label: "Runner-ups", value: (statsByType['runner-up'] || 0).toString(), icon: Medal },
            { label: "Finalists", value: (statsByType.finalist || 0).toString(), icon: Award },
          ].map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700/30"
                whileHover={{ scale: 1.05, borderColor: 'rgb(59 130 246 / 0.5)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-slate-800 dark:text-white">{stat.value}</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative space-element"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {ACHIEVEMENTS.map((achievement, index) => {
              const typeInfo = getTypeIcon(achievement.type);
              const IconComponent = typeInfo.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.title}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full ${typeInfo.bg} border-2 border-slate-700 flex items-center justify-center`}>
                      <IconComponent className={`w-4 h-4 ${typeInfo.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card hover className="relative">
                      {/* Achievement type badge */}
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant={achievement.type === 'winner' ? 'success' : achievement.type === 'runner-up' ? 'warning' : 'primary'}
                          size="sm"
                        >
                          {getTypeLabel(achievement.type)}
                        </Badge>
                        <div className="flex items-center text-slate-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {achievement.year}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2">
                        {achievement.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-3">
                        {achievement.description}
                      </p>

                      <div className="text-sm text-blue-400 font-medium">
                        {achievement.organization}
                      </div>

                      {/* Achievement image (if available) */}
                      {achievement.image && (
                        <div className="mt-4 rounded-lg overflow-hidden">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-32 object-cover"
                          />
                        </div>
                      )}

                      {/* Connecting line for larger screens */}
                      <div className={`hidden md:block absolute top-4 ${
                        isEven ? 'right-0 translate-x-4' : 'left-0 -translate-x-4'
                      } w-4 h-0.5 bg-slate-600`} />
                    </Card>
                  </div>

                  {/* Spacer for the other half on larger screens */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Highlights */}
        <motion.div
          className="space-y-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">Recent Highlights</h3>
            <p className="text-slate-400">Most significant achievements from the past year</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.filter(a => a.year === '2025' && ['winner', 'runner-up', 'finalist'].includes(a.type))
              .slice(0, 3)
              .map((achievement, index) => {
                const typeInfo = getTypeIcon(achievement.type);
                const IconComponent = typeInfo.icon;

                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card hover className="h-full text-center">
                      <div className={`w-12 h-12 rounded-full ${typeInfo.bg} flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`w-6 h-6 ${typeInfo.color}`} />
                      </div>

                      <h4 className="font-semibold text-white mb-2 text-sm">
                        {achievement.title}
                      </h4>

                      <p className="text-slate-300 text-xs leading-relaxed mb-3">
                        {achievement.description.substring(0, 100)}...
                      </p>

                      <Badge
                        variant={achievement.type === 'winner' ? 'success' : achievement.type === 'runner-up' ? 'warning' : 'primary'}
                        size="sm"
                      >
                        {getTypeLabel(achievement.type)}
                      </Badge>
                    </Card>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;