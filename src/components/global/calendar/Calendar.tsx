import React from 'react';
import clsx from 'clsx';
import { Typography } from 'src/components/global';
import { UseCalendarProps, useCalendar } from 'src/components/global/calendar/hooks/useCalendar';
import { generateCalendarMonth, handleIndividualDates } from 'src/components/global/calendar/utils';
export interface State {
  day: number;
  month: number;
  year: number;
}
export interface CalendarProps extends UseCalendarProps {
  className?: string;
}

export function Calendar({ className, ...props }: CalendarProps) {
  const { selectedValue, selectionType, setValue, setEmptyValue } = useCalendar(props);
  const calendarMonth = generateCalendarMonth(props.year, props.month);
  const [firstWeek] = calendarMonth.weeks.length ? calendarMonth.weeks : [{ days: [] }];
  return (
    <div className={`flex flex-col gap-1 w-fit h-fit ${className}`}>
      <div className="flex flex-1">
        {firstWeek.days.map(({ dayShortName }) => {
          return (
            <div key={dayShortName} className="flex-1 flex items-center justify-center w-10 h-10">
              <Typography size="sm" className="text-white">
                {dayShortName}
              </Typography>
            </div>
          );
        })}
      </div>
      {calendarMonth.weeks.map(({ days }, index) => {
        return (
          <div className="flex flex-1" key={index}>
            {days.map(({ date, iso }, index) => {
              const {
                isSelected,
                isSingleAndSelected,
                isSelectionLeftEnd,
                isSelectionRightEnd,
                isSelectionEnd,
                onClick,
                isWithinMonth,
              } = handleIndividualDates({
                iso,
                selectedValue,
                selectionType,
                setValue,
                setEmptyValue,
                calendarMonth,
              });
              return (
                <div
                  key={iso}
                  className={clsx(
                    `flex-1 w-10 h-10`,
                    isSelected && {
                      'rounded-l-full bg-calendarSelected':
                        isSingleAndSelected || isSelectionLeftEnd || index === 0,
                      'rounded-r-full bg-calendarSelected':
                        isSingleAndSelected || isSelectionRightEnd || index === 6,
                      'rounded-none bg-calendarSelected': true,
                    }
                  )}>
                  <div
                    className={clsx(
                      `w-full h-full flex items-center justify-center cursor-pointer rounded-full`,
                      isSelected
                        ? {
                            'bg-primary': isSingleAndSelected || isSelectionEnd,
                          }
                        : clsx('hover:bg-calendarSelected')
                    )}
                    onClick={onClick}>
                    <Typography
                      size="sm"
                      className={
                        isSingleAndSelected || isSelectionEnd
                          ? 'text-white'
                          : isWithinMonth
                          ? 'text-white'
                          : 'text-gray-400'
                      }>
                      {date}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
