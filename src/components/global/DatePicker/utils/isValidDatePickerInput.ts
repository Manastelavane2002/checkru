import { isMatch } from 'date-fns';
import { DATE_PICKER_INPUT_FORMAT } from 'src/components/global/DatePicker/date-picker';

export const isValidDatePickerInput = (input: string) => {
  return isMatch(input, DATE_PICKER_INPUT_FORMAT);
};

export default isValidDatePickerInput;
