import React from 'react';
import SectionHeader from './SectionHeader';
import Statement from './Statement';
import { DOWNLOAD_TYPES } from './statement.types';
import { STATIC_TEXT } from 'src/constants/static-text';

interface StatementListProps {
  statementList: {
    downloadOptions: {
      onClick: () => void;
      title: string;
      type: DOWNLOAD_TYPES.CSV | DOWNLOAD_TYPES.PDF;
    }[];
    enabled: boolean;
    title: string;
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
            className={`border-b border-cellDividerStroke ${
              !statement.enabled ? 'bg-tableCell' : 'bg-dashboardBg'
            } hover:bg-dashboardBg`}>
            <div className="h-16 flex item-center pl-6 pr-4 text-sm leading-5 inter font-medium ">
              <Statement title={statement.title} downloadOptions={statement.downloadOptions} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatementList;
