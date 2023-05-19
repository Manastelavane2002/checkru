import { format, isValid } from 'date-fns';
import { CALENDAR_DATE_FORMAT } from 'src/components/global/calendar/Calendar.constants';
export const formatCalendarDate = (value: string | number | Date) => {
  const date = new Date(value);
  return !isValid(date) ? '' : format(date, CALENDAR_DATE_FORMAT);
};

export default formatCalendarDate;
