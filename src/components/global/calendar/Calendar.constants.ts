export const calendarRangeMap = {
  allTime: {
    days: 0,
    id: 'allTime',
    time: 'unknown',
    title: 'All Time',
    unit: 'all time',
  },
  custom: {
    days: 0,
    id: 'custom',
    time: 'unknown',
    title: 'Custom',
    unit: 'custom',
  },
  lastMonth: {
    days: 30,
    id: 'lastMonth',
    time: 'past',
    title: 'Last Month',
    unit: 'month',
  },
  lastQuarter: {
    days: 30 * 3,
    id: 'lastQuarter',
    time: 'past',
    title: 'Last Quarter',
    unit: 'quarter',
  },
  lastWeek: {
    days: 7,
    id: 'lastWeek',
    time: 'past',
    title: 'Last Week',
    unit: 'week',
  },
  lastYear: {
    days: 365,
    id: 'lastYear',
    time: 'past',
    title: 'Last Year',
    unit: 'year',
  },
  thisMonth: {
    days: 30,
    id: 'thisMonth',
    time: 'present',
    title: 'This Month',
    unit: 'month',
  },
  thisQuarter: {
    days: 30 * 3,
    id: 'thisQuarter',
    time: 'present',
    title: 'This Quarter',
    unit: 'quarter',
  },
  thisWeek: {
    days: 7,
    id: 'thisWeek',
    time: 'present',
    title: 'This Week',
    unit: 'week',
  },
  thisYear: {
    days: 365,
    id: 'thisYear',
    time: 'present',
    title: 'This Year',
    unit: 'year',
  },
  today: {
    days: 1,
    id: 'today',
    time: 'present',
    title: 'Today',
    unit: 'day',
  },
  yesterday: {
    days: 1,
    id: 'yesterday',
    time: 'past',
    title: 'Yesterday',
    unit: 'day',
  },
};

export const weekDays = [
  { name: 'Monday', shortForm: 'Mo' },
  { name: 'Tuesday', shortForm: 'Tu' },
  { name: 'Wednesday', shortForm: 'We' },
  { name: 'Thursday', shortForm: 'Th' },
  { name: 'Friday', shortForm: 'Fr' },
  { name: 'Saturday', shortForm: 'Sat' },
  { name: 'Sunday', shortForm: 'Su' },
];

export type CalendarRangeName = keyof typeof calendarRangeMap;

export const calendarRanges = Object.values(calendarRangeMap);

export const CALENDAR_DATE_FORMAT = 'dd-MM-yyyy';
export const DEFAULT_CALENDAR_HEADER_FORMAT = 'MMMM yyyy';
