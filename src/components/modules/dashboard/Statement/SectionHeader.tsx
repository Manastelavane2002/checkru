import React from 'react';
import { DatePickerDropdown } from 'src/components/global';
interface SectionHeaderProps {
  className?: string;
  showDatePicker?: boolean;
  text: string;
}

export function SectionHeader({ text, showDatePicker = false, className }: SectionHeaderProps) {
  return (
    <div
      className={`bg-tableHeader flex items-center justify-between h-20 px-6  ${className}`}>
      <div className="text-lg inter font-semibold ">{text}</div>
      {showDatePicker && (
        <DatePickerDropdown
          type="range"
          hidePresetRanges
          className="py-2 px-4 font-semibold text-dashboardWhite100 fill-transparent bg-secondary border-2 border-iconBg rounded-lg"
        />
      )}
    </div>
  );
}
export default SectionHeader;
