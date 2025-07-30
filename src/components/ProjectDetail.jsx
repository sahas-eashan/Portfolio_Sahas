import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  const [showFullDetail, setShowFullDetail] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(0);

  if (!project) {
    return (
      <div className="text-white text-xl p-10">Project not found.</div>
    );
  }

  // Extract sections from the detail markdown for read more functionality
  const fullDetail = project.detail || "";
  const previewLength = 800; // characters to show initially
  const shouldShowReadMore = fullDetail.length > previewLength;
  const previewSection = shouldShowReadMore ? fullDetail.substring(0, previewLength) + "..." : fullDetail;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleReadMoreClick = () => {
    setShowFullDetail(true);
    setTimeout(() => {
      window.scrollTo({ top: window.scrollY + 100, behavior: 'smooth' });
    }, 100);
  };

  const handleShowLessClick = () => {
    setShowFullDetail(false);
    setTimeout(() => {
      const contentElement = document.querySelector('[data-content-start]');
      if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Helper to check if it's a YouTube URL
  function isYouTube(url) {
    return typeof url === "string" && url.includes("youtube.com");
  }

  // Converts a normal YouTube watch link to an embed link if needed
  function toEmbedUrl(url) {
    if (!url) return "";
    if (url.includes("youtube.com/embed/")) return url;
    // Handle normal youtube.com/watch?v=... URLs
    const match = url.match(/v=([\w-]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
  }

  return (
    <section className="relative py-12 px-4 sm:px-6 min-h-screen bg-gradient-to-br from-transparent to-blue-950/30">
      {/* Header with Back Button */}
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={handleBackClick}
          className="mb-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl shadow-lg font-bold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {project.description}
          </p>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 View on GitHub
            </motion.a>
          )}
        </motion.div>

        {/* Media Gallery */}
        {project.media?.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Main Media Display */}
<div
  className="mx-auto flex items-center justify-center bg-gray-900 rounded-2xl overflow-hidden mb-4"
  style={{
    maxWidth: 650,        // Maximum width of the image/video
    width: "100%",
    minHeight: 360,        // Minimum height for loading
    aspectRatio: "4/3",    // Good for both portrait/landscape
  }}
>
  {project.media[selectedMedia]?.type === "video" && isYouTube(project.media[selectedMedia].src) ? (
    <iframe
      src={toEmbedUrl(project.media[selectedMedia].src)}
      title={project.media[selectedMedia].alt || project.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-2xl"
      style={{ aspectRatio: "4/3", minHeight: 300, maxHeight: 480 }}
    />
  ) : project.media[selectedMedia]?.type === "video" ? (
    <video
      src={project.media[selectedMedia].src}
      controls
      className="w-full h-full object-contain rounded-2xl"
      style={{ aspectRatio: "4/3", minHeight: 300, maxHeight: 480 }}
      poster={project.media[selectedMedia].poster}
    />
  ) : (
    <img
      src={project.media[selectedMedia]?.src}
      alt={project.media[selectedMedia]?.alt || project.title}
      className="w-full h-full object-contain rounded-2xl"
      style={{ aspectRatio: "4/3", minHeight: 300, maxHeight: 480 }}
    />
  )}
</div>

            {/* Media Thumbnails */}
            {project.media.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.media.map((item, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedMedia(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedMedia === idx 
                        ? 'border-cyan-400 shadow-lg shadow-cyan-400/30' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.type === "video" && isYouTube(item.src) ? (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xl">▶️</div>
                    ) : item.type === "video" ? (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-xl">🎬</div>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt || `Media ${idx + 1}`}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Project Details */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10" data-content-start>
              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({node, ...props}) => <h1 {...props} className="text-3xl font-bold text-cyan-400 mb-6" />,
                    h2: ({node, ...props}) => <h2 {...props} className="text-2xl font-bold text-white mb-4 mt-8" />,
                    h3: ({node, ...props}) => <h3 {...props} className="text-xl font-bold text-cyan-300 mb-3 mt-6" />,
                    h4: ({node, ...props}) => <h4 {...props} className="text-lg font-bold text-purple-300 mb-2 mt-4" />,
                    p: ({node, ...props}) => <p {...props} className="text-gray-300 mb-4 leading-relaxed" />,
                    ul: ({node, ...props}) => <ul {...props} className="list-none space-y-2 mb-6" />,
                    li: ({node, ...props}) => <li {...props} className="flex items-start gap-3 text-gray-300"><span className="text-cyan-400 mt-1">•</span><span>{props.children}</span></li>,
                    strong: ({node, ...props}) => <strong {...props} className="text-white font-bold" />,
                    em: ({node, ...props}) => <em {...props} className="text-cyan-300" />,
                    blockquote: ({node, ...props}) => <blockquote {...props} className="border-l-4 border-cyan-400 pl-6 my-6 italic text-gray-300" />,
                    table: ({node, ...props}) => (
                      <div className="overflow-x-auto mb-6">
                        <table {...props} className="w-full border-collapse bg-white/5 rounded-xl overflow-hidden" />
                      </div>
                    ),
                    th: ({node, ...props}) => <th {...props} className="bg-cyan-500/20 text-cyan-300 font-bold p-4 text-left border-b border-white/10" />,
                    td: ({node, ...props}) => <td {...props} className="p-4 text-gray-300 border-b border-white/5" />,
                    a: ({node, ...props}) => <a {...props} className="text-cyan-400 hover:text-cyan-300 underline font-medium" target="_blank" rel="noopener noreferrer" />
                  }}
                >
                  {showFullDetail ? fullDetail : previewSection}
                </ReactMarkdown>
                
                {!showFullDetail && shouldShowReadMore && (
                  <motion.button
                    onClick={handleReadMoreClick}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📖 Read More Details
                  </motion.button>
                )}
                
                {showFullDetail && shouldShowReadMore && (
                  <motion.button
                    onClick={handleShowLessClick}
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-bold hover:from-gray-500 hover:to-gray-600 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📄 Show Less
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <motion.div
              className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl p-6 backdrop-blur-sm border border-cyan-400/20"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.1)" }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">🎯 Quick Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white font-medium">
                    {PROJECT_CATEGORIES.find(cat => cat.id === project.category)?.label || 'General'}
                  </span>
                </div>
                {project.github && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Source:</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      GitHub →
                    </a>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Media:</span>
                  <span className="text-white font-medium">
                    {project.media?.length || 0} items
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Technologies/Tags if available */}
            {project.tech && (
              <motion.div
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-6 backdrop-blur-sm border border-purple-400/20"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">🛠️ Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-300 border border-purple-400/30 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Call to Action */}
            {project.github && (
              <motion.div
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-6 backdrop-blur-sm border border-green-400/20 text-center"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)" }}
              >
                <h3 className="text-xl font-bold text-green-400 mb-3">🚀 Explore the Code</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Dive into the implementation details and technical documentation
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 w-full"
                >
                  View Repository
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
