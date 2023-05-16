import React, { ElementType } from 'react';
import { iconPack } from '../../../constants/icons';
import { IconTypes } from './Icon.types';

interface Props {
  color?: string;
  name: IconTypes;
  onClick?: () => void;
  size?: number;
}

export function Icon({ name, color = 'white', size = 20, onClick }: Props) {
  const SVGIcon: ElementType = iconPack[name];
  return <SVGIcon width={size} height={size} color={color} onClick={onClick} />;
}
