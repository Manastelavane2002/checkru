import { useState } from 'react';
import * as React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import { Pagination } from '../Pagination/Pagination';
import { TableHead } from './components/TableHead';
import { TableBody } from './components/TableBody';
import { TableProps } from './Table.types';

/**
 * @param {TableProps} props
 * @returns Table component
 * @description This component is used to render Table which is built on top of Tanstack Table (React Table)
 * @example <Table
              data={transactionData?.data ?? []}
              defaultPageSize={transactionData?.numberOfRows}
              enablePagination
              columns={[
                {
                  header: 'Email',
                  accessorKey: 'email',
                },
                 {
                  header: 'Status',
                  accessorKey: 'status',
                },
                {
                  header: 'Result',
                  accessorKey: 'score',
                },
                {
                  header: ' ',
                  accessorKey: '',
                  cell: () => <Icon name="download" />,
                },
              ]}
            />
 */

export function Table({
  data,
  columns,
  enableRowSelection = false,
  enableSorting = false,
  enablePagination = false,
  cellProps = () => ({}),
  headerCellProps = () => ({}),
  rowProps = () => ({}),
  header,
  defaultPageSize = 10,
  defaultSorting,
  sorting,
  onSortingChange,
  onAllRowsSelectionChange,
  onRowSelection,
  className = '',
  handleClick,
}: TableProps<unknown>) {
  const [mouseOverRowIndex, setMouseOverRowIndex] = useState(-1);
  const table = useReactTable<unknown>({
    autoResetPageIndex: false,
    columns,
    data,
    debugTable: false,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    initialState: {
      pagination: {
        pageSize: defaultPageSize,
      },
      sorting: defaultSorting,
    },
    ...(sorting && {
      state: {
        sorting,
      },
    }),
    manualPagination: !enablePagination,
    meta: {
      mouseOverRowIndex,
    },
  });

  return (
    <>
      <div
        className={`border rounded-lg border-cellDividerStroke overflow-hidden ${className}`}
        onMouseLeave={() => setMouseOverRowIndex(-1)}>
        {header && <div>{header(table)}</div>}
        <div className={'overflow-auto border-t first:border-t-0 border-cellDividerStroke'}>
          <table className={'w-full'}>
            <TableHead
              table={table}
              headerCellProps={headerCellProps}
              enableSorting={enableSorting}
              enableRowSelection={enableRowSelection}
              sorting={sorting}
              onSortingChange={onSortingChange}
              onAllRowsSelectionChange={onAllRowsSelectionChange}
            />
            <TableBody
              table={table}
              enableRowSelection={enableRowSelection}
              cellProps={cellProps}
              onRowSelection={onRowSelection}
              onMouseOverRow={(row) => setMouseOverRowIndex(row.index)}
              rowProps={rowProps}
              handleClick={handleClick}
            />
          </table>
        </div>
      </div>
      {enablePagination && (
        <div className="bg-dashboardBg ">
          <Pagination
            count={table.getPageCount()}
            page={table.getState().pagination.pageIndex}
            onChange={(page) => table.setPageIndex(page)}
          />
        </div>
      )}
    </>
  );
}

export default Table;
