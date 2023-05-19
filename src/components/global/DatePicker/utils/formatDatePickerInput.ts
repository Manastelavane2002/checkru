import { format, isValid } from 'date-fns';
import { DATE_PICKER_INPUT_FORMAT } from 'src/components/global/DatePicker/date-picker';
import { DatePickerInputValue } from 'src/components/global/DatePicker/components/DatePickerInput.types';

export const formatDatePickerInput = (d: string | number | Date): DatePickerInputValue => {
  const date = new Date(d);
  if (!isValid(date)) {
    return '';
  }
  return format(date, DATE_PICKER_INPUT_FORMAT);
};

export default formatDatePickerInput;
