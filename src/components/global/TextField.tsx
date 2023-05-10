import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

/**
 * Defines the props for the TextField component
 * @param color - The color of the TextField
 * @param disabled - Whether the TextField is disabled
 * @param error - Whether the TextField has an error
 * @param helperText - Helper text to display below the TextField
 * @param id - Id to be used for unique identification
 * @param label - Label to be displayed above the TextField
 * @param name - Name to be used for unique identification
 * @param placeholder - Placeholder text to be displayed inside the TextField
 * @param type - TextField type (text, password, email, etc.)
 * @param value - Value of the TextField
 * @param variant - Variant of the TextField (filled, outlined, standard)
 * @param size - Size of the TextField (small, normal)
 * @param fullWidth - Whether the TextField should take up the full width of its container
 * @param multiline - Whether the TextField should be multiline (textarea)
 * @param select - Whether the TextField should be a select (dropdown)
 * @param options - Options to be displayed in the select (dropdown)
 * @param className - Additional class names to be added to the TextField
 * @param restProps - Additional props to be spread to the TextField
 */
export interface TextFieldProps {
  className?: string;
  color?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  id?: string;
  label?: string;
  multiline?: boolean;
  name: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
  select?: boolean;
  size?: 'normal' | 'small';
  type?: string;
  validationSchema?: RegisterOptions;
  value?: string;
  variant?: 'filled' | 'outlined' | 'default';
}
/**
 * @param {TextFieldProps} props - The props for the TextField component
 * @returns TextField component
 * @description This component is used to render a TextField which could be a text input, password input, email input, textarea, or select (dropdown)
 * @example <TextField color="primary" />
 */
export function TextField({
  disabled,
  error,
  helperText,
  id,
  label,
  name,
  type,
  variant = 'default',
  size = 'normal',
  fullWidth,
  multiline,
  select,
  options,
  className,
  validationSchema,

  ...restProps
}: TextFieldProps) {
  const { register } = useFormContext();

  const variants = {
    outlined: `border-2 rounded bg-primaryDashboard text-[#A6A6A6] ${
      error ? 'border-red-500' : 'border-[#404040]'
    }`,
    filled: `border-b-2 rounded-t bg-primaryDashboard ${
      error ? 'border-red-500 bg-red-500/20' : 'border-[#404040]'
    }`,
    default: `border-b-2 bg-primaryDashboard ${error ? 'border-red-500' : 'border-[#404040]'}`,
  };

  const sizes = {
    small: 'h-8 px-2',
    normal: 'h-10 px-4',
  };

  const inputClasses = twMerge(
    'outline-none',
    fullWidth ? 'w-full' : 'w-fit',
    sizes[size],
    variants[variant],
    className
  );

  const getElement = () => {
    if (select) {
      return 'select';
    }
    if (multiline) {
      return 'textarea';
    }
    return 'input';
  };
  const textFieldDisplay = React.createElement(
    getElement(),
    {
      ...restProps,
      type,
      className: `${inputClasses}`,
      ...{
        ...register(name, validationSchema),
      },
      disabled,
    },
    select
      ? options?.map((option) => (
          <option value={option} key={`${option}`}>
            {option}
          </option>
        ))
      : null
  );
  return (
    <div className={`flex flex-col ${disabled && 'opacity-50 cursor-not-allowed'} mb-5`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm mb-1  text-[14px] font-[500] ${
            error ? 'text-red-500' : 'text-white'
          } `}>
          {label}
        </label>
      )}
      {textFieldDisplay}
      {helperText && (
        <p className={`text-sm ${error ? 'text-red-500' : 'text-white'}`}>{helperText}</p>
      )}
    </div>
  );
}
