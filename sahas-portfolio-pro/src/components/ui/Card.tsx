import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  gradient?: boolean;
}

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  onClick,
  gradient = false
}: CardProps) => {
  const baseStyles = 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg transition-all duration-300';

  const hoverStyles = hover ? 'hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-xl' : '';

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const gradientStyles = gradient ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/60' : '';

  const combinedClassName = `${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${gradientStyles} ${className}`;

  const CardComponent = motion.div;

  return (
    <CardComponent
      className={combinedClassName}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </CardComponent>
  );
};

export default Card;