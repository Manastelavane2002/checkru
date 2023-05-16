import React, { useMemo } from 'react';
import { iconPack } from '../../../constants/icons';
import { IconTypes } from './Icon.types';

interface Props {
  className?: string;
  color?: string;
  fill?: string;
  name: IconTypes;
  onClick?: () => void;
  size?: number;
}

export function Icon({
  name,
  color = 'white',
  fill = 'transparent',
  size = 20,
  className = '',
  onClick,
}: Props) {
  const SVGIcon = useMemo(() => iconPack[name], [name]);
  return (
    <SVGIcon
      width={size}
      height={size}
      className={
        (!(typeof size === 'number') ? `w-[${size}px] h-[${size}px] ` : '') +
        `stroke-${color} fill-${fill} ${className}`
      }
      onClick={onClick}
    />
  );
}
