import React from 'react';
import { isAfter, isSameDay } from 'date-fns';
import { useController, useForm } from 'react-hook-form';
import DatePickerInputRange from 'src/components/global/DatePicker/components/DatePickerInputRange';
import { Calendar, Button, Typography } from 'src/components/global';
import {
  calendarRangeMap,
  CalendarRangeName,
} from 'src/components/global/calendar/Calendar.constants';
import CalendarHeader from 'src/components/global/calendar/components/CalendarHeader';
import { RANGE_NAMES, MOBILE_RANGE_NAMES } from 'src/components/global/DatePicker/date-picker';
import { useCalendar, CalendarRange, useCalendarDate } from 'src/components/global/calendar/hooks';
import { DateRangePickerProps } from 'src/components/global/DatePicker/components/DateRangePicker.types';
import {
  getCalendarRange,
  isValidCalendarDate,
  parseCalendarDate,
  formatCalendarDate,
} from 'src/components/global/calendar/utils';

import {
  toCalendarDate,
  toDatePickerInput,
  toCalendarRange,
  parseDatePickerInput,
  isValidDatePickerInput,
} from 'src/components/global/DatePicker/utils';

import { STATIC_TEXT } from 'src/constants/static-text';
const { dateRangePicker } = STATIC_TEXT;

export function DateRangePicker({
  hideActions = false,
  hidePresetRanges = false,
  onApply,
  onCancel,
  defaultValue,
  className,
}: DateRangePickerProps) {
  const form = useForm({
    mode: 'onChange',
    defaultValues: {
      rangeInput: {
        from: toDatePickerInput((defaultValue && defaultValue?.from) ?? ''),
        to: toDatePickerInput((defaultValue && defaultValue?.to) ?? ''),
      },
    },
  });
  const rangeInput = useController({
    name: 'rangeInput',
    control: form.control,
    rules: {
      validate: (value) => {
        if (!value.from) {
          return dateRangePicker.fromRequired;
        } else if (!value.to) {
          return dateRangePicker.toRequired;
        } else if (!isValidDatePickerInput(value.from)) {
          return dateRangePicker.invalidFrom;
        } else if (!isValidDatePickerInput(value.to)) {
          return dateRangePicker.invalidTo;
        } else if (isAfter(parseDatePickerInput(value.from), parseDatePickerInput(value.to))) {
          return dateRangePicker.fromBeforeTo;
        }
      },
    },
  });
  const formErrors = form.formState.errors;
  const errorMessage = formErrors.rangeInput?.message;
  const value: CalendarRange = toCalendarRange({
    from: rangeInput.field.value.from,
    to: rangeInput.field.value.to,
  });
  const fromCalendarHeaderDate = useCalendarDate({
    defaultValue:
      defaultValue?.from && isValidCalendarDate(defaultValue.from)
        ? defaultValue.from
        : formatCalendarDate(new Date()),
  });
  const toCalendarHeaderDate = useCalendarDate({
    defaultValue:
      defaultValue?.to && isValidCalendarDate(defaultValue.to)
        ? defaultValue.to
        : formatCalendarDate(new Date()),
  });
  const calendar = useCalendar({
    value,
    defaultValue,
    selectionType: 'range',
    onChange: (val) => {
      const refinedVal =
        typeof val === 'string' ? (val ? { from: val, to: val } : { from: '', to: '' }) : val;
      rangeInput.field.onChange({
        from: toDatePickerInput(refinedVal.from),
        to: toDatePickerInput(refinedVal.to),
      });
      fromCalendarHeaderDate.setValue(refinedVal?.from ?? '');
      toCalendarHeaderDate.setValue(refinedVal?.to ?? '');
    },
  });

  const isRangeSelected = (a: CalendarRange) => {
    return (
      isSameDay(parseDatePickerInput(rangeInput.field.value.from), parseCalendarDate(a.from)) &&
      isSameDay(parseDatePickerInput(rangeInput.field.value.to), parseCalendarDate(a.to))
    );
  };
  const onFromInputChange = (value: string) => {
    if (isValidDatePickerInput(value)) {
      fromCalendarHeaderDate.setValue(toCalendarDate(value));
    }
    rangeInput.field.onChange({
      from: value,
      to: rangeInput.field.value.to,
    });
  };
  const onToInputChange = (value: string) => {
    if (isValidDatePickerInput(value)) {
      toCalendarHeaderDate.setValue(toCalendarDate(value));
    }
    rangeInput.field.onChange({
      from: rangeInput.field.value.from,
      to: value,
    });
  };
  const rangeNames: CalendarRangeName[] = RANGE_NAMES as CalendarRangeName[];
  const mobileRangeNames: CalendarRangeName[] = MOBILE_RANGE_NAMES as CalendarRangeName[];

  return (
    <>
      <div
        className={`w-fit hidden sm:flex bg-componentBg border border-componentStroke rounded-lg ${className}`}>
        {!hidePresetRanges && (
          <div className={`w-48 px-4 py-3 border-r border-gray-200`}>
            {rangeNames.map((id) => {
              const { title } = calendarRangeMap[id];
              const rangeValue = getCalendarRange(id);
              const isSelected = isRangeSelected(rangeValue);
              return (
                <div
                  key={id}
                  className={`px-4 py-2.5 rounded-md ${
                    isSelected ? 'bg-gray-50' : ''
                  } cursor-pointer`}
                  onClick={() => calendar.setValue(rangeValue)}>
                  <Typography size="sm" color={isSelected ? 'gray-800' : 'gray-700'}>
                    {title}
                  </Typography>
                </div>
              );
            })}
          </div>
        )}
        <div className="grow">
          <div className="flex">
            <div className="w-[328px] px-6 py-5 border-r border-componentStroke">
              <CalendarHeader {...fromCalendarHeaderDate.control} />
              <DatePickerInputRange
                fromInputProps={{
                  hasError: !!errorMessage,
                  value: rangeInput.field.value.from,
                  onChange: onFromInputChange,
                }}
                toInputProps={{
                  hasError: !!errorMessage,
                  value: rangeInput.field.value.to,
                  onChange: onToInputChange,
                }}
                error={errorMessage}
              />
              <Calendar
                {...calendar.control}
                month={
                  fromCalendarHeaderDate.date
                    ? fromCalendarHeaderDate.date.getMonth() + 1
                    : undefined
                }
                year={fromCalendarHeaderDate.date?.getFullYear()}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between px-5 py-4 border-t border-divider">
            {!hideActions && (
              <div className="w-full flex gap-3">
                <Button
                  label={dateRangePicker.cancelButton}
                  variant="outlined"
                  className="w-1/2"
                  onClick={() => onCancel?.()}
                />
                <Button
                  label={dateRangePicker.applyButton}
                  variant="default"
                  className="py-2 rounded-lg w-1/2"
                  disabled={!form.formState.isValid}
                  onClick={() => onApply?.(toCalendarRange(rangeInput.field.value))}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-fit sm:hidden bg-white border border-gray-100 rounded-lg">
        <div className="w-[328px] flex flex-col gap-3 px-6 py-5">
          <CalendarHeader {...fromCalendarHeaderDate.control} />
          <DatePickerInputRange
            fromInputProps={{
              hasError: !!errorMessage,
              value: rangeInput.field.value.from,
              onChange: onFromInputChange,
            }}
            toInputProps={{
              hasError: !!errorMessage,
              value: rangeInput.field.value.to,
              onChange: onToInputChange,
            }}
            error={errorMessage}
          />
          {!hidePresetRanges && (
            <div className="flex justify-between items-center gap-3">
              {mobileRangeNames.map((id) => {
                const { title } = calendarRangeMap[id];
                const range = getCalendarRange(id);

                return (
                  <Button
                    className="flex-1"
                    label={title}
                    key={id}
                    onClick={() => calendar.setValue(range)}
                    variant="text"
                    color="primary"
                    selected={isRangeSelected(range)}
                  />
                );
              })}
            </div>
          )}
          <Calendar
            {...calendar.control}
            month={
              fromCalendarHeaderDate.date ? fromCalendarHeaderDate.date.getMonth() + 1 : undefined
            }
            year={fromCalendarHeaderDate.date?.getFullYear()}
          />
        </div>
        {!hideActions && (
          <div className="flex flex-wrap items-center gap-3 px-5 py-4 border-t border-gray-200">
            <Button label="Cancel" size="lg" className="flex-1" onClick={() => onCancel?.()} />
            <Button
              label={dateRangePicker.applyButton}
              color="primary"
              disabled={!form.formState.isValid}
              size="lg"
              className="flex-1"
              onClick={() => onApply?.(toCalendarRange(rangeInput.field.value))}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default DateRangePicker;
