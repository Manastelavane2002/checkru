import { parse } from 'date-fns';
import { DATE_PICKER_INPUT_FORMAT } from 'src/components/global/DatePicker/date-picker';
import { DatePickerInputValue } from 'src/components/global/DatePicker/components/DatePickerInput.types';

export const parseDatePickerInput = (input: DatePickerInputValue) => {
  return parse(input, DATE_PICKER_INPUT_FORMAT, new Date());
};

export default parseDatePickerInput;
