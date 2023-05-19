import React from 'react';
import { DateRangePicker } from 'src/components/global/DatePicker/components/DateRangePicker';
import { DateSinglePicker } from 'src/components/global/DatePicker/components/DateSinglePicker';
import { DatePickerProps } from 'src/components/global/DatePicker/DatePicker.types';

/**
 * @param {DatePickerProps} props
 * @returns DatePicker component
 * @description This component is used to display Date Picker component
 * @example <DatePicker type = 'range' onApply = {handleSubmit} />
 */

export function DatePicker({
  type = 'single',
  hideActions = false,
  hidePresetRanges = false,
  onApply,
  onCancel,
  defaultValue,
  className = '',
}: DatePickerProps) {
  return type === 'range' ? (
    <DateRangePicker
      hidePresetRanges={hidePresetRanges}
      hideActions={hideActions}
      onApply={onApply}
      onCancel={onCancel}
      className={className}
      defaultValue={typeof defaultValue !== 'string' ? defaultValue : undefined}
    />
  ) : (
    <DateSinglePicker
      hideActions={hideActions}
      onApply={onApply}
      onCancel={onCancel}
      className={className}
      defaultValue={typeof defaultValue === 'string' ? defaultValue : undefined}
    />
  );
}
