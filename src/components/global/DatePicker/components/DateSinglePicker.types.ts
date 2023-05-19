import { CalendarDate } from 'src/components/global/calendar/hooks/useCalendarDate';

export interface DatePickerProps {
  className?: string;
  defaultValue?: CalendarDate;
  hideActions?: boolean;
  onApply?: (value: CalendarDate) => void;
  onCancel?: () => void;
}
