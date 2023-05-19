import React from 'react';
import { STATIC_TEXT } from 'src/constants/static-text';

export function SectionHeader() {
  return (
    <div className="border-b-[1px] border-cellDividerStoke bg-tableHeader">
        <div className='text-lg py-6 px-6 inter font-semibold gap-5'>{STATIC_TEXT.dashboard.statementTableTitle}</div>
    </div>
  );
}

export default SectionHeader;