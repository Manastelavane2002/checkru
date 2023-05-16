import { isMatch } from 'date-fns';
import { CALENDAR_DATE_FORMAT } from '../../../../constants/calendar';
import { CalendarDate } from '../hooks/useCalendarDate';

const isValidCalendarDate = (value: CalendarDate) => {
  return isMatch(value, CALENDAR_DATE_FORMAT);
};

export default isValidCalendarDate;
