import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  aschild?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'square';
  shade?: 'lighter' | 'light' | 'main' | 'dark' | 'darker';
  color?:
    | 'primary'
    | 'primary_outline'
    | 'secondary'
    | 'secondary_outline'
    | 'terciary'
    | 'terciary_outline'
    | 'gray'
    | 'gray_outline'
    | 'white'
    | 'white_outline'
    | 'yellow'
    | 'yellow_outline'
    | 'red'
    | 'red_outline';
}

export function Button({
  aschild,
  className = '',
  shade = 'main',
  rounded = 'md',
  size = 'medium',
  color = 'primary',
  ...props
}: ButtonProps) {
  const Component = aschild ? Slot : 'button';

  const sizeClasses = {
    tiny: 'btn btn-xs',
    small: 'btn btn-sm',
    medium: 'btn',
    large: 'btn btn-lg',
    square: 'btn btn-square',
  };

  const colorClasses = {
    primary: {
      lighter: 'bg-primary-lighter hover:bg-primary-darker text-black hover:text-white-light border-none',
      light: 'bg-primary-light hover:bg-primary-dark text-black hover:text-white-lighter border-none',
      main: 'bg-primary-dark hover:bg-primary-main text-white-lighter hover:text-white-lighter border-none',
      dark: 'bg-primary-dark hover:bg-primary-lighter text-white-main hover:text-black border-none',
      darker: 'bg-primary-darker hover:bg-primary-light text-white-main hover:text-black border-none',
    },
    primary_outline: {
      lighter: 'bg-transparent hover:bg-transparent border-2 border-primary-lighter hover:border-primary-darker text-primary-light hover:text-primary-darker',
      light: 'bg-transparent hover:bg-transparent border-2 border-primary-light hover:border-primary-dark text-primary-lighter hover:text-primary-darker',
      main: 'bg-transparent hover:bg-transparent border-2 border-primary-main hover:border-primary-dark text-primary-main hover:text-primary-darker',
      dark: 'bg-transparent hover:bg-transparent border-2 border-primary-dark hover:border-primary-lighter text-primary-dark hover:text-primary-main',
      darker: 'bg-transparent hover:bg-transparent border-2 border-primary-darker hover:border-primary-light text-primary-darker hover:text-primary-main',
    },
    secondary: {
      lighter: 'bg-secondary-lighter hover:bg-secondary-darker text-black hover:text-white-light border-none',
      light: 'bg-secondary-light hover:bg-secondary-dark text-black hover:text-white-lighter border-none',
      main: 'bg-secondary-main hover:bg-secondary-main text-black hover:text-white-main border-none',
      dark: 'bg-secondary-dark hover:bg-secondary-lighter text-white-main hover:text-black border-none',
      darker: 'bg-secondary-darker hover:bg-primary-light text-white-main hover:text-black border-none',
    },
    secondary_outline: {
      lighter: 'bg-transparent hover:bg-transparent border-2 border-secondary-lighter hover:border-secondary-darker text-secondary-light hover:text-secondary-darker',
      light: 'bg-transparent hover:bg-transparent border-2 border-secondary-light hover:border-secondary-dark text-secondary-lighter hover:text-secondary-darker',
      main: 'bg-transparent hover:bg-transparent border-2 border-secondary-main hover:border-secondary-dark text-secondary-main hover:text-secondary-darker',
      dark: 'bg-transparent hover:bg-transparent border-2 border-secondary-dark hover:border-secondary-lighter text-secondary-dark hover:text-secondary-main',
      darker: 'bg-transparent hover:bg-transparent border-2 border-secondary-darker hover:border-secondary-light text-secondary-darker hover:text-secondary-main',
    },
    terciary: {
      lighter: 'bg-terciary-lighter hover:bg-terciary-darker text-black hover:text-white border-none',
      light: 'bg-terciary-light hover:bg-terciary-dark text-black hover:text-white border-none',
      main: 'bg-terciary-main hover:bg-terciary-main text-white hover:text-black border-none',
      dark: 'bg-terciary-dark hover:bg-terciary-lighter text-white hover:text-black border-none',
      darker: 'bg-terciary-darker hover:bg-terciary-light text-white hover:text-black border-none',
    },
    terciary_outline: {
      lighter: 'bg-transparent hover:bg-transparent border-2 border-terciary-lighter hover:border-terciary-darker text-terciary-light hover:text-terciary-darker',
      light: 'bg-transparent hover:bg-transparent border-2 border-terciary-light hover:border-terciary-dark text-terciary-lighter hover:text-terciary-darker',
      main: 'bg-transparent hover:bg-transparent border-2 border-terciary-main hover:border-terciary-dark text-terciary-main hover:text-terciary-darker',
      dark: 'bg-transparent hover:bg-transparent border-2 border-terciary-dark hover:border-terciary-lighter text-terciary-dark hover:text-terciary-main',
      darker: 'bg-transparent hover:bg-transparent border-2 border-terciary-darker hover:border-terciary-light text-terciary-darker hover:text-terciary-main',
    },
    gray: {
      lighter: 'bg-gray-lighter hover:bg-gray-darker text-black hover:text-white border-none',
      light: 'bg-gray-light hover:bg-gray-dark text-black hover:text-white border-none',
      main: 'bg-gray-main hover:bg-gray-main text-white hover:text-black border-none',
      dark: 'bg-gray-dark hover:bg-gray-lighter text-white hover:text-black border-none',
      darker: 'bg-gray-darker hover:bg-gray-light text-white hover:text-black border-none',
    },
    gray_outline: {
      lighter: 'bg-transparent hover:bg-transparent border-2 border-gray-lighter hover:border-gray-darker text-gray-light hover:text-gray-darker',
      light: 'bg-transparent hover:bg-transparent border-2 border-gray-light hover:border-gray-dark text-gray-lighter hover:text-gray-darker',
      main: 'bg-transparent hover:bg-transparent border-2 border-gray-main hover:border-gray-dark text-gray-main hover:text-gray-darker',
      dark: 'bg-transparent hover:bg-transparent border-2 border-gray-dark hover:border-gray-lighter text-gray-dark hover:text-gray-main',
      darker: 'bg-transparent hover:bg-transparent border-2 border-gray-darker hover:border-gray-light text-gray-darker hover:text-gray-main',
    },
    white: {
      lighter: 'bg-white-lighter hover:bg-white-darker text-black hover:text-gray border-none',
      light: 'bg-white-light hover:bg-gray-main text-black hover:text-white border-none',
      main: 'bg-white-main hover:bg-gray-light text-black hover:text-gray border-none',
      dark: 'bg-white-dark hover:bg-gray-darker text-gray hover:text-black border-none',
      darker: 'bg-white-darker hover:bg-white-light text-gray hover:text-black border-none',
    },
    white_outline: {
      lighter: 'bg-transparent hover:bg-transparent border-2 border-white-lighter hover:border-gray-darker text-white-light hover:text-white-darker',
      light: 'bg-transparent hover:bg-transparent border-2 border-white-light hover:border-gray-dark text-white-lighter hover:text-gray-darker',
      main: 'bg-transparent hover:bg-transparent border-2 border-white-main hover:border-gray-dark text-white-main hover:text-gray-darker',
      dark: 'bg-transparent hover:bg-transparent border-2 border-white-dark hover:border-white-lighter text-white-dark hover:text-white-main',
      darker: 'bg-transparent hover:bg-transparent border-2 border-white-darker hover:border-white-light text-white-darker hover:text-white-main',
    },
    yellow: {
      lighter: 'bg-yellow-lighter hover:bg-yellow-darker text-black hover:text-white border-none',
      light: 'bg-yellow-light hover:bg-yellow-dark text-black hover:text-white border-none',
      main: 'bg-yellow-main hover:bg-yellow-main text-white hover:text-black border-none',
      dark: 'bg-yellow-dark hover:bg-yellow-lighter text-white hover:text-black border-none',
      darker: 'bg-yellow-darker hover:bg-yellow-light text-white hover:text-black border-none',
    },
    yellow_outline: {
      lighter: 'bg-transparent hover:bg-transparent border-2 border-yellow-lighter hover:border-yellow-darker text-yellow-light hover:text-yellow-darker',
      light: 'bg-transparent hover:bg-transparent border-2 border-yellow-light hover:border-yellow-dark text-yellow-lighter hover:text-yellow-darker',
      main: 'bg-transparent hover:bg-transparent border-2 border-yellow-main hover:border-yellow-dark text-yellow-main hover:text-yellow-darker',
      dark: 'bg-transparent hover:bg-transparent border-2 border-yellow-dark hover:border-yellow-lighter text-yellow-dark hover:text-yellow-main',
      darker: 'bg-transparent hover:bg-transparent border-2 border-yellow-darker hover:border-yellow-light text-yellow-darker hover:text-yellow-main',
    },
    red: {
      lighter: 'bg-red-lighter hover:bg-red-darker text-black hover:text-white border-none',
      light: 'bg-red-light hover:bg-red-dark text-black hover:text-white border-none',
      main: 'bg-red-main hover:bg-red-main text-white hover:text-black border-none',
      dark: 'bg-red-dark hover:bg-red-lighter text-white hover:text-black border-none',
      darker: 'bg-red-darker hover:bg-red-light text-white hover:text-black border-none',
    },
    red_outline: {
      lighter: 'bg-transparent hover:bg-transparent border-2 border-red-lighter hover:border-red-darker text-red-light hover:text-red-darker',
      light: 'bg-transparent hover:bg-transparent border-2 border-red-light hover:border-red-dark text-red-lighter hover:text-red-darker',
      main: 'bg-transparent hover:bg-transparent border-2 border-red-main hover:border-red-dark text-red-main hover:text-red-darker',
      dark: 'bg-transparent hover:bg-transparent border-2 border-red-dark hover:border-red-lighter text-red-dark hover:text-red-main',
      darker: 'bg-transparent hover:bg-transparent border-2 border-red-darker hover:border-red-light text-red-darker hover:text-red-main',
    },
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  return (
    <Component
      className={`${sizeClasses[size]} ${colorClasses[color][shade]} ${roundedClasses[rounded]} ${className}`}
      {...props}
    />
  );
}
