import React, { FC, useMemo } from 'react';
import { iconPack } from './Icon.utils';
import { IconTypes } from './Icon.types';

interface Props {
  className?: string;
  color?: string;
  name: IconTypes;
  onClick?: () => void;
  size?: number;
  fill?: string;
}

export const Icon: FC<Props> = ({
  name,
  color = 'white',
  size = 20,
  className = '',
  onClick,
  fill = 'transparent',
}) => {
  const SVGIcon = useMemo(() => iconPack[name], [name]);
  const isSizeANumber = typeof size === 'number';
  return (
    <SVGIcon
      width={size}
      height={size}
      // viewBox="0 0 28 24"
      className={
        (!isSizeANumber ? `w-[${size}px] h-[${size}px] ` : '') +
        `stroke-${color} fill-${fill} ${className}`
      }
      onClick={onClick}
    />
  );
};
