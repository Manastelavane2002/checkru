import React, { ElementType } from 'react';
import { iconPack } from 'src/constants/icons';
import { IconTypes } from './Icon.types';

export interface IconProps {
  color?: string;
  fill?: string;
  name: IconTypes;
  onClick?: () => void;
  size?: number;
}

/**
 * @param {IconProps} props
 * @returns Icon component
 * @description This component is used render custom svg
 * @example <Icon name='arrow-left' size={20} color={COLORS.dashboardWhite}/>
 */
export function Icon({ name, color = 'white', fill, size = 20, onClick }: IconProps) {
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
