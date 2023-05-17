import React from 'react';
import { Header, Navbar, CardList } from 'src/components/modules/dashboard';
import { LINKS } from 'src/constants/links';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';

function DashboardPage() {
  return (
    <div>
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
      <CardList cardList={cardList} />
    </div>
  );
}

export default DashboardPage;
