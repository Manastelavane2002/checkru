import { parse } from 'date-fns';
import { CALENDAR_DATE_FORMAT } from '../../../../constants/calendar';

export const parseCalendarDate = (value: string) => {
  return parse(value, CALENDAR_DATE_FORMAT, new Date());
};

export default parseCalendarDate;
