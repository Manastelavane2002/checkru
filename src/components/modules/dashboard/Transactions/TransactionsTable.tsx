import React from 'react';
import { TransactionDataProps } from './Transactions.types';
import { columnCreater } from './Transactions.utils';
import { Icon, Table } from 'src/components/global';
import SectionHeader from '../Statement/SectionHeader';
import { STATIC_TEXT } from 'src/constants/static-text';

export function TransactionsTable({ transactionData }: { transactionData: TransactionDataProps }) {
  return (
    <div className="w-3/4 h-fit rounded-lg border-0  bg-tableHeader">
      <SectionHeader
        text={STATIC_TEXT.dashboard.transactionTableTitle}
        showDatePicker
        className="rounded-t-lg"
      />
      <Table
        data={transactionData?.data ?? []}
        defaultPageSize={transactionData?.numberOfRows}
        enablePagination
        columns={[
          ...columnCreater(STATIC_TEXT.dashboard.transactionTableHeaders),
          {
            header: ' ',
            accessorKey: '',
            cell: () => <Icon name="download" />,
          },
        ]}
      />
    </div>
  );
}

export default TransactionsTable;
