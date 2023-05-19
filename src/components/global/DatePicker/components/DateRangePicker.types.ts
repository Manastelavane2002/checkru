import { CalendarRange } from 'src/components/global/calendar/hooks/useCalendarRange';

export interface DateRangePickerProps {
  className?: string;
  defaultValue?: CalendarRange;
  hideActions?: boolean;
  hidePresetRanges?: boolean;
  onApply?: (value: CalendarRange) => void;
  onCancel?: () => void;
}
