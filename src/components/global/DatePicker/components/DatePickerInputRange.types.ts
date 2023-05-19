import { DatePickerInputProps } from 'src/components/global/DatePicker/components/DatePickerInput.types';
export interface DatePickerInputRangeProps {
  className?: string;
  error?: string;
  fromInputProps: DatePickerInputProps;
  toInputProps: DatePickerInputProps;
}
