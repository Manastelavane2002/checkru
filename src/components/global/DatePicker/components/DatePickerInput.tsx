import React from 'react';
import { DatePickerInputProps } from 'src/components/global/DatePicker/components/DatePickerInput.types';
export function DatePickerInput({
  value,
  onChange,
  hasError = false,
  className = '',
}:DatePickerInputProps) {
  return (
    <input
      className={`bg-transparent px-[7px] py-[5px] border ${
        hasError
          ? 'border-red-600 border-2 focus-visible:outline-0'
          : 'border-cellDividerStroke border'
      } rounded-lg text-t-md text-componentHeader ${className}`}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default DatePickerInput;
