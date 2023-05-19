import React from 'react';
import SectionHeader from './SectionHeader';
import Statement from './Statement';
import { DOWNLOAD_TYPES } from './statement.types';

interface StatementListProps  {
  statementList:{
    downloadOptions: {
        onClick: () => void;
        title: string,
        type: DOWNLOAD_TYPES.CSV | DOWNLOAD_TYPES.PDF;
    }[]
    enabled: boolean; 
    title: string;
}[]
}

export function StatementList({statementList}: StatementListProps) {
  return (
    <div className='pl-[112px]'>
    <div className='w-3/12'>
      <SectionHeader/>
      <div className='flex flex-col'>
      {
        statementList.map((statement, index) => (
          <div key={index} className={`border-b-[1px] border-cellDividerStoke ${!statement.enabled?'bg-tableCell':'bg-dashboardBg'} hover:bg-dashboardBg`}>
            <div className='p-4 pl-6 text-sm leading-5 inter font-medium '>
                <Statement title={statement.title} downloadOptions={statement.downloadOptions}  />
            </div>
          </div>
        ))
      }
      </div>
    </div>
    </div>
  );
}

export default StatementList;