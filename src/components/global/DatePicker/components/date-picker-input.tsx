import React, { FC } from 'react';

export type DatePickerInputValue = string;

export interface DatePickerInputProps {
  className?: string;
  hasError?: boolean;
  onChange?: (value: DatePickerInputValue) => void;
  value?: DatePickerInputValue;
}

export const DatePickerInput: FC<DatePickerInputProps> = ({
  value,
  onChange,
  hasError = false,
  className = '',
}) => {
  return (
    <input
      className={`bg-transparent px-[7px] py-[5px] border ${
        hasError ? 'border-red-600 border-2 focus-visible:outline-0' : 'border-gray-300 border'
      } rounded-lg text-t-md text-componentHeader ${className}`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default DatePickerInput;
