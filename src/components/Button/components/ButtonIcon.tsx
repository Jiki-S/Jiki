import { ElementType } from 'react';
import { IconType } from 'react-icons';

interface ButtonIconProps {
  icon: ElementType | IconType;
  color?: string;
  size?: string;
  dinamicClassName?: string;
}

export function ButtonIcon({
  icon: Icon,
  color,
  size,
  dinamicClassName,
}: ButtonIconProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <Icon
        className={`${color ? color : 'fill-white-main'} ${size ? size : 'w-6 h-6'} ${dinamicClassName}`}
      />
    </div>
  );
}
