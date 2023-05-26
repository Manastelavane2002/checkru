import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Calendar, Typography } from 'src/components/global';
import CalendarHeader from 'src/components/global/calendar/components/CalendarHeader';
import { useCalendarDate } from 'src/components/global/calendar/hooks/useCalendarDate';
import DatePickerInput from 'src/components/global/DatePicker/components/DatePickerInput';
import { formatCalendarDate, isValidCalendarDate } from 'src/components/global/calendar/utils';
import { DatePickerProps } from 'src/components/global/DatePicker/components/DateSinglePicker.types';

import {
  formatDatePickerInput,
  isValidDatePickerInput,
  toCalendarDate,
  toDatePickerInput,
} from 'src/components/global/DatePicker/utils';
import { STATIC_TEXT } from 'src/constants/static-text';

export function DateSinglePicker({
  className,
  onApply,
  onCancel,
  defaultValue,
  hideActions = false,
}: DatePickerProps) {
  const { dateSinglePicker } = STATIC_TEXT;
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      inputText: defaultValue !== undefined ? toDatePickerInput(defaultValue) : '',
    },
  });
  const calendarHeaderDate = useCalendarDate({
    defaultValue:
      defaultValue && isValidCalendarDate(defaultValue)
        ? defaultValue
        : formatCalendarDate(new Date()),
  });

  return (
    <Controller
      name="inputText"
      control={form.control}
      rules={{
        required: 'Required',
        validate: (value) => {
          if (!isValidDatePickerInput(value)) {
            return dateSinglePicker.invalidDate;
          }
        },
      }}
      render={({ field, formState }) => (
        <div className={`w-fit bg-white border border-gray-100 rounded-lg ${className}`}>
          <div className="w-[328px] flex flex-col gap-3 px-6 py-5">
            <CalendarHeader
              value={calendarHeaderDate.value}
              onNext={calendarHeaderDate.setValue}
              onPrevious={calendarHeaderDate.setValue}
            />
            <div className="flex flex-row items-center gap-3">
              <div className="flex-1 flex flex-col">
                <DatePickerInput
                  className="w-full"
                  hasError={!!formState.errors.inputText?.message}
                  value={field.value}
                  onChange={(inputValue) => {
                    if (isValidDatePickerInput(inputValue)) {
                      calendarHeaderDate.setValue(toCalendarDate(inputValue));
                    }
                    field.onChange(inputValue);
                  }}
                />
                {formState.errors.inputText?.message && (
                  <div className="p-1">
                    <Typography variant='calender-error'>
                      {formState.errors.inputText?.message.toString()}
                    </Typography>
                  </div>
                )}
              </div>
              <Button
                variant="default"
                color="gray"
                size="lg"
                label="Today"
                onClick={() => {
                  const today = new Date();
                  calendarHeaderDate.setDate(today);
                  field.onChange(formatDatePickerInput(today));
                }}
              />
            </div>
            <Calendar
              value={toCalendarDate(field.value)}
              onChange={(value) => {
                field.onChange(toDatePickerInput(typeof value === 'string' ? value : ''));
              }}
              {...(calendarHeaderDate.date && {
                month: calendarHeaderDate.date.getMonth() + 1,
                year: calendarHeaderDate.date.getFullYear(),
              })}
            />
          </div>
          {!hideActions && (
            <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-t border-gray-200">
              <Button
                label={dateSinglePicker.cancelButton}
                variant="default"
                color="gray"
                size="lg"
                className="flex-1"
                onClick={() => onCancel?.()}
              />
              <Button
                label={dateSinglePicker.applyButton}
                color="primary"
                disabled={!formState.isValid}
                size="lg"
                className="flex-1"
                onClick={() => onApply?.(toCalendarDate(field.value))}
              />
            </div>
          )}
        </div>
      )}
    />
  );
}

export default DateSinglePicker;
