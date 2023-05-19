import React from 'react';
import { DatePickerDropdown } from 'src/components/global/DatePickerDropdown';
import { Header, Navbar, CardList } from 'src/components/modules/dashboard';
import { LINKS } from 'src/constants/links';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';

function DashboardPage() {
  return (
    <div>
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
      <div className="w-full bg-tableHeader p-4 flex flex-row-reverse ">
        <DatePickerDropdown
          type="range"
          hidePresetRanges
          className="py-2 px-4 font-semibold text-dashboardWhite100 fill-transparent bg-secondary border-2 border-iconBg rounded-lg"
        />
      </div>

      <CardList cardList={cardList} />
    </div>
  );
}

export default DashboardPage;
