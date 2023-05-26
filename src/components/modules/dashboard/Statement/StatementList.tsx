import React from 'react';
import SectionHeader from './SectionHeader';
import Statement from './Statement';
import { DOWNLOAD_TYPES } from './statement.types';
import { STATIC_TEXT } from 'src/constants/static-text';

interface StatementListProps {
  statementList: {
    availableCredit: number;
    creditLimit: number;
    downloadOptions?: {
      onClick: () => void;
      title: string;
      type: DOWNLOAD_TYPES.CSV | DOWNLOAD_TYPES.PDF;
    }[];
    endDate: string;
    minAmountDue: number;
    paymentDueDate: string;
    startDate: string;
    statementPeriod: string;
    totalAmountDue: number;
  }[];
}

export function StatementList({ statementList }: StatementListProps) {
  return (
    <div className="w-1/4">
      <SectionHeader text={STATIC_TEXT.dashboard.statementTableTitle} />
      <div className="flex flex-col">
        {statementList.map((statement, index) => (
          <div
            key={index}
            className={`border-b border-cellDividerStroke  bg-tableCell hover:bg-dashboardBg`}>
            <div className="h-16 flex item-center pl-6 pr-4 text-sm leading-5 inter font-medium ">
              <Statement title={statement.statementPeriod} downloadOptions={statement.downloadOptions || []} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatementList;
