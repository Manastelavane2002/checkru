import React, { useEffect, useState } from 'react';
import { Header, CardList } from 'src/components/modules/dashboard';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';
import { transactionData } from 'src/components/modules/dashboard/Transactions/Table.mock';
import StatementList from 'src/components/modules/dashboard/Statement/StatementList';
import TransactionsTable from 'src/components/modules/dashboard/Transactions/TransactionsTable';
import { AccountDetailsMock } from 'src/components/modules/dashboard/AccountDetails/AccountDetails.mock';
import { AccountDetails } from 'src/components/modules/dashboard/AccountDetails/AccountDetails';
import { STATIC_TEXT } from 'src/constants/static-text';
import { Typography } from 'src/components/global';

function DashboardPage() {
  const [statementList, setStatementList] = useState<StatementResponse['data']['statements']>([]);
  const func = async () => {
    try {
      const statements = await getStatementDataFrontend();
      if (statements.data && statements.isSuccess) {
        setStatementList(statements?.data?.statements);
      }
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  };
  useEffect(() => {
    func();
  }, []);

  return (
    <div className="bg-dashboardBg text-white">
      <Header />
      <div className="px-[112px] py-16">
        <Typography htmlElement="h1" className="text-5xl font-semibold text-white">
          {STATIC_TEXT.dashboard.heading}
        </Typography>
        <Typography className="pt-3 t">{STATIC_TEXT.dashboard.subHeading}</Typography>
        <AccountDetails accountData={AccountDetailsMock} />
      </div>
      <CardList cardList={cardList} />
      <div className="px-[112px] flex gap-8 pb-4">
        <StatementList statementList={statementList} />
        <TransactionsTable transactionData={transactionData} />
      </div>
    </div>
  );
}

export default DashboardPage;
