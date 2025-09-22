'use client';

import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { motion } from 'framer-motion';

interface ConstellationNodeData {
  label: string;
  category: 'center' | 'main' | 'sub';
  title?: string;
  organization?: string;
  period?: string;
  description?: string;
  skills?: string[];
  gpa?: string;
  icon?: string;
}

const ConstellationNode = memo(({ data, selected }: NodeProps<ConstellationNodeData>) => {
  const { label, category, icon } = data;

  const getNodeStyle = () => {
    switch (category) {
      case 'center':
        return {
          background: 'linear-gradient(135deg, #60A5FA, #34D399)',
          border: '3px solid #ffffff',
          borderRadius: '50%',
          width: 120,
          height: 120,
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'white',
          boxShadow: selected
            ? '0 0 50px rgba(96, 165, 250, 0.8)'
            : '0 0 30px rgba(96, 165, 250, 0.5)',
        };
      case 'main':
        return {
          borderRadius: '50%',
          width: 80,
          height: 80,
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          boxShadow: selected
            ? '0 0 30px rgba(255, 255, 255, 0.6)'
            : '0 0 20px rgba(255, 255, 255, 0.4)',
        };
      case 'sub':
        return {
          borderRadius: '8px',
          width: 60,
          height: 60,
          color: 'white',
          fontSize: '10px',
          fontWeight: 'bold',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: selected
            ? '0 0 20px rgba(255, 255, 255, 0.5)'
            : 'none',
        };
    }
  };

  return (
    <motion.div
      className="constellation-node"
      style={getNodeStyle()}
      whileHover={{
        scale: category === 'center' ? 1.1 : category === 'main' ? 1.15 : 1.2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: category === 'center' ? 0 : category === 'main' ? 0.2 : 0.4
        }
      }}
    >
      {/* Handles for connections */}
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: 'transparent', border: 'none' }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: 'transparent', border: 'none' }}
      />
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: 'transparent', border: 'none' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: 'transparent', border: 'none' }}
      />

      {/* Node Content */}
      <div className="flex flex-col items-center justify-center h-full text-center p-1">
        {icon && category !== 'sub' && (
          <div className={`${category === 'center' ? 'text-2xl mb-1' : 'text-lg mb-1'}`}>
            {icon}
          </div>
        )}
        <div className={`${category === 'center' ? 'text-sm' : category === 'main' ? 'text-xs' : 'text-xs'} font-bold leading-tight`}>
          {label}
        </div>
        {category === 'center' && data.title && (
          <div className="text-xs opacity-90 mt-1">
            {data.title}
          </div>
        )}
      </div>

      {/* Pulse effect for center node */}
      {category === 'center' && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
});

ConstellationNode.displayName = 'ConstellationNode';

export default ConstellationNode;