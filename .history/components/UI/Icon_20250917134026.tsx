import React from 'react';
import Image from 'next/image';

interface IconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = '', width = 24, height = 24 }) => {
  return (
    <Image 
      src={`/icons/${name}.svg`} 
      alt={`${name} icon`}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Icon;