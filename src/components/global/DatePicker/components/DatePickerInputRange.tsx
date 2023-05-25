import React from 'react';
import { Typography } from 'src/components/global';
import DatePickerInput from 'src/components/global/DatePicker/components/DatePickerInput';
import { DatePickerInputRangeProps } from 'src/components/global/DatePicker/components/DatePickerInputRange.types';

export function DatePickerInputRange({
  fromInputProps,
  toInputProps,
  error = '',
  className = '',
}: DatePickerInputRangeProps) {
  return (
    <div className={className}>
      <div className="flex items-center">
        <DatePickerInput
          {...fromInputProps}
          className={`${fromInputProps.className ?? ''} text-center w-32`}
        />
        <Typography variant='calender-range-dash'>-</Typography>
        <DatePickerInput
          {...toInputProps}
          className={`${fromInputProps.className ?? ''} text-center w-32`}
        />
      </div>
      {error && (
        <div className="p-1">
          <Typography variant='calender-error'>
            {error}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default DatePickerInputRange;
