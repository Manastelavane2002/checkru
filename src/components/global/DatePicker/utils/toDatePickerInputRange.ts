import { CalendarRange } from 'src/components/global/calendar/hooks/useCalendarRange';
import { parseCalendarDate } from 'src/components/global/calendar/utils/parseCalendarDate';
import formatDatePickerInput from 'src/components/global/DatePicker/utils/formatDatePickerInput';

export const toDatePickerInputRange = (value: CalendarRange) => {
  const fromDate = parseCalendarDate(value.from);
  const toDate = parseCalendarDate(value.to);
  return {
    from: formatDatePickerInput(fromDate),
    to: formatDatePickerInput(toDate),
  };
};

export default toDatePickerInputRange;
