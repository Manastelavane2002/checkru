import { CalendarRange } from 'src/components/global/calendar/hooks/useCalendarRange';
import { formatCalendarDate, isValidCalendarRange } from 'src/components/global/calendar/utils';
import { DatePickerInputValue } from 'src/components/global/DatePicker/components/DatePickerInput.types';
import parseDatePickerInput from './parseDatePickerInput';

export const toCalendarRange = ({
  from,
  to,
}: {
  from: DatePickerInputValue;
  to: DatePickerInputValue;
}): CalendarRange => {
  const fromDate = parseDatePickerInput(from);
  const toDate = parseDatePickerInput(to);
  if (
    isValidCalendarRange({
      from: formatCalendarDate(fromDate),
      to: formatCalendarDate(toDate),
    })
  ) {
    return {
      from: formatCalendarDate(fromDate),
      to: formatCalendarDate(toDate),
    };
  }
  return { from: '', to: '' };
};

export default toCalendarRange;
