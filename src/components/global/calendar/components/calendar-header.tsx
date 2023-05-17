import clsx from 'clsx';
import { subMonths, format, addMonths } from 'date-fns';
import React, { FC } from 'react';
import { Icon } from '../../Icon/Icon';
import { Typography } from '../../Typography/Typography';
import useCalendarDate, { CalendarDate } from '../hooks/useCalendarDate';
import formatCalendarDate from '../utils/formatCalendarDate';
import { COLORS } from 'src/constants/color-palette';

export interface CalendarHeaderProps {
  defaultValue?: CalendarDate;
  hideNextActionButton?: boolean;
  hidePreviousActionButton?: boolean;
  onChange?: (value: CalendarDate) => void;
  onNext?: (value: CalendarDate) => void;
  onPrevious?: (value: CalendarDate) => void;
  value?: CalendarDate;
}

export const CalendarHeader: FC<CalendarHeaderProps> = ({
  defaultValue = formatCalendarDate(new Date()),
  value,
  onNext,
  onPrevious,
  onChange,
  hideNextActionButton = false,
  hidePreviousActionButton = false,
}) => {
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
        <Typography className="text-componentHeader">{date ? format(date, 'MMMM yyyy') : ''}</Typography>
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
};

export default CalendarHeader;
