'use client';

import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  return (
    <div className={`max-w-none ${className}`}>
      <ReactMarkdown
        components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 border-b border-gray-200 pb-3 leading-tight">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold text-gray-900 mb-5 mt-8 leading-tight">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6 leading-tight">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-medium text-gray-800 mb-3 mt-5 leading-tight">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-gray-700 mb-4 leading-relaxed text-base font-normal">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">{children}</ul>
        ),
        li: ({ children }) => (
          <li className="text-gray-700 leading-relaxed">{children}</li>
        ),
        strong: ({ children }) => (
          <strong className="text-gray-900 font-semibold">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="text-gray-700 italic">{children}</em>
        ),
        code: ({ children }) => (
          <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border">{children}</code>
        ),
        pre: ({ children }) => (
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto mb-4 border text-sm">{children}</pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50 italic text-gray-700 mb-4 rounded-r">{children}</blockquote>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
          >
            {children}
          </a>
        ),
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;