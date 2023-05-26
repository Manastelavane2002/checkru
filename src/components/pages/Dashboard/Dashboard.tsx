import React from 'react';
import { Header, CardList } from 'src/components/modules/dashboard';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';
import { transactionData } from 'src/components/modules/dashboard/Transactions/Table.mock';
import StatementList from 'src/components/modules/dashboard/Statement/StatementList';
import { statementListMock } from 'src/components/modules/dashboard/Statement/statement.mock';
import TransactionsTable from 'src/components/modules/dashboard/Transactions/TransactionsTable';
import { AccountDetailsMock } from 'src/components/modules/dashboard/AccountDetails/AccountDetails.mock';
import { AccountDetails } from 'src/components/modules/dashboard/AccountDetails/AccountDetails';
import { STATIC_TEXT } from 'src/constants/static-text';

function DashboardPage() {
  return (
    <div className="bg-dashboardBg text-white">
      <Header />
      <div className="px-[112px] py-16">
        <h1 className="text-5xl font-semibold text-white">{STATIC_TEXT.dashboard.heading}</h1>
        <p className="pt-3 t">{STATIC_TEXT.dashboard.subHeading}</p>
        <AccountDetails accountData={AccountDetailsMock} />
      </div>
      <CardList cardList={cardList} />
      <div className="px-[112px] flex gap-8 pb-4">
        <StatementList statementList={statementListMock} />
        <TransactionsTable transactionData={transactionData} />
      </div>
    </div>
  );
}

export default DashboardPage;
