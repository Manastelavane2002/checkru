import { CalendarValue, SelectionType } from 'src/components/global/calendar/hooks';
import {
  formatCalendarDate,
  parseCalendarDate,
  isInRange,
  GeneratedCalendarMonth,
} from 'src/components/global/calendar/utils';
import { isSameDay, max, min } from 'date-fns';

export interface RenderDateTypes {
  calendarMonth: GeneratedCalendarMonth;
  iso: string;
  selectedValue: CalendarValue;
  selectionType: SelectionType;
  setEmptyValue: () => void;
  setValue: (value: CalendarValue) => void;
}

export function handleIndividualDates({
  iso,
  selectedValue,
  selectionType,
  setValue,
  setEmptyValue,
  calendarMonth,
}: RenderDateTypes) {
  const dateObj = new Date(iso);
  const dateValue = formatCalendarDate(dateObj);
  const isWithinMonth = dateObj.getMonth() + 1 === calendarMonth.month;
  const isRangeType = selectionType === 'range' && typeof selectedValue !== 'string';
  const isSingleType = selectionType === 'single' && typeof selectedValue === 'string';
  const isSingleAndSelected =
    isSingleType && selectedValue && isSameDay(dateObj, parseCalendarDate(selectedValue));
  const isSelected = isRangeType
    ? isInRange(formatCalendarDate(dateObj), selectedValue)
    : isSingleAndSelected;
  let isSelectionLeftEnd = false;
  let isSelectionRightEnd = false;
  if (isSelected && isRangeType) {
    isSelectionLeftEnd = isSameDay(dateObj, parseCalendarDate(selectedValue.from));
    isSelectionRightEnd = isSameDay(dateObj, parseCalendarDate(selectedValue.to));
  }
  const isSelectionEnd = isSelectionLeftEnd || isSelectionRightEnd;
  const onClick = () => {
    if (!isWithinMonth) {
      return;
    }
    if (isRangeType) {
      if (!selectedValue) {
        setValue({
          from: dateValue,
          to: dateValue,
        });
        return;
      }
      const { from, to } = selectedValue;
      const fromDate = parseCalendarDate(from);
      const toDate = parseCalendarDate(to);
      if (!isSameDay(fromDate, toDate)) {
        setValue({
          from: dateValue,
          to: dateValue,
        });
      } else if (isSameDay(fromDate, dateObj)) {
        setEmptyValue();
      } else {
        setValue({
          from: formatCalendarDate(min([dateObj, fromDate])),
          to: formatCalendarDate(max([dateObj, toDate])),
        });
      }
    } else {
      setValue(dateValue);
    }
  };
  return {
    isSelected,
    isSingleAndSelected,
    isSelectionLeftEnd,
    isSelectionRightEnd,
    isSelectionEnd,
    onClick,
    isWithinMonth,
  };
}
