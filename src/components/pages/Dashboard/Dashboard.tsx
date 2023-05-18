import React from 'react';
import Header from '../../modules/dashboard/Header/Header';
import Navbar from '../../modules/dashboard/Navbar/Navbar';
import { LINKS } from '../../../constants/links';
import { DatePickerDropdown } from 'src/components/global/DatePickerDropdown';
import CardList from '../../modules/dashboard/Card/CardList';
import { cardList } from '../../modules/dashboard/Card/card.mock';

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
