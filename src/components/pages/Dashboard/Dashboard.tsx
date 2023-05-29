import React from 'react';
import { Header, CardList } from 'src/components/modules/dashboard';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';
import { transactionData } from 'src/components/modules/dashboard/Transactions/Table.mock';
import StatementList from 'src/components/modules/dashboard/Statement/StatementList';
import TransactionsTable from 'src/components/modules/dashboard/Transactions/TransactionsTable';
import { AccountDetails } from 'src/components/modules/dashboard/AccountDetails/AccountDetails';
import { STATIC_TEXT } from 'src/constants/static-text';
import { Typography } from 'src/components/global';
import { DashboardPageProps } from 'src/pages/dashboard';

function DashboardPage({ statements, accountInfo }: DashboardPageProps) {
  return (
    <div className="bg-dashboardBg text-white">
      <Header />
      <div className="px-[112px] py-16">
        <Typography htmlElement="h1" className="text-5xl font-semibold text-white">
          {STATIC_TEXT.dashboard.heading}
        </Typography>
        <Typography className="pt-3 t">{STATIC_TEXT.dashboard.subHeading}</Typography>
        <AccountDetails accountInfo={accountInfo} />
      </div>
      <CardList cardList={cardList} />
      <div className="px-[112px] flex gap-8 pb-4">
        <StatementList statementList={statements} />
        <TransactionsTable transactionData={transactionData} />
      </div>
    </div>
  );
}

export default DashboardPage;
