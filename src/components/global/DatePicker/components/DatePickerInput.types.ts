export type DatePickerInputValue = string;

export interface DatePickerInputProps {
  className?: string;
  hasError?: boolean;
  onChange?: (value: DatePickerInputValue) => void;
  value?: DatePickerInputValue;
}
