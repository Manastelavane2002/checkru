import React, { useEffect } from 'react';
import { Header, CardList } from 'src/components/modules/dashboard';
import { cardList } from 'src/components/modules/dashboard/Card/card.mock';
import { transactionData } from 'src/components/modules/dashboard/Transactions/Table.mock';
import StatementList from 'src/components/modules/dashboard/Statement/StatementList';
import TransactionsTable from 'src/components/modules/dashboard/Transactions/TransactionsTable';
import { getStatementDataFrontend } from 'src/api/frontend/statement';
import { StatementResponse } from 'src/api/types/CommonResponse';

function DashboardPage() {
  const [statementList, setStatementList] = React.useState<StatementResponse['data']['statements']>([]);
  const func = async () => {
    try {
      const statements = await getStatementDataFrontend();
      setStatementList(statements?.data?.statement);
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
      <CardList cardList={cardList} />
      <div className="px-[112px] flex gap-8 pb-4">
        <StatementList statementList={statementList} />
        <TransactionsTable transactionData={transactionData} />
      </div>
    </div>
  );
}

export default DashboardPage;
