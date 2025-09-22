import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-8">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Project Not Found</h2>
          <p className="text-slate-300 mb-8 max-w-md mx-auto">
            The project you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}