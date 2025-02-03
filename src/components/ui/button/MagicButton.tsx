import { m } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';

const _colors = ['amber','indigo', 'pink', 'teal',  'purple'];
type Color = typeof _colors[number];

interface MagicButtonProps extends PropsWithChildren {
  color?: Color;
  className?: string;
  onClick?: () => void;
  whileHover?: Record<string, any>;
}

const particleColorMapping: Record<Color, string> = {
  amber: '#FBBF24',  
  indigo: '#4F46E5', 
  pink: '#D1006B',   
  teal: '#14B8A6',   
  purple: '#A855F7', 
};

export const MagicButton: FC<MagicButtonProps> = ({ 
  children, 
  color = 'amber',
  className = '',
  onClick,
  whileHover = { scale: 1.05 },
  ...props 
}) => {
  const colorVariants = {
    amber: 'from-amber-500 to-orange-500',
    indigo: 'from-indigo-500 to-purple-500',
    pink: 'from-pink-500 to-rose-500',
    teal: 'from-teal-500 to-emerald-500',
    purple: 'from-purple-500 to-violet-500',
  };

  const handleClick = () => {
    // Change the particles color based on the selected theme
    const newParticleColor = particleColorMapping[color];
    // Assuming there's a function to update the particle color
    updateParticleColor(newParticleColor);
    if (onClick) onClick();
  };

  return (
    <m.button
      whileHover={whileHover}
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r ${colorVariants[color]} rounded-lg px-4 py-2 text-white shadow-lg ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </m.button>
  );
};

// Placeholder function to update particle color
const updateParticleColor = (color: string) => {
  // Logic to update the particles color in the particles.js configuration
};
