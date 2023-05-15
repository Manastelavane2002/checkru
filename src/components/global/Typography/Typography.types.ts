import { ReactNode } from 'react';

/**
 * Defines the props of the component.
 * @params id - Id to identify uniquely the component
 * @params children - Content of the component.
 * @params align - Text-align on the component.
 * @params color - Color of the component. It supports those theme colors that make sense for this component.
 * @params variant - Component used for the root node. Either a string to use a HTML element or a component.
 * @params whitespace - White space to apply to the component.
 * @params className - Override or extend the styles applied to the component.
 */

export type TypographySizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TypographyWeightType = 'normal' | 'medium' | 'semibold' | 'bold';
export type TypographyTextType = 'display' | 'text';

export const typographySizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
export const typographyWeights = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
];

export interface TypographyProps {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: TypographySizeType;
  type?: TypographyTextType;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  weight?: TypographyWeightType;
}
