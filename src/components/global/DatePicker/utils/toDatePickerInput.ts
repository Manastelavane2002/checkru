import { CalendarDate } from 'src/components/global/calendar/hooks/useCalendarDate';
import parseCalendarDate from 'src/components/global/calendar/utils/parseCalendarDate';
import formatDatePickerInput from 'src/components/global/DatePicker/utils/formatDatePickerInput';

export const toDatePickerInput = (value: CalendarDate) => {
  return formatDatePickerInput(parseCalendarDate(value));
};

export default toDatePickerInput;
