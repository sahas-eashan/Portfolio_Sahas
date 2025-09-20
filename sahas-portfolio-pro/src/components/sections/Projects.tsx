'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Filter } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = PROJECTS.filter(project =>
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gradient-main">
      <div className="container-custom">
        <motion.div
          className="text-center space-element"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-heading gradient-text mb-4">Featured Projects</h2>
          <p className="text-body text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning robotics, AI, web development, and hardware design.
            Each project demonstrates practical application of engineering principles and innovative problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 space-element"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            variant={selectedCategory === 'all' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
            icon={<Filter size={16} />}
          >
            All Projects
          </Button>
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="mr-1">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-element"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -8 }}
              >
                <Card hover className="h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-slate-700/50">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-4xl">
                          {PROJECT_CATEGORIES.find(cat => cat.id === project.category)?.icon}
                        </div>
                      </div>
                    )}

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="success" size="sm">
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                      {project.github && (
                        <Button
                          variant="secondary"
                          size="sm"
                          icon={<Github size={16} />}
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          Code
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          variant="primary"
                          size="sm"
                          icon={<ExternalLink size={16} />}
                          onClick={() => window.open(project.live, '_blank')}
                        >
                          Live
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="primary" size="sm">
                        {PROJECT_CATEGORIES.find(cat => cat.id === project.category)?.label}
                      </Badge>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="skill" size="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="default" size="sm">
                          +{project.techStack.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 pt-4 border-t border-slate-300/50 dark:border-slate-700/50">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<Github size={16} />}
                          onClick={() => window.open(project.github, '_blank')}
                          className="flex-1"
                        >
                          GitHub
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<ExternalLink size={16} />}
                          onClick={() => window.open(project.live, '_blank')}
                          className="flex-1"
                        >
                          Live Demo
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<Eye size={16} />}
                        className="px-3"
                        onClick={() => {
                          // TODO: Open project detail modal
                          console.log('View project details:', project.id);
                        }}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </Button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "Total Projects", value: PROJECTS.length.toString() },
            { label: "Categories", value: PROJECT_CATEGORIES.length.toString() },
            { label: "Featured", value: PROJECTS.filter(p => p.featured).length.toString() },
            { label: "GitHub Repos", value: PROJECTS.filter(p => p.github).length.toString() },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 rounded-lg bg-slate-200/50 dark:bg-slate-800/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;