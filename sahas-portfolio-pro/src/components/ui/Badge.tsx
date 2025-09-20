import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'skill';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  onClick
}: BadgeProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200';

  const variants = {
    default: 'bg-slate-700/50 text-slate-300 border border-slate-600/50',
    primary: 'bg-blue-600/20 text-blue-400 border border-blue-500/30',
    secondary: 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30',
    success: 'bg-green-600/20 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30',
    skill: 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-300 border border-blue-500/30 hover:from-blue-600/30 hover:to-indigo-600/30 hover:scale-110'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const BadgeComponent = onClick ? motion.button : motion.span;

  return (
    <BadgeComponent
      className={combinedClassName}
      onClick={onClick}
      whileHover={variant === 'skill' ? { scale: 1.1 } : onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
    >
      {children}
    </BadgeComponent>
  );
};

export default Badge;