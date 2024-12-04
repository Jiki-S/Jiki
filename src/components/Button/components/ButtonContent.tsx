import React from 'react';

interface ButtonContentProps {
  text: string;
  color?: string;
  size?: string;
  dinamicClassName?: string;
}

export function ButtonContent({
  text,
  color,
  size,
  dinamicClassName,
}: ButtonContentProps) {
  return (
    <p
      className={`${color ? color : 'text-white-main'} ${size ? size : 'text-base'} ${dinamicClassName}`}
    >
      {text}
    </p>
  );
}
