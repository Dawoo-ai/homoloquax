import React from 'react';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card = ({ className = '', children }: CardProps) => {
  return <div className={`rounded-lg border ${className}`}>{children}</div>;
};

export const CardContent = ({ className = '', children }: CardProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};