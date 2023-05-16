import React from 'react';
import Header from '../../modules/dashboard/Header/Header';
import Navbar from '../../modules/dashboard/Navbar/Navbar';
import { LINKS } from '../../../constants/links';
import { DatePicker } from 'src/components/global/DatePicker';

function DashboardPage() {
  return (
    <div>
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
      <DatePicker type='range'/>
    </div>
  );
}

export default DashboardPage;
