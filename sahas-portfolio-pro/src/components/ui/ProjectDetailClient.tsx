'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Parse project content into smaller paragraph chunks for 2-column layout
  const parseProjectContent = (detail: string) => {
    const sections = detail.split('##').filter(section => section.trim());
    const parsedContent = [];

    sections.forEach(section => {
      const lines = section.trim().split('\n');
      const title = lines[0].replace(/[#\s]/g, '').trim();
      const content = lines.slice(1).join('\n').trim();

      // Split content into smaller paragraphs for better 2-column layout
      const paragraphs = content.split('\n\n').filter(p => p.trim());

      // Group paragraphs into smaller chunks for columns
      for (let i = 0; i < paragraphs.length; i += 2) {
        const leftParagraph = paragraphs[i];
        const rightParagraph = paragraphs[i + 1] || '';

        parsedContent.push({
          title: i === 0 ? title : `${title} (continued)`,
          leftContent: leftParagraph,
          rightContent: rightParagraph,
          hasImage: Math.random() > 0.6 // Randomly place images
        });
      }
    });

    return parsedContent;
  };

  const contentSections = parseProjectContent(project.detail);

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Significant Left Border */}
        <div className="w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-600"></div>

        {/* Main Content Area - Properly Centered */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-6xl px-8 py-12">
          {/* Navigation */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            className="mb-12 text-center"
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

          {/* Featured Image */}
          {project.media && project.media.length > 0 && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                {project.media[selectedImageIndex].type === 'image' ? (
                  <img
                    src={project.media[selectedImageIndex].src}
                    alt={project.media[selectedImageIndex].alt}
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-cover"
                  />
                ) : (
                  <video
                    src={project.media[selectedImageIndex].src}
                    controls
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Image Navigation */}
              {project.media && project.media.length > 1 && (
                <div className="flex justify-center gap-2">
                  {project.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === selectedImageIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Enhanced Two-Column Article Content with Integrated Images */}
          <motion.article
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Project Introduction */}
            <div className="mb-12 prose prose-lg max-w-none text-center">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Featured Image */}
            {project.media && project.media.length > 0 && (
              <div className="mb-12">
                <img
                  src={project.media[0].src}
                  alt={project.media[0].alt}
                  className="w-full rounded-lg shadow-lg object-cover max-h-96"
                />
                <p className="text-sm text-gray-500 text-center mt-2 italic">
                  {project.media[0].alt}
                </p>
              </div>
            )}

            {/* Dynamic Two-Column Content with Images */}
            {contentSections.map((section, index) => (
              <div key={index} className="mb-12">
                {/* Two-Column Text Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="prose prose-gray max-w-none">
                    {index === 0 && (
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                        {section.title}
                      </h2>
                    )}
                    <div className="text-gray-700 leading-relaxed text-base">
                      <MarkdownRenderer content={section.leftContent} />
                    </div>
                  </div>
                  <div className="prose prose-gray max-w-none">
                    {section.rightContent ? (
                      <div className="text-gray-700 leading-relaxed text-base">
                        <MarkdownRenderer content={section.rightContent} />
                      </div>
                    ) : (
                      <div className="bg-gray-50 rounded-lg p-6 h-full flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">Innovation</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Integrated Images Between Text */}
                {project.media && project.media[index + 1] && (index + 1) % 2 === 0 && (
                  <div className="my-8 flex justify-center">
                    <div className="max-w-4xl">
                      <img
                        src={project.media[index + 1].src}
                        alt={project.media[index + 1].alt}
                        className="w-full rounded-lg shadow-md object-cover max-h-80"
                      />
                      <p className="text-sm text-gray-500 text-center mt-2 italic">
                        {project.media[index + 1].alt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Additional inline images for variety */}
                {index > 0 && project.media && project.media[index + 2] && index % 3 === 1 && (
                  <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="prose prose-gray max-w-none">
                      <div className="text-gray-600 text-sm leading-relaxed">
                        <MarkdownRenderer content="**Advanced Implementation**: Technical sophistication and real-world application showcase the innovative engineering approach used in this comprehensive solution." />
                      </div>
                    </div>
                    <div>
                      <img
                        src={project.media[index + 2].src}
                        alt={project.media[index + 2].alt}
                        className="w-full rounded-lg shadow-sm object-cover max-h-48"
                      />
                      <p className="text-xs text-gray-500 text-center mt-1 italic">
                        {project.media[index + 2].alt}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.article>

          {/* Project Meta Information */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Information */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Category:</span>
                  <span className="text-gray-900">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Status:</span>
                  <span className="text-gray-900 capitalize">{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Year:</span>
                  <span className="text-gray-900">{project.year}</span>
                </div>
                {project.featured && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Featured:</span>
                    <span className="text-yellow-600 font-medium">Yes</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-600 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}