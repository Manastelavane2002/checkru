import { format, isValid } from 'date-fns';
import { CALENDAR_DATE_FORMAT } from '../../../../constants/calendar';
export const formatCalendarDate = (value: string | number | Date) => {
  const date = new Date(value);
  if (!isValid(date)) {
    return '';
  }
  return format(date, CALENDAR_DATE_FORMAT);
};

export default formatCalendarDate;
