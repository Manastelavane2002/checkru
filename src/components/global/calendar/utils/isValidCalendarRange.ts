import { isBefore, isSameDay } from 'date-fns';
import { CalendarRange } from 'src/components/global/calendar/hooks/useCalendarRange';
import parseCalendarDate from 'src/components/global/calendar/utils/parseCalendarDate';

export const isValidCalendarRange = (range: CalendarRange) => {
  const { from, to } = range;
  const fromDate = parseCalendarDate(from);
  const toDate = parseCalendarDate(to);
  return isSameDay(fromDate, toDate) || isBefore(fromDate, toDate);
};

export default isValidCalendarRange;
