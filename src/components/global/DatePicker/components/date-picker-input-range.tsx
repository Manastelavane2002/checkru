import React from 'react';
import { Typography } from '../../Typography/Typography';
import DatePickerInput, { DatePickerInputProps } from './date-picker-input';

export interface DatePickerInputRangeProps {
  className?: string;
  error?: string;
  fromInputProps: DatePickerInputProps;
  toInputProps: DatePickerInputProps;
}

export function DatePickerInputRange ({
  fromInputProps,
  toInputProps,
  error = '',
  className = '',
}:DatePickerInputRangeProps){
  return (
    <div className={className}>
      <div className="flex items-center">
        <DatePickerInput
          {...fromInputProps}
          className={`${fromInputProps.className ?? ''} text-center w-32`}
        />
        <Typography className="mx-3 text-componentHeader">
          -
        </Typography>
        <DatePickerInput
          {...toInputProps}
          className={`${fromInputProps.className ?? ''} text-center w-32`}
        />
      </div>
      {error && (
        <div className="p-1">
          <Typography size="xs" color="error-700">
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DatePickerInputRange;
