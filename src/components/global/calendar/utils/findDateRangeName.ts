import { differenceInDays, isSameDay, isToday } from 'date-fns';
import {
  CalendarRangeName,
  calendarRanges,
} from 'src/components/global/calendar/Calendar.constants';
import { CalendarRange } from 'src/components/global/calendar/hooks/useCalendarRange';
import { parseCalendarDate } from 'src/components/global/calendar/utils/parseCalendarDate';
import { STATIC_TEXT } from 'src/constants/static-text';
const { dateRangeName } = STATIC_TEXT;
export const findDateRangeName = (range: CalendarRange): CalendarRangeName => {
  const { from, to } = range;
  const fromDate = parseCalendarDate(from);
  const toDate = parseCalendarDate(to);
  const diffInDays = differenceInDays(toDate, fromDate) + 1;
  if (isSameDay(fromDate, new Date(0)) && isSameDay(toDate, new Date())) {
    return dateRangeName.sameDay as CalendarRangeName;
  }
  const time = isToday(fromDate)
    ? (dateRangeName.present as CalendarRangeName)
    : isToday(toDate)
    ? (dateRangeName.past as CalendarRangeName)
    : (dateRangeName.unknown as CalendarRangeName);
  const name = calendarRanges.find((range) => range.time === time && range.days === diffInDays);
  return (name?.id as CalendarRangeName) ?? (dateRangeName.custom as CalendarRangeName);
};

export default findDateRangeName;
