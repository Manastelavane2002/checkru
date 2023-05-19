import * as React from 'react';
import clsx from 'clsx';
import { Icon, Typography } from 'src/components/global';
import { ButtonProps, sizes, shapes } from './Button.types';
import { generateButtonVariants } from './Button.utils';

/**
 * @param {ButtonProps} props
 * @returns Button component
 * @description This component is used to render a button
 * @example <Button color="primary" size="medium" onClick={handleClick}>Click Me</Button>
 */

export function Button({
  label,
  variant = 'default',
  color = 'primary',
  size = 'md',
  icon,
  endIcon,
  href,
  shape = 'square',
  className = '',
  disabled = false,
  textAlign = 'center',
  selected = false,
  ...restProps
}: ButtonProps) {
  const variants = generateButtonVariants(color);
  const classes = `group disabled:cursor-not-allowed ${variants[variant].button} ${shapes[shape]} ${sizes[size]} whitespace-nowrap ${className}`;
  const typoClassName = `group-hover:text-${color}-800 group-disabled:text-${color}-300`;
  const iconClassName = `${
    selected ? `stroke-${color}-800` : ``
  } group-hover:stroke-${color}-800 group-disabled:stroke-${color}-300`;

  const typoColor = selected ? `${color}-800` : `${color}-700`;
  const typoSize = size === '2xl' ? 'lg' : size === 'xl' || size === 'lg' ? 'md' : 'sm';
  const iconSize = size === '2xl' ? 24 : 20;
  const children = (
    <div
      className={clsx(
        `w-full h-full flex flex-row items-center`,
        size === '2xl' ? 'gap-3' : 'gap-2'
      )}>
      {icon && <Icon name={icon} color={typoColor} size={iconSize} className={iconClassName} />}
      <div className="flex-1">
        <Typography
          color={typoColor}
          className={`${typoClassName} ${
            textAlign === 'left'
              ? 'text-left'
              : textAlign === 'right'
              ? 'text-right'
              : 'text-center'
          }`}
          size={typoSize}>
          {label}
        </Typography>
      </div>
      {endIcon && (
        <Icon name={endIcon} color={typoColor} size={iconSize} className={iconClassName} />
      )}
    </div>
  );

  return variant === 'link' ? (
    <a className={clsx('inline-block w-fit', classes, className)} href={href} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={`${classes} ${className}`} {...restProps} disabled={disabled}>
      {children}
    </button>
  );
}
