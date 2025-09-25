'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, PROJECTS } from '@/data/projects';
import MarkdownRenderer from './MarkdownRenderer';

interface ProjectDetailClientProps {
  project: Project;
  onClose?: () => void;
}

export default function ProjectDetailClient({ project, onClose }: ProjectDetailClientProps) {
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const previousProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  const handleNavigation = (targetProject: Project) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/projects/${targetProject.id}`);
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-5xl max-h-[90vh] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden relative">
        {/* Back Arrow */}
        <button
          onClick={() => onClose ? onClose() : window.history.back()}
          className="absolute top-6 left-6 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="grid grid-cols-12 gap-x-6 py-10 px-8">
            <div className="col-start-2 col-span-10">

            {/* Project Header */}
            <motion.div
              className="mb-8 border-b border-white/30 pb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200 font-medium">
                  {project.category}
                </span>
                <span className={`px-4 py-2 rounded-full border font-medium ${
                  project.status === 'completed' ? 'bg-green-50 text-green-700 border-green-200' :
                  project.status === 'ongoing' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                  'bg-gray-50 text-gray-700 border-gray-200'
                }`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                {project.featured && (
                  <span className="px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full border border-yellow-200 flex items-center gap-2 font-medium">
                    <Award size={16} />
                    Featured
                  </span>
                )}
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span className="font-medium">{project.year}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md border border-gray-200 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors border font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>

            {/* Main Content - 2 Column Layout */}
            <motion.article
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="columns-2 gap-8 text-left leading-relaxed text-gray-700 hyphens-auto">
                <MarkdownRenderer content={project.detail} className="w-full" />
              </div>
            </motion.article>

            {/* Pagination */}
            {(previousProject || nextProject) && (
              <motion.div
                className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {previousProject ? (
                  <button
                    onClick={() => handleNavigation(previousProject)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group"
                  >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Previous</p>
                      <p className="font-medium">{previousProject.title}</p>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {nextProject ? (
                  <button
                    onClick={() => handleNavigation(nextProject)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group"
                  >
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Next</p>
                      <p className="font-medium">{nextProject.title}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <div />
                )}
              </motion.div>
            )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}