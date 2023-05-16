import React, { ElementType } from 'react';
import { iconPack } from '../../../constants/icons';
import { IconTypes } from './Icon.types';

interface Props {
  color?: string;
  fill?: string;
  name: IconTypes;
  onClick?: () => void;
  size?: number;
}
// eg: <Icon name='arrow-left' size={20} color={COLORS.dashboardWhite}/>
export function Icon({ name, color = 'white', fill, size = 20, onClick }: Props) {
  const SVGIcon: ElementType = iconPack[name];
  return (
    <SVGIcon
      width={size}
      height={size}
      color={color}
      fill={fill}
      stroke={color}
      onClick={onClick}
    />
  );
}
