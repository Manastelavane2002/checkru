import React from 'react';
import { Header, Navbar, CardList } from 'src/components/modules/dashboard';
import { LINKS } from 'src/constants/links';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';
import { transactionData } from 'src/components/modules/dashboard/Transactions/Table.mock';
import StatementList from 'src/components/modules/dashboard/Statement/StatementList';
import { statementListMock } from 'src/components/modules/dashboard/Statement/statement.mock';
import TransactionsTable from 'src/components/modules/dashboard/Transactions/TransactionsTable';

function DashboardPage() {
  return (
    <div className="bg-dashboardBg text-white">
      <Header />
      <Navbar navElements={LINKS.NAVBAR_LINKS} />
      <CardList cardList={cardList} />
      <div className="px-[112px] flex gap-8 pb-4">
        <StatementList statementList={statementListMock} />
        <TransactionsTable transactionData={transactionData} />
      </div>
    </div>
  );
}

export default DashboardPage;
