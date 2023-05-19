import { isValid, isWithinInterval } from 'date-fns';
import { CalendarDate } from 'src/components/global/calendar/hooks/useCalendarDate';
import { CalendarRange } from 'src/components/global/calendar/hooks/useCalendarRange';
import parseCalendarDate from 'src/components/global/calendar/utils/parseCalendarDate';

export const isInRange = (calDate: CalendarDate, calRange: CalendarRange) => {
  if (!calRange.from || !calRange.to || !calDate) {
    return false;
  }
  const date = parseCalendarDate(calDate);
  const start = parseCalendarDate(calRange.from);
  const end = parseCalendarDate(calRange.to);
  return isValid(date) && isValid(end) && isValid(start)
    ? isWithinInterval(date, { start, end })
    : false;
};

export default isInRange;
