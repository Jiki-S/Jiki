import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './ButtonStyles';
import { ButtonSize } from './ButtonSize';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  aschild?: boolean;
  styleButton?: keyof typeof ButtonStyle;
  colorVariant?: keyof typeof ButtonStyle['primary'];
  size?: keyof typeof ButtonSize;
}

export function ButtonRoot({
  aschild,
  styleButton = 'primary',
  colorVariant = 'main',
  size = 'normal',
  ...props
}: ButtonProps) {
  const Component = aschild ? Slot : 'button';

  const getButtonStyleClass = (styleButton: keyof typeof ButtonStyle, colorVariant: keyof typeof ButtonStyle['primary']) => {
    const colorClasses = ButtonStyle[styleButton][colorVariant];
    return `${colorClasses} text-white `;
  };

  const getButtonSizeClass = (size: keyof typeof ButtonSize) => {
    return ButtonSize[size];
  };

  return (
    <Component
      className={`flex items-center justify-center gap-4 text-white-main ${getButtonStyleClass(styleButton, colorVariant)} ${getButtonSizeClass(size)}`}
      {...props}
    />
  );
}



//Pattern Polimorfis
//how to use this slot ->

/* its a anchor

 <Button aschild>
    <a href="#">Link to website</a>
 </Button>

*/

//Pattern Composition
//Normal use ->

/*

  <Button.Root styleButton='green' colorVariant="main">
    <Button.Content text="Create Account" />
    <Button.Icon icon={FaBabyCarriage} />
  </Button.Root>

*/
