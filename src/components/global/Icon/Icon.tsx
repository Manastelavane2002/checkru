import React, { FC, useMemo } from 'react';
import { iconPack } from './Icon.utils';
import { ArrowLeft } from '../../../../public/assets/icons';

interface Props {
  className?: string;
  color?: string;
  name: 'arrow-left';
  onClick?: () => void;
  size?: number;
}

export const Icon: FC<Props> = ({ name, color = 'white', size = 20, className = '', onClick }) => {
  const SVGIcon = useMemo(() => iconPack[name], [name]);
  const isSizeANumber = typeof size === 'number';
  return (
    <SVGIcon
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={
        (!isSizeANumber ? `w-[${size}px] h-[${size}px] ` : '') + `stroke-${color} ${className}`
      }
      onClick={onClick}
    />
  );
};
