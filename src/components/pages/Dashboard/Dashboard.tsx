import React from 'react';
import { Header, Navbar, CardList } from 'src/components/modules/dashboard';
import { LINKS } from 'src/constants/links';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';
import StatementList from 'src/components/modules/dashboard/Statement/StatementList';
import { statementListMock } from 'src/components/modules/dashboard/Statement/statement.mock';

function DashboardPage() {
  return (
    <div className='bg-dashboardBg text-white'>
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
      <CardList cardList={cardList}/>
      <StatementList statementList={statementListMock} />
    </div>
  );
}

export default DashboardPage;
