import React from 'react';
import Header from '../../modules/dashboard/Header/Header';
import Navbar from '../../modules/dashboard/Navbar/Navbar';
import { LINKS } from '../../../constants/links';
import { DatePickerDropdown } from 'src/components/global/DatePickerDropdown';

function DashboardPage() {
  return (
    <div>
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
      <div className="w-full bg-tableHeader p-4 flex flex-row-reverse ">
        <DatePickerDropdown
          type="range"
          hidePresetRanges={true}
          className="py-2 px-4 font-semibold text-dashboardWhite100 fill-transparent bg-secondary border-2 border-iconBg rounded-lg"
        />
      </div>
    </div>
  );
}

export default DashboardPage;
