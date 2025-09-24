import React, { useState } from "react";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectsHome() {
  const [selectedCat, setSelectedCat] = useState(PROJECT_CATEGORIES[0].id);
  const navigate = useNavigate();

  const filteredProjects = PROJECTS.filter(p => p.category === selectedCat);

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-gradient-to-br from-transparent to-blue-950/30">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          All Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore my diverse portfolio of engineering and technology projects
        </p>
      </motion.div>

      {/* Category Selector */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {PROJECT_CATEGORIES.map((cat, index) => (
          <motion.button
            key={cat.id}
            className={`group relative px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 overflow-hidden ${
              selectedCat === cat.id
                ? 'text-white shadow-2xl scale-105'
                : 'text-cyan-200 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10'
            }`}
            onClick={() => setSelectedCat(cat.id)}
            whileHover={{ scale: selectedCat === cat.id ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {selectedCat === cat.id && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${cat.accent} rounded-2xl`}
                layoutId="activeCategory"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <span>{cat.label}</span>
            </div>
            {selectedCat === cat.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Count */}
      <motion.div
        className="text-center mb-8"
        key={selectedCat}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-gray-400">
          Showing <span className="text-cyan-400 font-bold">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''} in{' '}
          <span className="text-cyan-400 font-bold">
            {PROJECT_CATEGORIES.find(cat => cat.id === selectedCat)?.label}
          </span>
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className={
          selectedCat === "robotics"
            ? "flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            : "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        }
        layout
      >
        {filteredProjects.map((project, idx) => {
          const firstImage = project.media?.find(m => m.type === "image");
          const category = PROJECT_CATEGORIES.find(cat => cat.id === project.category);

          return (
            <motion.div
              key={project.id}
              className={`group relative bg-white/5 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20 backdrop-blur-sm border border-white/10 overflow-hidden cursor-pointer ${
                selectedCat === "robotics" ? "min-w-[320px] max-w-[360px] snap-center" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotateY: 2,
                boxShadow: "0 25px 50px rgba(34, 211, 238, 0.15)"
              }}
              onClick={() => {
                console.log('Navigating to:', `/project/${project.id}`);
                navigate(`/project/${project.id}`);
              }}
            >
              {/* Image Section */}
              <div className="relative h-36 overflow-hidden">
                {firstImage ? (
                  <>
                    <img
                      src={firstImage.src}
                      alt={firstImage.alt || project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${category?.accent || 'from-gray-600 to-gray-800'} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl text-white/80 font-bold">
                      {category?.icon || project.title[0]}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${category?.accent || 'from-gray-500 to-gray-600'} text-white text-sm font-bold rounded-full shadow-lg`}>
                    {category?.icon} {category?.label}
                  </span>
                </div>

                {/* Media Count Badge */}
                {project.media && project.media.length > 1 && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                      📷 {project.media.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId={`hover-bg-${project.id}`}
                />

                <div className="relative z-10">
                  <h3 className="font-bold text-base text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.slice(0, 2).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 text-cyan-200 border border-cyan-400/20 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="px-2 py-0.5 bg-white/5 text-gray-400 rounded-md text-xs font-medium">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-3">
                    <motion.button
                      className="flex-1 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold text-xs hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.button>

                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold text-xs hover:from-green-400 hover:to-emerald-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={e => e.stopPropagation()}
                      >
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, ${category?.accent?.replace('from-', '').replace(' to-', ', ').replace('-', '').replace('500', '500/20')} || 'rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1)'})`,
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
          <p className="text-gray-400">
            No projects available in the {PROJECT_CATEGORIES.find(cat => cat.id === selectedCat)?.label} category yet.
          </p>
        </motion.div>
      )}
    </section>
  );
}
