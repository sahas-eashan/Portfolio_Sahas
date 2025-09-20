import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  icon,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500',
    outline: 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      className={combinedClassName}
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
      whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLoading ? (
        <>
          <div className="spinner mr-2" />
          Loading...
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
};

export default Button;