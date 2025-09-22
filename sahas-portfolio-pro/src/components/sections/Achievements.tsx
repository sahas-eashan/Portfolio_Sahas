'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Award, Star, Calendar, X } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { ACHIEVEMENTS } from '@/data/achievements';
import { generateSeededPositions } from '@/utils/seededRandom';

// Image Modal Component
const ImageModal = ({ image, title, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white/90 rounded-full backdrop-blur-sm transition-all duration-200"
        >
          <X size={20} className="text-gray-700" />
        </button>

        {/* Image */}
        <div className="p-6">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />

          {/* Fallback for broken images */}
          <div className="hidden w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <p className="text-gray-600">{title}</p>
              <p className="text-gray-500 text-sm mt-1">Image not available</p>
            </div>
          </div>

          {/* Title */}
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Achievements = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    const positions = generateSeededPositions(15, 98765);
    setFloatingElements(positions);
  }, []);

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
    <section id="achievements" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 lg:py-32">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {isMounted && floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
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

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-8 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/8 transition-all duration-300"
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

        {/* Achievements Grid */}
        <motion.div
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ACHIEVEMENTS.map((achievement, index) => {
            const typeInfo = getTypeIcon(achievement.type);
            const IconComponent = typeInfo.icon;

            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
                onClick={() => {
                  if (achievement.image) {
                    setSelectedImage({ src: achievement.image, title: achievement.title });
                  }
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-full ${typeInfo.bg} border border-white/20 flex items-center justify-center`}>
                    <IconComponent className={`w-4 h-4 ${typeInfo.color}`} />
                  </div>
                  <span className="text-slate-400 text-xs">{achievement.year}</span>
                </div>

                {/* Type Badge */}
                <div className="mb-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    achievement.type === 'winner' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    achievement.type === 'runner-up' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                    achievement.type === 'finalist' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {getTypeLabel(achievement.type)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 leading-tight">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-2 line-clamp-3">
                  {achievement.description}
                </p>

                {/* Organization */}
                <div className="text-xs text-blue-400 font-medium">
                  {achievement.organization}
                </div>

                {/* Achievement image (if available) */}
                {achievement.image && (
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-20 object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage.src}
            title={selectedImage.title}
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;