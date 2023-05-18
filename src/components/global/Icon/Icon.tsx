import React, { ElementType } from 'react';
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
// eg: <Icon name='arrow-left' size={20} color={COLORS.dashboardWhite}/>
export function Icon({ name, color = 'white', fill, size = 20, onClick,className }: Props) {
  const SVGIcon: ElementType = iconPack[name];
  return (
    <SVGIcon
    className={className}
    color={color}
    fill={fill}
    height={size}
    onClick={onClick}
    stroke={color}
      width={size}
    />
  );
}
