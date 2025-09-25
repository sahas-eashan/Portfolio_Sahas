'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  return (
    <div className={`max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
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
        ol: ({ children }) => (
          <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2 ml-4">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="text-gray-700 leading-relaxed">{children}</li>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold text-gray-900" style={{ fontWeight: 700 }}>{children}</strong>
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
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-gray-100">{children}</thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
        ),
        tr: ({ children }) => (
          <tr className="hover:bg-gray-50 transition-colors">{children}</tr>
        ),
        th: ({ children }) => (
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300 last:border-r-0">{children}</th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 last:border-r-0">{children}</td>
        ),
        img: ({ src, alt }) => {
          const isArchitecture = alt?.toLowerCase().includes('architecture') || alt?.toLowerCase().includes('pipeline') || alt?.toLowerCase().includes('overview');
          if (isArchitecture) {
            return (
              <>
                <img
                  src={src}
                  alt={alt || ''}
                  className="rounded-lg shadow-md w-96 h-auto mx-auto block my-8"
                />
                {alt && (
                  <span className="text-xs text-gray-500 text-center mt-2 italic block">{alt}</span>
                )}
              </>
            );
          }
          return (
            <>
              <img
                src={src}
                alt={alt || ''}
                className="rounded-lg shadow-md mx-auto block w-full max-w-lg my-6"
              />
              {alt && (
                <span className="text-xs text-gray-500 text-center mt-2 italic block">{alt}</span>
              )}
            </>
          );
        },
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