import clsx from 'clsx';
import { subMonths, format, addMonths } from 'date-fns';
import React from 'react';
import { Icon, Typography } from 'src/components/global';
import useCalendarDate, { CalendarDate } from 'src/components/global/calendar/hooks/useCalendarDate';
import { formatCalendarDate } from 'src/components/global/calendar/utils';
import { COLORS } from 'src/constants/color-palette';
import { DEFAULT_CALENDAR_HEADER_FORMAT } from 'src/components/global/calendar/Calendar.constants';

export interface CalendarHeaderProps {
  defaultValue?: CalendarDate;
  hideNextActionButton?: boolean;
  hidePreviousActionButton?: boolean;
  onChange?: (value: CalendarDate) => void;
  onNext?: (value: CalendarDate) => void;
  onPrevious?: (value: CalendarDate) => void;
  value?: CalendarDate;
}

export function CalendarHeader({
  defaultValue = formatCalendarDate(new Date()),
  value,
  onNext,
  onPrevious,
  onChange,
  hideNextActionButton = false,
  hidePreviousActionButton = false,
}: CalendarHeaderProps) {
  const { date, setDate } = useCalendarDate({
    defaultValue,
    value,
  });

  const previousClickHandler = () => {
    if (date) {
      const previousMonthDate = subMonths(date, 1);
      if (value === undefined) {
        setDate(previousMonthDate);
      }
      onPrevious?.(formatCalendarDate(previousMonthDate));
      onChange?.(formatCalendarDate(previousMonthDate));
    }
  };

  const nextClickHandler = () => {
    if (date) {
      const nextMonthDate = addMonths(date, 1);
      if (value === undefined) {
        setDate(nextMonthDate);
      }
      onNext?.(formatCalendarDate(nextMonthDate));
      onChange?.(formatCalendarDate(nextMonthDate));
    }
  };

  return (
    <div className="flex items-center mb-3">
      <div
        className={clsx(
          'w-9 h-9 flex items-center justify-center cursor-pointer',
          hidePreviousActionButton && 'hidden'
        )}
        onClick={previousClickHandler}>
        <Icon name="arrow-left" color={COLORS.componentBody} size={20} />
      </div>
      <div className="grow flex items-center justify-center">
        <Typography className="text-componentHeader">
          {date ? format(date, DEFAULT_CALENDAR_HEADER_FORMAT) : ''}
        </Typography>
      </div>
      <div
        className={clsx(
          'w-9 h-9 flex items-center justify-center cursor-pointer',
          hideNextActionButton && 'hidden'
        )}
        onClick={nextClickHandler}>
        <Icon name="arrow-right" color={COLORS.componentBody} size={20} />
      </div>
    </div>
  );
}

export default CalendarHeader;
