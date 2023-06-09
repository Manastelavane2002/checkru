import * as React from 'react';
import {
  TypographySizeType,
  TypographyWeightType,
  TypographyProps,
  typographySizes,
  typographyWeights,
} from './Typography.types';
import { generateTypographyVariants } from './Typography.utils';

const compare = (array: string[], a: string, b: string) => {
  const aIndex = array.findIndex((v) => v === a);
  const bIndex = array.findIndex((v) => v === b);
  return aIndex === bIndex ? 0 : aIndex < bIndex ? -1 : 1;
};
const isGreaterSizeThan = (a: TypographySizeType, b: TypographySizeType) =>
  compare(typographySizes, a, b) === 1;
const isGreaterWeightThan = (a: TypographyWeightType, b: TypographyWeightType) =>
  compare(typographyWeights, a, b) === 1;

/**
 * @param {TypographyProps} props
 * @returns Typography component
 * @description This component is used to render text
 * @example <Typography htmlElement="h1">Heading 1</Typography>
 */
export function Typography({
  children,
  htmlElement='h1',
  color = 'neutral-900',
  variant ,
  size = 'md',
  weight = 'normal',
  type = 'text',
  className = '',
  ...restProps
}: TypographyProps) {
  const isMediumOrAboveDisplay = type === 'display' && isGreaterSizeThan(size, 'sm');
  const fontFamily = isMediumOrAboveDisplay ? 'font-eudoxus-sans' : 'font-inter';
  const weightIndex = typographyWeights.findIndex((w) => w === weight);
  const fontWeight =
    isMediumOrAboveDisplay &&
    isGreaterWeightThan(weight, 'medium') &&
    weightIndex !== typographyWeights.length - 1
      ? typographyWeights[weightIndex + 1]
      : weight;
  const classes = `text-${color}-700 text-${
    type === 'display' ? 'd' : 't'
  }-${size} font-${fontWeight} ${fontFamily} ${className}`;

  return React.createElement(
    htmlElement,
    {
      ...restProps,
      className: !variant ? classes : generateTypographyVariants(variant),
    },
    children
  );
}
