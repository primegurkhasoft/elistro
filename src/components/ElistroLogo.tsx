import React from 'react';

interface ElistroLogoProps {
  className?: string;
  size?: number;
}

export const ElistroLogo = ({ className = "", size = 32 }: ElistroLogoProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/images/elistro.png"
        alt="Elistro Logo"
        width={size}
        height={size}
        className="object-contain animate-pulse-logo"
        style={{ animation: 'pulse 2s ease-in-out infinite' }}
      />
    </div>
  );
};