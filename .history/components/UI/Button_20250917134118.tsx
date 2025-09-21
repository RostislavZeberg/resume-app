import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/ui/button.module.scss';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  target = '_self',
  rel = 'noopener noreferrer'
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;
  
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={buttonClass} target={target} rel={rel}>
        {children}
      </a>
    </Link>
  );
};

export default Button;