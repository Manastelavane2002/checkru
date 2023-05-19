import { isMatch } from 'date-fns';
import { CALENDAR_DATE_FORMAT } from 'src/components/global/calendar/Calendar.constants';
import { CalendarDate } from 'src/components/global/calendar/hooks/useCalendarDate';

export const isValidCalendarDate = (value: CalendarDate) => {
  return isMatch(value, CALENDAR_DATE_FORMAT);
};

export default isValidCalendarDate;
