'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Award, Eye, ArrowUpRight, Calendar, MapPin, Users, Zap, Play, Pause } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';

const MediaGallery = ({ media, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());

  if (!media || media.length === 0) {
    return (
      <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border border-gray-200">
        <div className="text-center">
          <div className="text-4xl mb-2">📸</div>
          <p className="text-gray-600">No media available</p>
        </div>
      </div>
    );
  }

  const currentMedia = media[currentIndex];
  const hasImageError = imageErrors.has(currentIndex);

  const handleImageError = () => {
    setImageErrors(prev => new Set([...prev, currentIndex]));
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
        {currentMedia.type === 'image' ? (
          hasImageError ? (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-gray-600 text-sm">{projectTitle}</p>
                <p className="text-gray-500 text-xs mt-1">Image not available</p>
              </div>
            </div>
          ) : (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          )
        ) : (
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={currentMedia.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
              >
                <Play className="w-16 h-16 text-white" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Caption */}
      {currentMedia.caption && (
        <p className="text-sm text-gray-600 text-center italic">
          {currentMedia.caption}
        </p>
      )}

      {/* Media Navigation */}
      {media.length > 1 && (
        <div className="flex items-center justify-center space-x-2">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDetailView = ({ project, onClose }) => {
  const paragraphs = project.detail.split('\n\n').filter(p => p.trim());
  
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 backdrop-blur-lg z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-6xl max-h-[90vh] bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8 bg-white/80 backdrop-blur-sm border-b border-white/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-all duration-200 p-2 hover:bg-white/50 rounded-full backdrop-blur-sm"
          >
            <ArrowUpRight className="rotate-45" size={20} />
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.category === 'ai' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                project.category === 'robotics' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                project.category === 'iot' ? 'bg-green-100 text-green-700 border border-green-200' :
                project.category === 'sustainability' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                'bg-gray-100 text-gray-700 border border-gray-200'
              }`}>
                {project.category.toUpperCase()}
              </span>
              <span className="text-gray-600">{project.year}</span>
              {project.location && (
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            {project.subtitle && (
              <p className="text-xl text-blue-600 font-medium">{project.subtitle}</p>
            )}

            <p className="text-lg text-gray-700 leading-relaxed">
              {project.description}
            </p>

            {project.achievement && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-emerald-700 font-medium">{project.achievement}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-white/70 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Narrative */}
              <div className="space-y-6">
                {project.narrative.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-lg first-letter:text-4xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Detailed Content - flowing paragraphs with scattered images */}
              <div className="prose prose-gray max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
                  {paragraphs.map((paragraph, index) => {
                    // Distribute images more naturally throughout content without repetition
                    const totalMedia = project.media?.length || 0;
                    const usedImages = Math.floor(index / 3); // Show one image every 3 paragraphs
                    const mediaIndex = usedImages < totalMedia ? usedImages : null;
                    const shouldShowImage = project.media && mediaIndex !== null && index % 3 === 2;
                    const isFullWidth = index % 8 === 0 && shouldShowImage; // Occasionally show full-width images

                    const content = (
                      <div key={index} className={`space-y-6 ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                        <p className="leading-relaxed text-justify">
                          {paragraph}
                        </p>

                        {/* Scattered images within text flow */}
                        {shouldShowImage && !isFullWidth && (
                          <div className="my-6">
                            <div className="relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                              {project.media[mediaIndex].type === 'image' ? (
                                <img
                                  src={project.media[mediaIndex].src}
                                  alt={project.media[mediaIndex].alt}
                                  className="w-full h-48 object-cover"
                                  onError={(e) => {
                                    e.target.src = '';
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                  }}
                                />
                              ) : (
                                <video
                                  src={project.media[mediaIndex].src}
                                  controls
                                  className="w-full h-48 object-cover"
                                />
                              )}

                              {/* Fallback for broken images */}
                              <div className="hidden w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 items-center justify-center">
                                <div className="text-center">
                                  <div className="text-2xl mb-1">🖼️</div>
                                  <p className="text-gray-600 text-sm">{project.title}</p>
                                </div>
                              </div>
                            </div>

                            {project.media[mediaIndex].caption && (
                              <p className="text-xs text-gray-500 text-center mt-2 italic">
                                {project.media[mediaIndex].caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );

                    // Occasionally show full-width images that span both columns
                    if (isFullWidth) {
                      return (
                        <React.Fragment key={index}>
                          {content}
                          <div className="md:col-span-2 my-8">
                            <div className="relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                              {project.media[mediaIndex].type === 'image' ? (
                                <img
                                  src={project.media[mediaIndex].src}
                                  alt={project.media[mediaIndex].alt}
                                  className="w-full h-64 object-cover"
                                  onError={(e) => {
                                    e.target.src = '';
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                  }}
                                />
                              ) : (
                                <video
                                  src={project.media[mediaIndex].src}
                                  controls
                                  className="w-full h-64 object-cover"
                                />
                              )}

                              {/* Fallback for broken images */}
                              <div className="hidden w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 items-center justify-center">
                                <div className="text-center">
                                  <div className="text-3xl mb-2">🖼️</div>
                                  <p className="text-gray-600">{project.title}</p>
                                </div>
                              </div>
                            </div>

                            {project.media[mediaIndex].caption && (
                              <p className="text-sm text-gray-500 text-center mt-3 italic">
                                {project.media[mediaIndex].caption}
                              </p>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    }

                    return content;
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Project Stats */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-white/30 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                
                {project.team && (
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-600 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-sm text-gray-600">Team Size</p>
                      <p className="text-gray-900 font-medium">{project.team}</p>
                    </div>
                  </div>
                )}

                {project.duration && (
                  <div className="flex items-center gap-3">
                    <Calendar className="text-green-600 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="text-gray-900 font-medium">{project.duration}</p>
                    </div>
                  </div>
                )}

                {project.impact && (
                  <div className="flex items-center gap-3">
                    <Zap className="text-yellow-600 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-sm text-gray-600">Impact</p>
                      <p className="text-gray-900 font-medium">{project.impact}</p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Status</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      project.status === 'completed' ? 'bg-emerald-500' :
                      project.status === 'ongoing' ? 'bg-blue-500' : 'bg-gray-400'
                    }`} />
                    <span className="text-gray-900 font-medium capitalize">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/80 text-gray-700 text-sm rounded-lg border border-white/40 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collaborators */}
              {project.collaborators && (
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Collaborators</h3>
                  <div className="space-y-2">
                    {project.collaborators.map((collaborator, index) => (
                      <p key={index} className="text-gray-700">{collaborator}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/80 hover:bg-white/90 rounded-lg transition-all duration-200 border border-white/40 backdrop-blur-sm"
                    >
                      <Github className="text-gray-900" size={20} />
                      <span className="text-gray-900 font-medium">View Source Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/80 hover:bg-white/90 rounded-lg transition-all duration-200 border border-white/40 backdrop-blur-sm"
                    >
                      <ExternalLink className="text-cyan-600" size={20} />
                      <span className="text-gray-900 font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-slate-800/70 cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onViewDetails(project)}
    >
      {/* Hero Image Section */}
      {project.media?.[0] && (
        <div className="relative h-64 overflow-hidden">
          {!imageError ? (
            <img
              src={project.media[0].src}
              alt={project.media[0].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">
                  {project.category === 'ai' ? '🧠' : 
                   project.category === 'robotics' ? '🤖' :
                   project.category === 'iot' ? '⚡' : 
                   project.category === 'sustainability' ? '🌱' : '🚀'}
                </div>
                <p className="text-slate-400 text-sm">{project.title}</p>
              </div>
            </div>
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          {/* Status Indicators */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {project.featured && (
              <div className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-lg backdrop-blur-sm border border-yellow-500/30">
                <Award size={16} />
              </div>
            )}
            <div className={`w-3 h-3 rounded-full ${
              project.status === 'completed' ? 'bg-emerald-400' :
              project.status === 'ongoing' ? 'bg-blue-400' : 'bg-slate-400'
            } shadow-lg`} />
          </div>

          {/* Quick Stats */}
          <div className="absolute bottom-4 left-4 flex items-center gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{project.year}</span>
            </div>
            {project.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span className="truncate max-w-20">{project.location}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.category === 'ai' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
              project.category === 'robotics' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
              project.category === 'iot' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
              project.category === 'sustainability' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
              'bg-slate-500/20 text-slate-300 border border-slate-500/30'
            }`}>
              {project.category.toUpperCase()}
            </span>
            <span className="text-slate-400 text-sm">{project.year}</span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          
          {project.subtitle && (
            <p className="text-blue-400 font-medium text-sm">{project.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Achievement Badge */}
        {project.achievement && (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-300 font-medium text-sm line-clamp-2">{project.achievement}</span>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-slate-700/30 text-slate-400 text-xs rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Team & Location Info */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          {project.team && (
            <div className="flex items-center gap-1">
              <Users size={12} />
              <span>{project.team}</span>
            </div>
          )}
          {project.location && (
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{project.location}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center pt-2 border-t border-slate-700/30">
          <div className="flex items-center gap-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
                <span className="text-sm font-medium">Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
                <span className="text-sm font-medium">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedCategory);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="relative min-h-screen overflow-hidden py-20 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 25%, #2d1b69 50%, #1a1a3e 75%, #0a0a1a 100%)',
        }}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center px-8 lg:px-16">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16 max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Innovation Journey
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Exploring the convergence of <span className="text-cyan-400 font-semibold">Artificial Intelligence</span>,
              <span className="text-blue-400 font-semibold"> Autonomous Robotics</span>, and
              <span className="text-purple-400 font-semibold"> Sustainable Technology</span> 
              <br />through award-winning projects and international recognition
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="w-full max-w-6xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {PROJECT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group px-6 py-3 rounded-2xl font-medium transition-all duration-300 border backdrop-blur-sm ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-400 shadow-xl shadow-blue-500/25'
                      : 'bg-slate-800/50 text-slate-300 border-slate-600/50 hover:border-blue-400/50 hover:bg-slate-700/70 hover:text-white'
                  }`}
                >
                  <span className="mr-3 text-lg group-hover:scale-110 transition-transform inline-block">
                    {category.icon}
                  </span>
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="w-full max-w-7xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} onViewDetails={handleViewDetails} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-slate-400 mb-6 text-lg">
              Interested in collaboration or have questions about any project?
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium rounded-2xl hover:from-blue-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailView
            project={selectedProject}
            onClose={handleCloseDetails}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;