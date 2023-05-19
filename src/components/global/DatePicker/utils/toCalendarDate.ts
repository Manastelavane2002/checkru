import formatCalendarDate from 'src/components/global/calendar/utils/formatCalendarDate';
import { DatePickerInputValue } from 'src/components/global/DatePicker/components/DatePickerInput.types';
import {parseDatePickerInput} from 'src/components/global/DatePicker/utils';

export const toCalendarDate = (value: DatePickerInputValue) => {
  return formatCalendarDate(parseDatePickerInput(value));
};

export default toCalendarDate;
