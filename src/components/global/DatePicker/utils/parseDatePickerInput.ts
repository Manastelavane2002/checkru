import { parse } from 'date-fns';
import { DATE_PICKER_INPUT_FORMAT } from '../../../../constants/date-picker';
import { DatePickerInputValue } from '../components/date-picker-input';

export const parseDatePickerInput = (input: DatePickerInputValue) => {
  return parse(input, DATE_PICKER_INPUT_FORMAT, new Date());
};

export default parseDatePickerInput;
