// import React, { useState } from 'react';
// import { Button, DatePicker, DatePickerDropdownProps } from 'src/components/global';
// //@ts-expect-error error
// import { Dropdown } from 'src/components/global/Dropdown';
// import { CalendarValue } from 'src/components/global/calendar/hooks';
// import { toDatePickerInput } from 'src/components/global/DatePicker/utils';

// export function DatePickerDropdown({
//   type = 'single',
//   value: valueProp,
//   buttonSelected,
//   onChange,
//   buttonColor,
//   buttonVariant,
//   hidePresetRanges = false,
//   className,
// }: DatePickerDropdownProps) {
//   const [internalValue, setInternalValue] = useState<CalendarValue>(
//     type === 'single' ? '' : { from: '', to: '' }
//   );
//   const [openPanel, setOpenPanel] = useState(false);
//   const value = valueProp ?? internalValue;
//   const setValue = (v: CalendarValue) => {
//     if (valueProp === undefined) {
//       setInternalValue(v);
//     }
//     onChange?.(v);
//   };
//   let buttonLabel = type === 'range' ? 'Select Dates' : 'Select Date';
//   if (typeof value === 'string' && value) {
//     buttonLabel = toDatePickerInput(value);
//   } else if (typeof value !== 'string' && value.from && value.to) {
//     buttonLabel = `${toDatePickerInput(value.from)} - ${toDatePickerInput(value.to)}`;
//   }
//   return (
//     <Dropdown onChange={(openStatus: boolean) => setOpenPanel(openStatus)} open={openPanel}>
//       <Dropdown.Button>
//         <Button
//           label={buttonLabel}
//           color={buttonColor}
//           className={className}
//           variant={buttonVariant}
//           selected={buttonSelected ?? !!value}
//           endIcon="calendar"
//         />
//       </Dropdown.Button>
//       <Dropdown.Panel>
//         {openPanel && (
//           <div className="my-2">
//             <DatePicker
//               type={type}
//               onApply={(v) => {
//                 setValue(v);
//                 setOpenPanel(false);
//               }}
//               onCancel={() => setOpenPanel(false)}
//               hidePresetRanges={hidePresetRanges}
//               defaultValue={value}
//             />
//           </div>
//         )}
//       </Dropdown.Panel>
//     </Dropdown>
//   );
// }

import React from 'react';

function DatePickerDropdown() {
  return <div>DatePickerDropdown</div>;
}

export default DatePickerDropdown;
