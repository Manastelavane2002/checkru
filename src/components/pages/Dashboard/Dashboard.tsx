import React from 'react';
import Header from '../../modules/dashboard/Header/Header';
import Navbar from '../../modules/dashboard/Navbar/Navbar';
import { LINKS } from '../../../constants/links';
function DashboardPage() {
  return (
    <div>
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
    </div>
  );
}

export default DashboardPage;
